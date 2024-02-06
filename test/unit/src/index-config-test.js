let { join } = require('path')
let mockTmp = require('mock-tmp')
let test = require('tape')
let { basicRequestChecks, defaults, resetAWSEnvVars: reset, server } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let { accessKeyId, badPort, config, host, path, port, protocol, region, secretAccessKey, service } = defaults
let profile1 = 'profile_1'

test('Set up env', async t => {
  t.plan(1)
  t.ok(client, 'aws-lite client is present')
})

test('Configuration - basic config', async t => {
  t.plan(11)
  let aws

  aws = await client({ accessKeyId, secretAccessKey, region })
  t.equal(typeof aws, 'function', 'Client configurator returned client function with passed config')
  t.equal(aws.config.region, region, 'Client uses the passed region')
  t.equal(aws.config.profile, 'default', 'Client defaults to the, uh, default profile')
  t.equal(aws.config.host, undefined, 'Client defaults to no host')

  aws = await client({ accessKeyId, secretAccessKey, region, profile: profile1, host })
  t.equal(aws.config.profile, profile1, 'Client uses the passed !default profile')
  t.equal(aws.config.host, host, 'Client uses the passed host')

  process.env.AWS_ACCESS_KEY_ID = accessKeyId
  process.env.AWS_SECRET_ACCESS_KEY = secretAccessKey
  process.env.AWS_REGION = region
  process.env.AWS_PROFILE = profile1
  process.env.AWS_ENDPOINT_URL = host
  aws = await client()
  t.equal(typeof aws, 'function', 'Client configurator returned client function without passed config')
  t.equal(aws.config.region, region, 'Client uses the env var region')
  t.equal(aws.config.profile, profile1, 'Client uses the env var !default profile')
  t.equal(aws.config.host, host, 'Client uses the env var host')
  reset()

  try {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    await client()
  }
  catch (err) {
    t.match(err.message, /You must supply AWS credentials/, 'Client configurator throws without creds and region')
    reset()
  }
})

test('Configuration - plugin loading', async t => {
  t.plan(4)
  let aws, tmp

  // Node.js 14.x + npm 6 does funky things with npm link-ed (symlinked) modules
  // That's cool, we can confidently skip this test for now, the related code path provably works!
  if (!process.versions.node.startsWith('14')) {
    t.plan(5)
    aws = await client({ accessKeyId, secretAccessKey, region })
    t.ok(aws.dynamodb, 'Client auto-loaded @aws-lite/dynamodb')
  }

  aws = await client({ accessKeyId, secretAccessKey, region, autoloadPlugins: false })
  t.notOk(aws.dynamodb, 'Client did not auto-load @aws-lite/dynamodb')

  let nodeModules = 'node_modules'
  tmp = mockTmp({ [nodeModules]: {} })
  process.chdir(tmp)
  aws = await client({ accessKeyId, secretAccessKey, region })
  t.notOk(aws.dynamodb, `Client did not auto-load @aws-lite/* plugins it can't find`)
  process.chdir(cwd)
  mockTmp.reset()

  // Don't assume the existence of node_modules when attempting to load plugins
  tmp = mockTmp({ hi: {} })
  process.chdir(tmp)
  aws = await client({ accessKeyId, secretAccessKey, region })
  t.notOk(aws.dynamodb, `Client did not auto-load @aws-lite/* plugins it can't find`)
  process.chdir(cwd)
  mockTmp.reset()

  // A bit of a funky test, but we don't need to exercise actually loading an aws-lite-plugin-* plugin, we just need to ensure it attempts to
  try {
    tmp = mockTmp({ [join(nodeModules, 'aws-lite-plugin-hi')]: {} })
    process.chdir(tmp)
    aws = await client({ accessKeyId, secretAccessKey, region })
    process.chdir(cwd)
  }
  catch (err) {
    t.match(err.message, /Cannot find module 'aws-lite-plugin-hi'/, 'Found and loaded aws-lite-plugin-*')
  }
  process.chdir(cwd)
  mockTmp.reset()
})

test('Configuration - per-request overrides', async t => {
  t.plan(7)
  let started = await server.start()
  t.ok(started, 'Started server')

  // Just add a bad host[name]!
  let badHost = 'some-host'
  let badConfig = { ...config, port: badPort, protocol: 'https' }
  let aws

  // Basic host config passthrough, not necessarily per-request overrides
  aws = await client({ ...badConfig, host })
  await aws({ service, path, port, protocol })
  aws = await client({ ...badConfig, hostname: host, host: undefined })
  await aws({ service, path, port, protocol })

  // None of these should work if per-request overrides aren't overriding
  aws = await client({ ...badConfig, host: badHost })
  await aws({ service, path, host, port, protocol })
  await aws({ service, path, hostname: host, port, protocol })

  aws = await client({ ...badConfig, hostname: badHost, host: undefined })
  await aws({ service, path, host, port, protocol })
  await aws({ service, path, hostname: host, port, protocol })

  basicRequestChecks(t, 'GET')
  reset()

  await server.end()
  t.pass('Server ended')
})

test('Configuration - endpoint, url, host', async t => {
  t.plan(22)
  let aws
  let basicConfig = { accessKeyId, secretAccessKey, region, service }
  let started = await server.start()
  t.ok(started, 'Started server')

  // Basic requests
  aws = await client({ ...basicConfig, endpoint: `http://localhost:${port}` })
  await aws({ service })
  basicRequestChecks(t, 'GET', { url: '/' })

  aws = await client({ ...basicConfig, url: `http://localhost:${port}` })
  await aws({ service })
  basicRequestChecks(t, 'GET', { url: '/' })

  aws = await client({ ...basicConfig, host, port })
  await aws({ service })
  basicRequestChecks(t, 'GET', { url: '/' })

  // Request to path
  aws = await client({ ...basicConfig, endpoint: `http://localhost:${port}/to/path` })
  await aws({ service })
  basicRequestChecks(t, 'GET', { url: '/to/path' })

  await server.end()
  t.pass('Server ended')
})

test('Configuration - path prefix', async t => {
  t.plan(22)
  let aws
  let started = await server.start()
  t.ok(started, 'Started server')

  let pathPrefix
  pathPrefix = 'foo'
  aws = await client({ ...config, pathPrefix })
  await aws({ service, path, host, port, protocol })
  basicRequestChecks(t, 'GET', { url: `/${pathPrefix}${path}` })

  pathPrefix = '/foo/bar'
  aws = await client({ ...config, pathPrefix })
  await aws({ service, path, host, port, protocol })
  basicRequestChecks(t, 'GET', { url: `${pathPrefix}${path}` })

  pathPrefix = '/foo///bar'
  aws = await client({ ...config, pathPrefix })
  await aws({ service, path, host, port, protocol })
  basicRequestChecks(t, 'GET', { url: `/foo/bar${path}` })

  pathPrefix = 'foo/bar/'
  aws = await client({ ...config, pathPrefix })
  await aws({ service, path, host, port, protocol })
  basicRequestChecks(t, 'GET', { url: `/foo/bar${path}` })

  await server.end()
  t.pass('Server ended')
})

test('Configuration - validation', async t => {
  t.plan(2)
  try {
    await client({ ...config, protocol: 'lolidk' })
  }
  catch (err) {
    t.match(err.message, /Protocol must be/, 'Throw on bad protocol config')
    reset()
  }

  try {
    await client({ ...config, plugins: { ok: true } })
  }
  catch (err) {
    t.match(err.message, /Plugins must be an array/, 'Throw on invalid plugins config')
    reset()
  }
})

test('Configuration - service verification', async t => {
  t.plan(8)
  let aws
  let started = await server.start()
  t.ok(started, 'Started server')

  // Default behavior: verification enabled
  aws = await client(config)
  try {
    await aws({ service: 'not-a-service' })
    t.fail('Should throw on unverified service name')
  }
  catch (err) {
    t.match(err.message, /Invalid AWS service/, 'By default, throw on unverified service name')
  }
  // Disable service verification at request time
  try {
    await aws({ verifyService: false, service: 'not-a-service' })
    t.pass('Service verification disabled')
  }
  catch (err) {
    t.fail(err)
  }
  // Service name still required
  try {
    await aws({ verifyService: false })
    t.fail('Should throw on missing service name')
  }
  catch (err) {
    t.match(err.message, /No AWS service specified/, 'Throw on missing service name')
  }

  // Disable verification at client
  aws = await client({ ...config, verifyService: false })
  try {
    await aws({ service: 'not-a-service' })
    t.pass('Service verification disabled')
  }
  catch (err) {
    t.fail(err)
  }
  // Request can enable service verification
  try {
    await aws({ verifyService: true, service: 'not-a-service' })
    t.fail('Should throw on unverified service name')
  }
  catch (err) {
    t.match(err.message, /Invalid AWS service/, 'Throw on unverified service name')
  }
  // Service name still required
  try {
    await aws({ verifyService: true })
    t.fail('Should throw on missing service name')
  }
  catch (err) {
    t.match(err.message, /No AWS service specified/, 'Throw on missing service name')
  }

  await server.end()
  t.pass('Server ended')
})
