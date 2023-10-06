import {
  // $IMPORTS_START
  BatchExecuteStatementCommandOutput as BatchExecuteStatementResponse,
  BatchGetItemCommandOutput as BatchGetItemResponse,
  BatchWriteItemCommandOutput as BatchWriteItemResponse,
  CreateBackupCommandOutput as CreateBackupResponse,
  CreateGlobalTableCommandOutput as CreateGlobalTableResponse,
  CreateTableCommandOutput as CreateTableResponse,
  DeleteBackupCommandOutput as DeleteBackupResponse,
  DeleteItemCommandOutput as DeleteItemResponse,
  DeleteTableCommandOutput as DeleteTableResponse,
  DescribeBackupCommandOutput as DescribeBackupResponse,
  DescribeContinuousBackupsCommandOutput as DescribeContinuousBackupsResponse,
  DescribeContributorInsightsCommandOutput as DescribeContributorInsightsResponse,
  DescribeEndpointsCommandOutput as DescribeEndpointsResponse,
  DescribeExportCommandOutput as DescribeExportResponse,
  DescribeGlobalTableCommandOutput as DescribeGlobalTableResponse,
  DescribeGlobalTableSettingsCommandOutput as DescribeGlobalTableSettingsResponse,
  DescribeImportCommandOutput as DescribeImportResponse,
  DescribeKinesisStreamingDestinationCommandOutput as DescribeKinesisStreamingDestinationResponse,
  DescribeLimitsCommandOutput as DescribeLimitsResponse,
  DescribeTableCommandOutput as DescribeTableResponse,
  DescribeTableReplicaAutoScalingCommandOutput as DescribeTableReplicaAutoScalingResponse,
  DescribeTimeToLiveCommandOutput as DescribeTimeToLiveResponse,
  DisableKinesisStreamingDestinationCommandOutput as DisableKinesisStreamingDestinationResponse,
  EnableKinesisStreamingDestinationCommandOutput as EnableKinesisStreamingDestinationResponse,
  ExecuteStatementCommandOutput as ExecuteStatementResponse,
  ExecuteTransactionCommandOutput as ExecuteTransactionResponse,
  ExportTableToPointInTimeCommandOutput as ExportTableToPointInTimeResponse,
  GetItemCommandOutput as GetItemResponse,
  ImportTableCommandOutput as ImportTableResponse,
  ListBackupsCommandOutput as ListBackupsResponse,
  ListContributorInsightsCommandOutput as ListContributorInsightsResponse,
  ListExportsCommandOutput as ListExportsResponse,
  ListGlobalTablesCommandOutput as ListGlobalTablesResponse,
  ListImportsCommandOutput as ListImportsResponse,
  ListTablesCommandOutput as ListTablesResponse,
  ListTagsOfResourceCommandOutput as ListTagsOfResourceResponse,
  PutItemCommandOutput as PutItemResponse,
  QueryCommandOutput as QueryResponse,
  RestoreTableFromBackupCommandOutput as RestoreTableFromBackupResponse,
  RestoreTableToPointInTimeCommandOutput as RestoreTableToPointInTimeResponse,
  ScanCommandOutput as ScanResponse,
  TagResourceCommandOutput as TagResourceResponse,
  TransactGetItemsCommandOutput as TransactGetItemsResponse,
  TransactWriteItemsCommandOutput as TransactWriteItemsResponse,
  UntagResourceCommandOutput as UntagResourceResponse,
  UpdateContinuousBackupsCommandOutput as UpdateContinuousBackupsResponse,
  UpdateContributorInsightsCommandOutput as UpdateContributorInsightsResponse,
  UpdateGlobalTableCommandOutput as UpdateGlobalTableResponse,
  UpdateGlobalTableSettingsCommandOutput as UpdateGlobalTableSettingsResponse,
  UpdateItemCommandOutput as UpdateItemResponse,
  UpdateTableCommandOutput as UpdateTableResponse,
  UpdateTableReplicaAutoScalingCommandOutput as UpdateTableReplicaAutoScalingResponse,
  UpdateTimeToLiveCommandOutput as UpdateTimeToLiveResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-dynamodb";

declare interface AwsLiteDynamoDB {
  // $METHODS_START
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html DynamoDB: BatchExecuteStatement}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#BatchExecuteStatement dynamodb}
   */
  BatchExecuteStatement: (input: { Statements: any[], ReturnConsumedCapacity?: string }) => Promise<BatchExecuteStatementResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html DynamoDB: BatchGetItem}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#BatchGetItem dynamodb}
   */
  BatchGetItem: (input: { RequestItems: Record<string, any>, ReturnConsumedCapacity?: string }) => Promise<BatchGetItemResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html DynamoDB: BatchWriteItem}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#BatchWriteItem dynamodb}
   */
  BatchWriteItem: (input: { RequestItems: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string }) => Promise<BatchWriteItemResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html DynamoDB: CreateBackup}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#CreateBackup dynamodb}
   */
  CreateBackup: (input: { TableName: string, BackupName: string }) => Promise<CreateBackupResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html DynamoDB: CreateGlobalTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#CreateGlobalTable dynamodb}
   */
  CreateGlobalTable: (input: { GlobalTableName: string, ReplicationGroup: any[] }) => Promise<CreateGlobalTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html DynamoDB: CreateTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#CreateTable dynamodb}
   */
  CreateTable: (input: { TableName: string, AttributeDefinitions: any[], KeySchema: any[], BillingMode?: string, DeletionProtectionEnabled?: boolean, GlobalSecondaryIndexes?: any[], LocalSecondaryIndexes?: any[], ProvisionedThroughput?: Record<string, any>, SSESpecification?: Record<string, any>, StreamSpecification?: Record<string, any>, TableClass?: string, Tags?: any[] }) => Promise<CreateTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html DynamoDB: DeleteBackup}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DeleteBackup dynamodb}
   */
  DeleteBackup: (input: { BackupArn: string }) => Promise<DeleteBackupResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html DynamoDB: DeleteItem}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DeleteItem dynamodb}
   */
  DeleteItem: (input: { TableName: string, Key: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<DeleteItemResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html DynamoDB: DeleteTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DeleteTable dynamodb}
   */
  DeleteTable: (input: { TableName: string }) => Promise<DeleteTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html DynamoDB: DescribeBackup}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeBackup dynamodb}
   */
  DescribeBackup: (input: { BackupArn: string }) => Promise<DescribeBackupResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html DynamoDB: DescribeContinuousBackups}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeContinuousBackups dynamodb}
   */
  DescribeContinuousBackups: (input: { TableName: string }) => Promise<DescribeContinuousBackupsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html DynamoDB: DescribeContributorInsights}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeContributorInsights dynamodb}
   */
  DescribeContributorInsights: (input: { TableName: string, IndexName?: string }) => Promise<DescribeContributorInsightsResponse>
  /** @description aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeEndpoints dynamodb} */
  DescribeEndpoints: () => Promise<DescribeEndpointsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html DynamoDB: DescribeExport}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeExport dynamodb}
   */
  DescribeExport: (input: { ExportArn: string }) => Promise<DescribeExportResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html DynamoDB: DescribeGlobalTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeGlobalTable dynamodb}
   */
  DescribeGlobalTable: (input: { GlobalTableName: string }) => Promise<DescribeGlobalTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html DynamoDB: DescribeGlobalTableSettings}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeGlobalTableSettings dynamodb}
   */
  DescribeGlobalTableSettings: (input: { GlobalTableName: string }) => Promise<DescribeGlobalTableSettingsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html DynamoDB: DescribeImport}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeImport dynamodb}
   */
  DescribeImport: (input: { ImportArn: string }) => Promise<DescribeImportResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html DynamoDB: DescribeKinesisStreamingDestination}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeKinesisStreamingDestination dynamodb}
   */
  DescribeKinesisStreamingDestination: (input: { TableName: string }) => Promise<DescribeKinesisStreamingDestinationResponse>
  /** @description aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeLimits dynamodb} */
  DescribeLimits: () => Promise<DescribeLimitsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html DynamoDB: DescribeTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeTable dynamodb}
   */
  DescribeTable: (input: { TableName: string }) => Promise<DescribeTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html DynamoDB: DescribeTableReplicaAutoScaling}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeTableReplicaAutoScaling dynamodb}
   */
  DescribeTableReplicaAutoScaling: (input: { TableName: string }) => Promise<DescribeTableReplicaAutoScalingResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html DynamoDB: DescribeTimeToLive}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeTimeToLive dynamodb}
   */
  DescribeTimeToLive: (input: { TableName: string }) => Promise<DescribeTimeToLiveResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html DynamoDB: DisableKinesisStreamingDestination}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#DisableKinesisStreamingDestination dynamodb}
   */
  DisableKinesisStreamingDestination: (input: { TableName: string, StreamArn: string }) => Promise<DisableKinesisStreamingDestinationResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html DynamoDB: EnableKinesisStreamingDestination}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#EnableKinesisStreamingDestination dynamodb}
   */
  EnableKinesisStreamingDestination: (input: { TableName: string, StreamArn: string }) => Promise<EnableKinesisStreamingDestinationResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html DynamoDB: ExecuteStatement}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ExecuteStatement dynamodb}
   */
  ExecuteStatement: (input: { TableName: string, Statement: string, ConsistentRead?: boolean, Limit?: number, NextToken?: string, Parameters?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<ExecuteStatementResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html DynamoDB: ExecuteTransaction}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ExecuteTransaction dynamodb}
   */
  ExecuteTransaction: (input: { TableName: string, TransactStatements: any[], ClientRequestToken?: string, ReturnConsumedCapacity?: string }) => Promise<ExecuteTransactionResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html DynamoDB: ExportTableToPointInTime}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ExportTableToPointInTime dynamodb}
   */
  ExportTableToPointInTime: (input: { S3Bucket: string, TableArn: string, ClientToken?: string, ExportFormat?: string, ExportTime?: number, S3BucketOwner?: string, S3Prefix?: string, S3SseAlgorithm?: string, S3SseKmsKeyId?: string }) => Promise<ExportTableToPointInTimeResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html DynamoDB: GetItem}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#GetItem dynamodb}
   */
  GetItem: (input: { TableName: string, Key: Record<string, any>, AttributesToGet?: any[], ConsistentRead?: boolean, ExpressionAttributeNames?: Record<string, any>, ProjectionExpression?: string, ReturnConsumedCapacity?: string }) => Promise<GetItemResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html DynamoDB: ImportTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ImportTable dynamodb}
   */
  ImportTable: (input: { InputFormat: string, S3BucketSource: Record<string, any>, TableCreationParameters: Record<string, any>, ClientToken?: string, InputCompressionType?: string, InputFormatOptions?: Record<string, any> }) => Promise<ImportTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html DynamoDB: ListBackups}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ListBackups dynamodb}
   */
  ListBackups: (input: { BackupType?: string, ExclusiveStartBackupArn?: string, Limit?: number, TableName?: string, TimeRangeLowerBound?: number, TimeRangeUpperBound?: number }) => Promise<ListBackupsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html DynamoDB: ListContributorInsights}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ListContributorInsights dynamodb}
   */
  ListContributorInsights: (input: { MaxResults?: number, NextToken?: string, TableName?: string }) => Promise<ListContributorInsightsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html DynamoDB: ListExports}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ListExports dynamodb}
   */
  ListExports: (input: { MaxResults?: number, NextToken?: string, TableArn?: string }) => Promise<ListExportsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html DynamoDB: ListGlobalTables}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ListGlobalTables dynamodb}
   */
  ListGlobalTables: (input: { ExclusiveStartGlobalTableName?: string, Limit?: number, RegionName?: string }) => Promise<ListGlobalTablesResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html DynamoDB: ListImports}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ListImports dynamodb}
   */
  ListImports: (input: { NextToken?: string, PageSize?: number, TableArn?: string }) => Promise<ListImportsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html DynamoDB: ListTables}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ListTables dynamodb}
   */
  ListTables: (input: { ExclusiveStartTableName?: string, Limit?: number }) => Promise<ListTablesResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html DynamoDB: ListTagsOfResource}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#ListTagsOfResource dynamodb}
   */
  ListTagsOfResource: (input: { NextToken?: string, ResourceArn: string }) => Promise<ListTagsOfResourceResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html DynamoDB: PutItem}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#PutItem dynamodb}
   */
  PutItem: (input: { TableName: string, Item: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: string, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<PutItemResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html DynamoDB: Query}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#Query dynamodb}
   */
  Query: (input: { TableName: string, AttributesToGet?: any[], ConditionalOperator?: string, ConsistentRead?: boolean, ExclusiveStartKey?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, FilterExpression?: string, IndexName?: string, KeyConditionExpression?: string, KeyConditions?: Record<string, any>, Limit?: number, ProjectionExpression?: string, QueryFilter?: Record<string, any>, ReturnConsumedCapacity?: string, ScanIndexForward?: boolean, Select?: string, paginate?: boolean }) => Promise<QueryResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html DynamoDB: RestoreTableFromBackup}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#RestoreTableFromBackup dynamodb}
   */
  RestoreTableFromBackup: (input: { BackupArn: string, TargetTableName: string, BillingModeOverride?: string, GlobalSecondaryIndexOverride?: any[], LocalSecondaryIndexOverride?: any[], ProvisionedThroughputOverride?: Record<string, any>, SSESpecificationOverride?: Record<string, any> }) => Promise<RestoreTableFromBackupResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html DynamoDB: RestoreTableToPointInTime}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#RestoreTableToPointInTime dynamodb}
   */
  RestoreTableToPointInTime: (input: { TargetTableName: string, BillingModeOverride?: string, GlobalSecondaryIndexOverride?: any[], LocalSecondaryIndexOverride?: any[], ProvisionedThroughputOverride?: Record<string, any>, RestoreDateTime?: number, SourceTableArn?: string, SourceTableName?: string, SSESpecificationOverride?: Record<string, any>, UseLatestRestorableTime?: boolean }) => Promise<RestoreTableToPointInTimeResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html DynamoDB: Scan}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#Scan dynamodb}
   */
  Scan: (input: { TableName: string, AttributesToGet?: any[], ConditionalOperator?: string, ConsistentRead?: boolean, ExclusiveStartKey?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, FilterExpression?: string, IndexName?: string, Limit?: number, ProjectionExpression?: string, ReturnConsumedCapacity?: string, ScanFilter?: Record<string, any>, Segment?: number, Select?: string, TotalSegments?: number, paginate?: boolean }) => Promise<ScanResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html DynamoDB: TagResource}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#TagResource dynamodb}
   */
  TagResource: (input: { ResourceArn: string, Tags: any[] }) => Promise<TagResourceResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html DynamoDB: TransactGetItems}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#TransactGetItems dynamodb}
   */
  TransactGetItems: (input: { TransactItems?: any[], ReturnConsumedCapacity?: string }) => Promise<TransactGetItemsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html DynamoDB: TransactWriteItems}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#TransactWriteItems dynamodb}
   */
  TransactWriteItems: (input: { TransactItems?: any[], ClientRequestToken?: string, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string }) => Promise<TransactWriteItemsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html DynamoDB: UntagResource}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UntagResource dynamodb}
   */
  UntagResource: (input: { ResourceArn: string, TagKeys: any[] }) => Promise<UntagResourceResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html DynamoDB: UpdateContinuousBackups}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateContinuousBackups dynamodb}
   */
  UpdateContinuousBackups: (input: { TableName: string, PointInTimeRecoverySpecification?: Record<string, any> }) => Promise<UpdateContinuousBackupsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html DynamoDB: UpdateContributorInsights}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateContributorInsights dynamodb}
   */
  UpdateContributorInsights: (input: { TableName: string, ContributorInsightsAction?: string, IndexName?: string }) => Promise<UpdateContributorInsightsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html DynamoDB: UpdateGlobalTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateGlobalTable dynamodb}
   */
  UpdateGlobalTable: (input: { GlobalTableName: string, ReplicaUpdates?: any[] }) => Promise<UpdateGlobalTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html DynamoDB: UpdateGlobalTableSettings}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateGlobalTableSettings dynamodb}
   */
  UpdateGlobalTableSettings: (input: { GlobalTableName: string, GlobalTableBillingMode?: string, GlobalTableGlobalSecondaryIndexSettingsUpdate?: any[], GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: Record<string, any>, GlobalTableProvisionedWriteCapacityUnits?: number, ReplicaSettingsUpdate?: any[] }) => Promise<UpdateGlobalTableSettingsResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html DynamoDB: UpdateItem}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateItem dynamodb}
   */
  UpdateItem: (input: { Key: Record<string, any>, TableName: string, AttributeUpdates?: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string, UpdateExpression?: string }) => Promise<UpdateItemResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html DynamoDB: UpdateTable}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateTable dynamodb}
   */
  UpdateTable: (input: { TableName: string, AttributeDefinitions?: any[], BillingMode?: string, DeletionProtectionEnabled?: boolean, GlobalSecondaryIndexUpdates?: any[], ProvisionedThroughput?: Record<string, any>, ReplicaUpdates?: any[], SSESpecification?: Record<string, any>, StreamSpecification?: Record<string, any>, TableClass?: string }) => Promise<UpdateTableResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html DynamoDB: UpdateTableReplicaAutoScaling}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateTableReplicaAutoScaling dynamodb}
   */
  UpdateTableReplicaAutoScaling: (input: { TableName: string, GlobalSecondaryIndexUpdates?: any[], ProvisionedWriteCapacityAutoScalingUpdate?: Record<string, any>, ReplicaUpdates?: any[] }) => Promise<UpdateTableReplicaAutoScalingResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html DynamoDB: UpdateTimeToLive}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateTimeToLive dynamodb}
   */
  UpdateTimeToLive: (input: { TableName: string, TimeToLiveSpecification?: Record<string, any> }) => Promise<UpdateTimeToLiveResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    dynamodb: AwsLiteDynamoDB;
  }
}
