let { join } = require('path')
let test = require('tape')
let { defaults } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let { config } = defaults
let jsonHeaders = { 'content-type': 'application/json' }
let rando = () => (Math.random() + 1).toString(36).substring(2)

test('Set up env', async t => {
  t.plan(1)
  t.ok(client, 'aws-lite client is present')
})

test('Testing - activation / deactivation', async t => {
  t.plan(3)
  let state

  state = client.testing.debug()
  t.equal(state.enabled, false, 'Testing mode is disabled by default')

  client.testing.enable()
  state = client.testing.debug()
  t.equal(state.enabled, true, 'test.enable() enables testing')

  client.testing.disable()
  state = client.testing.debug()
  t.equal(state.enabled, false, 'test.disable() disables testing')
})

// TODO: test resetting via enable/disable?

test('Testing - main client', async t => {
  t.plan(7)
  client.testing.enable()
  let aws = await client(config)

  let mockRes = {
    statusCode: 200,
    headers: jsonHeaders,
    payload: { ok: true },
  }
  client.testing.mock('client', mockRes)

  let expectedReq = {
    service: 'lambda',
    method: 'POST',
    payload: { lambda: 'payload', },
  }
  let result = await aws(expectedReq)

  // Requests
  let lastReq = client.testing.getLastRequest()
  t.deepEqual(lastReq.request, expectedReq, 'getLastRequest() matches expected request')
  let allReq = client.testing.getAllRequests()
  t.equal(allReq.length, 1, 'One request captured')

  // Responses
  t.deepEqual(result, mockRes, 'Raw client result matches expected response')
  let lastRes = client.testing.getLastResponse()
  t.deepEqual(lastRes.response, mockRes, 'getLastResponse() matches specified response params')
  let allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 1, 'One response captured')

  // Resetting
  client.testing.reset()
  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - plugins (not checking response method output)', async t => {
  t.plan(8)
  client.testing.enable()

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  let mockRes = {
    statusCode: 200,
    headers: jsonHeaders,
    payload: { ok: true },
  }
  client.testing.mock('DynamoDB.GetItem', mockRes)

  let expectedReq = {
    TableName: 'foo',
    Key: { id: 'bar' },
  }
  let result = await aws.DynamoDB.GetItem(expectedReq)

  // Requests
  let lastReq = client.testing.getLastRequest()
  let reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
  t.deepEqual(reqParams, expectedReq, 'getLastRequest() contains expected request')
  t.ok(lastReq.request.headers, 'Plugin method added specific headers')
  let allReq = client.testing.getAllRequests()
  t.equal(allReq.length, 1, 'One request captured')

  // Responses
  t.deepEqual(result, mockRes, 'Result matches expected response')
  let lastRes = client.testing.getLastResponse()
  t.deepEqual(lastRes.response, mockRes, 'getLastResponse() matches specified response params')
  let allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 1, 'One response captured')

  client.testing.reset()

  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - plugins (response method output)', async t => {
  t.plan(8)
  client.testing.enable({ usePluginResponseMethod: true })

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  let mockRes = {
    statusCode: 200,
    headers: jsonHeaders,
    payload: { ok: true },
  }
  client.testing.mock('DynamoDB.GetItem', mockRes)

  let expectedReq = {
    TableName: 'foo',
    Key: { id: 'bar' },
  }
  let result = await aws.DynamoDB.GetItem(expectedReq)

  // Requests
  let lastReq = client.testing.getLastRequest()
  let reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
  t.deepEqual(reqParams, expectedReq, 'getLastRequest() contains expected request')
  t.ok(lastReq.request.headers, 'Plugin method added specific headers')
  let allReq = client.testing.getAllRequests()
  t.equal(allReq.length, 1, 'One request captured')

  // Responses
  t.deepEqual(result, mockRes.payload, 'Result matches expected response (run through plugin response() method')
  let lastRes = client.testing.getLastResponse()
  t.deepEqual(lastRes.response, mockRes, 'getLastResponse() matches specified response params')
  let allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 1, 'One response captured')

  client.testing.reset()

  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - request / response sequences', async t => {
  t.plan(15)
  let allRes, lastReq, lastRes, reqParams
  client.testing.enable()

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  let mockRes1 = { payload: { ok: true } }
  let mockRes2 = { payload: { ok: false } }
  client.testing.mock('DynamoDB.GetItem', [ mockRes1, mockRes2 ])

  let expectedReq1 = {
    TableName: 'foo',
    Key: { id: 'bar' },
  }
  let expectedReq2 = {
    TableName: 'foo',
    Key: { id: 'baz' },
  }
  let result1 = await aws.DynamoDB.GetItem(expectedReq1)

  // First request / response cycle
  lastReq = client.testing.getLastRequest()
  reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
  t.deepEqual(reqParams, expectedReq1, 'getLastRequest() returned last request')

  t.deepEqual(result1, mockRes1, 'Result matches expected response')
  lastRes = client.testing.getLastResponse()
  t.deepEqual(lastRes.response, mockRes1, 'getLastResponse() matches specified response params')
  allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 1, 'One response captured')

  // Second request / response cycle
  let result2 = await aws.DynamoDB.GetItem(expectedReq2)
  lastReq = client.testing.getLastRequest()
  reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
  t.deepEqual(reqParams, expectedReq2, 'getLastRequest() returned second request')

  t.deepEqual(result2, mockRes2, 'Result matches expected response')
  lastRes = client.testing.getLastResponse()
  t.deepEqual(lastRes.response, mockRes2, 'getLastResponse() matches specified response params')
  allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 2, 'Two responses captured')

  // Additional requests use last remaining mock
  let result3 = await aws.DynamoDB.GetItem(expectedReq2)
  lastReq = client.testing.getLastRequest()
  reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
  t.deepEqual(reqParams, expectedReq2, 'getLastRequest() returned second request')

  t.deepEqual(result3, mockRes2, 'Result matches expected response')
  lastRes = client.testing.getLastResponse()
  t.deepEqual(lastRes.response, mockRes2, 'getLastResponse() matches specified response params')
  allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 3, 'Three responses captured')

  // We expect the request() method to append data to each request, so let's reduce it back down and match on the original requests
  let allReq = client.testing.getAllRequests()
  let reduced = allReq.map(({ request }) => ({
    TableName: request.TableName,
    Key: request.Key
  }))
  t.deepEqual(reduced, [ expectedReq1, expectedReq2, expectedReq2 ], 'Three requests captured')

  client.testing.reset()

  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - dynamic responses', async t => {
  t.plan(9)
  client.testing.enable()

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  let one, two
  let mockResSync = () => one = rando()
  let mockResAsync = async () => two = rando()
  client.testing.mock('DynamoDB.GetItem', [ mockResSync, mockResAsync ])

  let expectedReq = {
    TableName: 'foo',
    Key: { id: 'bar' },
  }
  let result1 = await aws.DynamoDB.GetItem(expectedReq)
  let result2 = await aws.DynamoDB.GetItem(expectedReq)

  t.ok(result1 && result2, 'Got results back from dynamic mocks')
  t.equal(result1, one, 'Got expected result from dynamic mock')
  t.equal(result2, two, 'Got expected result from dynamic mock')
  t.notEqual(result1, result2, 'Results are different')

  let result3 = await aws.DynamoDB.GetItem(expectedReq)
  t.ok(result3, 'Got results back from dynamic mocks')
  t.equal(result3, two, 'Got expected result from dynamic mock')
  t.notEqual(result3, result2, 'Results are different')

  client.testing.reset()

  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - multiple services', async t => {
  t.plan(14)
  let allRes, lastReq, lastRes, reqParams
  client.testing.enable()

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb'), import('@aws-lite/lambda') ] })

  let mockRes1 = { payload: { ok: true } }
  let mockRes2 = { payload: { ok: false } }
  let mockRes3 = { payload: { ok: 'fine' } }
  let mockRes4 = { payload: { ok: 'sure' } }
  client.testing.mock('client', mockRes1)
  client.testing.mock('DynamoDB.GetItem', mockRes2)
  client.testing.mock('Lambda.Invoke', mockRes3)
  client.testing.mock('Lambda.Invoke', mockRes4) // Overwrite the last

  let expectedReq1 = {
    service: 's3',
    pathPrefix: 'foo',
    payload: 'bar'
  }
  let expectedReq2 = {
    TableName: 'foo',
    Key: { id: 'baz' },
  }
  let expectedReq3 = {
    FunctionName: 'fiz',
    Payload: { ok: true },
  }
  let expectedReq4 = {
    FunctionName: 'buz',
    Payload: { ok: false },
  }
  let result1 = await aws(expectedReq1)
  let result2 = await aws.DynamoDB.GetItem(expectedReq2)
  let result3 = await aws.Lambda.Invoke(expectedReq3)
  let result4 = await aws.Lambda.Invoke(expectedReq4)

  lastReq = client.testing.getLastRequest()
  reqParams = { FunctionName: lastReq.request.FunctionName, Payload: lastReq.request.Payload }
  t.deepEqual(reqParams, expectedReq4, 'getLastRequest() returned last request')

  lastReq = client.testing.getLastRequest('client')
  t.deepEqual(lastReq.request, expectedReq1, `getLastRequest('client') returned last request from a specified method`)

  lastReq = client.testing.getLastRequest('DynamoDB.GetItem')
  reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
  t.deepEqual(reqParams, expectedReq2, `getLastRequest('DynamoDB.GetItem') returned last request from a specified method`)

  lastReq = client.testing.getLastRequest('Lambda.Invoke')
  reqParams = { FunctionName: lastReq.request.FunctionName, Payload: lastReq.request.Payload }
  t.deepEqual(reqParams, expectedReq4, `getLastRequest('Lambda.Invoke') returned last request from a specified method`)

  t.deepEqual(result1, mockRes1, 'Result matches expected response')
  t.deepEqual(result2, mockRes2, 'Result matches expected response')
  t.deepEqual(result3, mockRes4, 'Result matches expected response')
  t.deepEqual(result4, mockRes4, 'Result matches expected response')

  lastRes = client.testing.getLastResponse('client')
  t.deepEqual(lastRes.response, mockRes1, `getLastResponse('client') matches specified response params`)

  lastRes = client.testing.getLastResponse('DynamoDB.GetItem')
  t.deepEqual(lastRes.response, mockRes2, `getLastResponse('DynamoDB.GetItem') matches specified response params`)

  lastRes = client.testing.getLastResponse('Lambda.Invoke')
  t.deepEqual(lastRes.response, mockRes4, `getLastResponse('Lambda.Invoke') matches specified response params`)

  allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 4, 'Four responses captured')

  client.testing.reset()

  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - errors', async t => {
  t.plan(2)
  client.testing.enable()

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  try {
    await aws.DynamoDB.GetItem({
      TableName: 'foo',
      Key: { id: 'bar' },
    })
    t.fail('Expected an error')
  }
  catch (err) {
    t.match(err.message, /Mock response not found/, 'Did not find a mock response')
  }

  try {
    client.testing.mock('DynamoDB', { ok: true })
    t.fail('Expected an error')
  }
  catch (err) {
    t.match(err.message, /Invalid test method/, 'Threw on invalid test method')
  }
})
