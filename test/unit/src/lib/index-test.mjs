import { join } from 'node:path'
import test from 'tape'

let cwd = process.cwd()
let mock = join(cwd, 'test', 'mock')
let awsIniMock = join(mock, '.aws')

let readIni, useAWS, tidyQuery
function reset () {
  delete process.env.ARC_ENV
  delete process.env.ARC_LOCAL
  delete process.env.ARC_SANDBOX
}

test('Set up env', async t => {
  t.plan(3)
  let cwd = process.cwd()
  let sut = 'file://' + join(cwd, 'src', 'lib', 'index.js')
  let lib = await import(sut)
  readIni = lib.readIni
  useAWS = lib.useAWS
  tidyQuery = lib.tidyQuery
  t.ok(readIni, 'readIni util is present')
  t.ok(useAWS, 'useAWS util is present')
  t.ok(tidyQuery, 'tidyQuery util is present')
})

test('readIni', async t => {
  t.plan(17)
  let config

  config = await readIni(join(awsIniMock, 'credentials'))
  // Default
  t.equal(config.default.aws_access_key_id, 'default_aws_access_key_id', 'Loaded default access key')
  t.equal(config.default.aws_secret_access_key, 'default_aws_secret_access_key', 'Loaded default secret key')
  // Profile 1
  t.equal(config.profile_1.aws_access_key_id, 'profile_1_aws_access_key_id', 'Loaded profile_1 access key')
  t.equal(config.profile_1.aws_secret_access_key, 'profile_1_aws_secret_access_key', 'Loaded profile_1 secret key')
  t.equal(config.profile_1.aws_session_token, 'profile_1_aws_session_token', 'Loaded profile_1 session token')
  // Profile 2
  t.equal(config.profile_2.credential_process, `node -e "console.log(JSON.stringify({ AccessKeyId: 'profile_2_aws_access_key_id', SecretAccessKey: 'profile_2_aws_secret_access_key' }))"`, 'Loaded profile_2 credential process string')

  config = await readIni(join(awsIniMock, 'config'))
  // Default
  t.equal(config.default.region, 'us-west-1', 'Loaded default region config')
  t.equal(config.default.endpoint_url, 'https://amazonaws.com', 'Loaded default endpoint config')
  // Profile 1
  t.equal(config['profile profile_1'].region, 'us-west-2', 'Loaded profile 1 region config')
  t.equal(config['profile profile_1'].endpoint_url, 'https://lolidk.net', 'Loaded profile 1 endpoint config')
  // Profile 2
  t.equal(config['profile profile_2'].region, 'us-east-1', 'Loaded profile 2 region config')

  config = await readIni(join(awsIniMock, 'credentials-comments'))
  // Default
  t.equal(config.default.aws_access_key_id, 'default_aws_access_key_id', 'Loaded default access key with inline comments')
  t.equal(config.default.aws_secret_access_key, 'default_aws_secret_access_key', 'Loaded default secret key')
  // Profile 1
  t.equal(config.profile_1.aws_access_key_id, 'profile_1_aws_access_key_id', 'Loaded profile_1 access key with inline comments')
  t.equal(config.profile_1.aws_secret_access_key, 'profile_1_aws_secret_access_key ; ok', 'Loaded profile_1 access key, including unsuccessful semicolon comment')
  t.notOk(config.profile_1.ignore, 'Did not load commented line')
  t.notOk(config.profile_1.ignore_this, 'Did not load commented line')
})

test('useAWS', t => {
  t.plan(4)
  let result

  result = useAWS()
  t.ok(result, `Assume we're using AWS`)
  reset()

  process.env.ARC_ENV = 'testing'
  result = useAWS()
  t.notOk(result, 'Do not use AWS when in Arc testing env')
  reset()

  process.env.ARC_ENV = 'staging'
  process.env.ARC_SANDBOX = 'ok'
  result = useAWS()
  t.notOk(result, `It's ok to AWS in Sandbox + staging env`)
  reset()

  process.env.ARC_ENV = 'staging'
  process.env.ARC_SANDBOX = 'ok'
  process.env.ARC_LOCAL = 'true'
  result = useAWS()
  t.ok(result, `Use AWS when in Sandbox + staging env + ARC_LOCAL mode`)
  reset()
})

test('tidyQuery', t => {
  t.plan(6)
  let result

  result = tidyQuery({ ok: 'hi', hello: 'there' })
  t.equal(result, 'ok=hi&hello=there', 'Got back correct basic query string parameters')

  result = tidyQuery({ ok: 'hi', hello: 'there', yo: undefined })
  t.equal(result, 'ok=hi&hello=there', 'Ignored empty query string param')

  result = tidyQuery({ ok: 'hi', hello: 'there', yo: '' })
  t.equal(result, 'ok=hi&hello=there&yo=', 'Got back correct empty string query string parameter')

  result = tidyQuery({ ok: 'hi', hello: true })
  t.equal(result, 'ok=hi&hello=true', 'Got back correct boolean true query string parameter')

  result = tidyQuery({ ok: 'hi', hello: false })
  t.equal(result, 'ok=hi&hello=false', 'Got back correct boolean false query string parameter')

  result = tidyQuery({ ok: 'hi', hello: 0 })
  t.equal(result, 'ok=hi&hello=0', 'Got back correct number 0 query string parameter')
})
