/**
 * Plugin maintained by: @andybee
 */

import deprecated from './deprecated.mjs'

const service = 'rds-data'
const property = 'RDSData'
const required = true
const docRoot = 'https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/'

const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }

const database = { ...str, comment: 'Name of the database' }
const resourceArn = { ...str, required, comment: 'Amazon Resource Name (ARN) of the Aurora Serverless DB cluster' }
const schema = { ...str, comment: 'Name of the database schema' }
const secretArn = { ...str, required, comment: 'ARN of the secret that enables access to the DB cluster' }
const sql = { ...str, required, comment: 'SQL statement to run' }
const transactionId = { ...str, comment: 'Transaction ID of the transaction that you want to include the SQL statement in' }

const defaultResponse = ({ payload }) => payload

const BatchExecuteStatement = {
  awsDoc: docRoot + 'API_BatchExecuteStatement.html',
  validate: {
    database,
    parameterSets: { ...arr, comment: 'Parameter set for the batch operation' },
    resourceArn,
    schema,
    secretArn,
    sql,
    transactionId,
  },
  request: (payload) => ({
    method: 'POST',
    endpoint: '/BatchExecute',
    payload,
  }),
  response: defaultResponse,
}

const BeginTransaction = {
  awsDoc: docRoot + 'API_BeginTransaction.html',
  validate: {
    database,
    resourceArn,
    schema,
    secretArn,
  },
  request: (payload) => ({
    method: 'POST',
    endpoint: '/BeginTransaction',
    payload,
  }),
  response: defaultResponse,
}

const CommitTransaction = {
  awsDoc: docRoot + 'API_CommitTransaction.html',
  validate: {
    resourceArn,
    secretArn,
    transactionId: { ...transactionId, required, comment: 'Identifier of the transaction to end and commit' }
  },
  request: (payload) => ({
    method: 'POST',
    endpoint: '/CommitTransaction',
    payload,
  }),
  response: defaultResponse,
}

const ExecuteStatement = {
  awsDoc: docRoot + 'API_ExecuteStatement.html',
  validate: {
    continueAfterTimeout: { ...bool, comment: 'Value that indicates whether to continue running the statement after the call times out' },
    database,
    formatRecordsAs: { ...str, comment: 'Indicates whether to format the result set as a single JSON string: \'NONE\', or \'JSON\'' },
    includeResultMetadata: { ...bool, comment: 'Value that indicates whether to include metadata in the results' },
    parameters: { ...arr, comment: 'Parameters for the SQL statement' },
    resourceArn,
    resultSetOptions: { ...obj, comment: 'Options that control how the result set is returned' },
    schema,
    secretArn,
    sql,
    transactionId,
  },
  request: (payload) => ({
    method: 'POST',
    endpoint: '/Execute',
    payload,
  }),
  response: defaultResponse,
}

const RollbackTransaction = {
  awsDoc: docRoot + 'API_RollbackTransaction.html',
  validate: {
    resourceArn,
    secretArn,
    transactionId: { ...transactionId, required, comment: 'Identifier of the transaction to roll back' }
  },
  request: async (payload) => ({
    method: 'POST',
    endpoint: '/RollbackTransaction',
    payload,
  }),
  response: defaultResponse,
}

const methods = {
  BatchExecuteStatement,
  BeginTransaction,
  CommitTransaction,
  ExecuteStatement,
  RollbackTransaction,
  ...deprecated,
}

export default { service, property, methods }
