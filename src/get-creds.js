let { existsSync, readFileSync } = require('fs')
let { join } = require('path')
let os = require('os')
let ini = require('ini')

// https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
module.exports = function getCreds (params) {
  let paramsCreds = validate(params)
  if (paramsCreds) return paramsCreds

  let envCreds = getCredsFromEnv()
  if (envCreds) return envCreds

  let isInLambda = process.env.AWS_LAMBDA_FUNCTION_NAME
  if (!isInLambda) {
    let credsFileCreds = getCredsFromFile(params)
    if (credsFileCreds) return credsFileCreds
  }

  throw ReferenceError('You must supply AWS credentials via params, environment variables, or credentials file')
}

function getCredsFromEnv () {
  let env = process.env
  let accessKeyId =     env.AWS_ACCESS_KEY_ID || env.AWS_ACCESS_KEY
  let secretAccessKey = env.AWS_SECRET_ACCESS_KEY || env.AWS_SECRET_KEY
  let sessionToken =    env.AWS_SESSION_TOKEN

  return validate({ accessKeyId, secretAccessKey, sessionToken })
}

function getCredsFromFile (params) {
  let { AWS_SHARED_CREDENTIALS_FILE, AWS_PROFILE } = process.env
  let profile = params.profile || AWS_PROFILE || 'default'
  let home = os.homedir()

  let credsFile = AWS_SHARED_CREDENTIALS_FILE || join(home, '.aws', 'credentials')
  if (existsSync(credsFile)) {
    let file = readFileSync(credsFile)
    let creds = ini.parse(file.toString())

    if (!creds[profile]) {
      throw TypeError(`Profile not found: ${profile}`)
    }
    let {
      aws_access_key_id: accessKeyId,
      aws_secret_access_key: secretAccessKey,
      aws_session_toke: sessionToken,
    } = creds[profile]

    return validate({ accessKeyId, secretAccessKey, sessionToken })
  }
}

function validate ({ accessKeyId, secretAccessKey, sessionToken }) {
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
  return { accessKeyId, secretAccessKey, sessionToken }
}
