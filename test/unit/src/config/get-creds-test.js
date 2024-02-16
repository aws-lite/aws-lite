let { readFileSync } = require('fs')
let { join } = require('path')
let test = require('tape')
let mockTmp = require('mock-tmp')
let { defaults, overrideHomedir, resetAWSEnvVars } = require('../../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'config', 'get-creds.js')
let getCreds = require(sut)

let { profile } = defaults
let mock = join(cwd, 'test', 'mock')
let ok = 'foo'
let nope = 'bar'
let num = 1
let credentialsMock = join(mock, '.aws', 'credentials')

test('Set up env', t => {
  t.plan(1)
  t.ok(getCreds, 'getCreds module is present')
})

test('Get credentials from passed params', async t => {
  t.plan(4)
  resetAWSEnvVars()
  let passed, result

  // Key + secret only
  passed = { accessKeyId: ok, secretAccessKey: ok }
  result = await getCreds(passed)
  t.deepEqual(result, { ...passed, sessionToken: undefined }, 'Returned correct credentials from passed params')

  // Key + secret + sessionToken
  passed = { accessKeyId: ok, secretAccessKey: ok, sessionToken: ok }
  result = await getCreds(passed)
  t.deepEqual(result, passed, 'Returned correct credentials from passed params')

  // Prioritize passed params before env or creds file
  process.env.AWS_ACCESS_KEY_ID = nope
  process.env.AWS_SECRET_ACCESS_KEY = nope
  process.env.AWS_SESSION_TOKEN = nope
  result = await getCreds(passed)
  t.deepEqual(result, passed, 'Returned correct credentials from passed params')
  resetAWSEnvVars()

  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds(passed)
  t.deepEqual(result, passed, 'Returned correct credentials from passed params')
  resetAWSEnvVars()
})

test('Get credentials from env vars', async t => {
  t.plan(3)
  resetAWSEnvVars()
  let passed, result

  process.env.AWS_ACCESS_KEY_ID = ok
  process.env.AWS_SECRET_ACCESS_KEY = ok

  // Key + secret only
  passed = { accessKeyId: ok, secretAccessKey: ok }
  result = await getCreds({})
  t.deepEqual(result, { ...passed, sessionToken: undefined }, 'Returned correct credentials from env vars')

  // Key + secret + sessionToken
  process.env.AWS_SESSION_TOKEN = ok
  passed = { accessKeyId: ok, secretAccessKey: ok, sessionToken: ok }
  result = await getCreds({})
  t.deepEqual(result, passed, 'Returned correct credentials from env vars')

  // Prioritize passed params before creds file
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({})
  t.deepEqual(result, passed, 'Returned correct credentials from env vars')
  resetAWSEnvVars()
})

test('Get credentials from credentials file', async t => {
  t.plan(5)
  resetAWSEnvVars()
  let result
  let profile1 = 'profile_1'
  let processProfile = 'profile_2'

  let defaultProfile = {
    accessKeyId: 'default_aws_access_key_id',
    secretAccessKey: 'default_aws_secret_access_key',
    sessionToken: undefined
  }
  let nonDefaultProfile = {
    accessKeyId: 'profile_1_aws_access_key_id',
    secretAccessKey: 'profile_1_aws_secret_access_key',
    sessionToken: 'profile_1_aws_session_token'
  }
  let processProfileCreds = {
    accessKeyId: 'profile_2_aws_access_key_id',
    secretAccessKey: 'profile_2_aws_secret_access_key',
    sessionToken: undefined
  }

  // Default credentials file location
  let credsFile = join('.aws', 'credentials')
  let homedir = mockTmp({ [credsFile]: readFileSync(credentialsMock) })
  overrideHomedir(homedir)
  result = await getCreds({ profile })
  t.deepEqual(result, defaultProfile, 'Returned correct credentials from credentials file (~/.aws file location)')
  mockTmp.reset()
  resetAWSEnvVars()

  // Configured file locations
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({ profile })
  t.deepEqual(result, defaultProfile, 'Returned correct credentials from credentials file (default profile)')
  resetAWSEnvVars()

  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({ profile: profile1 })
  t.deepEqual(result, nonDefaultProfile, 'Returned correct credentials from credentials file (!default profile)')
  resetAWSEnvVars()

  // Credentials from a process
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({ profile: processProfile })
  t.deepEqual(result, processProfileCreds, 'Returned correct credentials from credentials file (credentials process)')
  resetAWSEnvVars()

  // Credential file checks are skipped in Lambda
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  process.env.AWS_LAMBDA_FUNCTION_NAME = 'true'
  try {
    await getCreds({ profile })
  }
  catch (err) {
    t.match(err.message, /You must supply AWS credentials via/, 'Did not look for credentials file on disk in Lambda')
  }
  resetAWSEnvVars()
})

test('Validate credentials', async t => {
  t.plan(8)
  resetAWSEnvVars()

  try {
    await getCreds({ accessKeyId: num })
  }
  catch (err) {
    t.match(err.message, /Access key must be a string/, 'Threw on invalid access key')
  }

  try {
    await getCreds({ secretAccessKey: num })
  }
  catch (err) {
    t.match(err.message, /Secret access key must be a string/, 'Threw on invalid secret key')
  }

  try {
    await getCreds({ sessionToken: num })
  }
  catch (err) {
    t.match(err.message, /Session token must be a string/, 'Threw on invalid session token')
  }

  try {
    await getCreds({ accessKeyId: ok })
  }
  catch (err) {
    t.match(err.message, /You must supply both an access key ID & secret access key/, 'Threw on invalid credentials combo')
  }

  try {
    await getCreds({ secretAccessKey: ok })
  }
  catch (err) {
    t.match(err.message, /You must supply both an access key ID & secret access key/, 'Threw on invalid credentials combo')
  }

  try {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    await getCreds({ sessionToken: ok })
  }
  catch (err) {
    t.match(err.message, /You must supply AWS credentials via/, 'Threw on invalid credentials combo')
  }

  try {
    process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
    process.env.AWS_PROFILE = 'idk'
    await getCreds({})
  }
  catch (err) {
    t.match(err.message, /Profile not found/, 'Threw on missing profile')
  }
  resetAWSEnvVars()

  try {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    await getCreds({})
  }
  catch (err) {
    t.match(err.message, /You must supply AWS credentials via params, environment variables, or credentials file/, 'Threw on no available credentials')
  }
  resetAWSEnvVars()
})

test('Tear down', t => {
  overrideHomedir.reset()
  t.end()
})
