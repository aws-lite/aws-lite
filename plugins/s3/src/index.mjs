import incomplete from './incomplete.mjs'
import lib from './lib.mjs'
const { getValidateHeaders, getHeadersFromParams, getQueryFromParams, paramMappings, parseHeadersToResults } = lib
import PutObject from './put-object.mjs'

const service = 's3'
const property = 'S3'
const required = true

const defaultError = ({ statusCode, error }) => {
  // SDK v2 lowcases `code`
  if (error?.Code) {
    error.name = error.code = error.Code
    delete error.Code
  }
  return { statusCode, error }
}

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
  response: async ({ headers, payload }) => {
    return {
      Body: payload,
      ...parseHeadersToResults({ headers }, null, [])
    }
  },
  error: defaultError,
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
  response: async ({ headers }) => parseHeadersToResults({ headers }, null, []),
  error: defaultError,
}

const ListBuckets = {
  awsDoc: 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html',
  validate: {},
  request: async () => {
    return {
      endpoint: '/',
    }
  },
  response: async ({ payload }) => {
    return payload
  },
  error: defaultError,
}

const ListObjectsV2 = {
  awsDoc: 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html',
  validate: {
    Bucket:             { type: 'string', required, comment: 'S3 bucket name' },
    ContinuationToken:  { type: 'string', comment: 'Pagination cursor token (returned as `NextContinuationToken`' },
    Delimiter:          { type: 'string', comment: 'Delimiter character used to group keys' },
    EncodingType:       { type: 'string', comment: 'Object key encoding type (must be `url`)' },
    FetchOwner:         { type: 'string', comment: 'Return owner field with results' },
    MaxKeys:            { type: 'number', comment: 'Set the maximum number of keys returned per response' },
    Prefix:             { type: 'string', comment: 'Limit response to keys that begin with the specified prefix' },
    StartAfter:         { type: 'string', comment: 'Starts listing after any specified key in the bucket' },
    // Here come the headers
    ...getValidateHeaders('RequestPayer', 'ExpectedBucketOwner', 'OptionalObjectAttributes'),
    paginate:           { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
  },
  request: async (params) => {
    let { Bucket, paginate } = params
    let queryParams = [ 'ContinuationToken', 'Delimiter', 'EncodingType', 'FetchOwner', 'MaxKeys', 'Prefix', 'StartAfter' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams) || {}
    query['list-type'] = 2
    return {
      endpoint: `/${Bucket}`,
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'Contents' }
    }
  },
  response: async ({ headers, payload }) => {
    const res = payload
    const charged = 'x-amz-request-charged'
    if (headers[charged]) res[paramMappings[charged]] = headers[charged]
    return res
  },
  error: defaultError,
}

const methods = { GetObject, HeadObject, ListBuckets, ListObjectsV2, PutObject, ...incomplete }
export default { service, property, methods }
