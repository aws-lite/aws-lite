/**
 * Plugin maintained by: @architect
 */

const service = 'execute-api'
const property = 'ApiGatewayManagementApi'
const required = true
const awsDoc = 'https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html'

const str = { type: 'string' }

const commonValidations = {
  ConnectionId: { ...str, required, comment: 'WebSocket connection ID' },
  ApiUrl: { ...str, comment: 'Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`' },
  ApiId: { ...str, comment: 'API Gateway ID' },
  Stage: { ...str, comment: 'API Gateway stage; example: `$default`' },
}

function getHostAndEndpoint (params, region) {
  let { ApiUrl, ApiId, ConnectionId, Stage } = params
  let host, port, protocol, path
  if (ApiUrl) {
    protocol = ApiUrl.startsWith('http:') || ApiUrl.startsWith('ws:') ? 'http' : 'https'
    let url = ApiUrl.replace(/^(wss|http|https):\/\//, '')
    let bits = url.split('/')
    if (bits.length < 2) throw ReferenceError('Invalid ApiUrl param, expected WebSocket API host and endpoint path')
    host = bits[0]
    if (host.includes(':')) {
      port = host.split(':')[1]
      host = host.split(':')[0]
    }
    path = `/${bits.slice(1).join('/')}/@connections/${ConnectionId}`
  }
  else if (ApiId && Stage) {
    host = `${ApiId}.execute-api.${region}.amazonaws.com`
    path = `/${Stage}/@connections/${ConnectionId}`
  }
  else throw ReferenceError('Cannot derive WebSocket API URL + stage, please pass ApiUrl param, or ApiId + Stage params')

  path = path.split('/').map(escape).join('/')
  return { host, path, port, protocol }
}

const response = ({ payload }) => {
  if (!payload) return payload
  let res = payload
  // CamelCaseify per https://github.com/aws/aws-sdk-js/blob/master/apis/apigatewaymanagementapi-2018-11-29.normal.json
  let mutations = [ 'connectedAt', 'identity', 'lastActiveAt' ]
  mutations.forEach(m => {
    if (res[m]) {
      res[m[0].toUpperCase() + m.substring(1)] = res[m]
      delete res[m]
    }
  })
  return res
}

function defaultError ({ statusCode, headers, error }) {
  if (headers['x-amzn-errortype']) {
    if (!error) error = {}
    error.name = error.code = headers['x-amzn-errortype']
  }
  return { statusCode, error }
}

const PostToConnection = {
  awsDoc,
  validate: {
    ...commonValidations,
    Data: { type: [ 'string', 'object' ], comment: 'Data to send to WebSocket client' },
  },
  request: (params, { config }) => {
    let { Data } = params
    return {
      payload: Data,
      ...getHostAndEndpoint(params, config.region),
    }
  },
  response,
  error: defaultError,
}

const DeleteConnection = {
  awsDoc,
  validate: commonValidations,
  request: (params, { config }) => ({
    method: 'DELETE',
    ...getHostAndEndpoint(params, config.region),
  }),
  response,
  error: defaultError,
}

const GetConnection = {
  awsDoc,
  validate: commonValidations,
  request: (params, { config }) => getHostAndEndpoint(params, config.region),
  response,
  error: defaultError,
}

export default {
  name: '@aws-lite/apigatewaymanagementapi',
  service,
  property,
  methods: {
    PostToConnection,
    DeleteConnection,
    GetConnection,
  },
}
