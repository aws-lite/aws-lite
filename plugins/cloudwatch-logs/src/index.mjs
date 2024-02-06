/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'logs'
const property = 'CloudWatchLogs'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/'

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
// const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const limit = { ...num, comment: 'Maximum number of items to evaluate and return' }
const logGroupName = { ...str, comment: 'Name of the log group' }
const nextToken = { ...str, comment: 'Pagination cursor token to be used if `NextToken` was returned in a previous response' }
const logGroupIdentifier = { ...str, comment: 'Name or ARN of the log group' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const headers = (method, additional) => ({
  'X-Amz-Target': `Logs_20140328.${method}`,
  'content-type': 'application/x-amz-json-1.1',
  ...additional
})
const defaultResponse = ({ payload }) => payload

const DeleteLogGroup = {
  awsDoc: docRoot + 'API_DeleteLogGroup.html',
  validate: {
    logGroupName: { ...logGroupName, required },
  },
  request: (params) => {
    return {
      awsjson: false,
      headers: headers('DeleteLogGroup'),
      payload: params,
    }
  },
  response: () => ({}),
}

const DescribeLogGroups = {
  awsDoc: docRoot + 'API_DescribeLogGroups.html',
  validate: {
    accountIdentifiers: { ...arr, comment: 'List of accounts to search when `includeLinkedAccounts` is `true`' },
    logGroupNamePrefix: { ...str, comment: 'Prefix to match' },
    logGroupNamePattern: { ...str, comment: 'Case-sensitive substring to match' },
    nextToken,
    limit,
    includeLinkedAccounts: { ...bool, comment: 'Return log groups in the accounts enumerated by `accountIdentifiers`' },
    logGroupClass: { ...str, comment: 'Log group class setting: `STANDARD` (supports all CloudWatch Logs features), or `INFREQUENT_ACCESS` (feature subset with lower costs)', ref: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html' },
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }
    return {
      awsjson: false,
      headers: headers('DescribeLogGroups'),
      payload: params,
      paginate,
      paginator: {
        cursor: 'nextToken',
        token: 'nextToken',
        accumulator: 'logGroups',
      },
    }
  },
  response: defaultResponse,
}

const DescribeLogStreams = {
  awsDoc: docRoot + 'API_DescribeLogStreams.html',
  validate: {
    descending: { ...bool, comment: 'Return results in descending order (if `true`)' },
    limit,
    logGroupIdentifier,
    logGroupName,
    logStreamNamePrefix: { ...str, comment: 'Prefix to match' },
    nextToken,
    orderBy: { ...str, comment: 'Order results by log stream name (`LogStreamName`) or event time (`LastEventTime`)' },
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }
    return {
      awsjson: false,
      headers: headers('DescribeLogStreams'),
      payload: params,
      paginate,
      paginator: {
        cursor: 'nextToken',
        token: 'nextToken',
        accumulator: 'logStreams',
      },
    }
  },
  response: defaultResponse,
}

const GetLogEvents = {
  awsDoc: docRoot + 'API_GetLogEvents.html',
  validate: {
    endTime: { ...num, comment: 'End of the time range in epoch milliseconds' },
    limit,
    logGroupIdentifier,
    logGroupName,
    logStreamName: { ...str, required, comment: 'Name of the log stream' },
    nextToken,
    startFromHead: { ...bool, comment: 'Return earliest log events first (`true`)' },
    startTime: { ...num, comment: 'Start of the time range in epoch milliseconds' },
    unmask: { ...bool, comment: 'Display log event fields with all sensitive data unmasked and visible (`true`)' },
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }
    return {
      awsjson: false,
      headers: headers('GetLogEvents'),
      payload: params,
      paginate,
      paginator: {
        cursor: 'nextToken',
        token: 'nextForwardToken',
        accumulator: 'events',
      },
    }
  },
  response: defaultResponse,
}

export default {
  name: '@aws-lite/cloudwatch-logs',
  service,
  property,
  methods: { DeleteLogGroup, DescribeLogGroups, DescribeLogStreams, GetLogEvents, ...incomplete }
}
