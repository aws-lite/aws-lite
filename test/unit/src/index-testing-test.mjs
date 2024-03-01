let { join } = require('node:path')
let test = require('tape')
let { copy, defaults } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let { config } = defaults
let jsonHeaders = { 'content-type': 'application/json' }
let rando = () => (Math.random() + 1).toString(36).substring(2)

let mockRes = {
  statusCode: 200,
  headers: jsonHeaders,
  payload: { ok: true },
}
let mockErr = {
  statusCode: 500,
  error: {
    message: 'This blew up',
    code: 'oh_noes',
    __type: 'service#specific'
  }
}

test('Set up env', async t => {
  t.plan(1)
  t.ok(client, 'aws-lite client is present')
})

test('Testing - activation / deactivation', async t => {
  t.plan(6)
  let enabled, state

  state = client.testing.debug()
  enabled = client.testing.isEnabled()
  t.equal(state.enabled, false, 'Testing mode is disabled by default')
  t.equal(state.enabled, enabled, 'test.isEnabled() shows testing mode disabled')

  client.testing.enable()
  state = client.testing.debug()
  enabled = client.testing.isEnabled()
  t.equal(state.enabled, true, 'test.enable() enables testing')
  t.equal(state.enabled, enabled, 'test.isEnabled() shows testing mode enabled')

  client.testing.disable()
  state = client.testing.debug()
  enabled = client.testing.isEnabled()
  t.equal(state.enabled, false, 'test.disable() disables testing')
  t.equal(state.enabled, enabled, 'test.isEnabled() shows testing mode disabled')
})

// TODO: test resetting via enable/disable?

test('Testing - main client', async t => {
  t.plan(15)
  client.testing.enable()
  let aws = await client(config)

  client.testing.mock('client', copy(mockRes))

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

  // Errors
  client.testing.reset()
  client.testing.mock('client', copy(mockErr))
  try {
    await aws(expectedReq)
    t.fail('Expected an error')
  }
  catch (err) {
    let lastReq = client.testing.getLastRequest()
    t.deepEqual(lastReq.request, expectedReq, 'getLastRequest() matches expected request')
    let allReq = client.testing.getAllRequests()
    t.equal(allReq.length, 1, 'One request captured')

    let lastRes = client.testing.getLastResponse()
    t.deepEqual(lastRes.response, { ...mockErr, headers: {} }, 'getLastResponse() matches specified response params')
    let allRes = client.testing.getAllResponses()
    t.equal(allRes.length, 1, 'One response captured')

    t.equal(err.statusCode, mockErr.statusCode, 'Raw client error matches expected statusCode')
    t.equal(err.name, mockErr.error.code, 'Raw client error matches expected name')
    t.ok(err.message.includes(mockErr.error.message), 'Raw client error includes expected message')
    t.equal(err.code, mockErr.error.code, 'Raw client error matches expected code')
  }

  // Resetting
  client.testing.reset()
  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - plugins (not checking response method output)', async t => {
  t.plan(19)
  client.testing.enable()

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  client.testing.mock('DynamoDB.GetItem', copy(mockRes))

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
  // Just making sure the method param works, too
  let thisMethodReq = client.testing.getAllRequests('DynamoDB.GetItem')
  t.deepEqual(allReq, thisMethodReq)

  // Responses
  t.deepEqual(result, mockRes, 'Result matches expected response')
  let lastRes = client.testing.getLastResponse()
  t.deepEqual(lastRes.response, mockRes, 'getLastResponse() matches specified response params')
  let allRes = client.testing.getAllResponses()
  t.equal(allRes.length, 1, 'One response captured')
  // Just making sure the method param works, too
  let thisMethodRes = client.testing.getAllResponses('DynamoDB.GetItem')
  t.deepEqual(allRes, thisMethodRes)

  // Errors
  client.testing.reset()
  client.testing.mock('DynamoDB.GetItem', copy(mockErr))
  try {
    await aws.DynamoDB.GetItem(expectedReq)
    t.fail('Expected an error')
  }
  catch (err) {
    let lastReq = client.testing.getLastRequest()
    let reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
    t.deepEqual(reqParams, expectedReq, 'getLastRequest() contains expected request')
    t.ok(lastReq.request.headers, 'Plugin method added specific headers')
    let allReq = client.testing.getAllRequests()
    t.equal(allReq.length, 1, 'One request captured')

    let lastRes = client.testing.getLastResponse()
    t.deepEqual(lastRes.response, mockErr, 'getLastResponse() matches specified response params')
    let allRes = client.testing.getAllResponses()
    t.equal(allRes.length, 1, 'One response captured')

    t.equal(err.statusCode, mockErr.statusCode, 'Plugin error matches expected statusCode')
    t.equal(err.name, mockErr.error.code, 'Plugin error matches expected name')
    t.ok(err.message.includes(mockErr.error.message), 'Plugin error includes expected message')
    t.equal(err.code, mockErr.error.code, 'Plugin error matches expected code')
  }

  // Resetting
  client.testing.reset()
  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - plugins (response method output)', async t => {
  t.plan(18)
  client.testing.enable({ usePluginResponseMethod: true })

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  client.testing.mock('DynamoDB.GetItem', copy(mockRes))

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

  // Empty response payload
  client.testing.reset()
  let emptyResPayload = copy(mockRes)
  delete emptyResPayload.payload
  client.testing.mock('DynamoDB.GetItem', copy(emptyResPayload))
  result = await aws.DynamoDB.GetItem(expectedReq)
  t.deepEqual(result, {}, 'Mock response without payload returned as empty object (via AWS JSON unmarshalling)')

  // Errors
  client.testing.reset()
  client.testing.mock('DynamoDB.GetItem', copy(mockErr))

  try {
    await aws.DynamoDB.GetItem(expectedReq)
    t.fail('Expected an error')
  }
  catch (err) {
    let lastReq = client.testing.getLastRequest()
    let reqParams = { TableName: lastReq.request.TableName, Key: lastReq.request.Key }
    t.deepEqual(reqParams, expectedReq, 'getLastRequest() contains expected request')
    t.ok(lastReq.request.headers, 'Plugin method added specific headers')
    let allReq = client.testing.getAllRequests()
    t.equal(allReq.length, 1, 'One request captured')

    let lastRes = client.testing.getLastResponse()
    let expectedErr = copy(mockErr)
    expectedErr.error.name = expectedErr.error.code = 'specific'
    expectedErr.headers = {}
    t.deepEqual(lastRes.response, expectedErr, 'getLastResponse() matches specified response params')
    let allRes = client.testing.getAllResponses()
    t.equal(allRes.length, 1, 'One response captured')

    let expectedErrNameFromRes = mockErr.error.__type.split('#')[1]
    t.equal(err.statusCode, mockErr.statusCode, 'Raw client error matches expected statusCode')
    t.equal(err.name, expectedErrNameFromRes, 'Plugin error matches expected name')
    t.ok(err.message.includes(mockErr.error.message), 'Raw client error includes expected message')
    t.equal(err.code, expectedErrNameFromRes, 'Raw client error matches expected code')
  }

  // Resetting
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

  let mockRes1 = { ok: true }
  let mockRes2 = { ok: false }
  client.testing.mock('DynamoDB.GetItem', [ copy(mockRes1), copy(mockRes2) ])

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

  // Resetting
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
  let mockResSync = params => {
    one = rando()
    return { value: one, passed: params.Key }
  }
  let mockResAsync = async params => {
    two = rando()
    return { value: two, passed: params.Key }
  }
  client.testing.mock('DynamoDB.GetItem', [ mockResSync, mockResAsync ])

  let expectedReq = {
    TableName: 'foo',
    Key: { id: 'bar' },
  }
  let result1 = await aws.DynamoDB.GetItem(expectedReq)
  let result2 = await aws.DynamoDB.GetItem(expectedReq)

  t.ok(result1 && result2, 'Got results back from dynamic mocks')
  t.deepEqual(result1, { value: one, passed: expectedReq.Key }, 'Got expected result from dynamic mock')
  t.deepEqual(result2, { value: two, passed: expectedReq.Key }, 'Got expected result from dynamic mock')
  t.notEqual(result1, result2, 'Results are different')

  let result3 = await aws.DynamoDB.GetItem(expectedReq)
  t.ok(result3, 'Got results back from dynamic mocks')
  t.deepEqual(result3, { value: two, passed: expectedReq.Key }, 'Got expected result from dynamic mock')
  t.notEqual(result3, result2, 'Results are different')

  // Resetting
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

  let mockRes1 = { statusCode: 200, payload: { ok: true } }
  let mockRes2 = { ok: false }
  let mockRes3 = { ok: 'fine' }
  let mockRes4 = { ok: 'sure' }
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

  // Resetting
  client.testing.reset()
  t.deepEqual(client.testing.getAllRequests(), [], 'Requests reset')
  t.deepEqual(client.testing.getAllResponses(), [], 'Responses reset')
})

test('Testing - mock errors', async t => {
  t.plan(4)
  client.testing.enable()

  // eslint-disable-next-line
  let aws = await client({ ...config, plugins: [ import('@aws-lite/dynamodb') ] })

  try {
    client.testing.mock('client', {})
    await aws({ service: 'lambda' })
    t.fail('Expected an error')
  }
  catch (err) {
    t.match(err.message, /Mock response must include statusCode property/, 'Mock response needs statusCode property')
  }

  try {
    client.testing.enable({ usePluginResponseMethod: true })
    client.testing.mock('DynamoDB.GetItem', {})
    await aws.DynamoDB.GetItem({
      TableName: 'foo',
      Key: { id: 'bar' },
    })
    t.fail('Expected an error')
  }
  catch (err) {
    t.match(err.message, /Mock response must include statusCode property/, 'Mock response needs statusCode property')
    client.testing.enable({ usePluginResponseMethod: false })
  }

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
