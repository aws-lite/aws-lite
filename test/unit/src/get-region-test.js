let { readFileSync } = require('fs')
let { join } = require('path')
let test = require('tape')
let mockTmp = require('mock-tmp')
let { overrideHomedir, resetAWSEnvVars } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'get-region.js')
let getRegion = require(sut)

let mock = join(cwd, 'test', 'mock')
let east1 = 'us-east-1'
let west1 = 'us-west-1'
let west2 = 'us-west-2'
let num = 1
let configMock = join(mock, '.aws', 'config')

test('Set up env', t => {
  t.plan(1)
  t.ok(getRegion, 'getRegion module is present')
})

test('Get region from passed params', async t => {
  t.plan(1)
  let region = east1
  let result = await getRegion({ region })
  t.equal(result, region, 'Returned correct region from passed params')
})

test('Get region from env vars', async t => {
  t.plan(3)
  resetAWSEnvVars()
  let result

  process.env.AWS_REGION = east1
  result = await getRegion({})
  t.equal(result, east1, 'Returned correct region from env vars')
  resetAWSEnvVars()

  process.env.AWS_DEFAULT_REGION = east1
  result = await getRegion({})
  t.equal(result, east1, 'Returned correct region from env vars')
  resetAWSEnvVars()

  process.env.AMAZON_REGION = east1
  result = await getRegion({})
  t.equal(result, east1, 'Returned correct region from env vars')
  resetAWSEnvVars()
})

test('Get region from config file', async t => {
  t.plan(7)
  resetAWSEnvVars()
  let result
  let profile = 'profile_1'

  // Default config file location
  let configFile = join('.aws', 'config')
  let homedir = mockTmp({ [configFile]: readFileSync(configMock) })
  overrideHomedir(homedir)
  process.env.AWS_SDK_LOAD_CONFIG = true
  result = await getRegion({})
  t.equal(result, west1, 'Returned correct region from config file (~/.aws file location) via env var')
  resetAWSEnvVars()

  result = await getRegion({ awsConfigFile: true })
  t.equal(result, west1, 'Returned correct region from config file (~/.aws file location) via param')
  mockTmp.reset()

  // Configured file locations
  process.env.AWS_SDK_LOAD_CONFIG = true
  process.env.AWS_CONFIG_FILE = configMock
  result = await getRegion({})
  t.equal(result, west1, 'Returned correct region from config file (default profile) via env var')
  resetAWSEnvVars()

  result = await getRegion({ awsConfigFile: configMock })
  t.equal(result, west1, 'Returned correct region from config file (default profile) via param')

  // params.profile
  result = await getRegion({ awsConfigFile: configMock, profile: 'profile_1' })
  t.equal(result, west2, 'Returned correct region from config file (params.profile)')

  // AWS_PROFILE env var
  process.env.AWS_PROFILE = profile
  result = await getRegion({ awsConfigFile: configMock })
  t.equal(result, west2, 'Returned correct region from config file (AWS_PROFILE env var)')

  // Config file checks are skipped in Lambda
  process.env.AWS_LAMBDA_FUNCTION_NAME = 'true'
  try {
    await getRegion({ awsConfigFile: configMock })
  }
  catch (err) {
    t.match(err.message, /You must supply an AWS region/, 'Did not look for config file on disk in Lambda')
  }
  resetAWSEnvVars()
})

test('Allow !aws regions when specifying a custom host', async t => {
  t.plan(1)
  let region = 'nonstandard-region'
  let result = await getRegion({ host: 'idk', region })
  t.equal(result, region, 'Returned correct region from passed params')
})

test('Validate config', async t => {
  t.plan(5)
  resetAWSEnvVars()

  try {
    await getRegion({ region: num })
  }
  catch (err) {
    t.match(err.message, /Region must be a string/, 'Threw on invalid region')
  }

  try {
    await getRegion({ region: 'us-south-14' })
  }
  catch (err) {
    t.match(err.message, /Invalid region specified/, 'Threw on invalid region')
  }

  try {
    process.env.AWS_SDK_LOAD_CONFIG = true
    process.env.AWS_CONFIG_FILE = configMock
    process.env.AWS_PROFILE = 'idk'
    await getRegion({})
  }
  catch (err) {
    t.match(err.message, /Profile not found/, 'Threw on missing profile')
  }
  resetAWSEnvVars()

  try {
    process.env.AWS_SDK_LOAD_CONFIG = true
    process.env.AWS_CONFIG_FILE = 'meh'
    await getRegion({})
  }
  catch (err) {
    t.match(err.message, /You must supply an AWS region/, 'Threw on no available config (after attempting to checking filesystem)')
  }
  resetAWSEnvVars()

  try {
    await getRegion({})
  }
  catch (err) {
    t.match(err.message, /You must supply an AWS region/, 'Threw on no available config')
  }
})

test('Tear down', t => {
  overrideHomedir.reset()
  t.end()
})
