/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { arrayifyItemsProp, arrayifyObject, unarrayifyObject } from './lib.mjs'

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
const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }

const CallerReference = { ...str, required, comment: 'Unique value that ensures that the request cannot be replayed' }
// const Comment = { ...str, required, comment: 'Distribution description; must be under 128 characters' }
const Id = { ...str, required, comment: 'Distribution ID' }
const IfMatch = { ...str, comment: 'Value of previous `GetDistribution` call\'s `ETag` property' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const maybeAddETag = (result, headers) => {
  const ETag = headers.etag || headers.ETag
  if (ETag) result.ETag = ETag
  return result
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
    const DistributionConfig = unarrayifyObject(params.DistributionConfig)
    return {
      path: '/2020-05-31/distribution',
      method: 'POST',
      headers: xml,
      payload: { DistributionConfig }
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    return maybeAddETag({ Distribution }, headers)
  },
}

const CreateInvalidation = {
  awsDoc: docRoot + 'API_CreateInvalidation.html',
  validate: {
    Id,
    // DistributionId - for whatever reason only this method specifies `DistributionId`, so let's keep things consistent with literally everything else for now
    InvalidationBatch: { type: [ 'string', 'array' ], comment: 'One or more invalidation parameters', ref: docRoot + 'API_CreateInvalidation.html#API_CreateInvalidation_RequestSyntax' },
    CallerReference,
  },
  request: ({ CallerReference, Id, InvalidationBatch }) => {
    const Items = Array.isArray(InvalidationBatch) ? InvalidationBatch : [ InvalidationBatch ]
    const payload = unarrayifyObject({
      InvalidationBatch: {
        CallerReference,
        Paths: { Items, Quantity: Items.length },
      }
    })
    return {
      path: `/2020-05-31/distribution/${Id}/invalidation`,
      method: 'POST',
      headers: xml,
      payload,
    }
  },
  response: ({ payload }) => {
    const result = arrayifyObject(payload)
    return result
  },
}

const DeleteDistribution = {
  awsDoc: docRoot + 'API_DeleteDistribution.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/distribution/${Id}`,
      method: 'DELETE',
      headers: IfMatch ? { 'if-match': IfMatch } : {},
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
      path: `/2020-05-31/distribution/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    // Drop into the distribution config (instead of expecting arrayifyObject to handle things) so as to keep the property paths from having to prepend DistributionConfig
    Distribution.DistributionConfig = arrayifyObject(Distribution.DistributionConfig)
    return maybeAddETag({ Distribution }, headers)
  }
}

const GetDistributionConfig = {
  awsDoc: docRoot + 'API_GetDistributionConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/distribution/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const DistributionConfig = arrayifyObject(payload)
    return maybeAddETag({ DistributionConfig }, headers)
  }
}

const ListDistributions = {
  awsDoc: docRoot + 'API_ListDistributions.html',
  validate: {
    Marker: { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' },
    MaxItems: { ...num, comment: 'Maximum number of items to return' },
    paginate: valPaginate,
  },
  request: (params) => {
    return {
      path: '/2020-05-31/distribution',
      query: params,
      paginator: {
        cursor: 'Marker',
        token: 'NextMarker',
        accumulator: 'Items',
        type: 'query',
      },
    }
  },
  response: ({ headers, payload }) => {
    const isPaginated = Array.isArray(payload.Items) &&
                        payload.Items.every(i => i?.DistributionSummary)
    if (isPaginated) {
      // In the raw paginated state, each response is its own array nested in an object containing a DistributionSummary property
      // So we have to pull out all the arrays, concat + flatten them, then re-wrap the array in a single DistributionSummary obj before we run arrayifyItemsProp
      payload.Items = {
        DistributionSummary: payload.Items.map(i => i.DistributionSummary).flat()
      }
    }
    const DistributionList = arrayifyItemsProp(payload)
    DistributionList.Items = DistributionList.Items.map(i => arrayifyObject(i))
    return maybeAddETag({ DistributionList }, headers)
  }
}

const UpdateDistribution = {
  awsDoc: docRoot + 'API_UpdateDistribution.html',
  validate: {
    DistributionConfig: { ...obj, required, comment: 'Complete distribution configuration object from `GetDistribution` call', ref: docRoot + 'API_UpdateDistribution.html#API_UpdateDistribution_RequestBody' },
    Id,
    IfMatch: { ...IfMatch, required },
  },
  request: (params) => {
    const { Id, IfMatch } = params
    const DistributionConfig = unarrayifyObject(params.DistributionConfig)
    return {
      path: `/2020-05-31/distribution/${Id}/config`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      payload: { DistributionConfig },
    }
  },
  response: ({ headers, payload }) => {
    const DistributionConfig = arrayifyObject(payload)
    return maybeAddETag({ DistributionConfig }, headers)
  }
}

export default {
  name: '@aws-lite/cloudfront',
  service,
  property,
  methods: { CreateDistribution, CreateInvalidation, DeleteDistribution, GetDistribution, GetDistributionConfig, ListDistributions, UpdateDistribution, ...incomplete }
}
