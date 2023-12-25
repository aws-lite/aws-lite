/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'cloudfront'
const property = 'CloudFront'
const required = true
const docRoot = 'https://docs.aws.amazon.com/cloudfront/latest/APIReference/'
// const devGuide = 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/'

// Validation types
// const arr = { type: 'array' }
// const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
// const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }

// const CallerReference = { ...str, required, comment: 'Unique value that ensures that the request cannot be replayed' }
// const Comment = { ...str, required, comment: 'Distribution description; must be under 128 characters' }
const Id = { ...str, required, comment: 'Distribution ID' }

const returnNestedAs = (prop) => ({ headers, payload }) => {
  const ETag = headers.etag || headers.ETag
  let result = { [prop]: payload }
  if (ETag) result = { [prop]: payload, ETag }
  parseXMLValues(result)
  return result
}

function maybeConvertString (str) {
  /**/ if (str === 'true') return true
  else if (str === 'false') return false
  else if (str === '') return str
  else if (!isNaN(Number(str))) {
    return Number(str)
  }
  try {
    if (new Date(Date.parse(str)).toISOString() === str) {
      return new Date(str)
    }
  }
  catch {/* noop */}
  return str
}

function parseXMLValues (obj) {
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'string') {
      obj[k] = maybeConvertString(obj[k])
    }
    else if (Array.isArray(obj[k])) {
      obj[k] = obj[k].map(i => maybeConvertString(i))
    }
    else if (typeof obj[k] === 'object') {
      parseXMLValues(obj[k])
    }
  })
}

const CreateDistribution = {
  awsDoc: docRoot + 'API_CreateDistribution.html',
  validate: {
    DistributionConfig: { ...obj, required, comment: 'Complete distribution configuration object', ref: docRoot + 'API_CreateDistribution.html#API_CreateDistribution_RequestSyntax' }
    // TODO enable nested validation
    /*
    CallerReference,
    Comment,
    DefaultCacheBehavior: { ...obj, required, comment: 'Configuration for default cache behavior (if `PathPattern` and `CacheBehavior` are not matched)', ref: docRoot + 'API_DefaultCacheBehavior.html' },
    Enabled: { ...bool, required, comment: 'Enable or disable the distribution' },
    Origins: { ...obj, required, comment: 'Distribution origin configuration', ref: docRoot + 'API_Origins.html' },
    Aliases: { ...obj, comment: 'CNAME configuration', ref: docRoot + 'API_Aliases.html' },
    CacheBehaviors: { ...obj, comment: 'Object containing zero or more `CacheBehavior` elements', ref: docRoot + 'API_CacheBehaviors.html' },
    ContinuousDeploymentPolicyId: { ...obj, comment: 'Continuous deployment policy ID', ref: docRoot + 'API_CreateContinuousDeploymentPolicy.html' },
    CustomErrorResponses: { ...obj, comment: 'Configure error status forwarding and caching', ref: docRoot + 'API_CustomErrorResponses.html' },
    DefaultRootObject: { ...str, comment: 'Default path to request from the origin (e.g. `index.html`)', ref: devGuide + 'DefaultRootObject.html' },
    HttpVersion: { ...str, comment: 'Maximum supported HTTP version; can be set to one of: `http1.1`, `http2`, `http3`, `http2and3`', ref: docRoot + 'API_CreateDistribution.html#cloudfront-CreateDistribution-request-HttpVersion' },
    IsIPV6Enabled: { ...bool, comment: 'Respond to IPV6 requests', ref: docRoot + 'API_CreateDistribution.html#cloudfront-CreateDistribution-request-IsIPV6Enabled' },
    Logging: { ...obj, comment: 'Access log configuration', ref: docRoot + 'API_LoggingConfig.html' },
    OriginGroups: { ...obj, comment: 'Origin group configuration', ref: docRoot + 'API_OriginGroups.html' },
    PriceClass: { ...str, comment: 'Price class corresponding to the maximum pricing, corresponding to responding regions; can be set to one of: `PriceClass_100`, `PriceClass_200`, `PriceClass_All`', ref: devGuide + 'PriceClass.html' },
    Restrictions: { ...obj, comment: 'Content restriction configuration', ref: docRoot + 'API_Restrictions.html' },
    Staging: { ...bool, comment: 'Specifies distribution as staging if `true`' },
    ViewerCertificate: { ...obj, comment: 'SSL/TS configuration', ref: docRoot + 'API_ViewerCertificate.html' },
    WebACLId: { ...str, required, comment: 'ID of the AWS WAF web ACL to associate' },
     */
  },
  request: (params) => {
    return {
      endpoint: '/2020-05-31/distribution',
      method: 'POST',
      headers: xml,
      payload: { DistributionConfig: params }
    }
  },
  response: returnNestedAs('Distribution'),
}

const CreateInvalidation = {
  awsDoc: docRoot + 'API_CreateInvalidation.html',
  validate: {
    Id,
    // DistributionId - for whatever reason only this method specifies `DistributionId`, so let's keep things consistent with literally everything else for now
    InvalidationBatch: { ...str, required, comment: 'Invalidation parameters', ref: docRoot + 'API_CreateInvalidation.html#API_CreateInvalidation_RequestSyntax' },
    // TODO enable nested validation
    // CallerReference,
    // Paths,
  },
  request: ({ Id, InvalidationBatch }) => {
    return {
      endpoint: `/2020-05-31/distribution/${Id}/invalidation`,
      method: 'POST',
      headers: xml,
      payload: { InvalidationBatch },
    }
  },
  response: returnNestedAs('Invalidation'),
}

const DeleteDistribution = {
  awsDoc: docRoot + 'API_DeleteDistribution.html',
  validate: {
    Id,
  },
  request: () => {
    return {
      endpoint: `/2020-05-31/distribution/${Id}`,
      method: 'DELETE',
    }
  },
  response: () => ({}),
}

const GetDistribution = {
  awsDoc: docRoot + 'API_GetDistribution.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      endpoint: `/2020-05-31/distribution/${Id}`,
    }
  },
  response: returnNestedAs('Distribution'),
}

const GetDistributionConfig = {
  awsDoc: docRoot + 'API_GetDistributionConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      endpoint: `/2020-05-31/distribution/${Id}/config`,
    }
  },
  response: returnNestedAs('DistributionConfig'),
}

const ListDistributions = {
  awsDoc: docRoot + 'API_ListDistributions.html',
  validate: {
    Marker: { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' },
    MaxItems: { ...str, comment: 'Maximum number of items to return' },
  },
  request: (params) => {
    return {
      endpoint: '/2020-05-31/distribution',
      query: params,
    }
  },
  response: returnNestedAs('DistributionList')
}

const UpdateDistribution = {
  awsDoc: docRoot + 'API_UpdateDistribution.html',
  validate: {
    DistributionConfig: { ...obj, required, comment: 'Complete distribution configuration object from `GetDistribution` call', ref: docRoot + 'API_UpdateDistribution.html#API_UpdateDistribution_RequestBody' },
    Id,
    IfMatch: { ...str, required, comment: 'Value of previous `GetDistribution` call\'s `ETag` property' },
  },
  request: (params) => {
    const { DistributionConfig, Id, IfMatch } = params
    return {
      endpoint: `/2020-05-31/distribution/${Id}/config`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      payload: { DistributionConfig },
    }
  },
  response: returnNestedAs('Distribution')
}

export default {
  service,
  property,
  methods: { CreateDistribution, CreateInvalidation, DeleteDistribution, GetDistribution, GetDistributionConfig, ListDistributions, UpdateDistribution, ...incomplete }
}
