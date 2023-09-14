let { join } = require('path')
let test = require('tape')
let { basicRequestChecks, defaults, resetServer: reset, server } = require('../../lib')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let { badPort, config, host, protocol, service, endpoint, port } = defaults
let mock = join(cwd, 'test', 'mock')
let pluginDir = join(mock, 'plugins')
let invalidPlugins = join(pluginDir, 'invalid')

test('Set up env', async t => {
  t.plan(2)
  t.ok(client, 'aws-lite client is present')
  let started = await server.start()
  t.ok(started, 'Started server')
})

test('Plugins - method construction, requests', async t => {
  t.plan(29)
  let name = 'my-lambda'
  let aws, expectedEndpoint, request

  // Reads
  aws = await client({ ...config, plugins: [ join(pluginDir, 'get.js') ] })
  expectedEndpoint = `/2015-03-31/functions/${name}/configuration`

  await aws.lambda.GetFunctionConfiguration({ name, host, port })
  request = server.getCurrentRequest()
  t.equal(request.url, expectedEndpoint, 'Plugin requested generated endpoint')
  t.equal(request.body, undefined, 'Plugin made request without body')
  basicRequestChecks(t, 'GET', { url: expectedEndpoint })

  await aws.lambda.GetFunctionConfiguration({ name, host, port, endpoint: '/foo' })
  request = server.getCurrentRequest()
  t.equal(request.url, expectedEndpoint, 'Plugin can override normal client param')
  basicRequestChecks(t, 'GET', { url: expectedEndpoint })

  // Writes
  aws = await client({ ...config, plugins: [ join(pluginDir, 'post.js') ] })
  expectedEndpoint = `/2015-03-31/functions/${name}/invocations`
  let payload = { ok: true }

  await aws.lambda.Invoke({ name, payload, host, port })
  request = server.getCurrentRequest()
  t.equal(request.url, expectedEndpoint, 'Plugin requested generated endpoint')
  t.deepEqual(request.body, payload, 'Plugin made request with included payload')
  basicRequestChecks(t, 'POST', { url: expectedEndpoint })

  await aws.lambda.Invoke({ name, data: payload, host, port })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, `Payload can be aliased to 'data'`)

  await aws.lambda.Invoke({ name, body: payload, host, port })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, `Payload can be aliased to 'body'`)

  await aws.lambda.Invoke({ name, json: payload, host, port })
  request = server.getCurrentRequest()
  t.deepEqual(request.body, payload, `Payload can be aliased to 'json'`)

  await aws.lambda.Invoke({ name, payload, host, port, endpoint: '/foo' })
  request = server.getCurrentRequest()
  t.equal(request.url, expectedEndpoint, 'Plugin can override normal client param')
  basicRequestChecks(t, 'POST', { url: expectedEndpoint })
})

test('Plugins - input validation', async t => {
  t.plan(23)
  let str = 'hi'
  let num = 123

  let aws = await client({ ...config, plugins: [ join(pluginDir, 'validation.js') ] })

  // No validation
  try {
    await aws.lambda.noValidation({ host, port })
    t.pass('No validation')
  }
  catch (err) {
    console.log(err)
    t.fail('Method without validation should have passed validation without issue')
  }

  // Missing required parameter type
  try {
    await aws.lambda.testTypes({})
  }
  catch (err) {
    t.match(err.message, /Missing required parameter: required/, 'Errored on missing required param')
  }

  // Wrong required parameter type
  try {
    await aws.lambda.testTypes({ required: num })
  }
  catch (err) {
    t.match(err.message, /Parameter 'required' must be: string/, 'Errored on wrong required param type')
  }

  // Wrong optional parameter type
  try {
    await aws.lambda.testTypes({ arr: true })
  }
  catch (err) {
    t.match(err.message, /Parameter 'arr' must be: array/, 'Errored on wrong optional param type')
  }

  // Disabled parameter
  try {
    await aws.lambda.testTypes({ disabled: str })
  }
  catch (err) {
    t.match(err.message, /Parameter 'disabled' must not be used/, 'Errored on disabled param')
  }

  // Plugin specified an invalid validation type (string)
  try {
    await aws.lambda.testTypes({ required: str, invalidType: str })
  }
  catch (err) {
    t.match(err.message, /Invalid type found: invalidType \(lolidk\)/, 'Errored on invalid validation type (string)')
  }

  // Plugin specified an invalid validation type (list)
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeList: str })
  }
  catch (err) {
    t.match(err.message, /Invalid type found: invalidTypeList \(listidk\)/, 'Errored on invalid validation type (list)')
  }

  // Plugin specified an invalid validation type, uh, type
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeType: str })
  }
  catch (err) {
    t.match(err.message, /Validator 'type' property must be a string or array/, 'Errored on invalid validation type')
  }

  // Plugin specified an invalid validation type, uh, type (list)
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeListType: str })
  }
  catch (err) {
    t.match(err.message, /Invalid type found: invalidTypeListType \(12345\)/, 'Errored on invalid validation type (list)')
  }

  // Plugin validation is missing a type
  try {
    await aws.lambda.testTypes({ required: str, missingType: str })
  }
  catch (err) {
    t.match(err.message, /Validator is missing required 'type' property/, 'Errored on missing validation type')
  }

  // Now just test the other various types work (and fail)
  let validTests = { arr: [], num, bool: true, obj: {}, str }
  for (let [ k, v ] of Object.entries(validTests)) {
    try {
      await aws.lambda.testTypes({ required: str, host, port, [k]: v })
      t.pass(`Correct ${k} validation succeeded`)
    }
    catch (err) {
      console.log(err)
      t.fail(`Correct ${k} validation failed`)
    }
  }

  let invalidTests = { arr: num, bool: num, num: str, obj: num, str: num }
  for (let [ k, v ] of Object.entries(invalidTests)) {
    try {
      await aws.lambda.testTypes({ required: str, [k]: v })
      t.fail(`Incorrect ${k} validation failed`)
    }
    catch (err) {
      let re = new RegExp(`Parameter '${k}' must be`)
      t.match(err.message, re, `Incorrect ${k} validation succeeded`)
    }
  }

  // Type array
  try {
    await aws.lambda.testTypes({ required: str, payload: num })
  }
  catch (err) {
    t.match(err.message, /Parameter 'payload' must be one of/, 'Errored on wrong param (from type array)')
  }

  // Payload alias
  try {
    await aws.lambda.testTypes({ required: str, data: num })
  }
  catch (err) {
    t.match(err.message, /Parameter 'data' must be one of/, 'Errored on wrong param (from type array, payload alias)')
  }

  // Duplicate aliases
  try {
    await aws.lambda.testTypes({ required: str, payload: str, data: str })
  }
  catch (err) {
    t.match(err.message, /Found duplicate payload parameters/, 'Errored on duplicate payload params')
  }
  reset()
})

test('Plugins - error handling', async t => {
  t.plan(36)
  let name = 'my-lambda'
  let payload = { ok: true }
  let responseBody, responseHeaders, responseStatusCode

  let errorsPlugin = join(pluginDir, 'errors.js')
  let aws = await client({ ...config, plugins: [ errorsPlugin ] })

  // Control
  try {
    await aws({ service, endpoint, payload, host, port })
    await aws.lambda.noErrorMethod({ name, payload, host, port })
    t.pass('Control test completed')
    reset()
  }
  catch (err) {
    console.log(err)
    t.fail('Did not expect an error in control test')
  }

  // Request method fails
  try {
    await aws.lambda.requestMethodBlowsUp({ name, host, port })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda.requestMethodBlowsUp: Cannot set/, 'Error included basic method information')
    t.equal(err.service, service, 'Error has service metadata')
    t.ok(err.stack.includes(errorsPlugin), 'Stack trace includes failing plugin')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Error passed through plugin
  try {
    responseBody = { other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 500
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodMutatesError({ name, payload, host, port })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda.errorMethodMutatesError/, 'Error included basic method information')
    t.equal(err.statusCode, responseStatusCode, 'Error has status code')
    t.equal(err.service, service, 'Error has service metadata')
    t.equal(err.other, responseBody.other, 'Error has other metadata')
    t.notOk(err.type, 'Error does not have type (via plugin error)')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
  }
  reset()

  // Error mutated by plugin error handler
  try {
    responseBody = { message: 'Uh oh, a validation error!', other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 400
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodMutatesError({ name, payload, host, port })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda.errorMethodMutatesError/, 'Error included basic method information')
    t.equal(err.statusCode, responseStatusCode, 'Error has status code')
    t.equal(err.service, service, 'Error has service metadata')
    t.equal(err.other, responseBody.other, 'Error has other metadata')
    t.equal(err.type, 'Lambda validation error', 'Error has type (via plugin error)')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
  }
  reset()

  // Request-level error mutated by plugin error handler
  try {
    await aws.lambda.noErrorMethod({ name, host, port: badPort })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda.noErrorMethod: connect ECONNREFUSED/, 'Error included basic information')
    t.equal(err.port, badPort, 'Error has port metadata')
    t.equal(err.service, service, 'Error has service metadata')
    t.equal(err.host, host, 'Error has host metadata')
    t.equal(err.protocol, protocol, 'Error has protocol metadata')
    t.equal(err.statusCode, undefined, 'Status code not found on incomplete request')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Error method noop, error passes through
  try {
    responseBody = { other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 500
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodNoop({ name, host, port })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda.errorMethodNoop/, 'Error included basic method information')
    t.equal(err.statusCode, responseStatusCode, 'Error has status code')
    t.equal(err.service, service, 'Error has service metadata')
    t.equal(err.other, responseBody.other, 'Error has other metadata')
    t.notOk(err.type, 'Error does not have type (via plugin error)')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Error method itself fails
  try {
    responseBody = { other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 500
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodBlowsUp({ name, host, port })
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /\@aws-lite\/client: lambda.errorMethodBlowsUp: Cannot set/, 'Error included basic method information')
    t.equal(err.service, service, 'Error has service metadata')
    t.notOk(err.other, 'Error does not have other metadata')
    t.notOk(err.type, 'Error metadata was not mutated')
    t.ok(err.stack.includes(errorsPlugin), 'Stack trace includes failing plugin')
    t.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }
})

test('Plugins - plugin validation', async t => {
  t.plan(11)

  // CJS
  try {
    await client({ ...config, plugins: [ join(pluginDir, 'cjs') ] })
    t.pass('CJS plugins work fine (directory import)')
    reset()
  }
  catch (err) {
    console.log(err)
    t.fail('CJS plugin failure')
  }

  // ESM
  try {
    // .mjs file
    await client({ ...config, plugins: [ join(pluginDir, 'esm-mjs', 'index.mjs') ] })
    t.pass('ESM .mjs plugins work fine')
    // .js ext + package.json.type = module
    await client({ ...config, plugins: [ join(pluginDir, 'esm-pkg', 'index.js') ] })
    t.pass('ESM .js + package.json plugins work fine')
    reset()
  }
  catch (err) {
    console.log(err)
    t.fail('ESM plugin failure')
  }

  // Failures
  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'invalid-request-method.js') ] })
  }
  catch (err) {
    t.match(err.message, /All plugin request methods must be a function/, 'Throw on invalid request method')
    reset()
  }

  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'invalid-error-method.js') ] })
  }
  catch (err) {
    t.match(err.message, /All plugin error methods must be a function/, 'Throw on invalid error method')
    reset()
  }

  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'invalid-service.js') ] })
  }
  catch (err) {
    t.match(err.message, /Invalid AWS service specified: lolidk/, 'Throw on invalid service')
    reset()
  }

  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'this-plugin-does-not-exist.js') ] })
  }
  catch (err) {
    t.match(err.message, /Cannot find module/, 'Throw on missing plugin')
    reset()
  }

  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'invalid-plugin.js') ] })
  }
  catch (err) {
    t.match(err.message, /lol is not defined/, 'Throw on invalid plugin')
    reset()
  }

  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'invalid-methods-type') ] })
  }
  catch (err) {
    t.match(err.message, /Plugin must export a methods object/, 'Throw on missing methods')
    reset()
  }

  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'invalid-methods-missing') ] })
  }
  catch (err) {
    t.match(err.message, /Plugin must export a methods object/, 'Throw on missing methods')
    reset()
  }

  try {
    await client({ ...config, plugins: [ join(invalidPlugins, 'this-plugin-does-not-exist.js') ] })
  }
  catch (err) {
    t.match(err.message, /Cannot find module/, 'Throw on missing plugin')
    reset()
  }
})

test('Tear down env', async t => {
  t.plan(1)
  await server.end()
  t.pass('Server ended')
})
