# `@aws-lite/dynamodb`

> Official `aws-lite` plugin for DynamoDB

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/dynamodb
```

Optionally install types:

```sh
npm i -D @aws-lite/dynamodb-types
```


## Docs

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `BatchExecuteStatement`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html)

Properties:
- **`Statements` (array) [required]**
- **`ReturnConsumedCapacity` (string)**


### `BatchGetItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html)

Properties:
- **`RequestItems` (object) [required]**
- **`ReturnConsumedCapacity` (string)**


### `BatchWriteItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html)

Properties:
- **`RequestItems` (object) [required]**
- **`ReturnConsumedCapacity` (string)**
- **`ReturnItemCollectionMetrics` (string)**


### `CreateBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html)

Properties:
- **`TableName` (string) [required]**
- **`BackupName` (string) [required]**


### `CreateGlobalTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html)

Properties:
- **`GlobalTableName` (string) [required]**
- **`ReplicationGroup` (array) [required]**


### `CreateTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html)

Properties:
- **`TableName` (string) [required]**
- **`AttributeDefinitions` (array) [required]**
- **`KeySchema` (array) [required]**
- **`BillingMode` (string)**
- **`DeletionProtectionEnabled` (boolean)**
- **`GlobalSecondaryIndexes` (array)**
- **`LocalSecondaryIndexes` (array)**
- **`ProvisionedThroughput` (object)**
- **`SSESpecification` (object)**
- **`StreamSpecification` (object)**
- **`TableClass` (string)**
- **`Tags` (array)**


### `DeleteBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html)

Properties:
- **`BackupArn` (string) [required]**


### `DeleteItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html)

Properties:
- **`TableName` (string) [required]**
- **`Key` (object) [required]**
- **`ConditionalOperator` (string)**
- **`ConditionExpression` (string)**
- **`Expected` (object)**
- **`ExpressionAttributeNames` (object)**
- **`ExpressionAttributeValues` (object)**
- **`ReturnConsumedCapacity` (string)**
- **`ReturnItemCollectionMetrics` (string)**
- **`ReturnValues` (string)**
- **`ReturnValuesOnConditionCheckFailure` (string)**


### `DeleteTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html)

Properties:
- **`TableName` (string) [required]**


### `DescribeBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html)

Properties:
- **`BackupArn` (string) [required]**


### `DescribeContinuousBackups`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html)

Properties:
- **`TableName` (string) [required]**


### `DescribeContributorInsights`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html)

Properties:
- **`TableName` (string) [required]**
- **`IndexName` (string)**


### `DescribeEndpoints`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html)



### `DescribeExport`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html)

Properties:
- **`ExportArn` (string) [required]**


### `DescribeGlobalTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html)

Properties:
- **`GlobalTableName` (string) [required]**


### `DescribeGlobalTableSettings`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html)

Properties:
- **`GlobalTableName` (string) [required]**


### `DescribeImport`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html)

Properties:
- **`ImportArn` (string) [required]**


### `DescribeKinesisStreamingDestination`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html)

Properties:
- **`TableName` (string) [required]**


### `DescribeLimits`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html)



### `DescribeTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html)

Properties:
- **`TableName` (string) [required]**


### `DescribeTableReplicaAutoScaling`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html)

Properties:
- **`TableName` (string) [required]**


### `DescribeTimeToLive`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html)

Properties:
- **`TableName` (string) [required]**


### `DisableKinesisStreamingDestination`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html)

Properties:
- **`TableName` (string) [required]**
- **`StreamArn` (string) [required]**


### `EnableKinesisStreamingDestination`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html)

Properties:
- **`TableName` (string) [required]**
- **`StreamArn` (string) [required]**


### `ExecuteStatement`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html)

Properties:
- **`TableName` (string) [required]**
- **`Statement` (string) [required]**
- **`ConsistentRead` (boolean)**
- **`Limit` (number)**
- **`NextToken` (string)**
- **`Parameters` (object)**
- **`ReturnConsumedCapacity` (string)**
- **`ReturnValuesOnConditionCheckFailure` (string)**


### `ExecuteTransaction`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html)

Properties:
- **`TableName` (string) [required]**
- **`TransactStatements` (array) [required]**
- **`ClientRequestToken` (string)**
- **`ReturnConsumedCapacity` (string)**


### `ExportTableToPointInTime`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html)

Properties:
- **`S3Bucket` (string) [required]**
- **`TableArn` (string) [required]**
- **`ClientToken` (string)**
- **`ExportFormat` (string)**
- **`ExportTime` (number)**
- **`S3BucketOwner` (string)**
- **`S3Prefix` (string)**
- **`S3SseAlgorithm` (string)**
- **`S3SseKmsKeyId` (string)**


### `GetItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html)

Properties:
- **`TableName` (string) [required]**
- **`Key` (object) [required]**
- **`AttributesToGet` (array)**
- **`ConsistentRead` (boolean)**
- **`ExpressionAttributeNames` (object)**
- **`ProjectionExpression` (string)**
- **`ReturnConsumedCapacity` (string)**


### `ImportTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html)

Properties:
- **`InputFormat` (string) [required]**
- **`S3BucketSource` (object) [required]**
- **`TableCreationParameters` (object) [required]**
- **`ClientToken` (string)**
- **`InputCompressionType` (string)**
- **`InputFormatOptions` (object)**


### `ListBackups`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html)

Properties:
- **`BackupType` (string)**
- **`ExclusiveStartBackupArn` (string)**
- **`Limit` (number)**
- **`TableName` (string)**
- **`TimeRangeLowerBound` (number)**
- **`TimeRangeUpperBound` (number)**


### `ListContributorInsights`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html)

Properties:
- **`MaxResults` (number)**
- **`NextToken` (string)**
- **`TableName` (string)**


### `ListExports`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html)

Properties:
- **`MaxResults` (number)**
- **`NextToken` (string)**
- **`TableArn` (string)**


### `ListGlobalTables`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html)

Properties:
- **`ExclusiveStartGlobalTableName` (string)**
- **`Limit` (number)**
- **`RegionName` (string)**


### `ListImports`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html)

Properties:
- **`NextToken` (string)**
- **`PageSize` (number)**
- **`TableArn` (string)**


### `ListTables`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html)

Properties:
- **`ExclusiveStartTableName` (string)**
- **`Limit` (number)**


### `ListTagsOfResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html)

Properties:
- **`NextToken` (string)**
- **`ResourceArn` (string) [required]**


### `PutItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html)

Properties:
- **`TableName` (string) [required]**
- **`Item` (object) [required]**
- **`ConditionalOperator` (string)**
- **`ConditionExpression` (string)**
- **`Expected` (string)**
- **`ExpressionAttributeNames` (object)**
- **`ExpressionAttributeValues` (object)**
- **`ReturnConsumedCapacity` (string)**
- **`ReturnItemCollectionMetrics` (string)**
- **`ReturnValues` (string)**
- **`ReturnValuesOnConditionCheckFailure` (string)**


### `Query`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html)

Properties:
- **`TableName` (string) [required]**
- **`AttributesToGet` (array)**
- **`ConditionalOperator` (string)**
- **`ConsistentRead` (boolean)**
- **`ExclusiveStartKey` (object)**
- **`ExpressionAttributeNames` (object)**
- **`ExpressionAttributeValues` (object)**
- **`FilterExpression` (string)**
- **`IndexName` (string)**
- **`KeyConditionExpression` (string)**
- **`KeyConditions` (object)**
- **`Limit` (number)**
- **`ProjectionExpression` (string)**
- **`QueryFilter` (object)**
- **`ReturnConsumedCapacity` (string)**
- **`ScanIndexForward` (boolean)**
- **`Select` (string)**
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `RestoreTableFromBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html)

Properties:
- **`BackupArn` (string) [required]**
- **`TargetTableName` (string) [required]**
- **`BillingModeOverride` (string)**
- **`GlobalSecondaryIndexOverride` (array)**
- **`LocalSecondaryIndexOverride` (array)**
- **`ProvisionedThroughputOverride` (object)**
- **`SSESpecificationOverride` (object)**


### `RestoreTableToPointInTime`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html)

Properties:
- **`TargetTableName` (string) [required]**
- **`BillingModeOverride` (string)**
- **`GlobalSecondaryIndexOverride` (array)**
- **`LocalSecondaryIndexOverride` (array)**
- **`ProvisionedThroughputOverride` (object)**
- **`RestoreDateTime` (number)**
- **`SourceTableArn` (string)**
- **`SourceTableName` (string)**
- **`SSESpecificationOverride` (object)**
- **`UseLatestRestorableTime` (boolean)**


### `Scan`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html)

Properties:
- **`TableName` (string) [required]**
- **`AttributesToGet` (array)**
- **`ConditionalOperator` (string)**
- **`ConsistentRead` (boolean)**
- **`ExclusiveStartKey` (object)**
- **`ExpressionAttributeNames` (object)**
- **`ExpressionAttributeValues` (object)**
- **`FilterExpression` (string)**
- **`IndexName` (string)**
- **`Limit` (number)**
- **`ProjectionExpression` (string)**
- **`ReturnConsumedCapacity` (string)**
- **`ScanFilter` (object)**
- **`Segment` (number)**
- **`Select` (string)**
- **`TotalSegments` (number)**
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `TagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html)

Properties:
- **`ResourceArn` (string) [required]**
- **`Tags` (array) [required]**


### `TransactGetItems`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html)

Properties:
- **`TransactItems` (array)**
- **`ReturnConsumedCapacity` (string)**


### `TransactWriteItems`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html)

Properties:
- **`TransactItems` (array)**
- **`ClientRequestToken` (string)**
- **`ReturnConsumedCapacity` (string)**
- **`ReturnItemCollectionMetrics` (string)**


### `UntagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html)

Properties:
- **`ResourceArn` (string) [required]**
- **`TagKeys` (array) [required]**


### `UpdateContinuousBackups`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html)

Properties:
- **`TableName` (string) [required]**
- **`PointInTimeRecoverySpecification` (object)**


### `UpdateContributorInsights`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html)

Properties:
- **`TableName` (string) [required]**
- **`ContributorInsightsAction` (string)**
- **`IndexName` (string)**


### `UpdateGlobalTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html)

Properties:
- **`GlobalTableName` (string) [required]**
- **`ReplicaUpdates` (array)**


### `UpdateGlobalTableSettings`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html)

Properties:
- **`GlobalTableName` (string) [required]**
- **`GlobalTableBillingMode` (string)**
- **`GlobalTableGlobalSecondaryIndexSettingsUpdate` (array)**
- **`GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate` (object)**
- **`GlobalTableProvisionedWriteCapacityUnits` (number)**
- **`ReplicaSettingsUpdate` (array)**


### `UpdateItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html)

Properties:
- **`Key` (object) [required]**
- **`TableName` (string) [required]**
- **`AttributeUpdates` (object)**
- **`ConditionalOperator` (string)**
- **`ConditionExpression` (string)**
- **`Expected` (object)**
- **`ExpressionAttributeNames` (object)**
- **`ExpressionAttributeValues` (object)**
- **`ReturnConsumedCapacity` (string)**
- **`ReturnItemCollectionMetrics` (string)**
- **`ReturnValues` (string)**
- **`ReturnValuesOnConditionCheckFailure` (string)**
- **`UpdateExpression` (string)**


### `UpdateTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html)

Properties:
- **`TableName` (string) [required]**
- **`AttributeDefinitions` (array)**
- **`BillingMode` (string)**
- **`DeletionProtectionEnabled` (boolean)**
- **`GlobalSecondaryIndexUpdates` (array)**
- **`ProvisionedThroughput` (object)**
- **`ReplicaUpdates` (array)**
- **`SSESpecification` (object)**
- **`StreamSpecification` (object)**
- **`TableClass` (string)**


### `UpdateTableReplicaAutoScaling`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html)

Properties:
- **`TableName` (string) [required]**
- **`GlobalSecondaryIndexUpdates` (array)**
- **`ProvisionedWriteCapacityAutoScalingUpdate` (object)**
- **`ReplicaUpdates` (array)**


### `UpdateTimeToLive`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html)

Properties:
- **`TableName` (string) [required]**
- **`TimeToLiveSpecification` (object)**
<!-- METHOD_DOCS_END -->


## Usage

This plugin covers all DynamoDB methods (listed & linked below), utilizing DynamoDB's semantics.

By default, with the exception of certain legacy properties (noted below), this plugin will automatically (de)serialize AWS-flavored JSON in requests and responses, so you do not have to treat that as a concern.

> Legacy properties (which DynamoDB discourages the use of) that will not be automatically (de)serialized: `DeleteItem.Expected`, `PutItem.Expected`, `Query.KeyConditions`, `Query.QueryFilter`, `Scan.ScanFilter`, `UpdateItem.Expected`


### Example

```js
import awsLite from '@aws-lite/client'
const aws = await awsLite()

// See: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
await aws.dynamodb.PutItem({
  TableName: 'your-table-name',
  Item: { id: 'hello', ts: new Date().toISOString() }
})
```


### DynamoDB methods

- [`BatchExecuteStatement`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html)
- [`BatchGetItem`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html)
- [`BatchWriteItem`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html)
- [`CreateBackup`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html)
- [`CreateGlobalTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html)
- [`CreateTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html)
- [`DeleteBackup`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html)
- [`DeleteItem`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html)
- [`DeleteTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html)
- [`DescribeBackup`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html)
- [`DescribeContinuousBackups`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html)
- [`DescribeContributorInsights`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html)
- [`DescribeEndpoints`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html)
- [`DescribeExport`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html)
- [`DescribeGlobalTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html)
- [`DescribeGlobalTableSettings`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html)
- [`DescribeImport`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html)
- [`DescribeKinesisStreamingDestination`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html)
- [`DescribeLimits`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html)
- [`DescribeTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html)
- [`DescribeTableReplicaAutoScaling`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html)
- [`DescribeTimeToLive`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html)
- [`DisableKinesisStreamingDestination`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html)
- [`EnableKinesisStreamingDestination`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html)
- [`ExecuteStatement`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html)
- [`ExecuteTransaction`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html)
- [`ExportTableToPointInTime`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html)
- [`GetItem`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html)
- [`ImportTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html)
- [`ListBackups`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html)
- [`ListContributorInsights`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html)
- [`ListExports`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html)
- [`ListGlobalTables`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html)
- [`ListImports`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html)
- [`ListTables`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html)
- [`ListTagsOfResource`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html)
- [`PutItem`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html)
- [`Query`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html)
- [`RestoreTableFromBackup`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html)
- [`RestoreTableToPointInTime`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html)
- [`Scan`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html)
- [`TagResource`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html)
- [`TransactGetItems`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html)
- [`TransactWriteItems`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html)
- [`UntagResource`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html)
- [`UpdateContinuousBackups`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html)
- [`UpdateContributorInsights`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html)
- [`UpdateGlobalTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html)
- [`UpdateGlobalTableSettings`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html)
- [`UpdateItem`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html)
- [`UpdateTable`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html)
- [`UpdateTableReplicaAutoScaling`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html)
- [`UpdateTimeToLive`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html)


## Learn more

Please see the [main `aws-lite` readme](https://github.com/architect/aws-lite) for more information about `aws-lite` plugins.
