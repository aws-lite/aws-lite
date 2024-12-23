import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
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
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html DynamoDB: BatchExecuteStatement}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#BatchExecuteStatement DynamoDB: BatchExecuteStatement}
   */
  BatchExecuteStatement: (input: { Statements: any[], ReturnConsumedCapacity?: string }) => Promise<BatchExecuteStatementResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html DynamoDB: BatchGetItem}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#BatchGetItem DynamoDB: BatchGetItem}
   */
  BatchGetItem: (input: { RequestItems: Record<string, any>, ReturnConsumedCapacity?: string }) => Promise<BatchGetItemResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html DynamoDB: BatchWriteItem}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#BatchWriteItem DynamoDB: BatchWriteItem}
   */
  BatchWriteItem: (input: { RequestItems: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string }) => Promise<BatchWriteItemResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html DynamoDB: CreateBackup}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#CreateBackup DynamoDB: CreateBackup}
   */
  CreateBackup: (input: { TableName: string, BackupName: string }) => Promise<CreateBackupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html DynamoDB: CreateGlobalTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#CreateGlobalTable DynamoDB: CreateGlobalTable}
   */
  CreateGlobalTable: (input: { GlobalTableName: string, ReplicationGroup: any[] }) => Promise<CreateGlobalTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html DynamoDB: CreateTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#CreateTable DynamoDB: CreateTable}
   */
  CreateTable: (input: { TableName: string, AttributeDefinitions: any[], KeySchema: any[], BillingMode?: string, DeletionProtectionEnabled?: boolean, GlobalSecondaryIndexes?: any[], LocalSecondaryIndexes?: any[], ProvisionedThroughput?: Record<string, any>, SSESpecification?: Record<string, any>, StreamSpecification?: Record<string, any>, TableClass?: string, Tags?: any[] }) => Promise<CreateTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html DynamoDB: DeleteBackup}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DeleteBackup DynamoDB: DeleteBackup}
   */
  DeleteBackup: (input: { BackupArn: string }) => Promise<DeleteBackupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html DynamoDB: DeleteItem}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DeleteItem DynamoDB: DeleteItem}
   */
  DeleteItem: (input: { TableName: string, Key: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<DeleteItemResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html DynamoDB: DeleteTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DeleteTable DynamoDB: DeleteTable}
   */
  DeleteTable: (input: { TableName: string }) => Promise<DeleteTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html DynamoDB: DescribeBackup}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeBackup DynamoDB: DescribeBackup}
   */
  DescribeBackup: (input: { BackupArn: string }) => Promise<DescribeBackupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html DynamoDB: DescribeContinuousBackups}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeContinuousBackups DynamoDB: DescribeContinuousBackups}
   */
  DescribeContinuousBackups: (input: { TableName: string }) => Promise<DescribeContinuousBackupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html DynamoDB: DescribeContributorInsights}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeContributorInsights DynamoDB: DescribeContributorInsights}
   */
  DescribeContributorInsights: (input: { TableName: string, IndexName?: string }) => Promise<DescribeContributorInsightsResponse>
  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeEndpoints DynamoDB: DescribeEndpoints} */
  DescribeEndpoints: () => Promise<DescribeEndpointsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html DynamoDB: DescribeExport}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeExport DynamoDB: DescribeExport}
   */
  DescribeExport: (input: { ExportArn: string }) => Promise<DescribeExportResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html DynamoDB: DescribeGlobalTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeGlobalTable DynamoDB: DescribeGlobalTable}
   */
  DescribeGlobalTable: (input: { GlobalTableName: string }) => Promise<DescribeGlobalTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html DynamoDB: DescribeGlobalTableSettings}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeGlobalTableSettings DynamoDB: DescribeGlobalTableSettings}
   */
  DescribeGlobalTableSettings: (input: { GlobalTableName: string }) => Promise<DescribeGlobalTableSettingsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html DynamoDB: DescribeImport}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeImport DynamoDB: DescribeImport}
   */
  DescribeImport: (input: { ImportArn: string }) => Promise<DescribeImportResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html DynamoDB: DescribeKinesisStreamingDestination}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeKinesisStreamingDestination DynamoDB: DescribeKinesisStreamingDestination}
   */
  DescribeKinesisStreamingDestination: (input: { TableName: string }) => Promise<DescribeKinesisStreamingDestinationResponse>
  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeLimits DynamoDB: DescribeLimits} */
  DescribeLimits: () => Promise<DescribeLimitsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html DynamoDB: DescribeTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeTable DynamoDB: DescribeTable}
   */
  DescribeTable: (input: { TableName: string }) => Promise<DescribeTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html DynamoDB: DescribeTableReplicaAutoScaling}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeTableReplicaAutoScaling DynamoDB: DescribeTableReplicaAutoScaling}
   */
  DescribeTableReplicaAutoScaling: (input: { TableName: string }) => Promise<DescribeTableReplicaAutoScalingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html DynamoDB: DescribeTimeToLive}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DescribeTimeToLive DynamoDB: DescribeTimeToLive}
   */
  DescribeTimeToLive: (input: { TableName: string }) => Promise<DescribeTimeToLiveResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html DynamoDB: DisableKinesisStreamingDestination}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#DisableKinesisStreamingDestination DynamoDB: DisableKinesisStreamingDestination}
   */
  DisableKinesisStreamingDestination: (input: { TableName: string, StreamArn: string }) => Promise<DisableKinesisStreamingDestinationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html DynamoDB: EnableKinesisStreamingDestination}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#EnableKinesisStreamingDestination DynamoDB: EnableKinesisStreamingDestination}
   */
  EnableKinesisStreamingDestination: (input: { TableName: string, StreamArn: string }) => Promise<EnableKinesisStreamingDestinationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html DynamoDB: ExecuteStatement}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ExecuteStatement DynamoDB: ExecuteStatement}
   */
  ExecuteStatement: (input: { TableName: string, Statement: string, ConsistentRead?: boolean, Limit?: number, NextToken?: string, Parameters?: any[], ReturnConsumedCapacity?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<ExecuteStatementResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html DynamoDB: ExecuteTransaction}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ExecuteTransaction DynamoDB: ExecuteTransaction}
   */
  ExecuteTransaction: (input: { TableName: string, TransactStatements: any[], ClientRequestToken?: string, ReturnConsumedCapacity?: string }) => Promise<ExecuteTransactionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html DynamoDB: ExportTableToPointInTime}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ExportTableToPointInTime DynamoDB: ExportTableToPointInTime}
   */
  ExportTableToPointInTime: (input: { S3Bucket: string, TableArn: string, ClientToken?: string, ExportFormat?: string, ExportTime?: number, S3BucketOwner?: string, S3Prefix?: string, S3SseAlgorithm?: string, S3SseKmsKeyId?: string }) => Promise<ExportTableToPointInTimeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html DynamoDB: GetItem}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#GetItem DynamoDB: GetItem}
   */
  GetItem: (input: { TableName: string, Key: Record<string, any>, AttributesToGet?: any[], ConsistentRead?: boolean, ExpressionAttributeNames?: Record<string, any>, ProjectionExpression?: string, ReturnConsumedCapacity?: string }) => Promise<GetItemResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html DynamoDB: ImportTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ImportTable DynamoDB: ImportTable}
   */
  ImportTable: (input: { InputFormat: string, S3BucketSource: Record<string, any>, TableCreationParameters: Record<string, any>, ClientToken?: string, InputCompressionType?: string, InputFormatOptions?: Record<string, any> }) => Promise<ImportTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html DynamoDB: ListBackups}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ListBackups DynamoDB: ListBackups}
   */
  ListBackups: (input: { BackupType?: string, ExclusiveStartBackupArn?: string, Limit?: number, TableName?: string, TimeRangeLowerBound?: number, TimeRangeUpperBound?: number, paginate?: boolean | string }) => Promise<ListBackupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html DynamoDB: ListContributorInsights}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ListContributorInsights DynamoDB: ListContributorInsights}
   */
  ListContributorInsights: (input: { MaxResults?: number, NextToken?: string, TableName?: string }) => Promise<ListContributorInsightsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html DynamoDB: ListExports}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ListExports DynamoDB: ListExports}
   */
  ListExports: (input: { MaxResults?: number, NextToken?: string, TableArn?: string }) => Promise<ListExportsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html DynamoDB: ListGlobalTables}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ListGlobalTables DynamoDB: ListGlobalTables}
   */
  ListGlobalTables: (input: { ExclusiveStartGlobalTableName?: string, Limit?: number, RegionName?: string }) => Promise<ListGlobalTablesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html DynamoDB: ListImports}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ListImports DynamoDB: ListImports}
   */
  ListImports: (input: { NextToken?: string, PageSize?: number, TableArn?: string }) => Promise<ListImportsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html DynamoDB: ListTables}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ListTables DynamoDB: ListTables}
   */
  ListTables: (input: { ExclusiveStartTableName?: string, Limit?: number }) => Promise<ListTablesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html DynamoDB: ListTagsOfResource}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#ListTagsOfResource DynamoDB: ListTagsOfResource}
   */
  ListTagsOfResource: (input: { NextToken?: string, ResourceArn: string }) => Promise<ListTagsOfResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html DynamoDB: PutItem}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#PutItem DynamoDB: PutItem}
   */
  PutItem: (input: { TableName: string, Item: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string }) => Promise<PutItemResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html DynamoDB: Query}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#Query DynamoDB: Query}
   */
  Query: (input: { TableName: string, AttributesToGet?: any[], ConditionalOperator?: string, ConsistentRead?: boolean, ExclusiveStartKey?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, FilterExpression?: string, IndexName?: string, KeyConditionExpression?: string, KeyConditions?: Record<string, any>, Limit?: number, ProjectionExpression?: string, QueryFilter?: Record<string, any>, ReturnConsumedCapacity?: string, ScanIndexForward?: boolean, Select?: string, paginate?: boolean | string }) => Promise<QueryResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html DynamoDB: RestoreTableFromBackup}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#RestoreTableFromBackup DynamoDB: RestoreTableFromBackup}
   */
  RestoreTableFromBackup: (input: { BackupArn: string, TargetTableName: string, BillingModeOverride?: string, GlobalSecondaryIndexOverride?: any[], LocalSecondaryIndexOverride?: any[], ProvisionedThroughputOverride?: Record<string, any>, SSESpecificationOverride?: Record<string, any> }) => Promise<RestoreTableFromBackupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html DynamoDB: RestoreTableToPointInTime}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#RestoreTableToPointInTime DynamoDB: RestoreTableToPointInTime}
   */
  RestoreTableToPointInTime: (input: { TargetTableName: string, BillingModeOverride?: string, GlobalSecondaryIndexOverride?: any[], LocalSecondaryIndexOverride?: any[], ProvisionedThroughputOverride?: Record<string, any>, RestoreDateTime?: number, SourceTableArn?: string, SourceTableName?: string, SSESpecificationOverride?: Record<string, any>, UseLatestRestorableTime?: boolean }) => Promise<RestoreTableToPointInTimeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html DynamoDB: Scan}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#Scan DynamoDB: Scan}
   */
  Scan: (input: { TableName: string, AttributesToGet?: any[], ConditionalOperator?: string, ConsistentRead?: boolean, ExclusiveStartKey?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, FilterExpression?: string, IndexName?: string, Limit?: number, ProjectionExpression?: string, ReturnConsumedCapacity?: string, ScanFilter?: Record<string, any>, Segment?: number, Select?: string, TotalSegments?: number, paginate?: boolean | string }) => Promise<ScanResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html DynamoDB: TagResource}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#TagResource DynamoDB: TagResource}
   */
  TagResource: (input: { ResourceArn: string, Tags: any[] }) => Promise<TagResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html DynamoDB: TransactGetItems}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#TransactGetItems DynamoDB: TransactGetItems}
   */
  TransactGetItems: (input: { TransactItems: any[], ReturnConsumedCapacity?: string }) => Promise<TransactGetItemsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html DynamoDB: TransactWriteItems}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#TransactWriteItems DynamoDB: TransactWriteItems}
   */
  TransactWriteItems: (input: { TransactItems: any[], ClientRequestToken?: string, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string }) => Promise<TransactWriteItemsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html DynamoDB: UntagResource}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UntagResource DynamoDB: UntagResource}
   */
  UntagResource: (input: { ResourceArn: string, TagKeys: any[] }) => Promise<UntagResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html DynamoDB: UpdateContinuousBackups}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateContinuousBackups DynamoDB: UpdateContinuousBackups}
   */
  UpdateContinuousBackups: (input: { TableName: string, PointInTimeRecoverySpecification?: Record<string, any> }) => Promise<UpdateContinuousBackupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html DynamoDB: UpdateContributorInsights}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateContributorInsights DynamoDB: UpdateContributorInsights}
   */
  UpdateContributorInsights: (input: { TableName: string, ContributorInsightsAction?: string, IndexName?: string }) => Promise<UpdateContributorInsightsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html DynamoDB: UpdateGlobalTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateGlobalTable DynamoDB: UpdateGlobalTable}
   */
  UpdateGlobalTable: (input: { GlobalTableName: string, ReplicaUpdates?: any[] }) => Promise<UpdateGlobalTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html DynamoDB: UpdateGlobalTableSettings}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateGlobalTableSettings DynamoDB: UpdateGlobalTableSettings}
   */
  UpdateGlobalTableSettings: (input: { GlobalTableName: string, GlobalTableBillingMode?: string, GlobalTableGlobalSecondaryIndexSettingsUpdate?: any[], GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: Record<string, any>, GlobalTableProvisionedWriteCapacityUnits?: number, ReplicaSettingsUpdate?: any[] }) => Promise<UpdateGlobalTableSettingsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html DynamoDB: UpdateItem}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateItem DynamoDB: UpdateItem}
   */
  UpdateItem: (input: { Key: Record<string, any>, TableName: string, AttributeUpdates?: Record<string, any>, ConditionalOperator?: string, ConditionExpression?: string, Expected?: Record<string, any>, ExpressionAttributeNames?: Record<string, any>, ExpressionAttributeValues?: Record<string, any>, ReturnConsumedCapacity?: string, ReturnItemCollectionMetrics?: string, ReturnValues?: string, ReturnValuesOnConditionCheckFailure?: string, UpdateExpression?: string }) => Promise<UpdateItemResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html DynamoDB: UpdateTable}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateTable DynamoDB: UpdateTable}
   */
  UpdateTable: (input: { TableName: string, AttributeDefinitions?: any[], BillingMode?: string, DeletionProtectionEnabled?: boolean, GlobalSecondaryIndexUpdates?: any[], ProvisionedThroughput?: Record<string, any>, ReplicaUpdates?: any[], SSESpecification?: Record<string, any>, StreamSpecification?: Record<string, any>, TableClass?: string }) => Promise<UpdateTableResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html DynamoDB: UpdateTableReplicaAutoScaling}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateTableReplicaAutoScaling DynamoDB: UpdateTableReplicaAutoScaling}
   */
  UpdateTableReplicaAutoScaling: (input: { TableName: string, GlobalSecondaryIndexUpdates?: any[], ProvisionedWriteCapacityAutoScalingUpdate?: Record<string, any>, ReplicaUpdates?: any[] }) => Promise<UpdateTableReplicaAutoScalingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html DynamoDB: UpdateTimeToLive}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/dynamodb/readme.md#UpdateTimeToLive DynamoDB: UpdateTimeToLive}
   */
  UpdateTimeToLive: (input: { TableName: string, TimeToLiveSpecification?: Record<string, any> }) => Promise<UpdateTimeToLiveResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    DynamoDB: AwsLiteDynamoDB;
  }
}

export type {
  AwsLiteDynamoDB,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  BatchExecuteStatementResponse,
  BatchGetItemResponse,
  BatchWriteItemResponse,
  CreateBackupResponse,
  CreateGlobalTableResponse,
  CreateTableResponse,
  DeleteBackupResponse,
  DeleteItemResponse,
  DeleteTableResponse,
  DescribeBackupResponse,
  DescribeContinuousBackupsResponse,
  DescribeContributorInsightsResponse,
  DescribeEndpointsResponse,
  DescribeExportResponse,
  DescribeGlobalTableResponse,
  DescribeGlobalTableSettingsResponse,
  DescribeImportResponse,
  DescribeKinesisStreamingDestinationResponse,
  DescribeLimitsResponse,
  DescribeTableResponse,
  DescribeTableReplicaAutoScalingResponse,
  DescribeTimeToLiveResponse,
  DisableKinesisStreamingDestinationResponse,
  EnableKinesisStreamingDestinationResponse,
  ExecuteStatementResponse,
  ExecuteTransactionResponse,
  ExportTableToPointInTimeResponse,
  GetItemResponse,
  ImportTableResponse,
  ListBackupsResponse,
  ListContributorInsightsResponse,
  ListExportsResponse,
  ListGlobalTablesResponse,
  ListImportsResponse,
  ListTablesResponse,
  ListTagsOfResourceResponse,
  PutItemResponse,
  QueryResponse,
  RestoreTableFromBackupResponse,
  RestoreTableToPointInTimeResponse,
  ScanResponse,
  TagResourceResponse,
  TransactGetItemsResponse,
  TransactWriteItemsResponse,
  UntagResourceResponse,
  UpdateContinuousBackupsResponse,
  UpdateContributorInsightsResponse,
  UpdateGlobalTableResponse,
  UpdateGlobalTableSettingsResponse,
  UpdateItemResponse,
  UpdateTableResponse,
  UpdateTableReplicaAutoScalingResponse,
  UpdateTimeToLiveResponse,
  // $EXPORT_END
}
