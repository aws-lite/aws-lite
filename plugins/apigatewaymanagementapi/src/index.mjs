const service = 'execute-api'
const property = 'ApiGatewayManagementApi'
const required = true
const awsDoc = 'https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html'

const str = { type: 'string' }

const commonValidations = {
  ApiUrl: { ...str, comment: 'Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`' },
  ApiId: { ...str, comment: 'API Gateway ID' },
  Stage: { ...str, comment: 'API Gateway stage; example: `$default`)' },
  ConnectionId: { ...str, required, comment: 'WebSocket connection ID' },
}

function getHostAndEndpoint (params, region) {
  let { ApiUrl, ApiId, ConnectionId, Stage } = params
  let host, stage
  if (ApiUrl) {
    let url = ApiUrl.replace('wss://', '')
    let bits = url.split('/')
    if (bits.length !== 2) throw ReferenceError('Invalid ApiUrl param, expected WebSocket API URL + stage only')
    host = bits[0]
    stage = bits[1]
  }
  else if (ApiId && Stage) {
    host = `${ApiId}.execute-api.${region}.amazonaws.com`
    stage = Stage
  }
  else throw ReferenceError('Cannot derive WebSocket API URL + stage, please pass ApiUrl param, or ApiId + Stage params')
  if (!stage) throw ReferenceError('Stage not specified')

  let endpoint = `${escape(stage)}/${escape('@connections')}/${escape(ConnectionId)}`
  return { host, endpoint }
}

const response = ({ payload }) => payload

/**
 * Plugin maintained by: @architect
 */

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
}

const DeleteConnection = {
  awsDoc,
  validate: commonValidations,
  request: (params, { config }) => ({
    method: 'DELETE',
    ...getHostAndEndpoint(params, config.region),
  }),
  response,
}

const GetConnection = {
  awsDoc,
  validate: commonValidations,
  request: (params, { config }) => getHostAndEndpoint(params, config.region),
  response,
}

export default {
  service,
  property,
  methods: {
    PostToConnection,
    DeleteConnection,
    GetConnection,
  }
}
