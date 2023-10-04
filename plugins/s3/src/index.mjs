import incomplete from './incomplete.mjs'
import lib from './lib.mjs'
const { getValidateHeaders, getHeadersFromParams, getQueryFromParams, parseHeadersToResults } = lib
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
    VersionId:                  { type: 'string', comment: 'Reference a specific version of the object' },
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode'),
    ResponseCacheControl:       { type: 'string', comment: 'Sets response header: `cache-control`' },
    ResponseContentDisposition: { type: 'string', comment: 'Sets response header: `content-disposition`' },
    ResponseContentEncoding:    { type: 'string', comment: 'Sets response header: `content-encoding`' },
    ResponseContentLanguage:    { type: 'string', comment: 'Sets response header: `content-language`' },
    ResponseContentType:        { type: 'string', comment: 'Sets response header: `content-type`' },
    ResponseExpires:            { type: 'string', comment: 'Sets response header: `expires`' },
  },
  request: async (params) => {
    let { Bucket, Key } = params
    let queryParams = [ 'PartNumber', 'ResponseCacheControl', 'ResponseContentDisposition',
      'ResponseContentEncoding', 'ResponseContentLanguage', 'ResponseContentType',
      'ResponseExpires', 'VersionId' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams)
    return {
      endpoint: `/${Bucket}/${Key}`,
      headers,
      query,
    }
  },
  response: ({ payload }) => payload,
}

const HeadObject = {
  awsDoc: 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html',
  validate: {
    Bucket:                     { type: 'string', required, comment: 'S3 bucket name' },
    Key:                        { type: 'string', required, comment: 'S3 key / file name' },
    PartNumber:                 { type: 'number', comment: 'Part number (between 1 - 10,000) of the object' },
    VersionId:                  { type: 'string', comment: 'Reference a specific version of the object' },
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode'),
  },
  request: async (params) => {
    let { Bucket, Key } = params
    let queryParams = [ 'PartNumber', 'VersionId' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams)
    return {
      endpoint: `/${Bucket}/${Key}`,
      method: 'HEAD',
      headers,
      query,
    }
  },
  response: parseHeadersToResults,
}

const methods = { GetObject, HeadObject, PutObject, ...incomplete }
export default { service, methods }
