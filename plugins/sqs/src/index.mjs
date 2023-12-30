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
  if (error && headers['x-amzn-requestid']) error.requestId = headers['x-amzn-requestid']
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
    payload: params
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
    payload: qs.stringify({ Action: 'SendMessage', ...params })
  }),
  response: ({ payload }) => payload.SendMessageResult,
  error: defaultError,
}

export default {
  service,
  property,
  methods: {
    SendMessage,
    GetQueueAttributes,
    ...incomplete,
  }
}
