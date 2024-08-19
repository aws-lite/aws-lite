/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { default as qs } from 'node:querystring'
import { querystringifyParams, normalizeResponse } from './lib.mjs'

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

const Accounts = { ...arr, comment: 'Names of the AWS accounts that will be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both' }
const Capabilities = { ...arr, comment: 'Array of CloudFormation capabilities necessary for stack creation; can be any of: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`' }
const ClientRequestToken = { ...str, comment: 'Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`' }
const DisableRollback = { ...bool, comment: 'Set to true to disable rollback of the stack if stack creation failed' }
const EnableTerminationProtection = { ...bool, comment: 'Enable protection against stack deletion', ref: userGuide + 'using-cfn-protect-stacks.html' }
const NotificationARNs = { ...arr, comment: 'Array of SNS topic ARNs to publish stack related events' }
const OnFailure = { ...str, comment: 'Action to be taken if stack creation failes; can be one of: `DO_NOTHING`, `ROLLBACK`, `DELETE`' }
const Parameters = { ...arr, comment: 'Array of objects specifying stack input parameters', ref: docRoot + 'API_Parameter.html' }
const ResourceTypes = { ...arr, comment: 'Array of CloudFormation template resource types with permissions for this action', ref: userGuide + 'using-iam-template.html' }
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
const Type = { ...str, comment: 'Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`' }
const TypeName = { ...str, comment: 'Name of the extension with length between 10 and 204 (inclusive)' }
const Arn = { ...str, comment: 'Amazon resource name' }
const ExecutionRoleArn = { ...str, comment: 'ARN of the IAM execution role used to activate the extension' }
const LoggingConfig = { ...obj, comment: 'Logging configuration', ref: docRoot + 'API_LoggingConfig.html' }
const PublisherId = { ...str, comment: 'ID of the extension publisher' }
const VersionId = { ...str, comment: 'ID of a specific extension version; found at the end of the ARN of the extension version' }
const MaxResults = { ...num, comment: 'Maximum number of results to be returned in a response' }
const CallAs = { ...str, comment: 'Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`', ref: docRoot + 'API_DescribeOrganizationsAccess.html' }
const Regions = { ...arr, required, comment: 'Array of regions where the stack instances will be created' }
const StackSetName = { ...str, required, comment: 'Name or ID of a stack set' }
const DeploymentTargets = { ...obj, comment: 'Organizations accounts to be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both', ref: docRoot + 'API_DeploymentTargets.html' }
const OperationId = { ...str, required, comment: 'Unique identifier for this stack set operation; prevents repeats of the same request' }
const OperationPreferences = { ...obj, comment: 'Preferences for how the stack set operation will be performed', ref: docRoot + 'API_StackSetOperationPreferences.html' }
const StackInstanceAccount = { ...str, comment: 'ID of an AWS account associated with the stack instance' }
const StackInstanceRegion = { ...str, comment: 'Region associated with the stack instance' }
const ParameterOverrides = { ...arr, comment: 'Array of `Parameter` objects defining stack set parameters to override in the stack instances', ref: docRoot + 'API_Parameter.html' }
const Description = { ...str, comment: 'Description' }
const ChangeSetName = { ...str, required, comment: 'User created ID for the change set' }
const valPaginate = { type: [ 'boolean', 'string' ], comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
// const valIteratorPaginate = { ...str, comment: 'Enable iterator pagination; use this instead of making your own individual pagination requests' }

const Version = '2010-05-15'

const emptyResponse = () => { return {} }
const defaultError = ({ statusCode, error }) => ({ statusCode, error })
const deMemberify = (prop) => {
  let result = []
  if (Array.isArray(prop.member) && prop.member.length) result = prop.member
  else if (prop.member && prop.member.length) result = [ prop.member ]
  return result
}

const ActivateOrganizationsAccess = {
  awsDoc: docRoot + 'API_ActivateOrganizationsAccess.html',
  validate: {},
  request: () => {
    return {
      query: { Action: 'ActivateOrganizationsAccess' },
    }
  },
  response: emptyResponse,
}

const ActivateType = {
  awsDoc: docRoot + 'API_ActivateType.html',
  validate: {
    AutoUpdate: { ...bool, comment: 'Set to false to disable auto updates when a minor version is published' },
    ExecutionRoleArn,
    LoggingConfig,
    MajorVersion: { ...num, comment: 'Specify major version of the extension to be activated; default is the latest version' },
    PublicTypeArn: { ...str, comment: 'ARN of the public extension; you must provide either `PublicTypeArn` or all of: `TypeName`, `Type`, `PublisherId`' },
    PublisherId,
    Type,
    TypeName,
    TypeNameAlias: { ...str, comment: 'Optional alias for the public extension; must be unique within the account and region' },
    VersionBump: { ...str, comment: 'Manually update a previously-activated type to a new major or minor version if available; can be one of: `MAJOR`, `MINOR`' },
  },
  request: (params) => {
    const query = querystringifyParams(params)
    return {
      query: {
        Action: 'ActivateType',
        ...query,
      },
    }
  },
  response: ({ payload }) => payload.ActivateTypeResult,
}

const BatchDescribeTypeConfigurations = {
  awsDoc: docRoot + 'API_BatchDescribeTypeConfigurations.html',
  validate: {
    TypeConfigurationIdentifiers: { ...arr, required, comment: 'Array of type configuration identifiers', ref: docRoot + 'API_TypeConfigurationIdentifier.html' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'BatchDescribeTypeConfigurations',
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => {
    const { BatchDescribeTypeConfigurationsResult } = payload
    return normalizeResponse(BatchDescribeTypeConfigurationsResult)
  },
}

const CancelUpdateStack = {
  awsDoc: docRoot + 'API_CancelUpdateStack.html',
  validate: {
    StackName,
    ClientRequestToken,
  },
  request: (params) => {
    return {
      query: {
        Action: 'CancelUpdateStack',
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const ContinueUpdateRollback = {
  awsDoc: docRoot + 'API_ContinueUpdateRollback.html',
  validate: {
    StackName,
    ClientRequestToken,
    ResourcesToSkip: { ...arr, comment: 'Array of logical IDs of resources to skip', ref: docRoot + 'API_ContinueUpdateRollback.html#API_ContinueUpdateRollback_RequestParameters' },
    RoleARN,
  },
  request: (params) => {
    return {
      query: {
        Action: 'ContinueUpdateRollback',
        Version,
        ...querystringifyParams(params),
      },
    }
  },
  response: emptyResponse,
}

const CreateChangeSet = {
  awsDoc: docRoot + 'API_CreateChangeSet.html',
  validate: {
    ChangeSetName,
    StackName,
    Capabilities,
    ChangeSetType: { ...str, comment: 'Type of the change set; can be one of: `CREATE`, `UPDATE`, `IMPORT`' },
    ClientToken: { ...str, comment: 'Unique identifier for this request; prevents repeats of the same request' },
    Description,
    ImportExistingResources: { ...bool, comment: 'Set to true to indicate that an existing resource will be imported' },
    IncludeNestedStacks: { ...bool, comment: 'Set to true to include nested stacks in the specified template' },
    NotificationARNs,
    OnStackFailure: { ...str, comment: 'Specify an action to take on failure; can be one of: `DO_NOTHING`, `ROLLBACK`, `DELETE`' },
    Parameters,
    ResourceTypes,
    ResourcesToImport: { ...arr, comment: 'Array of resources to import', ref: docRoot + 'API_ResourceToImport.html' },
    RoleARN,
    RollbackConfiguration,
    Tags,
    TemplateBody,
    TemplateURL,
    UsePreviousTemplate: { ...bool, comment: 'Set to true to reuse the template associated with the stack' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'CreateChangeSet',
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.CreateChangeSetResult,
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
        Version,
        ...query,
      },
    }
  },
  response: ({ payload }) => ({ StackId: payload.CreateStackResult.StackId }),
}

const CreateStackInstances = {
  awsDoc: docRoot + 'API_CreateStackInstances.html',
  validate: {
    OperationId,
    Regions,
    StackSetName,
    Accounts,
    CallAs,
    DeploymentTargets,
    OperationPreferences,
    ParameterOverrides,
  },
  request: (params) => {
    return {
      query: {
        Action: 'CreateStackInstances',
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.CreateStackInstancesResult,
}

const CreateStackSet = {
  awsDoc: docRoot + 'API_CreateStackSet.html',
  validate: {
    ClientRequestToken: { ...ClientRequestToken, required },
    StackSetName,
    AdministrationRoleARN: { ...str, comment: 'ARN of the IAM role to use' },
    AutoDeployment: { ...str, comment: 'Specify if stack sets automatically deploy to organization accounts that are added to the target organization; can be `SERVICE_MANAGED`' },
    CallAs,
    Capabilities,
    Description,
    ExecutionRoleName: { ...str, comment: 'Name of the IAM execution role used to create the stack set; defaults to `AWSCloudFormationStackSetExecutionRole`' },
    ManagedExecution: { ...obj, comment: 'Specify if the stack sets operate concurrently when possible', ref: docRoot + 'API_ManagedExecution.html' },
    Parameters,
    PermissionModel: { ...str, comment: 'Describe how IAM roles required for operations are created; can be one of: `SELF_MANAGED` (default), `SERVICE_MANAGED`' },
    StackId: { ...str, comment: 'ARN of a stack to be imported' },
    Tags,
    TemplateBody,
    TemplateURL,
  },
  request: (params) => {
    return {
      query: {
        Action: 'CreateStackSet',
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.CreateStackSetResult,
}

const DeactivateOrganizationsAccess = {
  awsDoc: docRoot + 'API_DeactivateOrganizationsAccess.html',
  validate: {},
  request: () => {
    return {
      query: { Action: 'DeactivateOrganizationsAccess' },
    }
  },
  response: emptyResponse,
}

const DeactivateType = {
  awsDoc: docRoot + 'API_DeactivateType.html',
  validate: {
    Arn: { ...str, comment: 'ARN of the extension' },
    Type,
    TypeName,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeactivateType',
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteChangeSet = {
  awsDoc: docRoot + 'API_DeleteChangeSet.html',
  validate: {
    ChangeSetName,
    StackName: { ...str, comment: 'Stack name; must be provided if `ChangeSetName` is not an ARN' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeleteChangeSet',
        Version,
        ...params,
      },
    }
  },
  response: emptyResponse,
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

const DeleteStackInstances = {
  awsDoc: docRoot + 'API_DeleteStackInstances.html',
  validate: {
    OperationId,
    Regions,
    RetainStacks: { ...bool, required, comment: 'Specify if stacks will be retained after the instances are removed from the stack set' },
    StackSetName,
    Accounts,
    CallAs,
    DeploymentTargets,
    OperationPreferences,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeleteStackInstances',
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.DeleteStackInstancesResult,
}

const DeleteStackSet = {
  awsDoc: docRoot + 'API_DeleteStackSet.html',
  validate: {
    StackSetName,
    CallAs,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeleteStackSet',
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeregisterType = {
  awsDoc: docRoot + 'API_DeregisterType.html',
  validate: {
    Arn,
    Type,
    TypeName,
    VersionId: { ...str, comment: 'ID of a specific extension version; found at the end of the ARN of the extension version' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeregisterType',
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DescribeAccountLimits = {
  awsDoc: docRoot + 'API_DescribeAccountLimits.html',
  validate: {
    NextToken,
    paginate: valPaginate,
  },
  request: ({ NextToken, paginate }) => {
    let query = {
      Action: 'DescribeAccountLimits',
      Version,
    }
    if (NextToken) query.NextToken = NextToken
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'DescribeAccountLimitsResult.NextToken',
        accumulator: 'DescribeAccountLimitsResult.AccountLimits.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { DescribeAccountLimitsResult } = payload
    DescribeAccountLimitsResult.AccountLimits = deMemberify(DescribeAccountLimitsResult.AccountLimits)
    return DescribeAccountLimitsResult
  },
}

// TODO: test
// const DescribeChangeSet = {
//   awsDoc: docRoot + 'API_DescribeChangeSet.html',
//   validate: {
//     ChangeSetName,
//     IncludePropertyValues: { ...bool, comment: 'Set to `true` to include property values in the response' },
//     NextToken,
//     StackName: { ...str, comment: 'Stack name; must be provided if `ChangeSetName` is not an ARN' },
//     paginate: valIteratorPaginate,
//   },
//   request: (params) => {
//     const query = {
//       Action: 'DescribeChangeSet',
//       Version,
//       ...params,
//     }
//     const { paginate } = params
//     if (paginate) delete query.paginate
//     return {
//       query,
//       paginate,
//       paginator: {
//         cursor: 'NextToken',
//         token: 'DescribeChangeSetResult.NextToken',
//         type: 'query',
//       },
//     }
//   },
//   response: ({ payload }) => {
//     const  DescribeChangeSetResult = normalizeResponse(payload.DescribeChangeSetResult)
//     if (DescribeChangeSetResult.Changes) DescribeChangeSetResult.Changes.map(i => normalizeResponse(i, 1))
//     return DescribeChangeSetResult
//   },
// }

const DescribeOrganizationsAccess = {
  awsDoc: docRoot + 'API_DescribeOrganizationsAccess.html',
  validate: {
    CallAs: { ...str, comment: 'Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`', ref: docRoot + 'API_DescribeOrganizationsAccess.html' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeOrganizationsAccess',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DescribeOrganizationsAccessResult,
}

const DescribeStackInstance = {
  awsDoc: docRoot + 'API_DescribeStackInstance.html',
  validate: {
    StackInstanceAccount: { ...StackInstanceAccount, required },
    StackInstanceRegion: { ...StackInstanceRegion, required },
    StackSetName,
    CallAs,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeStackInstance',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DescribeStackInstanceResult,
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
    const query = {
      Action: 'DescribeStacks',
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
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

const DescribeStackSet = {
  awsDoc: docRoot + 'API_DescribeStackSet.html',
  validate: {
    StackSetName,
    CallAs,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeStackSet',
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const { DescribeStackSetResult } = payload
    normalizeResponse(DescribeStackSetResult, 1)
    return DescribeStackSetResult
  },
}

const DescribeType = {
  awsDoc: docRoot + 'API_DescribeType.html',
  validate: {
    Arn,
    PublicVersionNumber: { ...str, comment: 'Version number of the public third-party extension' },
    PublisherId,
    Type,
    TypeName,
    VersionId,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeType',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DescribeTypeResult,
}

const ListStackInstances = {
  awsDoc: docRoot + 'API_ListStackInstances.html',
  validate: {
    StackSetName,
    CallAs,
    Filters: { ...arr, comment: 'Array of `StackInstanceFilter` objects to specify filters for the results', ref: docRoot + 'API_StackInstanceFilter.html' },
    MaxResults,
    NextToken,
    StackInstanceAccount,
    StackInstanceRegion,
  },
  request: (params) => {
    const query = {
      Action: 'ListStackInstances',
      ...querystringifyParams(params),
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListStackInstancesResult.NextToken',
        accumulator: 'ListStackInstancesResult.Summaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { ListStackInstancesResult, NextToken } = payload
    const Summaries = deMemberify(ListStackInstancesResult.Summaries)
    const result = { Summaries }
    if (NextToken) result.NextToken = NextToken
    return result
  },
}

const ListStackResources = {
  awsDoc: docRoot + 'API_ListStackResources.html',
  validate: {
    StackName,
    NextToken,
    paginate: valPaginate,
  },
  request: async (params) => {
    const query = {
      Action: 'ListStackResources',
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
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

const ListStacks = {
  awsDoc: docRoot + 'API_ListStacks.html',
  validate: {
    NextToken,
    StackStatusFilter: { ...arr, comment: 'Filter results by status', ref: docRoot + 'API_ListStacks.html#API_ListStacks_RequestParameters' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListStacks',
      ...querystringifyParams(params),
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListStacksResult.NextToken',
        accumulator: 'ListStacksResult.StackSummaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { ListStacksResult, NextToken } = payload
    const StackSummaries = deMemberify(ListStacksResult.StackSummaries)
    const result = { StackSummaries }
    if (NextToken) result.NextToken = NextToken
    return result
  },
}

const ListStackSetOperationResults = {
  awsDoc: docRoot + 'API_ListStackSetOperationResults.html',
  validate: {
    StackSetName,
    OperationId: { ...str, required, comment: 'ID of the stack set operation' },
    CallAs,
    Filters: { ...arr, comment: 'Array of filter objects', ref: docRoot + 'API_OperationResultFilter.html' },
    MaxResults,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListStackSetOperationResults',
      ...querystringifyParams(params),
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListStackSetOperationResultsResult.NextToken',
        accumulator: 'ListStackSetOperationResultsResult.Summaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { ListStackSetOperationResultsResult, NextToken } = payload
    const Summaries = deMemberify(ListStackSetOperationResultsResult.Summaries)
    const result = { Summaries }
    if (NextToken) result.NextToken = NextToken
    return result
  },
}

const ListStackSetOperations = {
  awsDoc: docRoot + 'API_ListStackSetOperations.html',
  validate: {
    StackSetName,
    CallAs,
    MaxResults,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    let query = {
      Action: 'ListStackSetOperations',
      ...params,
    }
    let { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListStackSetOperationsResult.NextToken',
        accumulator: 'ListStackSetOperationsResult.Summaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { ListStackSetOperationsResult, NextToken } = payload
    const Summaries = deMemberify(ListStackSetOperationsResult.Summaries)
    const result = { Summaries }
    if (NextToken) result.NextToken = NextToken
    return result
  },
}

const ListStackSets = {
  awsDoc: docRoot + 'API_ListStackSets.html',
  validate: {
    CallAs,
    MaxResults,
    NextToken,
    Status: { ...str, comment: 'Filter results by status; can be one of: `ACTIVE`, `DELETED`' },
    paginate: valPaginate,
  },
  request: (params) => {
    let query = {
      Action: 'ListStackSets',
      ...params,
    }
    let { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListStackSetsResult.NextToken',
        accumulator: 'ListStackSetsResult.Summaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { ListStackSetsResult, NextToken } = payload
    const Summaries = deMemberify(ListStackSetsResult.Summaries)
    const result = { Summaries }
    if (NextToken) result.NextToken = NextToken
    return result
  },
}

/* TODO: test
const ListTypeRegistrations = {
  awsDoc: docRoot + 'API_ListTypeRegistrations.html',
  validate: {
    MaxResults,
    NextToken,
    RegistrationStatusFilter: { ...str, comment: 'Filter results by status; can be one of: `COMPLETE`, `IN_PROGRESS` (default), `FAILED`' },
    Type,
    TypeArn: { ...str, comment: 'ARN of the extension' },
    TypeName,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListTypeRegistrations',
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListTypeRegistrationsResult.NextToken',
        accumulator: 'ListTypeRegistrationsResult.RegistrationTokenList',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => payload.ListTypeRegistrationsResult,
}
*/

const ListTypes = {
  awsDoc: docRoot + 'API_ListTypes.html',
  validate: {
    DeprecatedStatus: { ...str, comment: 'Filter results by deprecated status; can be one of: `LIVE`, `DEPRECATED`' },
    Filters: { ...obj, comment: 'Filter configurations', ref: docRoot + 'API_TypeFilters.html' },
    MaxResults,
    NextToken,
    ProvisioningType: { ...str, comment: 'Filter results by provisioning type; can be one of: `FULLY_MUTABLE` (default), `IMMUTABLE`, `NON_PROVISIONABLE`' },
    Type,
    Visibility: { ...str, comment: 'Filter results by visibility; can be one of: `PRIVATE` (default), `PUBLIC`' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListTypes',
      ...querystringifyParams(params),
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListTypesResult.NextToken',
        accumulator: 'ListTypesResult.TypeSummaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const { ListTypesResult } = payload
    ListTypesResult.TypeSummaries = deMemberify(ListTypesResult.TypeSummaries)
    return ListTypesResult
  },
}

// TODO: test result
const RegisterType = {
  awsDoc: docRoot + 'API_RegisterType.html',
  validate: {
    SchemaHandlerPackage: { ...str, required, comment: 'A URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register' },
    TypeName: { ...TypeName, required },
    ClientRequestToken: { ...str, comment: 'Unique identifier that acts as an idempotency key for the request' },
    ExecutionRoleArn,
    LoggingConfig,
    Type,
  },
  request: (params) => {
    return {
      query: {
        Action: 'RegisterType',
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.RegisterTypeResult,
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
        Version,
        ...query,
      },
    }
  },
  response: ({ payload }) => ({ StackId: payload.UpdateStackResult.StackId }),
}

const UpdateStackInstances = {
  awsDoc: docRoot + 'API_UpdateStackInstances.html',
  validate: {
    OperationId,
    Regions,
    StackSetName,
    Accounts,
    CallAs,
    DeploymentTargets,
    OperationPreferences,
    ParameterOverrides,
  },
  request: (params) => {
    return {
      query: {
        Action: 'UpdateStackInstances',
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.UpdateStackInstancesResult,
}

const UpdateTerminationProtection = {
  awsDoc: docRoot + 'API_UpdateTerminationProtection.html',
  validate: {
    StackName,
    EnableTerminationProtection: { ...bool, required, comment: 'Enable termination protection on the specified stack' },
  },
  request: (params) => {
    return {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: qs.stringify({
        Action: 'UpdateTerminationProtection',
        Version,
        ...params,
      }),
    }
  },
  response: ({ payload }) => ({ StackId: payload.UpdateTerminationProtectionResult.StackId }),
}

export default {
  name: '@aws-lite/cloudformation',
  service,
  property,
  methods: {
    ActivateOrganizationsAccess,
    ActivateType,
    BatchDescribeTypeConfigurations,
    CancelUpdateStack,
    ContinueUpdateRollback,
    CreateChangeSet,
    CreateStack,
    CreateStackInstances,
    CreateStackSet,
    DeactivateOrganizationsAccess,
    DeleteChangeSet,
    DeactivateType,
    DeleteStack,
    DeleteStackInstances,
    DeleteStackSet,
    DeregisterType,
    DescribeAccountLimits,
    // DescribeChangeSet,
    DescribeOrganizationsAccess,
    DescribeStackInstance,
    DescribeStackResources,
    DescribeStacks,
    DescribeStackSet,
    DescribeType,
    ListStackInstances,
    ListStackResources,
    ListStacks,
    ListStackSetOperationResults,
    ListStackSetOperations,
    ListStackSets,
    // ListTypeRegistrations,
    ListTypes,
    RegisterType,
    UpdateStack,
    UpdateStackInstances,
    UpdateTerminationProtection,
    ...incomplete,
  },
}
