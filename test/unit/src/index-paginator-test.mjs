import { join } from 'node:path'
import process from 'node:process'
import test from 'tape'
import { copy, defaults, resetServer as reset, server } from '../../lib/index.mjs'

let client
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

const iamResponse = [
  `<ListUsersResponse xmlns="https://iam.amazonaws.com/doc/2010-05-08/">
 <ListUsersResult>
    <Users>
       <member>
          <UserId>AID2MAB8DPLSRHEXAMPLE</UserId>
          <Path>/division_abc/subdivision_xyz/engineering/</Path>
          <UserName>Andrew</UserName>
          <Arn>arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Andrew</Arn>
          <CreateDate>2012-09-05T19:38:48Z</CreateDate>
          <PasswordLastUsed>2014-09-08T21:47:36Z</PasswordLastUsed>
       </member>
    </Users>
    <IsTruncated>true</IsTruncated>
    <Marker>${simpleResponseBodies[0].Token}</Marker>
 </ListUsersResult>
 <ResponseMetadata>
    <RequestId>7a62c49f-347e-4fc4-9331-6e8eEXAMPLE</RequestId>
 </ResponseMetadata>

</ListUsersResponse>`,
  `<ListUsersResponse xmlns="https://iam.amazonaws.com/doc/2010-05-08/">
<ListUsersResult>
   <Users>
      <member>
         <UserId>AID2MAB8DPLSRHEXAMPLE</UserId>
         <Path>/division_abc/subdivision_xyz/engineering/</Path>
         <UserName>Andrew</UserName>
         <Arn>arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Andrew</Arn>
         <CreateDate>2012-09-05T19:38:48Z</CreateDate>
         <PasswordLastUsed>2014-09-08T21:47:36Z</PasswordLastUsed>
      </member>
   </Users>
   <IsTruncated>true</IsTruncated>
   <Marker>${simpleResponseBodies[1].Token}</Marker>
</ListUsersResult>
<ResponseMetadata>
   <RequestId>7a62c49f-347e-4fc4-9331-6e8eEXAMPLE</RequestId>
</ResponseMetadata>
</ListUsersResponse>`,

  `<ListUsersResponse xmlns="https://iam.amazonaws.com/doc/2010-05-08/">
<ListUsersResult>
   <Users>
      <member>
         <UserId>AID2MAB8DPLSRHEXAMPLE</UserId>
         <Path>/division_abc/subdivision_xyz/engineering/</Path>
         <UserName>Andrew</UserName>
         <Arn>arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Andrew</Arn>
         <CreateDate>2012-09-05T19:38:48Z</CreateDate>
         <PasswordLastUsed>2014-09-08T21:47:36Z</PasswordLastUsed>
      </member>
   </Users>
   <IsTruncated>false</IsTruncated>
</ListUsersResult>
<ResponseMetadata>
   <RequestId>7a62c49f-347e-4fc4-9331-6e8eEXAMPLE</RequestId>
</ResponseMetadata>
</ListUsersResponse>`,
]

function* generateResponses (responses) {
  for (let i in responses) {
    yield responses[i]
  }
}

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
  const MaxItems = 1
  const paginate = 'iterator'
  let aws = await client({ ...config, plugins: [ import('@aws-lite/iam') ] })
  let expectedToken, expectedUrl, page, response, request

  // Returns async iterator
  response = await aws.iam.ListUsers({ MaxItems, paginate })

  // First page
  server.use({ responseBody: iamResponse[0], responseHeaders: xmlHeaders })
  page = await response.next()
  expectedToken = simpleResponseBodies[0].Token
  t.equal(page.value.Marker, expectedToken, 'Response is correct')
  reset()

  // Second page
  server.use({ responseBody: iamResponse[1], responseHeaders: xmlHeaders })
  page = await response.next()
  request = server.getCurrentRequest()
  expectedToken = simpleResponseBodies[1].Token
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1&Marker=${simpleResponseBodies[0].Token}`
  t.equal(page.value.Marker, expectedToken, 'Response is correct')
  t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
  reset()

  // Third page
  server.use({ responseBody: iamResponse[2], responseHeaders: xmlHeaders })
  page = await response.next()
  request = server.getCurrentRequest()
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1&Marker=${simpleResponseBodies[1].Token}`
  t.false(page.value.Marker, 'Response is correct')
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
  let response, requests, responseGenerator, expectedCursor, expectedUrl
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
    responseGenerator = generateResponses(simpleResponses)
    server.use({ accumulateRequests: true, responseGenerator })
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
    responseGenerator = generateResponses(nestedResponses)
    server.use({ accumulateRequests: true, responseGenerator })
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
    responseGenerator = generateResponses(simpleResponses)
    server.use({ accumulateRequests: true, responseGenerator })
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
    responseGenerator = generateResponses(nestedResponses)
    server.use({ accumulateRequests: true, responseGenerator })
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
    responseGenerator = generateResponses(simpleResponses)
    server.use({ accumulateRequests: true, responseGenerator })
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
    responseGenerator = generateResponses(nestedResponses)
    server.use({ accumulateRequests: true, responseGenerator })
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
  const MaxItems = 1
  const paginate = true
  let aws = await client({ ...config, plugins: [ import('@aws-lite/iam') ] })
  let  expectedUrl, response, requests

  let expectedResponse = {
    Users: [
      {
        UserId: 'AID2MAB8DPLSRHEXAMPLE',
        Path: `/division_abc/subdivision_xyz/engineering/`,
        UserName: 'Andrew',
        Arn: `arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Andrew`,
        CreateDate: `2012-09-05T19:38:48Z`,
        PasswordLastUsed: `2014-09-08T21:47:36Z`,
      },
      {
        UserId: 'AID2MAB8DPLSRHEXAMPLE',
        Path: `/division_abc/subdivision_xyz/engineering/`,
        UserName: 'Andrew',
        Arn: `arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Andrew`,
        CreateDate: `2012-09-05T19:38:48Z`,
        PasswordLastUsed: `2014-09-08T21:47:36Z`,
      },
      {
        UserId: 'AID2MAB8DPLSRHEXAMPLE',
        Path: `/division_abc/subdivision_xyz/engineering/`,
        UserName: 'Andrew',
        Arn: `arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Andrew`,
        CreateDate: `2012-09-05T19:38:48Z`,
        PasswordLastUsed: `2014-09-08T21:47:36Z`,
      },
    ],
  }

  const pluginResponses = [
    {
      responseBody: iamResponse[0],
      responseHeaders: xmlHeaders,
    },
    {
      responseBody: iamResponse[1],
      responseHeaders: xmlHeaders,
    },
    {
      responseBody: iamResponse[2],
      responseHeaders: xmlHeaders,
    },
  ]
  const responseGenerator = generateResponses(pluginResponses)
  server.use({ accumulateRequests: true, responseGenerator })

  response = await aws.iam.ListUsers({ MaxItems, paginate })
  requests = server.getCurrentRequest()

  // Response payload
  t.deepEqual(response, expectedResponse, 'Response is correct')

  // First page
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1`
  t.equal(requests[0].url, expectedUrl, 'Request cursor matches previous response token')

  // Second page
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1&Marker=${simpleResponseBodies[0].Token}`
  t.equal(requests[1].url, expectedUrl, 'Request cursor matches previous response token')

  // Third page
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1&Marker=${simpleResponseBodies[1].Token}`
  t.equal(requests[2].url, expectedUrl, 'Request cursor matches previous response token')

  // Correct number of requests
  t.equal(requests.length, pluginResponses.length, 'Client does not send extra request')
  reset()
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.pass('Server ended')
})
