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
let object_name = 'object1.txt'
let object_content = 'Hello, World!'
let content_type = 'text/plain'
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
    [object_name]: object_content,
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

test('Put object', async t => {
  t.plan(1)
  let putObjectResponse = await aws.S3.PutObject({
    Bucket: bucket_name,
    Key: object_name,
    File: join(tmp, object_name),
    ContentType: content_type
  })
  t.ok(putObjectResponse, `Object ${object_name} created`)
})

test('Get presigned URL', async t => {
  t.plan(4)
  let { url } = await aws.S3.GetPresignedUrl({
    Bucket: bucket_name,
    Key: object_name
  })
  t.ok(url, 'Should return a presigned URL')
  t.ok(url.includes(bucket_name), 'URL should include bucket name')
  t.ok(url.includes(object_name), 'URL should include key')
  t.ok(url.includes('X-Amz-Signature'), 'URL should include signature')
})

test('Get presigned URL with custom expiry', async t => {
  t.plan(2)
  let { url } = await aws.S3.GetPresignedUrl({
    Bucket: bucket_name,
    Key: object_name,
    Expires: 7200 // 2 hours
  })
  t.ok(url, 'Should return a presigned URL')
  t.ok(url.includes('X-Amz-Expires=7200'), 'URL should include custom expiry time')
})

test('Get presigned URL with response headers', async t => {
  t.plan(3)
  let { url } = await aws.S3.GetPresignedUrl({
    Bucket: bucket_name,
    Key: object_name,
    ResponseContentType: 'application/json',
    ResponseContentDisposition: 'attachment; filename=test.json'
  })
  t.ok(url, 'Should return a presigned URL')
  t.ok(url.includes('response-content-type=application%2Fjson'), 'URL should include content type')
  t.ok(url.includes('response-content-disposition=attachment%3B%20filename%3Dtest.json'), 'URL should include content disposition')
})

test('Get presigned URL with bucket containing periods', async t => {
  t.plan(2)
  let { url } = await aws.S3.GetPresignedUrl({
    Bucket: 'test.bucket',
    Key: object_name
  })
  t.ok(url, 'Should return a presigned URL')
  t.ok(url.includes('test.bucket.s3.'), 'URL should use path-style for bucket with periods')
})

test('Delete object', async t => {
  t.plan(1)
  let deleteObjectResponse = await aws.S3.DeleteObject({
    Bucket: bucket_name,
    Key: object_name
  })
  t.ok(deleteObjectResponse, `Deleted object ${object_name}`)
})

test('Delete bucket', async t => {
  t.plan(1)
  let deleteBucketResponse = await aws.S3.DeleteBucket({
    Bucket: bucket_name
  })
  t.ok(deleteBucketResponse, `Deleted bucket ${bucket_name}`)
})

test('Tear down env', async t => {
  t.plan(2)
  await s3rver.close()
  t.pass('Server ended')
  mockTmp.reset()
  t.pass(`mockTmp removed`)
})
