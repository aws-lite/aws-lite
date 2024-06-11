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
  validate: {
    Bucket:       { type: 'string', required, comment: 'S3 bucket name' },
    Key:          { type: 'string', required, comment: 'S3 key / file name' },
    Body:         { type: [ 'buffer', 'stream', 'string' ], comment: 'String or buffer to be uploaded' },
    File:         { type: 'string', comment: 'File path to be read and uploaded from the local filesystem' },
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
    await S3.AbortMultipartUpload({ ...params, UploadId })
    throw err
  }

  const headers = getHeadersFromParams({ ...params, UploadId }, queryParams)
  const query = getQueryFromParams({ ...params, UploadId }, queryParams)
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
    let running = 0
    let error = false
    let pubInterval, errInterval
    let stream

    // Gracefully wait before terminating
    // Why: we see occasional `write EPIPE` errors when aborting multipart uploads while a part is still being uploaded
    // So allow current async operations to finish before rejecting
    function terminate () {
      if (!errInterval) errInterval = setInterval(terminate, 50)

      // Stop queueing more work and kill the stream
      clearInterval(pubInterval)
      stream.destroy()

      if (running === 0) {
        clearInterval(errInterval)
        rej(error)
      }
    }

    try {
      const { File, Body } = params
      const { config, client } = utils
      const { S3 } = client

      const ChunkSize = params.ChunkSize || params.partSize || tenMB
      const Concurrency = params.Concurrency || params.queueSize || 5

      const parts = {} // Data is loaded here with sequence properties before being queued
      const queue = [] // The work queue
      const finalPartList = []

      let counter = 1
      let raw = 0
      let done = false

      const bodyIsStream = Body?.on && Body?._read && Body?._readableState
      if (bodyIsStream) {
        stream = Body
      }
      else if (Body) {
        stream = new Readable()
        stream.push(Body)
      }
      else {
        stream = createReadStream(File)
      }

      stream.on('data', chunk => {
        raw += chunk.length
        if (!parts[counter]) parts[counter] = chunk
        else {
          parts[counter] = Buffer.concat([ parts[counter], chunk ])
          check()
        }

        // Feasible to accomplish publishing without an interval, but this is a pretty simple way to ensure any work remaining at the end of the queue is tidily wrapped up
        if (!pubInterval) pubInterval = setInterval(publish, 50)

        if (running === Concurrency && queue.length) {
          if (config.debug) {
            console.error(`[S3.Upload] Stream temporarily paused to finish concurrent uploads`)
          }
          stream.pause()
        }
      })

      function check () {
        if (parts[counter].length > ChunkSize) {
          const last = counter
          counter++
          parts[counter] = parts[last].subarray(ChunkSize)
          enqueue(last)
          // Run again in case the incoming chunk is so big it generates multiple parts
          check()
        }
      }

      function enqueue (i) {
        const Body = parts[i].subarray(0, ChunkSize)
        // Low odds, but the final call may have 0b remaining in the buffer
        if (Body.length) {
          queue.push({ PartNumber: i, Body })
        }
        delete parts[i]
      }

      function publish () {
        if (running < Concurrency && queue.length && !error) {
          running++
          const { PartNumber, Body } = queue.shift()
          if (config.debug) {
            console.error(`[S3.Upload] Uploading part ${PartNumber}, ${Body.length}b`)
          }

          S3.UploadPart({ ...params, UploadId, PartNumber, Body })
            .then(result => {
              running--
              const { ETag } = result
              finalPartList.push({ PartNumber, ETag })

              if (stream.isPaused()) {
                stream.resume()
              }
              // This was the last part to upload, yay!
              if (running === 0 && done && !queue.length && !error) {
                clearInterval(pubInterval)
                res(finalPartList.sort((a, b) => a.PartNumber - b.PartNumber))
              }
            })
            .catch(err => {
              running--
              if (!error) error = err
              terminate()
            })
          // Continue attempting to clear the queue
          publish()
        }
      }

      stream.on('error', err => {
        if (!error) error = err
        terminate()
      })

      stream.on('end', () => {
        done = true
        // Whatever remains in the latest part, send that
        enqueue(counter)
        if (config.debug) {
          console.error(`[S3.Upload] readable stream ended after ${raw}b, clearing remaining upload queue`)
        }
      })
    }
    catch (err) {
      if (!error) error = err
      terminate()
    }
  })
}

export default Upload
