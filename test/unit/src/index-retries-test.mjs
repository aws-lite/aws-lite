import http from 'node:http'
import { join } from 'node:path'
import process from 'node:process'
import test from 'tape'
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

// XML services put the error code in a capitalized `Code`, not code / name / __type / type
let xmlHeaders = { 'content-type': 'application/xml' }
let x = (statusCode, payload) => ({ statusCode, headers: xmlHeaders, payload })

// Query protocol (CloudFormation, IAM, STS, SNS, SQS): code at `ErrorResponse > Error > Code`
// see: https://smithy.io/2.0/aws/protocols/aws-query-protocol.html#operation-error-serialization
let queryThrottleError = x(400, `<ErrorResponse xmlns="http://cloudformation.amazonaws.com/doc/2010-05-15/">
  <Error><Type>Sender</Type><Code>Throttling</Code><Message>Rate exceeded</Message></Error>
  <RequestId>d7f0b3a0-0000-0000-0000-000000000000</RequestId>
</ErrorResponse>`)
let queryNonRetryableError = x(400, `<ErrorResponse>
  <Error><Type>Sender</Type><Code>ValidationError</Code><Message>Nope</Message></Error>
</ErrorResponse>`)

// EC2 query protocol: code at `Errors > Error > Code`, and `RequestID` (not `RequestId`)
// see: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html
let ec2ClockSkewError = x(400, `<Response>
  <Errors><Error><Code>RequestExpired</Code><Message>Request has expired.</Message></Error></Errors>
  <RequestID>d7f0b3a0-0000-0000-0000-000000000000</RequestID>
</Response>`)
let ec2MultiClockSkewError = x(400, `<Response>
  <Errors>
    <Error><Code>RequestExpired</Code><Message>Request has expired.</Message></Error>
    <Error><Code>SomethingElse</Code><Message>Also broken.</Message></Error>
  </Errors>
  <RequestID>d7f0b3a0-0000-0000-0000-000000000000</RequestID>
</Response>`)

// REST-XML (S3): `<Error>` is the root element, which parseXML strips, leaving `Code` at the top
// see: https://docs.aws.amazon.com/AmazonS3/latest/developerguide/ErrorResponses.html
let s3ClockSkewError = x(403, `<?xml version="1.0" encoding="UTF-8"?>
<Error><Code>RequestTimeTooSkewed</Code><Message>The difference between the request time and the server's time is too large.</Message><RequestId>x</RequestId><HostId>y</HostId></Error>`)

// REST-JSON: the code may only appear in a header, with nothing classifiable in the payload
// see: https://smithy.io/2.0/aws/protocols/aws-restjson1-protocol.html#operation-error-serialization
let headerCodedClockSkewError = {
  statusCode: 403,
  headers: { 'content-type': 'application/json', 'x-amzn-errortype': 'InvalidSignatureException' },
  payload: j({ message: 'Signature expired: 20260921T143544Z is now earlier than 20260921T144738Z (20260921T145238Z - 5 min.)' }),
}

// Delays long enough to tick the signing second over between attempts
let slowError = { statusCode: 500, delay: 1100 }
let hungSocket = { delay: 1100, socketError: 'ECONNRESET' }

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
  t.ok(client, 'aws-lite client is present')
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
      let { statusCode, headers = {}, payload = '', delay, socketError } = responses.pop()
      let respond = () => {
        // Hang, then reset. This is what a dead keep-alive socket looks like to the client.
        if (socketError) {
          res.destroy(new Error(socketError))
          return
        }
        res.writeHead(statusCode, headers)
        res.end(payload)
      }
      if (delay) setTimeout(respond, delay)
      else respond()
    })
  })
  retryServer.listen(port)
  t.ok(retryServer, 'Started server')
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
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, 1, 'Client did not retry')
  }

  // maxAttempts alias
  aws = await client({ ...config, maxAttempts: retries })
  try {
    reset()
    responses.push(basicError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, 1, 'Client did not retry')
  }

  // Try, then retry (total of 2x attempts)
  retries = 1
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(basicError, basicError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried, passed through error')
  }

  // Try, then recover on successful retry
  retries = 10
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(basicResponse, basicError)
    result = await aws({ service })
    t.equal(requests.length, 2, 'Client retried, passed through error')
    t.equal(result.statusCode, 200, 'Client returned successful response')
  }
  catch (err) {
    console.log(err)
    t.fail('Did not expect an error')
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
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried, passed through error')
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
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried, passed through error')
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
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried, passed through error')
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
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries, 'Client did not retry, passed through error')
  }
})

test('Retries - XML + header error codes', async t => {
  t.plan(6)
  let aws, retries

  // Query protocol: code at `ErrorResponse > Error > Code`, HTTP 400
  retries = 2
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(queryThrottleError, queryThrottleError, queryThrottleError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried query protocol throttling error')
  }

  // EC2 query protocol: code at `Errors > Error > Code`
  retries = 2
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(ec2ClockSkewError, ec2ClockSkewError, ec2ClockSkewError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried EC2 query protocol clock skew error')
  }

  // Multiple errors parse `Error` into an array, one level deeper than aws-sdk expects
  retries = 2
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(ec2MultiClockSkewError, ec2MultiClockSkewError, ec2MultiClockSkewError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried multi-error EC2 query protocol clock skew error')
  }

  // REST-XML: code at the root once parseXML strips `<Error>`, HTTP 403
  retries = 2
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(s3ClockSkewError, s3ClockSkewError, s3ClockSkewError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried S3 clock skew error')
  }

  // REST-JSON: code in the `x-amzn-errortype` header, nothing classifiable in the payload
  retries = 2
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(headerCodedClockSkewError, headerCodedClockSkewError, headerCodedClockSkewError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried header-coded clock skew error')
  }

  // Unknown, non-retryable XML errors
  retries = 1
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(queryNonRetryableError, queryNonRetryableError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries, 'Client did not retry, passed through error')
  }
})

test('Retries - signing', async t => {
  t.plan(4)
  let aws, retries, result

  // aws4 mutates its inputs, so a signing object reused across attempts replays the
  // original x-amz-date. Every retry must be signed new.
  retries = 1
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(slowError, slowError)
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.equal(requests.length, retries + 1, 'Client retried, passed through error')
    t.equal(new Set(requests).size, requests.length, `Signed each attempt with its own x-amz-date (got: ${requests.join(', ')})`)
  }

  // Same, but where the delay between attempts comes from a hung socket
  retries = 1
  aws = await client({ ...config, retries })
  try {
    reset()
    responses.push(basicResponse, hungSocket)
    result = await aws({ service })
    t.equal(result.statusCode, 200, 'Client retried, returned successful response')
    t.equal(new Set(requests).size, requests.length, `Signed each attempt with its own x-amz-date (got: ${requests.join(', ')})`)
  }
  catch (err) {
    console.log(err)
    t.fail('Did not expect an error')
  }
})

test('Retries - validation', async t => {
  t.plan(1)
  let aws

  aws = await client({ ...config, retries: 'nah' })
  try {
    await aws({ service })
    t.fail('Expected an error')
  }
  catch (err) {
    console.log(err)
    t.match(err.message, /must a number/, 'Errored on retries string value')
  }
})

test('Tear down env', t => {
  t.plan(1)
  retryServer.close(err => {
    if (err) t.fail(err)
    else t.pass('Server ended')
  })
})
