/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'ssm'
const property = 'SSM'
const required = true
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
  ...additional
})
const defaultResponse = ({ payload }) => payload

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
// const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

// Reused validation params
const WithDecryption = { ...bool, comment: 'Decrypt encrypted parameter values' }

const GetParameter = {
  awsDoc: 'https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html',
  validate: {
    Name: { ...str, required, comment: 'The name of the parameter to query' },
    WithDecryption,
  },
  request: defaultRequest('GetParameter'),
  response: defaultResponse,
}

const GetParameters = {
  awsDoc: 'https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html',
  validate: {
    Names: { ...arr, required, comment: 'Array of parameter names to query' },
    WithDecryption,
  },
  request: defaultRequest('GetParameters'),
  response: defaultResponse,
}

const GetParametersByPath = {
  awsDoc: 'https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath',
  validate: {
    Path:             { ...str, required, comment: 'Parameter path hierarchy, beginning with `/`' },
    MaxResults:       { ...num, comment: 'Limit the maximum number of items returned' },
    NextToken:        { ...str, comment: 'Pagination token to start the next set of results' },
    ParameterFilters: { ...arr, comment: 'Array of filters to limit results' },
    Recursive:        { ...bool, comment: 'Retrieve all parameters within a hierarchy' },
    WithDecryption,
    paginate:         { ...bool, comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
  },
  request: defaultRequest('GetParametersByPath', {
    paginator: { cursor: 'NextToken', token: 'NextToken', accumulator: 'Parameters' }
  }),
  response: defaultResponse,
}

export default {
  service,
  property,
  methods: {
    GetParameter,
    GetParameters,
    GetParametersByPath,
    ...incomplete,
  }
}
