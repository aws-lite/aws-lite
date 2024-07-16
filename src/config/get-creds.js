let { exists, getHomedir, loadAwsConfig } = require('../lib')

// https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
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
  /* istanbul ignore next: TODO remove + test */
  if (SSOCreds) {
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
  let isInLambda = process.env.AWS_LAMBDA_FUNCTION_NAME
  if (isInLambda) return

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
  let request = require('../request')
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
    let endpoint = params._custom_sso_endpoint
      ? config.endpoint
      : `https://portal.sso.${sso_region}.amazonaws.com`
    let result = await request(
      // Request params
      {
        service: 'sso',
        endpoint,
        path: '/federation/credentials',
        query: {
          account_id: sso_account_id,
          role_name: sso_role_name,
        },
        headers: {
          'x-amz-sso_bearer_token': accessToken,
        },
      },

      // Dummy creds
      { accessKeyId: '', secretAccessKey: '' },

      // Region
      sso_region,

      // Config, force debug off so as to not print raw creds
      { ...config, debug: false },

      // Metadata
      { service: 'SSO' },
    )
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
