const service = 'execute-api'
const property = 'ApiGatewayManagementApi'
// const required = true
const disabled = true
const awsDoc = 'https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html'

// const str = { type: 'string' }

/**
 * Plugin maintained by: @architect
 */

const PostToConnection = { awsDoc, disabled }
const DeleteConnection = { awsDoc, disabled }
const GetConnection = { awsDoc, disabled }

export default {
  service,
  property,
  methods: {
    PostToConnection,
    DeleteConnection,
    GetConnection,
  }
}
