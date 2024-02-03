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
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }

const Bucket = { ...str, required, comment: 'S3 bucket name' }
const Key = { ...str, required, comment: 'S3 key / file name' }
const PartNumber = { ...num, comment: 'Part number (between 1 - 10,000) of the object' }
const VersionId = { ...str, comment: 'Reference a specific version of the object' }

function getHost ({ Bucket }, { region, config }) {
  // Deprecated path-style URLs, still necessary for buckets with periods
  if (/\./.test(Bucket)) {
    return {
      host: config.host || `s3.${region}.amazonaws.com`,
      pathPrefix: `/${Bucket}`
    }
  }
  // Current virtual-hosted-style URls
  return { host: `${Bucket}.` + (config.host || `s3.${region}.amazonaws.com`) }
}
const defaultResponse = ({ payload }) => payload || {}
const defaultError = ({ statusCode, error }) => {
  // SDK v2 lowcases `code`
  if (error?.Code) {
    error.name = error.code = error.Code
    delete error.Code
  }
  return { statusCode, error }
}

const CreateBucket = {
  awsDoc: docRoot + 'API_CreateBucket.html',
  validate: {
    Bucket,
    CreateBucketConfiguration: { ...obj, comment: 'Complete bucket configuration object', ref: docRoot + 'API_CreateBucket.html#API_CreateBucket_RequestSyntax' },
    ...getValidateHeaders('ACL', 'GrantFullControl', 'GrantRead', 'GrantReadACP', 'GrantWrite', 'GrantWriteACP', 'ObjectLockEnabledForBucket', 'ObjectOwnership'),
  },
  request: (params, utils) => {
    const { CreateBucketConfiguration } = params
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'PUT',
      host,
      pathPrefix,
      headers: { ...xml, ...getHeadersFromParams(params) },
      payload: CreateBucketConfiguration ? { CreateBucketConfiguration } : undefined,
    }
  },
  response: ({ headers }) => {
    return { Location: headers.Location || headers.location }
  }
}

const DeleteBucket = {
  awsDoc: docRoot + 'API_DeleteBucket.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      headers: { ...getHeadersFromParams(params) },
    }
  },
  response: () => ({}),
}

const DeleteObject = {
  awsDoc: docRoot + 'API_DeleteObject.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('MFA', 'RequestPayer', 'BypassGovernanceRetention', 'ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { Key } = params
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: `/${Key}`,
      headers: { ...xml, ...getHeadersFromParams(params) },
    }
  },
  response: defaultResponse,
}

const DeleteObjects = {
  awsDoc: docRoot + 'API_DeleteObjects.html',
  validate: {
    Bucket,
    Delete: { ...obj, required, comment: 'Object deletion request' },
    ...getValidateHeaders('MFA', 'RequestPayer', 'BypassGovernanceRetention', 'ExpectedBucketOwner', 'ChecksumAlgorithm', 'ContentMD5'),
  },
  request: async (params, utils) => {
    const { buildXML } = utils
    const { Delete } = params
    const payload = { Delete: { Object: Delete.Objects } }
    const payloadXML = buildXML(payload)
    const { createHash } = await import('node:crypto')
    const checksum = Buffer.from(createHash('sha256').update(payloadXML).digest()).toString('base64')
    const { host, pathPrefix } = getHost(params, utils)

    return {
      host,
      pathPrefix,
      path: '/?delete',
      headers: { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum },
      payload,
    }
  },
  response: defaultResponse,
}

const GetObject = {
  awsDoc: docRoot + 'API_GetObject.html',
  validate: {
    Bucket,
    Key,
    PartNumber,
    VersionId,
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
    // Not strictly necessary since users can pass this through with any request, but it's good for folks to know it's available on this particular method
    rawResponsePayload:         { ...bool, comment: 'Set to `true` to return all files as buffers, and disable automatic parsing of JSON and XML' }
  },
  request: (params, utils) => {
    const { Key, rawResponsePayload = false } = params
    const queryParams = [ 'PartNumber', 'ResponseCacheControl', 'ResponseContentDisposition',
      'ResponseContentEncoding', 'ResponseContentLanguage', 'ResponseContentType',
      'ResponseExpires', 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
      rawResponsePayload,
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

const HeadBucket = {
  awsDoc: docRoot + 'API_HeadBucket.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'HEAD',
      host,
      pathPrefix,
      headers: getHeadersFromParams(params),
    }
  },
  response: parseHeadersToResults,
  error: defaultError,
}

const HeadObject = {
  awsDoc: docRoot + 'API_HeadObject.html',
  validate: {
    Bucket,
    Key,
    PartNumber,
    VersionId,
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode'),
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'PartNumber', 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'HEAD',
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
    }
  },
  response: ({ headers }) => parseHeadersToResults({ headers }, null, []),
  error: params => {
    if (params.statusCode === 404) {
      params.error = params.error || {}
      params.error.code = params.error.code || 'NotFound'
    }
    return defaultError(params)
  },
}

const ListBuckets = {
  awsDoc: docRoot + 'API_ListBuckets.html',
  validate: {},
  request: () => ({}),
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
  request: (params, utils) => {
    const { paginate } = params
    const queryParams = [ 'ContinuationToken', 'Delimiter', 'EncodingType', 'FetchOwner', 'MaxKeys', 'Prefix', 'StartAfter' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams) || {}
    query['list-type'] = 2
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
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
    if (payload.Contents) {
      payload.Contents = Array.isArray(payload.Contents) ? payload.Contents : [ payload.Contents ]
    }
    return res
  },
  error: defaultError,
}

const methods = { CreateBucket, DeleteBucket, DeleteObject, DeleteObjects, GetObject, HeadObject, HeadBucket, ListBuckets, ListObjectsV2, PutObject, ...incomplete }
export default { service, property, methods }
