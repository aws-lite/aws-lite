import { createReadStream } from 'node:fs'
import { Readable } from 'node:stream'
import lib from './lib.mjs'
const { getHeadersFromParams, getHost, getQueryFromParams, getValidateHeaders, parseHeadersToResults } = lib

const required = true
const MB = 1024 * 1024
const tenMB = 10 * MB
const xml = { 'content-type': 'application/xml' }

const Upload = {
  awsDoc: false,
  customResponse: `{
    CompleteMultipartUpload: {
        Part: any;
    };
  }`,
  validate: {
    Bucket:       { type: 'string', required, comment: 'S3 bucket name' },
    Key:          { type: 'string', required, comment: 'S3 key / file name' },
    Body:         { type: [ 'buffer', 'stream', 'string' ], comment: 'String or buffer to be uploaded; per S3, size should be 5MB or greater' },
    File:         { type: 'string', comment: 'File path to be read and uploaded from the local filesystem; per S3, size should be 5MB or greater' },
    ChunkSize:    { type: 'number', comment: 'Size of each chunk to upload in byes (also aliased to `partSize`); default is 10 MB' },
    Concurrency:  { type: 'number', comment: 'Maximum concurrent uploads (also aliased to `queueSize`); default is 5, setting to 1 synchronously, sequentially uploads chunks; memory consumption is (`ChunkSize` + 1) * `Concurrency`'  },
    ...getValidateHeaders(
      'ACL', 'BucketKeyEnabled', 'CacheControl', 'ChecksumAlgorithm',
      'ChecksumCRC32', 'ChecksumCRC32C', 'ChecksumSHA1', 'ChecksumSHA256', 'ContentDisposition',
      'ContentEncoding', 'ContentLanguage', 'ContentType', 'ExpectedBucketOwner', 'Expires',
      'GrantFullControl', 'GrantRead', 'GrantReadACP', 'GrantWriteACP', 'ObjectLockLegalHoldStatus',
      'ObjectLockMode', 'ObjectLockRetainUntilDate', 'RequestPayer', 'ServerSideEncryption',
      'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'SSEKMSEncryptionContext',
      'SSEKMSKeyId', 'StorageClass', 'Tagging', 'WebsiteRedirectLocation',
    ),
    Metadata: { type: 'object', comment: 'Key / value pairs of object metadata; must conform to S3 metadata guidelines', ref: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html' },
  },
  request,
  response: ({ payload, headers }) => ({ ...payload || {}, ...parseHeadersToResults({ headers }) }),
}

// Of all `Upload` params, only these belong to the requests that follow `CreateMultipartUpload`
const multipartParams = [ 'Bucket', 'Key', 'ExpectedBucketOwner', 'RequestPayer' ]
const sseParams = [ 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5' ]
const partParams = [ ...multipartParams, ...sseParams, 'ChecksumAlgorithm' ]
const completeParams = [ ...multipartParams, ...sseParams, 'ChecksumCRC32', 'ChecksumCRC32C', 'ChecksumSHA1', 'ChecksumSHA256' ]

function pick (params, keys) {
  return Object.fromEntries(keys.filter(key => params[key] !== undefined).map(key => [ key, params[key] ]))
}

async function request (params, utils) {
  const { File, Body } = params
  const { config } = utils

  if (File && Body) {
    throw ReferenceError('Only `File` or `Body` can be provided, not both')
  }
  if (!File && !Body) {
    throw ReferenceError('Must provide `File` or `Body`')
  }

  const { host, pathPrefix } = getHost(params, utils)

  const { S3 } = utils.client
  const multipartUpload = await S3.CreateMultipartUpload(params)
  const { UploadId } = multipartUpload
  if (config.debug) {
    console.error(`[S3.Upload] Created new multipart upload with ID: ${UploadId}`)
  }

  const queryParams = [ 'UploadId' ]
  let Parts

  try {
    Parts = await processUpload(params, utils, UploadId)
  }
  catch (err) {
    await S3.AbortMultipartUpload({ ...pick(params, multipartParams), UploadId })
    throw err
  }

  const completeUpload = { ...pick(params, completeParams), UploadId }
  const headers = getHeadersFromParams(completeUpload, queryParams)
  const query = getQueryFromParams(completeUpload, queryParams)
  return {
    host,
    pathPrefix,
    path: `/${params.Key}`,
    query,
    headers: { ...xml, ...headers },
    payload: { CompleteMultipartUpload: { Part: Parts } }, // XML interpolation shenanigans
    xmlns: 'http://s3.amazonaws.com/doc/2006-03-01/',
  }
}

function processUpload (params, utils, UploadId) {
  return new Promise((res, rej) => {
    const { File, Body } = params
    const { config, client } = utils
    const { S3 } = client

    const ChunkSize = params.ChunkSize || params.partSize || tenMB
    const Concurrency = params.Concurrency || params.queueSize || 5
    // Stop reading while this much data is waiting for or in upload, see `Concurrency` docs
    const maxBuffered = ChunkSize * Concurrency

    const part = { ...pick(params, partParams), UploadId }
    const queue = [] // The work queue
    const finalPartList = []

    let chunks = [] // Data of the next part, concatenated once it is complete
    let chunksLength = 0
    let buffered = 0
    let counter = 1
    let raw = 0
    let running = 0
    let done = false
    let error = false

    let stream
    const bodyIsStream = Body?.on && Body?._read && Body?._readableState
    if (bodyIsStream) {
      stream = Body
    }
    else if (Body) {
      stream = Readable.from(Body, { objectMode: false })
    }
    else {
      stream = createReadStream(File)
    }

    // Settle once no part is uploading anymore
    // Why: we see occasional `write EPIPE` errors when aborting multipart uploads while a part is still being uploaded
    function settle () {
      if (running) return
      if (error) rej(error)
      else if (done && !queue.length) res(finalPartList.sort((a, b) => a.PartNumber - b.PartNumber))
    }

    function terminate (err) {
      if (!error) error = err
      // Stop queueing more work and kill the stream
      stream.destroy()
      settle()
    }

    function enqueue () {
      const Body = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks, chunksLength)
      queue.push({ PartNumber: counter++, Body })
      chunks = []
      chunksLength = 0
      publish()
    }

    function publish () {
      while (running < Concurrency && queue.length && !error) {
        running++
        const { PartNumber, Body } = queue.shift()
        if (config.debug) {
          console.error(`[S3.Upload] Uploading part ${PartNumber}, ${Body.length}b`)
        }

        S3.UploadPart({ ...part, PartNumber, Body })
          .then(({ ETag }) => {
            running--
            buffered -= Body.length
            finalPartList.push({ PartNumber, ETag })
            if (stream.isPaused() && buffered < maxBuffered) {
              stream.resume()
            }
            publish()
            settle()
          }, err => {
            running--
            terminate(err)
          })
      }
    }

    stream.on('data', chunk => {
      raw += chunk.length
      buffered += chunk.length
      // Fill parts of exactly `ChunkSize`, splitting chunks as needed
      while (chunk.length) {
        const data = chunk.subarray(0, ChunkSize - chunksLength)
        chunks.push(data)
        chunksLength += data.length
        chunk = chunk.subarray(data.length)
        if (chunksLength === ChunkSize) enqueue()
      }

      if (buffered >= maxBuffered) {
        if (config.debug) {
          console.error(`[S3.Upload] Stream temporarily paused to finish concurrent uploads`)
        }
        stream.pause()
      }
    })

    stream.on('error', terminate)

    stream.on('end', () => {
      done = true
      // Send whatever remains in the last part; S3 requires at least one part, so an empty body is sent as one empty part
      if (chunksLength || counter === 1) enqueue()

      if (config.debug) {
        console.error(`[S3.Upload] readable stream ended after ${raw}b, clearing remaining upload queue`)
      }
      settle()
    })
  })
}

export default Upload
