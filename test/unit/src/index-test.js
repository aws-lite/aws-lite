let { join } = require('path')
let http = require('http')
let test = require('tape')
let { resetAWSEnvVars } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

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

  function basicChecks (method) {
    t.equal(request.method, method, `Made a ${method} request`)
    t.equal(request.url, endpoint, 'Made request to correct endpoint')
    t.ok(request.headers['x-amz-date'], 'Made request with x-amz-date header')
    t.ok(request.headers['authorization'], 'Made request with authorization header')
    t.match(request.headers['authorization'], /Credential=foo/, 'Authorization header is using the access key')
    reset()
  }

  // Basic get request
  result = await aws({ service, host, port, endpoint })
  t.notOk(request.body, 'Request included no body')
  t.equal(result, '', 'Client returned empty response body as empty string')
  basicChecks('GET')

  // Basic post request
  body = { ok: true }
  responseBody = { aws: 'lol' }
  responseHeaders = { 'content-type': 'application/json' }
  result = await aws({ service, host, port, endpoint, body })
  t.deepEqual(request.body, body, 'Request included correct body')
  t.deepEqual(result, responseBody, 'Client returned response body as parsed JSON')
  basicChecks('POST')

  // Basic post with AWS-flavored JSON
  body = { ok: true }
  responseBody = { aws: 'lol' }
  responseHeaders = { 'content-type': 'application/x-amz-json' }
  result = await aws({ service, host, port, endpoint, body })
  t.deepEqual(request.body, body, 'Request included correct body')
  t.deepEqual(result, responseBody, 'Client returned response body as parsed JSON')
  basicChecks('POST')

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
  t.plan(9)
  let aws = client(basic)

  // Endpoint / path
  await aws({ service, host, port, endpoint })
  t.equal(request.url, endpoint, 'Made request to correct endpoint (options.endpoint)')
  reset()
  await aws({ service, host, port, path: endpoint })
  t.equal(request.url, endpoint, 'Made request to correct endpoint (options.path)')
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

test('Validation', async t => {
  t.plan(4)
  try {
    let aws = client({ accessKeyId, secretAccessKey, region, protocol, keepAlive })
    await aws()
  }
  catch (err) {
    t.match(err.message, /No AWS service specified/, 'Throw on missing AWS service')
    reset()
  }

  try {
    let aws = client({ accessKeyId, secretAccessKey, region, protocol, keepAlive })
    await aws({ service: 'lolidk', host, port, endpoint })
  }
  catch (err) {
    t.match(err.message, /Invalid AWS service specified/, 'Throw on invalid AWS service')
    reset()
  }

  try {
    let aws = client({ accessKeyId, secretAccessKey, region, protocol: 'lolidk', keepAlive })
    await aws({ service, host, port, endpoint })
  }
  catch (err) {
    t.match(err.message, /Protocol must be/, 'Throw on bad protocol config')
    reset()
  }

  try {
    let aws = client({ accessKeyId, secretAccessKey, region, keepAlive, plugins: { ok: true } })
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
