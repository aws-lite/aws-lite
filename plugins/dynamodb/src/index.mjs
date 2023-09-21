const service = 'dynamodb'
const required = true

// Common params to be AWS-flavored JSON-encoded
const awsjsonReq = [ 'ExpressionAttributeValues', 'Item', 'Key', ]
// ... and decoded
const awsjsonRes = [ 'Item' ]

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }

// Common validation  params
const TableName = { ...str, required }
const Key = { ...obj, required }
const Item = { ...obj, required }
const ReturnConsumedCapacity = str
const ReturnItemCollectionMetrics = str


const unmarshall = keys => async response => ({ awsjson: keys, response })
const headers = (method, additional) => ({ 'X-Amz-Target': `DynamoDB_20120810.${method}`, ...additional })
const awsjsonContentType = { 'content-type': 'application/x-amz-json-1.0' }

/**
 * Plugin maintained by: @architect
 */

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html
const BatchExecuteStatement = {
  validate: {
    Statements: { ...arr, required },
    ReturnConsumedCapacity,
  },
  request: async (params, { awsjsonMarshall }) => {
    // Huzzah, nested arrays with different kinds of serialization
    let Statements = params.Statements?.map(s => {
      let Parameters = s?.Parameters?.map(awsjsonMarshall)
      return {  ...s, Parameters }
    })
    return {
      awsjson: false, // Don't re-serialize to AWS-flavored JSON
      headers: headers('BatchExecuteStatement', awsjsonContentType), // Undocumented as of author time
      payload: { ...params, Statements }
    }
  },
  response: async (response, { awsjsonUnmarshall }) => {
    if (response?.Responses?.length) {
      response.Responses = response.Responses.map(r => {
        if (r?.Error?.Item) r.Error.Item = awsjsonUnmarshall(r.Error.Item)
        if (r?.Item) r.Item = awsjsonUnmarshall(r.Item)
        return r
      })
    }
    return { response }
  },
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
const BatchGetItem = {
  validate: {
    RequestItems: { ...obj, required },
    ReturnConsumedCapacity,
  },
  request: async (params, { awsjsonMarshall }) => {
    let RequestItems = {}
    Object.entries(params.RequestItems).forEach(([ table, item ]) => {
      RequestItems[table] = item
      RequestItems[table].Keys = item?.Keys?.map(awsjsonMarshall)
    })
    return {
      awsjson: false, // Don't re-serialize to AWS-flavored JSON
      headers: headers('BatchGetItem', awsjsonContentType),
      payload: { ...params, RequestItems }
    }
  },
  response: async (response, { awsjsonUnmarshall }) => {
    let Responses = Object.keys(response.Responses)
    if (Responses.length) {
      Responses.forEach(i => response.Responses[i] = response.Responses[i]?.map(awsjsonUnmarshall))
    }
    let UnprocessedKeys = Object.keys(response.UnprocessedKeys)
    if (UnprocessedKeys.length) {
      UnprocessedKeys.forEach(i => response.UnprocessedKeys[i] = {
        ...response.UnprocessedKeys[i],
        Keys: response.UnprocessedKeys[i]?.Keys?.map(awsjsonUnmarshall)
      })
    }
    return { response }
  },
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
const BatchWriteItem = {
  validate: {
    RequestItems: { ...obj, required },
    ReturnConsumedCapacity,
    ReturnItemCollectionMetrics,
  },
  request: async (params, { awsjsonMarshall }) => {
    let RequestItems = {}
    Object.entries(params.RequestItems).forEach(([ table, items ]) => {
      RequestItems[table] = items.map(i => {
        let request = {}
        Object.entries(i).forEach(([ op, data ]) => {
          if (op === 'DeleteRequest') {
            request[op] = { Key: awsjsonMarshall(data.Key) }
          }
          if (op === 'PutRequest') {
            request[op] = { Item: awsjsonMarshall(data.Item) }
          }
        })
        return request
      })
    })
    return {
      awsjson: false, // Don't re-serialize to AWS-flavored JSON
      headers: headers('BatchWriteItem', awsjsonContentType),
      payload: { ...params, RequestItems }
    }
  },
  response: async (response, { awsjsonUnmarshall }) => {
    let UnprocessedItems = {}
    Object.entries(response.UnprocessedItems).forEach(([ table, items ]) => {
      UnprocessedItems[table] = items.map(i => {
        let request = {}
        Object.entries(i).forEach(([ op, data ]) => {
          if (op === 'DeleteRequest') {
            request[op] = { Key: awsjsonUnmarshall(data.Key) }
          }
          if (op === 'PutRequest') {
            request[op] = { Item: awsjsonUnmarshall(data.Item) }
          }
        })
        return request
      })
    })
    return { response: { ...response, UnprocessedItems } }
  }
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
const CreateBackup = {
  validate: {
    TableName,
    BackupName: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('CreateBackup'), // Undocumented as of author time
    payload: params,
  }),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
const CreateGlobalTable = {
  validate: {
    GlobalTableName: TableName,
    ReplicationGroup: { ...arr, required },
  },
  request: async (params) => ({
    headers: headers('CreateGlobalTable'), // Undocumented as of author time
    payload: params,
  }),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
const CreateTable = {
  validate: {
    TableName,
    AttributeDefinitions: { ...arr, required },
    KeySchema: { ...arr, required },
    BillingMode: str,
    DeletionProtectionEnabled: bool,
    GlobalSecondaryIndexes: arr,
    LocalSecondaryIndexes: arr,
    ProvisionedThroughput: obj,
    SSESpecification: obj,
    StreamSpecification: obj,
    TableClass: str,
    Tags: arr,
  },
  request: async (params) => ({
    headers: headers('CreateTable'),
    payload: params,
  }),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
const DeleteBackup = {
  validate: {
    BackupArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DeleteBackup'),
    payload: params,
  }),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
const DeleteItem = {
  validate: {
    TableName,
    Key,
    ConditionalOperator: str,
    ConditionExpression: str,
    Expected: obj, // Legacy, we're not automatically serializing to AWS-flavored JSON
    ExpressionAttributeNames: obj,
    ExpressionAttributeValues: obj,
    ReturnConsumedCapacity,
    ReturnItemCollectionMetrics,
    ReturnValues: str,
    ReturnValuesOnConditionCheckFailure: str,
  },
  request: async (params) => ({
    awsjson: awsjsonReq,
    headers: headers('DeleteItem'),
    payload: params,
  }),
  response: async (response, { awsjsonUnmarshall }) => {
    if (response?.Attributes) response.Attributes = awsjsonUnmarshall(response.Attributes)
    return { response }
  },
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
const DeleteTable = {
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DeleteTable'),
    payload: params,
  }),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
const DescribeBackup = {
  validate: {
    BackupArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DescribeBackup'),
    payload: params,
  }),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
const DescribeContinuousBackups = {
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DescribeContinuousBackups'),
    payload: params,
  }),
}

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
const DescribeContributorInsights = {
  validate: {
    TableName,
    IndexName: str,
  },
  request: async (params) => ({
    headers: headers('DescribeContributorInsights'),
    payload: params,
  }),
}

// TODO:

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html
// DescribeEndpoints

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html
// DescribeExport

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
// DescribeGlobalTable

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
// DescribeGlobalTableSettings

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html
// DescribeImport

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html
// DescribeKinesisStreamingDestination

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
// DescribeLimits

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
// DescribeTable

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
// DescribeTableReplicaAutoScaling

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
// DescribeTimeToLive

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html
// DisableKinesisStreamingDestination

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html
// EnableKinesisStreamingDestination

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
// ExecuteStatement

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html
// ExecuteTransaction

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html
// ExportTableToPointInTime

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
const GetItem = {
  validate: {
    TableName,
    Key,
    AttributesToGet: arr, // Legacy
    ConsistentRead: bool,
    ExpressionAttributeNames: obj,
    ProjectionExpression: str,
    ReturnConsumedCapacity,
  },
  request: async (params) => ({
    awsjson: awsjsonReq,
    headers: headers('GetItem'),
    payload: params,
  }),
  response: unmarshall(awsjsonRes),
}

// TODO:
// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html
// ImportTable

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
// ListBackups

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html
// ListContributorInsights

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html
// ListExports

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html
// ListGlobalTables

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html
// ListImports

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
// ListTables

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html
// ListTagsOfResource

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
const PutItem = {
  validate: {
    TableName,
    Item,
    ConditionalOperator: str, // Legacy
    ConditionExpression: str,
    Expected: str, // Legacy, we're not automatically serializing to AWS-flavored JSON
    ExpressionAttributeNames: obj,
    ExpressionAttributeValues: obj,
    ReturnConsumedCapacity,
    ReturnItemCollectionMetrics,
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

// TODO:
// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
// Query

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
// RestoreTableFromBackup

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
// RestoreTableToPointInTime

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
// Scan

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
// TagResource

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html
// TransactGetItems

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html
// TransactWriteItems

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
// UntagResource

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
// UpdateContinuousBackups

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
// UpdateContributorInsights

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
// UpdateGlobalTable

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
// UpdateGlobalTableSettings

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
// UpdateItem

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
// UpdateTable

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
// UpdateTableReplicaAutoScaling

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
// UpdateTimeToLive

const methods = { BatchExecuteStatement, BatchGetItem, BatchWriteItem, CreateBackup, DeleteItem, DeleteTable, CreateGlobalTable, CreateTable, DeleteBackup, DescribeBackup, DescribeContinuousBackups, DescribeContributorInsights, GetItem, PutItem }
export default { service, methods }
