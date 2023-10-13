import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  BatchExecuteStatementCommandInput as BatchExecuteStatementInput,
  BatchExecuteStatementCommandOutput as BatchExecuteStatementResponse,
  BeginTransactionCommandInput as BeginTransactionInput,
  BeginTransactionCommandOutput as BeginTransactionResponse,
  CommitTransactionCommandInput as CommitTransactionInput,
  CommitTransactionCommandOutput as CommitTransactionResponse,
  ExecuteStatementCommandInput as ExecuteStatementInput,
  ExecuteStatementCommandOutput as ExecuteStatementResponse,
  RollbackTransactionCommandInput as RollbackTransactionInput,
  RollbackTransactionCommandOutput as RollbackTransactionResponse,
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
  BatchExecuteStatement: (input: BatchExecuteStatementInput) => Promise<BatchExecuteStatementResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html RDS Data Service: BeginTransaction}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#BeginTransaction rds-data}
   */
  BeginTransaction: (input: BeginTransactionInput) => Promise<BeginTransactionResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html RDS Data Service: CommitTransaction}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#CommitTransaction rds-data}
   */
  CommitTransaction: (input: CommitTransactionInput) => Promise<CommitTransactionResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html RDS Data Service: ExecuteStatement}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#ExecuteStatement rds-data}
   */
  ExecuteStatement: (input: ExecuteStatementInput) => Promise<ExecuteStatementResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html RDS Data Service: RollbackTransaction}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/rds-data/readme.md#RollbackTransaction rds-data}
   */
  RollbackTransaction: (input: RollbackTransactionInput) => Promise<RollbackTransactionResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    'rds-data': AwsLiteRDSDataService;
  }
}
