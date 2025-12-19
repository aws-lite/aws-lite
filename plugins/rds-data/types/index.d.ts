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

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLiteRDSData {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html RDS Data Service: BatchExecuteStatement}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/rds-data/readme.md#BatchExecuteStatement RDS Data Service: BatchExecuteStatement}
   */
  BatchExecuteStatement: (input: AwsLiteMethodOptions & { database?: string, parameterSets?: any[], resourceArn: string, schema?: string, secretArn: string, sql: string, transactionId?: string }) => Promise<BatchExecuteStatementResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html RDS Data Service: BeginTransaction}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/rds-data/readme.md#BeginTransaction RDS Data Service: BeginTransaction}
   */
  BeginTransaction: (input: AwsLiteMethodOptions & { database?: string, resourceArn: string, schema?: string, secretArn: string }) => Promise<BeginTransactionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html RDS Data Service: CommitTransaction}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/rds-data/readme.md#CommitTransaction RDS Data Service: CommitTransaction}
   */
  CommitTransaction: (input: AwsLiteMethodOptions & { resourceArn: string, secretArn: string, transactionId: string }) => Promise<CommitTransactionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html RDS Data Service: ExecuteStatement}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/rds-data/readme.md#ExecuteStatement RDS Data Service: ExecuteStatement}
   */
  ExecuteStatement: (input: AwsLiteMethodOptions & { continueAfterTimeout?: boolean, database?: string, formatRecordsAs?: string, includeResultMetadata?: boolean, parameters?: any[], resourceArn: string, resultSetOptions?: Record<string, any>, schema?: string, secretArn: string, sql: string, transactionId?: string }) => Promise<ExecuteStatementResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html RDS Data Service: RollbackTransaction}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/rds-data/readme.md#RollbackTransaction RDS Data Service: RollbackTransaction}
   */
  RollbackTransaction: (input: AwsLiteMethodOptions & { resourceArn: string, secretArn: string, transactionId: string }) => Promise<RollbackTransactionResponse>
  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/rds-data/readme.md#ExecuteSql RDS Data Service: ExecuteSql} */
  ExecuteSql: (input?: AwsLiteMethodOptions) => Promise<ExecuteSqlResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    RDSData: AwsLiteRDSData;
  }
}

export type {
  AwsLiteRDSData,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  BatchExecuteStatementResponse,
  BeginTransactionResponse,
  CommitTransactionResponse,
  ExecuteStatementResponse,
  RollbackTransactionResponse,
  ExecuteSqlResponse,
  // $EXPORT_END
}
