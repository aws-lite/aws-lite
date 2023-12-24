/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'cloudformation'
const property = 'CloudFormation'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/'

// Validation types
const arr = { type: 'array' }
// const bool = { type: 'boolean' }
// const obj = { type: 'object' }
const str = { type: 'string' }
// const num = { type: 'number' }

const StackName = { ...str, required, comment: 'Stack name or ID' }
const NextToken = { ...str, comment: 'Pagination cursor token to be used if `NextToken` was returned in a previous response' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

// const defaultResponse = ({ payload }) => payload
const defaultNestedResponse = prop => ({ payload }) => payload[prop]
const defaultError = ({ statusCode, error }) => ({ statusCode, error })

const DeleteStack = {
  awsDoc: docRoot + 'API_DeleteStack.html',
  validate: {
    StackName,
    ClientRequestToken: { ...str, comment: 'Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`' },
    RetainResources: { ...arr, comment: 'List of logical resource IDs to retain after stack deletion' },
    RoleARN: { ...str, comment: 'IAM role ARN to assume during deletion' },
  },
  request: async (params) => {
    return {
      query: {
        Action: 'DeleteStack',
        ...params
      }
    }
  },
  response: () => ({}),
  error: defaultError,
}

const DescribeStackResources = {
  awsDoc: docRoot + 'API_DescribeStackResources.html',
  validate: {
    StackName: { ...StackName, required: false },
    LogicalResourceId: { ...str, comment: 'Logical name of a resource' },
    PhysicalResourceId: { ...str, comment: 'Physical name or ID of a resource; if you do not specify `PhysicalResourceId`, you must specify `StackName`' },
  },
  request: async (params) => {
    return {
      query: {
        Action: 'DescribeStackResources',
        ...params
      }
    }
  },
  response: defaultNestedResponse('DescribeStackResourcesResult'),
  error: defaultError,
}

const DescribeStacks = {
  awsDoc: docRoot + 'API_DescribeStacks.html',
  validate: {
    StackName: { ...StackName, required: false },
    NextToken,
    paginate: valPaginate,
  },
  request: async (params) => {
    return {
      query: {
        Action: 'DescribeStacks',
        ...params
      },
      paginator: {
        cursor: 'NextToken',
        token: 'NextToken',
        accumulator: 'DescribeStacksResult.Stacks.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { Stacks, NextToken } = payload.DescribeStacksResult
    const result = { Stacks: [] }
    if (Stacks.member.length) result.Stacks = Stacks.member
    if (NextToken) result.NextToken = NextToken
    return result
  },
  error: defaultError,
}

const ListStackResources = {
  awsDoc: docRoot + 'API_ListStackResources.html',
  validate: {
    StackName,
    NextToken,
    paginate: valPaginate,
  },
  request: async (params) => {
    return {
      query: {
        Action: 'ListStackResources',
        ...params
      },
      paginator: {
        cursor: 'NextToken',
        token: 'NextToken',
        accumulator: 'ListStackResourcesResult.StackResourceSummaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { StackResourceSummaries, NextToken } = payload.ListStackResourcesResult
    const result = { StackResourceSummaries: [] }
    if (StackResourceSummaries.member.length) result.StackResourceSummaries = StackResourceSummaries.member
    if (NextToken) result.NextToken = NextToken
    return result
  },
  error: defaultError,
}

export default {
  service,
  property,
  methods: { DeleteStack, DescribeStackResources, DescribeStacks, ListStackResources, ...incomplete }
}
