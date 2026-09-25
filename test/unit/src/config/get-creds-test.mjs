import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import test from 'tape'
import mockTmp from 'mock-tmp'
import { defaults, overrideHomedir, resetAWSEnvVars, server } from '../../../lib/index.mjs'

let getCreds
let cwd = process.cwd()
let { host, port, profile } = defaults
let profile3 = 'profile_3'
let profile4 = 'profile_4'
let mock = join(cwd, 'test', 'mock')
let ok = 'foo'
let nope = 'bar'
let num = 1
let awsIniMock = join(mock, '.aws')
let awsSSOMock = join(mock, 'sso')
let credentialsMock = join(awsIniMock, 'credentials')

test('Set up env', async t => {
  t.plan(1)
  let sut = 'file://' + join(cwd, 'src', 'config', 'get-creds.js')
  getCreds = (await import(sut)).default
  t.ok(getCreds, 'getCreds module is present')
})

test('Get credentials from passed params', async t => {
  t.plan(4)
  resetAWSEnvVars()
  let passed, result

  // Key + secret only
  passed = { config: { accessKeyId: ok, secretAccessKey: ok } }
  result = await getCreds(passed)
  t.deepEqual(result, passed.config, 'Returned correct credentials from passed params')

  // Key + secret + sessionToken
  passed = { config: { accessKeyId: ok, secretAccessKey: ok, sessionToken: ok } }
  result = await getCreds(passed)
  t.deepEqual(result, passed.config, 'Returned correct credentials from passed params')

  // Prioritize passed params before env or creds file
  process.env.AWS_ACCESS_KEY_ID = nope
  process.env.AWS_SECRET_ACCESS_KEY = nope
  process.env.AWS_SESSION_TOKEN = nope
  result = await getCreds(passed)
  t.deepEqual(result, passed.config, 'Returned correct credentials from passed params')
  resetAWSEnvVars()

  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds(passed)
  t.deepEqual(result, passed.config, 'Returned correct credentials from passed params')
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
  result = await getCreds({ config: {} })
  t.deepEqual(result, { ...passed, sessionToken: undefined }, 'Returned correct credentials from env vars')

  // Key + secret + sessionToken
  process.env.AWS_SESSION_TOKEN = ok
  passed = { accessKeyId: ok, secretAccessKey: ok, sessionToken: ok }
  result = await getCreds({ config: {} })
  t.deepEqual(result, passed, 'Returned correct credentials from env vars')

  // Prioritize passed params before creds file
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({ config: {} })
  t.deepEqual(result, passed, 'Returned correct credentials from env vars')
  resetAWSEnvVars()
})

test('Get credentials from SSO', async t => {
  t.plan(19)
  let homedir, result, request
  let ssoPath = '.aws/sso/cache/1d4488e85b2549abce77758ec396e9e37332312b.json'
  let ssoSessionNamePath = '.aws/sso/cache/03f7c6869a0b1544548ead77b47666a8bd130c99.json'
  let started = await server.start()
  t.ok(started, 'Started server')

  let roleCredentials = {
    accessKeyId: 'sso_access_key_id',
    secretAccessKey: 'sso_secret_access_key',
    sessionToken: 'sso_session_token',
  }
  let validSSORequest = {
    config: {
      sso: { endpoint: `http://${host}:${port}` },
      profile: profile3,
    },
  }

  server.use({
    responseHeaders: { 'content-type': 'application/json' },
    responseBody: { roleCredentials },
  })

  homedir = mockTmp({
    '.aws': mockTmp.copy(awsIniMock),
    [ssoPath]: mockTmp.copy(join(awsSSOMock, 'valid.json')),
    [ssoSessionNamePath]: mockTmp.copy(join(awsSSOMock, 'valid.json')),
  })
  overrideHomedir(homedir)

  // Basic, all in one SSO configuration
  result = await getCreds({
    config: {
      sso: { endpoint: `http://${host}:${port}` },
      profile: profile3,
    },
  })
  request = server.getCurrentRequest()
  t.equal(request.url, '/federation/credentials?account_id=012345678901&role_name=lolidk', 'Fetched correct URL')
  t.equal(request.headers['x-amz-sso_bearer_token'], 'an-access-token', 'Used correct authorization header')
  t.deepEqual(result, roleCredentials, 'Fetched creds from SSO portal')

  // SSO configuration using `sso-session` config
  result = await getCreds({
    config: {
      sso: { endpoint: `http://${host}:${port}` },
      awsConfigFile: true,
      profile: profile4,
    },
  })
  request = server.getCurrentRequest()
  t.equal(request.url, '/federation/credentials?account_id=123456789012&role_name=eh', 'Fetched correct URL')
  t.equal(request.headers['x-amz-sso_bearer_token'], 'an-access-token', 'Used correct authorization header')
  t.deepEqual(result, roleCredentials, 'Fetched creds from SSO portal')

  // SSO profile with session name
  try {
    let result = await getCreds({
      config: {
        sso: { endpoint: `http://${host}:${port}` },
        profile: 'profile_with_session_name',
        awsConfigFile: true },
    })
    t.deepEqual(result, roleCredentials, 'Creds obtained using session name hash')
  }
  catch (err) {
    console.log(err)
    t.fail("Can't find cache token using session name hash")
  }

  mockTmp.reset()

  // Error states
  // The next two tests need a valid local config
  homedir = mockTmp({
    '.aws': mockTmp.copy(awsIniMock),
    [ssoPath]: mockTmp.copy(join(awsSSOMock, 'valid.json')),
  })
  overrideHomedir(homedir)
  process.env.AWS_LAMBDA_FUNCTION_NAME = true
  try {
    // Not an error, per se, but in Lambda this won't find creds, which will lead to an error
    await getCreds(validSSORequest)
  }
  catch (err) {
    t.match(err.message, /Unable to find AWS credentials/, 'Valid config will not load in Lambda')
  }
  delete process.env.AWS_LAMBDA_FUNCTION_NAME

  // SSO API failure
  server.use({
    responseStatusCode: 400,
    responseHeaders: { 'content-type': 'application/json' },
    responseBody: { message: 'oh noes' },
  })
  try {
    await getCreds(validSSORequest)
  }
  catch (err) {
    t.match(err.message, /SSO error: oh noes/, 'SSO API error bubbles')
  }
  mockTmp.reset()

  // Missing SSO token file
  homedir = mockTmp({ '.aws': mockTmp.copy(awsIniMock) })
  overrideHomedir(homedir)
  try {
    await getCreds({ config: { profile: profile3 } })
  }
  catch (err) {
    t.match(err.message, /Unable to find AWS credentials/, 'Valid config without an SSO token file errored')
  }

  // Missing SSO session config
  try {
    await getCreds({ config: { profile: 'invalid_missing_sso_session' } })
  }
  catch (err) {
    t.match(err.message, /Unable to load specified SSO session configuration: fourohfour/, 'Valid config with a missing SSO session errored')
  }

  // Missing required SSO data
  let missingProperties = [ 'sso_account_id', 'sso_region', 'sso_role_name' ]
  for (let prop of missingProperties) {
    try {
      await getCreds({ config: { profile: `invalid_missing_${prop}` } })
      t.fail('Expected an error')
    }
    catch (err) {
      let propText = `\`${prop}\` property`
      t.equal(err.message, `SSO configuration must have ${propText}`, `SSO config errored on missing ${propText}`)
    }
  }
  mockTmp.reset()

  // SSO token file validation
  homedir = mockTmp({
    '.aws': mockTmp.copy(awsIniMock),
    [ssoPath]: mockTmp.copy(join(awsSSOMock, 'missing-expiry.json')),
  })
  overrideHomedir(homedir)
  try {
    await getCreds({ config: { profile: profile3 } })
  }
  catch (err) {
    t.equal(err.message, 'SSO token file must have `expiresAt` property', 'SSO config errored on missing \`expiresAt\` property')
  }
  mockTmp.reset()

  homedir = mockTmp({
    '.aws': mockTmp.copy(awsIniMock),
    [ssoPath]: mockTmp.copy(join(awsSSOMock, 'missing-token.json')),
  })
  overrideHomedir(homedir)
  try {
    await getCreds({ config: { profile: profile3 } })
  }
  catch (err) {
    t.equal(err.message, 'SSO token file must have `accessToken` property', 'SSO config errored on missing \`accessToken\` property')
  }
  mockTmp.reset()

  homedir = mockTmp({
    '.aws': mockTmp.copy(awsIniMock),
    [ssoPath]: mockTmp.copy(join(awsSSOMock, 'expired-token.json')),
  })
  overrideHomedir(homedir)
  try {
    await getCreds({ config: { profile: profile3 } })
  }
  catch (err) {
    t.match(err.message, /SSO token is expired/, 'SSO config errored on expired token')
  }
  mockTmp.reset()

  await server.end()
  t.pass('Server ended')
})

test('Get credentials from config / credentials file', async t => {
  t.plan(5)
  resetAWSEnvVars()
  let result
  let profile1 = 'profile_1'
  let processProfile = 'profile_2'

  let defaultProfile = {
    accessKeyId: 'default_aws_access_key_id',
    secretAccessKey: 'default_aws_secret_access_key',
    sessionToken: undefined,
  }
  let nonDefaultProfile = {
    accessKeyId: 'profile_1_aws_access_key_id',
    secretAccessKey: 'profile_1_aws_secret_access_key',
    sessionToken: 'profile_1_aws_session_token',
  }
  let processProfileCreds = {
    accessKeyId: 'profile_2_aws_access_key_id',
    secretAccessKey: 'profile_2_aws_secret_access_key',
    sessionToken: undefined,
  }

  // Default credentials file location
  let credsFile = join('.aws', 'credentials')
  let homedir = mockTmp({ [credsFile]: readFileSync(credentialsMock) })
  overrideHomedir(homedir)
  result = await getCreds({ config: { profile } })
  t.deepEqual(result, defaultProfile, 'Returned correct credentials from credentials file (~/.aws file location)')
  mockTmp.reset()
  resetAWSEnvVars()

  // Configured file locations
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({ config: { profile } })
  t.deepEqual(result, defaultProfile, 'Returned correct credentials from credentials file (default profile)')
  resetAWSEnvVars()

  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({ config: { profile: profile1 } })
  t.deepEqual(result, nonDefaultProfile, 'Returned correct credentials from credentials file (!default profile)')
  resetAWSEnvVars()

  // Credentials from a process
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  result = await getCreds({ config: { profile: processProfile } })
  t.deepEqual(result, processProfileCreds, 'Returned correct credentials from credentials file (credentials process)')
  resetAWSEnvVars()

  // Credential file checks are skipped in Lambda
  process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
  process.env.AWS_LAMBDA_FUNCTION_NAME = 'true'
  try {
    await getCreds({ config: { profile } })
  }
  catch (err) {
    t.match(err.message, /Unable to find AWS credentials/, 'Did not look for credentials file on disk in Lambda')
  }
  resetAWSEnvVars()
})

test('Validate credentials', async t => {
  t.plan(8)
  resetAWSEnvVars()

  try {
    await getCreds({ config: { accessKeyId: num } })
  }
  catch (err) {
    t.match(err.message, /Access key must be a string/, 'Threw on invalid access key')
  }

  try {
    await getCreds({ config: { secretAccessKey: num } })
  }
  catch (err) {
    t.match(err.message, /Secret access key must be a string/, 'Threw on invalid secret key')
  }

  try {
    await getCreds({ config: { sessionToken: num } })
  }
  catch (err) {
    t.match(err.message, /Session token must be a string/, 'Threw on invalid session token')
  }

  try {
    await getCreds({ config: { accessKeyId: ok } })
  }
  catch (err) {
    t.match(err.message, /You must supply both an access key ID & secret access key/, 'Threw on invalid credentials combo')
  }

  try {
    await getCreds({ config: { secretAccessKey: ok } })
  }
  catch (err) {
    t.match(err.message, /You must supply both an access key ID & secret access key/, 'Threw on invalid credentials combo')
  }

  try {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    await getCreds({ config: { sessionToken: ok } })
  }
  catch (err) {
    t.match(err.message, /Unable to find AWS credentials/, 'Threw on invalid credentials combo')
  }

  try {
    process.env.AWS_SHARED_CREDENTIALS_FILE = credentialsMock
    process.env.AWS_PROFILE = 'idk'
    await getCreds({ config: {} })
  }
  catch (err) {
    t.match(err.message, /Profile not found/, 'Threw on missing profile')
  }
  resetAWSEnvVars()

  try {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    await getCreds({ config: {} })
  }
  catch (err) {
    t.match(err.message, /Unable to find AWS credentials/, 'Threw on no available credentials')
  }
  resetAWSEnvVars()
})

test('Tear down', t => {
  overrideHomedir.reset()
  t.end()
})
