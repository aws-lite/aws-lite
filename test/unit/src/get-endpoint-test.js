let { readFileSync } = require('fs')
let { join } = require('path')
let test = require('tape')
let mockTmp = require('mock-tmp')
let { defaults, overrideHomedir, resetAWSEnvVars } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'get-endpoint.js')
let getEndpoint = require(sut)

let { profile } = defaults
let mock = join(cwd, 'test', 'mock')
let configMock = join(mock, '.aws', 'config')

let localhost = 'localhost'
let fullHost = 'https://aws-lite.org'
let host = 'aws-lite.org'
let https = 'https:', http = 'http:'
let pathPrefix = '/foo-bar'
let protocol = https // https is the sensible default!

test('Set up env', t => {
  t.plan(1)
  t.ok(getEndpoint, 'getEndpoint module is present')
})

test('Get endpoint params from passed config', async t => {
  t.plan(5)
  resetAWSEnvVars()
  let result

  result = await getEndpoint({ host: fullHost })
  t.deepEqual(result, { host }, 'Returned correct endpoint params from host param')

  result = await getEndpoint({ endpoint: fullHost })
  t.deepEqual(result, { host, protocol }, 'Returned correct endpoint params from endpoint param')

  result = await getEndpoint({ url: fullHost })
  t.deepEqual(result, { host, protocol }, 'Returned correct endpoint params from url alias')

  // Prioritize passed params before env or config file
  process.env.AWS_ENDPOINT_URL = localhost
  result = await getEndpoint({ host: fullHost })
  t.deepEqual(result, { host }, 'Prioritized passed params over env var')
  resetAWSEnvVars()

  result = await getEndpoint({ awsConfigFile: configMock, host: fullHost })
  t.deepEqual(result, { host }, 'Prioritized passed params over config file')
})

test('Get endpoint params from env vars', async t => {
  t.plan(2)
  resetAWSEnvVars()
  let result

  process.env.AWS_ENDPOINT_URL = localhost
  result = await getEndpoint({})
  t.deepEqual(result, { host: localhost }, 'Returned correct endpoint params from env var')
  resetAWSEnvVars()

  // Prioritize env vars before config file
  process.env.AWS_ENDPOINT_URL = localhost
  result = await getEndpoint({ awsConfigFile: configMock })
  t.deepEqual(result, { host: localhost }, 'Prioritized env var over config file')
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
  result = await getEndpoint({ profile })
  t.deepEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (~/.aws file location) via env var')
  resetAWSEnvVars()

  result = await getEndpoint({ awsConfigFile: true, profile })
  t.deepEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (~/.aws file location) via param')
  mockTmp.reset()

  // Configured file locations
  process.env.AWS_SDK_LOAD_CONFIG = true
  process.env.AWS_CONFIG_FILE = configMock
  result = await getEndpoint({ profile })
  t.deepEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (default profile) via env var')
  resetAWSEnvVars()

  result = await getEndpoint({ awsConfigFile: configMock, profile })
  t.deepEqual(result, { host: awsUrl, protocol }, 'Returned correct endpoint params from config file (default profile) via param')

  result = await getEndpoint({ awsConfigFile: configMock, profile: profile1 })
  t.deepEqual(result, { host: lolUrl, protocol }, 'Returned correct endpoint params from config file (!default profile) via param')
})

test('Host not found (and that is ok)', async t => {
  t.plan(2)
  let result

  result = await getEndpoint({ awsConfigFile: configMock, profile })
  t.ok(result.host && result.protocol, 'Got endpoint params from a profile that has a host')

  result = await getEndpoint({ awsConfigFile: configMock, profile: 'profile_2' })
  t.equal(result, undefined, 'Did not get endpoint params from a profile that has no endpoint config')
})

test('Parse URLs into properties', async t => {
  t.plan(18)
  let result, url

  // http://localhost
  url = 'http://localhost'
  result = await getEndpoint({ endpoint: url })
  t.deepEqual(result, { host: localhost, protocol: http }, 'Returned correctly parsed endpoint params')

  t.deepEqual(result, await getEndpoint({ url }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ host: url })
  t.deepEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // http://localhost:3333
  url = 'http://localhost:3333'
  result = await getEndpoint({ endpoint: url })
  t.deepEqual(result, { host: localhost, protocol: http, port: 3333 }, 'Returned correctly parsed endpoint params')

  t.deepEqual(result, await getEndpoint({ url }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ host: url })
  t.deepEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // http://localhost/foo-bar
  url = 'http://localhost/foo-bar'
  result = await getEndpoint({ endpoint: url })
  t.deepEqual(result, { host: localhost, protocol: http, pathPrefix }, 'Returned correctly parsed endpoint params')

  t.deepEqual(result, await getEndpoint({ url }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ host: url })
  t.deepEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // localhost
  result = await getEndpoint({ endpoint: localhost })
  t.deepEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  t.deepEqual(result, await getEndpoint({ url: localhost }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ host: localhost })
  t.deepEqual(result, { host: localhost }, 'Returned correctly parsed endpoint params')

  // Regular domain
  result = await getEndpoint({ endpoint: fullHost })
  t.deepEqual(result, { host, protocol }, 'Returned correctly parsed endpoint params')

  t.deepEqual(result, await getEndpoint({ url: fullHost }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ host: fullHost })
  t.deepEqual(result, { host }, 'Returned correctly parsed endpoint params')

  // Domain hostname
  result = await getEndpoint({ endpoint: host })
  t.deepEqual(result, { host }, 'Returned correctly parsed endpoint params')

  t.deepEqual(result, await getEndpoint({ url: host }), 'Endpoint param is correctly aliased to url')

  result = await getEndpoint({ host: host })
  t.deepEqual(result, { host }, 'Returned correctly parsed endpoint params')
})

test('Other cases', async t => {
  t.plan(9)
  let result
  let pathPrefix = '/foo'

  // pathPrefix
  result = await getEndpoint({ host, pathPrefix })
  t.deepEqual(result, { host, pathPrefix }, 'Returned correct path prefix')

  result = await getEndpoint({ host, pathPrefix: 'foo' })
  t.deepEqual(result, { host, pathPrefix }, 'Returned mutated path prefix')

  result = await getEndpoint({ host, pathPrefix: 'foo/' })
  t.deepEqual(result, { host, pathPrefix }, 'Returned mutated path prefix')

  result = await getEndpoint({ host, pathPrefix: '/foo/' })
  t.deepEqual(result, { host, pathPrefix }, 'Returned mutated path prefix')

  result = await getEndpoint({ host, pathPrefix: '/' })
  t.deepEqual(result, { host }, 'Returned no path prefix')

  // Protocol / scheme
  result = await getEndpoint({ host, protocol: https })
  t.deepEqual(result, { host, protocol }, 'Returned correct protocol')

  result = await getEndpoint({ host, protocol: 'https' })
  t.deepEqual(result, { host, protocol }, 'Returned scheme mutated to protocol')

  result = await getEndpoint({ host, protocol: http })
  t.deepEqual(result, { host, protocol: http }, 'Returned correct protocol')

  result = await getEndpoint({ host, protocol: 'http' })
  t.deepEqual(result, { host, protocol: http }, 'Returned scheme mutated to protocol')
})

test('Tear down', t => {
  overrideHomedir.reset()
  t.end()
})
