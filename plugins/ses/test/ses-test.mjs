import { join } from 'node:path'
import process from 'node:process'
import qs from 'node:querystring'
import test from 'tape'
import { flattenParams } from '../src/lib.mjs'

let client
const cwd = process.cwd()
const region = 'us-west-2'
const copy = i => JSON.parse(JSON.stringify(i))
const sesPlugin = () => import('../src/index.mjs')

test('Set up env', async t => {
  t.plan(1)
  const sut = 'file://' + join(cwd, 'src', 'index.js')
  client = (await import(sut)).default
  t.ok(client, 'aws-lite client is present')
})

test('flattenParams - AWS query protocol flattening', t => {
  t.plan(4)

  // Nested objects flatten with `.`; arrays of scalars use `.member.N`
  t.deepEqual(
    flattenParams({
      Source: 'from@example.com',
      Destination: { ToAddresses: [ 'a@example.com', 'b@example.com' ], CcAddresses: [ 'c@example.com' ] },
      Message: { Subject: { Data: 'Hi', Charset: 'UTF-8' }, Body: { Text: { Data: 'Body' }, Html: { Data: '<p>Body</p>' } } },
    }),
    {
      'Source':                              'from@example.com',
      'Destination.ToAddresses.member.1':    'a@example.com',
      'Destination.ToAddresses.member.2':    'b@example.com',
      'Destination.CcAddresses.member.1':    'c@example.com',
      'Message.Subject.Data':                'Hi',
      'Message.Subject.Charset':             'UTF-8',
      'Message.Body.Text.Data':              'Body',
      'Message.Body.Html.Data':              '<p>Body</p>',
    },
    'Nested objects + scalar arrays flatten correctly',
  )

  // Arrays of objects use `.member.N.<Key>`
  t.deepEqual(
    flattenParams({ Tags: [ { Name: 'k1', Value: 'v1' }, { Name: 'k2', Value: 'v2' } ] }),
    {
      'Tags.member.1.Name':  'k1',
      'Tags.member.1.Value': 'v1',
      'Tags.member.2.Name':  'k2',
      'Tags.member.2.Value': 'v2',
    },
    'Arrays of objects flatten to `.member.N.<Key>`',
  )

  // undefined / null values are skipped
  t.deepEqual(
    flattenParams({ Source: 'from@example.com', ConfigurationSetName: undefined, SourceArn: null }),
    { 'Source': 'from@example.com' },
    'undefined and null values are omitted',
  )

  // Scalars pass through, including a base64 RawMessage.Data
  t.deepEqual(
    flattenParams({ RawMessage: { Data: 'YmFzZTY0' } }),
    { 'RawMessage.Data': 'YmFzZTY0' },
    'Scalar nested values (RawMessage.Data) pass through',
  )
})

test('SendEmail - request, response, error', async t => {
  t.plan(8)
  client.testing.enable({ usePluginResponseMethod: true })
  const aws = await client({ region, plugins: [ sesPlugin() ] })

  const messageId = '0000018e-1234-abcd-0000-abcdef012345'
  const mockRes = {
    statusCode: 200,
    headers: { 'content-type': 'text/xml', 'x-amzn-requestid': 'req-123' },
    // Shape after aws-lite parses the SES XML response
    payload: {
      SendEmailResult: { MessageId: messageId },
      ResponseMetadata: { RequestId: 'req-123' },
    },
  }
  client.testing.mock('SES.SendEmail', copy(mockRes))

  const input = {
    Source: 'from@example.com',
    Destination: { ToAddresses: [ 'to@example.com' ] },
    Message: { Subject: { Data: 'Subject' }, Body: { Text: { Data: 'Hello' } } },
  }
  const result = await aws.SES.SendEmail(input)

  // Request
  const lastReq = client.testing.getLastRequest()
  t.equal(lastReq.request.headers['content-type'], 'application/x-www-form-urlencoded', 'Request uses the query-protocol content-type')
  const sent = qs.parse(lastReq.request.payload)
  t.equal(sent.Action, 'SendEmail', 'Action is SendEmail')
  t.equal(sent['Destination.ToAddresses.member.1'], 'to@example.com', 'Destination flattened to `.member.N`')
  t.equal(sent['Message.Subject.Data'], 'Subject', 'Message.Subject.Data flattened')
  t.equal(sent['Message.Body.Text.Data'], 'Hello', 'Message.Body.Text.Data flattened')

  // Response: lifts SendEmailResult to the top level
  t.deepEqual(result, { MessageId: messageId }, 'response() lifts SendEmailResult contents to the top level')

  // Error: SES XML error shape { Error: { Code, Message } }
  client.testing.reset()
  const mockErr = {
    statusCode: 400,
    headers: { 'x-amzn-requestid': 'err-req-456' },
    error: { Error: { Code: 'MessageRejected', Message: 'Email address is not verified.' } },
  }
  client.testing.mock('SES.SendEmail', copy(mockErr))
  try {
    await aws.SES.SendEmail(input)
    t.fail('Expected an error')
  }
  catch (err) {
    t.equal(err.statusCode, 400, 'Error statusCode preserved')
    t.equal(err.code, 'MessageRejected', 'Error code lowcased from SES `Error.Code`')
  }
  client.testing.reset()
})

test('SendRawEmail - request and response', async t => {
  t.plan(5)
  client.testing.enable({ usePluginResponseMethod: true })
  const aws = await client({ region, plugins: [ sesPlugin() ] })

  const messageId = '0000018e-9999-abcd-0000-abcdef012345'
  const mockRes = {
    statusCode: 200,
    headers: { 'content-type': 'text/xml' },
    payload: {
      SendRawEmailResult: { MessageId: messageId },
      ResponseMetadata: { RequestId: 'req-789' },
    },
  }
  client.testing.mock('SES.SendRawEmail', copy(mockRes))

  const raw = Buffer.from('From: from@example.com\r\nSubject: Test\r\n\r\nHello').toString('base64')
  const input = {
    Source: 'from@example.com',
    Destinations: [ 'to@example.com' ],
    RawMessage: { Data: raw },
  }
  const result = await aws.SES.SendRawEmail(input)

  const lastReq = client.testing.getLastRequest()
  const sent = qs.parse(lastReq.request.payload)
  t.equal(sent.Action, 'SendRawEmail', 'Action is SendRawEmail')
  t.equal(sent['RawMessage.Data'], raw, 'RawMessage.Data (base64) passed through unchanged')
  t.equal(sent['Destinations.member.1'], 'to@example.com', 'Destinations flattened to `.member.N`')
  t.equal(sent['Source'], 'from@example.com', 'Source passed through')

  t.deepEqual(result, { MessageId: messageId }, 'response() lifts SendRawEmailResult contents to the top level')
  client.testing.reset()
})
