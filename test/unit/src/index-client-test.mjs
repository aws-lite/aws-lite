import { join } from 'node:path'
import { Readable } from 'node:stream'
import process from 'node:process'
import qs from 'node:querystring'
import { Buffer } from 'node:buffer'
import test from 'node:test'
import { basicRequestChecks, copy, defaults, resetServer as reset, server } from '../../lib/index.mjs'
import url from 'node:url'

let client
let { badPort, config, host, protocol, service, path, port } = defaults
let jsonHeaders = { 'content-type': 'application/json' }
let xmlHeaders = { 'content-type': 'application/xml' }
let __filename = url.fileURLToPath(import.meta.url).replace(/\\/g, '/')

/**
 * Reminder!
 * The client mutates headers, so make sure you copy() them if using in a request
 */

test('Set up env', async t => {
  t.plan(2)
  let cwd = process.cwd()
  let sut = 'file://' + join(cwd, 'src', 'index.js')
  client = (await import(sut)).default
  t.assert.ok(client, 'aws-lite client is present')
  let started = await server.start()
  t.assert.ok(started, 'Started server')
})

test('Primary client - core functionality', async t => {
  t.plan(66)
  let request, result, payload, query, responseBody, url
  let aws = await client(config)

  // Client has configuration and credentials
  t.assert.ok(Object.keys(aws.config).length, `Client has config object with configuration properties: ${Object.keys(aws.config).join(', ')}`)
  t.assert.strictEqual(aws.credentials.accessKeyId, config.accessKeyId, `Client has credentials object with accessKeyId property`)
  t.assert.strictEqual(aws.credentials.secretAccessKey, config.secretAccessKey, `Client has credentials object wih secretAccessKey property`)
  t.assert.strictEqual(aws.credentials.sessionToken, config.sessionToken, `Client has credentials object wih sessionToken property`)
  t.assert.ok(!{}.propertyIsEnumerable.call(aws.credentials, 'secretAccessKey'), `secretAccessKey is a non-enumerable property`)
  t.assert.ok(!{}.propertyIsEnumerable.call(aws.credentials, 'sessionToken'), `sessionToken is a non-enumerable property`)

  // Basic get request
  result = await aws({ service, path })
  request = server.getCurrentRequest()
  t.assert.ok(!request.body, 'Request included no body')
  t.assert.strictEqual(result.statusCode, 200, 'Client returned status code of response')
  t.assert.ok(result.headers, 'Client returned response headers')
  t.assert.strictEqual(result.payload, null, 'Client returned empty response payload as null')
  basicRequestChecks(t, 'GET')

  // Basic get request with query string params
  query = { foo: 'bar', json: JSON.stringify({ ok: true }) }
  url = path + '?' + qs.stringify(query)
  result = await aws({ service, path, query })
  basicRequestChecks(t, 'GET', { url })

  // Basic post request
  payload = { ok: true }
  responseBody = { aws: 'lol' }
  server.use({ responseBody, responseHeaders: jsonHeaders })
  result = await aws({ service, path, payload })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, payload, 'Request included correct body')
  t.assert.deepStrictEqual(result.payload, responseBody, 'Client returned response payload as parsed JSON')
  basicRequestChecks(t, 'POST')

  // Basic post with query string params
  payload = { ok: true }
  query = { fiz: 'buz', json: JSON.stringify({ ok: false }) }
  url = path + '?' + qs.stringify(query)
  server.use({ responseBody, responseHeaders: jsonHeaders })
  result = await aws({ service, path, payload, query })
  basicRequestChecks(t, 'POST', { url })

  // Don't pass through nullish query string params
  query = { fiz: undefined, json: undefined, foo: null }
  url = path
  server.use({ responseBody, responseHeaders: jsonHeaders })
  result = await aws({ service, path, payload, query })
  basicRequestChecks(t, 'POST', { url })

  // Pass through defined, non-empty query string params
  query = { fiz: 'buz', json: false, foo: '' }
  url = path + '?' + qs.stringify({ fiz: 'buz', json: false, foo: '' })
  server.use({ responseBody, responseHeaders: jsonHeaders })
  result = await aws({ service, path, payload, query })
  basicRequestChecks(t, 'POST', { url })

  // Publish an object while passing headers
  payload = { ok: true }
  result = await aws({ service, path, payload, headers: copy(jsonHeaders) })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, payload, 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish JSON while passing headers
  payload = JSON.stringify({ ok: true })
  result = await aws({ service, path, payload, headers: copy(jsonHeaders) })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, JSON.parse(payload), 'Request included correct body (pre-encoded JSON)')
  reset()

  // Publish a buffer
  payload = Buffer.from(JSON.stringify({ ok: true }))
  result = await aws({ service, path, payload })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body.toString(), payload.toString(), 'Request included correct body (buffer)')

  // Publish some other kind of non-JSON request
  payload = 'hi'
  result = await aws({ service, path, payload })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body.toString(), payload, 'Request included correct body (just a string)')
  reset()

  // Publish a stream
  payload = new Readable()
  let text = 'hi\nhello\nyo'
  text.split('').forEach(c => payload.push(c))
  payload.push(null)
  await aws({ service, path, payload, method: 'POST', headers: { 'content-length': text.length } })
  request = server.getCurrentRequest()
  t.assert.strictEqual(request.body.toString(), text, 'Request included correct body')
  basicRequestChecks(t, 'POST')

  // Get a streamed response
  responseBody = Buffer.from('ohi')
  server.use({ responseBody, responseHeaders: { 'content-type': 'application/octet-stream' } })
  result = await aws({ service, path, streamResponsePayload: true })
  let streamedResponse
  await new Promise((res, rej) => {
    let chunks = []
    result.payload.on('data', chunk => chunks.push(chunk))
    result.payload.on('error', err => rej(err))
    result.payload.on('end', () => {
      streamedResponse = Buffer.concat(chunks).toString()
      res()
    })
  })
  t.assert.strictEqual(streamedResponse, responseBody.toString(), 'Client returned response payload as stream')

  // Ensure paths without leading slashes are handled properly
  result = await aws({ service, path: 'a/path' })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.url, path, 'Request included correct body (just a string)')
  reset()

  // Path returns XML
  responseBody = '<result><hello>yo</hello></result>'
  server.use({ responseBody, responseHeaders: xmlHeaders })
  result = await aws({ service, path })
  t.assert.deepStrictEqual(result.payload, { hello: 'yo' }, 'Client returned XML response payload as parsed object')
  basicRequestChecks(t, 'GET')

  // Path returns a buffer
  responseBody = Buffer.from('ohi')
  server.use({ responseBody, responseHeaders: { 'content-type': 'application/octet-stream' } })
  result = await aws({ service, path })
  t.assert.deepStrictEqual(result.payload, responseBody, 'Client returned response payload as buffer')
  basicRequestChecks(t, 'GET')
})

test('Primary client - aliased params', async t => {
  t.plan(7)
  let request
  let aws = await client(config)

  // Path
  await aws({ service, path })
  request = server.getCurrentRequest()
  t.assert.strictEqual(request.url, path, 'Made request to correct path (options.path)')
  reset()

  // Host / hostname
  await aws({ service, path })
  request = server.getCurrentRequest()
  t.assert.ok(request, 'Made request to correct host (options.host)')
  reset()
  await aws({ service, hostname: host, port, path: path })
  request = server.getCurrentRequest()
  t.assert.ok(request, 'Made request to correct host (options.hostname)')
  reset()

  // Payload / body / data / json + serialization
  let payload = { ok: true }
  await aws({ service, path, payload })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, payload, 'Made request with correct body (options.payload)')
  reset()
  await aws({ service, path, body: payload })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, payload, 'Made request with correct body (options.body)')
  reset()
  await aws({ service, path, data: payload })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, payload, 'Made request with correct body (options.data)')
  reset()

  let string = 'hi'
  await aws({ service, path, payload: string })
  request = server.getCurrentRequest()
  t.assert.strictEqual(request.body.toString(), string, 'Made request with correct body (plain string)')
  reset()
})

test('Primary client - AWS JSON payloads', async t => {
  t.plan(29)
  let request, result, body
  let headers = { 'content-type': 'application/x-amz-json-1.0' }
  let responseBody = { aws: { S: 'idk' } } // Raw response object should be AWS JSON
  let expectedResponseBody = () => ({ aws: 'idk' }) // Parsed response should be unmarshalled
  let aws = await client(config)

  // Basic post with AWS-flavored JSON
  body = { ok: true }
  server.use({ responseBody, responseHeaders: headers })
  result = await aws({ service, path, body, headers: copy(headers) })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, { ok: { BOOL: true } }, 'Request included correct body (raw AWS JSON)')
  t.assert.deepStrictEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON specified via headers
  body = { ok: false }
  server.use({ responseBody, responseHeaders: headers })
  result = await aws({ service, path, body, headers: copy(headers) })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, { ok: { BOOL: false } }, 'Request included correct body (raw AWS JSON)')
  t.assert.deepStrictEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON specified via `awsjson` param (bool)
  body = { ok: false }
  server.use({ responseBody, responseHeaders: headers })
  result = await aws({ service, path, body, awsjson: true })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, { ok: { BOOL: false } }, 'Request included correct body (raw AWS JSON)')
  t.assert.deepStrictEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON specified via `awsjson` param (array)
  body = { ok: true, fine: false }
  server.use({ responseBody, responseHeaders: headers })
  result = await aws({ service, path, body, awsjson: [ 'fine' ] })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, { ok: true, fine: { BOOL: false } }, 'Request included correct body (raw AWS JSON)')
  t.assert.deepStrictEqual(result.payload, expectedResponseBody(), 'Client returned response payload as parsed, unmarshalled JSON')
  basicRequestChecks(t, 'POST')
  reset()

  // AWS JSON response, but it's actually just regular JSON because AWS
  let regularJSON = { regular: 'JSON' }
  server.use({ responseBody: regularJSON, responseHeaders: headers })
  result = await aws({ service, path })
  t.assert.deepStrictEqual(result.payload, regularJSON, 'Client returned response payload as parsed, unmarshalled JSON')
  reset()
})

test('Primary client - XML payloads', async t => {
  t.plan(24)
  let request, result, payload, responseBody
  let aws = await client(config)

  // Publishing XML
  payload = { ok: true }
  responseBody = { aws: 'lol' }
  server.use({ responseBody, responseHeaders: jsonHeaders })
  await aws({ service, path, headers: copy(xmlHeaders), payload })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, '<ok>true</ok>', 'Request included correct body')
  basicRequestChecks(t, 'POST')
  reset()

  // Publishing XML with a namespace
  payload = { ok: true }
  responseBody = { aws: 'lol' }
  let xmlns = 'https://idk.lol'
  server.use({ responseBody, responseHeaders: jsonHeaders })
  await aws({ service, path, headers: copy(xmlHeaders), payload, xmlns })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, `<ok xmlns="${xmlns}">true</ok>`, 'Request included correct body')
  reset()

  // Path returns XML
  responseBody = '<result><hello>yo</hello></result>'
  server.use({ responseBody, responseHeaders: xmlHeaders })
  result = await aws({ service, path })
  t.assert.deepStrictEqual(result.payload, { hello: 'yo' }, 'Client returned XML response payload as parsed object')
  basicRequestChecks(t, 'GET')
  reset()

  // XML string values are parsed to data
  responseBody = `
<result>
  <string>yo</string>
  <number>1</number>
  <float>1.23</float>
  <date>2024-01-01T00:00:00.000Z</date>
  <booltrue>true</booltrue>
  <boolfalse>false</boolfalse>
  <null>null</null>
  <empty></empty>
  <space>  </space>
  <obj>
    <number>1</number>
  </obj>
  <arr>
    <item>1</item>
    <item>2</item>
    <item>3</item>
    <item>
      <booltrue>true</booltrue>
      <boolfalse>false</boolfalse>
      <null>null</null>
    </item>
  </arr>
</result>`
  server.use({ responseBody, responseHeaders: xmlHeaders })
  result = await aws({ service, path })
  t.assert.strictEqual(result.payload.string, 'yo', 'Client returned XML response with parsed string')
  t.assert.strictEqual(result.payload.number, 1, 'Client returned XML response with parsed number')
  t.assert.strictEqual(result.payload.float, 1.23, 'Client returned XML response with parsed float')
  t.assert.deepStrictEqual(result.payload.date, new Date('2024-01-01T00:00:00.000Z'), 'Client returned XML response with parsed date')
  t.assert.strictEqual(result.payload.booltrue, true, 'Client returned XML response with parsed boolean (true)')
  t.assert.strictEqual(result.payload.boolfalse, false, 'Client returned XML response with parsed boolean (false)')
  t.assert.strictEqual(result.payload.null, null, 'Client returned XML response with parsed null')
  t.assert.strictEqual(result.payload.empty, '', 'Client returned XML response with empty string')
  t.assert.strictEqual(result.payload.space, '  ', 'Client returned XML response with string of space(s)')
  t.assert.deepStrictEqual(result.payload.obj, { number: 1 }, 'Client returned XML response with parsed nested object values')
  t.assert.deepStrictEqual(result.payload.arr, { item: [ 1, 2, 3, { booltrue: true, boolfalse: false, null: null } ] }, 'Client returned XML response with parsed array values, including nested objects')
  reset()
})

test('Primary client - raw response payloads', async t => {
  t.plan(12)
  let result, responseBody
  let aws = await client(config)

  // Requesting raw response payload returns unparsed JSON
  responseBody = JSON.stringify({ ok: true })
  server.use({ responseBody, responseHeaders: xmlHeaders })
  result = await aws({ service, path, rawResponsePayload: true })
  t.assert.deepStrictEqual(result.payload, Buffer.from(responseBody), `Client returned JSON response payload as unparsed buffer: ${responseBody}`)
  basicRequestChecks(t, 'GET')
  reset()

  // Requesting raw response payload returns unparsed XML
  responseBody = '<result><hello>yo</hello></result>'
  server.use({ responseBody, responseHeaders: xmlHeaders })
  result = await aws({ service, path, rawResponsePayload: true })
  t.assert.deepStrictEqual(result.payload, Buffer.from(responseBody), `Client returned XML response payload as unparsed buffer: ${responseBody}`)
  basicRequestChecks(t, 'GET')
  reset()
})

test('Primary client - error handling', async t => {
  t.plan(35)
  let responseStatusCode, responseBody

  // Normal error
  try {
    responseStatusCode = 400
    responseBody = { message: 'lolno', other: 'metadata' }
    server.use({ responseBody, responseHeaders: jsonHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, path })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda: lolno/, 'Error included basic information')
    t.assert.strictEqual(err.other, responseBody.other, 'Error has other metadata')
    t.assert.strictEqual(err.statusCode, responseStatusCode, 'Error has response status code')
    t.assert.ok(err.headers, 'Error has response headers')
    t.assert.strictEqual(err.service, service, 'Error has service')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    t.assert.ok(err.time, 'Error includes a timestamp')
    reset()
  }

  // Error payload is a named error object because reasons
  try {
    responseStatusCode = 400
    responseBody = { Error: { message: 'lolno', other: 'metadata', time: 'early' } }
    server.use({ responseBody, responseHeaders: jsonHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, path })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda: lolno/, 'Error included basic information')
    t.assert.strictEqual(err.other, responseBody.Error.other, 'Error has other metadata')
    t.assert.strictEqual(err.statusCode, responseStatusCode, 'Error has response status code')
    t.assert.ok(err.headers, 'Error has response headers')
    t.assert.strictEqual(err.service, service, 'Error has service')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    t.assert.strictEqual(err.time, 'early', 'Error includes a timestamp passed from response')
    reset()
  }

  // Use `[Cc]ode` property returned in error payloads
  try {
    responseStatusCode = 400
    responseBody = { Error: { Code: 'idk' } }
    server.use({ responseBody, responseHeaders: jsonHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, path })
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(err.name, 'idk', 'Error name is set to error.Code')
    t.assert.strictEqual(err.code, 'idk', 'error.code is set to error.Code')
    t.assert.ok(!err.Code, 'error.Code was removed')
    reset()
  }
  try {
    responseStatusCode = 400
    responseBody = { Error: { code: 'idk' } }
    server.use({ responseBody, responseHeaders: jsonHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, path })
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(err.name, 'idk', 'Error name is set to error.code')
    t.assert.strictEqual(err.code, 'idk', 'error.code is set')
    reset()
  }

  // Use `__type` property returned in error payloads
  try {
    responseStatusCode = 400
    responseBody = { Error: { __type: 'idk' } }
    server.use({ responseBody, responseHeaders: jsonHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, path })
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(err.name, 'idk', 'Error name is set to error.Code')
    t.assert.strictEqual(err.code, 'idk', 'error.code is set to error.__type')
    t.assert.strictEqual(err.__type, 'idk', 'error.__type is set')
    reset()
  }

  // Funky error - some paths/error states do things like return XML without a content-type
  try {
    responseStatusCode = 400
    responseBody = '<AccessDeniedException>\n' +
                   '  <Message>Unable to determine service/operation name to be authorized</Message>\n' +
                   '</AccessDeniedException>\n'
    server.use({ responseBody, responseHeaders: jsonHeaders, responseStatusCode })
    let aws = await client(config)
    await aws({ service, path })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda/, 'Error included basic information')
    t.assert.ok(err.message.includes(responseBody), 'Error has message')
    t.assert.strictEqual(err.statusCode, responseStatusCode, 'Error has response status code')
    t.assert.ok(err.headers, 'Error has response headers')
    t.assert.strictEqual(err.service, service, 'Error has service')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Request-level failure
  try {
    let aws = await client(config)
    await aws({ service, port: badPort, path })
  }
  catch (err) {
    console.log(err)
    // Node.js 20.x changed the HTTP connection error format
    let re = /\@aws-lite\/client: lambda: (connect )?ECONNREFUSED/
    t.assert.match(err.message, re, 'Error included basic information')
    t.assert.strictEqual(err.port, badPort, 'Error has port metadata')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.strictEqual(err.host, host, 'Error has host metadata')
    t.assert.strictEqual(err.protocol, protocol, 'Error has protocol metadata')
    t.assert.strictEqual(err.statusCode, undefined, 'Status code not found on incomplete request')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
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
    t.assert.match(err.message, /No AWS service specified/, 'Throw on missing AWS service')
    reset()
  }

  try {
    let aws = await client(config)
    await aws({ service: 'lolidk', path })
  }
  catch (err) {
    t.assert.match(err.message, /Invalid AWS service specified/, 'Throw on invalid AWS service')
    reset()
  }

  try {
    let aws = await client(config)
    await aws({ service, path, query: [ 'hi', 'there' ] })
  }
  catch (err) {
    t.assert.match(err.message, /Query property must be an object/, 'Throw on invalid AWS service')
    reset()
  }
})

test('Primary client - misc', async t => {
  t.plan(4)
  let request
  let aws = await client(config)

  let headers = copy(jsonHeaders)
  let responseBody = JSON.stringify({ ok: true })
  let payload1 = JSON.stringify({ hello: 'hi there' })
  let payload2 = JSON.stringify({ hello: 'well hello, friends' }) // This will fail as prematurely terminated JSON if headers are using previously mutated content-length from aws4 <= 1.2
  server.use({ responseBody, responseHeaders: jsonHeaders })

  await aws({ service, path, headers, payload: payload1 })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(headers, jsonHeaders, 'Headers not mutated')
  t.assert.strictEqual(Number(request.headers['content-length']), payload1.length, `Got correct content-length: ${payload2.length}`)
  reset()

  await aws({ service, path, headers, payload: payload2 })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(headers, jsonHeaders, 'Headers not mutated')
  t.assert.strictEqual(Number(request.headers['content-length']), payload2.length, `Got correct content-length: ${payload2.length}`)
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.assert.ok(true, 'Server ended')
})
