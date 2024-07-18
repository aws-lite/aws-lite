let { exists, getHomedir, isInLambda, loadAwsConfig, readFile } = require('../lib')

/**
 * Credential provider chain order
 * - Params
 * - Env
 * - SSO
 * - Configuration files (~/.aws/[credentials|config], etc.)
 * - Process
 * - Token file
 * - IMDS (aka "remote provider"): container (ECS) then instance (EC2) metadata
 * See also: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
 */
module.exports = async function getCreds (params) {
  let { config, awsConfig } = params

  let configCreds = validate(config)
  if (configCreds) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Loaded credentials from client configuration`)
    }
    return configCreds
  }

  let envCreds = getCredsFromEnv()
  if (envCreds) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Loaded credentials from environment variables`)
    }
    return envCreds
  }

  // Only check for an AWS config if absolutely necessary since it's multiple filesystem reads
  awsConfig = params.awsConfig = (awsConfig || await loadAwsConfig(config))

  let SSOStart = Date.now()
  let SSOCreds = await getCredsFromSSO(params)
  if (SSOCreds) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Loaded credentials from AWS SSO in ${Date.now() - SSOStart}ms`)
    }
    return SSOCreds
  }

  let profile = awsConfig?.currentProfile
  if (awsConfig && profile) {
    let accessKeyId
    let secretAccessKey
    let sessionToken
    if (profile.credential_process) {
      /* istanbul ignore next */
      if (config.debug) {
        console.error(`[aws-lite] Loading credentials from process: ${profile.credential_process}`)
      }
      let { execSync } = require('child_process')
      let result = execSync(profile.credential_process, { encoding: 'utf8' })
      ;({
        AccessKeyId: accessKeyId,
        SecretAccessKey: secretAccessKey,
        SessionToken: sessionToken,
      } = JSON.parse(result))
    }
    else {
      /* istanbul ignore next */
      if (config.debug) {
        console.error(`[aws-lite] Loading credentials from AWS profile`)
      }
      ({
        aws_access_key_id: accessKeyId,
        aws_secret_access_key: secretAccessKey,
        aws_session_token: sessionToken,
      } = profile)
    }
    let profileCreds = validate({ accessKeyId, secretAccessKey, sessionToken })
    if (profileCreds) return profileCreds
  }

  let IMDSStart = Date.now()
  let IMDSCreds = await getCredsFromIMDS(params)
  /* istanbul ignore next: TODO remove + test */
  if (IMDSCreds) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Loaded credentials from IMDS in ${Date.now() - IMDSStart}ms`)
    }
    return IMDSCreds
  }

  throw ReferenceError('Unable to find AWS credentials via params, environment variables, SSO, or credential / config files')
}

function getCredsFromEnv () {
  let env = process.env
  let accessKeyId =     env.AWS_ACCESS_KEY_ID || env.AWS_ACCESS_KEY
  let secretAccessKey = env.AWS_SECRET_ACCESS_KEY || env.AWS_SECRET_KEY
  let sessionToken =    env.AWS_SESSION_TOKEN

  return validate({ accessKeyId, secretAccessKey, sessionToken })
}

async function getCredsFromSSO (params) {
  // Don't attempt to load credentials from the filesystem when in Lambda
  if (isInLambda()) return

  let { config, awsConfig } = params
  if (!awsConfig) return

  let profile = awsConfig.currentProfile
  let sessionConfig = {}
  if (profile?.sso_session) {
    let sessionName = `sso-session ${profile.sso_session}`
    let foundSessionConfig = awsConfig?.profiles?.[sessionName] ||
                             awsConfig?.config?.[sessionName]
    if (foundSessionConfig) sessionConfig = foundSessionConfig
    else {
      throw ReferenceError(`Unable to load specified SSO session configuration: ${profile.sso_session}`)
    }
  }
  let ssoConfig = { ...profile, ...sessionConfig }
  let { sso_account_id, sso_region, sso_role_name, sso_start_url } = ssoConfig

  // This isn't an SSO profile; possible this may provide to be a brittle test predicate
  if (!sso_start_url) return

  if (!sso_account_id) {
    throw ReferenceError('SSO configuration must have `sso_account_id` property')
  }
  if (!sso_region) {
    throw ReferenceError('SSO configuration must have `sso_region` property')
  }
  if (!sso_role_name) {
    throw ReferenceError('SSO configuration must have `sso_role_name` property')
  }

  let { join } = require('node:path')
  let { createHash } = require('node:crypto')
  let ssoFile = createHash('sha1').update(sso_start_url).digest('hex') + '.json'

  let home = getHomedir()
  let ssoFilename = join(home, '.aws', 'sso', 'cache', ssoFile)
  let { readFile } = require('node:fs/promises')
  if (!(await exists(ssoFilename))) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Could not find AWS SSO token file at ${ssoFilename}`)
    }
    return
  }

  try {
    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Loading credentials from AWS SSO token file at ${ssoFilename}`)
    }

    let ssoData = JSON.parse(await readFile(ssoFilename))
    let { accessToken, expiresAt } = ssoData
    if (!accessToken) {
      throw ReferenceError('SSO token file must have `accessToken` property')
    }
    if (!expiresAt) {
      throw ReferenceError('SSO token file must have `expiresAt` property')
    }
    let isExpired = new Date(expiresAt).getTime() - Date.now() <= 0
    if (isExpired) {
      throw Error('SSO token is expired, please refresh by running: aws sso login [options]')
    }

    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Requesting credentials from AWS IAM Identity Center`)
    }
    /* istanbul ignore next */
    let endpoint = config?.sso?.endpoint
      ? config.sso.endpoint
      : `https://portal.sso.${sso_region}.amazonaws.com`
    let result = await request({
      params: {
        service: 'sso',
        endpoint,
        path: '/federation/credentials',
        query: {
          account_id: sso_account_id,
          role_name: sso_role_name,
        },
        headers: { 'x-amz-sso_bearer_token': accessToken },
      },
      region: sso_region,
      service: 'SSO',
    })
    let { roleCredentials } = result.payload
    return validate(roleCredentials)
  }
  catch (err) {
    console.error('Failed to load credentials via AWS IAM Identity Center')
    if (err?.error?.message) {
      throw new Error('SSO error: ' + err.error.message)
    }
    throw err
  }
}

/* istanbul ignore next: TODO remove + test */
async function getCredsFromIMDS (params) {
  // Don't attempt to load credentials from IMDS when in Lambda
  if (isInLambda()) return

  let { config, awsConfig } = params
  let {
    // ECS
    AWS_CONTAINER_AUTHORIZATION_TOKEN: token,
    AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE,
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI,
    AWS_CONTAINER_CREDENTIALS_FULL_URI,
    // EC2
    AWS_EC2_METADATA_DISABLED,
    AWS_EC2_METADATA_SERVICE_ENDPOINT,
    AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,
  } = process.env
  let service = 'imds' // Not an actual service

  // ECS first
  if (AWS_CONTAINER_CREDENTIALS_RELATIVE_URI || AWS_CONTAINER_CREDENTIALS_FULL_URI) {
    let ECSIP = '169.254.170.2'
    let endpoint = AWS_CONTAINER_CREDENTIALS_FULL_URI
      ? AWS_CONTAINER_CREDENTIALS_FULL_URI
      // Rel URI is assumed to be prepended with `/`
      : `http://${ECSIP}${AWS_CONTAINER_CREDENTIALS_RELATIVE_URI}`

    if (!token && AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE) {
      /* istanbul ignore next */
      if (config.debug) {
        console.error(`[aws-lite] Loading token from auth token file at: ${AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE}`)
      }
      token = (await readFile(AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE)).toString().trim()
    }
    if (!token) {
      throw ReferenceError('ECS IMDSv2 token not found')
    }

    try {
      let result = await request({
        params: {
          service,
          endpoint,
          headers: { Authorization: token },
        },
        service: 'ECS IMDSv2',
      })
      return validate(result.payload)
    }
    catch (err) {
      console.error('Failed to load credentials via ECS IMDSv2')
      if (err?.error?.message) {
        throw new Error('ECS IMDSv2 error: ' + err.error.message)
      }
      throw err
    }
  }

  // EC2 next
  if (AWS_EC2_METADATA_DISABLED) return

  let profile = awsConfig?.currentProfile
  let defaultEndpoints = {
    IPv4: 'http://169.254.169.254',
    IPv6: 'http://[fd00:ec2::254]',
  }

  let endpoint =  config?.imds?.endpoint ||
                  AWS_EC2_METADATA_SERVICE_ENDPOINT ||
                  profile?.ec2_metadata_service_endpoint
  let mode =      config?.imds?.endpointMode ||
                  AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE ||
                  profile?.ec2_metadata_service_endpoint_mode
  if (defaultEndpoints[mode]) {
    endpoint = defaultEndpoints[mode]
  }
  if (!endpoint) return

  try {
    let path = '/latest/meta-data/iam/security-credentials/'

    // Get the IMDS token first
    let token = (await request({
      params: {
        method: 'PUT',
        endpoint,
        path: '/latest/api/token',
        headers: {
          'x-aws-ec2-metadata-token-ttl-seconds': '21600',
        },
      },
      service: 'IMDSv2 token API',
    })).payload.toString()

    // Now load the profile
    let profile = (await request({
      params: {
        endpoint,
        path,
        service,
        headers: { 'x-aws-ec2-metadata-token': token },
      },
      service: 'IMDSv2 profile',
    })).payload.toString()

    // Finally, get the credentials
    let credResponse = await request({
      params: {
        endpoint,
        path: path + profile,
        service,
        headers: { 'x-aws-ec2-metadata-token': token },
      },
      service: 'IMDSv2 credentials',
    })
    return validate(credResponse.payload)
  }
  catch (err) {
    console.error('Failed to load credentials via ECS IMDSv2')
    if (err?.error?.message) {
      throw new Error('ECS IMDSv2 error: ' + err.error.message)
    }
    throw err
  }
}

function validate (creds) {
  let { accessKeyId, secretAccessKey, sessionToken } = creds
  if (accessKeyId && typeof accessKeyId !== 'string') {
    throw TypeError('Access key must be a string')
  }
  if (secretAccessKey && typeof secretAccessKey !== 'string') {
    throw TypeError('Secret access key must be a string')
  }
  if (sessionToken && typeof sessionToken !== 'string') {
    throw TypeError('Session token must be a string')
  }

  if ((accessKeyId && !secretAccessKey) ||
      (!accessKeyId && secretAccessKey)) {
    let msg = 'You must supply both an access key ID & secret access key'
    throw ReferenceError(msg)
  }

  if (!accessKeyId && !secretAccessKey) {
    return false
  }
  return creds
}

let req
async function request ({ params, region, config, service }) {
  /* istanbul ignore next */
  region = region || ''
  if (!req) req = require('../request')
  return await req(
    // Request input
    params,

    // Dummy creds to satisfy signing
    { accessKeyId: '', secretAccessKey: '' },

    region,

    // Force debug off so as to not print raw creds
    { ...config, debug: false },

    // Metadata
    { service },
  )
}
