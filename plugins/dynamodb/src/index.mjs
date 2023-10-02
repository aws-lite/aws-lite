const service = 'dynamodb'
const required = true
const docRoot = 'https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/'

// Common params to be AWS-flavored JSON-encoded
const awsjsonReq = [ 'ExclusiveStartKey', 'ExpressionAttributeValues', 'Item', 'Key', ]
// ... and decoded
const awsjsonRes = [ 'Attributes', 'Item' ]

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

// Common validation  params
const TableName = { ...str, required }
const Key = { ...obj, required }
const Item = { ...obj, required }
const ReturnConsumedCapacity = str
const ReturnItemCollectionMetrics = str

const defaultResponse = ({ payload }) => payload
const unmarshall = keys => ({ payload }) => ({ awsjson: keys, ...payload })
const headers = (method, additional) => ({ 'X-Amz-Target': `DynamoDB_20120810.${method}`, ...additional })
const awsjsonContentType = { 'content-type': 'application/x-amz-json-1.0' }

/**
 * Plugin maintained by: @architect
 */

const BatchExecuteStatement = {
  awsDoc: docRoot + 'API_BatchExecuteStatement.html',
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
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (payload?.Responses?.length) {
      payload.Responses = payload.Responses.map(r => {
        if (r?.Error?.Item) r.Error.Item = awsjsonUnmarshall(r.Error.Item)
        if (r?.Item) r.Item = awsjsonUnmarshall(r.Item)
        return r
      })
    }
    return payload
  },
}

const BatchGetItem = {
  awsDoc: docRoot + 'API_BatchGetItem.html',
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
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    let Responses = Object.keys(payload.Responses)
    if (Responses.length) {
      Responses.forEach(i => payload.Responses[i] = payload.Responses[i]?.map(awsjsonUnmarshall))
    }
    let UnprocessedKeys = Object.keys(payload.UnprocessedKeys)
    if (UnprocessedKeys.length) {
      UnprocessedKeys.forEach(i => payload.UnprocessedKeys[i] = {
        ...payload.UnprocessedKeys[i],
        Keys: payload.UnprocessedKeys[i]?.Keys?.map(awsjsonUnmarshall)
      })
    }
    return payload
  },
}

const BatchWriteItem = {
  awsDoc: docRoot + 'API_BatchWriteItem.html',
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
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    let UnprocessedItems = {}
    Object.entries(payload.UnprocessedItems).forEach(([ table, items ]) => {
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
    return { ...payload, UnprocessedItems }
  }
}

const CreateBackup = {
  awsDoc: docRoot + 'API_CreateBackup.html',
  validate: {
    TableName,
    BackupName: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('CreateBackup'), // Undocumented as of author time
    payload: params,
  }),
  response: defaultResponse,
}

const CreateGlobalTable = {
  awsDoc: docRoot + 'API_CreateGlobalTable.html',
  validate: {
    GlobalTableName: TableName,
    ReplicationGroup: { ...arr, required },
  },
  request: async (params) => ({
    headers: headers('CreateGlobalTable'), // Undocumented as of author time
    payload: params,
  }),
  response: defaultResponse,
}

const CreateTable = {
  awsDoc: docRoot + 'API_CreateTable.html',
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
  response: defaultResponse,
}

const DeleteBackup = {
  awsDoc: docRoot + 'API_DeleteBackup.html',
  validate: {
    BackupArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DeleteBackup'),
    payload: params,
  }),
  response: defaultResponse,
}

const DeleteItem = {
  awsDoc: docRoot + 'API_DeleteItem.html',
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
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (payload?.Attributes) payload.Attributes = awsjsonUnmarshall(payload.Attributes)
    return payload
  },
}

const DeleteTable = {
  awsDoc: docRoot + 'API_DeleteTable.html',
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DeleteTable'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeBackup = {
  awsDoc: docRoot + 'API_DescribeBackup.html',
  validate: {
    BackupArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DescribeBackup'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeContinuousBackups = {
  awsDoc: docRoot + 'API_DescribeContinuousBackups.html',
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DescribeContinuousBackups'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeContributorInsights = {
  awsDoc: docRoot + 'API_DescribeContributorInsights.html',
  validate: {
    TableName,
    IndexName: str,
  },
  request: async (params) => ({
    headers: headers('DescribeContributorInsights'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeEndpoints = {
  awsDoc: docRoot + 'API_DescribeEndpoints.html',
  request: async () => ({
    headers: headers('DescribeEndpoints'),
  }),
  response: defaultResponse,
}

const DescribeExport = {
  awsDoc: docRoot + 'API_DescribeExport.html',
  validate: {
    ExportArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DescribeExport'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeGlobalTable = {
  awsDoc: docRoot + 'API_DescribeGlobalTable.html',
  validate: {
    GlobalTableName: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DescribeGlobalTable'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeGlobalTableSettings = {
  awsDoc: docRoot + 'API_DescribeGlobalTableSettings.html',
  validate: {
    GlobalTableName: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DescribeGlobalTableSettings'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeImport = {
  awsDoc: docRoot + 'API_DescribeImport.html',
  validate: {
    ImportArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DescribeImport'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeKinesisStreamingDestination = {
  awsDoc: docRoot + 'API_DescribeKinesisStreamingDestination.html',
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DescribeKinesisStreamingDestination'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeLimits = {
  awsDoc: docRoot + 'API_DescribeLimits.html',
  request: async () => ({
    headers: headers('DescribeLimits'),
  }),
  response: defaultResponse,
}

const DescribeTable = {
  awsDoc: docRoot + 'API_DescribeTable.html',
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DescribeTable'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeTableReplicaAutoScaling = {
  awsDoc: docRoot + 'API_DescribeTableReplicaAutoScaling.html',
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DescribeTableReplicaAutoScaling'),
    payload: params,
  }),
  response: defaultResponse,
}

const DescribeTimeToLive = {
  awsDoc: docRoot + 'API_DescribeTimeToLive.html',
  validate: {
    TableName,
  },
  request: async (params) => ({
    headers: headers('DescribeTimeToLive'),
    payload: params,
  }),
  response: defaultResponse,
}

const DisableKinesisStreamingDestination = {
  awsDoc: docRoot + 'API_DisableKinesisStreamingDestination.html',
  validate: {
    TableName,
    StreamArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('DisableKinesisStreamingDestination'),
    payload: params,
  }),
  response: defaultResponse,
}

const EnableKinesisStreamingDestination = {
  awsDoc: docRoot + 'API_EnableKinesisStreamingDestination.html',
  validate: {
    TableName,
    StreamArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('EnableKinesisStreamingDestination'),
    payload: params,
  }),
  response: defaultResponse,
}

const ExecuteStatement = {
  awsDoc: docRoot + 'API_ExecuteStatement.html',
  validate: {
    TableName,
    Statement: { ...str, required },
    ConsistentRead: bool,
    Limit: num,
    NextToken: str,
    Parameters: obj,
    ReturnConsumedCapacity,
    ReturnValuesOnConditionCheckFailure: str,
  },
  request: async (params, { awsjsonMarshall }) => {
    if (params.Parameters) params.Parameters = params.Parameters.map(awsjsonMarshall)
    return {
      headers: headers('ExecuteStatement'),
      payload: params,
    }
  },
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (payload?.Items?.length) {
      payload.Items = payload.Items.map(awsjsonUnmarshall)
    }
    payload.awsjson = [ 'LastEvaluatedKey' ]
    return payload
  },
}

const ExecuteTransaction = {
  awsDoc: docRoot + 'API_ExecuteTransaction.html',
  validate: {
    TableName,
    TransactStatements: { ...arr, required },
    ClientRequestToken: str,
    ReturnConsumedCapacity,
  },
  request: async (params, { awsjsonMarshall }) => {
    if (params.TransactStatements){
      params.TransactStatements = params.TransactStatements.map(i => {
        if (i.Parameters) i.Parameters = i.Parameters.map(awsjsonMarshall)
        return i
      })
    }
    return {
      headers: headers('ExecuteTransaction'),
      payload: params,
    }
  },
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (payload?.Responses?.length) {
      payload.Responses = payload.Responses.map(i => {
        i.Item = awsjsonUnmarshall(i.Item)
        return i
      })
    }
    return payload
  },
}

const ExportTableToPointInTime = {
  awsDoc: docRoot + 'API_ExportTableToPointInTime.html',
  validate: {
    S3Bucket: { ...str, required },
    TableArn: { ...str, required },
    ClientToken: str,
    ExportFormat: str,
    ExportTime: num,
    S3BucketOwner: str,
    S3Prefix: str,
    S3SseAlgorithm: str,
    S3SseKmsKeyId: str,
  },
  request: async (params) => ({
    headers: headers('ExportTableToPointInTime'),
    payload: params,
  }),
  response: defaultResponse,
}

const GetItem = {
  awsDoc: docRoot + 'API_GetItem.html',
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

const ImportTable = {
  awsDoc: docRoot + 'API_ImportTable.html',
  validate: {
    InputFormat: { ...str, required },
    S3BucketSource: { ...obj, required },
    TableCreationParameters: { ...obj, required },
    ClientToken: str,
    InputCompressionType: str,
    InputFormatOptions: obj,
  },
  request: async (params) => ({
    headers: headers('ImportTable'),
    payload: params,
  }),
  response: defaultResponse,
}

const ListBackups = {
  awsDoc: docRoot + 'API_ListBackups.html',
  validate: {
    BackupType: str,
    ExclusiveStartBackupArn: str,
    Limit: num,
    TableName: str,
    TimeRangeLowerBound: num,
    TimeRangeUpperBound: num,
  },
  request: async (params) => ({
    headers: headers('ListBackups'),
    payload: params,
  }),
  response: defaultResponse,
}

const ListContributorInsights = {
  awsDoc: docRoot + 'API_ListContributorInsights.html',
  validate: {
    MaxResults: num,
    NextToken: str,
    TableName: str,
  },
  request: async (params) => ({
    headers: headers('ListContributorInsights'),
    payload: params,
  }),
  response: defaultResponse,
}

const ListExports = {
  awsDoc: docRoot + 'API_ListExports.html',
  validate: {
    MaxResults: num,
    NextToken: str,
    TableArn: str,
  },
  request: async (params) => ({
    headers: headers('ListExports'),
    payload: params,
  }),
  response: defaultResponse,
}

const ListGlobalTables = {
  awsDoc: docRoot + 'API_ListGlobalTables.html',
  validate: {
    ExclusiveStartGlobalTableName: str,
    Limit: num,
    RegionName: str,
  },
  request: async (params) => ({
    headers: headers('ListGlobalTables'),
    payload: params,
  }),
  response: defaultResponse,
}

const ListImports = {
  awsDoc: docRoot + 'API_ListImports.html',
  validate: {
    NextToken: str,
    PageSize: num,
    TableArn: str,
  },
  request: async (params) => ({
    headers: headers('ListImports'),
    payload: params,
  }),
  response: defaultResponse,
}

const ListTables = {
  awsDoc: docRoot + 'API_ListTables.html',
  validate: {
    ExclusiveStartTableName: str,
    Limit: num,
  },
  request: async (params) => ({
    headers: headers('ListTables'),
    payload: params,
  }),
  response: defaultResponse,
}

const ListTagsOfResource = {
  awsDoc: docRoot + 'API_ListTagsOfResource.html',
  validate: {
    NextToken: str,
    ResourceArn: { ...str, required },
  },
  request: async (params) => ({
    headers: headers('ListTagsOfResource'),
    payload: params,
  }),
  response: defaultResponse,
}

const PutItem = {
  awsDoc: docRoot + 'API_PutItem.html',
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

const Query = {
  awsDoc: docRoot + 'API_Query.html',
  validate: {
    TableName,
    AttributesToGet: arr,
    ConditionalOperator: str,
    ConsistentRead: bool,
    ExclusiveStartKey: obj,
    ExpressionAttributeNames: obj,
    ExpressionAttributeValues: obj,
    FilterExpression: str,
    IndexName: str,
    KeyConditionExpression: str,
    KeyConditions: obj, // Legacy, we're not automatically serializing to AWS-flavored JSON
    Limit: num,
    ProjectionExpression: str,
    QueryFilter: obj, // Legacy, we're not automatically serializing to AWS-flavored JSON
    ReturnConsumedCapacity: str,
    ScanIndexForward: bool,
    Select: str,
  },
  request: async (params) => ({
    awsjson: awsjsonReq,
    headers: headers('Query'),
    payload: params,
  }),
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (payload?.Items?.length) payload.Items = payload.Items.map(awsjsonUnmarshall)
    if (payload?.LastEvaluatedKey) {
      let key = payload.LastEvaluatedKey[Object.keys(payload.LastEvaluatedKey)[0]]
      payload.LastEvaluatedKey = awsjsonUnmarshall(key)
    }
    return payload
  },
}

const RestoreTableFromBackup = {
  awsDoc: docRoot + 'API_RestoreTableFromBackup.html',
  validate: {
    BackupArn: { ...str, required },
    TargetTableName: { ...str, required },
    BillingModeOverride: str,
    GlobalSecondaryIndexOverride: arr,
    LocalSecondaryIndexOverride: arr,
    ProvisionedThroughputOverride: obj,
    SSESpecificationOverride: obj,
  },
  request: async (params) => ({
    headers: headers('RestoreTableFromBackup'),
    payload: params,
  }),
  response: defaultResponse,
}

const RestoreTableToPointInTime = {
  awsDoc: docRoot + 'API_RestoreTableToPointInTime.html',
  validate: {
    TargetTableName: { ...str, required },
    BillingModeOverride: str,
    GlobalSecondaryIndexOverride: arr,
    LocalSecondaryIndexOverride: arr,
    ProvisionedThroughputOverride: obj,
    RestoreDateTime: num,
    SourceTableArn: str,
    SourceTableName: str,
    SSESpecificationOverride: obj,
    UseLatestRestorableTime: bool,
  },
  request: async (params) => ({
    headers: headers('RestoreTableToPointInTime'),
    payload: params,
  }),
  response: defaultResponse,
}

const Scan = {
  awsDoc: docRoot + 'API_Scan.html',
  validate: {
    TableName,
    AttributesToGet: arr,
    ConditionalOperator: str,
    ConsistentRead: bool,
    ExclusiveStartKey: obj,
    ExpressionAttributeNames: obj,
    ExpressionAttributeValues: obj,
    FilterExpression: str,
    IndexName: str,
    Limit: num,
    ProjectionExpression: str,
    ReturnConsumedCapacity: str,
    ScanFilter: obj,  // Legacy, we're not automatically serializing to AWS-flavored JSON
    Segment: num,
    Select: str,
    TotalSegments: num,
  },
  request: async (params) => ({
    headers: headers('Scan'),
    payload: params,
  }),
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (payload?.Items?.length) payload.Items = payload.Items.map(awsjsonUnmarshall)
    return payload
  },
}

const TagResource = {
  awsDoc: docRoot + 'API_TagResource.html',
  validate: {
    ResourceArn: { ...str, required },
    Tags: { ...arr, required },
  },
  request: async (params) => ({
    headers: headers('TagResource'),
    payload: params,
  }),
  response: defaultResponse,
}

const TransactGetItems = {
  awsDoc: docRoot + 'API_TransactGetItems.html',
  validate: {
    TransactItems: arr,
    ReturnConsumedCapacity: str,
  },
  request: async (params, { awsjsonMarshall }) => {
    params.TransactItems = params.TransactItems.map(i => {
      // Required, but let Dynamo's validator blow up if not present
      if (i.Get.Key) i.Get.Key = awsjsonMarshall(i.Get.Key)
      return i
    })
    return {
      headers: headers('TransactGetItems'),
      payload: params,
    }
  },
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (payload?.Responses?.length) payload.Responses = payload.Responses.map(i => {
      i.Item = awsjsonUnmarshall(i.Item)
      return i
    })
    return payload
  },
}

const TransactWriteItems = {
  awsDoc: docRoot + 'API_TransactWriteItems.html',
  validate: {
    TransactItems: arr,
    ClientRequestToken: str,
    ReturnConsumedCapacity: str,
    ReturnItemCollectionMetrics: str,
  },
  request: async (params, { awsjsonMarshall }) => {
    params.TransactItems = params.TransactItems.map(i => {

      // One of the below four is required, but let Dynamo's validator blow up if not present
      /**/ if (i.ConditionCheck) {
        if (i.ConditionCheck.ExpressionAttributeValues) {
          i.ConditionCheck.ExpressionAttributeValues = awsjsonMarshall(i.ConditionCheck.ExpressionAttributeValues)
        }
        if (i.ConditionCheck.Key) {
          i.ConditionCheck.Key = awsjsonMarshall(i.ConditionCheck.Key)
        }
      }
      else if (i.Delete) {
        if (i.Delete.ExpressionAttributeValues) {
          i.Delete.ExpressionAttributeValues = awsjsonMarshall(i.Delete.ExpressionAttributeValues)
        }
        if (i.Delete.Key) {
          i.Delete.Key = awsjsonMarshall(i.Delete.Key)
        }
      }
      else if (i.Put) {
        if (i.Put.ExpressionAttributeValues) {
          i.Put.ExpressionAttributeValues = awsjsonMarshall(i.Put.ExpressionAttributeValues)
        }
        if (i.Put.Item) {
          i.Put.Item = awsjsonMarshall(i.Put.Item)
        }
      }
      else if (i.Update) {
        if (i.Update.ExpressionAttributeValues) {
          i.Update.ExpressionAttributeValues = awsjsonMarshall(i.Update.ExpressionAttributeValues)
        }
        if (i.Update.Key) {
          i.Update.Key = awsjsonMarshall(i.Update.Key)
        }
      }
      return i
    })
    return {
      headers: headers('TransactWriteItems'),
      payload: params,
    }
  },
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (Object.keys(payload?.ItemCollectionMetrics || {})?.length) {
      Object.entries(payload.ItemCollectionMetrics).forEach(([ table, items ]) => {
        payload.ItemCollectionMetrics[table] = items.map(i => {
          i.ItemCollectionKey = awsjsonUnmarshall(i.ItemCollectionKey)
        })
      })
    }
    return payload
  },
}

const UntagResource = {
  awsDoc: docRoot + 'API_UntagResource.html',
  validate: {
    ResourceArn: { ...str, required },
    TagKeys: { ...arr, required },
  },
  request: async (params) => ({
    headers: headers('UntagResource'),
    payload: params,
  }),
  response: defaultResponse,
}

const UpdateContinuousBackups = {
  awsDoc: docRoot + 'API_UpdateContinuousBackups.html',
  validate: {
    TableName,
    PointInTimeRecoverySpecification: obj,
  },
  request: async (params) => ({
    headers: headers('UpdateContinuousBackups'),
    payload: params,
  }),
  response: defaultResponse,
}

const UpdateContributorInsights = {
  awsDoc: docRoot + 'API_UpdateContributorInsights.html',
  validate: {
    TableName,
    ContributorInsightsAction: str,
    IndexName: str,
  },
  request: async (params) => ({
    headers: headers('UpdateContributorInsights'),
    payload: params,
  }),
  response: defaultResponse,
}

const UpdateGlobalTable = {
  awsDoc: docRoot + 'API_UpdateGlobalTable.html',
  validate: {
    GlobalTableName: { ...str, required },
    ReplicaUpdates: arr,
  },
  request: async (params) => ({
    headers: headers('UpdateGlobalTable'),
    payload: params,
  }),
  response: defaultResponse,
}

const UpdateGlobalTableSettings = {
  awsDoc: docRoot + 'API_UpdateGlobalTableSettings.html',
  validate: {
    GlobalTableName: { ...str, required },
    GlobalTableBillingMode: str,
    GlobalTableGlobalSecondaryIndexSettingsUpdate: arr,
    GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: obj,
    GlobalTableProvisionedWriteCapacityUnits: num,
    ReplicaSettingsUpdate: arr,
  },
  request: async (params) => ({
    headers: headers('UpdateGlobalTableSettings'),
    payload: params,
  }),
  response: defaultResponse,
}

const UpdateItem = {
  awsDoc: docRoot + 'API_UpdateItem.html',
  validate: {
    Key,
    TableName,
    AttributeUpdates: obj,
    ConditionalOperator: str,
    ConditionExpression: str,
    Expected: obj, // Legacy, we're not automatically serializing to AWS-flavored JSON
    ExpressionAttributeNames: obj,
    ExpressionAttributeValues: obj,
    ReturnConsumedCapacity: str,
    ReturnItemCollectionMetrics: str,
    ReturnValues: str,
    ReturnValuesOnConditionCheckFailure: str,
    UpdateExpression: str,
  },
  request: async (params) => ({
    awsjson: awsjsonReq,
    headers: headers('UpdateItem'),
    payload: params,
  }),
  response: async ({ payload }, { awsjsonUnmarshall }) => {
    if (Object.keys(payload?.ItemCollectionMetrics || {})?.length) {
      Object.entries(payload.ItemCollectionMetrics.ItemCollectionKey).forEach(([ key, props ]) => {
        payload.ItemCollectionMetrics.ItemCollectionKey[key] = awsjsonUnmarshall(props)
      })
    }
    payload.awsjson = awsjsonRes
    return payload
  },
}

const UpdateTable = {
  awsDoc: docRoot + 'API_UpdateTable.html',
  validate: {
    TableName,
    AttributeDefinitions: arr,
    BillingMode: str,
    DeletionProtectionEnabled: bool,
    GlobalSecondaryIndexUpdates: arr,
    ProvisionedThroughput: obj,
    ReplicaUpdates: arr,
    SSESpecification: obj,
    StreamSpecification: obj,
    TableClass: str,
  },
  request: async (params) => ({
    headers: headers('UpdateTable'),
    payload: params,
  }),
  response: defaultResponse,
}

const UpdateTableReplicaAutoScaling = {
  awsDoc: docRoot + 'API_UpdateTableReplicaAutoScaling.html',
  validate: {
    TableName,
    GlobalSecondaryIndexUpdates: arr,
    ProvisionedWriteCapacityAutoScalingUpdate: obj,
    ReplicaUpdates: arr,
  },
  request: async (params) => ({
    headers: headers('UpdateTableReplicaAutoScaling'),
    payload: params,
  }),
  response: defaultResponse,
}

const UpdateTimeToLive = {
  awsDoc: docRoot + 'API_UpdateTimeToLive.html',
  validate: {
    TableName,
    TimeToLiveSpecification: obj,
  },
  request: async (params) => ({
    headers: headers('UpdateTimeToLive'),
    payload: params,
  }),
  response: defaultResponse,
}

const methods = { BatchExecuteStatement, BatchGetItem, BatchWriteItem, CreateBackup, CreateGlobalTable, CreateTable, DeleteBackup, DeleteItem, DeleteTable, DescribeBackup, DescribeContinuousBackups, DescribeContributorInsights, DescribeEndpoints, DescribeExport, DescribeGlobalTable, DescribeGlobalTableSettings, DescribeImport, DescribeKinesisStreamingDestination, DescribeLimits, DescribeTable, DescribeTableReplicaAutoScaling, DescribeTimeToLive, DisableKinesisStreamingDestination, EnableKinesisStreamingDestination, ExecuteStatement, ExecuteTransaction, ExportTableToPointInTime, GetItem, ImportTable, ListBackups, ListContributorInsights, ListExports, ListGlobalTables, ListImports, ListTables, ListTagsOfResource, PutItem, Query, RestoreTableFromBackup, RestoreTableToPointInTime, Scan, TagResource, TransactGetItems, TransactWriteItems, UntagResource, UpdateContinuousBackups, UpdateContributorInsights, UpdateGlobalTable, UpdateGlobalTableSettings, UpdateItem, UpdateTable, UpdateTableReplicaAutoScaling, UpdateTimeToLive }
export default { service, methods }
