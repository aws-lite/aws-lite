import { expectType, expectAssignable } from 'tsd'

// These tests verify that aws-lite types are accessible in the ways that both JavaScript (with JSDoc) and TypeScript consumers expect

// Pattern 1: CommonJS-style import (used in Node.js, TypeScript with module: commonjs)
import awsLite = require('@aws-lite/client')

// Test: All types accessible via namespace
expectAssignable<awsLite.AwsLiteConfig>({ region: 'us-west-2' })
expectAssignable<awsLite.AwsLiteRequest>({ service: 's3', path: '/' })
expectAssignable<awsLite.AwsLiteResponse>({
  headers: {},
  payload: {},
  statusCode: 200,
})

// Test: Can use types for variable annotations
const config1: awsLite.AwsLiteConfig = { region: 'us-east-1' }
awsLite(config1)

// Test: Can use client type
awsLite().then((client) => {
  expectAssignable<awsLite.AwsLiteClient>(client)
})

// Test: Testing types accessible
expectType<awsLite.AwsLiteTesting>(awsLite.testing)

// Test: Mock types accessible via namespace
const allRequests = awsLite.testing.getAllRequests()
expectAssignable<awsLite.AwsLiteMockRequest[]>(allRequests)

const allResponses = awsLite.testing.getAllResponses()
expectAssignable<awsLite.AwsLiteMockResponse[]>(allResponses)

// Pattern 2: ES6 default import (mimics JavaScript usage)
import awsLiteDefault from '@aws-lite/client'

// Test: Types accessible via imported name (JavaScript + JSDoc pattern)
const config2: typeof awsLiteDefault extends { new (): any }
  ? never
  : awsLiteDefault.AwsLiteConfig = { region: 'us-west-2' }

awsLiteDefault(config2)

// Test: Client function works with default import
awsLiteDefault({ region: 'us-west-2' }).then((client) => {
  expectAssignable<awsLite.AwsLiteClient>(client)
})

// Test: Testing utilities accessible
expectType<typeof awsLite.testing>(awsLiteDefault.testing)

// JSDoc type annotations
/** @type {awsLite.AwsLiteConfig} */
const jsdocStyleConfig = {
  region: 'us-west-2',
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
}
/** @type {awsLite.AwsLiteRequest} */
const jsdocStyleRequest = {
  service: 's3',
  path: '/my-bucket',
  headers: { 'Content-Type': 'application/json' },
}

/** @type {Promise<awsLite.AwsLiteClient>} */
const jsdocStyleClientPromise = awsLite(
  jsdocStyleConfig
)

// Test: Client type annotation works
jsdocStyleClientPromise.then((client) => {
  /** @type {awsLite.AwsLiteClient} */
  const typedClient = client
  typedClient(jsdocStyleRequest)
  return client
})


// Testing utilities in various contexts
const mockRequest: awsLite.AwsLiteMockRequest = {
  method: 'S3.GetObject',
  request: { Bucket: 'test', Key: 'file.txt' },
  time: '2024-01-01T00:00:00.000Z',
}

const mockResponse: awsLite.AwsLiteMockResponse = {
  method: 'S3.GetObject',
  response: { Body: 'content' },
  time: '2024-01-01T00:00:00.100Z',
}

expectAssignable<awsLite.AwsLiteMockRequest>(mockRequest)
expectAssignable<awsLite.AwsLiteMockResponse>(mockResponse)

// Test: Testing interface can be used as type
const testingUtil: awsLite.AwsLiteTesting = awsLite.testing
expectType<awsLite.AwsLiteTesting>(testingUtil)
