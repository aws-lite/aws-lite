import incomplete from './incomplete.mjs'

const service = 'ssm'
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

/**
 * Plugin maintained by: @architect
 */
export default {
  service,
  methods: {
    GetParametersByPath: {
      awsDoc: 'https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath',
      validate: {
        Path:             { type: 'string', required, comment: 'Parameter path hierarchy, beginning with `/`' },
        MaxResults:       { type: 'number', comment: 'Limit the maximum number of items returned' },
        NextToken:        { type: 'string', comment: 'Pagination token to start the next set of results' },
        ParameterFilters: { type: 'array', comment: 'Array of filters to limit results' },
        Recursive:        { type: 'boolean', comment: 'Retrieve all parameters within a hierarchy' },
        WithDecryption:   { type: 'boolean', comment: 'Decrypt encrypted parameter values' },
        paginate:         { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
      },
      request: defaultRequest('GetParametersByPath', {
        paginator: { cursor: 'NextToken', token: 'NextToken', accumulator: 'Parameters' }
      }),
      response: defaultResponse,
    },
    ...incomplete,
  }
}
