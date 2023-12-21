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
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const defaultError = ({ statusCode, headers, error }) => {
  if (error.Error) error = error.Error
  // SDK v2 lowcases `code`
  if (error?.Code) {
    error.name = error.code = error.Code
    delete error.Code
  }
  if (error && headers['x-amzn-requestid']) error.requestId = headers['x-amzn-requestid']
  return { statusCode, error }
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
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
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
    ...incomplete,
  }
}
