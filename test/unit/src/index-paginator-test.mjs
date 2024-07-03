import { join } from 'node:path'
import process from 'node:process'
// import qs from 'node:querystring'
import test from 'tape'
import { copy, defaults, resetServer as reset, server } from '../../lib/index.mjs'
// import url from 'node:url'

let client
let { config, service } = defaults
let jsonHeaders = { 'content-type': 'application/json' }
// let xmlHeaders = { 'content-type': 'application/xml' }


const simpleResponseBodies = [
  {
    Token: 't1',
    Accumulator: 'a1',
  },
  {
    Token: 't2',
    Accumulator: 'a2',
  },
  {
    Accumulator: 'a3',
  },
]


test('Set up env', async t => {
  t.plan(2)
  let cwd = process.cwd()
  let sut = 'file://' + join(cwd, 'src', 'index.js')
  client = (await import(sut)).default
  t.ok(client, 'aws-lite client is present')
  let started = await server.start()
  t.ok(started, 'Started server')
})

test('Async Iterator - raw client', async t => {
  t.plan(6)
  let aws = await client(config)
  let headers = copy(jsonHeaders)
  let expectedUrl
  let page
  let response
  let request

  // Returns async iterator
  response = await aws({ service, headers, paginate: 'iterator', paginator: { cursor: 'Cursor', token: 'Token', type: 'query' }, query: { } })

  // Query type, first page
  server.use({ responseBody: simpleResponseBodies[0], responseHeaders: jsonHeaders })
  page = await response.next()
  t.deepEqual(page.value.payload, simpleResponseBodies[0], 'Incorrect response body')
  reset()

  // Query type, second page
  server.use({ responseBody: simpleResponseBodies[1], responseHeaders: jsonHeaders })
  page = await response.next()
  request = server.getCurrentRequest()
  expectedUrl = '/?Cursor=t1'
  t.deepEqual(page.value.payload, simpleResponseBodies[1], 'Incorrect response body')
  t.equal(request.url, expectedUrl, 'Response token does not match next request cursor')
  reset()

  // Query type, third page
  server.use({ responseBody: simpleResponseBodies[2], responseHeaders: jsonHeaders })
  page = await response.next()
  request = server.getCurrentRequest()
  expectedUrl = '/?Cursor=t2'
  t.deepEqual(page.value.payload, simpleResponseBodies[2], 'Incorrect response body')
  t.equal(request.url, expectedUrl, 'Response token does not match next request cursor')
  reset()

  // Query type, no more pages
  page = await response.next()
  t.true(page.done, 'Iterator not done when it ought to be')
  reset()
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.pass('Server ended')
})
