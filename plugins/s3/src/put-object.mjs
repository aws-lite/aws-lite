import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import lib from './lib.mjs'
const { getHeadersFromParams, getValidateHeaders, parseHeadersToResults } = lib

const required = true
const maxDataSize = 5 * 1024 * 1024 * 1024 // 5GiB

const PutObject = {
  awsDoc: 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html',
  // See also: https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-streaming.html
  validate: {
    Bucket:       { type: 'string', required, comment: 'S3 bucket name' },
    Key:          { type: 'string', required, comment: 'S3 key / file name' },
    Body:         { type: [ 'string', 'buffer' ], comment: 'String or buffer to be uploaded' },
    File:         { type: 'string', comment: 'File path to be read and uploaded from the local filesystem' },
    // Here come the headers
    ...getValidateHeaders('ACL', 'BucketKeyEnabled', 'CacheControl', 'ChecksumAlgorithm', 'ChecksumCRC32',
      'ChecksumCRC32C', 'ChecksumSHA1', 'ChecksumSHA256', 'ContentDisposition', 'ContentEncoding',
      'ContentLanguage', 'ContentLength', 'ContentMD5', 'ContentType', 'ExpectedBucketOwner', 'Expires',
      'GrantFullControl', 'GrantRead', 'GrantReadACP', 'GrantWriteACP', 'ObjectLockLegalHoldStatus',
      'ObjectLockMode', 'ObjectLockRetainUntilDate', 'RequestPayer', 'ServerSideEncryption',
      'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'SSEKMSEncryptionContext',
      'SSEKMSKeyId', 'StorageClass', 'Tagging', 'WebsiteRedirectLocation')
  },
  request: async (params) => {
    let { Bucket, Key, File, Body } = params

    if (File && Body) {
      throw ReferenceError('Only `File` or `Body` can be provided, not both')
    }
    if (!File && !Body) {
      throw ReferenceError('Must provide `File` or `Body`')
    }

    let headers = getHeadersFromParams(params)
    let dataSize

    if (Body) {
      dataSize = Body.length
    }
    else {
      try {
        let stats = await stat(File)
        dataSize = stats.size
      }
      catch (err) {
        console.log(`Error reading file: ${File}`)
        throw err
      }
    }

    if (dataSize > maxDataSize) {
      throw RangeError(`PutObject data size (${dataSize}B) is greater than 5GiB limit`)
    }

    return {
      path: `/${Bucket}/${Key}`,
      method: 'PUT',
      headers: {
        ...headers,
        'content-length': dataSize,
        'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',
      },
      payload: Body || createReadStream(File),
    }
  },
  response: parseHeadersToResults,
}

export default PutObject
