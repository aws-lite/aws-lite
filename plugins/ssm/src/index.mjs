import incomplete from './incomplete.mjs'

const service = 'ssm'
const required = true
const defaultRequest = method => (payload) => ({ awsjson: false, headers: headers(method), payload })
const defaultResponse = ({ payload }) => payload
const headers = (method, additional) => ({ 'X-Amz-Target': `AmazonSSM.${method}`, 'content-type': 'application/x-amz-json-1.1', ...additional })

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
        Recursive:        { type: 'boolean', comment: 'Retrieve all parameters within a heirarchy' },
        WithDecryption:   { type: 'boolean', comment: 'Decrypt encrypted parameter values' },
      },
      request: defaultRequest('GetParametersByPath'),
      response: defaultResponse,
    },
    ...incomplete,
  }
}
