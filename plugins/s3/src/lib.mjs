
function getHost ({ Bucket }, { region, config }) {
  // Deprecated path-style URLs, still necessary for buckets with periods
  if (/\./.test(Bucket)) {
    return {
      host: config.host || `s3.${region}.amazonaws.com`,
      pathPrefix: `/${Bucket}`,
    }
  }
  // Current virtual-hosted-style URls
  return { host: `${Bucket}.` + (config.host || `s3.${region}.amazonaws.com`) }
}

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
  AcceptRanges:                  'accept-ranges',
  AccessPointAlias:              'x-amz-access-point-alias',
  ACL:                           'x-amz-acl',
  ArchiveStatus:                 'x-amz-archive-status',
  BucketKeyEnabled:              'x-amz-server-side-encryption-bucket-key-enabled',
  BucketLocationName:            'x-amz-bucket-location-name',
  BucketLocationType:            'x-amz-bucket-location-type',
  BucketRegion:                  'x-amz-bucket-region',
  BypassGovernanceRetention:     'x-amz-bypass-governance-retention',
  CacheControl:                  'cache-control',
  ChecksumAlgorithm:             'x-amz-sdk-checksum-algorithm',
  ChecksumCRC32:                 'x-amz-checksum-crc32',
  ChecksumCRC32C:                'x-amz-checksum-crc32c',
  ChecksumMode:                  'x-amz-checksum-mode',
  ChecksumSHA1:                  'x-amz-checksum-sha1',
  ChecksumSHA256:                'x-amz-checksum-sha256',
  ConfirmRemoveSelfBucketAccess: 'x-amz-confirm-remove-self-bucket-access',
  ContentDisposition:            'content-disposition',
  ContentEncoding:               'content-encoding',
  ContentLanguage:               'content-language',
  ContentLength:                 'content-length',
  ContentMD5:                    'content-md5',
  ContentRange:                  'content-range',
  ContentType:                   'content-type',
  DeleteMarker:                  'x-amz-delete-marker',
  ETag:                          'etag',
  ExpectedBucketOwner:           'x-amz-expected-bucket-owner',
  Expiration:                    'x-amz-expiration',
  Expires:                       'expires',
  GrantFullControl:              'x-amz-grant-full-control',
  GrantRead:                     'x-amz-grant-read',
  GrantReadACP:                  'x-amz-grant-read-acp',
  GrantWrite:                    'x-amz-grant-write',
  GrantWriteACP:                 'x-amz-grant-write-acp',
  IfMatch:                       'if-match',
  IfModifiedSince:               'if-modified-since',
  IfNoneMatch:                   'if-none-match',
  IfUnmodifiedSince:             'if-unmodified-since',
  LastModified:                  'last-modified',
  MFA:                           'x-amz-mfa',
  MissingMeta:                   'x-amz-missing-meta',
  ObjectLockEnabledForBucket:    'x-amz-bucket-object-lock-enabled',
  ObjectLockLegalHoldStatus:     'x-amz-object-lock-legal-hold',
  ObjectLockMode:                'x-amz-object-lock-mode',
  ObjectLockRetainUntilDate:     'x-amz-object-lock-retain-until-date',
  ObjectOwnership:               'x-amz-object-ownership',
  OptionalObjectAttributes:      'x-amz-optional-object-attributes',
  PartsCount:                    'x-amz-mp-parts-count',
  Range:                         'range',
  ReplicationStatus:             'x-amz-replication-status',
  RequestCharged:                'x-amz-request-charged',
  RequestPayer:                  'x-amz-request-payer',
  Restore:                       'x-amz-restore',
  ServerSideEncryption:          'x-amz-server-side-encryption',
  SkipDestinationValidation:     'x-amz-skip-destination-validation',
  SSECustomerAlgorithm:          'x-amz-server-side-encryption-customer-algorithm',
  SSECustomerKey:                'x-amz-server-side-encryption-customer-key',
  SSECustomerKeyMD5:             'x-amz-server-side-encryption-customer-key-md5',
  SSEKMSEncryptionContext:       'x-amz-server-side-encryption-context',
  SSEKMSKeyId:                   'x-amz-server-side-encryption-aws-kms-key-id',
  StorageClass:                  'x-amz-storage-class',
  TagCount:                      'x-amz-tagging-count',
  Tagging:                       'x-amz-tagging',
  Token:                         'x-amz-bucket-object-lock-token',
  VersionId:                     'x-amz-version-id',
  WebsiteRedirectLocation:       'x-amz-website-redirect-location',
}
// Invert headerMappings for header-based lookups
const paramMappings = Object.fromEntries(Object.entries(headerMappings).map(([ k, v ]) => [ v, k ]))

// Take a response, and parse its headers into the AWS-named params of headerMappings
const quoted = /^".*"$/
const ignoreHeaders = [ 'content-length', 'content-type' ]
const isNum = [ 'content-length' ]
const parseHeadersToResults = ({ headers }, utils, ignore) => {
  let results = Object.entries(headers).reduce((acc, [ header, value ]) => {
    const normalized = header.toLowerCase()
    /**/ if (value === 'true') value = true
    else if (value === 'false') value = false
    else if (value.match(quoted)) {
      value = value.substring(1, value.length - 1)
    }
    let ignored = ignore || ignoreHeaders
    if (paramMappings[normalized] && !ignored.includes(normalized)) {
      if (normalized === 'last-modified') value = new Date(value)
      if (isNum.includes(normalized)) value = Number(value)
      acc[paramMappings[normalized]] = value
    }
    else if (normalized.startsWith('x-amz-meta-')) {
      // Handle user-defined metadata
      const metaKey = normalized.substring('x-amz-meta-'.length)
      acc.Metadata = acc.Metadata || {}
      acc.Metadata[metaKey] = value
    }
    return acc
  }, {})
  return results
}

function getHeadersFromParams (params, ignore = []) {
  let headers = Object.keys(params).reduce((acc, param) => {
    if (param === 'Metadata') {
      Object.entries(params[param]).forEach(([ key, val ]) => {
        acc[`x-amz-meta-${key.replace(/\s/g, '-')}`] = val
      })
    }
    else if (headerMappings[param] && !ignore.includes(param)) {
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
  Id: 'id',
  KeyMarker: 'key-marker',
  MaxKeys: 'max-keys',
  MaxUploads: 'max-uploads',
  PartNumber: 'partNumber',
  Prefix: 'prefix',
  ResponseCacheControl: 'response-cache-control',
  ResponseContentDisposition: 'response-content-disposition',
  ResponseContentEncoding: 'response-content-encoding',
  ResponseContentLanguage: 'response-content-language',
  ResponseContentType: 'response-content-type',
  ResponseExpires: 'response-expires',
  StartAfter: 'start-after',
  UploadId: 'uploadId',
  UploadIdMarker: 'upload-id-marker',
  VersionId: 'versionId',
}

function changeObjectKey (object, oldKey, newKey) {
  if (object[oldKey]) {
    object[newKey] = object[oldKey]
    delete object[oldKey]
  }
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

function serializeRequestFilter (Filter) {
  const { And, Prefix, Tag } = Filter
  let result = {}
  if (And) {
    const { Prefix, Tags } = And
    result.And = {}
    if (Prefix) result.And.Prefix = Prefix
    if (Tags) result.And.Tag = Tags
  }
  else if (Prefix) {
    result.Prefix = Prefix
  }
  else {
    result.Tag = Tag
  }
  return result
}

function normalizeResponseFilter (Filter) {
  if (Filter.And?.Tag) {
    Filter.And.Tags = Filter.And.Tag
    delete Filter.And.Tag
  }
}

function arrayifyAndMoveObject (object, oldKey, newKey) {
  if (!Array.isArray(object[oldKey])) {
    object[oldKey] = [ object[oldKey] ]
  }
  changeObjectKey(object, oldKey, newKey)
}

async function makeChecksumSHA256 (utils, payload, params) {
  const { createHash } = await import('node:crypto')
  const { buildXML } = utils
  const payloadXML = buildXML(payload, params)
  return Buffer.from(createHash('sha256').update(payloadXML).digest()).toString('base64')
}

export default {
  arrayifyAndMoveObject,
  changeObjectKey,
  getHeadersFromParams,
  getHost,
  getQueryFromParams,
  getValidateHeaders,
  headerMappings,
  makeChecksumSHA256,
  normalizeResponseFilter,
  paramMappings,
  parseHeadersToResults,
  serializeRequestFilter,
}
