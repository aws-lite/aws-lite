import http from 'node:http'
import { join } from 'node:path'
import process from 'node:process'
import test from 'node:test'
import { defaults } from '../../lib/index.mjs'

let client
let { config, service, port } = defaults
let j = o => JSON.stringify(o)

let retryServer, serverError
let requests = []
let responses = []
let basicError = { statusCode: 500 }
let knownErrorName = { statusCode: 400, payload: j({ name: 'whatever#InvalidSignatureException' }) }
let knownErrorDunderType = { statusCode: 400, payload: j({ __type: 'TooManyRequestsException' }) }
let knownErrorType = { statusCode: 400, payload: j({ type: 'TimeoutError' }) }
let unknownNonRetryableError = { statusCode: 400, payload: j({ name: 'SomeNonRetryableError' }) }
let throttleError = { statusCode: 429 }
let basicResponse = { statusCode: 200 }

function reset () {
  requests = []
  responses = []
  serverError = undefined
}

test('Set up env', async t => {
  t.plan(2)
  let cwd = process.cwd()
  let sut = 'file://' + join(cwd, 'src', 'index.js')
  client = (await import(sut)).default
  t.assert.ok(client, 'aws-lite client is present')
  retryServer = http.createServer((req, res) => {
    req.on('data', () => {})
    req.on('end', () => {
      let auth = req.headers['X-Amz-Date'] || req.headers['x-amz-date']
      requests.push(auth)

      if (serverError) {
        res.destroy(new Error(serverError))
        return
      }

      // Return responses from the queue
      let { statusCode, headers = {}, payload = '' } = responses.pop()
      res.writeHead(statusCode, headers)
      res.end(payload)
    })
  })
  retryServer.listen(port)
  t.assert.ok(retryServer, 'Started server')
})

test('Retries', async t => {
  t.plan(9)
  let aws, retries, result

  /**
   * 500 errors
   */
  // Do not retry
  retries = 0
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(basicError)
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(requests.length, 1, 'Client did not retry')
  }

  // maxAttempts alias
  aws = await client({ ...config, maxAttempts: retries })
  try {
    reset()
    responses.push(basicError)
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(requests.length, 1, 'Client did not retry')
  }

  // Try, then retry (total of 2x attempts)
  retries = 1
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(basicError, basicError)
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(requests.length, retries + 1, 'Client retried, passed through error')
  }

  // Try, then recover on successful retry
  retries = 10
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(basicResponse, basicError)
    result = await aws({ service })
    t.assert.strictEqual(requests.length, 2, 'Client retried, passed through error')
    t.assert.strictEqual(result.statusCode, 200, 'Client returned successful response')
  }
  catch (err) {
    console.log(err)
    t.assert.fail('Did not expect an error')
  }

  /**
   * 429 throttling errors
   */
  // Try, then retry (total of 2x attempts)
  retries = 1
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(throttleError, throttleError)
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(requests.length, retries + 1, 'Client retried, passed through error')
  }

  /**
   * Connection errors
   */
  retries = 2
  aws = await client({ ...config, retries })
  try {
    reset()
    serverError = 'ECONNRESET'
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(requests.length, retries + 1, 'Client retried, passed through error')
  }

  /**
   * Known retryable errors
   */
  retries = 2
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(knownErrorName, knownErrorDunderType, knownErrorType)
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(requests.length, retries + 1, 'Client retried, passed through error')
  }

  /**
   * Unknown, non-retryable errors
   */
  retries = 1
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(unknownNonRetryableError, unknownNonRetryableError)
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.strictEqual(requests.length, retries, 'Client did not retry, passed through error')
  }
})

test('Retries - validation', async t => {
  t.plan(1)
  let aws

  aws = await client({ ...config, retries: 'nah' })
  try {
    await aws({ service })
    t.assert.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.assert.match(err.message, /must a number/, 'Errored on retries string value')
  }
})

test('Tear down env', async () => {
  await new Promise((res, rej) => {
    retryServer.close(err => {
      if (err) rej(err)
      else res()
    })
  })
})
