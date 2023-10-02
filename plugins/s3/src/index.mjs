import incomplete from './incomplete.mjs'
import lib from './lib.mjs'
const { getValidateHeaders, headerMappings } = lib
import PutObject from './put-object.mjs'

const service = 's3'
const required = true

/**
 * Plugin maintained by: @architect
 */

const GetObject = {
  awsDoc: 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html',
  validate: {
    Bucket:                     { type: 'string', required, comment: 'S3 bucket name' },
    Key:                        { type: 'string', required, comment: 'S3 key / file name' },
    PartNumber:                 { type: 'number', comment: 'Part number (between 1 - 10,000) of the object' },
    ResponseCacheControl:       { type: 'string', comment: 'Sets the cache-control header of the response' },
    ResponseContentDisposition: { type: 'string', comment: 'Sets the content-disposition header of the response' },
    ResponseContentEncoding:    { type: 'string', comment: 'Sets the content-encoding header of the response' },
    ResponseContentLanguage:    { type: 'string', comment: 'Sets the content-language header of the response' },
    ResponseContentType:        { type: 'string', comment: 'Sets the content-type header of the response' },
    ResponseExpires:            { type: 'string', comment: 'Sets the expires header of the response' },
    VersionId:                  { type: 'string', comment: 'Reference a specific version of the object' },
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode')
  },
  request: async (params) => {
    let { Bucket, Key } = params
    let ignoreHeaders = [ 'VersionId' ]
    let headers = Object.keys(params).reduce((acc, param) => {
      if (headerMappings[param] && !ignoreHeaders.includes(param)) {
        acc[headerMappings[param]] = params[param]
      }
      return acc
    }, {})

    let query
    let queryParams = [ 'PartNumber', 'ResponseCacheControl', 'ResponseContentDisposition',
      'ResponseContentEncoding', 'ResponseContentLanguage', 'ResponseContentType',
      'ResponseExpires', 'VersionId' ]
    queryParams.forEach(p => {
      if (params[p]) {
        if (!query) query = {}
        query[p] = params[p]
      }
    })
    return {
      path: `/${Bucket}/${Key}`,
      headers,
      query,
    }
  },
  response: ({ payload }) => payload,
}

const methods = { GetObject, PutObject, ...incomplete }
export default { service, methods }
