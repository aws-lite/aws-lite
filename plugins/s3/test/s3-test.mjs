import { join } from 'node:path'
import { Readable } from 'node:stream'
import test from 'tape'
import mockTmp from 'mock-tmp'
import PutObject from '../src/put-object.mjs'
import { parseXML } from '../../../src/lib/index.js'
import { defaults } from '../../../test/lib/index.mjs'
let { config } = defaults

let aws, client, tmp
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
  let cwd = process.cwd()
  let sut = 'file://' + join(cwd, 'src', 'index.js')
  client = (await import(sut)).default
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
      LocationConstraint: region,
    },
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
    ContentType: contentTypes[0],
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
    ContentType: contentTypes[1],
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
    Key: objectNames[0],
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
    Delete: { Objects: [ { Key: objectNames[1] } ] },
  })
  t.equal(deleteObjectsResponse.Deleted[0].Key, objectNames[1],  `Deleted object ${objectNames[1]}`)
})

test('Delete bucket', async t => {
  t.plan(1)
  client.testing.mock('S3.DeleteBucket', { statusCode: 204 })
  let deleteBucketResponse = await aws.S3.DeleteBucket({
    Bucket: bucketName,
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

let UploadId = 'upload-id'
let uploadKey = 'upload.bin'

function mockUpload ({ partError, onPart } = {}) {
  client.testing.reset()
  client.testing.mock('S3.CreateMultipartUpload', { statusCode: 200, payload: { UploadId } })
  // Respond asynchronously like a real request, so several parts can be uploading at once
  client.testing.mock('S3.UploadPart', params => new Promise(res => setTimeout(() => {
    onPart?.(params)
    res(partError
      ? { statusCode: 500, error: { message: 'Part failed' } }
      : { statusCode: 200, headers: { etag: `"etag-${params.PartNumber}"` } })
  }, 5)))
  client.testing.mock('S3.AbortMultipartUpload', { statusCode: 204 })
  client.testing.mock('S3.Upload', { ...okXml, payload: {} })
}

function getUploadParts () {
  return client.testing.getAllRequests('S3.UploadPart').map(({ request }) => request)
}

function getCompletedParts () {
  return client.testing.getLastRequest('S3.Upload').request.payload.CompleteMultipartUpload.Part
}

test('Upload sends object params only with CreateMultipartUpload', async t => {
  t.plan(7)
  mockUpload()
  await aws.S3.Upload({
    Bucket: bucketName,
    Key: uploadKey,
    Body: Readable.from([ Buffer.from(objectContents[0]) ]),
    ACL: 'public-read',
    ContentType: 'image/png',
    Metadata: { width: '640' },
  })
  let create = client.testing.getLastRequest('S3.CreateMultipartUpload').request
  t.equal(create.ContentType, 'image/png', 'CreateMultipartUpload gets ContentType')
  t.equal(create.ACL, 'public-read', 'CreateMultipartUpload gets ACL')
  t.deepEqual(create.Metadata, { width: '640' }, 'CreateMultipartUpload gets Metadata')
  let [ part ] = getUploadParts()
  t.notOk(part.ContentType || part.ACL || part.Metadata, 'UploadPart does not get object params')
  let { headers } = client.testing.getLastRequest('S3.Upload').request
  t.equal(headers['content-type'], 'application/xml', 'CompleteMultipartUpload is sent as XML')
  t.notOk(headers['x-amz-acl'], 'CompleteMultipartUpload does not get ACL')
  t.notOk(headers['x-amz-meta-width'], 'CompleteMultipartUpload does not get Metadata')
})

test('Upload splits a Buffer or string Body into parts', async t => {
  t.plan(5)
  let Body = Buffer.from('0123456789'.repeat(2) + '01234')
  mockUpload()
  await aws.S3.Upload({ Bucket: bucketName, Key: uploadKey, Body, ChunkSize: 10 })
  let parts = getUploadParts()
  t.deepEqual(parts.map(({ PartNumber }) => PartNumber), [ 1, 2, 3 ], 'Uploaded three parts')
  t.deepEqual(Buffer.concat(parts.map(part => part.Body)), Body, 'Parts contain the whole Body')
  t.deepEqual(getCompletedParts().map(({ PartNumber }) => PartNumber), [ 1, 2, 3 ], 'Completed with three parts')

  mockUpload()
  await aws.S3.Upload({ Bucket: bucketName, Key: uploadKey, Body: objectContents[0] })
  parts = getUploadParts()
  t.equal(parts.length, 1, 'Uploaded one part')
  t.equal(parts[0].Body.toString(), objectContents[0], 'Part contains the string Body')
})

test('Upload keeps all data of a stream chunk larger than ChunkSize', async t => {
  t.plan(2)
  let Body = Buffer.from('0123456789'.repeat(2) + '01234')
  mockUpload()
  await aws.S3.Upload({ Bucket: bucketName, Key: uploadKey, Body: Readable.from([ Body ]), ChunkSize: 10 })
  let parts = getUploadParts()
  t.deepEqual(Buffer.concat(parts.map(part => part.Body)), Body, 'Parts contain the whole Body')
  t.equal(getCompletedParts().length, 3, 'Completed with three parts')
})

test('Upload completes an empty Body with one empty part', async t => {
  t.plan(3)
  mockUpload()
  await aws.S3.Upload({ Bucket: bucketName, Key: uploadKey, Body: Readable.from([]) })
  let parts = getUploadParts()
  t.equal(parts.length, 1, 'Uploaded one part')
  t.equal(parts[0].Body.length, 0, 'Part is empty')
  t.equal(getCompletedParts().length, 1, 'Completed with one part')
})

test('Upload rejects and aborts when a part fails', async t => {
  t.plan(3)
  mockUpload({ partError: true })
  try {
    await aws.S3.Upload({ Bucket: bucketName, Key: uploadKey, Body: Readable.from([ Buffer.alloc(30) ]), ChunkSize: 10 })
    t.fail('Upload should have failed')
  }
  catch (err) {
    t.match(err.message, /Part failed/, 'Upload rejects with the part error')
  }
  t.equal(client.testing.getAllRequests('S3.AbortMultipartUpload').length, 1, 'Multipart upload was aborted')
  t.notOk(process.getActiveResourcesInfo().includes('Timeout'), 'No timers are left running')
})

test('Upload holds at most Concurrency parts in memory', async t => {
  t.plan(2)
  let ChunkSize = 1024
  let Concurrency = 2
  let chunkSize = 256
  let maxBuffered = (ChunkSize * Concurrency) + chunkSize
  let read = 0
  let uploaded = 0
  let maxHeld = 0
  async function * generate () {
    for (let i = 0; i < 64; i++) {
      read += chunkSize
      maxHeld = Math.max(maxHeld, read - uploaded)
      yield Buffer.alloc(chunkSize, i)
    }
  }
  mockUpload({ onPart: ({ Body }) => uploaded += Body.length })
  await aws.S3.Upload({ Bucket: bucketName, Key: uploadKey, Body: Readable.from(generate()), ChunkSize, Concurrency })
  t.equal(getUploadParts().length, 16, 'Uploaded all parts')
  t.ok(maxHeld <= maxBuffered, `Held ${maxHeld} bytes, at most Concurrency parts plus one chunk`)
})

test('Tear down env', async t => {
  t.plan(1)
  client.testing.disable()
  mockTmp.reset()
  t.pass(`mockTmp removed`)
})

let putObjectUtils = { config, credentials: {}, region }
// String length 25, UTF-8 byte length 34
let multibyteBody = JSON.stringify({ message: 'café 🚀 日本語' })

test('PutObject Content-Length is the UTF-8 byte length of a multi-byte string Body', async t => {
  t.plan(1)
  let { headers } = await PutObject.request({ Bucket: bucketName, Key: objectNames[1], Body: multibyteBody }, putObjectUtils)
  t.equal(headers['content-length'], Buffer.byteLength(multibyteBody), 'Content-Length is the byte length, not the string length')
})

test('PutObject Content-Length is the byte length of a multi-byte Buffer Body', async t => {
  t.plan(1)
  let Body = Buffer.from(multibyteBody)
  let { headers } = await PutObject.request({ Bucket: bucketName, Key: objectNames[1], Body }, putObjectUtils)
  t.equal(headers['content-length'], Body.length, 'Content-Length is the buffer byte length')
})

test('PutObject Content-Length is unchanged for an ASCII string Body', async t => {
  t.plan(1)
  let Body = objectContents[1]
  let { headers } = await PutObject.request({ Bucket: bucketName, Key: objectNames[1], Body }, putObjectUtils)
  t.equal(headers['content-length'], Buffer.byteLength(Body), 'Content-Length is correct for ASCII strings')
})
