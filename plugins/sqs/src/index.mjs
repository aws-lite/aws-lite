/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { default as qs } from 'node:querystring'

const service = 'sqs'
const property = 'SQS'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/'

// Validation types
const arr = { type: 'array' }
const obj = { type: 'object' }
const num = { type: 'number' }
const str = { type: 'string' }

const defaultError = ({ statusCode, headers, error }) => {
  if (error.Error) error = error.Error
  // SDK v2 lowcases `code`
  if (error?.Code) {
    error.name = error.code = error.Code
    delete error.Code
  }
  if (error?.__type) {
    const name = error.__type.split('#')[1]
    if (name) error.name = error.code = name
  }
  if (error && (headers?.['x-amzn-requestid'] || headers?.['x-amzn-RequestId'])) {
    error.requestId = headers['x-amzn-requestid'] || headers?.['x-amzn-RequestId']
  }
  return { statusCode, error }
}
const headers = (method, additional) => ({ 'X-Amz-Target': `AmazonSQS.${method}`, ...additional })
const awsjsonContentType = { 'content-type': 'application/x-amz-json-1.0' }
const formEncodedContentType = { 'content-type': 'application/x-www-form-urlencoded' }

const GetQueueAttributes = {
  awsDoc: docRoot + 'API_GetQueueAttributes.html',
  validate: {
    QueueUrl: { ...str, required, comment: 'SQS queue URL to retrieve attribute information from' },
    AttributeNames: { ...arr, comment: 'List of attribute names (strings) to retrieve' },
  },
  request: async (params) => ({
    awsjson: false,
    headers: headers('GetQueueAttributes', awsjsonContentType),
    payload: params,
  }),
  response: ({ payload }) => payload,
  error: defaultError,
}
const ReceiveMessage = {
  awsDoc: docRoot + 'API_ReceiveMessage.html',
  validate: {
    QueueUrl: { ...str, required, comment: 'SQS queue URL from which messages are received' },
    AttributeNames: { ...arr, comment: 'List of attribute names (strings) to be returned along with each message' },
    MaxNumberOfMessages: { ...num, comment: 'Maximum number of messages to return' },
    MessageAttributeNames: { ...arr, comment: 'The name of the message attribute' },
    MessageSystemAttributeNames: { ...arr, comment: 'A list of attributes that need to be returned along with each message' },
    ReceiveRequestAttemptId: { ...str, comment: 'The token used for deduplication of `ReceiveMessage` calls' },
    VisibilityTimeout: { ...num, comment: 'The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a `ReceiveMessage` request' },
    WaitTimeSeconds: { ...num, comment: 'The duration (in seconds) for which the call waits for a message to arrive in the queue before returning' },
  },
  request: async (params) => ({
    awsjson: false,
    headers: headers('ReceiveMessage', awsjsonContentType),
    payload: params,
  }),
  response: ({ payload }) => payload,
  error: defaultError,
}
const SendMessage = {
  awsDoc: docRoot + 'API_SendMessage.html',
  validate: {
    MessageBody: { ...str, required, comment: 'Message to send, from 1b - 256KiB' },
    QueueUrl: { ...str, required, comment: 'SQS queue URL to send the message to' },
    DelaySeconds: { ...num, comment: 'Seconds, from 0 - 900, to delay a message' },
    MessageAttributes: { ...obj, comment: 'Message attribute map', ref: docRoot + 'API_MessageAttributeValue.html' },
    MessageDeduplicationId: { ...str, comment: 'Ensures request is idempotent; may only be used for FIFO queues' },
    MessageGroupId: { ...str, comment: 'Tag specifying a specific message group; may only be used for FIFO queues' },
    MessageSystemAttributes: { ...obj, comment: 'Message system attribute map', ref: docRoot + 'API_MessageSystemAttributeValue.html' },
  },
  request: async (params) => ({
    headers: formEncodedContentType,
    payload: qs.stringify({ Action: 'SendMessage', ...params }),
  }),
  response: ({ payload }) => payload.SendMessageResult,
  error: defaultError,
}
const DeleteMessage = {
  awsDoc: docRoot + 'API_DeleteMessage.html',
  validate: {
    QueueUrl: { ...str, required, comment: 'SQS queue URL from which messages are deleted' },
    ReceiptHandle: { ...str, required, comment: 'The receipt handle associated with the message to delete' },
  },
  request: async (params) => ({
    awsjson: false,
    headers: headers('DeleteMessage', awsjsonContentType),
    payload: params,
  }),
  response: ({ payload }) => payload,
  error: defaultError,
}

export default {
  name: '@aws-lite/sqs',
  service,
  property,
  methods: {
    SendMessage,
    GetQueueAttributes,
    ReceiveMessage,
    DeleteMessage,
    ...incomplete,
  },
}
