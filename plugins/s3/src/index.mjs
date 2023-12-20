/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import lib from './lib.mjs'
const { getValidateHeaders, getHeadersFromParams, getQueryFromParams, paramMappings, parseHeadersToResults } = lib
import PutObject from './put-object.mjs'

const service = 's3'
const property = 'S3'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AmazonS3/latest/API/'

// Validation types
// const arr = { type: 'array' }
const bool = { type: 'boolean' }
// const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const Bucket = { ...str, required, comment: 'S3 bucket name' }

const host = Bucket => `${Bucket}.s3.amazonaws.com`
const defaultError = ({ statusCode, error }) => {
  // SDK v2 lowcases `code`
  if (error?.Code) {
    error.name = error.code = error.Code
    delete error.Code
  }
  return { statusCode, error }
}

const GetObject = {
  awsDoc: docRoot + 'API_GetObject.html',
  validate: {
    Bucket,
    Key:                        { ...str, required, comment: 'S3 key / file name' },
    PartNumber:                 { ...num, comment: 'Part number (between 1 - 10,000) of the object' },
    VersionId:                  { ...str, comment: 'Reference a specific version of the object' },
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode'),
    ResponseCacheControl:       { ...str, comment: 'Sets response header: `cache-control`' },
    ResponseContentDisposition: { ...str, comment: 'Sets response header: `content-disposition`' },
    ResponseContentEncoding:    { ...str, comment: 'Sets response header: `content-encoding`' },
    ResponseContentLanguage:    { ...str, comment: 'Sets response header: `content-language`' },
    ResponseContentType:        { ...str, comment: 'Sets response header: `content-type`' },
    ResponseExpires:            { ...str, comment: 'Sets response header: `expires`' },
  },
  request: (params) => {
    let { Bucket, Key } = params
    let queryParams = [ 'PartNumber', 'ResponseCacheControl', 'ResponseContentDisposition',
      'ResponseContentEncoding', 'ResponseContentLanguage', 'ResponseContentType',
      'ResponseExpires', 'VersionId' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams)
    return {
      host: host(Bucket),
      endpoint: `/${Key}`,
      headers,
      query,
    }
  },
  response: ({ headers, payload }) => {
    return {
      Body: payload,
      ...parseHeadersToResults({ headers }, null, [])
    }
  },
  error: defaultError,
}

const HeadObject = {
  awsDoc: docRoot + 'API_HeadObject.html',
  validate: {
    Bucket,
    Key:                        { ...str, required, comment: 'S3 key / file name' },
    PartNumber:                 { ...num, comment: 'Part number (between 1 - 10,000) of the object' },
    VersionId:                  { ...str, comment: 'Reference a specific version of the object' },
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode'),
  },
  request: (params) => {
    let { Bucket, Key } = params
    let queryParams = [ 'PartNumber', 'VersionId' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams)
    return {
      host: host(Bucket),
      endpoint: `/${Key}`,
      method: 'HEAD',
      headers,
      query,
    }
  },
  response: ({ headers }) => parseHeadersToResults({ headers }, null, []),
  error: defaultError,
}

const ListBuckets = {
  awsDoc: docRoot + 'API_ListBuckets.html',
  validate: {},
  request: () => {
    return {
      endpoint: '/',
    }
  },
  response: ({ payload }) => payload,
  error: defaultError,
}

const ListObjectsV2 = {
  awsDoc: docRoot + 'API_ListObjectsV2.html',
  validate: {
    Bucket,
    ContinuationToken:  { ...str, comment: 'Pagination cursor token (returned as `NextContinuationToken`' },
    Delimiter:          { ...str, comment: 'Delimiter character used to group keys' },
    EncodingType:       { ...str, comment: 'Object key encoding type (must be `url`)' },
    FetchOwner:         { ...str, comment: 'Return owner field with results' },
    MaxKeys:            { ...num, comment: 'Set the maximum number of keys returned per response' },
    Prefix:             { ...str, comment: 'Limit response to keys that begin with the specified prefix' },
    StartAfter:         { ...str, comment: 'Starts listing after any specified key in the bucket' },
    // Here come the headers
    ...getValidateHeaders('RequestPayer', 'ExpectedBucketOwner', 'OptionalObjectAttributes'),
    paginate:           { ...bool, comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
  },
  request: (params) => {
    let { Bucket, paginate } = params
    let queryParams = [ 'ContinuationToken', 'Delimiter', 'EncodingType', 'FetchOwner', 'MaxKeys', 'Prefix', 'StartAfter' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams) || {}
    query['list-type'] = 2
    return {
      host: host(Bucket),
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'Contents' }
    }
  },
  response: ({ headers, payload }) => {
    const res = payload
    const charged = 'x-amz-request-charged'
    if (headers[charged]) res[paramMappings[charged]] = headers[charged]
    return res
  },
  error: defaultError,
}

const methods = { GetObject, HeadObject, ListBuckets, ListObjectsV2, PutObject, ...incomplete }
export default { service, property, methods }
