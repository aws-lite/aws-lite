let { join } = require('path')
let http = require('http')
let test = require('tape')
let { resetAWSEnvVars } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)
let mock = join(cwd, 'test', 'mock')

let accessKeyId = 'foo'
let secretAccessKey = 'bar'
let region = 'us-west-1'
let protocol = 'http'
let keepAlive = false
let service = 'lambda'
let basic = { accessKeyId, secretAccessKey, region, protocol, keepAlive }
let host = 'localhost'
let port = 1111
let endpoint = '/an/endpoint'

let server, request, responseBody, responseHeaders = {}, responseStatusCode = 200
function createServer () {
  server = http.createServer((req, res) => {
    let data = []
    req.on('data', chunk => data.push(chunk))
    req.on('end', () => {
      let body
      if (data.length) {
        body = req.headers?.['content-type']?.includes('json')
          ? JSON.parse(data)
          : data.join()
      }
      request = {
        url: req.url,
        headers: req.headers,
        method: req.method,
        body,
      }

      let response = responseHeaders?.['content-type']?.includes('json')
        ? JSON.stringify(responseBody)
        : responseBody || ''
      res.writeHead(responseStatusCode, responseHeaders)
      res.end(response)
    })
  })
  server.listen(port)
  console.log('Started test server')
}
function closeServer () {
  return new Promise((res, rej) => {
    server.close(err => {
      if (err) rej(err)
      else {
        server = undefined
        console.log(`Test server ended`)
        res()
      }
    })
  })
}

function basicRequestChecks (t, method, params = {}) {
  t.equal(request.method, method, `Made a ${method} request`)
  t.equal(request.url, params.url || endpoint, 'Made request to correct endpoint')
  t.ok(request.headers['x-amz-date'], 'Made request with x-amz-date header')
  t.ok(request.headers['authorization'], 'Made request with authorization header')
  t.match(request.headers['authorization'], /Credential=foo/, 'Authorization header is using the access key')
  reset()
}

function reset () {
  responseHeaders = {}
  responseStatusCode = 200
  request = responseBody = undefined
}

test('Set up env', t => {
  t.plan(2)
  t.ok(client, 'aws-lite client is present')
  createServer()
  t.ok(server, 'Started server')
})

test('Config method', t => {
  t.plan(3)
  let aws

  aws = client({ accessKeyId, secretAccessKey, region })
  t.equal(typeof aws, 'function', 'Client configurator returned client function with passed config')

  process.env.AWS_ACCESS_KEY_ID = accessKeyId
  process.env.AWS_SECRET_ACCESS_KEY = secretAccessKey
  process.env.AWS_REGION = region
  aws = client()
  t.equal(typeof aws, 'function', 'Client configurator returned client function without passed config')
  resetAWSEnvVars()

  t.throws(() => {
    process.env.AWS_SHARED_CREDENTIALS_FILE = 'meh' // jic dev has actual creds file
    client()
  }, /You must supply AWS credentials/, 'Client configurator throws without creds and region')
})

test('Basic client functionality', async t => {
  t.plan(24)
  let result, body

  let headers = { 'content-type': 'application/json' }

  let aws = client(basic)

  // Basic get request
  result = await aws({ service, host, port, endpoint })
  t.notOk(request.body, 'Request included no body')
  t.equal(result, '', 'Client returned empty response body as empty string')
  basicRequestChecks(t, 'GET')

  // Basic post request
  body = { ok: true }
  responseBody = { aws: 'lol' }
  responseHeaders = { 'content-type': 'application/json' }
  result = await aws({ service, host, port, endpoint, body })
  t.deepEqual(request.body, body, 'Request included correct body')
  t.deepEqual(result, responseBody, 'Client returned response body as parsed JSON')
  basicRequestChecks(t, 'POST')

  // Basic post with AWS-flavored JSON
  body = { ok: true }
  responseBody = { aws: 'lol' }
  responseHeaders = { 'content-type': 'application/x-amz-json' }
  result = await aws({ service, host, port, endpoint, body })
  t.deepEqual(request.body, body, 'Request included correct body')
  t.deepEqual(result, responseBody, 'Client returned response body as parsed JSON')
  basicRequestChecks(t, 'POST')

  // Publish an object while passing headers
  body = { ok: true }
  result = await aws({ service, host, port, endpoint, body, headers })
  t.deepEqual(request.body, body, 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish JSON while passing headers
  body = JSON.stringify({ ok: true })
  result = await aws({ service, host, port, endpoint, body, headers })
  t.deepEqual(request.body, JSON.parse(body), 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish some other kind of non-JSON request
  body = 'hi'
  result = await aws({ service, host, port, endpoint, body })
  t.deepEqual(request.body, body, 'Request included correct body (just a string)')
  reset()
})

test('Aliased params', async t => {
  t.plan(8)
  let aws = client(basic)

  // Endpoint
  await aws({ service, host, port, endpoint })
  t.equal(request.url, endpoint, 'Made request to correct endpoint (options.endpoint)')
  reset()

  // Host / hostname
  await aws({ service, host, port, endpoint })
  t.ok(request, 'Made request to correct host (options.host)')
  reset()
  await aws({ service, hostname: host, port, path: endpoint })
  t.ok(request, 'Made request to correct host (options.hostname)')
  reset()

  // Payload / body / data / json + serialization
  let payload = { ok: true }
  await aws({ service, host, port, endpoint, payload })
  t.deepEqual(request.body, payload, 'Made request with correct body (options.payload)')
  reset()
  await aws({ service, host, port, endpoint, body: payload })
  t.deepEqual(request.body, payload, 'Made request with correct body (options.body)')
  reset()
  await aws({ service, host, port, endpoint, data: payload })
  t.deepEqual(request.body, payload, 'Made request with correct body (options.data)')
  reset()
  await aws({ service, host, port, endpoint, json: payload })
  t.deepEqual(request.body, payload, 'Made request with correct body (options.json)')
  reset()

  let string = 'hi'
  await aws({ service, host, port, endpoint, payload: string })
  t.equal(request.body, string, 'Made request with correct body (plain string)')
  reset()
})

test('Error handling', async t => {
  t.plan(14)

  // Normal error
  try {
    responseStatusCode = 400
    responseBody = { message: 'lolno', other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    let aws = client(basic)
    await aws({ service: 'lambda', host, port, endpoint })
  }
  catch (err) {
    t.equal(err.message, responseBody.message, 'Bubbled error message')
    t.equal(err.other, responseBody.other, 'Bubbled error metadata')
    t.equal(err.statusCode, responseStatusCode, 'Bubbled error status code')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Funky error - some endpoints/error states do things like return XML without a content-type
  try {
    responseStatusCode = 400
    responseBody = '<AccessDeniedException>\n' +
    '  <Message>Unable to determine service/operation name to be authorized</Message>\n' +
    '</AccessDeniedException>\n'
    let aws = client(basic)
    await aws({ service: 'lambda', host, port, endpoint })
  }
  catch (err) {
    t.equal(err.message, responseBody, 'Bubbled error message')
    t.equal(err.statusCode, responseStatusCode, 'Bubbled error status code')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Request-level failure
  let badPort = 12345
  try {
    let aws = client(basic)
    await aws({ service, host, port: badPort, endpoint })
  }
  catch (err) {
    t.match(err.message, /lambda: connect ECONNREFUSED/, 'Bubbled error message')
    t.equal(err.port, badPort, 'Bubbled port metadata')
    t.equal(err.service, service, 'Bubbled service metadata')
    t.equal(err.host, host, 'Bubbled host metadata')
    t.equal(err.protocol, protocol, 'Bubbled protocol metadata')
    t.equal(err.statusCode, undefined, 'Status code not found on incomplete request')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }
})

test('Plugins - method construction, requests', async t => {
  t.plan(29)

  let autoloadPlugins = false
  let name = 'my-lambda'

  let aws, expectedEndpoint

  // Reads
  aws = client({ ...basic, plugins: [ join(mock, 'plugins', 'get.js') ], autoloadPlugins })
  expectedEndpoint = `/2015-03-31/functions/${name}/configuration`

  await aws.lambda.GetFunctionConfiguration({ name, host, port })
  t.equal(request.url, expectedEndpoint, 'Plugin requested generated endpoint')
  t.equal(request.body, undefined, 'Plugin made request without body')
  basicRequestChecks(t, 'GET', { url: expectedEndpoint })

  await aws.lambda.GetFunctionConfiguration({ name, host, port, endpoint: '/foo' })
  t.equal(request.url, expectedEndpoint, 'Plugin can override normal client param')
  basicRequestChecks(t, 'GET', { url: expectedEndpoint })

  // Writes
  aws = client({ ...basic, plugins: [ join(mock, 'plugins', 'post.js') ], autoloadPlugins })
  expectedEndpoint = `/2015-03-31/functions/${name}/invocations`
  let payload = { ok: true }

  await aws.lambda.Invoke({ name, payload, host, port, })
  t.equal(request.url, expectedEndpoint, 'Plugin requested generated endpoint')
  t.deepEqual(request.body, payload, 'Plugin made request with included payload')
  basicRequestChecks(t, 'POST', { url: expectedEndpoint })

  await aws.lambda.Invoke({ name, data: payload, host, port, })
  t.deepEqual(request.body, payload, `Payload can be aliased to 'data'`)

  await aws.lambda.Invoke({ name, body: payload, host, port, })
  t.deepEqual(request.body, payload, `Payload can be aliased to 'body'`)

  await aws.lambda.Invoke({ name, json: payload, host, port, })
  t.deepEqual(request.body, payload, `Payload can be aliased to 'json'`)

  await aws.lambda.Invoke({ name, payload, host, port, endpoint: '/foo' })
  t.equal(request.url, expectedEndpoint, 'Plugin can override normal client param')
  basicRequestChecks(t, 'POST', { url: expectedEndpoint })
})

test('Plugins - input validation', async t => {
  t.plan(22)

  let autoloadPlugins = false
  let str = 'hi'
  let num = 123

  let aws = client({ ...basic, plugins: [ join(mock, 'plugins', 'validation.js') ], autoloadPlugins })

  // Missing required parameter type
  try {
    await aws.lambda.testTypes({})
  }
  catch (err) {
    t.match(err.message, /Missing required parameter: required/, 'Errored on missing required param')
  }

  // Wrong required parameter type
  try {
    await aws.lambda.testTypes({ required: num })
  }
  catch (err) {
    t.match(err.message, /Parameter 'required' must be: string/, 'Errored on wrong required param type')
  }

  // Wrong optional parameter type
  try {
    await aws.lambda.testTypes({ arr: true })
  }
  catch (err) {
    t.match(err.message, /Parameter 'arr' must be: array/, 'Errored on wrong optional param type')
  }

  // Disabled parameter
  try {
    await aws.lambda.testTypes({ disabled: str })
  }
  catch (err) {
    t.match(err.message, /Parameter 'disabled' must not be used/, 'Errored on disabled param')
  }

  // Plugin specified an invalid validation type (string)
  try {
    await aws.lambda.testTypes({ required: str, invalidType: str })
  }
  catch (err) {
    t.match(err.message, /Invalid type found: invalidType \(lolidk\)/, 'Errored on invalid validation type (string)')
  }

  // Plugin specified an invalid validation type (list)
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeList: str })
  }
  catch (err) {
    t.match(err.message, /Invalid type found: invalidTypeList \(listidk\)/, 'Errored on invalid validation type (list)')
  }

  // Plugin specified an invalid validation type, uh, type
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeType: str })
  }
  catch (err) {
    t.match(err.message, /Validator 'type' property must be a string or array/, 'Errored on invalid validation type')
  }

  // Plugin specified an invalid validation type, uh, type (list)
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeListType: str })
  }
  catch (err) {
    t.match(err.message, /Invalid type found: invalidTypeListType \(12345\)/, 'Errored on invalid validation type (list)')
  }

  // Plugin validation is missing a type
  try {
    await aws.lambda.testTypes({ required: str, missingType: str })
  }
  catch (err) {
    t.match(err.message, /Validator is missing required 'type' property/, 'Errored on missing validation type')
  }

  // Now just test the other various types work (and fail)
  let validTests = { arr: [], num, bool: true, obj: {}, str }
  for (let [ k, v ] of Object.entries(validTests)) {
    try {
      await aws.lambda.testTypes({ required: str, host, port, [k]: v })
      t.pass(`Correct ${k} validation succeeded`)
    }
    catch (err) {
      console.log(err)
      t.fail(`Correct ${k} validation failed`)
    }
  }

  let invalidTests = { arr: num, bool: num, num: str, obj: num, str: num }
  for (let [ k, v ] of Object.entries(invalidTests)) {
    try {
      await aws.lambda.testTypes({ required: str, [k]: v })
      t.fail(`Incorrect ${k} validation failed`)
    }
    catch (err) {
      let re = new RegExp(`Parameter '${k}' must be`)
      t.match(err.message, re, `Incorrect ${k} validation succeeded`)
    }
  }

  // Type array
  try {
    await aws.lambda.testTypes({ required: str, payload: num })
  }
  catch (err) {
    t.match(err.message, /Parameter 'payload' must be one of/, 'Errored on wrong param (from type array)')
  }

  // Payload alias
  try {
    await aws.lambda.testTypes({ required: str, data: num })
  }
  catch (err) {
    t.match(err.message, /Parameter 'data' must be one of/, 'Errored on wrong param (from type array, payload alias)')
  }

  // Duplicate aliases
  try {
    await aws.lambda.testTypes({ required: str, payload: str, data: str })
  }
  catch (err) {
    t.match(err.message, /Found duplicate payload parameters/, 'Errored on duplicate payload params')
  }
})

// TODO Plugins - plugin validation
// TODO Plugins - error handling

test('Validation', async t => {
  t.plan(4)
  try {
    let aws = client(basic)
    await aws()
  }
  catch (err) {
    t.match(err.message, /No AWS service specified/, 'Throw on missing AWS service')
    reset()
  }

  try {
    let aws = client(basic)
    await aws({ service: 'lolidk', host, port, endpoint })
  }
  catch (err) {
    t.match(err.message, /Invalid AWS service specified/, 'Throw on invalid AWS service')
    reset()
  }

  try {
    let aws = client({ ...basic, protocol: 'lolidk' })
    await aws({ service, host, port, endpoint })
  }
  catch (err) {
    t.match(err.message, /Protocol must be/, 'Throw on bad protocol config')
    reset()
  }

  try {
    let aws = client({ ...basic, plugins: { ok: true } })
    await aws({ service, host, port, endpoint })
  }
  catch (err) {
    t.match(err.message, /Plugins must be an array/, 'Throw on invalid plugins config')
    reset()
  }
})

test('Tear down env', async t => {
  t.plan(1)
  await closeServer()
  t.notOk(server, 'Server ended')
})
