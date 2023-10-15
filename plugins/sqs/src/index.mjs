import incomplete from './incomplete.mjs'
import { default as qs } from 'node:querystring'

const service = 'sqs'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/'

// Validation types
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

/**
 * Plugin maintained by: @architect
 */

const SendMessage = {
  awsDoc: docRoot + 'API_SendMessage.html',
  validate: {
    MessageBody: { ...str, required, comment: 'Message to send, from 1b - 256KiB' },
    QueueUrl: { ...str, required, comment: 'SQS queue URL to send the message to' },
    DelaySeconds: { ...num, comment: 'Seconds, from 0 - 900, to delay a message' },
    MessageAttributes: { ...obj, comment: `Message attribute map; [see AWS docs](${docRoot}API_MessageAttributeValue.html)` },
    MessageDeduplicationId: { ...str, comment: 'Ensures request is idempotent; may only be used for FIFO queues' },
    MessageGroupId: { ...str, comment: 'Tag specifying a specific message group; may only be used for FIFO queues' },
    MessageSystemAttributes: { ...obj, comment: `Message system attribute map; [see AWS docs](${docRoot}API_MessageSystemAttributeValue.html)` },
  },
  request: async (params) => ({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    payload: qs.stringify({ Action: 'SendMessage', ...params })
  }),
}

export default {
  service,
  methods: {
    SendMessage,
    ...incomplete,
  }
}
