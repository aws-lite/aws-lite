/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'lambda'
const property = 'Lambda'
const required = true
const docRoot = 'https://docs.aws.amazon.com/lambda/latest/dg/'

const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const num = { type: 'number' }
const str = { type: 'string' }

const Architectures = { ...arr, comment: 'System architecture, array can contain either `x86_64` (default) or `arm64`' }
const DeadLetterConfig = { ...obj, comment: 'Dead-letter queue configuration', ref: docRoot + 'API_DeadLetterConfig.html' }
const Description = { ...str, comment: 'Description of the function' }
const Environment = { ...obj, comment: 'Environment variable configuration', ref: docRoot + 'API_Environment.html' }
const EphemeralStorage = { ...obj, comment: 'Size of the function `/tmp` directory (in MB), from 512 (default) to 10240', ref: docRoot + 'API_EphemeralStorage.html' }
const FileSystemConfigs = { ...arr, comment: 'EFS file system connection settings', ref: docRoot + 'API_FileSystemConfig.html' }
const FunctionName = { ...str, required, comment: 'The name of the Lambda function, version, or alias' }
const FunctionVersion = { ...str, comment: 'Version of the aliased function' }
const Handler = { ...str, comment: 'The name of the handler file and method method within your code that Lambda calls to run your function (e.g. `index.handler`)', ref: docRoot + 'foundation-progmodel.html' }
const ImageConfig = { ...obj, comment: 'Container image configuration (overrides Docker file)', ref: docRoot + 'API_ImageConfig.html' }
const KMSKeyArn = { ...str, comment: 'ARN of the Key Management Service (KMS) customer managed key used to encrypt your function environment variables' }
const LayerName = { ...str, required, comment: 'Name or ARN of the layer' }
const Layers = { ...arr, comment: 'List of function layer ARNs (including version) to add to the function execution environment' }
const MemorySize = { ...num, comment: 'Amount of memory available (in MB) at runtime from 128 to 10240; increasing memory also increases CPU allocation' }
const Qualifier = { ...str, comment: 'Specify a version or alias to invoke a published version of the function' }
const RevisionId = { ...str, comment: 'Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it' }
const Role = { ...str, comment: `ARN of the function's execution role` }
const RoutingConfig = { ...obj, comment: 'Configure function version weights', ref: docRoot + 'configuration-aliases.html#configuring-alias-routing' }
const Runtime = { ...str, comment: 'Runtime identifier', ref: docRoot + 'lambda-runtimes.html' }
const SnapStart = { ...obj, comment: 'SnapStart settings', ref: docRoot + 'API_SnapStart.html' }
const Timeout = { ...num, comment: 'Time (in seconds) a function is allowed to run before being stopped, from 3 (default) to 900' }
const TracingConfig = { ...obj, comment: 'Sample and trace a subset of incoming requests with X-Ray', ref: docRoot + 'API_TracingConfig.html' }
const VersionNumber = { ...num, required, comment: 'The version number of the layer' }
const VpcConfig = { ...obj, comment: 'VPC networking configuration', ref: docRoot + 'API_VpcConfig.html' }

const defaultResponse = ({ payload }) => payload
const emptyResponse = () => { }

const AddLayerVersionPermission = {
  awsDoc: docRoot + 'API_AddLayerVersionPermission.html',
  validate: {
    LayerName,
    RevisionId,
    VersionNumber,
    Action: { ...str, required, comment: 'The API action that grants access to the layer, for example `lambda:GetLayerVersion`' },
    OrganizationId: { ...str, comment: 'When `Principal` is set to `*`, permission will be granted to all accounts in the specified organization' },
    Principal: { ...str, comment: 'Account ID being granted permissions. Use `*` along with the `OrganizationId` to grant permissions to all accounts in the specified organization' },
    StatementId: { ...str, required, comment: 'ID to distinguish the policy from other policies on the same layer version' },
  },
  request: async (params) => {
    const { LayerName, RevisionId, VersionNumber } = params
    let payload = { ...params }
    let query
    delete payload.LayerName
    delete payload.VersionNumber

    if (RevisionId) {
      query = { RevisionId }
      delete params.RevisionId
    }

    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}/policy`,
      query,
      payload,
    }
  },
}

const AddPermission = {
  awsDoc: docRoot + 'API_AddPermission.html',
  validate: {
    FunctionName,
    Qualifier,
    Action: { ...str, required, comment: 'Action that the principal can use on the function; for example, `lambda:InvokeFunction`' },
    EventSourceToken: { ...str, comment: 'A token that Alexa Smart Home requires from the invoker' },
    FunctionUrlAuthType: { ...str, comment: 'The type of authentication that your function URL uses. Set to AWS_IAM if you want to restrict access to authenticated users only. Set to NONE if you want to bypass IAM authentication to create a public endpoint' },
    Principal: { ...str, required, comment: 'The AWS service or AWS account that invokes the function' },
    PrincipalOrgID: { ...str, comment: 'The identifier for your organization in AWS Organizations' },
    RevisionId,
    SourceAccount: { ...str, comment: 'ID of the AWS account that owns the resource' },
    SourceArn: { ...str, comment: 'ARN of the AWS resource that invokes the function, such as an Amazon S3 bucket' },
    StatementId: { ...str, required, comment: 'A statement identifier that differentiates the statement from others in the same policy' },
  },
  request: async (params) => {
    const { FunctionName, Qualifier } = params
    let payload = { ...params }
    let query
    delete payload.FunctionName
    delete payload.Qualifier

    if (Qualifier) {
      query = { Qualifier }
      delete payload.Qualifier
    }

    return {
      path: `/2015-03-31/functions/${FunctionName}/policy`,
      query,
      payload,
    }
  },
  response: defaultResponse,
}

const CreateAlias = {
  awsDoc: docRoot + 'API_CreateAlias.html',
  validate: {
    FunctionName,
    Description,
    FunctionVersion: { ...FunctionVersion, required },
    Name: { ...str, required, comment: 'Name of the alias' }, //
    RoutingConfig,
  },
  request: async (params) => {
    const { FunctionName } = params
    let payload = { ...params }
    delete payload.FunctionName

    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases`,
      payload,
    }
  },
  response: defaultResponse,
}

const CreateCodeSigningConfig = {
  awsDoc: docRoot + 'API_CreateCodeSigningConfig.html',
  validate: {
    AllowedPublishers: { ...obj, required, comment: 'Signing profiles for this code signing configuration', ref: 'https://docs.aws.amazon.com/lambda/latest/api/API_AllowedPublishers.html' },
    CodeSigningPolicies: { ...obj, comment: 'Define actions to take if validation checks fail', ref: 'https://docs.aws.amazon.com/lambda/latest/api/API_CodeSigningPolicies.html' },
    Description,
  },
  request: async (payload) => {
    return {
      path: '/2020-04-22/code-signing-configs/',
      payload,
    }
  },
  response: defaultResponse,
}

const CreateEventSourceMapping = {
  awsDoc: docRoot + 'API_CreateEventSourceMapping.html',
  validate: {
    FunctionName,
    AmazonManagedKafkaEventSourceConfig: { ...obj, comment: 'Configuration settings for an Amazon Managed Streaming for Apache Kafka event source' },
    BatchSize: { ...num, comment: 'Maximum number of records from 1 to 10000 in each batch that Lambda pulls from the stream or queue', ref:  docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-BatchSize' },
    BisectBatchOnFunctionError: { ...bool, comment: 'If the function returns an error, divide the batch and try again (only for Kinesis and DynamoDB streams)' },
    DestinationConfig: { ...obj, comment: 'Specify the destination of an event after being processed by Lambda', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-DestinationConfig' },
    DocumentDBEventSourceConfig: { ...obj, comment: 'Configuration for a `DocumentDB` event source', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-DocumentDBEventSourceConfig' },
    Enabled: { ...bool, comment: 'Set to `false` to disable event source upon creation' },
    EventSourceArn: { ...str, comment: 'ARN of the event source' },
    FilterCriteria: { ...obj, comment: 'Define an input filter for events', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-FilterCriteria' },
    FunctionResponseTypes: { ...arr, comment: 'A list of at most 1 string defining the current response type enum applied to the event source mapping; For Kinesis, DynamoDB Streams, and Amazon SQS', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-FunctionResponseTypes' },
    MaximumBatchingWindowInSeconds: { ...num, comment: 'Maximum time (in seconds) from 0 to 300 that Lambda may spend gathering records before invoking the function', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-MaximumBatchingWindowInSeconds' },
    MaximumRecordAgeInSeconds: { ...num, comment: 'Maximum age from -1 (infinite, default) to 604800 of an event before it will be discarded; only for `Kinesis` and `DynamoDB` streams' },
    MaximumRetryAttempts: { ...num, comment: 'Maximum number of tries from -1 (infinite, default) to 10000 before a record is discarded; `Kinesis` and `DynamoDB` only ' },
    ParallelizationFactor: { ...num, comment: 'Number of batches from 1 to 10 that can be processed from each shard concurrently' },
    Queues: { ...arr, comment: 'Array of exactly 1 string specifying the name of the `Amazon MQ` broker destination queue to consume' },
    ScalingConfig: { ...obj, comment: 'Configure scaling for the event source; Amazon SQS only', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-ScalingConfig' },
    SelfManagedEventSource: { ...obj, comment: 'A self managed `Apache Kafka` cluster to receive records from', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-SelfManagedEventSource' },
    SelfManagedKafkaEventSourceConfig: { ...obj, comment: 'Configure a self managed `Apache Kafka` event source', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-SelfManagedEventSource' },
    SourceAccessConfigurations: { ...arr, comment: 'Array of at most 22 `SourceAccessConfiguration` objects to specifying authentication protocols or VPC components required to secure the event source', ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-SourceAccessConfigurations' },
    StartingPosition: { ...str, comment: 'Position in a stream to begin reading, valid entries are `TRIM_HORIZON` (all available messages), `LATEST` (from now or after) or `AT_TIMESTAMP` (specify timestamp)', ref: docRoot +  'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-StartingPosition' },
    StartingPositionTimestamp: { ...obj, comment: 'The `timestamp` in `Unix time seconds` used when `StartingPosition` is set to `AT_TIMESTAMP`; cannot be in the future' },
    Topics: { ...arr, comment: 'Array of exactly 1 string specifying the name of the `Kafka` topic' },
    TumblingWindowInSeconds: { ...num, comment: 'Time (in seconds) from 0 to 900 specifying the duration of a processing window for `DynamoDB` and `Kinesis` event stream sources' },
  },
  request: (params) => {
    return {
      path: '/2015-03-31/event-source-mappings/',
      payload: params,
    }
  },
  response: defaultResponse,
}

const CreateFunction = {
  awsDoc: docRoot + 'API_CreateFunction.html',
  validate: {
    Code: { ...obj, required, comment: 'Code payload to be run in Lambda; object can contain: `ImageUri` (ECR image), `S3Bucket` + `S3Key` + `S3ObjectVersion` (S3 bucket in the same region, key, and optional version), or `ZipFile` (base64-encoded zip)', ref: docRoot + 'API_FunctionCode.html' },
    FunctionName,
    Role: { ...Role, required },
    Architectures,
    CodeSigningConfigArn: { ...str, comment: 'ARN of a code-signing configuration used to enable code signing for this function' },
    DeadLetterConfig,
    Description,
    Environment,
    EphemeralStorage,
    FileSystemConfigs,
    Handler,
    ImageConfig,
    KMSKeyArn,
    Layers,
    MemorySize,
    PackageType: { ...str, comment: 'Deployment package type, either `Image` (container image) or `Zip` (zip archive)' },
    Publish: { ...bool, comment: 'Set to `true` to publish the first version of the function during creation' },
    Runtime,
    SnapStart,
    Tags: { ...arr, comment: 'List of tags to apply to the function' },
    Timeout,
    TracingConfig,
    VpcConfig,

  },
  request: async (payload) => {
    return {
      path: '/2015-03-31/functions',
      payload,
    }
  },
  response: defaultResponse,
}

const DeleteAlias = {
  awsDoc: docRoot + 'API_DeleteAlias.html',
  validate: {
    FunctionName,
    Name: { ...str, required, comment: 'Name of the alias' },
  },
  request: ({ FunctionName, Name }) => {
    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases/${Name}`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteCodeSigningConfig = {
  awsDoc: docRoot + 'API_DeleteCodeSigningConfig.html',
  validate: {
    CodeSigningConfigArn: { ...str, required, comment: 'ARN of the code signing configuration' },
  },
  request: ({ CodeSigningConfigArn }) => {
    return {
      path: `/2020-04-22/code-signing-configs/${CodeSigningConfigArn}`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteEventSourceMapping = {
  awsDoc: docRoot + 'API_DeleteEventSourceMapping.html',
  validate: {
    UUID: { ...str, required, comment: 'UUID of the event source mapping' },
  },
  request: ({ UUID }) => {
    return {
      path: `/2015-03-31/event-source-mappings/${UUID}`,
      method: 'DELETE',
    }
  },
  response: defaultResponse,
}

const DeleteFunction = {
  awsDoc: docRoot + 'API_DeleteFunction.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}`,
      query,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteFunctionConcurrency = {
  awsDoc: docRoot + 'API_DeleteFunctionConcurrency.html',
  validate: {
    FunctionName,
  },
  request: ({ FunctionName }) => {
    return {
      path: `/2017-10-31/functions/${FunctionName}/concurrency`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const GetAccountSettings = {
  awsDoc: docRoot + 'API_GetAccountSettings.html',
  validate: {},
  request: () => {
    return {
      path: '/2016-08-19/account-settings/',
    }
  },
  response: defaultResponse,
}

const GetAlias = {
  awsDoc: docRoot + 'API_GetAlias.html',
  validate: {
    FunctionName,
    Name: { ...str, required, comment: 'Name of the function alias' },
  },
  request: ({ FunctionName, Name }) => {
    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases/${Name}`,
    }
  },
  response: defaultResponse,
}

const GetCodeSigningConfig = {
  awsDoc: docRoot + 'API_GetCodeSigningConfig.html',
  validate: {
    CodeSigningConfigArn: { ...str, required, comment: 'ARN of the code signing configuration' },
  },
  request: ({ CodeSigningConfigArn }) => {
    return {
      path: `/2020-04-22/code-signing-configs/${CodeSigningConfigArn}`,
    }
  },
  response: defaultResponse,
}

const GetEventSourceMapping = {
  awsDoc: docRoot + 'API_GetEventSourceMapping.html',
  validate: {
    UUID: { ...str, required, comment: 'ARN of the event source mapping' },
  },
  request: ({ UUID }) => {
    return {
      path: `/2015-03-31/event-source-mappings/${UUID}`,
    }
  },
  response: defaultResponse,
}

const GetFunction = {
  awsDoc: docRoot + 'API_GetFunction.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}`,
      query,
    }
  },
  response: defaultResponse,
}

const GetFunctionConcurrency = {
  awsDoc: docRoot + 'API_GetFunctionConcurrency.html',
  validate: {
    FunctionName,
  },
  request: ({ FunctionName }) => {
    return {
      path: `/2019-09-30/functions/${FunctionName}/concurrency`,
    }
  },
  response: defaultResponse,
}

const GetFunctionEventInvokeConfig = {
  awsDoc: docRoot + 'API_GetFunctionEventInvokeConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2019-09-25/functions/${FunctionName}/event-invoke-config`,
      query,
    }
  },
  response: defaultResponse,
}

const GetFunctionCodeSigningConfig = {
  awsDoc: docRoot + 'API_GetFunctionCodeSigningConfig.html',
  validate: {
    FunctionName,
  },
  request: ({ FunctionName }) => {
    return {
      path: `/2020-06-30/functions/${FunctionName}/code-signing-config`,
    }
  },
  response: defaultResponse,
}

const GetFunctionConfiguration = {
  awsDoc: docRoot + 'API_GetFunctionConfiguration.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}/configuration`,
      query,
    }
  },
  response: defaultResponse,
}

const GetFunctionUrlConfig = {
  awsDoc: docRoot + 'API_GetFunctionUrlConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2021-10-31/functions/${FunctionName}/url`,
      query,
    }
  },
  response: defaultResponse,
}

const GetLayerVersion = {
  awsDoc: docRoot + 'API_GetLayerVersion.html',
  validate: {
    LayerName,
    VersionNumber,
  },
  request: ({ LayerName, VersionNumber }) => {
    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}`,
    }
  },
  response: defaultResponse,
}

const GetLayerVersionByArn = {
  awsDoc: docRoot + 'API_GetLayerVersionByArn.html',
  validate: {
    Arn: { ...str, required, comment: 'The ARN of the layer version' },
  },
  request: ({ Arn }) => {
    let query = {
      find: 'LayerVersion',
      Arn,
    }
    return {
      path: `/2018-10-31/layers`,
      query,
    }
  },
  response: defaultResponse,
}

const GetLayerVersionPolicy = {
  awsDoc: docRoot + 'API_GetLayerVersionPolicy.html',
  validate: {
    LayerName,
    VersionNumber,
  },
  request: ({ LayerName, VersionNumber }) => {
    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}/policy`,
    }
  },
  response: defaultResponse,
}

const GetPolicy = {
  awsDoc: docRoot + 'API_GetPolicy.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}/policy`,
      query,
    }
  },
  response: defaultResponse,
}

const GetProvisionedConcurrencyConfig = {
  awsDoc: docRoot + 'API_GetProvisionedConcurrencyConfig.html',
  validate: {
    FunctionName,
    Qualifier: { ...str, required, comment: 'The version number or alias name' },
  },
  request: ({ FunctionName, Qualifier }) => {
    let query = { Qualifier }
    return {
      path: `/2019-09-30/functions/${FunctionName}/provisioned-concurrency`,
      query,
    }
  },
  response: defaultResponse,
}

const GetRuntimeManagementConfig = {
  awsDoc: docRoot + 'API_GetRuntimeManagementConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2021-07-20/functions/${FunctionName}/runtime-management-config`,
      query,
    }
  },
  response: defaultResponse,
}

const Invoke = {
  awsDoc: docRoot + 'API_Invoke.html',
  validate: {
    FunctionName,
    InvocationType: { ...str, comment: 'Set invocation type to one of: `RequestResponse` (default, synchronous), `Event` (asynchronous), `DryRun` (validate invoke request only)' },
    Payload: { type: [ 'array', 'object' ], required, comment: 'Event payload to invoke function with' },
    LogType: { ...str, comment: 'Set to `Tail` to include the execution log in the `X-Amz-Log-Result` response header of synchronously invoked functions' },
    ClientContext: { ...str, comment: 'Up to 3,583 bytes of base64-encoded data to pass to the function in the context object' },
    Qualifier,
  },
  request: async function (params) {
    const { FunctionName, InvocationType, Payload: payload, LogType, ClientContext, Qualifier } = params

    const headers = {}
    if (InvocationType) headers['X-Amz-Invocation-Type'] = InvocationType
    if (LogType) headers['X-Amz-Log-Type'] = LogType
    if (ClientContext) headers['X-Amz-Client-Context'] = ClientContext

    let query
    if (Qualifier) query = { Qualifier }

    return {
      path: `/2015-03-31/functions/${FunctionName}/invocations`,
      headers,
      query,
      payload,
    }
  },
  response: async ({ headers, payload: Payload, statusCode: StatusCode }) => {
    const result = { Payload, StatusCode }
    const log = headers['x-amz-log-result'] || headers['X-Amz-Log-Result']
    const FunctionError = headers['x-amz-function-error'] || headers['X-Amz-Function-Error']
    const ExecutedVersion = headers['x-amz-executed-version'] || headers['x-amz-function-error']
    if (log) result.LogResult = Buffer.from(log, 'base64').toString()
    if (FunctionError) result.FunctionError = FunctionError
    if (ExecutedVersion) result.ExecutedVersion = ExecutedVersion
    return result
  },
}

const PutFunctionConcurrency = {
  awsDoc: docRoot + 'API_PutFunctionConcurrency.html',
  validate: {
    FunctionName,
    ReservedConcurrentExecutions: { ...num, required, comment: 'number of simultaneous executions to reserve' },
  },
  request: (params) => {
    const { FunctionName, ReservedConcurrentExecutions } = params
    return {
      path: `/2017-10-31/functions/${FunctionName}/concurrency`,
      method: 'PUT',
      payload: { ReservedConcurrentExecutions },
    }
  },
  response: defaultResponse,
}

const UpdateAlias = {
  awsDoc: docRoot + 'API_UpdateAlias.html',
  validate: {
    FunctionName,
    Name: { ...str, required, comment: 'Name of the alias' },
    Description,
    FunctionVersion,
    RevisionId,
    RoutingConfig,
  },
  request: async (params) => {
    const { FunctionName, Name } = params
    let payload = { ...params }
    delete payload.FunctionName
    delete payload.Name

    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases/${Name}`,
      method: 'PUT',
      payload,
    }
  },
  response: defaultResponse,
}

const UpdateFunctionCode = {
  awsDoc: docRoot + 'API_UpdateFunctionCode.html',
  validate: {
    FunctionName,
    Architectures,
    DryRun: { ...str, comment: 'Validate the request parameters and access permissions without modifying the function code (`true`)' },
    ImageUri: { ...str, comment: 'URI of a container image in the Amazon ECR registry (if not using a .zip file)' },
    Publish: { ...bool, comment: 'Publish a new version after after updating the code (`true`); effectively the same as calling `PublishVersion`' },
    RevisionId,
    S3Bucket: { ...str, comment: 'S3 bucket containing the key of the deployment package; must be in the same region' },
    S3Key: { ...str, comment: 'S3 key of the deployment package (must be a .zip file)' },
    S3ObjectVersion: { ...str, comment: 'S3 object version to use, if applicable' },
    ZipFile: { type: [ 'string', 'buffer' ], comment: 'File path or raw buffer of the .zip deployment package' },
  },
  request: async (params) => {
    let { FunctionName, ZipFile } = params
    if (typeof ZipFile === 'string') {
      const { readFile } = await import('node:fs/promises')
      ZipFile = await readFile(ZipFile)
    }
    if (ZipFile instanceof Buffer) {
      params.ZipFile = Buffer.from(ZipFile).toString('base64')
    }
    let payload = { ...params }
    delete payload.FunctionName

    return {
      path: `/2015-03-31/functions/${FunctionName}/code`,
      method: 'PUT',
      payload,
    }
  },
  response: defaultResponse,
}

const UpdateFunctionConfiguration = {
  awsDoc: docRoot + 'API_UpdateFunctionConfiguration.html',
  validate: {
    FunctionName,
    DeadLetterConfig,
    Description,
    Environment,
    EphemeralStorage,
    FileSystemConfigs,
    Handler,
    ImageConfig,
    KMSKeyArn,
    Layers,
    MemorySize,
    RevisionId,
    Role,
    Runtime,
    SnapStart,
    Timeout,
    TracingConfig,
    VpcConfig,
  },
  request: async function (params) {
    const { FunctionName } = params
    return {
      path: `/2015-03-31/functions/${FunctionName}/configuration`,
      method: 'PUT',
      payload: params,
    }
  },
  response: defaultResponse,
}

export default {
  name: '@aws-lite/lambda',
  service,
  property,
  methods: {
    AddLayerVersionPermission,
    AddPermission,
    CreateAlias,
    CreateCodeSigningConfig,
    CreateEventSourceMapping,
    CreateFunction,
    DeleteAlias,
    DeleteCodeSigningConfig,
    DeleteEventSourceMapping,
    DeleteFunction,
    DeleteFunctionConcurrency,
    GetAccountSettings,
    GetAlias,
    GetCodeSigningConfig,
    GetEventSourceMapping,
    GetFunction,
    GetFunctionCodeSigningConfig,
    GetFunctionConcurrency,
    GetFunctionConfiguration,
    GetFunctionEventInvokeConfig,
    GetFunctionUrlConfig,
    GetLayerVersion,
    GetLayerVersionByArn,
    GetLayerVersionPolicy,
    GetPolicy,
    GetProvisionedConcurrencyConfig,
    GetRuntimeManagementConfig,
    Invoke,
    PutFunctionConcurrency,
    UpdateAlias,
    UpdateFunctionCode,
    UpdateFunctionConfiguration,
    ...incomplete,
  },
}
