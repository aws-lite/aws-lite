let { exists, getHomedir, isInLambda, loadAwsConfig, readFile } = require('../lib')
let testing = require('../testing')
let noConnection = /(EHOSTDOWN|ECONNREFUSED|EHOSTUNREACH|ECONNRESET|ETIMEDOUT|Unknown system errno 64)/g

/**
 * Credential provider chain order
 * - Params
 * - Env
 * - SSO
 * - Configuration files (~/.aws/[credentials|config], etc.)
 * - Process
 * - TODO: Token file
 * - IMDS (aka "remote provider"): container (ECS) then instance (EC2) metadata
 * See also: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
 */
module.exports = async function getCreds (params) {
  let { config, awsConfig } = params

  if (testing.isEnabled()) {
    return { accessKeyId: 'testing', secretAccessKey: 'testing' }
  }

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

  // TODO:
  // let tokenFileCreds = await getCredsFromTokenFileCreds(params)
  // if (tokenFileCreds) {
  //   /* istanbul ignore next */
  //   if (config.debug) {
  //     console.error(`[aws-lite] Loaded credentials from token file credentials`)
  //   }
  //   return tokenFileCreds
  // }

  let IMDSStart = Date.now()
  let IMDSCreds = await getCredsFromIMDS(params)
  /* istanbul ignore next: TODO remove + test */
  if (IMDSCreds) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error(`[aws-lite] Loaded credentials from IMDSv2 in ${Date.now() - IMDSStart}ms`)
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
      let creds = result.payload
      try { creds = JSON.parse(creds) }
      catch { /* noop */ }
      return validate(normalize(creds))
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
  if (AWS_EC2_METADATA_DISABLED) {
    if (config.debug) {
      console.error(`[aws-lite] IMDSv2 disabled via AWS_EC2_METADATA_DISABLED env var`)
    }
    return
  }

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
  if (!endpoint) endpoint = defaultEndpoints.IPv4

  try {
    let IMDSHostIsAvailable = await checkHost(endpoint, config.debug)
    if (!IMDSHostIsAvailable) {
      if (config.debug) {
        console.error(`[aws-lite] IMDSv2 host is unavailable: ${endpoint}`)
      }
      return
    }

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
    let result = await request({
      params: {
        endpoint,
        path: path + profile,
        service,
        headers: { 'x-aws-ec2-metadata-token': token },
      },
      service: 'IMDSv2 credentials',
    })
    // Response `content-type` is `text/plain`, so that's something
    let creds = result.payload
    try { creds = JSON.parse(creds) }
    catch { /* noop */ }
    return validate(normalize(creds))
  }
  catch (err) {
    // Windows GitHub Actions runs IIS, thus throwing false positive errors
    if (err.statusCode === 400 &&
      err.headers.server?.includes('Microsoft-IIS') &&
      process.env.GITHUB_ACTIONS) {
      return
    }

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

// Check if the IMDS host is up before connecting
/* istanbul ignore next */
function checkHost (endpoint, debug) {
  return new Promise((res, rej) => {
    try {
      if (hostCache[endpoint] !== undefined) {
        res(hostCache[endpoint])
      }
      let { hostname: host, port } = new URL(endpoint)
      port = port || (endpoint?.startsWith('https:') ? 443 : 80)
      let net = require('node:net')
      if (debug) {
        console.error(`[aws-lite] Checking IMDSv2 host; ${host}:${port}`)
      }
      // Amazon's default timeout: 1 second. Seems kind of excessive, if you ask me.
      let socket = net.createConnection({ host, port, timeout: 1000 })
      socket.on('timeout', () => {
        if (debug) {
          console.error(`[aws-lite] IMDSv2 host timed out`)
        }
        terminate()
        hostCache[endpoint] = false
        res(hostCache[endpoint])
      })
      socket.on('connect', () => {
        if (debug) {
          console.error(`[aws-lite] IMDSv2 host is available`)
        }
        terminate()
        hostCache[endpoint] = true
        res(hostCache[endpoint])
      })
      socket.on('error', err => {
        if (debug) {
          console.error(`[aws-lite] IMDSv2 connection error`, err)
        }
        terminate()
        if (err.code.match(noConnection)) {
          hostCache[endpoint] = false
          res(hostCache[endpoint])
        }
        else rej(err)
      })
      function terminate () {
        if (!socket.destroyed) socket.destroy()
      }
    }
    catch (err) {
      if (debug) {
        console.error(`[aws-lite] IMDSv2 checkHost util error`, err)
      }
      rej(err)
    }
  })
}

// Assume if IMDS is (un)available, it will remain that way
let hostCache = {}

// IMDS response normalizer
/* istanbul ignore next */
function normalize (creds) {
  if (!creds.AccessKeyId || !creds.SecretAccessKey || !creds.Token) {
    throw ReferenceError('Invalid IMDSv2 response or missing credentials')
  }
  return {
    accessKeyId:      creds.AccessKeyId,
    secretAccessKey:  creds.SecretAccessKey,
    sessionToken:     creds.Token,
    expiration:       new Date(creds.Expiration),
  }
}
