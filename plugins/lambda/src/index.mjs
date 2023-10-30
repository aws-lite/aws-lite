import incomplete from './incomplete.mjs'

const service = 'lambda'
const property = 'Lambda'
const required = true
const docRoot = 'https://docs.aws.amazon.com/lambda/latest/dg/'

const arr = { type: 'array' }
const obj = { type: 'object' }
const num = { type: 'number' }
const str = { type: 'string' }

const FunctionName = { ...str, required, comment: 'The name of the Lambda function, version, or alias' }
const Qualifier = { ...str, comment: 'Specify a version or alias to invoke a published version of the function' }

/**
 * Plugin maintained by: @architect
 */

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
      endpoint: `/2015-03-31/functions/${FunctionName}/configuration`,
      query,
    }
  },
  response: async ({ payload }) => payload
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
      endpoint: `/2015-03-31/functions/${FunctionName}/invocations`,
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

const UpdateFunctionConfiguration = {
  awsDoc: docRoot + 'API_UpdateFunctionConfiguration.html',
  validate: {
    FunctionName,
    DeadLetterConfig: { ...obj, comment: `Dead-letter queue configuration; [see AWS docs](${docRoot}API_DeadLetterConfig.html)` },
    Description: { ...str, comment: 'Description of the function' },
    Environment: { ...obj, comment: `Environment variable configuration; [see AWS docs](${docRoot}API_Environment.html` },
    EphemeralStorage: { ...obj, comment: `Size of the function \`/tmp\` directory (in MB), from 512 (default) to 10240; [see AWS docs](${docRoot}API_EphemeralStorage.html` },
    FileSystemConfigs: { ...arr, comment: `EFS file system connection settings; [see AWS docs](${docRoot}API_FileSystemConfig.html)` },
    Handler: { ...str, comment: `The name of the handler file and method method within your code that Lambda calls to run your function (e.g. \`index.handler\`); [see AWS docs](${docRoot}foundation-progmodel.html)` },
    ImageConfig: { ...obj, comment: `Container image configuration (overrides Docker file); [see AWS docs](${docRoot}API_ImageConfig.html)` },
    KMSKeyArn: { ...str, comment: 'ARN of the Key Management Service (KMS) customer managed key used to encrypt your function environment variables' },
    Layers: { ...arr, comment: 'List of function layer ARNs (including version) to add to the function execution environment' },
    MemorySize: { ...num, comment: 'Amount of memory available (in MB) at runtime from 128 to 10240; increasing memory also increases CPU allocation' },
    RevisionId: { ...str, comment: 'Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it' },
    Role: { ...str, comment: `ARN of the function's execution role` },
    Runtime: { ...str, comment: `Runtime identifier; [see AWS docs](${docRoot}lambda-runtimes.html)` },
    SnapStart: { ...obj, comment: `SnapStart settings; [see AWS docs](${docRoot}API_SnapStart.html)` },
    Timeout: { ...num, comment: 'Time (in seconds) a function is allowed to run before being stopped, from 3 (default) to 900' },
    TracingConfig: { ...obj, comment: `Sample and trace a subset of incoming requests with X-Ray; [see AWS docs](${docRoot}API_TracingConfig.html)` },
    VpcConfig: { ...obj, comment: `VPC networking configuration; [see AWS docs](${docRoot}API_VpcConfig.html)` },
  },
  request: async function (params) {
    const { FunctionName } = params
    return {
      endpoint: `/2015-03-31/functions/${FunctionName}/configuration`,
      method: 'PUT',
      payload: params,
    }
  },
  response: async ({ payload }) => payload
}

export default {
  service,
  property,
  methods: {
    GetFunctionConfiguration,
    Invoke,
    UpdateFunctionConfiguration,
    ...incomplete,
  }
}
