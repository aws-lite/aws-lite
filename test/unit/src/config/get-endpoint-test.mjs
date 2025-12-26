import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import process from 'node:process'
import mockTmp from 'mock-tmp'
import { defaults, overrideHomedir, resetAWSEnvVars } from '../../../lib/index.mjs'

let getEndpoint
let cwd = process.cwd()
let { profile } = defaults
let mock = join(cwd, 'test', 'mock')
let configMock = join(mock, '.aws', 'config')

let localhost = 'localhost'
let fullHost = 'https://aws-lite.org'
let host = 'aws-lite.org'
let https = 'https:', http = 'http:'
let pathPrefix = '/foo-bar'
let protocol = https // https is the sensible default!

test('Set up env', async t => {
  t.plan(1)
  let sut = 'file://' + join(cwd, 'src', 'config', 'get-endpoint.js')
  getEndpoint = (await import(sut)).default
  t.assert.ok(getEndpoint, 'getEndpoint module is present')
})

test('Get endpoint params from passed config', async t => {
  t.plan(5)
  resetAWSEnvVars()
  let result

  result = await getEndpoint({ config: { host: fullHost } })
  t.assert.deepStrictEqual(result, { host }, 'Returned correct endpoint params from host param')

  result = await getEndpoint({ config: { endpoint: fullHost } })
  t.assert.deepStrictEqual(result, { host, protocol }, 'Returned correct endpoint params from endpoint param')

  result = await getEndpoint({ config: { url: fullHost } })
  t.assert.deepStrictEqual(result, { host, protocol }, 'Returned correct endpoint params from url alias')

  // Prioritize passed params before env or config file
  process.env.AWS_ENDPOINT_URL = localhost
  result = await getEndpoint({ config: { host: fullHost } })
  t.assert.deepStrictEqual(result, { host }, 'Prioritized passed params over env var')
  resetAWSEnvVars()

  result = await getEndpoint({ config: { awsConfigFile: configMock, host: fullHost } })
  t.assert.deepStrictEqual(result, { host }, 'Prioritized passed params over config file')
})

test('Get endpoint params from env vars', async t => {
  t.plan(2)
  resetAWSEnvVars()
  let result

  process.env.AWS_ENDPOINT_URL = localhost
  result = await getEndpoint({ config: {} })
  t.assert.deepStrictEqual(result, { host: localhost }, 'Returned correct endpoint params from env var')
  resetAWSEnvVars()

  // Prioritize env vars before config file
  process.env.AWS_ENDPOINT_URL = localhost
  result = await getEndpoint({ config: { awsConfigFile: configMock } })
  t.assert.deepStrictEqual(result, { host: localhost }, 'Prioritized env var over config file')
  resetAWSEnvVars()
})

test('Get endpoint params from config file', async t => {
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
  result = await getEndpoint({ config: { profile } })
  t.assert.deepStrictEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (~/.aws file location) via env var')
  resetAWSEnvVars()

  result = await getEndpoint({ config: { awsConfigFile: true, profile } })
  t.assert.deepStrictEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (~/.aws file location) via param')
  mockTmp.reset()

  // Configured file locations
  process.env.AWS_SDK_LOAD_CONFIG = true
  process.env.AWS_CONFIG_FILE = configMock
  result = await getEndpoint({ config: { profile } })
  t.assert.deepStrictEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (default profile) via env var')
  resetAWSEnvVars()

  result = await getEndpoint({ config: { awsConfigFile: configMock, profile } })
  t.assert.deepStrictEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (default profile) via param')

  result = await getEndpoint({ config: { awsConfigFile: configMock, profile: profile1 } })
  t.assert.deepStrictEqual(result, { host: lolUrl, protocol }, 'Returned correct endpoint params from config file (!default profile) via param')
})

test('Host not found (and that is ok)', async t => {
  t.plan(2)
  let result

  result = await getEndpoint({ config: { awsConfigFile: configMock, profile } })
  t.assert.ok(result.host && result.protocol, 'Got endpoint params from a profile that has a host')

  result = await getEndpoint({ config: { awsConfigFile: configMock, profile: 'profile_2' } })
  t.assert.strictEqual(result, undefined, 'Did not get endpoint params from a profile that has no endpoint config')
})

test('Parse URLs into properties', async t => {
  t.plan(18)
  let result, url

  // http://localhost
  url = 'http://localhost'
  result = await getEndpoint({ config: { endpoint: url } })
  t.assert.deepStrictEqual(result, { host: localhost, protocol: http }, 'Returned correctly parsed endpoint params')

  t.assert.deepStrictEqual(result, await getEndpoint({ config: { url } }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ config: { host: url } })
  t.assert.deepStrictEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // http://localhost:3333
  url = 'http://localhost:3333'
  result = await getEndpoint({ config: { endpoint: url } })
  t.assert.deepStrictEqual(result, { host: localhost, protocol: http, port: 3333 }, 'Returned correctly parsed endpoint params')

  t.assert.deepStrictEqual(result, await getEndpoint({ config: { url } }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ config: { host: url } })
  t.assert.deepStrictEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // http://localhost/foo-bar
  url = 'http://localhost/foo-bar'
  result = await getEndpoint({ config: { endpoint: url } })
  t.assert.deepStrictEqual(result, { host: localhost, protocol: http, pathPrefix }, 'Returned correctly parsed endpoint params')

  t.assert.deepStrictEqual(result, await getEndpoint({ config: { url } }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ config: { host: url } })
  t.assert.deepStrictEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // localhost
  result = await getEndpoint({ config: { endpoint: localhost } })
  t.assert.deepStrictEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  t.assert.deepStrictEqual(result, await getEndpoint({ config: { url: localhost } }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ config: { host: localhost } })
  t.assert.deepStrictEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // Regular domain
  result = await getEndpoint({ config: { endpoint: fullHost } })
  t.assert.deepStrictEqual(result, { host, protocol }, 'Returned correctly parsed endpoint params')

  t.assert.deepStrictEqual(result, await getEndpoint({ config: { url: fullHost } }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ config: { host: fullHost } })
  t.assert.deepStrictEqual(result, { host }, 'Returned correctly parsed endpoint params')

  // Domain hostname
  result = await getEndpoint({ config: { endpoint: host } })
  t.assert.deepStrictEqual(result, { host }, 'Returned correctly parsed endpoint params')

  t.assert.deepStrictEqual(result, await getEndpoint({ config: { url: host } }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ config: { host: host } })
  t.assert.deepStrictEqual(result, { host }, 'Returned correctly parsed endpoint params')
})

test('Other cases', async t => {
  t.plan(9)
  let result
  let pathPrefix = '/foo'

  // pathPrefix
  result = await getEndpoint({ config: { host, pathPrefix } })
  t.assert.deepStrictEqual(result, { host, pathPrefix }, 'Returned correct path prefix')

  result = await getEndpoint({ config: { host, pathPrefix: 'foo' } })
  t.assert.deepStrictEqual(result, { host, pathPrefix }, 'Returned mutated path prefix')

  result = await getEndpoint({ config: { host, pathPrefix: 'foo/' } })
  t.assert.deepStrictEqual(result, { host, pathPrefix }, 'Returned mutated path prefix')

  result = await getEndpoint({ config: { host, pathPrefix: '/foo/' } })
  t.assert.deepStrictEqual(result, { host, pathPrefix }, 'Returned mutated path prefix')

  result = await getEndpoint({ config: { host, pathPrefix: '/' } })
  t.assert.deepStrictEqual(result, { host }, 'Returned no path prefix')

  // Protocol / scheme
  result = await getEndpoint({ config: { host, protocol: https } })
  t.assert.deepStrictEqual(result, { host, protocol }, 'Returned correct protocol')

  result = await getEndpoint({ config: { host, protocol: 'https' } })
  t.assert.deepStrictEqual(result, { host, protocol }, 'Returned scheme mutated to protocol')

  result = await getEndpoint({ config: { host, protocol: http } })
  t.assert.deepStrictEqual(result, { host, protocol: http }, 'Returned correct protocol')

  result = await getEndpoint({ config: { host, protocol: 'http' } })
  t.assert.deepStrictEqual(result, { host, protocol: http }, 'Returned scheme mutated to protocol')
})

test('Tear down', t => {
  t.plan(1)
  overrideHomedir.reset()
  t.assert.ok(true, 'Tear down complete')
})
