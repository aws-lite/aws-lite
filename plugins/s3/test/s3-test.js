let { join } = require('path')
let S3rver = require('s3rver')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)
let test = require('tape')
let mockTmp = require('mock-tmp')
let evilDns = require('evil-dns')
let dns = require('dns')

let aws, s3rver, tmp
let port = 4569
let bucket_name = 'bucket1'
let object_names = [ 'object1.txt', 'object2.json' ]
let object_contents = [ 'Hello, World!', JSON.stringify({ welcome: 'aws-lite' }) ]
let contentTypes = [ 'text/plain', 'application/json' ]
let s3_root_dir = 's3_root_dir'
let region = 'us-east-1'

// DNS domains with .test TLD can never be registered - see RFC 6761
let serviceEndpoint = 'endpoint.test'
let loopback = '127.0.0.1'

// evil-dns doesn't work with Node 20, since it doesn't support options.all,
// so we need to wrap evil-dns' lookup function and turn the address into
// an array if necessary.
// See https://github.com/JamesHight/node-evil-dns/issues/7
//
// Also, we wrap the callback with process.nextTick() to avoid an uncatchable
// error in certain environments when the network is unreachable.
// See https://github.com/JamesHight/node-evil-dns/issues/5#issuecomment-949881507
let evilDnsLookup = dns.lookup
function lookupWrapper (domain, options, callback) {

  if (arguments.length === 2) {
    callback = options
    options = {}
  }

  return evilDnsLookup(domain, options, (err, address, family) => {
    if (typeof(options) === 'object' && options.all && (!Array.isArray(address))) {
      // Caller specified options.all, but evil-dns only returns a single
      // address, so we need to turn it into an array
      return process.nextTick(() => callback(err, [ { address: address, family: family } ]))
    }
    else return process.nextTick(() => callback(err, address, family))
  })
}
dns.lookup = lookupWrapper

// Convenience function for tests, since evil-dns patches node:dns but not
// node:dns/promises
async function lookupAsync (domain, options) {
  return new Promise((resolve, reject) => {
    dns.lookup(domain, options || {}, (err, address) => {
      if (err) reject(err)
      resolve(address)
    })
  })
}

test('Set up DNS lookup override', async t => {
  t.plan(3)

  // Override DNS lookup to resolve endpoint.test and any of its subdomains to 127.0.0.1
  evilDns.add(new RegExp(`^(?:[a-zA-Z0-9-]+\.)*${serviceEndpoint.replace('.', '\.')}$`), loopback)

  // Check we haven't broken default DNS resolution - looking up a real domain
  // with options.all should result in an array of objects, rather than a
  // single IP address.
  let githubAddress = await lookupAsync('github.com', { all: true })
  t.ok(Array.isArray(githubAddress), 'github.com with options.all resolves to an array')

  // Check S3 service endpoint for ListBuckets.
  t.equal(await lookupAsync(`s3.${region}.${serviceEndpoint}`), loopback, 'S3 service endpoint resolves')

  // Check virtual host-style bucket endpoint for other operations.
  t.equal(await lookupAsync(`${bucket_name}.s3.${region}.${serviceEndpoint}`), loopback, 'Virtual host-style bucket endpoint resolves')
})

test('Set up env', async t => {
  t.plan(3)
  aws = await client({
    accessKeyId: 'S3RVER',
    secretAccessKey: 'S3RVER',
    region,
    host: `s3.${region}.${serviceEndpoint}`,
    port,
    protocol: 'http',
  })
  t.ok(aws, 'Client ready')

  tmp = mockTmp({
    // Directory for S3rver
    [`${s3_root_dir}`]: {},
    // Source file for PutObject
    [object_names[0]]: object_contents[0],
  })
  t.ok(tmp, `mockTmp directory ${tmp} is present`)

  s3rver = new S3rver({
    address: loopback,
    port,
    silent: true,
    serviceEndpoint: serviceEndpoint,
    directory: join(tmp, s3_root_dir),
  })
  let started = await s3rver.run()
  t.ok(started, 'Started S3rver')
})

test('List zero buckets - first time', async t => {
  t.plan(1)
  let listBucketsResponse = await aws.S3.ListBuckets()
  // t.ok(listBucketsResponse.Buckets, 'Response has a Buckets element')
  t.notOk(listBucketsResponse.Buckets, 'Response does not have Buckets element')
  // TBD - ListBucketsResponse.Buckets should always be an array of buckets.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // there are no buckets, and a bucket if there is only one bucket.
  // t.equal(listBucketsResponse.Buckets.length, 1, `One bucket found`)
  // t.equal(listBucketsResponse.Buckets[0].Name, bucket_name, `Bucket ${bucket_name} found`)
})

test('Create bucket', async t => {
  t.plan(1)
  let createBucketResponse = await aws.S3.CreateBucket({
    Bucket: bucket_name,
    CreateBucketConfiguration: {
      LocationConstraint: region
    }
  })
  t.equal(createBucketResponse.Location, `/${bucket_name}`, `Created bucket ${bucket_name}`)
})

test('Head bucket', async t => {
  t.plan(1)
  let headBucketResponse = await aws.S3.HeadBucket({ Bucket: bucket_name })
  t.ok(headBucketResponse, `Head bucket ${bucket_name}`)
})

test('List one bucket', async t => {
  t.plan(2)
  let listBucketsResponse = await aws.S3.ListBuckets()
  t.ok(listBucketsResponse.Buckets, 'Response has a Buckets element')
  // TBD - ListBucketsResponse.Buckets should always be an array of buckets.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // there are no buckets, and a bucket if there is only one bucket.
  // t.equal(listBucketsResponse.Buckets.length, 1, `One bucket found`)
  // t.equal(listBucketsResponse.Buckets[0].Name, bucket_name, `Bucket ${bucket_name} found`)
  t.equal(listBucketsResponse.Buckets.Bucket.Name, bucket_name, `Bucket ${bucket_name} found`)
})

test('List objects - empty bucket', async t => {
  t.plan(1)
  let listObjectsV2Response = await aws.S3.ListObjectsV2({ Bucket: bucket_name })
  // TBD - should KeyCount be a Number, rather than a string?
  t.equals(listObjectsV2Response.KeyCount, 0, 'Zero objects found')
  // TBD - ListObjectsV2Response.Contents should always be an array of objects.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // the bucket is empty, and an object if there is only one object in the
  // bucket.
  // t.equal(listObjectsV2Response.Contents.length, 0, 'No objects returned')
})

test('Put first object (from file)', async t => {
  t.plan(1)
  let putObjectResponse = await aws.S3.PutObject({
    Bucket: bucket_name,
    Key: object_names[0],
    File: join(tmp, object_names[0]),
    ContentType: contentTypes[0]
  })
  t.ok(putObjectResponse, `Object ${object_names[0]} created`)
})

test('List objects - single object', async t => {
  t.plan(1)
  let listObjectsV2Response = await aws.S3.ListObjectsV2({ Bucket: bucket_name })
  t.equal(listObjectsV2Response.KeyCount, 1, 'One object found')
  // TBD - ListObjectsV2Response.Contents should always be an array of objects.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // the bucket is empty, and an object if there is only one object in the
  // bucket.
  // t.equal(listObjectsV2Response.Contents.length, 1, 'One object returned')
})

test('Head first object', async t => {
  t.plan(3)
  let headObjectResponse = await aws.S3.HeadObject({ Bucket: bucket_name, Key: object_names[0] })
  t.ok(headObjectResponse, `Object ${object_names[0]} found`)
  t.equal(headObjectResponse.ContentLength, object_contents[0].length, 'Content has expected length')
  t.equal(headObjectResponse.ContentType, contentTypes[0], 'Content has expected type')
})

test('Get first object', async t => {
  t.plan(4)
  let getObjectResponse = await aws.S3.GetObject({ Bucket: bucket_name, Key: object_names[0] })
  t.ok(getObjectResponse, `Object ${object_names[0]} found`)
  t.equal(getObjectResponse.ContentLength, object_contents[0].length, 'Content has expected length')
  t.equal(getObjectResponse.ContentType, contentTypes[0], 'Content has expected type')
  t.equal(getObjectResponse.Body.toString(), object_contents[0], `Object ${object_names[0]} has expected content`)
})

test('Put second object (from string)', async t => {
  t.plan(1)
  let putObjectResponse = await aws.S3.PutObject({
    Bucket: bucket_name,
    Key: `${object_names[1]}`,
    Body: object_contents[1],
    ContentType: contentTypes[1]
  })
  t.ok(putObjectResponse, `Object ${object_names[1]} created`)
})

test('Head second object', async t => {
  t.plan(3)
  let headObjectResponse = await aws.S3.HeadObject({ Bucket: bucket_name, Key: object_names[1] })
  t.ok(headObjectResponse, `Object ${object_names[1]} found`)
  t.equal(headObjectResponse.ContentLength, object_contents[1].length, 'Content has expected length')
  t.equal(headObjectResponse.ContentType, contentTypes[1], 'Content has expected type')
})

test('Get second object', async t => {
  t.plan(4)
  let getObjectResponse = await aws.S3.GetObject({ Bucket: bucket_name, Key: object_names[1] })
  t.ok(getObjectResponse, `Object ${object_names[1]} found`)
  t.equal(getObjectResponse.ContentLength, object_contents[1].length, 'Content has expected length')
  t.equal(getObjectResponse.ContentType, contentTypes[1], 'Content has expected type')
  t.equal(JSON.stringify(getObjectResponse.Body), object_contents[1], `Object ${object_names[1]} has expected content`)
})

test('List objects - two objects', async t => {
  t.plan(2)
  let listObjectsResponse = await aws.S3.ListObjectsV2({ Bucket: bucket_name })
  t.equal(listObjectsResponse.KeyCount, 2, 'Two objects found')
  t.equal(listObjectsResponse.Contents.length, 2, 'Two objects returned')
})

test('Delete first object', async t => {
  t.plan(1)
  let deleteObjectResponse = await aws.S3.DeleteObject({
    Bucket: bucket_name,
    Key: object_names[0]
  })
  t.ok(deleteObjectResponse, `Deleted object ${object_names[0]}`)
})

test('Delete second object', async t => {
  t.plan(1)
  let deleteObjectsResponse = await aws.S3.DeleteObjects({
    Bucket: bucket_name,
    Delete: { Objects: [ { Key: object_names[1] } ] }
  })
  // TBD - deleteObjectsResponse.Deleted should be an array
  t.equal(deleteObjectsResponse.Deleted.Key, object_names[1],  `Deleted object ${object_names[1]}`)
})

test('Delete bucket', async t => {
  t.plan(1)
  let deleteBucketResponse = await aws.S3.DeleteBucket({
    Bucket: bucket_name
  })
  t.ok(deleteBucketResponse, `Deleted bucket ${bucket_name}`)
})

test('List zero buckets - second time', async t => {
  t.plan(1)
  let listBucketsResponse = await aws.S3.ListBuckets()
  // t.ok(listBucketsResponse.Buckets, 'Response has a Buckets element')
  t.notOk(listBucketsResponse.Buckets, 'Response does not have Buckets element')
  // TBD - ListBucketsResponse.Buckets should always be an array of buckets.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // there are no buckets, and a bucket if there is only one bucket.
  // t.equal(listBucketsResponse.Buckets.length, 1, `One bucket found`)
  // t.equal(listBucketsResponse.Buckets[0].Name, bucket_name, `Bucket ${bucket_name} found`)
})

test('Tear down env', async t => {
  t.plan(2)
  await s3rver.close()
  t.pass('Server ended')
  mockTmp.reset()
  t.pass(`mockTmp removed`)
})
