# [`@aws-lite/rds-data`](https://aws-lite.org/services/rds-data)

> Official `aws-lite` plugin for RDS Data Service

> Maintained by: [@andybee](https://github.com/andybee)


## Install

```sh
npm i @aws-lite/rds-data
```

Optionally install types:

```sh
npm i -D @aws-lite/rds-data-types
```

## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/rds-data)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `BatchExecuteStatement`

[Canonical AWS API doc](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html)

Properties:
- **`database` (string)**
  - Name of the database
- **`parameterSets` (array)**
  - Parameter set for the batch operation
- **`resourceArn` (string) [required]**
  - Amazon Resource Name (ARN) of the Aurora Serverless DB cluster
- **`schema` (string)**
  - Name of the database schema
- **`secretArn` (string) [required]**
  - ARN of the secret that enables access to the DB cluster
- **`sql` (string) [required]**
  - SQL statement to run
- **`transactionId` (string)**
  - Transaction ID of the transaction that you want to include the SQL statement in


### `BeginTransaction`

[Canonical AWS API doc](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html)

Properties:
- **`database` (string)**
  - Name of the database
- **`resourceArn` (string) [required]**
  - Amazon Resource Name (ARN) of the Aurora Serverless DB cluster
- **`schema` (string)**
  - Name of the database schema
- **`secretArn` (string) [required]**
  - ARN of the secret that enables access to the DB cluster


### `CommitTransaction`

[Canonical AWS API doc](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html)

Properties:
- **`resourceArn` (string) [required]**
  - Amazon Resource Name (ARN) of the Aurora Serverless DB cluster
- **`secretArn` (string) [required]**
  - ARN of the secret that enables access to the DB cluster
- **`transactionId` (string) [required]**
  - Identifier of the transaction to end and commit


### `ExecuteStatement`

[Canonical AWS API doc](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html)

Properties:
- **`continueAfterTimeout` (boolean)**
  - Value that indicates whether to continue running the statement after the call times out
- **`database` (string)**
  - Name of the database
- **`formatRecordsAs` (string)**
  - Indicates whether to format the result set as a single JSON string: 'NONE', or 'JSON'
- **`includeResultMetadata` (boolean)**
  - Value that indicates whether to include metadata in the results
- **`parameters` (array)**
  - Parameters for the SQL statement
- **`resourceArn` (string) [required]**
  - Amazon Resource Name (ARN) of the Aurora Serverless DB cluster
- **`resultSetOptions` (object)**
  - Options that control how the result set is returned
- **`schema` (string)**
  - Name of the database schema
- **`secretArn` (string) [required]**
  - ARN of the secret that enables access to the DB cluster
- **`sql` (string) [required]**
  - SQL statement to run
- **`transactionId` (string)**
  - Transaction ID of the transaction that you want to include the SQL statement in


### `RollbackTransaction`

[Canonical AWS API doc](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html)

Properties:
- **`resourceArn` (string) [required]**
  - Amazon Resource Name (ARN) of the Aurora Serverless DB cluster
- **`secretArn` (string) [required]**
  - ARN of the secret that enables access to the DB cluster
- **`transactionId` (string) [required]**
  - Identifier of the transaction to roll back


### Deprecated methods

- [`ExecuteSql`](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteSql.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
