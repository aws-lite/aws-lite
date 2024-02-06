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
const Handler = { ...str, comment: 'The name of the handler file and method method within your code that Lambda calls to run your function (e.g. `index.handler`)', ref: docRoot + 'foundation-progmodel.html' }
const ImageConfig = { ...obj, comment: 'Container image configuration (overrides Docker file)', ref: docRoot + 'API_ImageConfig.html' }
const KMSKeyArn = { ...str, comment: 'ARN of the Key Management Service (KMS) customer managed key used to encrypt your function environment variables' }
const Layers = { ...arr, comment: 'List of function layer ARNs (including version) to add to the function execution environment' }
const MemorySize = { ...num, comment: 'Amount of memory available (in MB) at runtime from 128 to 10240; increasing memory also increases CPU allocation' }
const Qualifier = { ...str, comment: 'Specify a version or alias to invoke a published version of the function' }
const RevisionId = { ...str, comment: 'Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it' }
const Role = { ...str, comment: `ARN of the function's execution role` }
const Runtime = { ...str, comment: 'Runtime identifier', ref: docRoot + 'lambda-runtimes.html' }
const SnapStart = { ...obj, comment: 'SnapStart settings', ref: docRoot + 'API_SnapStart.html' }
const Timeout = { ...num, comment: 'Time (in seconds) a function is allowed to run before being stopped, from 3 (default) to 900' }
const TracingConfig = { ...obj, comment: 'Sample and trace a subset of incoming requests with X-Ray', ref: docRoot + 'API_TracingConfig.html' }
const VpcConfig = { ...obj, comment: 'VPC networking configuration', ref: docRoot + 'API_VpcConfig.html' }

const defaultResponse = ({ payload }) => payload

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
  }
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
  response: () => ({}),
}

const GetFunctionConfiguration = {
  awsDoc: docRoot + 'API_GetFunctionConfiguration.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: async (params) => {
    const { FunctionName, Qualifier } = params
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}/configuration`,
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
  }
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
  response: defaultResponse
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
    ZipFile: { type: [ 'string', 'buffer' ], comment: 'File path or raw buffer of the .zip deployment package' }
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
  response: defaultResponse
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
    CreateFunction,
    DeleteFunctionConcurrency,
    GetFunctionConfiguration,
    Invoke,
    PutFunctionConcurrency,
    UpdateFunctionCode,
    UpdateFunctionConfiguration,
    ...incomplete,
  }
}
