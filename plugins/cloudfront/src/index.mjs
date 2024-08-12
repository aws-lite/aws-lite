/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { arrayifyItemsProp, arrayifyObject, unarrayifyObject, normalizeResponse } from './lib.mjs'

const service = 'cloudfront'
const property = 'CloudFront'
const required = true
const docRoot = 'https://docs.aws.amazon.com/cloudfront/latest/APIReference/'
// const devGuide = 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/'

// Validation types
// const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }

const CallerReference = { ...str, required, comment: 'Unique value that ensures that the request cannot be replayed' }
// const Comment = { ...str, required, comment: 'Distribution description; must be under 128 characters' }
const Id = { ...str, required, comment: 'The resource ID' }
const IfMatch = { ...str, required, comment: 'Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource' }
const Name = { ...str, required, comment: 'User assigned name for the resource' }
const Stage = { ...str, comment: 'The functions stage; can be one of: `DEVELOPMENT`, `LIVE`' }
const Marker = { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' }
const MaxItems = { ...num, comment: 'Maximum number of items to return' }
const FunctionCode = { ...str, required, comment: 'Base64 encoded function code' }
const FunctionConfig = { ...obj, required, comment: 'Function configuration' }
const KeyGroupConfig = { ...obj, required, comment: 'Key group configuration', ref: docRoot + 'API_KeyGroupConfig.html' }
const ImportSource = { ...obj, comment: 'Describe the S3 source ARN and type', ref: docRoot + 'API_ImportSource.html' }
const CachePolicyConfig = { ...obj, required, comment: 'Complete cache policy configuration object', ref: docRoot + 'API_CachePolicyConfig.html' }
const CloudFrontOriginAccessIdentityConfig = { ...obj, required, comment: 'Complete  Cloud Front origin access identity configuration object', ref: docRoot + 'API_CreateCloudFrontOriginAccessIdentity.html' }
const FieldLevelEncryptionConfig = { ...obj, required, comment: 'Complete field level encryption config object', ref: docRoot + 'API_FieldLevelEncryptionConfig.html' }
const FieldLevelEncryptionProfileConfig = { ...obj, required, comment: 'Complete field level encryption profile config', ref: 'API_FieldLevelEncryptionProfileConfig.html' }
const DistributionId = { ...str, required, comment: 'Distribution ID' }
const ContinuousDeploymentPolicyConfig = { ...obj, required, comment: 'Complete continuous deployment policy configuration', ref: docRoot + 'API_ContinuousDeploymentPolicyConfig.html' }
const OriginAccessControlConfig = { ...obj, required, comment: 'Complete origin access control config', ref: docRoot + 'API_OriginAccessControlConfig.html' }
const Alias = { ...str, required, comment: 'Alternative domain name; must contain one or more dots (.) and can only include lower case characters and dashes, a leading star (*) can be used to indicate all subdomains, for example `*.example.com`' }
const Type = { ...str, comment: 'Filter results by policy type; can be one of: `managed`, `custom`' }
const OriginRequestPolicyConfig = { ...obj, required, comment: 'Complete origin request policy config', ref: docRoot + 'API_OriginRequestPolicyConfig.html' }
const ResponseHeadersPolicyConfig = { ...obj, required, comment: 'Complete response headers policy config', ref: docRoot + 'API_ResponseHeadersPolicyConfig.html' }

const valPaginate = { type: [ 'boolean', 'string' ], comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const xmlns = 'http://cloudfront.amazonaws.com/doc/2020-05-31/'

const paginator = {
  cursor: 'Marker',
  token: 'NextMarker',
  type: 'query',
}

const defaultResponse = ({ payload }) => payload || {}

const maybeAddETag = (result, headers) => {
  const ETag = headers.etag || headers.ETag
  if (ETag) result.ETag = ETag
  return result
}

const AssociateAlias = {
  awsDoc: docRoot + 'API_AssociateAlias.html',
  validate: {
    TargetDistributionId: { ...str, required, comment: 'Distribution ID to alias' },
    Alias,
  },
  request: ({ TargetDistributionId, Alias }) => {
    return {
      path: `/2020-05-31/distribution/${TargetDistributionId}/associate-alias`,
      method: 'PUT',
      query: { Alias },
    }
  },
  response: defaultResponse,
}

const CopyDistribution = {
  awsDoc: docRoot + 'API_CopyDistribution.html',
  validate: {
    PrimaryDistributionId: { ...str, required, comment: 'ID of the distribution to be copied' },
    CallerReference,
    IfMatch,
    Staging: { ...bool, comment: 'Set to true to specify that the primary distribution will be copied to a staging distribution' },
    Enabled: { ...bool, comment: 'Set to false to disable the copied distribution upon creation' },
  },
  request: (params) => {
    const { PrimaryDistributionId, CallerReference, IfMatch, Staging, Enabled = true } = params
    return {
      path: `/2020-05-31/distribution/${PrimaryDistributionId}/copy`,
      method: 'POST',
      headers: {
        ...xml,
        'if-match': IfMatch,
        Staging,
      },
      xmlns,
      payload: {
        CopyDistributionRequest: {
          CallerReference,
          Enabled,
        },
      },
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    Distribution.DistributionConfig = arrayifyObject(Distribution.DistributionConfig)
    const { etag, location } = headers
    return {
      Distribution,
      ETag: etag,
      Location: location,
    }
  },
}

const CreateCachePolicy = {
  awsDoc: docRoot + 'API_CreateCachePolicy.html',
  validate: {
    CachePolicyConfig,
  },
  request: (params) => {
    const CachePolicyConfig = unarrayifyObject(params)
    return {
      path: '/2020-05-31/cache-policy',
      method: 'POST',
      headers: xml,
      xmlns,
      payload: CachePolicyConfig,
    }
  },
  response: ({ headers, payload }) => {
    const CachePolicy = arrayifyObject(payload)
    const { etag, location } = headers
    return {
      CachePolicy,
      Location: location,
      ETag: etag,
    }
  },
}

const CreateCloudFrontOriginAccessIdentity = {
  awsDoc: docRoot + 'API_CreateCloudFrontOriginAccessIdentity.html',
  validate: {
    CloudFrontOriginAccessIdentityConfig,
  },
  request: ({ CloudFrontOriginAccessIdentityConfig }) => {
    return {
      path: `/2020-05-31/origin-access-identity/cloudfront`,
      method: 'POST',
      headers: xml,
      xmlns,
      payload: { CloudFrontOriginAccessIdentityConfig },
    }
  },
  response: ({ headers, payload }) => {
    const { etag, location } = headers
    return {
      CloudFrontOriginAccessIdentity: payload,
      Location: location,
      ETag: etag,
    }
  },
}

const CreateContinuousDeploymentPolicy = {
  awsDoc: docRoot + 'API_CreateContinuousDeploymentPolicy.html',
  validate: {
    ContinuousDeploymentPolicyConfig,
  },
  request: (params) => {
    const ContinuousDeploymentPolicyConfig = unarrayifyObject(params)
    return {
      path: `/2020-05-31/continuous-deployment-policy`,
      method: 'POST',
      headers: xml,
      xmlns,
      payload: ContinuousDeploymentPolicyConfig,
    }
  },
  response: ({ headers, payload }) => {
    const ContinuousDeploymentPolicy = arrayifyObject(payload)
    const { etag, location } = headers
    return {
      ContinuousDeploymentPolicy,
      ETag: etag,
      Location: location,
    }
  },
}

const CreateDistribution = {
  awsDoc: docRoot + 'API_CreateDistribution.html',
  validate: {
    DistributionConfig: { ...obj, required, comment: 'Complete distribution configuration object', ref: docRoot + 'API_CreateDistribution.html#API_CreateDistribution_RequestSyntax' },
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
      payload: { DistributionConfig },
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    return maybeAddETag({ Distribution }, headers)
  },
}

// TODO: test
// const CreateDistributionWithTags = {
//   awsDoc: docRoot + 'API_CreateDistributionWithTags.html',
//   validate: {
//     DistributionConfigWithTags: { ...obj, required, comment: 'Complete distribution configuration object', ref: docRoot + 'API_CreateDistributionWithTags.html#cloudfront-CreateDistributionWithTags-request-DistributionConfigWithTags' },
//   },
//   request: (params) => {
//     const DistributionConfigWithTags = unarrayifyObject(params)
//     DistributionConfigWithTags.DistributionConfig = unarrayifyObject(DistributionConfigWithTags.DistributionConfig)
//     return {
//       path: '/2020-05-31/distribution?WithTags',
//       method: 'POST',
//       headers: xml,
//       xmlns,
//       payload: { DistributionConfigWithTags },
//     }
//   },
//   response: ({ headers, payload }) => {
//     const Distribution = arrayifyObject(payload)
//     return maybeAddETag({ Distribution }, headers)
//   },
// }

const CreateFieldLevelEncryptionConfig = {
  awsDoc: docRoot + 'API_CreateFieldLevelEncryptionConfig.html',
  validate: {
    FieldLevelEncryptionConfig,
  },
  request: (params) => {
    const FieldLevelEncryptionConfig = unarrayifyObject(params)
    return {
      path: '/2020-05-31/field-level-encryption',
      method: 'POST',
      headers: xml,
      xmlns,
      payload: FieldLevelEncryptionConfig,
    }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryption = arrayifyObject(payload)
    const { etag, location } = headers
    return {
      FieldLevelEncryption,
      ETag: etag,
      Location: location,
    }
  },
}

const CreateFieldLevelEncryptionProfile = {
  awsDoc: docRoot + 'API_CreateFieldLevelEncryptionProfile.html',
  validate: {
    FieldLevelEncryptionProfileConfig,
  },
  request: (params) => {
    const FieldLevelEncryptionProfileConfig = unarrayifyObject(params)
    return {
      path: '/2020-05-31/field-level-encryption-profile',
      method: 'POST',
      headers: xml,
      xmlns,
      payload: FieldLevelEncryptionProfileConfig,
    }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryptionProfile = arrayifyObject(payload)
    const { etag, location } = headers
    return {
      FieldLevelEncryptionProfile,
      ETag: etag,
      Location: location,
    }
  },
}

const CreateFunction = {
  awsDoc: docRoot + 'API_CreateFunction.html',
  validate: {
    FunctionCode,
    FunctionConfig,
    Name,
  },
  request: (params) => {
    const CreateFunctionRequest = unarrayifyObject(params)
    return {
      path: '/2020-05-31/function',
      methods: 'POST',
      headers: xml,
      xmlns,
      payload: {
        CreateFunctionRequest,
      },
    }
  },
  response: ({ headers, payload }) => {
    const FunctionSummary = arrayifyObject(payload)
    const { etag, location } = headers
    return {
      FunctionSummary,
      Location: location,
      ETag: etag,
    }
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
      },
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

const CreateKeyGroup = {
  awsDoc: docRoot + 'API_CreateKeyGroup.html',
  validate: {
    KeyGroupConfig,
  },
  request: (params) => {
    const payload = unarrayifyObject(params)
    return {
      path: '/2020-05-31/key-group',
      method: 'POST',
      headers: xml,
      xmlns,
      payload,
    }
  },
  response: ({ headers, payload }) => {
    const KeyGroup = arrayifyObject(payload)
    const { etag: ETag, location: Location } = headers
    return {
      KeyGroup,
      ETag,
      Location,
    }
  },
}

const CreateKeyValueStore = {
  awsDoc: docRoot + 'API_CreateKeyValueStore.html',
  validate: {
    Name,
    ImportSource,
    Comment: { ...str, comment: 'Comment for the key value store' },
  },
  request: (params) => {
    return {
      path: '/2020-05-31/key-value-store',
      method: 'POST',
      headers: xml,
      xmlns,
      payload: { CreateKeyValueStoreRequest: params },
    }
  },
  response: ({ headers, payload }) => {
    const { etag, location } = headers
    return {
      KeyValueStore: payload,
      ETag: etag,
      Location: location,
    }
  },
}

const CreateMonitoringSubscription = {
  awsDoc: docRoot + 'API_CreateMonitoringSubscription.html',
  validate: {
    DistributionId,
    MonitoringSubscription: { ...obj, required, comment: 'Configuration for additional metrics', ref: docRoot + 'API_RealtimeMetricsSubscriptionConfig.html' },
  },
  request: ({ DistributionId, MonitoringSubscription }) => {
    return {
      path: `/2020-05-31/distributions/${DistributionId}/monitoring-subscription`,
      method: 'POST',
      headers: xml,
      xmlns,
      payload: { MonitoringSubscription },
    }
  },
  response: ({ payload }) => {
    return { MonitoringSubscription: payload }
  },
}

const CreateOriginAccessControl = {
  awsDoc: docRoot + 'API_CreateOriginAccessControl.html',
  validate: {
    OriginAccessControlConfig,
  },
  request: ({ OriginAccessControlConfig }) => {
    return {
      path: `/2020-05-31/origin-access-control`,
      method: 'POST',
      headers: xml,
      xmlns,
      payload: { OriginAccessControlConfig },
    }
  },
  response: ({ headers, payload }) => {
    const { etag, location } = headers
    return {
      OriginAccessControl: payload,
      ETag: etag,
      Location: location,
    }
  },
}

const CreateOriginRequestPolicy = {
  awsDoc: docRoot + 'API_CreateOriginRequestPolicy.html',
  validate: {
    OriginRequestPolicyConfig,
  },
  request: (params) => {
    const OriginRequestPolicyConfig = unarrayifyObject(params)
    return {
      path: `/2020-05-31/origin-request-policy`,
      method: 'POST',
      headers: xml,
      xmlns,
      payload: OriginRequestPolicyConfig,
    }
  },
  response: ({ headers, payload }) => {
    const OriginRequestPolicy = arrayifyObject(payload)
    const { etag, location } = headers
    return {
      OriginRequestPolicy,
      ETag: etag,
      Location: location,
    }
  },
}

const CreatePublicKey = {
  awsDoc: docRoot + 'API_CreatePublicKey.html',
  validate: {
    PublicKeyConfig: { ...obj, required, comment: 'Public key configuration', ref: docRoot + 'API_CreatePublicKey.html#cloudfront-CreatePublicKey-request-PublicKeyConfig' },
  },
  request: (params) => {
    return {
      path: '/2020-05-31/public-key',
      method: 'POST',
      headers: xml,
      xmlns,
      payload: params,
    }
  },
  response: ({ headers, payload }) => {
    const { etag, location } = headers
    return {
      PublicKey: payload,
      ETag: etag,
      Location: location,
    }
  },
}

/* TODO: Test
const CreateRealtimeLogConfig = {
  awsDoc: docRoot + 'API_CreateRealtimeLogConfig.html',
  validate: {
    EndPoints: { ...arr, required, comment: 'Array of `Endpoint` objects containing information about the Kinesis data stream', ref: docRoot + 'API_CreateRealtimeLogConfig.html#cloudfront-CreateRealtimeLogConfig-request-EndPoints' },
    Fields: { ...arr, required, comment: 'Array of strings specifying fields to include in each log record', ref: docRoot + 'API_CreateRealtimeLogConfig.html#cloudfront-CreateRealtimeLogConfig-request-Fields' },
    Name,
    SamplingRate: { ...num, required, comment: 'Percentage of viewer requests between 1 and 100 (inclusive) that will be sampled to generate logs' },
  },
  request: (params) => {
    const { EndPoints, Fields } = params
    const CreateRealtimeLogConfigRequest = { ...params }
    CreateRealtimeLogConfigRequest.EndPoints = { EndPoint: EndPoints }
    CreateRealtimeLogConfigRequest.Fields = { Field: Fields }
    return {
      path: '/2020-05-31/realtime-log-config',
      headers: xml,
      xmlns,
      payload: { CreateRealtimeLogConfigRequest },
    }
  },
  response: ({ payload }) => {
    const { EndPoint } = payload.EndPoints
    const { Field } = payload.Field
    payload.EndPoints = Array.isArray(EndPoint) ? EndPoint : [ EndPoint ]
    payload.Fields = Array.isArray(Field) ? Field : [ Field ]
    return { RealtimeLogConfig: payload }
  },
}
*/

const CreateResponseHeadersPolicy = {
  awsDoc: docRoot + 'API_CreateResponseHeadersPolicy.html',
  validate: {
    ResponseHeadersPolicyConfig,
  },
  request: (params) => {
    const ResponseHeadersPolicyConfig = unarrayifyObject(params)
    return {
      path: '/2020-05-31/response-headers-policy',
      headers: xml,
      xmlns,
      payload: ResponseHeadersPolicyConfig,
    }
  },
  response: ({ headers, payload }) => {
    const { etag, location } = headers
    const ResponseHeadersPolicy = arrayifyObject(payload)
    return {
      ResponseHeadersPolicy,
      ETag: etag,
      Location: location,
    }
  },
}

const DeleteCachePolicy = {
  awsDoc: docRoot + 'API_DeleteCachePolicy.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/cache-policy/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteCloudFrontOriginAccessIdentity = {
  awsDoc: docRoot + 'API_DeleteCloudFrontOriginAccessIdentity.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/origin-access-identity/cloudfront/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteContinuousDeploymentPolicy = {
  awsDoc: docRoot + 'API_DeleteContinuousDeploymentPolicy.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/continuous-deployment-policy/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
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
      headers: { 'if-match': IfMatch },
    }
  },
  response: () => ({}),
}

const DeleteFieldLevelEncryptionConfig = {
  awsDoc: docRoot + 'API_DeleteFieldLevelEncryptionConfig.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/field-level-encryption/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteFieldLevelEncryptionProfile = {
  awsDoc: docRoot + 'API_DeleteFieldLevelEncryptionProfile.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/field-level-encryption-profile/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteFunction = {
  awsDoc: docRoot + 'API_DeleteFunction.html',
  validate: {
    Name,
    IfMatch,
  },
  request: ({ Name, IfMatch }) => {
    return {
      path: `/2020-05-31/function/${Name}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteKeyGroup = {
  awsDoc: docRoot + 'API_DeleteKeyGroup.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/key-group/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteKeyValueStore = {
  awsDoc: docRoot + 'API_DeleteKeyValueStore.html',
  validate: {
    Name,
    IfMatch,
  },
  request: ({ Name, IfMatch }) => {
    return {
      path: `/2020-05-31/key-value-store/${Name}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteMonitoringSubscription = {
  awsDoc: docRoot + 'API_DeleteMonitoringSubscription.html',
  validate: {
    DistributionId,
  },
  request: ({ DistributionId }) => {
    return {
      path: `/2020-05-31/distributions/${DistributionId}/monitoring-subscription`,
      method: 'DELETE',
    }
  },
  response: defaultResponse,
}

const DeleteOriginAccessControl = {
  awsDoc: docRoot + 'API_DeleteOriginAccessControl.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/origin-access-control/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteOriginRequestPolicy = {
  awsDoc: docRoot + 'API_DeleteOriginRequestPolicy.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/origin-request-policy/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeletePublicKey = {
  awsDoc: docRoot + 'API_DeletePublicKey.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/public-key/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteResponseHeadersPolicy = {
  awsDoc: docRoot + 'API_DeleteResponseHeadersPolicy.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/response-headers-policy/${Id}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DescribeFunction = {
  awsDoc: docRoot + 'API_DescribeFunction.html',
  validate: {
    Name,
    Stage,
  },
  request: ({ Name, Stage }) => {
    const query = Stage ? { Stage } : {}
    return {
      path: `/2020-05-31/function/${Name}/describe`,
      query,
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    const FunctionSummary = arrayifyObject(payload)
    return {
      FunctionSummary,
      ETag: etag,
    }
  },
}

const DescribeKeyValueStore = {
  awsDoc: docRoot + 'API_DescribeKeyValueStore.html',
  validate: {
    Name,
  },
  request: ({ Name }) => {
    return {
      path: `/2020-05-31/key-value-store/${Name}`,
      method: 'GET',
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      KeyValueStore: payload,
      ETag: etag,
    }
  },
}

const GetCachePolicy = {
  awsDoc: docRoot + 'API_GetCachePolicy.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/cache-policy/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const CachePolicy = arrayifyObject(payload)
    const { etag } = headers
    return {
      CachePolicy,
      ETag: etag,
    }
  },
}

const GetCachePolicyConfig = {
  awsDoc: docRoot + 'API_GetCachePolicyConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/cache-policy/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const CachePolicyConfig = arrayifyObject(payload)
    const { etag } = headers
    return {
      CachePolicyConfig,
      ETag: etag,
    }
  },
}

const GetCloudFrontOriginAccessIdentity = {
  awsDoc: docRoot + 'API_GetCloudFrontOriginAccessIdentity.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return { path: `/2020-05-31/origin-access-identity/cloudfront/${Id}` }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      CloudFrontOriginAccessIdentity: payload,
      ETag: etag,
    }
  },
}

const GetCloudFrontOriginAccessIdentityConfig = {
  awsDoc: docRoot + 'API_GetCloudFrontOriginAccessIdentityConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return { path: `/2020-05-31/origin-access-identity/cloudfront/${Id}/config` }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      CloudFrontOriginAccessIdentityConfig: payload,
      ETag: etag,
    }
  },
}

const GetContinuousDeploymentPolicy = {
  awsDoc: docRoot + 'API_GetContinuousDeploymentPolicy.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/continuous-deployment-policy/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const ContinuousDeploymentPolicy = arrayifyObject(payload)
    const { etag } = headers
    return {
      ContinuousDeploymentPolicy,
      ETag: etag,
    }
  },
}

const GetContinuousDeploymentPolicyConfig = {
  awsDoc: docRoot + 'API_GetContinuousDeploymentPolicyConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/continuous-deployment-policy/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const ContinuousDeploymentPolicyConfig = arrayifyObject(payload)
    const { etag } = headers
    return {
      ContinuousDeploymentPolicyConfig,
      ETag: etag,
    }
  },
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
  },
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
  },
}

const GetFieldLevelEncryption = {
  awsDoc: docRoot + 'API_GetFieldLevelEncryptionConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return { path: `/2020-05-31/field-level-encryption/${Id}/` }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryption = arrayifyObject(payload)
    const { etag } = headers
    return {
      FieldLevelEncryption,
      ETag: etag,
    }
  },
}

const GetFieldLevelEncryptionConfig = {
  awsDoc: docRoot + 'API_GetFieldLevelEncryptionConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return { path: `/2020-05-31/field-level-encryption/${Id}/config` }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryptionConfig = arrayifyObject(payload)
    const { etag } = headers
    return {
      FieldLevelEncryptionConfig,
      ETag: etag,
    }
  },
}

const GetFieldLevelEncryptionProfile = {
  awsDoc: docRoot + 'API_GetFieldLevelEncryptionProfile.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/field-level-encryption-profile/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryptionProfile = arrayifyObject(payload)
    const { etag } = headers
    return {
      FieldLevelEncryptionProfile,
      ETag: etag,
    }
  },
}

const GetFieldLevelEncryptionProfileConfig = {
  awsDoc: docRoot + 'API_GetFieldLevelEncryptionProfileConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/field-level-encryption-profile/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryptionProfileConfig = arrayifyObject(payload)
    const { etag } = headers
    return {
      FieldLevelEncryptionProfileConfig,
      ETag: etag,
    }
  },
}

const GetFunction = {
  awsDoc: docRoot + 'API_GetFunction.html',
  validate: {
    Name,
    Stage,
  },
  request: ({ Name, Stage }) => {
    const query = Stage ? { Stage } : {}
    return {
      path: `/2020-05-31/function/${Name}`,
      query,
      streamResponsePayload: true,
    }
  },
  response: (payload) => {
    return payload
  },
}

const GetKeyGroup = {
  awsDoc: docRoot + 'API_GetKeyGroup.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/key-group/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const KeyGroup = arrayifyObject(payload)
    const { etag: ETag } = headers
    return {
      KeyGroup,
      ETag,
    }
  },
}

const GetKeyGroupConfig = {
  awsDoc: docRoot + 'API_GetKeyGroupConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/key-group/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const KeyGroupConfig = arrayifyItemsProp(payload)
    const { etag: ETag } = headers
    return {
      KeyGroupConfig,
      ETag,
    }
  },
}

const GetMonitoringSubscription = {
  awsDoc: docRoot + 'API_GetMonitoringSubscription.html',
  validate: {
    DistributionId,
  },
  request: ({ DistributionId }) => {
    return {
      path: `/2020-05-31/distributions/${DistributionId}/monitoring-subscription`,
    }
  },
  response: ({ payload }) => {
    return { MonitoringSubscription: payload }
  },
}

const GetOriginAccessControl = {
  awsDoc: docRoot + 'API_GetOriginAccessControl.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/origin-access-control/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    let { etag } = headers
    return {
      OriginAccessControl: payload,
      ETag: etag,
    }
  },
}

const GetOriginAccessControlConfig = {
  awsDoc: docRoot + 'API_GetOriginAccessControlConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/origin-access-control/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    let { etag } = headers
    return {
      OriginAccessControlConfig: payload,
      ETag: etag,
    }
  },
}

const GetOriginRequestPolicy = {
  awsDoc: docRoot + 'API_GetOriginRequestPolicy.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/origin-request-policy/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const OriginRequestPolicy = arrayifyObject(payload)
    let { etag } = headers
    return {
      OriginRequestPolicy,
      ETag: etag,
    }
  },
}

const GetOriginRequestPolicyConfig = {
  awsDoc: docRoot + 'API_GetOriginRequestPolicyConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/origin-request-policy/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const OriginRequestPolicyConfig = arrayifyObject(payload)
    let { etag } = headers
    return {
      OriginRequestPolicyConfig,
      ETag: etag,
    }
  },
}

const GetPublicKey = {
  awsDoc: docRoot + 'API_GetPublicKey.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/public-key/${Id}`,
      method: 'GET',
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      PublicKey: payload,
      ETag: etag,
    }
  },
}

const GetPublicKeyConfig = {
  awsDoc: docRoot + 'API_GetPublicKeyConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/public-key/${Id}/config`,
      method: 'GET',
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      PublicKeyConfig: payload,
      ETag: etag,
    }
  },
}

const GetResponseHeadersPolicy = {
  awsDoc: docRoot + 'API_GetResponseHeadersPolicy.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/response-headers-policy/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const ResponseHeadersPolicy = arrayifyObject(payload)
    const { etag } = headers
    return {
      ResponseHeadersPolicy,
      ETag: etag,
    }
  },
}

const GetResponseHeadersPolicyConfig = {
  awsDoc: docRoot + 'API_GetResponseHeadersPolicyConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/response-headers-policy/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const ResponseHeadersPolicyConfig = arrayifyObject(payload)
    const { etag } = headers
    return {
      ResponseHeadersPolicyConfig,
      ETag: etag,
    }
  },
}

const ListCachePolicies = {
  awsDoc: docRoot + 'API_ListCachePolicies.html',
  validate: {
    Marker,
    MaxItems,
    Type,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/cache-policy',
      query,
      paginator: {
        ...paginator,
        accumulator: 'Items.CachePolicySummary',
      },
    }
  },
  response: ({ payload }) => {
    const CachePolicyList = arrayifyItemsProp(payload)
    CachePolicyList.Items = CachePolicyList.Items.map(i => arrayifyObject(i))
    return { CachePolicyList }
  },
}

const ListCloudFrontOriginAccessIdentities = {
  awsDoc: docRoot + 'API_ListCloudFrontOriginAccessIdentities.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/origin-access-identity/cloudfront',
      query,
      paginator: {
        ...paginator,
        accumulator: 'Items.CloudFrontOriginAccessIdentitySummary',
      },
    }
  },
  response: ({ payload }) => {
    const CloudFrontOriginAccessIdentityList = arrayifyItemsProp(payload)
    return { CloudFrontOriginAccessIdentityList }
  },
}

const ListConflictingAliases = {
  awsDoc: docRoot + 'API_ListConflictingAliases.html',
  validate: {
    DistributionId,
    Alias,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/conflicting-alias',
      query,
      paginator: {
        cursor: 'Marker',
        token: 'NextMarker',
        accumulator: 'Items.ConflictingAlias',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const ConflictingAliasesList = arrayifyItemsProp(payload)
    return { ConflictingAliasesList }
  },
}

const ListContinuousDeploymentPolicies = {
  awsDoc: docRoot + 'API_ListContinuousDeploymentPolicies.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/continuous-deployment-policy`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.ContinuousDeploymentPolicySummary',
      },
    }
  },
  response: ({ payload }) => {
    const ContinuousDeploymentPolicyList = arrayifyItemsProp(payload)
    ContinuousDeploymentPolicyList.Items = ContinuousDeploymentPolicyList.Items.map(i => arrayifyObject(i))
    return { ContinuousDeploymentPolicyList }
  },
}

const ListDistributions = {
  awsDoc: docRoot + 'API_ListDistributions.html',
  validate: {
    Marker: { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' },
    MaxItems: { ...num, comment: 'Maximum number of items to return' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/distribution',
      query,
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
        DistributionSummary: payload.Items.map(i => i.DistributionSummary).flat(),
      }
    }
    const DistributionList = arrayifyItemsProp(payload)
    DistributionList.Items = DistributionList.Items.map(i => arrayifyObject(i))
    return maybeAddETag({ DistributionList }, headers)
  },
}

const ListFieldLevelEncryptionConfigs = {
  awsDoc: docRoot + 'API_ListFieldLevelEncryptionConfigs.html',
  validate: {
    Marker: { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' },
    MaxItems: { ...num, comment: 'Maximum number of items to return' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/field-level-encryption',
      query,
      paginator: {
        cursor: 'Marker',
        token: 'NextMarker',
        accumulator: 'Items.FieldLevelEncryptionSummary',
        type: 'query',
      },
    }
  },
  response: ({ payload }) => {
    const FieldLevelEncryptionList = arrayifyItemsProp(payload)
    FieldLevelEncryptionConfig.Items = FieldLevelEncryptionList.Items.map(i => arrayifyObject(i))
    return { FieldLevelEncryptionList }
  },
}

const ListFieldLevelEncryptionProfiles = {
  awsDoc: docRoot + 'API_ListFieldLevelEncryptionProfiles.html',
  validate: {
    Marker: { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' },
    MaxItems: { ...num, comment: 'Maximum number of items to return' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/field-level-encryption-profile`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.FieldLevelEncryptionProfileSummary',
      },
    }
  },
  response: ({ payload }) => {
    const FieldLevelEncryptionProfileList = arrayifyItemsProp(payload)
    FieldLevelEncryptionProfileList.Items = FieldLevelEncryptionProfileList.Items.map(i => arrayifyObject(i))
    return { FieldLevelEncryptionProfileList }
  },
}

const ListFunctions = {
  awsDoc: docRoot + 'API_ListFunctions.html',
  validate: {
    Marker,
    MaxItems,
    Stage,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/function',
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'Items.FunctionSummary' },
    }
  },
  response: ({ payload }) => {
    const FunctionList = arrayifyItemsProp(payload)
    FunctionList.Items = FunctionList.Items.map(i => { return arrayifyObject(i) })
    return { FunctionList }
  },
}

const ListKeyGroups = {
  awsDoc: docRoot + 'API_ListKeyGroups.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/key-group`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.KeyGroupSummary',
      },
    }
  },
  response: ({ payload }) => {
    const KeyGroupList = arrayifyItemsProp(payload)
    KeyGroupList.Items = KeyGroupList.Items.map(i => arrayifyObject(i))
    return { KeyGroupList }
  },
}

const ListKeyValueStores = {
  awsDoc: docRoot + 'API_ListKeyValueStores.html',
  validate: {
    Marker,
    MaxItems,
    Status: { ...str, comment: 'Status of the key value store; can be one of: `READY`, `PROVISIONING`' },
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/key-value-store`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.KeyValueStore',
      },
    }
  },
  response: ({ payload }) => {
    const KeyValueStoreList = arrayifyItemsProp(payload)
    return { KeyValueStoreList }
  },
}

const ListOriginAccessControls = {
  awsDoc: docRoot + 'API_ListOriginAccessControls.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/origin-access-control`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.OriginAccessControlSummary',
      },
    }
  },
  response: ({ payload }) => {
    const OriginAccessControlList = arrayifyItemsProp(payload)
    return { OriginAccessControlList }
  },
}

const ListOriginRequestPolicies = {
  awsDoc: docRoot + 'API_ListOriginRequestPolicies.html',
  validate: {
    Marker,
    MaxItems,
    Type,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/origin-request-policy`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.OriginRequestPolicySummary',
      },
    }
  },
  response: ({ payload }) => {
    const OriginRequestPolicyList = arrayifyItemsProp(payload)
    OriginRequestPolicyList.Items = OriginRequestPolicyList.Items.map(i => arrayifyObject(i))
    return { OriginRequestPolicyList }
  },
}

const ListPublicKeys = {
  awsDoc: docRoot + 'API_ListPublicKeys.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/public-key`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.PublicKeySummary',
      },
    }
  },
  response: ({ payload }) => {
    const PublicKeyList = arrayifyItemsProp(payload)
    return { PublicKeyList }
  },
}

const ListResponseHeadersPolicies = {
  awsDoc: docRoot + 'API_ListResponseHeadersPolicies.html',
  validate: {
    Marker,
    MaxItems,
    Type,
    paginate: valPaginate,
  },
  request: (params) => {
    const { paginate } = params
    const query = { ...params }
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/response-headers-policy',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.ResponseHeadersPolicySummary',
      },
    }
  },
  response: ({ payload }) => {
    const ResponseHeadersPolicyList = arrayifyItemsProp(payload)
    ResponseHeadersPolicyList.Items = ResponseHeadersPolicyList.Items.map(i => arrayifyObject(i))
    return { ResponseHeadersPolicyList }
  },
}

// TODO: improve documentation for `EventObject`
// TODO: more testing
const TestFunction = {
  awsDoc: docRoot + 'API_TestFunction.html',
  validate: {
    Name,
    IfMatch,
    EventObject: { ...str, required, comment: 'Base64 encoded binary `Event` object that will be passed to your function as an argument' },
    Stage,
  },
  request: (params) => {
    const { Name, IfMatch, EventObject, Stage } = params
    const payload = { TestFunctionRequest: { EventObject } }
    if (Stage) payload.Stage = Stage
    return {
      path: `/2020-05-31/function/${Name}/test`,
      method: 'POST',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload,
    }
  },
  response: ({ payload }) => {
    const TestResult = arrayifyObject(payload)
    return { TestResult }
  },
}

const UpdateCachePolicy = {
  awsDoc: docRoot + 'API_UpdateCachePolicy.html',
  validate: {
    CachePolicyConfig,
    Id,
    IfMatch,
  },
  request: ({ CachePolicyConfig, Id, IfMatch }) => {
    CachePolicyConfig = unarrayifyObject({ CachePolicyConfig })
    return {
      path: `/2020-05-31/cache-policy/${Id}`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload: CachePolicyConfig,
    }
  },
  response: ({ headers, payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const { etag } = headers
    const CachePolicy = normalizeResponse(payload, arrayProperties, 4)
    return {
      CachePolicy,
      ETag: etag,
    }
  },
}

const UpdateCloudFrontOriginAccessIdentity = {
  awsDoc: docRoot + 'API_UpdateCloudFrontOriginAccessIdentity.html',
  validate: {
    CloudFrontOriginAccessIdentityConfig,
    Id,
    IfMatch,
  },
  request: ({ CloudFrontOriginAccessIdentityConfig, Id, IfMatch }) => {
    return {
      path: `/2020-05-31/origin-access-identity/cloudfront/${Id}/config`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload: { CloudFrontOriginAccessIdentityConfig },
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      CloudFrontOriginAccessIdentity: payload,
      ETag: etag,
    }
  },
}

const UpdateContinuousDeploymentPolicy = {
  awsDoc: docRoot + 'API_UpdateContinuousDeploymentPolicy.html',
  validate: {
    ContinuousDeploymentPolicyConfig,
    Id,
    IfMatch,
  },
  request: ({ ContinuousDeploymentPolicyConfig, Id, IfMatch }) => {
    ContinuousDeploymentPolicyConfig = unarrayifyObject(ContinuousDeploymentPolicyConfig)
    return {
      path: `/2020-05-31/continuous-deployment-policy/${Id}`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload: { ContinuousDeploymentPolicyConfig },
    }
  },
  response: ({ headers, payload }) => {
    const ContinuousDeploymentPolicy = arrayifyObject(payload)
    const { etag } = headers
    return {
      ContinuousDeploymentPolicy,
      ETag: etag,
    }
  },
}

const UpdateDistribution = {
  awsDoc: docRoot + 'API_UpdateDistribution.html',
  validate: {
    DistributionConfig: { ...obj, required, comment: 'Complete distribution configuration object from `GetDistribution` call', ref: docRoot + 'API_UpdateDistribution.html#API_UpdateDistribution_RequestBody' },
    Id,
    IfMatch,
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
  },
}

const UpdateFieldLevelEncryptionConfig = {
  awsDoc: docRoot + 'API_UpdateFieldLevelEncryptionConfig.html',
  validate: {
    FieldLevelEncryptionConfig,
    Id,
    IfMatch,
  },
  request: ({ FieldLevelEncryptionConfig, Id, IfMatch }) => {
    FieldLevelEncryptionConfig = unarrayifyObject(FieldLevelEncryptionConfig)
    return {
      path: `/2020-05-31/field-level-encryption/${Id}/config`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload: { FieldLevelEncryptionConfig },
    }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryption = arrayifyObject(payload)
    const { etag } = headers
    return {
      FieldLevelEncryption,
      ETag: etag,
    }
  },
}

const UpdateFieldLevelEncryptionProfile = {
  awsDoc: docRoot + 'API_UpdateFieldLevelEncryptionProfile.html',
  validate: {
    FieldLevelEncryptionProfileConfig,
    Id,
    IfMatch,
  },
  request: ({ FieldLevelEncryptionProfileConfig, Id, IfMatch }) => {
    FieldLevelEncryptionProfileConfig = unarrayifyObject(FieldLevelEncryptionProfileConfig)
    return {
      path: `/2020-05-31/field-level-encryption-profile/${Id}/config`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload: { FieldLevelEncryptionProfileConfig },
    }
  },
  response: ({ headers, payload }) => {
    const FieldLevelEncryptionProfile = arrayifyObject(payload)
    const { etag } = headers
    return {
      FieldLevelEncryptionProfile,
      ETag: etag,
    }
  },
}

const UpdateFunction = {
  awsDoc: docRoot + 'API_UpdateFunction.html',
  validate: {
    IfMatch,
    Name,
    FunctionCode,
    FunctionConfig,
  },
  request: (params) => {
    const { Name, IfMatch } = params
    const UpdateFunctionRequest = unarrayifyObject(params)
    return {
      path: `/2020-05-31/function/${Name}`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload: { UpdateFunctionRequest },
    }
  },
  response: ({ headers, payload }) => {
    const FunctionSummary = arrayifyObject(payload)
    const { ettag } = headers // wtf amazon
    return {
      FunctionSummary,
      ETag: ettag,
    }
  },
}

const UpdateKeyGroup = {
  awsDoc: docRoot + 'API_UpdateKeyGroup.html',
  validate: {
    KeyGroupConfig,
    Id,
    IfMatch,
  },
  request: ({ KeyGroupConfig, Id, IfMatch }) => {
    const payload = unarrayifyObject({ KeyGroupConfig })
    return {
      path: `/2020-05-31/key-group/${Id}`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload,
    }
  },
  response: ({ headers, payload }) => {
    const KeyGroup = arrayifyObject(payload)
    const { etag } = headers
    return {
      KeyGroup,
      ETag: etag,
    }
  },
}

const UpdateKeyValueStore = {
  awsDoc: docRoot + 'API_UpdateKeyValueStore.html',
  validate: {
    Name,
    Comment: { ...str, required, comment: 'New comment for the key value store' },
    IfMatch,
  },
  request: ({ Name, Comment, IfMatch }) => {
    return {
      path: `/2020-05-31/key-value-store/${Name}`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload: { UpdateKeyValueStoreRequest: { Comment } },
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      KeyValueStore: payload,
      ETag: etag,
    }
  },
}

const UpdateOriginAccessControl = {
  awsDoc: docRoot + 'API_UpdateOriginAccessControl.html',
  validate: {
    OriginAccessControlConfig,
    Id,
    IfMatch,
  },
  request: (params) => {
    const { OriginAccessControlConfig, Id, IfMatch } = params
    return {
      path: `/2020-05-31/origin-access-control/${Id}/config`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload: { OriginAccessControlConfig },
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      OriginAccessControl: payload,
      ETag: etag,
    }
  },
}

const UpdateOriginRequestPolicy = {
  awsDoc: docRoot + 'API_UpdateOriginRequestPolicy.html',
  validate: {
    OriginRequestPolicyConfig,
    Id,
    IfMatch,
  },
  request: ({ OriginRequestPolicyConfig, Id, IfMatch }) => {
    const payload = unarrayifyObject({ OriginRequestPolicyConfig })
    return {
      path: `/2020-05-31/origin-request-policy/${Id}`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload,
    }
  },
  response: ({ headers, payload }) => {
    const OriginRequestPolicy = arrayifyObject(payload)
    const { etag } = headers
    return {
      OriginRequestPolicy,
      ETag: etag,
    }
  },
}

const UpdatePublicKey = {
  awsDoc: docRoot + 'API_UpdatePublicKey.html',
  validate: {
    PublicKeyConfig: { ...obj, required, comment: 'Public key configuration', ref: docRoot + 'API_UpdatePublicKey.html#cloudfront-UpdatePublicKey-request-PublicKeyConfig' },
    Id,
    IfMatch,
  },
  request: (params) => {
    const { PublicKeyConfig, Id, IfMatch } = params
    return {
      path: `/2020-05-31/public-key/${Id}/config`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload: { PublicKeyConfig },
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      PublicKey: payload,
      ETag: etag,
    }
  },
}

const UpdateResponseHeadersPolicy = {
  awsDoc: docRoot + 'API_UpdateResponseHeadersPolicy.html',
  validate: {
    ResponseHeadersPolicyConfig,
    Id,
    IfMatch,
  },
  request: ({ ResponseHeadersPolicyConfig, Id, IfMatch }) => {
    const payload = unarrayifyObject({ ResponseHeadersPolicyConfig })
    return {
      path: `/2020-05-31/response-headers-policy/${Id}`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload: payload,
    }
  },
  response: ({ headers, payload }) => {
    const ResponseHeadersPolicy = arrayifyObject(payload)
    const { etag } = headers
    return {
      ResponseHeadersPolicy,
      ETag: etag,
    }
  },
}

export default {
  name: '@aws-lite/cloudfront',
  service,
  property,
  methods: {
    AssociateAlias,
    CopyDistribution,
    CreateCachePolicy,
    CreateCloudFrontOriginAccessIdentity,
    CreateContinuousDeploymentPolicy,
    CreateDistribution,
    CreateFieldLevelEncryptionConfig,
    CreateFieldLevelEncryptionProfile,
    CreateFunction,
    CreateInvalidation,
    CreateKeyGroup,
    CreateKeyValueStore,
    CreateMonitoringSubscription,
    CreateOriginAccessControl,
    CreateOriginRequestPolicy,
    CreatePublicKey,
    // CreateRealtimeLogConfig,
    CreateResponseHeadersPolicy,
    DeleteCachePolicy,
    DeleteCloudFrontOriginAccessIdentity,
    DeleteContinuousDeploymentPolicy,
    DeleteDistribution,
    DeleteFieldLevelEncryptionConfig,
    DeleteFieldLevelEncryptionProfile,
    DeleteFunction,
    DeleteKeyGroup,
    DeleteKeyValueStore,
    DeleteMonitoringSubscription,
    DeleteOriginAccessControl,
    DeleteOriginRequestPolicy,
    DeletePublicKey,
    DeleteResponseHeadersPolicy,
    DescribeFunction,
    DescribeKeyValueStore,
    GetCachePolicy,
    GetCachePolicyConfig,
    GetCloudFrontOriginAccessIdentity,
    GetCloudFrontOriginAccessIdentityConfig,
    GetContinuousDeploymentPolicy,
    GetContinuousDeploymentPolicyConfig,
    GetDistribution,
    GetDistributionConfig,
    GetFieldLevelEncryption,
    GetFieldLevelEncryptionConfig,
    GetFieldLevelEncryptionProfile,
    GetFieldLevelEncryptionProfileConfig,
    GetFunction,
    GetKeyGroup,
    GetKeyGroupConfig,
    GetOriginAccessControl,
    GetOriginAccessControlConfig,
    GetOriginRequestPolicy,
    GetOriginRequestPolicyConfig,
    GetMonitoringSubscription,
    GetPublicKey,
    GetPublicKeyConfig,
    GetResponseHeadersPolicy,
    GetResponseHeadersPolicyConfig,
    ListCachePolicies,
    ListCloudFrontOriginAccessIdentities,
    ListConflictingAliases,
    ListContinuousDeploymentPolicies,
    ListDistributions,
    ListFieldLevelEncryptionConfigs,
    ListFieldLevelEncryptionProfiles,
    ListFunctions,
    ListKeyGroups,
    ListKeyValueStores,
    ListOriginAccessControls,
    ListOriginRequestPolicies,
    ListPublicKeys,
    ListResponseHeadersPolicies,
    TestFunction,
    UpdateCachePolicy,
    UpdateCloudFrontOriginAccessIdentity,
    UpdateContinuousDeploymentPolicy,
    UpdateDistribution,
    UpdateFieldLevelEncryptionConfig,
    UpdateFieldLevelEncryptionProfile,
    UpdateFunction,
    UpdateKeyGroup,
    UpdateKeyValueStore,
    UpdateOriginAccessControl,
    UpdateOriginRequestPolicy,
    UpdatePublicKey,
    UpdateResponseHeadersPolicy,
    ...incomplete,
  },
}
