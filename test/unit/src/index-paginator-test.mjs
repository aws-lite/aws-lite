import { join } from 'node:path'
import process from 'node:process'
import test from 'tape'
import { copy, defaults, resetServer as reset, server } from '../../lib/index.mjs'

let client
let { config, service } = defaults
let jsonHeaders = { 'content-type': 'application/json' }
let xmlHeaders = { 'content-type': 'application/xml' }

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

function* makeResponses (responses) {
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
  // t.plan(7)
  let aws = await client(config)
  let headers = copy(jsonHeaders)
  let page
  let response
  let request

  t.test('Query cursor', async t => {
    t.plan(7)
    let expectedUrl

    // Returns async iterator
    response = await aws({
      service,
      headers,
      paginate: 'iterator',
      paginator: { cursor: 'Cursor', token: 'Token', type: 'query' },
      query: {},
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
    expectedUrl = '/?Cursor=t1'
    t.deepEqual(page.value.payload, simpleResponseBodies[1], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: simpleResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedUrl = '/?Cursor=t2'
    t.deepEqual(page.value.payload, simpleResponseBodies[2], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Server does not send extra request')
    reset()
  })

  t.test('Query cursor - nested', async t => {
    t.plan(7)
    let expectedUrl

    // Returns async iterator
    response = await aws({
      service,
      headers,
      paginate: 'iterator',
      paginator: { cursor: 'Cursor', token: 'Nest.Token', type: 'query' },
      query: {},
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
    expectedUrl = '/?Cursor=t1'
    t.deepEqual(page.value.payload, nestedResponseBodies[1], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // Third page
    server.use({ responseBody: nestedResponseBodies[2], responseHeaders: jsonHeaders })
    page = await response.next()
    request = server.getCurrentRequest()
    expectedUrl = '/?Cursor=t2'
    t.deepEqual(page.value.payload, nestedResponseBodies[2], 'Response is correct')
    t.equal(request.url, expectedUrl, 'Request cursor matches previous response token')
    reset()

    // No more pages
    page = await response.next()
    request = server.getCurrentRequest()
    t.ok(page.done, 'Iterator stops when expected')
    t.equal(request, undefined, 'Server does not send extra request')
    reset()
  })

  t.test('Payload cursor', async t => {
    t.plan(7)
    let expectedPayload

    // Returns async iterator
    response = await aws({
      service,
      headers,
      paginate: 'iterator',
      paginator: { cursor: 'Cursor', token: 'Token', type: 'payload' },
      payload: {},
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
    t.equal(request, undefined, 'Server does not send extra request')
    reset()
  })

  t.test('Payload cursor - nested', async t => {
    t.plan(7)
    let expectedPayload

    // Returns async iterator
    response = await aws({
      service,
      headers,
      paginate: 'iterator',
      paginator: { cursor: 'Cursor', token: 'Nest.Token', type: 'payload' },
      payload: {},
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
    t.equal(request, undefined, 'Server does not send extra request')
    reset()
  })

  t.test('Headers cursor', async t => {
    t.plan(7)
    let expectedCursor

    // Returns async iterator
    response = await aws({
      service,
      headers,
      paginate: 'iterator',
      paginator: { cursor: 'Cursor', token: 'Token', type: 'headers' },
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
    t.equal(request, undefined, 'Server does not send extra request')
    reset()
  })

  t.test('Headers cursor - nested', async t => {
    t.plan(7)
    let expectedCursor

    // Returns async iterator
    response = await aws({
      service,
      headers,
      paginate: 'iterator',
      paginator: { cursor: 'Cursor', token: 'Nest.Token', type: 'headers' },
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
    t.equal(request, undefined, 'Server does not send extra request')
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
  t.true(page.done, 'Iterator stops when expected')
  t.equal(request, undefined, 'Server does not send extra request')
  reset()
})

test('Default paginator - raw client', async t => {
  let aws = await client(config)
  let headers = copy(jsonHeaders)
  let response
  let expectedResponsePayload
  let requests

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
    const responseGenerator = makeResponses(simpleResponses)
    let expectedUrl
    expectedResponsePayload = { Accumulator: [ 'a1', 'a2', 'a3' ] }

    server.use({ accumulateRequests: true })
    server.use({ responseGenerator })

    response = await aws({
      service,
      headers,
      query: {},
      paginate: true,
      paginator: {
        cursor: 'Cursor',
        token: 'Token',
        accumulator: 'Accumulator',
        type: 'query',
      },
    })

    // Response payload
    requests = server.getCurrentRequest()
    t.deepEqual(response.payload, expectedResponsePayload, 'Response is correct')

    // Second page
    expectedUrl = '/?Cursor=t1'
    t.equal(requests[1].url, expectedUrl, 'Request cursor matches previous response token')

    // Third page
    expectedUrl = '/?Cursor=t2'
    t.equal(requests[2].url, expectedUrl, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Server does not send extra request')
    reset()
  })

  t.test('Query cursor - nested', async t => {
    t.plan(4)
    const responseGenerator = makeResponses(nestedResponses)
    let expectedUrl
    expectedResponsePayload = { Nest: { Accumulator: [ 'a1', 'a2', 'a3' ] } }

    server.use({ accumulateRequests: true })
    server.use({ responseGenerator })

    response = await aws({
      service,
      headers,
      query: {},
      paginate: true,
      paginator: {
        cursor: 'Cursor',
        token: 'Nest.Token',
        accumulator: 'Nest.Accumulator',
        type: 'query',
      },
    })

    // Response payload
    requests = server.getCurrentRequest()
    t.deepEqual(response.payload, expectedResponsePayload, 'Response is correct')

    // Second page
    expectedUrl = '/?Cursor=t1'
    t.equal(requests[1].url, expectedUrl, 'Request cursor matches previous response token')

    // Third page
    expectedUrl = '/?Cursor=t2'
    t.equal(requests[2].url, expectedUrl, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Server does not send extra request')
    reset()
  })

  t.test('Payload cursor', async t => {
    t.plan(4)
    const responseGenerator = makeResponses(simpleResponses)
    let expectedCursor
    expectedResponsePayload = { Accumulator: [ 'a1', 'a2', 'a3' ] }

    server.use({ accumulateRequests: true })
    server.use({ responseGenerator })

    response = await aws({
      service,
      headers,
      payload: {},
      paginate: true,
      paginator: {
        cursor: 'Cursor',
        token: 'Token',
        accumulator: 'Accumulator',
        type: 'payload',
      },
    })

    // Response payload
    requests = server.getCurrentRequest()
    t.deepEqual(response.payload, expectedResponsePayload, 'Response is correct')

    // Second page
    expectedCursor = simpleResponseBodies[0].Token
    t.equal(requests[1].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = simpleResponseBodies[1].Token
    t.equal(requests[2].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Server does not send extra request')
    reset()
  })

  t.test('Payload cursor - nested', async t => {
    t.plan(4)
    const responseGenerator = makeResponses(nestedResponses)
    let expectedCursor
    expectedResponsePayload = { Nest: { Accumulator: [ 'a1', 'a2', 'a3' ] } }

    server.use({ accumulateRequests: true })
    server.use({ responseGenerator })

    response = await aws({
      service,
      headers,
      payload: {},
      paginate: true,
      paginator: {
        cursor: 'Cursor',
        token: 'Nest.Token',
        accumulator: 'Nest.Accumulator',
        type: 'payload',
      },
    })

    // Response payload
    requests = server.getCurrentRequest()
    t.deepEqual(response.payload, expectedResponsePayload, 'Response is correct')

    // Second page
    expectedCursor = nestedResponseBodies[0].Nest.Token
    t.equal(requests[1].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = nestedResponseBodies[1].Nest.Token
    t.equal(requests[2].body.Cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Server does not send extra request')
    reset()
  })

  t.test('Headers cursor', async t => {
    t.plan(4)
    const responseGenerator = makeResponses(simpleResponses)
    let expectedCursor
    expectedResponsePayload = { Accumulator: [ 'a1', 'a2', 'a3' ] }

    server.use({ accumulateRequests: true })
    server.use({ responseGenerator })

    response = await aws({
      service,
      headers,
      payload: {},
      paginate: true,
      paginator: {
        cursor: 'Cursor',
        token: 'Token',
        accumulator: 'Accumulator',
        type: 'headers',
      },
    })

    // Response payload
    requests = server.getCurrentRequest()
    t.deepEqual(response.payload, expectedResponsePayload, 'Response is correct')

    // Second page
    expectedCursor = simpleResponseBodies[0].Token
    t.equal(requests[1].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = simpleResponseBodies[1].Token
    t.equal(requests[2].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, simpleResponses.length, 'Server does not send extra request')
    reset()
  })

  t.test('Headers cursor - nested', async t => {
    t.plan(4)
    const responseGenerator = makeResponses(nestedResponses)
    let expectedCursor
    expectedResponsePayload = { Nest: { Accumulator: [ 'a1', 'a2', 'a3' ] } }

    server.use({ accumulateRequests: true })
    server.use({ responseGenerator })

    response = await aws({
      service,
      headers,
      paginate: true,
      paginator: {
        cursor: 'Cursor',
        token: 'Nest.Token',
        accumulator: 'Nest.Accumulator',
        type: 'headers',
      },
    })
    requests = server.getCurrentRequest()

    // Response payload
    t.deepEqual(response.payload, expectedResponsePayload, 'Response is correct')

    // Second page
    expectedCursor = nestedResponseBodies[0].Nest.Token
    t.equal(requests[1].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Third page
    expectedCursor = nestedResponseBodies[1].Nest.Token
    t.equal(requests[2].headers.cursor, expectedCursor, 'Request cursor matches previous response token')

    // Correct number of requests
    t.equal(requests.length, nestedResponseBodies.length, 'Server does not send extra request')
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
  const responseGenerator = makeResponses(pluginResponses)

  server.use({ accumulateRequests: true })
  server.use({ responseGenerator })

  response = await aws.iam.ListUsers({ MaxItems, paginate })
  // console.log(response)
  requests = server.getCurrentRequest()

  // Response payload
  t.deepEqual(response, expectedResponse, 'Response is correct')

  // First page
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1`
  t.equal(requests[0].url, expectedUrl, 'Request cursor matches previous response token')

  // // Second page
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1&Marker=${simpleResponseBodies[0].Token}`
  t.equal(requests[1].url, expectedUrl, 'Request cursor matches previous response token')

  // // Third page
  expectedUrl = `/?Action=ListUsers&Version=2010-05-08&MaxItems=1&Marker=${simpleResponseBodies[1].Token}`
  t.equal(requests[2].url, expectedUrl, 'Request cursor matches previous response token')

  // // Correct number of requests
  t.equal(requests.length, pluginResponses.length, 'Server does not send extra request')
  reset()
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.pass('Server ended')
})
