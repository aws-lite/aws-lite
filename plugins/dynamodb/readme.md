# [`@aws-lite/dynamodb`](https://aws-lite.org/services/dynamodb)

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


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/dynamodb)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `BatchExecuteStatement`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html)

Properties:
- **`Statements` (array) [required]**
  - Array of PartiQL statements representing the batch being run
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`


### `BatchGetItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html)

Properties:
- **`RequestItems` (object) [required]**
  - An object containing >=1 table names and, for each table, an object describing >=1 items to get
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`


### `BatchWriteItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html)

Properties:
- **`RequestItems` (object) [required]**
  - An object containing >=1 table names and, for each table, an object describing >=1 items to write
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ReturnItemCollectionMetrics` (string)**
  - Return collection metrics in response, can be set to: `SIZE`, or `NONE` (default)


### `CreateBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`BackupName` (string) [required]**
  - Specified name of the backup


### `CreateGlobalTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html)

Properties:
- **`GlobalTableName` (string) [required]**
  - DynamoDB table name
- **`ReplicationGroup` (array) [required]**
  - AWS regions where the global table needs to be created


### `CreateTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`AttributeDefinitions` (array) [required]**
  - Array of attributes that describe the primary (and sort) schema for the table
- **`KeySchema` (array) [required]**
  - Attributes that make up the primary key for a table or index. The attributes in `KeySchema` must also be defined in the `AttributeDefinitions` array
- **`BillingMode` (string)**
  - Set how the table is charged for read/write throughput: `PROVISIONED`, or `PAY_PER_REQUEST`
- **`DeletionProtectionEnabled` (boolean)**
  - Enable or disable deletion protection
- **`GlobalSecondaryIndexes` (array)**
  - 1-20 global secondary indexes to be created on the table
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html#DDB-CreateTable-request-GlobalSecondaryIndexes)
- **`LocalSecondaryIndexes` (array)**
  - 1-5 local secondary indexes to be created on the table
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html#DDB-CreateTable-request-LocalSecondaryIndexes)
- **`ProvisionedThroughput` (object)**
  - Provisioned throughput setting
- **`SSESpecification` (object)**
  - Server-side encryption settings
- **`StreamSpecification` (object)**
  - Settings for Streams, including: `StreamEnabled` (boolean), and `StreamViewType` (`KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, or `NEW_AND_OLD_IMAGES`)
- **`TableClass` (string)**
  - Class of the table, can be set to: `STANDARD`, or `STANDARD_INFREQUENT_ACCESS`
- **`Tags` (array)**
  - Array of pairs to label the table


### `DeleteBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html)

Properties:
- **`BackupArn` (string) [required]**
  - ARN of the specified backup


### `DeleteItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`Key` (object) [required]**
  - Primary (and sort) key of the item in question
- **`ConditionalOperator` (string)**
  - Legacy parameter, use `FilterExpression` instead
- **`ConditionExpression` (string)**
  - Condition that must be satisfied in order to complete the operation
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`Expected` (object)**
  - Legacy parameter, use `ConditionExpression` instead
- **`ExpressionAttributeNames` (object)**
  - Substitution tokens for attribute names in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Attributes.html)
- **`ExpressionAttributeValues` (object)**
  - Values that can be substituted in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ReturnItemCollectionMetrics` (string)**
  - Return collection metrics in response, can be set to: `SIZE`, or `NONE` (default)
- **`ReturnValues` (string)**
  - Return the item as it was prior to the operation taking place, can be set to `NONE` (default), or `ALL_OLD`
- **`ReturnValuesOnConditionCheckFailure` (string)**
  - Return the item attributes that failed  a condition check, can be set to `NONE`, or `ALL_OLD`


### `DeleteTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name


### `DescribeBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html)

Properties:
- **`BackupArn` (string) [required]**
  - ARN of the specified backup


### `DescribeContinuousBackups`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name


### `DescribeContributorInsights`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`IndexName` (string)**
  - DynamoDB global secondary index name (if applicable)


### `DescribeEndpoints`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html)

Properties:



### `DescribeExport`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html)

Properties:
- **`ExportArn` (string) [required]**
  - ARN of the specified export


### `DescribeGlobalTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html)

Properties:
- **`GlobalTableName` (string) [required]**
  - DynamoDB global table name


### `DescribeGlobalTableSettings`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html)

Properties:
- **`GlobalTableName` (string) [required]**
  - DynamoDB global table name


### `DescribeImport`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html)

Properties:
- **`ImportArn` (string) [required]**
  - ARN of the specified import


### `DescribeKinesisStreamingDestination`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name


### `DescribeLimits`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html)

Properties:



### `DescribeTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name


### `DescribeTableReplicaAutoScaling`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name


### `DescribeTimeToLive`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name


### `DisableKinesisStreamingDestination`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`StreamArn` (string) [required]**
  - ARN of the specified Kinesis data stream


### `EnableKinesisStreamingDestination`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`StreamArn` (string) [required]**
  - ARN of the specified Kinesis data stream


### `ExecuteStatement`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`Statement` (string) [required]**
  - PartiQL statement representing the operation to run
- **`ConsistentRead` (boolean)**
  - Enable strongly consistent reads; by default eventually consistent reads are used
- **`Limit` (number)**
  - Maximum number of items to evaluate and return
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`Parameters` (array)**
  - PartiQL statement parameters, if any
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ReturnValuesOnConditionCheckFailure` (string)**
  - Return the item attributes that failed  a condition check, can be set to `NONE`, or `ALL_OLD`


### `ExecuteTransaction`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`TransactStatements` (array) [required]**
  - PartiQL statement parameters representing the transaction to run
- **`ClientRequestToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`


### `ExportTableToPointInTime`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html)

Properties:
- **`S3Bucket` (string) [required]**
  - Destination S3 bucket of the snapshot export
- **`TableArn` (string) [required]**
  - ARN of the table being exported
- **`ClientToken` (string)**
  - Ensures operation request is idempotent
- **`ExportFormat` (string)**
  - Format for the exported data, can be set to: `DYNAMODB_JSON`, or `IO`
- **`ExportTime` (number)**
  - Point in time (in epoch seconds) from which to export table data
- **`S3BucketOwner` (string)**
  - AWS account ID that owns the destination S3 bucket
- **`S3Prefix` (string)**
  - S3 bucket prefix to use as the file name and path of the exported snapshot
- **`S3SseAlgorithm` (string)**
  - Type of encryption used on the bucket where export data will be stored, can be set to `AES256`, or `KMS`
- **`S3SseKmsKeyId` (string)**
  - AWS KMS managed key ID used to encrypt the destination S3 bucket (if applicable)


### `GetItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`Key` (object) [required]**
  - Primary (and sort) key of the item in question
- **`AttributesToGet` (array)**
  - Legacy parameter, use `ProjectionExpression` instead
- **`ConsistentRead` (boolean)**
  - Enable strongly consistent reads; by default eventually consistent reads are used
- **`ExpressionAttributeNames` (object)**
  - Substitution tokens for attribute names in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Attributes.html)
- **`ProjectionExpression` (string)**
  - Comma separated string that identifies one or more attributes to retrieve from the table
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`


### `ImportTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html)

Properties:
- **`InputFormat` (string) [required]**
  - Source data format, can be set to: `CSV`, `DYNAMODB_JSON`, or `ION`
- **`S3BucketSource` (object) [required]**
  - Destination S3 bucket of the snapshot import
- **`TableCreationParameters` (object) [required]**
  - Parameters for the table to import the data
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TableCreationParameters.html)
- **`ClientToken` (string)**
  - Ensures operation request is idempotent
- **`InputCompressionType` (string)**
  - Input compression type, can be set to: `GZIP`, `ZSTD`, or `NONE`
- **`InputFormatOptions` (object)**
  - Additional input formatting options


### `ListBackups`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html)

Properties:
- **`BackupType` (string)**
  - Limit backups by type, can be set to: `USER` `SYSTEM`, `AWS_BACKUP`, or `ALL`
- **`ExclusiveStartBackupArn` (string)**
  - Pagination cursor token ARN to be used if `LastEvaluatedBackupArn` was returned in a previous response
- **`Limit` (number)**
  - Maximum number of items to evaluate and return
- **`TableName` (string)**
  - List backups by DynamoDB table name
- **`TimeRangeLowerBound` (number)**
  - Inclusively return backups created after this time
- **`TimeRangeUpperBound` (number)**
  - Exclusively return backups created before this time
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListContributorInsights`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html)

Properties:
- **`MaxResults` (number)**
  - Maximum number of items to evaluate and return
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`TableName` (string)**
  - DynamoDB table name


### `ListExports`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html)

Properties:
- **`MaxResults` (number)**
  - Maximum number of items to evaluate and return
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`TableArn` (string)**
  - ARN of the exported table


### `ListGlobalTables`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html)

Properties:
- **`ExclusiveStartGlobalTableName` (string)**
  - Pagination cursor token to be used if `LastEvaluatedGlobalTableName` was returned in a previous response
- **`Limit` (number)**
  - Maximum number of items to evaluate and return
- **`RegionName` (string)**
  - List the global tables in a specific region


### `ListImports`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html)

Properties:
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`PageSize` (number)**
  - Maximum number of items to evaluate and return
- **`TableArn` (string)**
  - ARN of the table imported to


### `ListTables`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html)

Properties:
- **`ExclusiveStartTableName` (string)**
  - Pagination cursor token to be used if `LastEvaluatedTableName` was returned in a previous response
- **`Limit` (number)**
  - Maximum number of items to evaluate and return


### `ListTagsOfResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html)

Properties:
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`ResourceArn` (string) [required]**
  - Resource tags to be returned


### `PutItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`Item` (object) [required]**
  - Item to be written to DynamoDB
- **`ConditionalOperator` (string)**
  - Legacy parameter, use `FilterExpression` instead
- **`ConditionExpression` (string)**
  - Condition that must be satisfied in order to complete the operation
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`Expected` (object)**
  - Legacy parameter, use `ConditionExpression` instead
- **`ExpressionAttributeNames` (object)**
  - Substitution tokens for attribute names in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Attributes.html)
- **`ExpressionAttributeValues` (object)**
  - Values that can be substituted in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ReturnItemCollectionMetrics` (string)**
  - Return collection metrics in response, can be set to: `SIZE`, or `NONE` (default)
- **`ReturnValues` (string)**
  - Return the item as it was prior to the operation taking place, can be set to `NONE` (default), or `ALL_OLD`
- **`ReturnValuesOnConditionCheckFailure` (string)**
  - Return the item attributes that failed  a condition check, can be set to `NONE`, or `ALL_OLD`


### `Query`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`AttributesToGet` (array)**
  - Legacy parameter, use `ProjectionExpression` instead
- **`ConditionalOperator` (string)**
  - Legacy parameter, use `FilterExpression` instead
- **`ConsistentRead` (boolean)**
  - Enable strongly consistent reads; by default eventually consistent reads are used
- **`ExclusiveStartKey` (object)**
  - Pagination cursor token ARN to be used if `LastEvaluatedKey` was returned in a previous response
- **`ExpressionAttributeNames` (object)**
  - Substitution tokens for attribute names in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Attributes.html)
- **`ExpressionAttributeValues` (object)**
  - Values that can be substituted in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`FilterExpression` (string)**
  - String of filter conditions applied before data is returned
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Query.FilterExpression)
- **`IndexName` (string)**
  - DynamoDB global secondary index name (if applicable)
- **`KeyConditionExpression` (string)**
  - Condition specifying the key values for items to be retrieved; the condition must perform an equality test on a single partition key value
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html#DDB-Query-request-KeyConditionExpression)
- **`KeyConditions` (object)**
  - Legacy parameter, use `KeyConditionExpression` instead
- **`Limit` (number)**
  - Maximum number of items to evaluate and return
- **`ProjectionExpression` (string)**
  - Comma separated string that identifies one or more attributes to retrieve from the table
- **`QueryFilter` (object)**
  - Legacy parameter, use `FilterExpression` instead
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ScanIndexForward` (boolean)**
  - Index traversal order: `true` (default) for ascending, `false` for descending order
- **`Select` (string)**
  - Attributes to be returned in the result, can be set to: `ALL_ATTRIBUTES`, `ALL_PROJECTED_ATTRIBUTES`, `COUNT`, or `SPECIFIC_ATTRIBUTES`
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html#DDB-Query-request-Select)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `RestoreTableFromBackup`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html)

Properties:
- **`BackupArn` (string) [required]**
  - ARN of the specified backup
- **`TargetTableName` (string) [required]**
  - Name of the new table into which the backup will be restored
- **`BillingModeOverride` (string)**
  - Set how the table is charged for read/write throughput: `PROVISIONED`, or `PAY_PER_REQUEST`
- **`GlobalSecondaryIndexOverride` (array)**
  - List of global secondary indexes for the restored table; included indexes should match existing secondary indexes, although indexes can be excluded
- **`LocalSecondaryIndexOverride` (array)**
  - List of local secondary indexes for the restored table; included indexes should match existing secondary indexes, although indexes can be excluded
- **`ProvisionedThroughputOverride` (object)**
  - Provisioned throughput setting
- **`SSESpecificationOverride` (object)**
  - Server-side encryption settings


### `RestoreTableToPointInTime`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html)

Properties:
- **`TargetTableName` (string) [required]**
  - Name of the new table into which the backup will be restored
- **`BillingModeOverride` (string)**
  - Set how the table is charged for read/write throughput: `PROVISIONED`, or `PAY_PER_REQUEST`
- **`GlobalSecondaryIndexOverride` (array)**
  - List of global secondary indexes for the restored table; included indexes should match existing secondary indexes, although indexes can be excluded
- **`LocalSecondaryIndexOverride` (array)**
  - List of local secondary indexes for the restored table; included indexes should match existing secondary indexes, although indexes can be excluded
- **`ProvisionedThroughputOverride` (object)**
  - Provisioned throughput setting
- **`RestoreDateTime` (number)**
  - Past time to restore the table to
- **`SourceTableArn` (string)**
  - ARN of the specified backup
- **`SourceTableName` (string)**
  - Name of the source table being restored
- **`SSESpecificationOverride` (object)**
  - Server-side encryption settings
- **`UseLatestRestorableTime` (boolean)**
  - Restore to the latest possible time; typically 5 minutes before the current time


### `Scan`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`AttributesToGet` (array)**
  - Legacy parameter, use `ProjectionExpression` instead
- **`ConditionalOperator` (string)**
  - Legacy parameter, use `FilterExpression` instead
- **`ConsistentRead` (boolean)**
  - Enable strongly consistent reads; by default eventually consistent reads are used
- **`ExclusiveStartKey` (object)**
  - Pagination cursor token ARN to be used if `LastEvaluatedKey` was returned in a previous response
- **`ExpressionAttributeNames` (object)**
  - Substitution tokens for attribute names in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Attributes.html)
- **`ExpressionAttributeValues` (object)**
  - Values that can be substituted in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`FilterExpression` (string)**
  - String of filter conditions applied before data is returned
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Query.FilterExpression)
- **`IndexName` (string)**
  - DynamoDB global secondary index name (if applicable)
- **`Limit` (number)**
  - Maximum number of items to evaluate and return
- **`ProjectionExpression` (string)**
  - Comma separated string that identifies one or more attributes to retrieve from the table
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ScanFilter` (object)**
  - Legacy parameter, use `FilterExpression` instead
- **`Segment` (number)**
  - Individual segment to be scanned in a parallel `Scan` request
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html#DDB-Scan-request-ScanFilter)
- **`Select` (string)**
  - Attributes to be returned in the result, can be set to: `ALL_ATTRIBUTES`, `ALL_PROJECTED_ATTRIBUTES`, `COUNT`, or `SPECIFIC_ATTRIBUTES`
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html#DDB-Scan-request-Select)
- **`TotalSegments` (number)**
  - Total number of segments to be scanned in a parallel `Scan` request
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html#DDB-Scan-request-ScanFilter)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `TagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html)

Properties:
- **`ResourceArn` (string) [required]**
  - Resource to add tags to
- **`Tags` (array) [required]**
  - Tags to be assigned


### `TransactGetItems`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html)

Properties:
- **`TransactItems` (array) [required]**
  - Ordered array of up to 100 `TransactGetItem` objects, each of which containing a `Get` object
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html#DDB-TransactGetItems-request-TransactItems)
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`


### `TransactWriteItems`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html)

Properties:
- **`TransactItems` (array) [required]**
  - Ordered array of up to 100 `TransactWriteItem` objects, each of which containing a `ConditionCheck`, `Put`, `Update`, or `Delete` object
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html#DDB-TransactWriteItems-request-TransactItems)
- **`ClientRequestToken` (string)**
  - Ensures operation request is idempotent
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ReturnItemCollectionMetrics` (string)**
  - Return collection metrics in response, can be set to: `SIZE`, or `NONE` (default)


### `UntagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html)

Properties:
- **`ResourceArn` (string) [required]**
  - Resource to remove tags from
- **`TagKeys` (array) [required]**
  - Tags to be removed


### `UpdateContinuousBackups`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`PointInTimeRecoverySpecification` (object)**
  - Point in time recovery settings
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PointInTimeRecoverySpecification.html)


### `UpdateContributorInsights`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`ContributorInsightsAction` (string)**
  - Contributor insights action, can be set to: `ENABLE` or `DISABLE`
- **`IndexName` (string)**
  - DynamoDB global secondary index name (if applicable)


### `UpdateGlobalTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html)

Properties:
- **`GlobalTableName` (string) [required]**
  - DynamoDB global table name
- **`ReplicaUpdates` (array)**
  - List of regions to be added or removed from the global table


### `UpdateGlobalTableSettings`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html)

Properties:
- **`GlobalTableName` (string) [required]**
  - DynamoDB global table name
- **`GlobalTableBillingMode` (string)**
  - Set how the table is charged for read/write throughput: `PROVISIONED`, or `PAY_PER_REQUEST`
- **`GlobalTableGlobalSecondaryIndexSettingsUpdate` (array)**
  - 1-20 global secondary indexes to be modified
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GlobalTableGlobalSecondaryIndexSettingsUpdate.html)
- **`GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate` (object)**
  - Auto-scaling settings for managing provisioned write capacity
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AutoScalingSettingsUpdate.html)
- **`GlobalTableProvisionedWriteCapacityUnits` (number)**
  - Maximum number of writes per second before returning a `ThrottlingException`
- **`ReplicaSettingsUpdate` (array)**
  - Global table settings to be modified
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ReplicaSettingsUpdate.html)


### `UpdateItem`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html)

Properties:
- **`Key` (object) [required]**
  - Primary (and sort) key of the item in question
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`AttributeUpdates` (object)**
  - Legacy parameter, use `UpdateExpression` instead
- **`ConditionalOperator` (string)**
  - Legacy parameter, use `ConditionExpression` instead
- **`ConditionExpression` (string)**
  - Condition that must be satisfied in order to complete the operation
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`Expected` (object)**
  - Legacy parameter, use `ConditionExpression` instead
- **`ExpressionAttributeNames` (object)**
  - Substitution tokens for attribute names in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Attributes.html)
- **`ExpressionAttributeValues` (object)**
  - Values that can be substituted in an expression
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
- **`ReturnConsumedCapacity` (string)**
  - Return throughput consumption in response, can be set to one of: `INDEXES`, `TOTAL`, or `NONE`
- **`ReturnItemCollectionMetrics` (string)**
  - Return collection metrics in response, can be set to: `SIZE`, or `NONE` (default)
- **`ReturnValues` (string)**
  - Return the item as it was prior to the operation taking place, can be set to `NONE` (default), `ALL_OLD`, `UPDATED_OLD`, `ALL_NEW`, `UPDATED_NEW`
- **`ReturnValuesOnConditionCheckFailure` (string)**
  - Return the item attributes that failed  a condition check, can be set to `NONE`, or `ALL_OLD`
- **`UpdateExpression` (string)**
  - Expression that defines attributes to be updated, the action to be performed on each, and their new values
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html#DDB-UpdateItem-request-UpdateExpression)


### `UpdateTable`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`AttributeDefinitions` (array)**
  - Array of attributes that describe the primary (and sort) schema for the table
- **`BillingMode` (string)**
  - Set how the table is charged for read/write throughput: `PROVISIONED`, or `PAY_PER_REQUEST`
- **`DeletionProtectionEnabled` (boolean)**
  - Enable or disable deletion protection
- **`GlobalSecondaryIndexUpdates` (array)**
  - Global secondary index updates, each of which may be: `Create`, `Update`, or `Delete`
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GlobalSecondaryIndexUpdate.html)
- **`ProvisionedThroughput` (object)**
  - Provisioned throughput setting
- **`ReplicaUpdates` (array)**
  - Table replica updates, each of which may be: `Create`, `Update`, or `Delete`
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ReplicationGroupUpdate.html)
- **`SSESpecification` (object)**
  - Server-side encryption settings
- **`StreamSpecification` (object)**
  - Settings for Streams, including: `StreamEnabled` (boolean), and `StreamViewType` (`KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, or `NEW_AND_OLD_IMAGES`)
- **`TableClass` (string)**
  - Class of the table, can be set to: `STANDARD`, or `STANDARD_INFREQUENT_ACCESS`


### `UpdateTableReplicaAutoScaling`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`GlobalSecondaryIndexUpdates` (array)**
  - Auto-scaling settings of the global secondary indexes of the replica
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GlobalSecondaryIndexAutoScalingUpdate.html)
- **`ProvisionedWriteCapacityAutoScalingUpdate` (object)**
  - Auto-scaling settings for a global table or global secondary index
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AutoScalingSettingsUpdate.html)
- **`ReplicaUpdates` (array)**
  - Auto=scaling settings of table replicas
  - [More details (AWS)](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ReplicaAutoScalingUpdate.html)


### `UpdateTimeToLive`

[Canonical AWS API doc](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html)

Properties:
- **`TableName` (string) [required]**
  - DynamoDB table name
- **`TimeToLiveSpecification` (object)**
  - TTL settings for the specified table
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

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
