/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { default as qs } from 'node:querystring'
import { querystringifyParams, querystringifyResources, deSerializeObject, deSerializeResources } from './lib.mjs'

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
const AdministrationRoleARN = { ...str, comment: 'ARN of the IAM role used to perform this action' }
const Arn = { ...str, comment: 'Amazon resource name' }
const AutoDeployment = { ...obj, comment: 'Specify if stack sets automatically deploy to organization accounts that are added to the target organization', ref: docRoot + 'API_ManagedExecution.html' }
const CallAs = { ...str, comment: 'Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`' }
const Capabilities = { ...arr, comment: 'Array of CloudFormation capabilities necessary for stack creation; can be any of: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`' }
const ChangeSetName = { ...str, required, comment: 'User created ID for the change set' }
const ClientRequestToken = { ...str, comment: 'Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`' }
const DeploymentTargets = { ...obj, comment: 'Organizations accounts to be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both', ref: docRoot + 'API_DeploymentTargets.html' }
const DeprecatedStatus = { ...str, comment: 'Filter results by deprecated status; can be one of: `LIVE`, `DEPRECATED`' }
const Description = { ...str, comment: 'Description' }
const DisableRollback = { ...bool, comment: 'Set to true to disable rollback of the stack if stack creation failed' }
const EnableTerminationProtection = { ...bool, comment: 'Enable protection against stack deletion', ref: userGuide + 'using-cfn-protect-stacks.html' }
const ExecutionRoleArn = { ...str, comment: 'ARN of the IAM execution role used to activate the extension' }
const ExecutionRoleName = { ...str, comment: 'Name of the IAM execution role used to create the stack set; defaults to `AWSCloudFormationStackSetExecutionRole`' }
const GeneratedTemplateName = { ...str, required, comment: 'User defined name for the generated template; can be ARN for existing templates' }
const LoggingConfig = { ...obj, comment: 'Logging configuration', ref: docRoot + 'API_LoggingConfig.html' }
const LogicalResourceId = { ...str, comment: 'Logical name of a resource' }
const ManagedExecution = { ...obj, comment: 'Specify if the stack sets operate concurrently when possible', ref: docRoot + 'API_ManagedExecution.html' }
const MaxResults = { ...num, comment: 'Maximum number of results to be returned in a response' }
const NextToken = { ...str, comment: 'Pagination cursor token to be used if `NextToken` was returned in a previous response' }
const NotificationARNs = { ...arr, comment: 'Array of SNS topic ARNs to publish stack related events' }
const OnFailure = { ...str, comment: 'Action to be taken if stack creation failes; can be one of: `DO_NOTHING`, `ROLLBACK`, `DELETE`' }
const OperationId = { ...str, comment: 'Unique identifier for this stack set operation; prevents repeats of the same request' }
const OperationPreferences = { ...obj, comment: 'Preferences for how the stack set operation will be performed', ref: docRoot + 'API_StackSetOperationPreferences.html' }
const ParameterOverrides = { ...arr, comment: 'Array of `Parameter` objects defining stack set parameters to override in the stack instances', ref: docRoot + 'API_Parameter.html' }
const Parameters = { ...arr, comment: 'Array of objects specifying stack input parameters', ref: docRoot + 'API_Parameter.html' }
const PermissionModel = { ...str, comment: 'Describe how IAM roles required for operations are created; can be one of: `SELF_MANAGED` (default), `SERVICE_MANAGED`' }
const PublisherId = { ...str, comment: 'ID of the extension publisher' }
const Regions = { ...arr, required, comment: 'Array of regions where the stack instances will be created' }
const ResourceScanId = { ...str, required, comment: 'Resource scan ID' }
const ResourceTypes = { ...arr, comment: 'Array of CloudFormation template resource types with permissions for this action', ref: userGuide + 'using-iam-template.html' }
const RetainExceptOnCreate = { ...bool, comment: 'Set to true to ensure newly created resources are deleted if the operation rolls back, even if marked with a deletion policy of `Retain`' }
const RoleARN = { ...str, comment: 'IAM role ARN CloudFormation assumes to create the stack' }
const RollbackConfiguration = { ...obj, comment: 'Rollback triggers to be monitored during creation and updating', ref: docRoot + 'API_RollbackConfiguration.html' }
const StackInstanceAccount = { ...str, comment: 'ID of an AWS account associated with the stack instance' }
const StackInstanceRegion = { ...str, comment: 'Region associated with the stack instance' }
const StackName = { ...str, required, comment: 'Stack name or ID' }
const StackPolicyBody = { type: [ 'string', 'object' ], comment: 'Stack policy document; an object will be automatically serialized to JSON, or supply pre-serialized JSON', ref: userGuide + 'protect-stack-resources.html' }
const StackPolicyURL = { ...str, comment: 'Stack policy url' }
const StackSetName = { ...str, required, comment: 'Name or ID of a stack set' }
const Tags = { ...arr, comment: 'Array of tag objects to associate with the stack', ref: docRoot + 'API_Tag.html' }
const TemplateBody = { type: [ 'string', 'object' ], comment: 'CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b' }
const TemplateURL = { ...str, comment: 'S3 location of CloudFormation template; can be up to 460,800 b' }
const TimeoutInMinutes = { ...num, comment: 'Amount of time before the stack status becomes `CREATE_FAILED`' }
const Type = { ...str, comment: 'Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`' }
const TypeName = { ...str, comment: 'Name of the extension with length between 10 and 204 (inclusive)' }
const UsePreviousTemplate = { ...bool, comment: 'Set to true to reuse the template associated with the stack' }
const valIteratorPaginate = { ...str, comment: 'Enable iterator pagination; use this instead of making your own individual pagination requests' }
const valPaginate = { type: [ 'boolean', 'string' ], comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
const VersionId = { ...str, comment: 'ID of a specific extension version; found at the end of the ARN of the extension version' }

const Version = '2010-05-15'

const emptyResponse = () => { return {} }
const defaultError = ({ statusCode, error }) => ({ statusCode, error })

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
  response: ({ payload }) => deSerializeObject(payload.BatchDescribeTypeConfigurationsResult),
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
        Version,
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
    ResourcesToImport: { ...arr, comment: 'Array of resources to import', ref: docRoot + 'API_ResourceToImport.html' },
    ResourceTypes,
    RoleARN,
    RollbackConfiguration,
    Tags,
    TemplateBody,
    TemplateURL,
    UsePreviousTemplate,
  },
  request: (params) => {
    const query = {
      Action: 'CreateChangeSet',
      Version,
    }
    const temp = { ...params }
    const { ResourcesToImport, TemplateBody } = params
    if (ResourcesToImport) {
      delete temp.ResourcesToImport
      Object.assign(temp, querystringifyResources({ ResourcesToImport }))
    }
    if (TemplateBody && typeof TemplateBody === 'object') temp.TemplateBody = JSON.stringify(TemplateBody)
    Object.assign(query, querystringifyParams(temp))
    return { query }
  },
  response: ({ payload }) => payload.CreateChangeSetResult,
}

const CreateGeneratedTemplate = {
  awsDoc: docRoot + 'API_CreateGeneratedTemplate.html',
  validate: {
    GeneratedTemplateName,
    Resources: { ...arr, comment: 'Array of `ResourceDefinition` objects to add to the template', ref: docRoot + 'API_CreateGeneratedTemplate.html#API_CreateGeneratedTemplate_RequestParameters' },
    StackName: { ...StackName, required: false },
    TemplateConfiguration: { ...obj, comment: 'Configuration details for the generated template', ref: docRoot + 'API_TemplateConfiguration.html' },
  },
  request: (params) => {
    const query = {
      Action: 'CreateGeneratedTemplate',
      Version,
      ...params,
    }
    const { Resources, TemplateConfiguration } = params
    if (Resources) {
      delete query.Resources
      Object.assign(query, querystringifyResources({ Resources }))
    }
    if (TemplateConfiguration) {
      delete query.TemplateConfiguration
      Object.assign(query, querystringifyParams({ TemplateConfiguration }))
    }
    return { query }
  },
  response: ({ payload }) => payload.CreateGeneratedTemplateResult,
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
    Regions,
    StackSetName,
    Accounts,
    CallAs,
    DeploymentTargets,
    OperationId, // Supposedly not required but might not work without
    OperationPreferences,
    ParameterOverrides,
  },
  request: (params) => {
    return {
      query: {
        Action: 'CreateStackInstances',
        Version,
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.CreateStackInstancesResult,
}

const CreateStackSet = {
  awsDoc: docRoot + 'API_CreateStackSet.html',
  validate: {
    ClientRequestToken: { ...ClientRequestToken, required }, // Supposedly not required but does not work without
    StackSetName,
    AdministrationRoleARN,
    AutoDeployment,
    CallAs,
    Capabilities,
    Description,
    ExecutionRoleName,
    ManagedExecution,
    Parameters,
    PermissionModel,
    StackId: { ...str, comment: 'ARN of a stack to be imported' },
    Tags,
    TemplateBody,
    TemplateURL,
  },
  request: (params) => {
    const { TemplateBody } = params
    if (TemplateBody && typeof params.TemplateBody === 'object') params.TemplateBody = JSON.stringify(TemplateBody)
    return {
      query: {
        Action: 'CreateStackSet',
        Version,
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
    StackName: { ...str, comment: 'Stack name or ARN; must be provided if `ChangeSetName` is not an ARN' },
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

const DeleteGeneratedTemplate = {
  awsDoc: docRoot + 'API_DeleteGeneratedTemplate.html',
  validate: {
    GeneratedTemplateName,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeleteGeneratedTemplate',
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
        Version,
        ...querystringifyParams(params),
      },
    }
  },
  response: () => ({}),
  error: defaultError,
}

const DeleteStackInstances = {
  awsDoc: docRoot + 'API_DeleteStackInstances.html',
  validate: {
    Regions,
    RetainStacks: { ...bool, required, comment: 'Specify if stacks will be retained after the instances are removed from the stack set' },
    StackSetName,
    Accounts,
    CallAs,
    DeploymentTargets,
    OperationId, // Supposedly not required but might not work without
    OperationPreferences,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DeleteStackInstances',
        Version,
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
        Version,
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
        Version,
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
  response: ({ payload }) => deSerializeObject(payload.DescribeAccountLimitsResult),
}

const DescribeChangeSet = {
  awsDoc: docRoot + 'API_DescribeChangeSet.html',
  validate: {
    ChangeSetName,
    IncludePropertyValues: { ...bool, comment: 'Set to `true` to include property values in the response' },
    NextToken,
    StackName: { ...str, comment: 'Stack name or ARN; must be provided if `ChangeSetName` is not an ARN' },
    paginate: valIteratorPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'DescribeChangeSet',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'DescribeChangeSetResult.NextToken',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 2
    const result = deSerializeObject(payload.DescribeChangeSetResult, maxDepth)
    return result
  },
}

const DescribeChangeSetHooks = {
  awsDoc: docRoot + 'API_DescribeChangeSetHooks.html',
  validate: {
    ChangeSetName,
    LogicalResourceId,
    NextToken,
    StackName: { ...str, comment: 'Stack name or ARN; must be provided if `ChangeSetName` is not an ARN' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'DescribeChangeSetHooks',
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'DescribeChangeSetHooksResult.NextToken',
        accumulator: 'DescribeChangeSetHooksResult.Hooks.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.DescribeChangeSetHooksResult),
}

const DescribeGeneratedTemplate = {
  awsDoc: docRoot + 'API_DescribeGeneratedTemplate.html',
  validate: {
    GeneratedTemplateName,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeGeneratedTemplate',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 2 // Arrays nested in arrays nested in arrays
    const result = deSerializeObject(payload.DescribeGeneratedTemplateResult, maxDepth)
    if (result.Resources) result.Resources = deSerializeResources(result.Resources)
    return result
  },
}

const DescribeOrganizationsAccess = {
  awsDoc: docRoot + 'API_DescribeOrganizationsAccess.html',
  validate: {
    CallAs,
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

const DescribePublisher = {
  awsDoc: docRoot + 'API_DescribePublisher.html',
  validate: {
    PublisherId,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribePublisher',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DescribePublisherResult,
}

// TODO: confirm response
const DescribeResourceScan = {
  awsDoc: docRoot + 'API_DescribeResourceScan.html',
  validate: {
    ResourceScanId,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeResourceScan',
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const result = deSerializeObject(payload.DescribeResourceScanResult)
    if (result.ResourceTypeSummaries) result.ResourceTypes = result.ResourceTypeSummaries.map(({ ResourceType }) => ResourceType)
    delete result.ResourceTypeSummaries
    return result
  },
}

const DescribeStackDriftDetectionStatus = {
  awsDoc: docRoot + 'API_DescribeStackDriftDetectionStatus.html',
  validate: {
    StackDriftDetectionId: { ...str, required, comment: 'Stack drift detection ID' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeStackDriftDetectionStatus',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DescribeStackDriftDetectionStatusResult,
}

const DescribeStackEvents = {
  awsDoc: docRoot + 'API_DescribeStackEvents.html',
  validate: {
    NextToken,
    StackName: { ...StackName, required: false }, // Supposedly not required
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'DescribeStackEvents',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'DescribeStackEventsResult.NextToken',
        accumulator: 'DescribeStackEventsResult.StackEvents.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.DescribeStackEventsResult),
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
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 1
    return deSerializeObject(payload.DescribeStackInstanceResult, maxDepth)
  },
}

const DescribeStackResource = {
  awsDoc: docRoot + 'API_DescribeStackResource.html',
  validate: {
    LogicalResourceId: { ...LogicalResourceId, required },
    StackName,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeStackResource',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DescribeStackResourceResult,
}

// TODO: verify
const DescribeStackResourceDrifts = {
  awsDoc: docRoot + 'API_DescribeStackResourceDrifts.html',
  validate: {
    StackName,
    MaxResults,
    NextToken,
    StackResourceDriftStatusFilters: { ...arr, comment: 'Specify filters for results; can contain: `DELETED`, `MODIFIED`, `IN_SYNC`, `NOT_CHECKED`' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'DescribeStackResourceDrifts',
      Version,
      ...querystringifyParams(params),
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'DescribeStackResourceDriftsResult.NextToken',
        accumulator: 'DescribeStackResourceDriftsResult.StackResourceDrifts.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 1
    return deSerializeObject(payload.DescribeStackResourceDriftsResult, maxDepth)
  },
}

const DescribeStackResources = {
  awsDoc: docRoot + 'API_DescribeStackResources.html',
  validate: {
    StackName: { ...StackName, required: false },
    LogicalResourceId,
    PhysicalResourceId: { ...str, comment: 'Physical name or ID of a resource; if you do not specify `PhysicalResourceId`, you must specify `StackName`' },
  },
  request: async (params) => {
    return {
      query: {
        Action: 'DescribeStackResources',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.DescribeStackResourcesResult),
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
      Version,
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
    const maxDepth = 2
    return deSerializeObject(payload.DescribeStacksResult, maxDepth)
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
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 1
    return deSerializeObject(payload.DescribeStackSetResult, maxDepth)
  },
}

const DescribeStackSetOperation = {
  awsDoc: docRoot + 'API_DescribeStackSetOperation.html',
  validate: {
    OperationId: { ...OperationId, required },
    StackSetName,
    CallAs,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeStackSetOperation',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 2
    return deSerializeObject(payload.DescribeStackSetOperationResult, maxDepth)
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
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.DescribeTypeResult),
}

const DescribeTypeRegistration = {
  awsDoc: docRoot + 'API_DescribeTypeRegistration.html',
  validate: {
    RegistrationToken: { ...str, required, comment: 'ID of the registration request returned from `RegisterType`' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'DescribeTypeRegistration',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DescribeTypeRegistrationResult,
}

const DetectStackDrift = {
  awsDoc: docRoot + 'API_DetectStackDrift.html',
  validate: {
    StackName,
    LogicalResourceIds: { ...arr, comment: 'Filter results by resources' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'DetectStackDrift',
        Version,
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.DetectStackDriftResult,
}

const DetectStackResourceDrift = {
  awsDoc: docRoot + 'API_DetectStackResourceDrift.html',
  validate: {
    LogicalResourceId: { ...LogicalResourceId, required },
    StackName,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DetectStackResourceDrift',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 1
    return deSerializeObject(payload.DetectStackResourceDriftResult, maxDepth)
  },
}

const DetectStackSetDrift = {
  awsDoc: docRoot + 'API_DetectStackSetDrift.html',
  validate: {
    StackSetName,
    CallAs,
    OperationId,
    OperationPreferences,
  },
  request: (params) => {
    return {
      query: {
        Action: 'DetectStackSetDrift',
        Version,
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.DetectStackSetDriftResult,
}

const EstimateTemplateCost = {
  awsDoc: docRoot + 'API_EstimateTemplateCost.html',
  validate: {
    Parameters,
    TemplateBody,
    TemplateURL,
  },
  request: (params) => {
    const query = {
      Action: 'EstimateTemplateCost',
      Version,
      ...params,
    }
    const { Parameters, TemplateBody } = params
    if (Parameters) {
      delete query.Parameters
      Object.assign(query, querystringifyParams({ Parameters }))
    }
    if (TemplateBody && typeof TemplateBody === 'object') query.TemplateBody = JSON.stringify(TemplateBody)
    return { query }
  },
  response: ({ payload }) => payload.EstimateTemplateCostResult,
}

const ExecuteChangeSet = {
  awsDoc: docRoot + 'API_ExecuteChangeSet.html',
  validate: {
    ChangeSetName,
    ClientRequestToken,
    DisableRollback,
    RetainExceptOnCreate,
    StackName: { ...StackName, required: false },
  },
  request: (params) => {
    return {
      query: {
        Action: 'ExecuteChangeSet',
        Version,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const GetGeneratedTemplate = {
  awsDoc: docRoot + 'API_GetGeneratedTemplate.html',
  validate: {
    GeneratedTemplateName,
    Format: { ...str, comment: 'Specify a format for the response; can be one of: `JSON`, `YAML`' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'GetGeneratedTemplate',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetGeneratedTemplateResult,
}

const GetStackPolicy = {
  awsDoc: docRoot + 'API_GetStackPolicy.html',
  validate: {
    StackName,
  },
  request: (params) => {
    return {
      query: {
        Action: 'GetStackPolicy',
        Version,
        ...params,
      },
    }
  },
  // TODO: `StackPolicyBody` is a JSON returned as a string, maybe we should parse it?
  response: ({ payload }) => payload.GetStackPolicyResult,
}

const GetTemplate = {
  awsDoc: docRoot + 'API_GetTemplate.html',
  validate: {
    ChangeSetName: { ...ChangeSetName, required: false },
    StackName: { ...StackName, required: false },
    TemplateStage: { ...str, comment: 'Template stage; can be one of: `Original`, `Processed`' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'GetTemplate',
        Version,
        ...params,
      },
    }
  },
  // TODO: `TemplateBody` is a JSON returned as a string, maybe we should parse it?
  response: ({ payload }) => deSerializeObject(payload.GetTemplateResult),
}

const GetTemplateSummary = {
  awsDoc: docRoot + 'API_GetTemplateSummary.html',
  validate: {
    CallAs,
    StackName: { ...StackName, required: false },
    StackSetName: { ...StackSetName, required: false },
    TemplateBody,
    TemplateSummaryConfig: { ...obj, comment: 'Specify extra options', ref: docRoot + 'API_TemplateSummaryConfig.html' },
    TemplateURL,
  },
  request: (params) => {
    const query = {
      Action: 'GetTemplateSummary',
      Version,
      ...params,
    }
    const { TemplateBody } = params
    if (TemplateBody && typeof TemplateBody === 'object') query.TemplateBody = JSON.stringify(TemplateBody)
    return { query }
  },
  response: ({ payload }) => {
    const maxDepth = 2
    return deSerializeObject(payload.GetTemplateSummaryResult, maxDepth)
  },
}

const ImportStacksToStackSet = {
  awsDoc: docRoot + 'API_ImportStacksToStackSet.html',
  validate: {
    StackSetName,
    CallAs,
    OperationId: { ...OperationId, required: false },
    OperationPreferences,
    OrganizationalUnitIds: { ...arr, comment: 'List of organizational unit IDs to be mapped as the imported stacks deployment targets', ref: docRoot + 'API_ImportStacksToStackSet.html#API_ImportStacksToStackSet_RequestParameters' },
    StackIds: { ...arr, comment: 'Array of at most 10 stack IDs to be imported' },
    StackIdsUrl: { ...str, comment: 'S3 URL to a list of stack IDs to be imported' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'ImportStacksToStackSet',
        Version,
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.ImportStacksToStackSetResult,
}

const ListChangeSets = {
  awsDoc: docRoot + 'API_ListChangeSets.html',
  validate: {
    StackName,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListChangeSets',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListChangeSetsResult.NextToken',
        accumulator: 'ListChangeSetsResult.Summaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.ListChangeSetsResult),
}

const ListExports = {
  awsDoc: docRoot + 'API_ListExports.html',
  validate: {
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListExports',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListExportsResult.NextToken',
        accumulator: 'ListExportsResult.Exports.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.ListExportsResult),
}

const ListGeneratedTemplates = {
  awsDoc: docRoot + 'API_ListGeneratedTemplates.html',
  validate: {
    MaxResults,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListGeneratedTemplates',
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListGeneratedTemplatesResult.NextToken',
        accumulator: 'ListGeneratedTemplatesResult.Summaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.ListGeneratedTemplatesResult),
}

const ListImports = {
  awsDoc: docRoot + 'API_ListImports.html',
  validate: {
    ExportName: { ...str, required, comment: 'Name of the exported output value; results will be stacks that are importing this value' },
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListImports',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListImportsResult.NextToken',
        accumulator: 'ListImportsResult.Imports.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.ListImportsResult),
}

const ListResourceScanRelatedResources = {
  awsDoc: docRoot + 'API_ListResourceScanRelatedResources.html',
  validate: {
    ResourceScanId,
    Resources: { ...arr, required, comment: 'Array of `ScannedResourceIdentifier` objects', ref: docRoot + 'API_ListResourceScanRelatedResources.html#API_ListResourceScanRelatedResources_RequestParameters' },
    MaxResults,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListResourceScanRelatedResources',
      Version,
      ...params,
    }
    const { Resources, paginate } = params
    if (Resources) {
      delete query.Resources
      Object.assign(query, querystringifyResources({ Resources }))
    }
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListResourceScanRelatedResourcesResult.NextToken',
        accumulator: 'ListResourceScanRelatedResourcesResult.RelatedResources.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 1
    const result = deSerializeObject(payload.ListResourceScanRelatedResourcesResult, maxDepth)
    if (result.RelatedResources) result.RelatedResources = deSerializeResources(result.RelatedResources)
    return result
  },
}

const ListResourceScanResources = {
  awsDoc: docRoot + 'API_ListResourceScanResources.html',
  validate: {
    ResourceScanId,
    MaxResults,
    NextToken,
    ResourceIdentifier: { ...str, comment: 'Filter results by identifier' },
    ResourceTypePrefix: { ...str, comment: 'Filter results by prefix' },
    TagKey: { ...str, comment: 'Filter results by tag key' },
    TagValue: { ...str, comment: 'Filter results by tag value' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListResourceScanResources',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListResourceScanResourcesResult.NextToken',
        accumulator: 'ListResourceScanResourcesResult.Resources.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 1
    const result = deSerializeObject(payload.ListResourceScanResourcesResult, maxDepth)
    if (result.Resources) result.Resources = deSerializeResources(result.Resources)
    return result
  },
}

const ListResourceScans = {
  awsDoc: docRoot + 'API_ListResourceScans.html',
  validate: {
    MaxResults,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListResourceScans',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListResourceScansResult.NextToken',
        accumulator: 'ListResourceScansResult.ResourceScanSummaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.ListResourceScansResult),
}

// TODO: verify
const ListStackInstanceResourceDrifts = {
  awsDoc: docRoot + 'API_ListStackInstanceResourceDrifts.html',
  validate: {
    OperationId: { ...OperationId, required },
    StackInstanceAccount: { ...StackInstanceAccount, required },
    StackInstanceRegion: { ...StackInstanceRegion, required },
    StackSetName,
    CallAs,
    MaxResults,
    NextToken,
    StackInstanceResourceDriftStatuses: { ...arr, comment: 'Filter results by resource drift status; can contain; `DELETED`, `MODIFIED`, `IN_SYNC`, `NOT_CHECKED`' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListStackInstanceResourceDrifts',
      Version,
      ...querystringifyParams(params),
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListStackInstanceResourceDriftsResult.NextToken',
        // TODO: make sure this is correct, aws is missing XML response documentation
        accumulator: 'ListStackInstanceResourceDriftsResult.Summaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const maxDepth = 1
    return deSerializeObject(payload.ListStackInstanceResourceDriftsResult, maxDepth)
  },
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
      Version,
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
  response: ({ payload }) => deSerializeObject(payload.ListStackInstancesResult),
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
      Version,
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
  response: ({ payload }) => deSerializeObject(payload.ListStackResourcesResult),
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
      Version,
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
  response: ({ payload }) => deSerializeObject(payload.ListStacksResult),
}

const ListStackSetOperationResults = {
  awsDoc: docRoot + 'API_ListStackSetOperationResults.html',
  validate: {
    OperationId: { ...str, required, comment: 'ID of the stack set operation' },
    StackSetName,
    CallAs,
    Filters: { ...arr, comment: 'Array of filter objects', ref: docRoot + 'API_OperationResultFilter.html' },
    MaxResults,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListStackSetOperationResults',
      Version,
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
  response: ({ payload }) => deSerializeObject(payload.ListStackSetOperationResultsResult),
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
      Version,
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
    const maxDepth = 2
    return deSerializeObject(payload.ListStackSetOperationsResult, maxDepth)
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
      Version,
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
  response: ({ payload }) => deSerializeObject(payload.ListStackSetsResult),
}

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
      Version,
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
        accumulator: 'ListTypeRegistrationsResult.RegistrationTokenList.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.ListTypeRegistrationsResult),
}

const ListTypes = {
  awsDoc: docRoot + 'API_ListTypes.html',
  validate: {
    DeprecatedStatus,
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
      Version,
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
  response: ({ payload }) => deSerializeObject(payload.ListTypesResult),
}

const ListTypeVersions = {
  awsDoc: docRoot + 'API_ListTypeVersions.html',
  validate: {
    Arn,
    DeprecatedStatus,
    MaxResults,
    NextToken,
    PublisherId,
    Type,
    TypeName,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = {
      Action: 'ListTypeVersions',
      Version,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        cursor: 'NextToken',
        token: 'ListTypeVersionsResult.NextToken',
        accumulator: 'ListTypeVersionsResult.TypeVersionSummaries.member',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => deSerializeObject(payload.ListTypeVersionsResult),
}

// TODO: verify
const PublishType = {
  awsDoc: docRoot + 'API_PublishType.html',
  validate: {
    Arn,
    PublicVersionNumber: { ...str, comment: 'Version number; use the format `MAJOR.MINOR.PATCH`' },
    Type,
    TypeName,
  },
  request: (params) => {
    return {
      query: {
        Action: 'PublishType',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.PublishTypeResult,
}

const RegisterPublisher = {
  awsDoc: docRoot + 'API_RegisterPublisher.html',
  validate: {
    AcceptTermsAndConditions: { ...bool, comment: 'Set to true to agree to Amazons terms and conditions specified in the AWS documentation', ref: docRoot + 'API_RegisterPublisher.html#API_RegisterPublisher_RequestParameters' },
    ConnectionArn: { ...str, comment: 'ARN to a Bitbucket or Github account if they are used to verify identity' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'RegisterPublisher',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.RegisterPublisherResult,
}

// TODO: verify
const RegisterType = {
  awsDoc: docRoot + 'API_RegisterType.html',
  validate: {
    SchemaHandlerPackage: { ...str, required, comment: 'URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register' },
    TypeName: { ...TypeName, required },
    ClientRequestToken,
    ExecutionRoleArn,
    LoggingConfig,
    Type,
  },
  request: (params) => {
    return {
      query: {
        Action: 'RegisterType',
        Version,
        ...querystringifyParams(params),
      },
    }
  },
  response: ({ payload }) => payload.RegisterTypeResult,
}

const RollbackStack = {
  awsDoc: docRoot + 'API_RollbackStack.html',
  validate: {
    StackName,
    ClientRequestToken,
    RetainExceptOnCreate,
    RoleARN,
  },
  request: (params) => {
    return {
      query: {
        Action: 'RollbackStack',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.RollbackStackResult,
}

const SetStackPolicy = {
  awsDoc: docRoot + 'API_SetStackPolicy.html',
  validate: {
    StackName,
    StackPolicyBody,
    StackPolicyURL,
  },
  request: (params) => {
    const query = {
      Action: 'SetStackPolicy',
      Version,
      ...params,
    }
    const { StackPolicyBody } = params
    if (StackPolicyBody && typeof StackPolicyBody === 'object') query.StackPolicyBody = JSON.stringify(StackPolicyBody)
    return { query }
  },
  response: emptyResponse,
}

// TODO: verify
const SetTypeConfiguration = {
  awsDoc: docRoot + 'API_SetTypeConfiguration.html',
  validate: {
    Configuration: { type: [ 'string', 'object' ], required, comment: 'Configuration data; must be JSON or object', ref: docRoot + 'API_SetTypeConfiguration.html#API_SetTypeConfiguration_RequestParameters' },
    ConfigurationAlias: { ...str, comment: 'Alias for the configuration data' },
    Type,
    TypeArn: { ...str, comment: 'Extension ARN; public extension ARNs are assigned by calling `ActivateType`, private extension ARNs are assigned by calling `RegisterType`' },
    TypeName,
  },
  request: (params) => {
    const query = {
      Action: 'SetTypeConfiguration',
      Version,
      ...params,
    }
    if (typeof params.Configuration === 'object') query.Configuration = JSON.stringify(params.Configuration)
    return { query }
  },
  response: ({ payload }) => payload.SetTypeConfigurationResult,
}

const SetTypeDefaultVersion = {
  awsDoc: docRoot + 'API_SetTypeDefaultVersion.html',
  validate: {
    Arn,
    Type,
    TypeName,
    VersionId,
  },
  request: (params) => {
    return {
      query: {
        Action: 'SetTypeDefaultVersion',
        Version,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const SignalResource = {
  awsDoc: docRoot + 'API_SignalResource.html',
  validate: {
    LogicalResourceId: { ...LogicalResourceId, required },
    StackName,
    Status: { ...str, required, comment: 'Status of the signal; can be one of: `SUCCESS`, `FAILURE`' },
    UniqueId: { ...str, required, comment: 'User assigned ID for the signal; each signal ID must be unique' },
  },
  request: (params) => {
    return {
      query: {
        Action: 'SignalResource',
        Version,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const StartResourceScan = {
  awsDoc: docRoot + 'API_StartResourceScan.html',
  validate: {
    ClientRequestToken,
  },
  request: (params) => {
    return {
      query: {
        Action: 'StartResourceScan',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.StartResourceScanResult,
}

const StopStackSetOperation = {
  awsDoc: docRoot + 'API_StopStackSetOperation.html',
  validate: {
    OperationId: { ...OperationId, required },
    StackSetName,
    CallAs,
  },
  request: (params) => {
    return {
      query: {
        Action: 'StopStackSetOperation',
        Version,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const TestType = {
  awsDoc: docRoot + 'API_TestType.html',
  validate: {
    Arn,
    LogDeliveryBucket: { ...str, comment: 'S3 bucket where execution logs will be saved; user must have `GetObject` and `PutObject` permissions on the S3 bucket' },
    Type,
    TypeName,
    VersionId,
  },
  request: (params) => {
    return {
      query: {
        Action: 'TestType',
        Version,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.TestTypeResult,
}

const UpdateGeneratedTemplate = {
  awsDoc: docRoot + 'API_UpdateGeneratedTemplate.html',
  validate: {
    GeneratedTemplateName,
    AddResources: { ...arr, comment: 'Array of `ResourceDefinition` objects to add to the template', ref: docRoot + 'API_UpdateGeneratedTemplate.html#API_UpdateGeneratedTemplate_RequestParameters' },
    NewGeneratedTemplateName: { ...str, comment: 'New name to assign the generated template' },
    RefreshAllResources: { ...bool, comment: 'Set to true to update resource properties to their current live state', ref: docRoot + 'API_UpdateGeneratedTemplate.html#API_UpdateGeneratedTemplate_RequestParameters' },
    RemoveResources: { ...arr, comment: 'Array of logical resource IDs to remove resources from the template' },
    TemplateConfiguration: { ...obj, comment: 'New template configuration', ref: docRoot + 'API_TemplateConfiguration.html' },
  },
  request: (params) => {
    const query = {
      Action: 'UpdateGeneratedTemplate',
    }
    const temp = { ...params }
    const { AddResources } = params
    if (AddResources) {
      delete temp.AddResources
      Object.assign(temp, querystringifyResources({ AddResources }))
    }
    Object.assign(query, querystringifyParams(temp))
    return { query }
  },
  response: ({ payload }) => payload.UpdateGeneratedTemplateResult,
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
    Regions,
    StackSetName,
    Accounts,
    CallAs,
    DeploymentTargets,
    OperationId,
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

// TODO: verify
const UpdateStackSet = {
  awsDoc: docRoot + 'API_UpdateStackSet.html',
  validate: {
    StackSetName,
    Accounts,
    AdministrationRoleARN,
    AutoDeployment,
    CallAs,
    Capabilities,
    DeploymentTargets,
    Description,
    ExecutionRoleName,
    ManagedExecution,
    OperationId: { ...OperationId, required: false },
    OperationPreferences,
    Parameters,
    PermissionModel,
    Regions: { ...Regions, required: false },
    Tags,
    TemplateBody,
    TemplateURL,
    UsePreviousTemplate,
  },
  request: (params) => {
    const query = {
      Action: 'UpdateStackSet',
      Version,
    }
    const temp = { ...params }
    const { TemplateBody } = params
    if (TemplateBody && typeof TemplateBody === 'object') temp.TemplateBody = JSON.stringify(TemplateBody)
    Object.assign(query, querystringifyParams(temp))
    return { query }
  },
  response: ({ payload }) => payload.UpdateStackSetResult,
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
        ...params,
      }),
    }
  },
  response: ({ payload }) => ({ StackId: payload.UpdateTerminationProtectionResult.StackId }),
}

const ValidateTemplate = {
  awsDoc: docRoot + 'API_ValidateTemplate.html',
  validate: {
    TemplateBody,
    TemplateURL,
  },
  request: (params) => {
    const query = {
      Action: 'ValidateTemplate',
      Version,
      ...params,
    }
    const { TemplateBody } = params
    if (TemplateBody && typeof TemplateBody === 'object') query.TemplateBody = JSON.stringify(TemplateBody)
    return { query }
  },
  response: ({ payload }) => deSerializeObject(payload.ValidateTemplateResult),
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
    CreateGeneratedTemplate,
    CreateStack,
    CreateStackInstances,
    CreateStackSet,
    DeactivateOrganizationsAccess,
    DeleteChangeSet,
    DeactivateType,
    DeleteGeneratedTemplate,
    DeleteStack,
    DeleteStackInstances,
    DeleteStackSet,
    DeregisterType,
    DescribeAccountLimits,
    DescribeChangeSet,
    DescribeChangeSetHooks,
    DescribeGeneratedTemplate,
    DescribeOrganizationsAccess,
    DescribePublisher,
    DescribeResourceScan,
    DescribeStackDriftDetectionStatus,
    DescribeStackEvents,
    DescribeStackInstance,
    DescribeStackResource,
    DescribeStackResourceDrifts,
    DescribeStackResources,
    DescribeStacks,
    DescribeStackSet,
    DescribeStackSetOperation,
    DescribeType,
    DescribeTypeRegistration,
    DetectStackDrift,
    DetectStackResourceDrift,
    DetectStackSetDrift,
    EstimateTemplateCost,
    GetGeneratedTemplate,
    GetStackPolicy,
    GetTemplate,
    GetTemplateSummary,
    ExecuteChangeSet,
    ImportStacksToStackSet,
    ListChangeSets,
    ListExports,
    ListGeneratedTemplates,
    ListImports,
    ListResourceScanRelatedResources,
    ListResourceScanResources,
    ListResourceScans,
    ListStackInstanceResourceDrifts,
    ListStackInstances,
    ListStackResources,
    ListStacks,
    ListStackSetOperationResults,
    ListStackSetOperations,
    ListStackSets,
    ListTypeRegistrations,
    ListTypes,
    ListTypeVersions,
    PublishType,
    RegisterPublisher,
    RegisterType,
    RollbackStack,
    SetStackPolicy,
    SetTypeConfiguration,
    SetTypeDefaultVersion,
    SignalResource,
    StartResourceScan,
    StopStackSetOperation,
    TestType,
    UpdateGeneratedTemplate,
    UpdateStack,
    UpdateStackInstances,
    UpdateStackSet,
    UpdateTerminationProtection,
    ValidateTemplate,
    ...incomplete,
  },
}
