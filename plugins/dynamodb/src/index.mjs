const service = 'dynamodb'
const required = true

// Common params to be AWS-flavored JSON-encoded
const awsjsonReq = [ 'Expected', 'ExpressionAttributeValues', 'Item', 'Key', ]
// ... and decoded
const awsjsonRes = [ 'Item' ]

// Common validation  params
const TableName = { type: 'string', required }
const Key = { type: 'object', required }
const Item = { type: 'object', required }

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }

const unmarshall = keys => async response => ({ awsjson: keys, response })
const headers = method => ({ 'X-Amz-Target': `DynamoDB_20120810.${method}` })

/**
 * Plugin maintained by: @architect
 */

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
const GetItem = {
  validate: {
    TableName,
    Key,
    AttributesToGet: arr, // Legacy
    ConsistentRead: bool,
    ExpressionAttributeNames: obj,
    ProjectionExpression: str,
    ReturnConsumedCapacity: str,
  },
  request: async (params) => ({
    awsjson: awsjsonReq,
    headers: headers('GetItem'),
    payload: params,
  }),
  response: unmarshall(awsjsonRes),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
const PutItem = {
  validate: {
    TableName,
    Item,
    ConditionalOperator: str, // Legacy
    ConditionExpression: str,
    Expected: str, // Legacy
    ExpressionAttributeNames: obj,
    ExpressionAttributeValues: obj,
    ReturnConsumedCapacity: str,
    ReturnItemCollectionMetrics: str,
    ReturnValues: str,
    ReturnValuesOnConditionCheckFailure: str,
  },
  request: async (params) => ({
    awsjson: awsjsonReq,
    headers: headers('PutItem'),
    payload: params,
  }),
  response: unmarshall([ 'Attributes', ]),
}

const methods = { GetItem, PutItem }
export default { service, methods }
