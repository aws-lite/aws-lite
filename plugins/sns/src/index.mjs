/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'sns'
const property = 'SNS'
const required = true
const docRoot = 'https://docs.aws.amazon.com/sns/latest/api/'

const str = { type: 'string' }

const defaultResponse = ({ payload }) => {
  let response = payload
  delete response.xmlns
  return response
}
const defaultError = ({ statusCode, headers, error }) => {
  if (error.Error) error = error.Error
  // SDK v2 lowcases `code`
  if (error?.Code) {
    error.name = error.code = error.Code
    delete error.Code
  }
  if (error && (headers?.['x-amzn-requestid'] || headers?.['x-amzn-RequestId'])) {
    error.requestId = headers['x-amzn-requestid'] || headers?.['x-amzn-RequestId']
  }
  return { statusCode, error }
}

const Publish = {
  awsDoc: docRoot + 'API_Publish.html',
  validate: {
    Message: { ...str, required, comment: 'Message payload to send' },
    MessageAttributes: { ...str, comment: 'String to MessageAttributeValue object map' },
    MessageDeduplicationId: { ...str, comment: 'Ensures request is idempotent; may only be used for FIFO topics' },
    MessageGroupId: { ...str, comment: 'Tag specifying a specific message group; may only be used for FIFO topics' },
    MessageStructure: { ...str, comment: 'May be set to `json` publish JSON payloads' },
    PhoneNumber: { ...str, comment: 'SMS recipient phone number in E.164 format; if not specified, you must specify `TargetArn` or `TargetArn`' },
    Subject: { ...str, comment: 'Email subject line' },
    TargetArn: { ...str, comment: 'If not specified, you must specify `PhoneNumber` or `TopicArn`' },
    TopicArn: { ...str, comment: 'ARN of the the topic to publish to; if not specified, you must specify `PhoneNumber` or `TargetArn`' },
  },
  request: async (params) => ({
    query: {
      Action: 'Publish',
      ...params,
    },
  }),
  response: defaultResponse, // v2 lifts PublishResult contents to the top level
  error: defaultError,
}

export default {
  name: '@aws-lite/sns',
  service,
  property,
  methods: {
    Publish,
    ...incomplete,
  },
}
