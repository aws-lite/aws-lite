let os = require('os')
let { join } = require('path')
let test = require('tape')
let mockFs = require('mock-fs')
let { resetAWSEnvVars } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'get-creds.js')
let getCreds = require(sut)

let mock = join(cwd, 'test', 'mock')
let ok = 'foo'
let nope = 'bar'
let num = 1
let credentialsMock = join(mock, '.aws', 'credentials')

test('Set up env', t => {
  t.plan(1)
  t.ok(getCreds, 'getCreds module is present')
})

test('Get credentials from passed params', t => {
  t.plan(4)
  resetAWSEnvVars()
  let passed, result

  // Key + secret only
  passed = { accessKeyId: ok, secretAccessKey: ok }
  result = getCreds(passed)
  t.deepEqual(result, { ...passed, sessionToken: undefined }, 'Returned correct credentials from passed params')

  // Key + secret + sessionToken
  passed = { accessKeyId: ok, secretAccessKey: ok, sessionToken: ok }
  result = getCreds(passed)
  t.deepEqual(result, passed, 'Returned correct credentials from passed params')

  // Prioritize passed params before env or creds file
  process.env.AWS_ACCESS_KEY_ID = nope
  process.env.AWS_SECRET_ACCESS_KEY = nope
  process.env.AWS_SESSION_TOKEN = nope
  result = getCreds(passed)
  t.deepEqual(result, passed, 'Returned correct credentials from passed params')
  resetAWSEnvVars()

  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = getCreds(passed)
  t.deepEqual(result, passed, 'Returned correct credentials from passed params')
  resetAWSEnvVars()
})

test('Get credentials from env vars', t => {
  t.plan(3)
  resetAWSEnvVars()
  let passed, result

  process.env.AWS_ACCESS_KEY_ID = ok
  process.env.AWS_SECRET_ACCESS_KEY = ok

  // Key + secret only
  passed = { accessKeyId: ok, secretAccessKey: ok }
  result = getCreds({})
  t.deepEqual(result, { ...passed, sessionToken: undefined }, 'Returned correct credentials from env vars')

  // Key + secret + sessionToken
  process.env.AWS_SESSION_TOKEN = ok
  passed = { accessKeyId: ok, secretAccessKey: ok, sessionToken: ok }
  result = getCreds({})
  t.deepEqual(result, passed, 'Returned correct credentials from env vars')

  // Prioritize passed params before creds file
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = getCreds({})
  t.deepEqual(result, passed, 'Returned correct credentials from env vars')
  resetAWSEnvVars()
})

test('Get credentials from credentials file', t => {
  t.plan(5)
  resetAWSEnvVars()
  let result
  let profile = 'profile_1'

  let defaultProfile = {
    accessKeyId: 'default_aws_access_key_id',
    secretAccessKey: 'default_aws_secret_access_key',
    sessionToken: undefined
  }
  let nonDefaultProfile = {
    accessKeyId: 'profile_1_aws_access_key_id',
    secretAccessKey: 'profile_1_aws_secret_access_key',
    sessionToken: undefined
  }

  // Default credentials file location
  let home = os.homedir()
  let credsFile = join(home, '.aws', 'credentials')
  mockFs({ [credsFile]: mockFs.load(credentialsMock) })
  result = getCreds({})
  t.deepEqual(result, defaultProfile, 'Returned correct credentials from credentials file (~/.aws file location)')
  mockFs.restore()
  resetAWSEnvVars()

  // Configured file locations
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = getCreds({})
  t.deepEqual(result, defaultProfile, 'Returned correct credentials from credentials file (default profile)')
  resetAWSEnvVars()

  // params.profile
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = getCreds({ profile: 'profile_1' })
  t.deepEqual(result, nonDefaultProfile, 'Returned correct credentials from credentials file (params.profile)')
  resetAWSEnvVars()

  // AWS_PROFILE env var
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  process.env.AWS_PROFILE = profile
  result = getCreds({})
  t.deepEqual(result, nonDefaultProfile, 'Returned correct credentials from credentials file (AWS_PROFILE env var)')
  resetAWSEnvVars()

  // Credential file checks are skipped in Lambda
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  process.env.AWS_LAMBDA_FUNCTION_NAME = 'true'
  t.throws(() => {
    getCreds({})
  }, /You must supply AWS credentials via/, 'Did not look for credentials file on disk in Lambda')
  resetAWSEnvVars()
})

test('Validate credentials', t => {
  t.plan(8)
  resetAWSEnvVars()

  t.throws(() => {
    getCreds({ accessKeyId: num })
  }, /Access key must be a string/, 'Threw on invalid access key')

  t.throws(() => {
    getCreds({ secretAccessKey: num })
  }, /Secret access key must be a string/, 'Threw on invalid secret key')

  t.throws(() => {
    getCreds({ sessionToken: num })
  }, /Session token must be a string/, 'Threw on invalid session token')

  t.throws(() => {
    getCreds({ accessKeyId: ok })
  }, /You must supply both an access key ID & secret access key/, 'Threw on invalid credentials combo')

  t.throws(() => {
    getCreds({ secretAccessKey: ok })
  }, /You must supply both an access key ID & secret access key/, 'Threw on invalid credentials combo')

  t.throws(() => {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    getCreds({ sessionToken: ok })
  }, /You must supply AWS credentials via/, 'Threw on invalid credentials combo')

  t.throws(() => {
    process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
    process.env.AWS_PROFILE = 'idk'
    getCreds({})
  }, /Profile not found/, 'Threw on missing profile')
  resetAWSEnvVars()

  t.throws(() => {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    getCreds({})
  }, /You must supply AWS credentials via params, environment variables, or credentials file/, 'Threw on no available credentials')
  resetAWSEnvVars()
})
