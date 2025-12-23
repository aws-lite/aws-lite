import { expectType, expectError, expectAssignable } from 'tsd'
import awsLite = require('@aws-lite/client')

// ============================================================================
// Client Configuration Tests
// ============================================================================

// Test: Client instantiation with no config
awsLite()

// Test: Client instantiation with config
awsLite({ region: 'us-west-2' })

// Test: Full config options
awsLite({
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
  sessionToken: 'token',
  region: 'us-east-1',
  profile: 'default',
  autoloadPlugins: true,
  awsConfigFile: true,
  debug: false,
  endpoint: 'http://localhost:4566',
  host: 'localhost',
  keepAlive: true,
  pathPrefix: '/api',
  plugins: [],
  port: 4566,
  protocol: 'http',
  responseContentType: 'json',
  retries: 3,
  url: 'http://localhost:4566',
  verifyService: false,
})

// Test: Invalid config should error
expectError(awsLite({ region: 123 })) // region must be string
expectError(awsLite({ retries: '5' })) // retries must be number
expectError(awsLite({ debug: 'true' })) // debug must be boolean

// Test: Config type assignment
const config = { region: 'us-west-2' }
awsLite(config)

// Test: Client is callable with request
awsLite().then((client) => {
  client({
    service: 's3',
    path: '/my-bucket',
  })
  return client
})

// ============================================================================
// Request Interface Tests
// ============================================================================

// Test: Required service property
awsLite().then((client) => {
  expectError(client({ path: '/bucket' })) // Missing service

  // Test: Body/data/payload aliases
  client({ service: 's3', path: '/bucket', body: { key: 'value' } })
  client({ service: 's3', path: '/bucket', data: { key: 'value' } })
  client({ service: 's3', path: '/bucket', payload: { key: 'value' } })

  // Test: Buffer payload
  client({ service: 's3', path: '/bucket', body: Buffer.from('data') })

  // Test: String payload
  client({ service: 's3', path: '/bucket', body: 'string data' })

  // Test: Headers type
  client({
    service: 's3',
    path: '/bucket',
    headers: { 'Content-Type': 'application/json' },
  })

  // Test: Query params
  client({
    service: 's3',
    path: '/bucket',
    query: { prefix: 'images/', delimiter: '/' },
  })

  // Test: awsjson parameter
  client({
    service: 'dynamodb',
    awsjson: true,
  })

  client({
    service: 'dynamodb',
    awsjson: ['param1', 'param2'],
  })

  // Test: Host, port, protocol overrides
  client({
    service: 's3',
    host: 'localhost',
    port: 4566,
    protocol: 'http',
  })

  // Test: Region override
  client({
    service: 's3',
    region: 'us-east-1',
  })

  // Test: streamResponsePayload
  client({
    service: 's3',
    path: '/bucket/file.txt',
    streamResponsePayload: true,
  })

  // Test: verifyService
  client({
    service: 's3',
    verifyService: false,
  })

  return client
})

// ============================================================================
// Response Interface Tests
// ============================================================================

// Test: Response structure
awsLite().then(async (client) => {
  const response = await client({
    service: 's3',
    path: '/my-bucket',
  })

  // Test: Response has required properties
  expectType<Record<string, string>>(response.headers)
  expectType<Record<string, any>>(response.payload)
  expectType<number>(response.statusCode)

  // Test: Response is assignable to AwsLiteResponse structure
  expectAssignable<{
    headers: Record<string, string>
    payload: Record<string, any>
    statusCode: number
  }>(response)

  return client
})

// ============================================================================
// Testing Utilities Tests
// ============================================================================

// Test: Testing namespace exists
expectAssignable<{ testing: any }>(awsLite)

// Test: Testing methods exist and can be called
expectType<(args?: { usePluginResponseMethod?: boolean }) => void>(
  awsLite.testing.enable
)
expectType<() => void>(awsLite.testing.disable)
expectType<(target: string, mock: any) => void>(awsLite.testing.mock)
expectType<() => void>(awsLite.testing.reset)
expectType<(args?: { print?: boolean }) => any>(awsLite.testing.debug)

// Test: Request/response getters (without checking exact return types)
awsLite.testing.getAllRequests()
awsLite.testing.getAllResponses()
awsLite.testing.getLastRequest()
awsLite.testing.getLastResponse()

// Test: Methods can be called with various arguments
awsLite.testing.enable({ usePluginResponseMethod: true })
awsLite.testing.enable({ usePluginResponseMethod: false })
awsLite.testing.enable()

awsLite.testing.debug({ print: true })
awsLite.testing.debug({ print: false })
awsLite.testing.debug()

awsLite.testing.disable()
awsLite.testing.reset()

awsLite.testing.mock('Service.Method', { result: 'mocked' })

awsLite.testing.getAllRequests('target')
awsLite.testing.getAllResponses('target')
awsLite.testing.getLastRequest('target')
awsLite.testing.getLastResponse('target')
