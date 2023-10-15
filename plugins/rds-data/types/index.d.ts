import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  BatchExecuteStatementCommandOutput as BatchExecuteStatementResponse,
  BeginTransactionCommandOutput as BeginTransactionResponse,
  CommitTransactionCommandOutput as CommitTransactionResponse,
  ExecuteStatementCommandOutput as ExecuteStatementResponse,
  RollbackTransactionCommandOutput as RollbackTransactionResponse,
  ExecuteSqlCommandOutput as ExecuteSqlResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-rds-data";

declare interface AwsLiteRDSDataService {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html RDS Data Service: BatchExecuteStatement}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#BatchExecuteStatement rds-data}
   */
  BatchExecuteStatement: (input: { database?: string, parameterSets?: any[], resourceArn: string, schema?: string, secretArn: string, sql: string, transactionId?: string }) => Promise<BatchExecuteStatementResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html RDS Data Service: BeginTransaction}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#BeginTransaction rds-data}
   */
  BeginTransaction: (input: { database?: string, resourceArn: string, schema?: string, secretArn: string }) => Promise<BeginTransactionResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html RDS Data Service: CommitTransaction}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#CommitTransaction rds-data}
   */
  CommitTransaction: (input: { resourceArn: string, secretArn: string, transactionId: string }) => Promise<CommitTransactionResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html RDS Data Service: ExecuteStatement}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#ExecuteStatement rds-data}
   */
  ExecuteStatement: (input: { continueAfterTimeout?: boolean, database?: string, formatRecordsAs?: string, includeResultMetadata?: boolean, parameters?: any[], resourceArn: string, resultSetOptions?: Record<string, any>, schema?: string, secretArn: string, sql: string, transactionId?: string }) => Promise<ExecuteStatementResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html RDS Data Service: RollbackTransaction}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#RollbackTransaction rds-data}
   */
  RollbackTransaction: (input: { resourceArn: string, secretArn: string, transactionId: string }) => Promise<RollbackTransactionResponse>
  /** @description aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#ExecuteSql rds-data} */
  ExecuteSql: () => Promise<ExecuteSqlResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    'rds-data': AwsLiteRDSDataService;
  }
}
