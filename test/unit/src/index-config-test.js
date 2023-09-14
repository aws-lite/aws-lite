let { join } = require('path')
let test = require('tape')
let { defaults, resetAWSEnvVars: reset } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let { accessKeyId, config, region, secretAccessKey } = defaults

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
