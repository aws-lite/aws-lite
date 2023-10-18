let { join } = require('path')
let { Readable } = require('stream')
let qs = require('querystring')
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
  t.plan(54)
  let request, result, payload, query, responseBody, url

  let headers = { 'content-type': 'application/json' }

  let aws = await client(config)

  // Client has configuration and credentials
  t.ok(Object.keys(aws.config).length, `Client has config object with configuration properties: ${Object.keys(aws.config).join(', ')}`)
  t.equal(aws.credentials.accessKeyId, config.accessKeyId, `Client has credentials object with accessKeyId property`)
  t.equal(aws.credentials.secretAccessKey, config.secretAccessKey, `Client has credentials object wih secretAccessKey property`)
  t.equal(aws.credentials.sessionToken, config.sessionToken, `Client has credentials object wih sessionToken property`)
  t.notOk({}.propertyIsEnumerable.call(aws.credentials, 'secretAccessKey'), `secretAccessKey is a non-enumerable property`)
  t.notOk({}.propertyIsEnumerable.call(aws.credentials, 'sessionToken'), `sessionToken is a non-enumerable property`)

  // Basic get request
  result = await aws({ service, endpoint })
  request = server.getCurrentRequest()
  t.notOk(request.body, 'Request included no body')
  t.equal(result.statusCode, 200, 'Client returned status code of response')
  t.ok(result.headers, 'Client returned response headers')
  t.equal(result.payload, null, 'Client returned empty response payload as null')
  basicRequestChecks(t, 'GET')

  // Basic get request with query string params
  query = { foo: 'bar', json: JSON.stringify({ ok: true }) }
  url = endpoint + '?' + qs.stringify(query)
  result = await aws({ service, endpoint, query })
  basicRequestChecks(t, 'GET', { url })

  // Basic post request
  payload = { ok: true }
  responseBody = { aws: 'lol' }
  server.use({ responseBody, responseHeaders: headers })
  result = await aws({ service, endpoint, payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Request included correct body')
  t.deepEqual(result.payload, responseBody, 'Client returned response payload as parsed JSON')
  basicRequestChecks(t, 'POST')

  // Basic post with query string params
  payload = { ok: true }
  query = { fiz: 'buz', json: JSON.stringify({ ok: false }) }
  url = endpoint + '?' + qs.stringify(query)
  responseBody = { aws: 'lol' }
  server.use({ responseBody, responseHeaders: headers })
  result = await aws({ service, endpoint, payload, query })
  basicRequestChecks(t, 'POST', { url })

  // Publish an object while passing headers
  payload = { ok: true }
  result = await aws({ service, endpoint, payload, headers })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish JSON while passing headers
  payload = JSON.stringify({ ok: true })
  result = await aws({ service, endpoint, payload, headers })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, JSON.parse(payload), 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish some other kind of non-JSON request
  payload = 'hi'
  result = await aws({ service, endpoint, payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body.toString(), payload, 'Request included correct body (just a string)')
  reset()

  // Publish a stream
  payload = new Readable()
  let text = 'hi\nhello\nyo'
  text.split('').forEach(c => payload.push(c))
  payload.push(null)
  await aws({ service, endpoint, payload, method: 'POST', headers: { 'content-length': text.length } })
  request = server.getCurrentRequest()
  t.equal(request.body.toString(), text, 'Request included correct body')
  basicRequestChecks(t, 'POST')

  // Ensure endpoints without leading slashes are handled properly
  result = await aws({ service, endpoint: 'an/endpoint' })
  request = server.getCurrentRequest()
  t.deepEqual(request.url, endpoint, 'Request included correct body (just a string)')
  reset()

  // Endpoint returns XML
  responseBody = '<result><hello>yo</hello></result>'
  server.use({ responseBody, responseHeaders: { 'content-type': 'application/xml' } })
  result = await aws({ service, endpoint })
  t.deepEqual(result.payload, { hello: 'yo' }, 'Client returned XML response payload as parsed object')
  basicRequestChecks(t, 'GET')

  // Endpoint returns a buffer
  responseBody = Buffer.from('ohi')
  server.use({ responseBody, responseHeaders: { 'content-type': 'application/octet-stream' } })
  result = await aws({ service, endpoint })
  t.deepEqual(result.payload, responseBody, 'Client returned response payload as buffer')
  basicRequestChecks(t, 'GET')
})

test('Primary client - aliased params', async t => {
  t.plan(8)
  let request
  let aws = await client(config)

  // Endpoint
  await aws({ service, endpoint })
  request = server.getCurrentRequest()
  t.equal(request.url, endpoint, 'Made request to correct endpoint (options.endpoint)')
  reset()

  // Host / hostname
  await aws({ service, endpoint })
  request = server.getCurrentRequest()
  t.ok(request, 'Made request to correct host (options.host)')
  reset()
  await aws({ service, hostname: host, port, path: endpoint })
  request = server.getCurrentRequest()
  t.ok(request, 'Made request to correct host (options.hostname)')
  reset()

  // Payload / body / data / json + serialization
  let payload = { ok: true }
  await aws({ service, endpoint, payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.payload)')
  reset()
  await aws({ service, endpoint, body: payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.body)')
  reset()
  await aws({ service, endpoint, data: payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.data)')
  reset()
  await aws({ service, endpoint, json: payload })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, 'Made request with correct body (options.json)')
  reset()

  let string = 'hi'
  await aws({ service, endpoint, payload: string })
  request = server.getCurrentRequest()
  t.equal(request.body.toString(), string, 'Made request with correct body (plain string)')
  reset()
})

test('Primary client - AWS JSON payloads', async t => {
  t.plan(29)
  let request, result, body

  let headersAwsJSON = () => ({ 'content-type': 'application/x-amz-json-1.0' })

  let responseBody = { aws: { S: 'idk' } } // Raw response object should be AWS JSON
  let expectedResponseBody = () => ({ aws: 'idk' }) // Parsed response should be unmarshalled

  let aws = await client(config)

  // Basic post with AWS-flavored JSON
  body = { ok: true }
  server.use({ responseBody, responseHeaders: headersAwsJSON() })
  result = await aws({ service, endpoint, body, headers: headersAwsJSON() })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, { ok: { BOOL: true } }, 'Request included correct body (raw AWS JSON)')
  t.deepEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON specified via headers
  body = { ok: false }
  server.use({ responseBody, responseHeaders: headersAwsJSON() })
  result = await aws({ service, endpoint, body, headers: headersAwsJSON() })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, { ok: { BOOL: false } }, 'Request included correct body (raw AWS JSON)')
  t.deepEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON specified via `awsjson` param (bool)
  body = { ok: false }
  server.use({ responseBody, responseHeaders: headersAwsJSON() })
  result = await aws({ service, endpoint, body, awsjson: true })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, { ok: { BOOL: false } }, 'Request included correct body (raw AWS JSON)')
  t.deepEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON specified via `awsjson` param (array)
  body = { ok: true, fine: false }
  server.use({ responseBody, responseHeaders: headersAwsJSON() })
  result = await aws({ service, endpoint, body, awsjson: [ 'fine' ] })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, { ok: true, fine: { BOOL: false } }, 'Request included correct body (raw AWS JSON)')
  t.deepEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON response, but it's actually just regular JSON because AWS
  let regularJSON = { regular: 'JSON' }
  server.use({ responseBody: regularJSON, responseHeaders: headersAwsJSON() })
  result = await aws({ service, endpoint })
  request = server.getCurrentRequest()
  t.deepEqual(result.payload, regularJSON, 'Client returned response payload as parsed, unmarshalled JSON')
  reset()
})

test('Primary client - error handling', async t => {
  t.plan(19)
  let responseStatusCode, responseBody, responseHeaders

  // Normal error
  try {
    responseStatusCode = 400
    responseBody = { message: 'lolno', other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    server.use({ responseBody, responseHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, endpoint })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda: lolno/, 'Error included basic information')
    t.equal(err.other, responseBody.other, 'Error has other metadata')
    t.equal(err.statusCode, responseStatusCode, 'Error has response status code')
    t.ok(err.headers, 'Error has response headers')
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
    await aws({ service, endpoint })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda/, 'Error included basic information')
    t.ok(err.message.includes(responseBody), 'Error has message')
    t.equal(err.statusCode, responseStatusCode, 'Error has response status code')
    t.ok(err.headers, 'Error has response headers')
    t.equal(err.service, service, 'Error has service')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Request-level failure
  try {
    let aws = await client(config)
    await aws({ service, port: badPort, endpoint })
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
  t.plan(3)
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
    await aws({ service: 'lolidk', endpoint })
  }
  catch (err) {
    t.match(err.message, /Invalid AWS service specified/, 'Throw on invalid AWS service')
    reset()
  }

  try {
    let aws = await client(config)
    await aws({ service, endpoint, query: [ 'hi', 'there' ] })
  }
  catch (err) {
    t.match(err.message, /Query property must be an object/, 'Throw on invalid AWS service')
    reset()
  }
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.pass('Server ended')
})
