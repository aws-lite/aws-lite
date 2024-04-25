/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'ssm'
const property = 'SSM'
const required = true
const docRoot = 'https://docs.aws.amazon.com/systems-manager/latest/APIReference/'

const defaultRequest = (method, more = {}) => (payload) => {
  let params = { awsjson: false, headers: headers(method), payload, ...more }
  if (payload.paginate) {
    delete params.payload.paginate
    params.paginate = true
  }
  return params
}
const headers = (method, additional) => ({
  'X-Amz-Target': `AmazonSSM.${method}`,
  'content-type': 'application/x-amz-json-1.1',
  ...additional,
})
const defaultResponse = ({ payload }) => payload

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
// const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

// Reused validation params
const Name = { ...str, required, comment: 'The name of the parameter' }
const WithDecryption = { ...bool, comment: 'Decrypt encrypted parameter values' }

const DeleteParameter = {
  awsDoc: docRoot + 'API_DeleteParameter',
  validate: {
    Name,
  },
  request: defaultRequest('DeleteParameter'),
  response: defaultResponse,
}

const DeleteParameters = {
  awsDoc: docRoot + 'API_DeleteParameters',
  validate: {
    Names: { ...arr, required, comment: 'Array of parameter names to delete' },
  },
  request: defaultRequest('DeleteParameters'),
  response: defaultResponse,
}

const GetParameter = {
  awsDoc: docRoot + 'API_GetParameter.html',
  validate: {
    Name,
    WithDecryption,
  },
  request: defaultRequest('GetParameter'),
  response: defaultResponse,
}

const GetParameters = {
  awsDoc: docRoot + 'API_GetParameters.html',
  validate: {
    Names: { ...arr, required, comment: 'Array of parameter names to query' },
    WithDecryption,
  },
  request: defaultRequest('GetParameters'),
  response: defaultResponse,
}

const GetParametersByPath = {
  awsDoc: docRoot + 'API_GetParametersByPath',
  validate: {
    Path:             { ...str, required, comment: 'Parameter path hierarchy, beginning with `/`' },
    MaxResults:       { ...num, comment: 'Limit the maximum number of items returned' },
    NextToken:        { ...str, comment: 'Pagination token to start the next set of results' },
    ParameterFilters: { ...arr, comment: 'Array of filters to limit results' },
    Recursive:        { ...bool, comment: 'Retrieve all parameters within a hierarchy' },
    WithDecryption,
    paginate:         { ...bool, comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' },
  },
  request: defaultRequest('GetParametersByPath', {
    paginator: { cursor: 'NextToken', token: 'NextToken', accumulator: 'Parameters' },
  }),
  response: defaultResponse,
}

const PutParameter = {
  awsDoc: docRoot + 'API_PutParameter',
  validate: {
    Name: { ...Name, comment: 'The name of the parameter, including the complete path hierarchy' },
    Value: { ...str, required, comment: 'Value of the parameter; can be up to 4KB by default, or 8KB if Advanced' },
    AllowedPattern: { ...str, comment: 'Regular expression used to validate the parameter value' },
    DataType: { ...str, comment: 'Data type for a `String` parameter; can be one of: `text`, `aws:ec2:image`, `aws:ssm:integration`' },
    Description: { ...str, comment: 'Description of the parameter' },
    KeyId: { ...str, comment: 'AWS KMS ID to use to encrypt the parameter' },
    Overwrite: { ...bool, comment: 'Overwrite an existing parameter (defaults to `false`)' },
    Policies: { ...arr, comment: 'Array of policies to apply; supports `Expiration`, `ExpirationNotification`, `NoChangeNotification`', ref: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html' },
    Tags: { ...arr, comment: 'Array of tags, such as `Key=OS,Value=macOS`', ref: docRoot + 'API_Tag.html' },
    Tier: { ...str, comment: 'Parameter tier; can be one of: `Standard`, `Advanced`, `Intelligent-Tiering`', ref: docRoot + 'API_PutParameter.html#systemsmanager-PutParameter-request-Tier' },
    Type: { ...str, comment: 'Parameter type; can be one of: `String`, `StringList`,`SecureString`' },
  },
  request: (params) => {
    if (params.Policies) params.Policies = JSON.stringify(params.Policies)
    return defaultRequest('PutParameter')(params)
  },
  response: defaultResponse,
}

export default {
  name: '@aws-lite/ssm',
  service,
  property,
  methods: {
    DeleteParameter,
    DeleteParameters,
    GetParameter,
    GetParameters,
    GetParametersByPath,
    PutParameter,
    ...incomplete,
  },
}
