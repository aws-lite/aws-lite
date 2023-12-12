// Generate validation for commonly used headers
const getValidateHeaders = (...headers) => headers.reduce((acc, h) => {
  if (!headerMappings[h]) throw ReferenceError(`Header not found: ${h}`)
  acc[h] = { type: 'string', comment: comment(headerMappings[h]) }
  return acc
}, {})
const comment = header => `Sets request header: \`${header}\``

// Map AWS-named S3 params to their respective headers
// The !x-amz headers are documented by AWS as old school pascal-case headers; lowcasing them to be HTTP 2.0 compliant
const headerMappings = {
  AcceptRanges:               'accept-ranges',
  ACL:                        'x-amz-acl',
  ArchiveStatus:              'x-amz-archive-status',
  BucketKeyEnabled:           'x-amz-server-side-encryption-bucket-key-enabled',
  CacheControl:               'cache-control',
  ChecksumAlgorithm:          'x-amz-sdk-checksum-algorithm',
  ChecksumCRC32:              'x-amz-checksum-crc32',
  ChecksumCRC32C:             'x-amz-checksum-crc32c',
  ChecksumMode:               'x-amz-checksum-mode',
  ChecksumSHA1:               'x-amz-checksum-sha1',
  ChecksumSHA256:             'x-amz-checksum-sha256',
  ContentDisposition:         'content-disposition',
  ContentEncoding:            'content-encoding',
  ContentLanguage:            'content-language',
  ContentLength:              'content-length',
  ContentRange:               'content-range',
  ContentMD5:                 'content-md5',
  ContentType:                'content-type',
  DeleteMarker:               'x-amz-delete-marker',
  ETag:                       'etag',
  ExpectedBucketOwner:        'x-amz-expected-bucket-owner',
  Expiration:                 'x-amz-expiration',
  Expires:                    'expires',
  GrantFullControl:           'x-amz-grant-full-control',
  GrantRead:                  'x-amz-grant-read',
  GrantReadACP:               'x-amz-grant-read-acp',
  GrantWriteACP:              'x-amz-grant-write-acp',
  IfMatch:                    'if-match',
  IfModifiedSince:            'if-modified-since',
  IfNoneMatch:                'if-none-match',
  IfUnmodifiedSince:          'if-unmodified-since',
  LastModified:               'last-modified',
  MissingMeta:                'x-amz-missing-meta',
  ObjectLockLegalHoldStatus:  'x-amz-object-lock-legal-hold',
  ObjectLockMode:             'x-amz-object-lock-mode',
  ObjectLockRetainUntilDate:  'x-amz-object-lock-retain-until-date',
  OptionalObjectAttributes:   'x-amz-optional-object-attributes',
  PartsCount:                 'x-amz-mp-parts-count',
  Range:                      'range',
  ReplicationStatus:          'x-amz-replication-status',
  RequestCharged:             'x-amz-request-charged',
  RequestPayer:               'x-amz-request-payer',
  Restore:                    'x-amz-restore',
  ServerSideEncryption:       'x-amz-server-side-encryption',
  SSECustomerAlgorithm:       'x-amz-server-side-encryption-customer-algorithm',
  SSECustomerKey:             'x-amz-server-side-encryption-customer-key',
  SSECustomerKeyMD5:          'x-amz-server-side-encryption-customer-key-md5',
  SSEKMSEncryptionContext:    'x-amz-server-side-encryption-context',
  SSEKMSKeyId:                'x-amz-server-side-encryption-aws-kms-key-id',
  StorageClass:               'x-amz-storage-class',
  Tagging:                    'x-amz-tagging',
  TagCount:                   'x-amz-tagging-count',
  VersionId:                  'x-amz-version-id',
  WebsiteRedirectLocation:    'x-amz-website-redirect-location',
}
// Invert headerMappings for header-based lookups
const paramMappings = Object.fromEntries(Object.entries(headerMappings).map(([ k, v ]) => [ v, k ]))

// Take a response, and parse its headers into the AWS-named params of headerMappings
const quoted = /^".*"$/
const ignoreHeaders = [ 'content-length' ]
const isNum = [ 'content-length' ]
const parseHeadersToResults = ({ headers }, ignore) => {
  let results = Object.entries(headers).reduce((acc, [ header, value ]) => {
    const normalized = header.toLowerCase()
    if (value === 'true') value = true
    if (value === 'false') value = false
    if (value.match(quoted)) {
      value = value.substring(1, value.length - 1)
    }
    let ignored = ignore || ignoreHeaders
    if (paramMappings[normalized] && !ignored.includes(normalized)) {
      if (normalized === 'last-modified') value = new Date(value)
      if (isNum.includes(normalized)) value = Number(value)
      acc[paramMappings[normalized]] = value
    }
    return acc
  }, {})
  return results
}

function getHeadersFromParams (params, ignore = []) {
  let headers = Object.keys(params).reduce((acc, param) => {
    if (headerMappings[param] && !ignore.includes(param)) {
      acc[headerMappings[param]] = params[param]
    }
    return acc
  }, {})
  return headers
}

const QueryParamMappings = {
  ContinuationToken: 'continuation-token',
  Delimiter: 'delimiter',
  EncodingType: 'encoding-type',
  FetchOwner: 'fetch-owner',
  MaxKeys: 'max-keys',
  PartNumber: 'partNumber',
  Prefix: 'prefix',
  ResponseCacheControl: 'response-cache-control',
  ResponseContentDisposition: 'response-content-disposition',
  ResponseContentEncoding: 'response-content-encoding',
  ResponseContentLanguage: 'response-content-language',
  ResponseContentType: 'response-content-type',
  ResponseExpires: 'response-expires',
  StartAfter: 'start-after',
  VersionId: 'versionId',
}

function getQueryFromParams (params, queryParams) {
  let query
  queryParams.forEach(p => {
    if (params[p] && QueryParamMappings[p]) {
      if (!query) query = {}
      query[QueryParamMappings[p]] = params[p]
    }
  })
  return query
}

export default {
  getValidateHeaders,
  getHeadersFromParams,
  getQueryFromParams,
  headerMappings,
  paramMappings,
  parseHeadersToResults,
}
