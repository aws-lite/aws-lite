import { join } from 'node:path'
import process from 'node:process'
import test from 'tape'
import { copy, defaults, resetServer as reset, server } from '../../lib/index.mjs'

let client
let cwd = process.cwd()
let mock = join(cwd, 'test', 'mock')
let pluginDir = join(mock, 'plugins')
let p = path => process.platform.startsWith('win') ? 'file://' + path : path

const { config, service } = defaults
const jsonHeaders = { 'content-type': 'application/json' }
const xmlHeaders = { 'content-type': 'application/xml' }


const simplePaginator = {
  cursor: 'Cursor',
  token: 'Token',
  accumulator: 'Accumulator',
}

const nestedPaginator = {
  cursor: 'Cursor',
  token: 'Nest.Token',
  accumulator: 'Nest.Accumulator',
}

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

const nestedResponseBodies = [
  {
    Nest: {
      Token: 't1',
      Accumulator: 'a1',
    },
  },
  {
    Nest: {
      Token: 't2',
      Accumulator: 'a2',
    },
  },
  {
    Nest: { Accumulator: 'a3' },
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

test('Async iterator - raw client', async t => {
  const aws = await client(config)
  const headers = copy(jsonHeaders)
  const paginate = 'iterator'
  const rawRequest = { service, headers, paginate }
  let page, response, request, expectedCursor, expectedPayload, expectedUrl

  t.test('Query cursor', async t => {
    t.plan(7)

    // Returns async iterator
    response = await aws({
      ...rawRequest,
      paginator: { ...simplePaginator, type: 'query' },
    })

    // First page
    server.use({ responseBody: simpleResponseBodies[0], responseHeaders: jsonHeaders })
    page = await response.next()
    t.deepEqual(page.value.payload, simpleResponseBodies[0], 'Response is correct')
    reset()

    // Second page
    server.use({ responseBody: simpleResponseBodies[1], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedUrl = `/?Cursor=${simpleResponseBodies[0].Token}`
    t.deepEqual(page.value.payload, simpleResponseBodies[1], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: simpleResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedUrl = `/?Cursor=${simpleResponseBodies[1].Token}`
    t.deepEqual(page.value.payload, simpleResponseBodies[2], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Client does not send extra request')
    reset()
  })

  t.test('Query cursor - nested', async t => {
    t.plan(7)

    // Returns async iterator
    response = await aws({
      ...rawRequest,
      paginator: { ...nestedPaginator, type: 'query' },
    })

    // First page
    server.use({ responseBody: nestedResponseBodies[0], responseHeaders: jsonHeaders })
    page = await response.next()
    t.deepEqual(page.value.payload, nestedResponseBodies[0], 'Response is correct')
    reset()

    // Second page
    server.use({ responseBody: nestedResponseBodies[1], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedUrl = `/?Cursor=${simpleResponseBodies[0].Token}`
    t.deepEqual(page.value.payload, nestedResponseBodies[1], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: nestedResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedUrl = `/?Cursor=${simpleResponseBodies[1].Token}`
    t.deepEqual(page.value.payload, nestedResponseBodies[2], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Client does not send extra request')
    reset()
  })

  t.test('Payload cursor', async t => {
    t.plan(7)

    // Returns async iterator
    response = await aws({
      ...rawRequest,
      paginator: { ...simplePaginator, type: 'payload' },
    })

    // First page
    server.use({ responseBody: simpleResponseBodies[0], responseHeaders: jsonHeaders })
    page = await response.next()
    t.deepEqual(page.value.payload, simpleResponseBodies[0], 'Response is correct')
    reset()

    // Second page
    server.use({ responseBody: simpleResponseBodies[1], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedPayload = { Cursor: simpleResponseBodies[0].Token }
    t.deepEqual(page.value.payload, simpleResponseBodies[1], 'Response is correct')
    t.deepEqual(request.body, expectedPayload, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: simpleResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedPayload = { Cursor: simpleResponseBodies[1].Token }
    t.deepEqual(page.value.payload, simpleResponseBodies[2], 'Response is correct')
    t.deepEqual(request.body, expectedPayload, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Client does not send extra request')
    reset()
  })

  t.test('Payload cursor - nested', async t => {
    t.plan(7)

    // Returns async iterator
    response = await aws({
      ...rawRequest,
      paginator: { ...nestedPaginator, type: 'payload' },
    })

    // First page
    server.use({ responseBody: nestedResponseBodies[0], responseHeaders: jsonHeaders })
    page = await response.next()
    t.deepEqual(page.value.payload, nestedResponseBodies[0], 'Response is correct')
    reset()

    // Second page
    server.use({ responseBody: nestedResponseBodies[1], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedPayload = { Cursor: nestedResponseBodies[0].Nest.Token }
    t.deepEqual(page.value.payload, nestedResponseBodies[1], 'Response is correct')
    t.deepEqual(request.body, expectedPayload, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: nestedResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedPayload = { Cursor: nestedResponseBodies[1].Nest.Token }
    t.deepEqual(page.value.payload, nestedResponseBodies[2], 'Response is correct')
    t.deepEqual(request.body, expectedPayload, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Client does not send extra request')
    reset()
  })

  t.test('Headers cursor', async t => {
    t.plan(7)

    // Returns async iterator
    response = await aws({
      ...rawRequest,
      paginator: { ...simplePaginator, type: 'headers' },
    })

    // First page
    server.use({ responseBody: simpleResponseBodies[0], responseHeaders: jsonHeaders })
    page = await response.next()
    t.deepEqual(page.value.payload, simpleResponseBodies[0], 'Response is correct')
    reset()

    // Second page
    server.use({ responseBody: simpleResponseBodies[1], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedCursor = simpleResponseBodies[0].Token
    t.deepEqual(page.value.payload, simpleResponseBodies[1], 'Response is correct')
    t.equal(request.headers.cursor, expectedCursor, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: simpleResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedCursor = simpleResponseBodies[1].Token
    t.deepEqual(page.value.payload, simpleResponseBodies[2], 'Response is correct')
    t.equal(request.headers.cursor, expectedCursor, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Client does not send extra request')
    reset()
  })

  t.test('Headers cursor - nested', async t => {
    t.plan(7)

    // Returns async iterator
    response = await aws({
      ...rawRequest,
      paginator: { ...nestedPaginator, type: 'headers' },
    })

    // First page
    server.use({ responseBody: nestedResponseBodies[0], responseHeaders: jsonHeaders })
    page = await response.next()
    t.deepEqual(page.value.payload, nestedResponseBodies[0], 'Response is correct')
    reset()

    // Second page
    server.use({ responseBody: nestedResponseBodies[1], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedCursor = nestedResponseBodies[0].Nest.Token
    t.deepEqual(page.value.payload, nestedResponseBodies[1], 'Response is correct')
    t.equal(request.headers.cursor, expectedCursor, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: nestedResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedCursor = nestedResponseBodies[1].Nest.Token
    t.deepEqual(page.value.payload, nestedResponseBodies[2], 'Response is correct')
    t.equal(request.headers.cursor, expectedCursor, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Client does not send extra request')
    reset()
  })
})

test('Async iterator - plugin', async t => {
  t.plan(7)
  const paginate = 'iterator'
  let aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'paginated.js'))) ] })
  let expectedToken, expectedUrl, page, response, request

  // Returns async iterator
  response = await aws.lambda.PaginatedMethod({
    paginate,
    paginator: { ...simplePaginator, type: 'query' },
  })

  // First page
  server.use({ responseBody: simpleResponseBodies[0], responseHeaders: jsonHeaders })
  page = await response.next()
  expectedToken = simpleResponseBodies[0].Token
  t.equal(page.value.Token, expectedToken, 'Response is correct')
  reset()

  // Second page
  server.use({ responseBody: simpleResponseBodies[1], responseHeaders: jsonHeaders })
  page = await response.next()
  request = server.getCurrentRequest()
  expectedToken = simpleResponseBodies[1].Token
  expectedUrl = `/?Cursor=${simpleResponseBodies[0].Token}`
  t.equal(page.value.Token, expectedToken, 'Response is correct')
  t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
  reset()

  // Third page
  server.use({ responseBody: simpleResponseBodies[2], responseHeaders: jsonHeaders })
  page = await response.next()
  request = server.getCurrentRequest()
  expectedUrl = `/?Cursor=${simpleResponseBodies[1].Token}`
  t.false(page.value.Token, 'Response is correct')
  t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
  reset()

  // No more pages
  page = await response.next()
  request = server.getCurrentRequest()
  t.ok(page.done, 'Iterator stops when expected')
  t.equal(request, undefined, 'Client does not send extra request')
  reset()
})

test('Default paginator - raw client', async t => {
  const aws = await client(config)
  const headers = copy(jsonHeaders)
  const paginate = true
  const accumulateRequests = true
  let response, requests, responseIterator, expectedCursor, expectedUrl
  const rawRequest = { service, headers, paginate }

  const simpleExpectedPayload = {
    Accumulator: [
      simpleResponseBodies[0].Accumulator,
      simpleResponseBodies[1].Accumulator,
      simpleResponseBodies[2].Accumulator,
    ],
  }

  const nestedExpectedPayload = {
    Nest: {
      Accumulator: [
        simpleResponseBodies[0].Accumulator,
        simpleResponseBodies[1].Accumulator,
        simpleResponseBodies[2].Accumulator,
      ],
    },
  }

  const simpleResponses = [
    {
      responseBody: simpleResponseBodies[0],
      responseHeaders: jsonHeaders,
    },
    {
      responseBody: simpleResponseBodies[1],
      responseHeaders: jsonHeaders,
    },
    {
      responseBody: simpleResponseBodies[2],
      responseHeaders: jsonHeaders,
    },
  ]

  const nestedResponses = [
    {
      responseBody: nestedResponseBodies[0],
      responseHeaders: jsonHeaders,
    },
    {
      responseBody: nestedResponseBodies[1],
      responseHeaders: jsonHeaders,
    },
    {
      responseBody: nestedResponseBodies[2],
      responseHeaders: jsonHeaders,
    },
  ]

  t.test('Query cursor', async t => {
    t.plan(4)
    responseIterator = simpleResponses.entries()
    server.use({ accumulateRequests, responseIterator })
    response = await aws({
      ...rawRequest,
      paginator: { ...simplePaginator, type: 'query' },
    })
    requests = server.getCurrentRequest()

    // Response payload
    t.deepEqual(response.payload, simpleExpectedPayload, 'Response is correct')

    // Second page
    expectedUrl = `/?Cursor=${simpleResponseBodies[0].Token}`
    t.equal(requests[1].url, expectedUrl, 'Request cursor matches previous response token')

    // Third page
    expectedUrl = `/?Cursor=${simpleResponseBodies[1].Token}`
    t.equal(requests[2].url, expectedUrl, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Client does not send extra request')
    reset()
  })

  t.test('Query cursor - nested', async t => {
    t.plan(4)
    responseIterator = nestedResponses.entries()
    server.use({ accumulateRequests, responseIterator })
    response = await aws({
      ...rawRequest,
      paginator: { ...nestedPaginator, type: 'query' },
    })
    requests = server.getCurrentRequest()

    // Response payload
    t.deepEqual(response.payload, nestedExpectedPayload, 'Response is correct')

    // Second page
    expectedUrl = `/?Cursor=${simpleResponseBodies[0].Token}`
    t.equal(requests[1].url, expectedUrl, 'Request cursor matches previous response token')

    // Third page
    expectedUrl = `/?Cursor=${simpleResponseBodies[1].Token}`
    t.equal(requests[2].url, expectedUrl, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Client does not send extra request')
    reset()
  })

  t.test('Payload cursor', async t => {
    t.plan(4)
    responseIterator = simpleResponses.entries()
    server.use({ accumulateRequests, responseIterator })
    response = await aws({
      ...rawRequest,
      paginator: { ...simplePaginator, type: 'payload' },
    })
    requests = server.getCurrentRequest()

    // Response payload
    t.deepEqual(response.payload, simpleExpectedPayload, 'Response is correct')

    // Second page
    expectedCursor = simpleResponseBodies[0].Token
    t.equal(requests[1].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = simpleResponseBodies[1].Token
    t.equal(requests[2].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Client does not send extra request')
    reset()
  })

  t.test('Payload cursor - nested', async t => {
    t.plan(4)
    responseIterator = nestedResponses.entries()
    server.use({ accumulateRequests, responseIterator })
    response = await aws({
      ...rawRequest,
      paginator: { ...nestedPaginator, type: 'payload' },
    })
    requests = server.getCurrentRequest()

    // Response payload
    t.deepEqual(response.payload, nestedExpectedPayload, 'Response is correct')

    // Second page
    expectedCursor = nestedResponseBodies[0].Nest.Token
    t.equal(requests[1].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = nestedResponseBodies[1].Nest.Token
    t.equal(requests[2].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Client does not send extra request')
    reset()
  })

  t.test('Headers cursor', async t => {
    t.plan(4)
    responseIterator = simpleResponses.entries()
    server.use({ accumulateRequests, responseIterator })
    response = await aws({
      ...rawRequest,
      paginator: { ...simplePaginator, type: 'headers' },
    })
    requests = server.getCurrentRequest()

    // Response payload
    t.deepEqual(response.payload, simpleExpectedPayload, 'Response is correct')

    // Second page
    expectedCursor = simpleResponseBodies[0].Token
    t.equal(requests[1].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = simpleResponseBodies[1].Token
    t.equal(requests[2].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Client does not send extra request')
    reset()
  })

  t.test('Headers cursor - nested', async t => {
    t.plan(4)
    responseIterator = nestedResponses.entries()
    server.use({ accumulateRequests, responseIterator })
    response = await aws({
      ...rawRequest,
      paginator: { ...nestedPaginator, type: 'headers' },
    })
    requests = server.getCurrentRequest()

    // Response payload
    t.deepEqual(response.payload, nestedExpectedPayload, 'Response is correct')

    // Second page
    expectedCursor = nestedResponseBodies[0].Nest.Token
    t.equal(requests[1].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = nestedResponseBodies[1].Nest.Token
    t.equal(requests[2].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, nestedResponseBodies.length, 'Client does not send extra request')
    reset()
  })
})

test('Default paginator - plugin', async t => {
  t.plan(5)
  const paginate = true
  let aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'paginated.js'))) ] })
  let  expectedUrl, response, requests

  const expectedResponse = {
    Accumulator: [
      simpleResponseBodies[0].Accumulator,
      simpleResponseBodies[1].Accumulator,
      simpleResponseBodies[2].Accumulator,
    ],
  }

  const pluginResponses = [
    {
      responseBody: simpleResponseBodies[0],
      responseHeaders: jsonHeaders,
    },
    {
      responseBody: simpleResponseBodies[1],
      responseHeaders: jsonHeaders,
    },
    {
      responseBody: simpleResponseBodies[2],
      responseHeaders: jsonHeaders,
    },
  ]

  const responseIterator = pluginResponses.entries()
  server.use({ accumulateRequests: true, responseIterator })
  response = await aws.lambda.PaginatedMethod({
    paginate,
    paginator: { ...simplePaginator, type: 'query' },
  })
  requests = server.getCurrentRequest()

  // Response payload
  t.deepEqual(response, expectedResponse, 'Response is correct')

  // First page
  expectedUrl = `/`
  t.equal(requests[0].url, expectedUrl, 'Request cursor matches previous response token')

  // Second page
  expectedUrl = `/?Cursor=${simpleResponseBodies[0].Token}`
  t.equal(requests[1].url, expectedUrl, 'Request cursor matches previous response token')

  // Third page
  expectedUrl = `/?Cursor=${simpleResponseBodies[1].Token}`
  t.equal(requests[2].url, expectedUrl, 'Request cursor matches previous response token')

  // Correct number of requests
  t.equal(requests.length, pluginResponses.length, 'Client does not send extra request')
  reset()
})

test('Error handling', async t => {
  t.plan(11)
  let aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'paginated.js'))) ] })
  let response

  // Response error
  response = await aws.lambda.ResponseErrorMethod({
    paginate: 'iterator',
    paginator: { ...simplePaginator, type: 'query' },
  })
  server.use({ responseBody: simpleResponseBodies[0], responseHeaders: jsonHeaders })
  try {
    await response.next()
    t.fail('Did not catch response error')
  }
  catch {
    t.pass('Caught response error')
  }
  reset()

  // Invalid cursor
  try {
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: {
        ...simplePaginator,
        cursor: undefined,
        type: 'query',
      },
    })
    t.fail('Did not catch invalid cursor')
  }
  catch {
    t.pass('Caught invalid cursor')
  }
  reset()

  // Invalid token
  try {
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: {
        ...simplePaginator,
        token: undefined,
        type: 'query',
      },
    })
    t.fail('Did not catch invalid token')
  }
  catch {
    t.pass('Caught invalid token')
  }
  reset()

  // Mismatched token/cursor
  try {
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: {
        ...simplePaginator,
        token: 'Token',
        cursor: [ 'Cursor' ],
        type: 'query',
      },
    })
    t.fail('Did not catch mismatched token/cursor')
  }
  catch {
    t.pass('Caught mismatched token/cursor')
  }
  reset()

  // Invalid accumulator
  try {
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: {
        ...simplePaginator,
        accumulator: undefined,
        type: 'query',
      },
    })
    t.fail('Did not catch invalid accumulator')
  }
  catch {
    t.pass('Caught invalid accumulator')
  }
  reset()

  // Invalid type
  try {
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: {
        ...simplePaginator,
        type: 'bananarama',
      },
    })
    t.fail('Did not catch invalid type')
  }
  catch {
    t.pass('Caught invalid type')
  }
  reset()

  // Mismatched token/cursor array lengths
  try {
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: {
        ...simplePaginator,
        token: [ 'Token', 'spooooooon' ],
        cursor: [ 'Cursor' ],
        type: 'query',
      },
    })
    t.fail('Did not catch mismatched token/cursor')
  }
  catch {
    t.pass('Caught mismatched token/cursor')
  }
  reset()

  // Missing API response
  response = await aws.lambda.PaginatedMethod({
    paginate: 'iterator',
    paginator: { ...simplePaginator, type: 'query' },
  })
  server.use({ responseHeaders: jsonHeaders })
  try {
    await response.next()
    t.fail('Did not catch missing API response')
  }
  catch {
    t.pass('Caught missing API response')
  }
  reset()

  // Invalid response payload
  response = await aws.lambda.PaginatedMethod({
    paginate: 'iterator',
    paginator: { ...simplePaginator, type: 'query' },
  })
  server.use({ responseBody: 72, responseHeaders: jsonHeaders })
  try {
    await response.next()
    t.fail('Did not catch invalid response payload')
  }
  catch {
    t.pass('Caught invalid response payload')
  }
  reset()

  // Missing API response
  try {
    server.use({ responseHeaders: jsonHeaders })
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: { ...simplePaginator, type: 'query' },
    })
    t.fail('Did not catch missing API response')
  }
  catch {
    t.pass('Caught missing API response')
  }
  reset()

  // Invalid response payload
  try {
    server.use({ responseBody: 72, responseHeaders: jsonHeaders })
    response = await aws.lambda.PaginatedMethod({
      paginate: true,
      paginator: { ...simplePaginator, type: 'query' },
    })
    t.fail('Did not catch invalid response payload')
  }
  catch {
    t.pass('Caught invalid response payload')
  }
  reset()
})

test('Misc', async t => {
  // t.plan(0)
  let aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'paginated.js'))) ] })
  let response

  const responses = [
    {
      responseBody: `<result><Accumulator>a1</Accumulator><Token>t1</Token></result>`,
      responseHeaders: xmlHeaders,
    },
    {
      responseBody: `<result><Token>t2</Token></result>`,
      responseHeaders: xmlHeaders,
    },
    {
      responseBody: `<result><Accumulator>a1</Accumulator></result>`,
      responseHeaders: xmlHeaders,
    },
  ]

  server.use({ responseIterator: responses.entries() })
  response = await aws.lambda.PaginatedMethod({
    paginate: true,
    paginator: { ...simplePaginator, type: 'query' },
  })
  t.equal(response.Accumulator.length, 1, 'Terminate accumulation when accumulator is falsy')
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.pass('Server ended')
})
