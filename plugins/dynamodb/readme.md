# `@aws-lite/dynamodb`

> Official `aws-lite` plugin for DynamoDB

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/dynamodb
```


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
