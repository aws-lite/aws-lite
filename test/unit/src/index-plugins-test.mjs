import module from 'node:module'
import { join } from 'node:path'
import process from 'node:process'
import url from 'node:url'
import test from 'node:test'
import { basicRequestChecks, defaults, resetServer as reset, server } from '../../lib/index.mjs'

let client
let cwd = process.cwd()
let { badPort, config, host, path, protocol, service, port } = defaults
let mock = join(cwd, 'test', 'mock')
let pluginDir = join(mock, 'plugins')
let invalidPlugins = join(pluginDir, 'invalid')
let p = path => process.platform.startsWith('win') ? 'file://' + path : path
let __filename = url.fileURLToPath(import.meta.url).replace(/\\/g, '/')
let require = module.createRequire(import.meta.url)

test('Set up env', async t => {
  let sut = 'file://' + join(cwd, 'src', 'index.js')
  client = (await import(sut)).default
  t.assert.ok(client, 'aws-lite client is present')
  let started = await server.start()
  t.assert.ok(started, 'Started server')
})

test('Plugins - validate input', async t => {
  let str = 'hi'
  let num = 123

  let aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'validate.js'))) ] })

  // No validation
  try {
    await aws.lambda.noValidation({ host, port })
    t.assert.ok(true, 'No validation')
  }
  catch (err) {
    console.log(err)
    t.assert.fail('Method without validation should have passed validation without issue')
  }

  // Missing required parameter type
  try {
    await aws.lambda.testTypes({})
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Missing required parameter: required/, 'Errored on missing required param')
  }

  // Wrong required parameter type
  try {
    await aws.lambda.testTypes({ required: num })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Parameter 'required' must be: string/, 'Errored on wrong required param type')
  }

  // Wrong optional parameter type
  try {
    await aws.lambda.testTypes({ arr: true })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Parameter 'arr' must be: array/, 'Errored on wrong optional param type')
  }

  // Disabled parameter
  try {
    await aws.lambda.testTypes({ disabled: str })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Parameter 'disabled' must not be used/, 'Errored on disabled param')
  }

  // Plugin specified an invalid validation type (string)
  try {
    await aws.lambda.testTypes({ required: str, invalidType: str })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Invalid type found: invalidType \(lolidk\)/, 'Errored on invalid validation type (string)')
  }

  // Plugin specified an invalid validation type (list)
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeList: str })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Invalid type found: invalidTypeList \(listidk\)/, 'Errored on invalid validation type (list)')
  }

  // Plugin specified an invalid validation type, uh, type
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeType: str })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Validator 'type' property must be a string or array/, 'Errored on invalid validation type')
  }

  // Plugin specified an invalid validation type, uh, type (list)
  try {
    await aws.lambda.testTypes({ required: str, invalidTypeListType: str })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Invalid type found: invalidTypeListType \(12345\)/, 'Errored on invalid validation type (list)')
  }

  // Plugin validation is missing a type
  try {
    await aws.lambda.testTypes({ required: str, missingType: str })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Validator is missing required 'type' property/, 'Errored on missing validation type')
  }

  // Now just test the other various types work (and fail)
  let validTests = { arr: [], num, bool: true, buf: Buffer.from('hi'), obj: {}, str }
  for (let [ k, v ] of Object.entries(validTests)) {
    try {
      await aws.lambda.testTypes({ required: str, host, port, [k]: v })
      t.assert.ok(true, `Correct ${k} validation succeeded`)
    }
    catch (err) {
      console.log(err)
      t.assert.fail(`Correct ${k} validation failed`)
    }
  }

  let invalidTests = { arr: num, bool: num, num: str, obj: num, str: num }
  for (let [ k, v ] of Object.entries(invalidTests)) {
    try {
      await aws.lambda.testTypes({ required: str, [k]: v })
      t.assert.fail(`Incorrect ${k} validation failed`)
    }
    catch (err) {
      console.log(err)
      let re = new RegExp(`Parameter '${k}' must be`)
      t.assert.match(err.message, re, `Incorrect ${k} validation succeeded`)
    }
  }

  // Initial validation passes, but request() output does not pass validation
  try {
    await aws.lambda.pluginBreaksValidation({ required: str, arr: [] })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Parameter 'arr' must be: array/, 'Errored on wrong param (from type array)')
  }

  // Type array
  try {
    await aws.lambda.testTypes({ required: str, payload: num })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Parameter 'payload' must be one of/, 'Errored on wrong param (from type array)')
  }

  // Payload alias
  try {
    await aws.lambda.testTypes({ required: str, data: num })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Parameter 'data' must be one of/, 'Errored on wrong param (from type array, payload alias)')
  }

  // Duplicate aliases
  try {
    await aws.lambda.testTypes({ required: str, payload: str, data: str })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /Found duplicate payload parameters/, 'Errored on duplicate payload params')
  }
  reset()
})

test('Plugins - validate service', async t => {
  let plugin = import(p(join(pluginDir, 'misc', 'unverified-service.js')))
  try {
    await client({ ...config, plugins: [ plugin ] })
    t.assert.fail('Plugin with unverified service should throw')
  }
  catch (error) {
    t.assert.match(error.message, /Invalid AWS service/, 'Throw on plugin with unverified service')
  }

  try {
    await client({ ...config, verifyService: false, plugins: [ plugin ] })
    t.assert.ok(true, '"verifyService: false" allows plugin with unverified service')
  }
  catch (error) {
    console.log(error)
    t.assert.fail('Should have allowed unverified service')
  }
})

test('Plugins - method construction, request()', async t => {
  let name = 'my-lambda'
  let aws, expectedPath, request

  // Reads
  aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'request-get.js'))) ] })
  expectedPath = `/2015-03-31/functions/${name}/configuration`

  await aws.lambda.GetFunctionConfiguration({ name, host, port })
  request = server.getCurrentRequest()
  t.assert.strictEqual(request.url, expectedPath, 'Plugin requested generated endpoint')
  t.assert.strictEqual(request.body, undefined, 'Plugin made request without body')
  basicRequestChecks(t, 'GET', { url: expectedPath })

  await aws.lambda.GetFunctionConfiguration({ name, host, port, path: '/foo' })
  request = server.getCurrentRequest()
  t.assert.strictEqual(request.url, expectedPath, 'Plugin can override normal client param')
  basicRequestChecks(t, 'GET', { url: expectedPath })

  // Writes
  aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'request-post.js'))) ] })
  expectedPath = `/2015-03-31/functions/${name}/invocations`
  let payload = { ok: true }

  await aws.lambda.Invoke({ name, payload, host, port })
  request = server.getCurrentRequest()
  t.assert.strictEqual(request.url, expectedPath, 'Plugin requested generated path')
  t.assert.deepStrictEqual(request.body, payload, 'Plugin made request with included payload')
  basicRequestChecks(t, 'POST', { url: expectedPath })

  await aws.lambda.Invoke({ name, data: payload, host, port })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, payload, `Payload can be aliased to 'data'`)

  await aws.lambda.Invoke({ name, body: payload, host, port })
  request = server.getCurrentRequest()
  t.assert.deepStrictEqual(request.body, payload, `Payload can be aliased to 'body'`)

  await aws.lambda.Invoke({ name, payload, host, port, path: '/foo' })
  request = server.getCurrentRequest()
  t.assert.strictEqual(request.url, expectedPath, 'Plugin can override normal client param')
  basicRequestChecks(t, 'POST', { url: expectedPath })
})

test('Plugins - response()', async t => {
  let aws, payload, response, responseBody, responseHeaders

  aws = await client({ ...config, host, port, plugins: [ import(p(join(pluginDir, 'response.js'))) ] })

  // Pass through by having no response() method
  response = await aws.lambda.NoResponseMethod()
  t.assert.strictEqual(response.statusCode, 200, 'Response status code passed through')
  t.assert.ok(response.headers, 'Response headers passed through')
  t.assert.ok(!response.headers.foo, 'Response headers not mutated')
  t.assert.strictEqual(response.payload, null, 'Response payload passed through')
  basicRequestChecks(t, 'GET', { url: '/' })

  // Actively pass through
  response = await aws.lambda.Passthrough()
  t.assert.strictEqual(response.statusCode, 200, 'Response status code passed through')
  t.assert.ok(response.headers, 'Response headers passed through')
  t.assert.ok(!response.headers.foo, 'Response headers not mutated')
  t.assert.strictEqual(response.payload, null, 'Response payload passed through')
  basicRequestChecks(t, 'GET', { url: '/' })

  // Mutate a single property, but pass the rest through
  response = await aws.lambda.MutateProperty()
  t.assert.strictEqual(response.statusCode, 234, 'Response status code mutated by plugin')
  t.assert.ok(response.headers, 'Response headers passed through')
  t.assert.ok(!response.headers.foo, 'Response headers not mutated')
  t.assert.strictEqual(response.payload, null, 'Response payload passed through')
  basicRequestChecks(t, 'GET', { url: '/' })

  // Mutate all properties
  response = await aws.lambda.MutateAllProperties()
  t.assert.strictEqual(response.statusCode, 234, 'Response status code mutated by plugin')
  t.assert.strictEqual(response.headers.foo, 'bar', 'Response headers mutated')
  t.assert.strictEqual(response.payload.hi, 'there', 'Response payload mutated')
  basicRequestChecks(t, 'GET', { url: '/' })

  responseHeaders = { 'content-type': 'application/json' }
  payload = { hi: 'there' }
  server.use({ responseHeaders, responseBody: payload })
  response = await aws.lambda.OnlyPassThroughPayload()
  t.assert.deepStrictEqual(response, payload, 'Response passed through just the payload')
  basicRequestChecks(t, 'GET', { url: '/' })

  response = await aws.lambda.ReturnWhatever()
  t.assert.deepStrictEqual(response, 'yooo', 'Response passed through whatever it wants')
  basicRequestChecks(t, 'GET', { url: '/' })

  // A bit contrived since AWS JSON would normally be returned with an appropriate header, but we are just making sure we can force the entire payload to be unmarhsalled
  responseHeaders = { 'content-type': 'application/json' }
  responseBody = { aws: { S: 'idk' } }
  server.use({ responseHeaders, responseBody })
  response = await aws.lambda.ReturnAwsJsonAll()
  t.assert.deepStrictEqual(response.payload, { aws: 'idk' }, 'Returned response payload as parsed, unmarshalled JSON')
  t.assert.ok(!response.awsjson, 'awsjson property stripped')
  basicRequestChecks(t, 'GET', { url: '/' })

  // Unmarshall just the payload contents, leaving out headers and status code
  responseHeaders = { 'content-type': 'application/json' }
  responseBody = { aws: { S: 'idk' } }
  server.use({ responseHeaders, responseBody })
  response = await aws.lambda.ReturnAwsJsonPayload()
  t.assert.deepStrictEqual(response, { aws: 'idk' }, 'Returned response payload as parsed, unmarshalled JSON')
  t.assert.ok(!response.awsjson, 'awsjson property stripped')
  basicRequestChecks(t, 'GET', { url: '/' })

  // Unmarshall an individual payload key
  responseHeaders = { 'content-type': 'application/x-amz-json-1.0' }
  responseBody = { Item: { aws: { S: 'idk' } }, ok: true }
  server.use({ responseHeaders, responseBody })
  response = await aws.lambda.ReturnAwsJsonKey()
  t.assert.deepStrictEqual(response.payload, { Item: { aws: 'idk' }, ok: true }, 'Returned response payload as parsed, unmarshalled JSON')
  t.assert.ok(!response.awsjson, 'awsjson property stripped')
  basicRequestChecks(t, 'GET', { url: '/' })

  // Response returns nothing
  response = await aws.lambda.ReturnNothing()
  t.assert.strictEqual(response.statusCode, 200, 'Response status code passed through')
  t.assert.ok(response.headers, 'Response headers passed through')
  t.assert.ok(!response.headers.foo, 'Response headers not mutated')
  t.assert.strictEqual(response.payload, null, 'Response payload passed through')
  basicRequestChecks(t, 'GET', { url: '/' })

  // Force content type on response
  aws = await client({ ...config, responseContentType: 'application/json', plugins: [ import(p(join(pluginDir, 'response.js'))) ] })
  // Response is forced to another content-type and parsed appropriately
  responseHeaders = { 'content-type': '*/*' }
  payload = { hi: 'there' }
  server.use({ responseHeaders, responseBody: JSON.stringify(payload) })
  response = await aws.lambda.Passthrough()
  t.assert.deepStrictEqual(response.payload, payload, 'Returned response payload parsed despite wrong content-type')
  basicRequestChecks(t, 'GET', { url: '/' })
})

test('Plugins - error(), error handling', async t => {
  let name = 'my-lambda'
  let payload = { ok: true }
  let responseBody, responseHeaders, responseStatusCode

  let errorsPlugin = join(pluginDir, 'error.js')
  let aws = await client({ ...config, plugins: [ import(p(errorsPlugin)) ] })

  // Control
  try {
    await aws({ service, path, payload, host, port })
    await aws.lambda.noErrorMethod({ name, payload, host, port })
    t.assert.ok(true, 'Control test completed')
    reset()
  }
  catch (err) {
    console.log(err)
    t.assert.fail('Did not expect an error in control test')
  }

  // Request method fails
  try {
    await aws.lambda.requestMethodBlowsUp({ name, host, port })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda.requestMethodBlowsUp: Cannot set/, 'Error included basic method information')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.strictEqual(err.awsDoc, 'https://requestMethodBlowsUp.lol', 'Error has AWS API doc')
    t.assert.ok(err.stack.includes(errorsPlugin), 'Stack trace includes failing plugin')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Response method fails
  try {
    await aws.lambda.responseMethodBlowsUp({ name, host, port })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda.responseMethodBlowsUp: Cannot set/, 'Error included basic method information')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.strictEqual(err.awsDoc, 'https://responseMethodBlowsUp.lol', 'Error has AWS API doc')
    t.assert.ok(err.stack.includes(errorsPlugin), 'Stack trace includes failing plugin')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Error passed through plugin
  try {
    responseBody = { other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 400
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodMutatesError({ name, payload, host, port })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda.errorMethodMutatesError/, 'Error included basic method information')
    t.assert.strictEqual(err.statusCode, responseStatusCode, 'Error has status code')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.strictEqual(err.awsDoc, 'https://errorMethodMutatesError.lol', 'Error has AWS API doc')
    t.assert.strictEqual(err.readme, 'lolidk', 'Error has custom readme doc')
    t.assert.strictEqual(err.other, responseBody.other, 'Error has other metadata')
    t.assert.ok(!err.type, 'Error does not have type (via plugin error)')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
  }
  reset()

  // Error mutated by plugin error handler
  try {
    responseBody = { message: 'Uh oh, a validation error!', other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 401
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodMutatesError({ name, payload, host, port })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda.errorMethodMutatesError/, 'Error included basic method information')
    t.assert.strictEqual(err.statusCode, responseStatusCode, 'Error has status code')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.strictEqual(err.awsDoc, 'https://errorMethodMutatesError.lol', 'Error has AWS API doc')
    t.assert.strictEqual(err.readme, 'lolidk', 'Error has custom readme doc')
    t.assert.strictEqual(err.other, responseBody.other, 'Error has other metadata')
    t.assert.strictEqual(err.type, 'Lambda validation error', 'Error has type (via plugin error)')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
  }
  reset()

  // Request-level error mutated by plugin error handler
  try {
    await aws.lambda.noErrorMethod({ name, host, port: badPort })
  }
  catch (err) {
    console.log(err)
    // Node.js 20.x changed the HTTP connection error format
    let re = /\@aws-lite\/client: lambda.noErrorMethod: (connect )?ECONNREFUSED/
    t.assert.match(err.message, re, 'Error included basic information')
    t.assert.strictEqual(err.port, badPort, 'Error has port metadata')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.strictEqual(err.host, host, 'Error has host metadata')
    t.assert.strictEqual(err.protocol, protocol, 'Error has protocol metadata')
    t.assert.strictEqual(err.statusCode, undefined, 'Status code not found on incomplete request')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Error method noop, error passes through
  try {
    responseBody = { other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 402
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodNoop({ name, host, port })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda.errorMethodNoop/, 'Error included basic method information')
    t.assert.strictEqual(err.statusCode, responseStatusCode, 'Error has status code')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.strictEqual(err.awsDoc, 'https://errorMethodNoop.lol', 'Error has AWS API doc')
    t.assert.strictEqual(err.other, responseBody.other, 'Error has other metadata')
    t.assert.ok(!err.type, 'Error does not have type (via plugin error)')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }

  // Error method itself fails
  try {
    responseBody = { other: 'metadata' }
    responseHeaders = { 'content-type': 'application/json' }
    responseStatusCode = 403
    server.use({ responseBody, responseHeaders, responseStatusCode })
    await aws.lambda.errorMethodBlowsUp({ name, host, port })
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /\@aws-lite\/client: lambda.errorMethodBlowsUp: Cannot set/, 'Error included basic method information')
    t.assert.strictEqual(err.service, service, 'Error has service metadata')
    t.assert.ok(!err.awsDoc, 'Error does not have a doc')
    t.assert.ok(!err.other, 'Error does not have other metadata')
    t.assert.ok(!err.type, 'Error metadata was not mutated')
    t.assert.ok(err.stack.includes(errorsPlugin), 'Stack trace includes failing plugin')
    t.assert.ok(err.stack.includes(__filename), 'Stack trace includes this test')
    reset()
  }
})

test('Plugins - error docs (@aws-lite)', async t => {
  let aws = await client({ ...config, plugins: [ import('@aws-lite/s3') ] })

  try {
    await aws.s3.PutObject()
    reset()
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(err.awsDoc, 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html', 'Error has a doc')
    t.assert.strictEqual(err.readme, 'https://aws-lite.org/services/s3#putobject', 'Error has link to method in readme')
  }
})

test('Plugins - disabled methods', async t => {
  let aws = await client({ ...config, plugins: [ import(p(join(pluginDir, 'misc', 'disabled-methods.js'))) ] })
  t.assert.ok(aws.lambda.ok, 'Client loaded plugin containing disabled methods')
  t.assert.ok(!aws.lambda.disabledByFalsy, 'Client did not load method disabled by boolean false')
  t.assert.ok(!aws.lambda.disabledByParam, `Client did not load method disabled by 'disabled' param`)
})

test('Plugins - plugin validation', async t => {

  // CJS
  try {
    await client({ ...config, plugins: [ require(join(pluginDir, 'cjs')) ] })
    t.assert.ok(true, 'CJS plugins work fine (directory import)')
    reset()
  }
  catch (err) {
    console.log(err)
    t.assert.fail('CJS plugin failure')
  }

  // ESM
  try {
    // .mjs file
    await client({ ...config, plugins: [ import(p(join(pluginDir, 'esm-mjs', 'index.mjs'))) ] })
    t.assert.ok(true, 'ESM .mjs plugins work fine')
    // .js ext + package.json.type = module
    await client({ ...config, plugins: [ import(p(join(pluginDir, 'esm-pkg', 'index.js'))) ] })
    t.assert.ok(true, 'ESM .js + package.json plugins work fine')
    reset()
  }
  catch (err) {
    console.log(err)
    t.assert.fail('ESM plugin failure')
  }

  // Failures
  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'invalid-request-method.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /All plugin request methods must be a function/, 'Throw on invalid request method')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'invalid-response-method.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /All plugin response methods must be a function/, 'Throw on invalid response method')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'invalid-error-method.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /All plugin error methods must be a function/, 'Throw on invalid error method')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'invalid-service.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /Invalid AWS service specified: lolidk/, 'Throw on invalid service')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'this-plugin-does-not-exist.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /Cannot find module/, 'Throw on missing plugin')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'invalid-plugin.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /lol is not defined/, 'Throw on invalid plugin')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'invalid-methods-type.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /Plugin must export a methods object/, 'Throw on missing methods')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'invalid-methods-missing.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /Plugin must export a methods object/, 'Throw on missing methods')
    reset()
  }

  try {
    await client({ ...config, plugins: [ import(p(join(invalidPlugins, 'this-plugin-does-not-exist.js'))) ] })
  }
  catch (err) {
    t.assert.match(err.message, /Cannot find module/, 'Throw on missing plugin')
    reset()
  }
})

test('Tear down env', async t => {
  await server.end()
  t.assert.ok(true, 'Server ended')
})
