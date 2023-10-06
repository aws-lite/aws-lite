import {
  // $IMPORTS_START
  BatchExecuteStatementCommandOutput,
  BatchGetItemCommandOutput,
  BatchWriteItemCommandOutput,
  CreateBackupCommandOutput,
  CreateGlobalTableCommandOutput,
  CreateTableCommandOutput,
  DeleteBackupCommandOutput,
  DeleteItemCommandOutput,
  DeleteTableCommandOutput,
  DescribeBackupCommandOutput,
  DescribeContinuousBackupsCommandOutput,
  DescribeContributorInsightsCommandOutput,
  DescribeEndpointsCommandOutput,
  DescribeExportCommandOutput,
  DescribeGlobalTableCommandOutput,
  DescribeGlobalTableSettingsCommandOutput,
  DescribeImportCommandOutput,
  DescribeKinesisStreamingDestinationCommandOutput,
  DescribeLimitsCommandOutput,
  DescribeTableCommandOutput,
  DescribeTableReplicaAutoScalingCommandOutput,
  DescribeTimeToLiveCommandOutput,
  DisableKinesisStreamingDestinationCommandOutput,
  EnableKinesisStreamingDestinationCommandOutput,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommandOutput,
  ExportTableToPointInTimeCommandOutput,
  GetItemCommandOutput,
  ImportTableCommandOutput,
  ListBackupsCommandOutput,
  ListContributorInsightsCommandOutput,
  ListExportsCommandOutput,
  ListGlobalTablesCommandOutput,
  ListImportsCommandOutput,
  ListTablesCommandOutput,
  ListTagsOfResourceCommandOutput,
  PutItemCommandOutput,
  QueryCommandOutput,
  RestoreTableFromBackupCommandOutput,
  RestoreTableToPointInTimeCommandOutput,
  ScanCommandOutput,
  TagResourceCommandOutput,
  TransactGetItemsCommandOutput,
  TransactWriteItemsCommandOutput,
  UntagResourceCommandOutput,
  UpdateContinuousBackupsCommandOutput,
  UpdateContributorInsightsCommandOutput,
  UpdateGlobalTableCommandOutput,
  UpdateGlobalTableSettingsCommandOutput,
  UpdateItemCommandOutput,
  UpdateTableCommandOutput,
  UpdateTableReplicaAutoScalingCommandOutput,
  UpdateTimeToLiveCommandOutput,
  // $IMPORTS_END
} from "@aws-sdk/client-dynamodb";

declare interface AwsLiteDynamoDB {
  // $METHODS_START
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html} */
  BatchExecuteStatement: (input: { Statements: any[], ReturnConsumedCapacity?: string }) => Promise<BatchExecuteStatementCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html} */
  BatchGetItem: (input: { RequestItems: Record<string, any>, ReturnConsumedCapacity?: string }) => Promise<BatchGetItemCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html} */
  BatchWriteItem: (input: { RequestItems: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string }) => Promise<BatchWriteItemCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html} */
  CreateBackup: (input: { TableName: string, BackupName: string }) => Promise<CreateBackupCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html} */
  CreateGlobalTable: (input: { GlobalTableName: string, ReplicationGroup: any[] }) => Promise<CreateGlobalTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html} */
  CreateTable: (input: { TableName: string, AttributeDefinitions: any[], KeySchema: any[], BillingMode?: string, DeletionProtectionEnabled?: boolean, GlobalSecondaryIndexes?: any[], LocalSecondaryIndexes?: any[], ProvisionedThroughput?: Record<string, any>, SSESpecification?: Record<string, any>, StreamSpecification?: Record<string, any>, TableClass?: string, Tags?: any[] }) => Promise<CreateTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html} */
  DeleteBackup: (input: { BackupArn: string }) => Promise<DeleteBackupCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html} */
  DeleteItem: (input: { TableName: string, Key: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<DeleteItemCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html} */
  DeleteTable: (input: { TableName: string }) => Promise<DeleteTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html} */
  DescribeBackup: (input: { BackupArn: string }) => Promise<DescribeBackupCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html} */
  DescribeContinuousBackups: (input: { TableName: string }) => Promise<DescribeContinuousBackupsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html} */
  DescribeContributorInsights: (input: { TableName: string, IndexName?: string }) => Promise<DescribeContributorInsightsCommandOutput>
  DescribeEndpoints: () => Promise<DescribeEndpointsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html} */
  DescribeExport: (input: { ExportArn: string }) => Promise<DescribeExportCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html} */
  DescribeGlobalTable: (input: { GlobalTableName: string }) => Promise<DescribeGlobalTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html} */
  DescribeGlobalTableSettings: (input: { GlobalTableName: string }) => Promise<DescribeGlobalTableSettingsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html} */
  DescribeImport: (input: { ImportArn: string }) => Promise<DescribeImportCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html} */
  DescribeKinesisStreamingDestination: (input: { TableName: string }) => Promise<DescribeKinesisStreamingDestinationCommandOutput>
  DescribeLimits: () => Promise<DescribeLimitsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html} */
  DescribeTable: (input: { TableName: string }) => Promise<DescribeTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html} */
  DescribeTableReplicaAutoScaling: (input: { TableName: string }) => Promise<DescribeTableReplicaAutoScalingCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html} */
  DescribeTimeToLive: (input: { TableName: string }) => Promise<DescribeTimeToLiveCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html} */
  DisableKinesisStreamingDestination: (input: { TableName: string, StreamArn: string }) => Promise<DisableKinesisStreamingDestinationCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html} */
  EnableKinesisStreamingDestination: (input: { TableName: string, StreamArn: string }) => Promise<EnableKinesisStreamingDestinationCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html} */
  ExecuteStatement: (input: { TableName: string, Statement: string, ConsistentRead?: boolean, Limit?: number, NextToken?: string, Parameters?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<ExecuteStatementCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html} */
  ExecuteTransaction: (input: { TableName: string, TransactStatements: any[], ClientRequestToken?: string, ReturnConsumedCapacity?: string }) => Promise<ExecuteTransactionCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html} */
  ExportTableToPointInTime: (input: { S3Bucket: string, TableArn: string, ClientToken?: string, ExportFormat?: string, ExportTime?: number, S3BucketOwner?: string, S3Prefix?: string, S3SseAlgorithm?: string, S3SseKmsKeyId?: string }) => Promise<ExportTableToPointInTimeCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html} */
  GetItem: (input: { TableName: string, Key: Record<string, any>, AttributesToGet?: any[], ConsistentRead?: boolean, ExpressionAttributeNames?: Record<string, any>, ProjectionExpression?: string, ReturnConsumedCapacity?: string }) => Promise<GetItemCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html} */
  ImportTable: (input: { InputFormat: string, S3BucketSource: Record<string, any>, TableCreationParameters: Record<string, any>, ClientToken?: string, InputCompressionType?: string, InputFormatOptions?: Record<string, any> }) => Promise<ImportTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html} */
  ListBackups: (input: { BackupType?: string, ExclusiveStartBackupArn?: string, Limit?: number, TableName?: string, TimeRangeLowerBound?: number, TimeRangeUpperBound?: number }) => Promise<ListBackupsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html} */
  ListContributorInsights: (input: { MaxResults?: number, NextToken?: string, TableName?: string }) => Promise<ListContributorInsightsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html} */
  ListExports: (input: { MaxResults?: number, NextToken?: string, TableArn?: string }) => Promise<ListExportsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html} */
  ListGlobalTables: (input: { ExclusiveStartGlobalTableName?: string, Limit?: number, RegionName?: string }) => Promise<ListGlobalTablesCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html} */
  ListImports: (input: { NextToken?: string, PageSize?: number, TableArn?: string }) => Promise<ListImportsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html} */
  ListTables: (input: { ExclusiveStartTableName?: string, Limit?: number }) => Promise<ListTablesCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html} */
  ListTagsOfResource: (input: { NextToken?: string, ResourceArn: string }) => Promise<ListTagsOfResourceCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html} */
  PutItem: (input: { TableName: string, Item: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: string, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<PutItemCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html} */
  Query: (input: { TableName: string, AttributesToGet?: any[], ConditionalOperator?: string, ConsistentRead?: boolean, ExclusiveStartKey?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, FilterExpression?: string, IndexName?: string, KeyConditionExpression?: string, KeyConditions?: Record<string, any>, Limit?: number, ProjectionExpression?: string, QueryFilter?: Record<string, any>, ReturnConsumedCapacity?: string, ScanIndexForward?: boolean, Select?: string }) => Promise<QueryCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html} */
  RestoreTableFromBackup: (input: { BackupArn: string, TargetTableName: string, BillingModeOverride?: string, GlobalSecondaryIndexOverride?: any[], LocalSecondaryIndexOverride?: any[], ProvisionedThroughputOverride?: Record<string, any>, SSESpecificationOverride?: Record<string, any> }) => Promise<RestoreTableFromBackupCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html} */
  RestoreTableToPointInTime: (input: { TargetTableName: string, BillingModeOverride?: string, GlobalSecondaryIndexOverride?: any[], LocalSecondaryIndexOverride?: any[], ProvisionedThroughputOverride?: Record<string, any>, RestoreDateTime?: number, SourceTableArn?: string, SourceTableName?: string, SSESpecificationOverride?: Record<string, any>, UseLatestRestorableTime?: boolean }) => Promise<RestoreTableToPointInTimeCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html} */
  Scan: (input: { TableName: string, AttributesToGet?: any[], ConditionalOperator?: string, ConsistentRead?: boolean, ExclusiveStartKey?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, FilterExpression?: string, IndexName?: string, Limit?: number, ProjectionExpression?: string, ReturnConsumedCapacity?: string, ScanFilter?: Record<string, any>, Segment?: number, Select?: string, TotalSegments?: number }) => Promise<ScanCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html} */
  TagResource: (input: { ResourceArn: string, Tags: any[] }) => Promise<TagResourceCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html} */
  TransactGetItems: (input: { TransactItems?: any[], ReturnConsumedCapacity?: string }) => Promise<TransactGetItemsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html} */
  TransactWriteItems: (input: { TransactItems?: any[], ClientRequestToken?: string, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string }) => Promise<TransactWriteItemsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html} */
  UntagResource: (input: { ResourceArn: string, TagKeys: any[] }) => Promise<UntagResourceCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html} */
  UpdateContinuousBackups: (input: { TableName: string, PointInTimeRecoverySpecification?: Record<string, any> }) => Promise<UpdateContinuousBackupsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html} */
  UpdateContributorInsights: (input: { TableName: string, ContributorInsightsAction?: string, IndexName?: string }) => Promise<UpdateContributorInsightsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html} */
  UpdateGlobalTable: (input: { GlobalTableName: string, ReplicaUpdates?: any[] }) => Promise<UpdateGlobalTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html} */
  UpdateGlobalTableSettings: (input: { GlobalTableName: string, GlobalTableBillingMode?: string, GlobalTableGlobalSecondaryIndexSettingsUpdate?: any[], GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: Record<string, any>, GlobalTableProvisionedWriteCapacityUnits?: number, ReplicaSettingsUpdate?: any[] }) => Promise<UpdateGlobalTableSettingsCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html} */
  UpdateItem: (input: { Key: Record<string, any>, TableName: string, AttributeUpdates?: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string, UpdateExpression?: string }) => Promise<UpdateItemCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html} */
  UpdateTable: (input: { TableName: string, AttributeDefinitions?: any[], BillingMode?: string, DeletionProtectionEnabled?: boolean, GlobalSecondaryIndexUpdates?: any[], ProvisionedThroughput?: Record<string, any>, ReplicaUpdates?: any[], SSESpecification?: Record<string, any>, StreamSpecification?: Record<string, any>, TableClass?: string }) => Promise<UpdateTableCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html} */
  UpdateTableReplicaAutoScaling: (input: { TableName: string, GlobalSecondaryIndexUpdates?: any[], ProvisionedWriteCapacityAutoScalingUpdate?: Record<string, any>, ReplicaUpdates?: any[] }) => Promise<UpdateTableReplicaAutoScalingCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html} */
  UpdateTimeToLive: (input: { TableName: string, TimeToLiveSpecification?: Record<string, any> }) => Promise<UpdateTimeToLiveCommandOutput>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    dynamodb: AwsLiteDynamoDB;
  }
}
