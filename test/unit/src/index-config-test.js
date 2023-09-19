let { join } = require('path')
let test = require('tape')
let { basicRequestChecks, defaults, resetAWSEnvVars: reset, server } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let { accessKeyId, badPort, config, endpoint, host, port, protocol, region, secretAccessKey, service } = defaults

test('Set up env', async t => {
  t.plan(1)
  t.ok(client, 'aws-lite client is present')
})

test('Initial configuration', async t => {
  t.plan(3)
  let aws

  aws = await client({ accessKeyId, secretAccessKey, region })
  t.equal(typeof aws, 'function', 'Client configurator returned client function with passed config')

  process.env.AWS_ACCESS_KEY_ID = accessKeyId
  process.env.AWS_SECRET_ACCESS_KEY = secretAccessKey
  process.env.AWS_REGION = region
  aws = await client()
  t.equal(typeof aws, 'function', 'Client configurator returned client function without passed config')
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

test('Initial configuration - per-request overrides', async t => {
  t.plan(7)
  let started = await server.start()
  t.ok(started, 'Started server')

  // Just add a bad host[name]!
  let badHost = 'some-host'
  let badConfig = { ...config, port: badPort, protocol: 'https' }
  let aws

  // Basic host config passthrough, not necessarily per-request overrides
  aws = await client({ ...badConfig, host })
  await aws({ service, endpoint, port, protocol })
  aws = await client({ ...badConfig, hostname: host, host: undefined })
  await aws({ service, endpoint, port, protocol })

  // None of these should work if per-request overrides aren't overriding
  aws = await client({ ...badConfig, host: badHost })
  await aws({ service, endpoint, host, port, protocol })
  await aws({ service, endpoint, hostname: host, port, protocol })

  aws = await client({ ...badConfig, hostname: badHost, host: undefined })
  await aws({ service, endpoint, host, port, protocol })
  await aws({ service, endpoint, hostname: host, port, protocol })

  basicRequestChecks(t, 'GET')

  await server.end()
  t.pass('Server ended')
})

test('Initial configuration - validation', async t => {
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
