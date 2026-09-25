/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { flattenParams } from './lib.mjs'
import { default as qs } from 'node:querystring'

const service = 'ses'
const property = 'SES'
const required = true
const docRoot = 'https://docs.aws.amazon.com/ses/latest/APIReference/'

// Validation types
const arr = { type: 'array' }
const obj = { type: 'object' }
const str = { type: 'string' }

const formEncodedContentType = { 'content-type': 'application/x-www-form-urlencoded' }

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

const SendEmail = {
  awsDoc: docRoot + 'API_SendEmail.html',
  validate: {
    Source: { ...str, required, comment: 'Email address that is sending the email; must be a verified SES identity' },
    Destination: { ...obj, required, comment: 'Destination for the email, composed of `ToAddresses`, `CcAddresses`, and `BccAddresses` arrays', ref: docRoot + 'API_Destination.html' },
    Message: { ...obj, required, comment: 'Message to be sent, composed of a `Subject` and `Body` (with `Text` and/or `Html` parts)', ref: docRoot + 'API_Message.html' },
    ConfigurationSetName: { ...str, comment: 'Name of the configuration set to use when sending the email' },
    ReplyToAddresses: { ...arr, comment: 'Array of reply-to email addresses' },
    ReturnPath: { ...str, comment: 'Email address to which bounces and complaints are forwarded when feedback forwarding is enabled' },
    ReturnPathArn: { ...str, comment: 'ARN of the identity associated with the sending authorization policy permitting use of the `ReturnPath` address' },
    SourceArn: { ...str, comment: 'ARN of the identity associated with the sending authorization policy permitting use of the `Source` address' },
    Tags: { ...arr, comment: 'Array of `{ Name, Value }` message tags to apply to the email', ref: docRoot + 'API_MessageTag.html' },
  },
  request: async (params) => ({
    headers: formEncodedContentType,
    payload: qs.stringify(flattenParams({ Action: 'SendEmail', ...params })),
  }),
  response: ({ payload }) => payload.SendEmailResult,
  error: defaultError,
}

const SendRawEmail = {
  awsDoc: docRoot + 'API_SendRawEmail.html',
  validate: {
    RawMessage: { ...obj, required, comment: 'Raw email message, as `{ Data }` where `Data` is the entire base64-encoded MIME message', ref: docRoot + 'API_RawMessage.html' },
    ConfigurationSetName: { ...str, comment: 'Name of the configuration set to use when sending the email' },
    Destinations: { ...arr, comment: 'Array of destination email addresses (To:, CC:, and BCC:)' },
    FromArn: { ...str, comment: 'ARN of the identity associated with the sending authorization policy permitting the specified `From` address' },
    ReturnPathArn: { ...str, comment: 'ARN of the identity associated with the sending authorization policy permitting use of the `ReturnPath` address' },
    Source: { ...str, comment: 'Identity email address sending the email; if omitted, a `From` address must be present in the raw message' },
    SourceArn: { ...str, comment: 'ARN of the identity associated with the sending authorization policy permitting use of the `Source` address' },
    Tags: { ...arr, comment: 'Array of `{ Name, Value }` message tags to apply to the email', ref: docRoot + 'API_MessageTag.html' },
  },
  request: async (params) => ({
    headers: formEncodedContentType,
    payload: qs.stringify(flattenParams({ Action: 'SendRawEmail', ...params })),
  }),
  response: ({ payload }) => payload.SendRawEmailResult,
  error: defaultError,
}

export default {
  name: '@aws-lite/ses',
  service,
  property,
  methods: {
    SendEmail,
    SendRawEmail,
    ...incomplete,
  },
}
