import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import process from 'node:process'
import mockTmp from 'mock-tmp'
import { defaults, overrideHomedir, resetAWSEnvVars } from '../../../lib/index.mjs'

let getRegion
let cwd = process.cwd()
let { profile } = defaults
let mock = join(cwd, 'test', 'mock')
let east1 = 'us-east-1'
let west1 = 'us-west-1'
let west2 = 'us-west-2'
let num = 1
let configMock = join(mock, '.aws', 'config')

test('Set up env', async t => {
  let sut = 'file://' + join(cwd, 'src', 'config', 'get-region.js')
  getRegion = (await import(sut)).default
  t.assert.ok(getRegion, 'getRegion module is present')
})

test('Get region from passed params', async t => {
  let region = east1
  let result = await getRegion({ config: { region } })
  t.assert.strictEqual(result, region, 'Returned correct region from passed params')
})

test('Get region from env vars', async t => {
  resetAWSEnvVars()
  let result

  process.env.AWS_REGION = east1
  result = await getRegion({ config: {} })
  t.assert.strictEqual(result, east1, 'Returned correct region from env vars')
  resetAWSEnvVars()

  process.env.AWS_DEFAULT_REGION = east1
  result = await getRegion({ config: {} })
  t.assert.strictEqual(result, east1, 'Returned correct region from env vars')
  resetAWSEnvVars()

  process.env.AMAZON_REGION = east1
  result = await getRegion({ config: {} })
  t.assert.strictEqual(result, east1, 'Returned correct region from env vars')
  resetAWSEnvVars()
})

test('Get region from config file', async t => {
  resetAWSEnvVars()
  let result
  let profile1 = 'profile_1'

  // Default config file location
  let configFile = join('.aws', 'config')
  let homedir = mockTmp({ [configFile]: readFileSync(configMock) })
  overrideHomedir(homedir)
  process.env.AWS_SDK_LOAD_CONFIG = true
  result = await getRegion({ config: { profile } })
  t.assert.strictEqual(result, west1, 'Returned correct region from config file (~/.aws file location) via env var')
  resetAWSEnvVars()

  result = await getRegion({ config: { awsConfigFile: true, profile } })
  t.assert.strictEqual(result, west1, 'Returned correct region from config file (~/.aws file location) via param')
  mockTmp.reset()

  // Configured file locations
  process.env.AWS_SDK_LOAD_CONFIG = true
  process.env.AWS_CONFIG_FILE = configMock
  result = await getRegion({ config: { profile } })
  t.assert.strictEqual(result, west1, 'Returned correct region from config file (default profile) via env var')
  resetAWSEnvVars()

  result = await getRegion({ config: { awsConfigFile: configMock, profile } })
  t.assert.strictEqual(result, west1, 'Returned correct region from config file (default profile) via param')

  result = await getRegion({ config: { awsConfigFile: configMock, profile: profile1 } })
  t.assert.strictEqual(result, west2, 'Returned correct region from config file (!default profile) via param')

  // Config file checks are skipped in Lambda
  process.env.AWS_LAMBDA_FUNCTION_NAME = 'true'
  try {
    await getRegion({ config: { awsConfigFile: configMock, profile } })
  }
  catch (err) {
    t.assert.match(err.message, /Unable to find AWS region/, 'Did not look for config file on disk in Lambda')
  }
  resetAWSEnvVars()
})

test('Allow !aws regions when specifying a custom host', async t => {
  let region = 'nonstandard-region'
  let result = await getRegion({ config: { host: 'idk', region } })
  t.assert.strictEqual(result, region, 'Returned correct region from passed params')
})

test('Validate config', async t => {
  resetAWSEnvVars()

  try {
    await getRegion({ config: { region: num } })
  }
  catch (err) {
    t.assert.match(err.message, /Region must be a string/, 'Threw on invalid region')
  }

  try {
    await getRegion({ config: { region: 'us-south-14' } })
  }
  catch (err) {
    t.assert.match(err.message, /Invalid region specified/, 'Threw on invalid region')
  }

  try {
    process.env.AWS_SDK_LOAD_CONFIG = true
    process.env.AWS_CONFIG_FILE = configMock
    process.env.AWS_PROFILE = 'idk'
    await getRegion({ config: {} })
  }
  catch (err) {
    t.assert.match(err.message, /Profile not found/, 'Threw on missing profile')
  }
  resetAWSEnvVars()

  try {
    process.env.AWS_SDK_LOAD_CONFIG = true
    process.env.AWS_CONFIG_FILE = 'meh'
    await getRegion({ config: {} })
  }
  catch (err) {
    t.assert.match(err.message, /Unable to find AWS region/, 'Threw on no available config (after attempting to checking filesystem)')
  }
  resetAWSEnvVars()

  try {
    await getRegion({ config: {} })
  }
  catch (err) {
    t.assert.match(err.message, /Unable to find AWS region/, 'Threw on no available config')
  }
})

test('Tear down', t => {
  overrideHomedir.reset()
  t.assert.ok(true, 'Tear down complete')
})
