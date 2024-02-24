let { join } = require('path')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)
let test = require('tape')
let mockTmp = require('mock-tmp')
let { parseXML } = require('../../../src/lib')
let { defaults } = require('../../../test/lib')
let { config } = defaults

let aws, tmp
let bucketName = 'bucket1'
let objectNames = [ 'object1.txt', 'object2.json' ]
let objectContents = [ 'Hello, World!', JSON.stringify({ welcome: 'aws-lite' }) ]
let contentTypes = [ 'text/plain', 'application/json' ]
let region = 'us-east-1'

let okXml = {
  statusCode: 200,
  headers: {
    'content-type': 'application/xml',
  },
}

test('Set up env', async t => {
  t.plan(2)
  client.testing.enable({ usePluginResponseMethod: true })
  aws = await client({ ...config, plugins: [ import('@aws-lite/s3') ] })
  t.ok(aws, 'Client ready')

  tmp = mockTmp({
    // Source file for PutObject
    [objectNames[0]]: objectContents[0],
  })
  t.ok(tmp, `mockTmp directory ${tmp} is present`)
})

test('List zero buckets - first time', async t => {
  t.plan(1)

  let rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult xmlns="http://doc.s3.amazonaws.com/2006-03-01/"><Owner><ID>123456789000</ID><DisplayName>Mock</DisplayName></Owner><Buckets></Buckets></ListAllMyBucketsResult>`
  let payload = parseXML(rawXml)
  client.testing.mock('S3.ListBuckets', { ...okXml, payload })

  let listBucketsResponse = await aws.S3.ListBuckets()
  t.equal(listBucketsResponse.Buckets.length, 0, 'Response has an empty Buckets array')
})

test('Create bucket', async t => {
  t.plan(1)
  let location = `/${bucketName}`
  client.testing.mock('S3.CreateBucket', { statusCode: 200, headers: { location } })
  let createBucketResponse = await aws.S3.CreateBucket({
    Bucket: bucketName,
    CreateBucketConfiguration: {
      LocationConstraint: region
    }
  })
  t.equal(createBucketResponse.Location, location, `Created bucket ${bucketName}`)
})

test('Head bucket', async t => {
  t.plan(1)
  client.testing.mock('S3.HeadBucket', { statusCode: 200 })
  let headBucketResponse = await aws.S3.HeadBucket({ Bucket: bucketName })
  t.ok(headBucketResponse, `Head bucket ${bucketName}`)
})

test('List one bucket', async t => {
  t.plan(2)

  let rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult xmlns="http://doc.s3.amazonaws.com/2006-03-01/"><Owner><ID>123456789000</ID><DisplayName>bucket1</DisplayName></Owner><Buckets><Bucket><Name>bucket1</Name><CreationDate>2024-02-24T02:58:41.066Z</CreationDate></Bucket></Buckets></ListAllMyBucketsResult>'`
  let payload = parseXML(rawXml)
  client.testing.mock('S3.ListBuckets', { ...okXml, payload })

  let listBucketsResponse = await aws.S3.ListBuckets()
  t.equal(listBucketsResponse.Buckets.length, 1, `One bucket found`)
  t.equal(listBucketsResponse.Buckets[0].Name, bucketName, `Bucket ${bucketName} found`)
})

test('List objects - empty bucket', async t => {
  t.plan(2)

  let rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://doc.s3.amazonaws.com/2006-03-01/"><Name>bucket1</Name><Prefix></Prefix><KeyCount>0</KeyCount><MaxKeys>1000</MaxKeys><IsTruncated>false</IsTruncated></ListBucketResult>`
  let payload = parseXML(rawXml)
  client.testing.mock('S3.ListObjectsV2', { ...okXml, payload })

  let listObjectsV2Response = await aws.S3.ListObjectsV2({ Bucket: bucketName })
  t.equals(listObjectsV2Response.KeyCount, 0, 'Zero objects found')
  t.equal(listObjectsV2Response.Contents.length, 0, 'No objects returned')
})

test('Put first object (from file)', async t => {
  t.plan(1)
  client.testing.mock('S3.PutObject', { statusCode: 200 })
  let putObjectResponse = await aws.S3.PutObject({
    Bucket: bucketName,
    Key: objectNames[0],
    File: join(tmp, objectNames[0]),
    ContentType: contentTypes[0]
  })
  t.ok(putObjectResponse, `Object ${objectNames[0]} created`)
})

test('List objects - single object', async t => {
  t.plan(3)

  let rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://doc.s3.amazonaws.com/2006-03-01/"><Name>bucket1</Name><Prefix></Prefix><KeyCount>1</KeyCount><MaxKeys>1000</MaxKeys><IsTruncated>false</IsTruncated><Contents><Key>object1.txt</Key><LastModified>2024-02-24T03:05:06.000Z</LastModified><ETag>&quot;65a8e27d8879283831b664bd8b7f0ad4&quot;</ETag><Size>13</Size><StorageClass>STANDARD</StorageClass></Contents></ListBucketResult>`
  let payload = parseXML(rawXml)
  client.testing.mock('S3.ListObjectsV2', { ...okXml, payload })

  let listObjectsV2Response = await aws.S3.ListObjectsV2({ Bucket: bucketName })
  t.equal(listObjectsV2Response.KeyCount, 1, 'One object found')
  t.equal(listObjectsV2Response.Contents.length, 1, 'One object returned')
  t.equal(listObjectsV2Response.Contents[0].Key, objectNames[0], `Object ${objectNames[0]} found`)
})

test('Head first object', async t => {
  t.plan(3)
  client.testing.mock('S3.HeadObject', {
    statusCode: 200,
    headers: {
      'content-type': 'text/plain',
      etag: '"65a8e27d8879283831b664bd8b7f0ad4"',
      'content-length': '13',
    },
  })
  let headObjectResponse = await aws.S3.HeadObject({ Bucket: bucketName, Key: objectNames[0] })
  t.ok(headObjectResponse, `Object ${objectNames[0]} found`)
  t.equal(headObjectResponse.ContentLength, objectContents[0].length, 'Content has expected length')
  t.equal(headObjectResponse.ContentType, contentTypes[0], 'Content has expected type')
})

test('Get first object', async t => {
  t.plan(4)
  client.testing.mock('S3.GetObject', {
    statusCode: 200,
    headers: {
      'content-type': 'text/plain',
      etag: '"65a8e27d8879283831b664bd8b7f0ad4"',
      'content-length': '13',
    },
    payload: objectContents[0],
  })
  let getObjectResponse = await aws.S3.GetObject({ Bucket: bucketName, Key: objectNames[0] })
  t.ok(getObjectResponse, `Object ${objectNames[0]} found`)
  t.equal(getObjectResponse.ContentLength, objectContents[0].length, 'Content has expected length')
  t.equal(getObjectResponse.ContentType, contentTypes[0], 'Content has expected type')
  t.equal(getObjectResponse.Body.toString(), objectContents[0], `Object ${objectNames[0]} has expected content`)
})

test('Put second object (from string)', async t => {
  t.plan(1)
  client.testing.mock('S3.PutObject', { statusCode: 200 })
  let putObjectResponse = await aws.S3.PutObject({
    Bucket: bucketName,
    Key: `${objectNames[1]}`,
    Body: objectContents[1],
    ContentType: contentTypes[1]
  })
  t.ok(putObjectResponse, `Object ${objectNames[1]} created`)
})

test('Head second object', async t => {
  t.plan(3)
  client.testing.mock('S3.HeadObject', {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
      etag: '"c34d278a648248d8b1e84e1f8e6fa511"',
      'content-length': '22',
    },
  })
  let headObjectResponse = await aws.S3.HeadObject({ Bucket: bucketName, Key: objectNames[1] })
  t.ok(headObjectResponse, `Object ${objectNames[1]} found`)
  t.equal(headObjectResponse.ContentLength, objectContents[1].length, 'Content has expected length')
  t.equal(headObjectResponse.ContentType, contentTypes[1], 'Content has expected type')
})

test('Get second object', async t => {
  t.plan(8)

  // Get as parsed payload
  client.testing.mock('S3.GetObject', {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
      etag: '"c34d278a648248d8b1e84e1f8e6fa511"',
      'content-length': '22',
    },
    payload: JSON.parse(objectContents[1]),
  })
  let getObjectResponse = await aws.S3.GetObject({ Bucket: bucketName, Key: objectNames[1] })
  t.ok(getObjectResponse, `Object ${objectNames[1]} found`)
  t.equal(getObjectResponse.ContentLength, objectContents[1].length, 'Content has expected length')
  t.equal(getObjectResponse.ContentType, contentTypes[1], 'Content has expected type')
  t.deepEqual(getObjectResponse.Body, JSON.parse(objectContents[1]), `Object ${objectNames[1]} has expected content`)

  // Get as raw payload
  client.testing.mock('S3.GetObject', {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
      etag: '"c34d278a648248d8b1e84e1f8e6fa511"',
      'content-length': '22',
    },
    payload: Buffer.from(objectContents[1]),
  })
  getObjectResponse = await aws.S3.GetObject({ Bucket: bucketName, Key: objectNames[1], rawResponsePayload: true })
  t.ok(getObjectResponse, `Object ${objectNames[1]} found`)
  t.equal(getObjectResponse.ContentLength, objectContents[1].length, 'Content has expected length')
  t.equal(getObjectResponse.ContentType, contentTypes[1], 'Content has expected type')
  t.deepEqual(getObjectResponse.Body, Buffer.from(objectContents[1]), `Object ${objectNames[1]} has expected content`)
})

test('List objects - two objects', async t => {
  t.plan(4)

  let rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://doc.s3.amazonaws.com/2006-03-01/"><Name>bucket1</Name><Prefix></Prefix><KeyCount>2</KeyCount><MaxKeys>1000</MaxKeys><IsTruncated>false</IsTruncated><Contents><Key>object1.txt</Key><LastModified>2024-02-24T03:17:14.000Z</LastModified><ETag>&quot;65a8e27d8879283831b664bd8b7f0ad4&quot;</ETag><Size>13</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>object2.json</Key><LastModified>2024-02-24T03:17:14.000Z</LastModified><ETag>&quot;c34d278a648248d8b1e84e1f8e6fa511&quot;</ETag><Size>22</Size><StorageClass>STANDARD</StorageClass></Contents></ListBucketResult>`
  let payload = parseXML(rawXml)
  client.testing.mock('S3.ListObjectsV2', { ...okXml, payload })

  let listObjectsResponse = await aws.S3.ListObjectsV2({ Bucket: bucketName })
  t.equal(listObjectsResponse.KeyCount, 2, 'Two objects found')
  t.equal(listObjectsResponse.Contents.length, 2, 'Two objects returned')
  t.equal(listObjectsResponse.Contents[0].Key, objectNames[0], 'First object returned')
  t.equal(listObjectsResponse.Contents[1].Key, objectNames[1], 'Second objects returned')
})

test('Delete first object', async t => {
  t.plan(1)
  client.testing.mock('S3.DeleteObject', { statusCode: 204 })
  let deleteObjectResponse = await aws.S3.DeleteObject({
    Bucket: bucketName,
    Key: objectNames[0]
  })
  t.ok(deleteObjectResponse, `Deleted object ${objectNames[0]}`)
})

test('Delete second object', async t => {
  t.plan(1)

  let rawXml = `<?xml version="1.0" encoding="UTF-8"?>
  <DeleteResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Deleted><Key>object2.json</Key></Deleted></DeleteResult>`
  let payload = parseXML(rawXml)
  client.testing.mock('S3.DeleteObjects', { ...okXml, payload })

  let deleteObjectsResponse = await aws.S3.DeleteObjects({
    Bucket: bucketName,
    Delete: { Objects: [ { Key: objectNames[1] } ] }
  })
  t.equal(deleteObjectsResponse.Deleted[0].Key, objectNames[1],  `Deleted object ${objectNames[1]}`)
})

test('Delete bucket', async t => {
  t.plan(1)
  client.testing.mock('S3.DeleteBucket', { statusCode: 204 })
  let deleteBucketResponse = await aws.S3.DeleteBucket({
    Bucket: bucketName
  })
  t.ok(deleteBucketResponse, `Deleted bucket ${bucketName}`)
})

test('List zero buckets - second time', async t => {
  t.plan(1)

  let rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult xmlns="http://doc.s3.amazonaws.com/2006-03-01/"><Owner><ID>123456789000</ID><DisplayName>S3rver</DisplayName></Owner><Buckets></Buckets></ListAllMyBucketsResult>`
  let payload = parseXML(rawXml)
  client.testing.mock('S3.ListBuckets', { ...okXml, payload })

  let listBucketsResponse = await aws.S3.ListBuckets()
  t.equal(listBucketsResponse.Buckets.length, 0, 'Response has an empty Buckets array')
})

test('Tear down env', async t => {
  t.plan(1)
  client.testing.disable()
  mockTmp.reset()
  t.pass(`mockTmp removed`)
})
