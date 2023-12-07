let { readFileSync } = require('fs')
let { join } = require('path')
let test = require('tape')
let mockTmp = require('mock-tmp')
let { defaults, overrideHomedir, resetAWSEnvVars } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'get-host.js')
let getHost = require(sut)

let { profile } = defaults
let mock = join(cwd, 'test', 'mock')
let configMock = join(mock, '.aws', 'config')

let localhost = 'localhost'
let fullHost = 'https://aws-lite.org'
let host = 'aws-lite.org'

test('Set up env', t => {
  t.plan(1)
  t.ok(getHost, 'getHost module is present')
})

test('Get host from passed params', async t => {
  t.plan(3)
  resetAWSEnvVars()
  let result

  result = await getHost({ host: fullHost })
  t.equal(result, host, 'Returned correct host from passed params')

  // Prioritize passed params before env or config file
  process.env.AWS_ENDPOINT_URL = localhost
  result = await getHost({ host: fullHost })
  t.equal(result, host, 'Returned correct host from passed params')
  resetAWSEnvVars()

  result = await getHost({ awsConfigFile: configMock, host: fullHost })
  t.equal(result, host, 'Returned correct host from passed params')
})

test('Get host from env vars', async t => {
  t.plan(2)
  resetAWSEnvVars()
  let result

  process.env.AWS_ENDPOINT_URL = localhost
  result = await getHost({})
  t.equal(result, localhost, 'Returned correct host from env var')
  resetAWSEnvVars()

  // Prioritize env vars before config file
  process.env.AWS_ENDPOINT_URL = localhost
  result = await getHost({ awsConfigFile: configMock })
  t.equal(result, localhost, 'Returned correct host from env var')
  resetAWSEnvVars()
})

test('Get host from config file', async t => {
  t.plan(5)
  resetAWSEnvVars()
  let result
  let profile1 = 'profile_1'
  let awsUrl = 'amazonaws.com'
  let lolUrl = 'lolidk.net'

  // Default config file location
  let configFile = join('.aws', 'config')
  let homedir = mockTmp({ [configFile]: readFileSync(configMock) })
  overrideHomedir(homedir)
  process.env.AWS_SDK_LOAD_CONFIG = true
  result = await getHost({ profile })
  t.equal(result, awsUrl, 'Returned correct host from config file (~/.aws file location) via env var')
  resetAWSEnvVars()

  result = await getHost({ awsConfigFile: true, profile })
  t.equal(result, awsUrl, 'Returned correct host from config file (~/.aws file location) via param')
  mockTmp.reset()

  // Configured file locations
  process.env.AWS_SDK_LOAD_CONFIG = true
  process.env.AWS_CONFIG_FILE = configMock
  result = await getHost({ profile })
  t.equal(result, awsUrl, 'Returned correct host from config file (default profile) via env var')
  resetAWSEnvVars()

  result = await getHost({ awsConfigFile: configMock, profile })
  t.equal(result, awsUrl, 'Returned correct host from config file (default profile) via param')

  result = await getHost({ awsConfigFile: configMock, profile: profile1 })
  t.equal(result, lolUrl, 'Returned correct host from config file (!default profile) via param')
})

test('Host not found (and that is ok)', async t => {
  t.plan(2)
  let result

  result = await getHost({ awsConfigFile: configMock, profile })
  t.ok(result, 'Got a host from a profile that has a host')

  result = await getHost({ awsConfigFile: configMock, profile: 'profile_2' })
  t.equal(result, undefined, 'Did not get a host from a profile that has no host')
})

test('Parse URLs', async t => {
  t.plan(5)
  let result

  result = await getHost({ host: 'http://localhost' })
  t.equal(result, localhost, 'Returned correctly parsed host')

  result = await getHost({ host: 'http://localhost:3333' })
  t.equal(result, localhost, 'Returned correctly parsed host')

  result = await getHost({ host: localhost })
  t.equal(result, localhost, 'Returned correctly parsed host')

  result = await getHost({ host: fullHost })
  t.equal(result, host, 'Returned correctly parsed host')

  result = await getHost({ host: host })
  t.equal(result, host, 'Returned correctly parsed host')
})

test('Tear down', t => {
  overrideHomedir.reset()
  t.end()
})
