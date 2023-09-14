let { join } = require('path')
let test = require('tape')
let { basicRequestChecks, defaults, resetServer: reset, server } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let { badPort, config, host, protocol, service, endpoint, port } = defaults

test('Set up env', async t => {
  t.plan(2)
  t.ok(client, 'aws-lite client is present')
  let started = await server.start()
  t.ok(started, 'Started server')
})

test('Primary client - core functionality', async t => {
  t.plan(24)
  let request, result, body, responseBody

  let headers = { 'content-type': 'application/json' }

  let aws = await client(config)

  // Basic get request
  result = await aws({ service, host, port, endpoint })
  request = server.getCurrentRequest()
  t.notOk(request.body, 'Request included no body')
  t.equal(result, '', 'Client returned empty response body as empty string')
  basicRequestChecks(t, 'GET')

  // Basic post request
  body = { ok: true }
  responseBody = { aws: 'lol' }
  server.use({ responseBody, responseHeaders: { 'content-type': 'application/json' } })
  result = await aws({ service, host, port, endpoint, body })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, body, 'Request included correct body')
  t.deepEqual(result, responseBody, 'Client returned response body as parsed JSON')
  basicRequestChecks(t, 'POST')

  // Basic post with AWS-flavored JSON
  body = { ok: true }
  responseBody = { aws: 'lol' }
  server.use({ responseBody, responseHeaders: { 'content-type': 'application/x-amz-json' } })
  result = await aws({ service, host, port, endpoint, body })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, body, 'Request included correct body')
  t.deepEqual(result, responseBody, 'Client returned response body as parsed JSON')
  basicRequestChecks(t, 'POST')

  // Publish an object while passing headers
  body = { ok: true }
  result = await aws({ service, host, port, endpoint, body, headers })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, body, 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish JSON while passing headers
  body = JSON.stringify({ ok: true })
  result = await aws({ service, host, port, endpoint, body, headers })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, JSON.parse(body), 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish some other kind of non-JSON request
  body = 'hi'
  result = await aws({ service, host, port, endpoint, body })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, body, 'Request included correct body (just a string)')
  reset()
})

test('Primary client - aliased params', async t => {
  t.plan(8)
  let request
  let aws = await client(config)

  // Endpoint
  await aws({ service, host, port, endpoint })
  request = server.getCurrentRequest()
  t.equal(request.url, endpoint, 'Made request to correct endpoint (options.endpoint)')
  reset()

  // Host / hostname
  await aws({ service, host, port, endpoint })
  request = server.getCurrentRequest()
  t.ok(request, 'Made request to correct host (options.host)')
  reset()
  await aws({ service, hostname: host, port, path: endpoint })
  request = server.getCurrentRequest()
  t.ok(request, 'Made request to correct host (options.hostname)')
  reset()

  // Payload / body / data / json + serialization
  let payload = { ok: true }
  await aws({ service, host, port, endpoint, payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.payload)')
  reset()
  await aws({ service, host, port, endpoint, body: payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.body)')
  reset()
  await aws({ service, host, port, endpoint, data: payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.data)')
  reset()
  await aws({ service, host, port, endpoint, json: payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.json)')
  reset()

  let string = 'hi'
  await aws({ service, host, port, endpoint, payload: string })
  request = server.getCurrentRequest()
  t.equal(request.body, string, 'Made request with correct body (plain string)')
  reset()
})

test('Primary client - error handling', async t => {
  t.plan(17)
  let responseStatusCode, responseBody, responseHeaders

  // Normal error
  try {
    responseStatusCode = 400
    responseBody = { message: 'lolno', other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    server.use({ responseBody, responseHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, host, port, endpoint })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda: lolno/, 'Error included basic information')
    t.equal(err.other, responseBody.other, 'Error has other metadata')
    t.equal(err.statusCode, responseStatusCode, 'Error has status code')
    t.equal(err.service, service, 'Error has service')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Funky error - some endpoints/error states do things like return XML without a content-type
  try {
    responseStatusCode = 400
    responseBody = '<AccessDeniedException>\n' +
                   '  <Message>Unable to determine service/operation name to be authorized</Message>\n' +
                   '</AccessDeniedException>\n'
    server.use({ responseBody, responseHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, host, port, endpoint })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda/, 'Error included basic information')
    t.ok(err.message.includes(responseBody), 'Error has message')
    t.equal(err.statusCode, responseStatusCode, 'Error has status code')
    t.equal(err.service, service, 'Error has service')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Request-level failure
  try {
    let aws = await client(config)
    await aws({ service, host, port: badPort, endpoint })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda: connect ECONNREFUSED/, 'Error included basic information')
    t.equal(err.port, badPort, 'Error has port metadata')
    t.equal(err.service, service, 'Error has service metadata')
    t.equal(err.host, host, 'Error has host metadata')
    t.equal(err.protocol, protocol, 'Error has protocol metadata')
    t.equal(err.statusCode, undefined, 'Status code not found on incomplete request')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }
})

test('Primary client - validation', async t => {
  t.plan(2)
  try {
    let aws = await client(config)
    await aws()
  }
  catch (err) {
    t.match(err.message, /No AWS service specified/, 'Throw on missing AWS service')
    reset()
  }

  try {
    let aws = await client(config)
    await aws({ service: 'lolidk', host, port, endpoint })
  }
  catch (err) {
    t.match(err.message, /Invalid AWS service specified/, 'Throw on invalid AWS service')
    reset()
  }
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.pass('Server ended')
})
