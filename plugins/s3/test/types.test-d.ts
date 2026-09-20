import { expectError } from 'tsd'
import awsLite = require('@aws-lite/client')

// Test: S3 plugin augments client
awsLite({ plugins: [import('@aws-lite/s3')] }).then((client) => {
  // Test: S3 namespace exists
  client.S3

  // Test: region can be provided
  client.S3.GetObject({
    Bucket: 'my-bucket',
    Key: 'path/to/file.txt',
    region: 'us-east-1',
  })

  // Test: GetObject - required parameters
  client.S3.GetObject({
    Bucket: 'my-bucket',
    Key: 'path/to/file.txt',
  })

  // Test: GetObject - with optional parameters
  client.S3.GetObject({
    Bucket: 'my-bucket',
    Key: 'path/to/file.txt',
    Range: 'bytes=0-1023',
    IfMatch: 'etag',
  })

  // Test: GetObject - missing required params
  expectError(client.S3.GetObject({ Bucket: 'my-bucket' })) // Missing Key
  expectError(client.S3.GetObject({ Key: 'file.txt' })) // Missing Bucket

  // Test: PutObject - with Buffer body
  client.S3.PutObject({
    Bucket: 'my-bucket',
    Key: 'file.txt',
    Body: Buffer.from('content'),
  })

  // Test: PutObject - with string body
  client.S3.PutObject({
    Bucket: 'my-bucket',
    Key: 'file.txt',
    Body: 'content',
  })

  // Test: PutObject - with metadata and content type
  client.S3.PutObject({
    Bucket: 'my-bucket',
    Key: 'file.txt',
    Body: Buffer.from('content'),
    ContentType: 'application/json',
    Metadata: { author: 'user' },
  })

  // Test: ListBuckets - no parameters
  client.S3.ListBuckets()

  // Test: DeleteObject - required parameters
  client.S3.DeleteObject({
    Bucket: 'my-bucket',
    Key: 'file.txt',
  })

  // Test: HeadObject - required parameters
  client.S3.HeadObject({
    Bucket: 'my-bucket',
    Key: 'file.txt',
  })

  // Test: HeadObject - with optional parameters
  client.S3.HeadObject({
    Bucket: 'my-bucket',
    Key: 'file.txt',
    IfMatch: 'etag',
    IfModifiedSince: '2024-01-01',
  })

  return client
})
