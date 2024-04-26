/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { querystringifyParams } from './lib.mjs'

const service = 'cloudformation'
const property = 'CloudFormation'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/'
const userGuide = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/'

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const Capabilities = { ...arr, comment: 'Array of CloudFormation capabilities necessary for stack creation; can be any of: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`' }
const ClientRequestToken = { ...str, comment: 'Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`' }
const DisableRollback = { ...bool, comment: 'Set to true to disable rollback of the stack if stack creation failed' }
const EnableTerminationProtection = { ...bool, comment: 'Enable protection against stack deletion', ref: userGuide + 'using-cfn-protect-stacks.html' }
const NotificationARNs = { ...arr, comment: 'Array of SNS topic ARNs to publish stack related events' }
const OnFailure = { ...str, comment: 'Action to be taken if stack creation failes; can be one of: `DO_NOTHING`, `ROLLBACK`, `DELETE`' }
const Parameters = { ...arr, comment: 'Array of objects specifying stack input parameters', ref: docRoot + 'API_Parameter.html' }
const ResourceTypes = { ...arr, comment: 'Array of CloudFormation template resource types with permissions for this create stack action', ref: userGuide + 'using-iam-template.html' }
const RetainExceptOnCreate = { ...bool, comment: 'Set to true to ensure newly created resources are deleted if the operation rolls back, even if marked with a deletion policy of `Retain`' }
const RoleARN = { ...str, comment: 'IAM role ARN CloudFormation assumes to create the stack' }
const RollbackConfiguration = { ...obj, comment: 'Rollback triggers to be monitored during creation and updating', ref: docRoot + 'API_RollbackConfiguration.html' }
const StackPolicyBody = { type: [ 'string', 'object' ], comment: 'Stack policy document; an object will be automatically serialized to JSON, or supply pre-serialized JSON', ref: userGuide + 'protect-stack-resources.html' }
const StackPolicyURL = { ...str, comment: 'Stack policy url' }
const Tags = { ...arr, comment: 'Array of tag objects to associate with the stack', ref: docRoot + 'API_Tag.html' }
const TemplateBody = { type: [ 'string', 'object' ], comment: 'CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b' }
const TemplateURL = { ...str, comment: 'S3 location of CloudFormation template; can be up to 460,800 b' }
const TimeoutInMinutes = { ...num, comment: 'Amount of time before the stack status becomes `CREATE_FAILED`' }
const StackName = { ...str, required, comment: 'Stack name or ID' }
const NextToken = { ...str, comment: 'Pagination cursor token to be used if `NextToken` was returned in a previous response' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const defaultError = ({ statusCode, error }) => ({ statusCode, error })
const deMemberify = (prop) => {
  let result = []
  if (Array.isArray(prop.member) && prop.member.length) result = prop.member
  else if (prop.member) result = [ prop.member ]
  return result
}

const CreateStack = {
  awsDoc: docRoot + 'API_CreateStack.html',
  validate: {
    StackName,
    Capabilities,
    ClientRequestToken,
    DisableRollback,
    EnableTerminationProtection,
    NotificationARNs,
    OnFailure,
    Parameters,
    ResourceTypes,
    RetainExceptOnCreate,
    RoleARN,
    RollbackConfiguration,
    StackPolicyBody,
    StackPolicyURL,
    Tags,
    TemplateBody,
    TemplateURL,
    TimeoutInMinutes,
  },
  request: (params) => {
    let { StackPolicyBody, TemplateBody } = params
    if (TemplateBody && typeof params.TemplateBody === 'object') {
      params.TemplateBody = JSON.stringify(TemplateBody)
    }
    if (StackPolicyBody && typeof params.StackPolicyBody === 'object') {
      params.StackPolicyBody = JSON.stringify(StackPolicyBody)
    }
    const query = querystringifyParams(params)
    return {
      query: {
        Action: 'CreateStack',
        Version: '2010-05-15',
        ...query,
      },
    }
  },
  response: ({ payload }) => ({ StackId: payload.CreateStackResult.StackId }),
}

const DeleteStack = {
  awsDoc: docRoot + 'API_DeleteStack.html',
  validate: {
    StackName,
    ClientRequestToken,
    RetainResources: { ...arr, comment: 'List of logical resource IDs to retain after stack deletion' },
    RoleARN: { ...str, comment: 'IAM role ARN to assume during deletion' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeleteStack',
        ...params,
      },
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
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const { StackResources, NextToken } = payload.DescribeStackResourcesResult
    const result = { StackResources: deMemberify(StackResources) }
    if (NextToken) result.NextToken = NextToken
    return result
  },
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
        ...params,
      },
      paginator: {
        cursor: 'NextToken',
        token: 'DescribeStacksResponse.NextToken',
        accumulator: 'DescribeStacksResult.Stacks.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { Stacks, NextToken } = payload.DescribeStacksResult
    const result = { Stacks: deMemberify(Stacks) }
    if (result.Stacks.length) {
      result.Stacks = result.Stacks.map(stack => {
        if (stack.Outputs) stack.Outputs = deMemberify(stack.Outputs)
        if (stack.Capabilities) stack.Capabilities = deMemberify(stack.Capabilities)
        return stack
      })
    }
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
        ...params,
      },
      paginator: {
        cursor: 'NextToken',
        token: 'ListStackResourcesResult.NextToken',
        accumulator: 'ListStackResourcesResult.StackResourceSummaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { StackResourceSummaries, NextToken } = payload.ListStackResourcesResult
    const result = { StackResourceSummaries: deMemberify(StackResourceSummaries) }
    if (NextToken) result.NextToken = NextToken
    return result
  },
  error: defaultError,
}

const UpdateStack = {
  awsDoc: docRoot + 'API_UpdateStack.html',
  validate: {
    StackName,
    Capabilities,
    ClientRequestToken,
    DisableRollback,
    NotificationARNs,
    Parameters,
    ResourceTypes,
    RetainExceptOnCreate,
    RoleARN,
    RollbackConfiguration,
    StackPolicyBody,
    // StackPolicyDuringUpdateBody,
    // StackPolicyDuringUpdateURL,
    StackPolicyURL,
    Tags,
    TemplateBody,
    TemplateURL,
    // UsePreviousTemplate
  },
  request: (params) => {
    let { StackPolicyBody, TemplateBody } = params
    if (TemplateBody && typeof params.TemplateBody === 'object') {
      params.TemplateBody = JSON.stringify(TemplateBody)
    }
    if (StackPolicyBody && typeof params.StackPolicyBody === 'object') {
      params.StackPolicyBody = JSON.stringify(StackPolicyBody)
    }
    const query = querystringifyParams(params)
    return {
      query: {
        Action: 'UpdateStack',
        Version: '2010-05-15',
        ...query,
      },
    }
  },
  response: ({ payload }) => ({ StackId: payload.UpdateStackResult.StackId }),
}

export default {
  name: '@aws-lite/cloudformation',
  service,
  property,
  methods: { CreateStack, DeleteStack, DescribeStackResources, DescribeStacks, ListStackResources, UpdateStack, ...incomplete },
}
