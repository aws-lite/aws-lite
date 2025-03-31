/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { arrayifyItemsProp, arrayifyObject, unarrayifyObject, maybeGetETagAndLocation } from './lib.mjs'

const service = 'cloudfront'
const property = 'CloudFront'
const required = true
const docRoot = 'https://docs.aws.amazon.com/cloudfront/latest/APIReference/'
// const devGuide = 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/'

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }

// const Comment = { ...str, required, comment: 'Distribution description; must be under 128 characters' }
const Alias = { ...str, required, comment: 'Alternative domain name; must contain one or more dots (.) and can only include lower case characters and dashes, a leading star (*) can be used to indicate all subdomains, for example `*.example.com`' }
const ARN = { ...str, comment: 'ARN of the real-time log configuration' }
const CachePolicyConfig = { ...obj, required, comment: 'Complete cache policy configuration', ref: docRoot + 'API_CachePolicyConfig.html' }
const CallerReference = { ...str, required, comment: 'Unique value that ensures that the request cannot be replayed' }
const CloudFrontOriginAccessIdentityConfig = { ...obj, required, comment: 'Complete  Cloud Front origin access identity configuration', ref: docRoot + 'API_CreateCloudFrontOriginAccessIdentity.html' }
const ContinuousDeploymentPolicyConfig = { ...obj, required, comment: 'Complete continuous deployment policy configuration', ref: docRoot + 'API_ContinuousDeploymentPolicyConfig.html' }
const DistributionConfig = { ...obj, required, comment: 'Complete distribution configuration', ref: docRoot + 'API_DistributionConfig.html' }
const DistributionId = { ...str, required, comment: 'Distribution ID' }
const EndPoints = { ...arr, required, comment: 'Array of `Endpoint` objects containing information about the Kinesis data stream', ref: docRoot + 'API_EndPoint.html' }
const FieldLevelEncryptionConfig = { ...obj, required, comment: 'Complete field level encryption configuration', ref: docRoot + 'API_FieldLevelEncryptionConfig.html' }
const FieldLevelEncryptionProfileConfig = { ...obj, required, comment: 'Complete field level encryption profile configuration', ref: 'API_FieldLevelEncryptionProfileConfig.html' }
const Fields = { ...arr, required, comment: 'Array of strings specifying fields to include in each log record', ref: docRoot + 'real-time-logs.html#understand-real-time-log-config-fields' }
const FunctionCode = { ...str, required, comment: 'Base64 encoded function code' }
const FunctionConfig = { ...obj, required, comment: 'Function configuration' }
const Id = { ...str, required, comment: 'Resource ID' }
const IfMatch = { ...str, required, comment: 'Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource' }
const ImportSource = { ...obj, comment: 'Describe the S3 source ARN and type', ref: docRoot + 'API_ImportSource.html' }
const KeyGroupConfig = { ...obj, required, comment: 'Key group configuration', ref: docRoot + 'API_KeyGroupConfig.html' }
const Marker = { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' }
const MaxItems = { ...num, comment: 'Maximum number of items to return' }
const Name = { ...str, required, comment: 'User assigned name for the resource' }
const OriginAccessControlConfig = { ...obj, required, comment: 'Complete origin access control configuration', ref: docRoot + 'API_OriginAccessControlConfig.html' }
const OriginRequestPolicyConfig = { ...obj, required, comment: 'Complete origin request policy configuration', ref: docRoot + 'API_OriginRequestPolicyConfig.html' }
const PublicKeyConfig = { ...obj, required, comment: 'Public key configuration', ref: docRoot + 'API_PublicKeyConfig.html' }
const Resource = { ...str, required, comment: 'ARN of a cloudfront resource' }
const ResponseHeadersPolicyConfig = { ...obj, required, comment: 'Complete response headers policy configuration', ref: docRoot + 'API_ResponseHeadersPolicyConfig.html' }
const SamplingRate = { ...num, required, comment: 'Percentage of viewer requests between 1 and 100 (inclusive) that will be sampled to generate logs' }
const Stage = { ...str, comment: 'The functions stage; can be one of: `DEVELOPMENT`, `LIVE`' }
const StreamingDistributionConfig = { ...obj, required, comment: 'Complete streaming distribution configuration', ref: docRoot + 'API_StreamingDistributionConfig.html' }
const Type = { ...str, comment: 'Filter results by policy type; can be one of: `managed`, `custom`' }
const valPaginate = { type: [ 'boolean', 'string' ], comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const xmlns = 'http://cloudfront.amazonaws.com/doc/2020-05-31/'

const paginator = {
  cursor: 'Marker',
  token: 'NextMarker',
  type: 'query',
}

const defaultResponse = ({ payload }) => payload || {}

const AssociateAlias = {
  awsDoc: docRoot + 'API_AssociateAlias.html',
  validate: {
    TargetDistributionId: { ...str, required, comment: 'Distribution ID' },
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
    PrimaryDistributionId: { ...str, required, comment: 'Distribution ID' },
    CallerReference,
    IfMatch,
    Staging: { ...bool, comment: 'Set to true to specify that the copy will be a staging distribution' },
    Enabled: { ...bool, comment: 'Set to false to disable the copy upon creation' },
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
    return {
      Distribution,
      ...maybeGetETagAndLocation(headers),
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
    return {
      CachePolicy,
      ...maybeGetETagAndLocation(headers),
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
    return {
      CloudFrontOriginAccessIdentity: payload,
      ...maybeGetETagAndLocation(headers),
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
    return {
      ContinuousDeploymentPolicy,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

const CreateDistribution = {
  awsDoc: docRoot + 'API_CreateDistribution.html',
  validate: {
    DistributionConfig,
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
    const payload = unarrayifyObject(params)
    return {
      path: '/2020-05-31/distribution',
      method: 'POST',
      headers: xml,
      xmlns,
      payload,
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    return {
      Distribution,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

const CreateDistributionWithTags = {
  awsDoc: docRoot + 'API_CreateDistributionWithTags.html',
  validate: {
    DistributionConfigWithTags: { ...obj, required, comment: 'Complete distribution configuration object', ref: docRoot + 'API_CreateDistributionWithTags.html#cloudfront-CreateDistributionWithTags-request-DistributionConfigWithTags' },
  },
  request: (params) => {
    const DistributionConfigWithTags = unarrayifyObject(params.DistributionConfigWithTags)
    return {
      path: '/2020-05-31/distribution',
      query: { WithTags: '' },
      method: 'POST',
      headers: xml,
      xmlns,
      payload: { DistributionConfigWithTags },
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    return {
      Distribution,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

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

    return {
      FieldLevelEncryption,
      ...maybeGetETagAndLocation(headers),

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

    return {
      FieldLevelEncryptionProfile,
      ...maybeGetETagAndLocation(headers),

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

    return {
      FunctionSummary,

      ...maybeGetETagAndLocation(headers),
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
    return {
      KeyGroup,
      ...maybeGetETagAndLocation(headers),
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

    return {
      KeyValueStore: payload,
      ...maybeGetETagAndLocation(headers),

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

    return {
      OriginAccessControl: payload,
      ...maybeGetETagAndLocation(headers),

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

    return {
      OriginRequestPolicy,
      ...maybeGetETagAndLocation(headers),

    }
  },
}

const CreatePublicKey = {
  awsDoc: docRoot + 'API_CreatePublicKey.html',
  validate: {
    PublicKeyConfig,
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

    return {
      PublicKey: payload,
      ...maybeGetETagAndLocation(headers),

    }
  },
}

// TODO: verify
const CreateRealtimeLogConfig = {
  awsDoc: docRoot + 'API_CreateRealtimeLogConfig.html',
  validate: {
    EndPoints,
    Fields,
    Name,
    SamplingRate,
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

    const ResponseHeadersPolicy = arrayifyObject(payload)
    return {
      ResponseHeadersPolicy,
      ...maybeGetETagAndLocation(headers),

    }
  },
}

// TODO: figure out why `rate exceeded` error happens
const CreateStreamingDistribution = {
  awsDoc: docRoot + 'API_CreateStreamingDistribution.html',
  validate: {
    StreamingDistributionConfig,
  },
  request: (params) => {
    const StreamingDistributionConfig = unarrayifyObject(params.StreamingDistributionConfig)
    return {
      path: '/2020-05-31/streaming-distribution',
      headers: xml,
      xmlns,
      payload: { StreamingDistributionConfig },
    }
  },
  response: ({ headers, payload }) => {
    const StreamingDistribution = arrayifyObject(payload)

    return {
      StreamingDistribution,
      ...maybeGetETagAndLocation(headers),

    }
  },
}

// TODO: figure out why `rate exceeded` error happens
const CreateStreamingDistributionWithTags = {
  awsDoc: docRoot + 'API_CreateStreamingDistributionWithTags.html',
  validate: {
    StreamingDistributionConfigWithTags: { ...obj, required, comment: 'Complete streaming distribution configuration with tags', ref: docRoot + 'API_CreateStreamingDistributionWithTags.html#cloudfront-CreateStreamingDistributionWithTags-request-StreamingDistributionConfigWithTags' },
  },
  request: (params) => {
    const StreamingDistributionConfigWithTags = unarrayifyObject(params.StreamingDistributionConfigWithTags)
    return {
      path: '/2020-05-31/streaming-distribution',
      query: { WithTags: '' },
      headers: xml,
      xmlns,
      payload: { StreamingDistributionConfigWithTags },
    }
  },
  response: ({ headers, payload }) => {
    const StreamingDistribution = arrayifyObject(payload)
    return {
      StreamingDistribution,
      ...maybeGetETagAndLocation(headers),
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

// TODO: verify
const DeleteRealtimeLogConfig = {
  awsDoc: docRoot + 'API_DeleteRealtimeLogConfig.html',
  validate: {
    ARN,
    Name,
  },
  request: (params) => {
    return {
      path: '/2020-05-31/delete-realtime-log-config',
      headers: xml,
      xmlns,
      payload: { ...params },
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

// TODO: verify
const DeleteStreamingDistribution = {
  awsDoc: docRoot + 'API_DeleteStreamingDistribution.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/streaming-distribution/${Id}`,
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

    const FunctionSummary = arrayifyObject(payload)
    return {
      FunctionSummary,
      ...maybeGetETagAndLocation(headers),
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

    return {
      KeyValueStore: payload,
      ...maybeGetETagAndLocation(headers),
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
    return {
      CachePolicy,
      ...maybeGetETagAndLocation(headers),
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
    return {
      CachePolicyConfig,
      ...maybeGetETagAndLocation(headers),
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

    return {
      CloudFrontOriginAccessIdentity: payload,
      ...maybeGetETagAndLocation(headers),
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

    return {
      CloudFrontOriginAccessIdentityConfig: payload,
      ...maybeGetETagAndLocation(headers),
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
    return {
      ContinuousDeploymentPolicy,
      ...maybeGetETagAndLocation(headers),
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
    return {
      ContinuousDeploymentPolicyConfig,
      ...maybeGetETagAndLocation(headers),
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
    return {
      Distribution,
      ...maybeGetETagAndLocation(headers),
    }
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
    return {
      DistributionConfig,
      ...maybeGetETagAndLocation(headers),
    }
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
    return {
      FieldLevelEncryption,
      ...maybeGetETagAndLocation(headers),
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
    return {
      FieldLevelEncryptionConfig,
      ...maybeGetETagAndLocation(headers),
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
    return {
      FieldLevelEncryptionProfile,
      ...maybeGetETagAndLocation(headers),
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
    return {
      FieldLevelEncryptionProfileConfig,
      ...maybeGetETagAndLocation(headers),
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

const GetInvalidation = {
  awsDoc: docRoot + 'API_GetInvalidation.html',
  validate: {
    DistributionId,
    Id,
  },
  request: ({ DistributionId, Id }) => {
    return {
      path: `/2020-05-31/distribution/${DistributionId}/invalidation/${Id}`,
    }
  },
  response: ({ payload }) => {
    const Invalidation = arrayifyObject(payload)
    return { Invalidation }
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
    return {
      OriginAccessControl: payload,
      ...maybeGetETagAndLocation(headers),
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
    return {
      OriginAccessControlConfig: payload,
      ...maybeGetETagAndLocation(headers),
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
    return {
      OriginRequestPolicy,
      ...maybeGetETagAndLocation(headers),
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
    return {
      OriginRequestPolicyConfig,
      ...maybeGetETagAndLocation(headers),
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
    return {
      PublicKey: payload,
      ...maybeGetETagAndLocation(headers),
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
    return {
      PublicKeyConfig: payload,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

// TODO: verify
const GetRealtimeLogConfig = {
  awsDoc: docRoot + 'API_GetRealtimeLogConfig.html',
  validate: {
    ARN,
    Name,
  },
  request: (payload) => {
    return {
      path: '/2020-05-31/get-realtime-log-config',
      headers: xml,
      xmlns,
      payload,
    }
  },
  response: ({ payload }) => {
    const RealtimeLogConfig = arrayifyObject(payload)
    return { RealtimeLogConfig }
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
    return {
      ResponseHeadersPolicy,
      ...maybeGetETagAndLocation(headers),
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
    return {
      ResponseHeadersPolicyConfig,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

// TODO: verify
const GetStreamingDistribution = {
  awsDoc: docRoot + 'API_GetStreamingDistribution.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/streaming-distribution/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const StreamingDistribution = arrayifyObject(payload)
    return {
      StreamingDistribution,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

// TODO: verify
const GetStreamingDistributionConfig = {
  awsDoc: docRoot + 'API_GetStreamingDistributionConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/streaming-distribution/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const StreamingDistributionConfig = arrayifyObject(payload)
    return {
      StreamingDistributionConfig,
      ...maybeGetETagAndLocation(headers),
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
    Marker,
    MaxItems,
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
        ...paginator,
        accumulator: 'Items.DistributionSummary',
      },
    }
  },
  response: ({ payload }) => {
    const DistributionList = arrayifyItemsProp(payload)
    DistributionList.Items = DistributionList.Items.map(i => arrayifyObject(i))
    return { DistributionList }
  },
}

const ListDistributionsByCachePolicyId = {
  awsDoc: docRoot + 'API_ListDistributionsByCachePolicyId.html',
  validate: {
    CachePolicyId: { ...str, required, comment: 'Cache policy ID' },
    MaxItems,
    Marker,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate, CachePolicyId } = params
    delete query.CachePolicyId
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/distributionsByCachePolicyId/${CachePolicyId}`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.DistributionId',
      },
    }
  },
  response: ({ payload }) => {
    const DistributionIdList = arrayifyItemsProp(payload)
    return { DistributionIdList }
  },
}

const ListDistributionsByKeyGroup = {
  awsDoc: docRoot + 'API_ListDistributionsByKeyGroup.html',
  validate: {
    KeyGroupId: { ...str, required, comment: 'Key group ID' },
    MaxItems,
    Marker,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate, KeyGroupId } = params
    delete query.CachePolicyId
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/distributionsByKeyGroupId/${KeyGroupId}`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.DistributionId',
      },
    }
  },
  response: ({ payload }) => {
    const DistributionIdList = arrayifyItemsProp(payload)
    return { DistributionIdList }
  },
}

const ListDistributionsByOriginRequestPolicyId = {
  awsDoc: docRoot + 'API_ListDistributionsByOriginRequestPolicyId.html',
  validate: {
    OriginRequestPolicyId: { ...str, required, comment: 'Origin request policy ID' },
    MaxItems,
    Marker,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate, OriginRequestPolicyId } = params
    delete query.CachePolicyId
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/distributionsByOriginRequestPolicyId/${OriginRequestPolicyId}`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.DistributionId',
      },
    }
  },
  response: ({ payload }) => {
    const DistributionIdList = arrayifyItemsProp(payload)
    return { DistributionIdList }
  },
}

// TODO: verify
const ListDistributionsByRealtimeLogConfig = {
  awsDoc: docRoot + 'API_ListDistributionsByRealtimeLogConfig.html',
  validate: {
    Marker,
    MaxItems,
    RealtimeLogConfigArn: { ...str, comment: 'ARN of a real-time log configuration' },
    RealtimeLogConfigName: { ...str, comment: 'Name of a real-time log configuration' },
    paginate: valPaginate,
  },
  request: (params) => {
    const payload = { ...params }
    const { paginate } = params
    if (paginate) delete payload.paginate
    return {
      path: `/2020-05-31/distributionsByRealtimeLogConfig`,
      headers: xml,
      payload,
      paginate,
      paginator: {
        ...paginator,
        type: 'payload',
        accumulator: 'Items.DistributionSummary',
      },
    }
  },
  response: ({ payload }) => {
    const DistributionList = arrayifyItemsProp(payload)
    DistributionList.Items = DistributionList.Items.map(i => arrayifyObject(i))
    return { DistributionList }
  },
}

const ListDistributionsByResponseHeadersPolicyId = {
  awsDoc: docRoot + 'API_ListDistributionsByResponseHeadersPolicyId.html',
  validate: {
    ResponseHeadersPolicyId: { ...str, required, comment: 'Response headers policy ID' },
    MaxItems,
    Marker,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate, ResponseHeadersPolicyId } = params
    delete query.CachePolicyId
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/distributionsByResponseHeadersPolicyId/${ResponseHeadersPolicyId}`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.DistributionId',
      },
    }
  },
  response: ({ payload }) => {
    const DistributionIdList = arrayifyItemsProp(payload)
    return { DistributionIdList }
  },
}

// TODO: verify
const ListDistributionsByWebACLId = {
  awsDoc: docRoot + 'API_ListDistributionsByWebACLId.html',
  validate: {
    WebACLId: { ...str, required, comment: 'WAF Wev ACL ID; specify `null` to list distributions with no web ACL' },
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/distributionsByWebACLId`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.DistributionSummary',
      },
    }
  },
  response: ({ payload }) => {
    const DistributionList = arrayifyItemsProp(payload)
    DistributionList.Items = DistributionList.Items.map(i => arrayifyObject(i))
    return { DistributionList }
  },
}

const ListFieldLevelEncryptionConfigs = {
  awsDoc: docRoot + 'API_ListFieldLevelEncryptionConfigs.html',
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
    Marker,
    MaxItems,
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

const ListInvalidations = {
  awsDoc: docRoot + 'API_ListInvalidations.html',
  validate: {
    DistributionId,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const { DistributionId, paginate } = params
    const query = { ...params }
    delete query.DistributionId
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/distribution/${DistributionId}/invalidation`,
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.InvalidationSummary',
      },
    }
  },
  response: ({ payload }) => {
    const InvalidationList = arrayifyItemsProp(payload)
    InvalidationList.Items = InvalidationList.Items.map(i => arrayifyObject(i))
    return { InvalidationList }
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

// TODO: verify
const ListRealtimeLogConfigs = {
  awsDoc: docRoot + 'API_ListRealtimeLogConfigs.html',
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
      path: `/2020-05-31/realtime-log-config`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.RealtimeLogConfig',
      },
    }
  },
  response: ({ payload }) => {
    const RealtimeLogConfigs = arrayifyItemsProp(payload)
    RealtimeLogConfigs.Items = RealtimeLogConfigs.Items.map(i => arrayifyObject(i))
    return { RealtimeLogConfigs }
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

// TODO: verify
const ListStreamingDistributions = {
  awsDoc: docRoot + 'API_ListStreamingDistributions.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const { paginate } = params
    const query = { ...params }
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/streaming-distribution',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.StreamingDistributionSummary',
      },
    }
  },
  response: ({ payload }) => {
    const StreamingDistributionList = arrayifyItemsProp(payload)
    StreamingDistributionList.Items = StreamingDistributionList.Items.map(i => arrayifyObject(i))
    return { StreamingDistributionList }
  },
}

const ListTagsForResource = {
  awsDoc: docRoot + 'API_ListTagsForResource.html',
  validate: {
    Resource,
  },
  request: ({ Resource }) => {
    return {
      path: '/2020-05-31/tagging',
      query: { Resource },
    }
  },
  response: ({ payload }) => {
    const Tags = arrayifyItemsProp(payload)
    return { Tags }
  },
}

// TODO: verify
const PublishFunction = {
  awsDoc: docRoot + 'API_PublishFunction.html',
  validate: {
    IfMatch,
    Name,
  },
  request: ({ IfMatch, Name }) => {
    return {
      path: `/2020-05-31/function/${Name}/publish`,
      type: 'POST',
      headers: { IfMatch },
    }
  },
  response: ({ payload }) => {
    const FunctionSummary = arrayifyObject(payload)
    return { FunctionSummary }
  },
}

const TagResource = {
  awsDoc: docRoot + 'API_TagResource.html',
  validate: {
    Resource,
    Tags: { ...arr, required, comment: 'Array of `Tag` objects', ref: docRoot + 'API_Tags.html' },
  },
  request: ({ Resource, Tags }) => {
    const payload = {
      Tags: {
        Items: {
          Tag: Tags,
        },
      },
    }
    return {
      path: '/2020-05-31/tagging',
      methods: 'POST',
      query: { Operation: 'Tag', Resource },
      headers: xml,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const TestFunction = {
  awsDoc: docRoot + 'API_TestFunction.html',
  validate: {
    Name,
    IfMatch,
    EventObject: { ...str, required, comment: 'Base64 encoded binary data event object that will be passed to your function as an argument', ref: docRoot + 'API_TestFunction.html#cloudfront-TestFunction-request-EventObject' },
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
    if (TestResult.FunctionExecutionLogs?.member) {
      const member = TestResult.FunctionExecutionLogs.member
      TestResult.FunctionExecutionLogs = Array.isArray(member) ? member : [ member ]
    }
    return { TestResult }
  },
}

const UntagResource = {
  awsDoc: docRoot + 'API_UntagResource.html',
  validate: {
    Resource,
    TagKeys: { ...arr, required, comment: 'Array of tag keys', ref: docRoot + 'API_TagKeys.html' },
  },
  request: ({ Resource, TagKeys }) => {
    const payload = {
      TagKeys: {
        Items: {
          Key: TagKeys,
        },
      },
    }
    return {
      path: '/2020-05-31/tagging',
      methods: 'POST',
      query: { Operation: 'Untag', Resource },
      headers: xml,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
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
    const CachePolicy = arrayifyObject(payload)
    return {
      CachePolicy,
      ...maybeGetETagAndLocation(headers),
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
    return {
      CloudFrontOriginAccessIdentity: payload,
      ...maybeGetETagAndLocation(headers),
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
    return {
      ContinuousDeploymentPolicy,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

const UpdateDistribution = {
  awsDoc: docRoot + 'API_UpdateDistribution.html',
  validate: {
    DistributionConfig,
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
    return {
      DistributionConfig,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

// TODO: verify
const UpdateDistributionWithStagingConfig = {
  awsDoc: docRoot + 'API_UpdateDistributionWithStagingConfig.html',
  validate: {
    Id,
    IfMatch: { ...IfMatch, required: false },
    StagingDistributionId: { ...str, comment: 'ID of a staging distribution to copy into the primary distribution' },
  },
  request: ({ Id, IfMatch, StagingDistributionId }) => {
    const headers = {}
    const query = {}
    if (IfMatch) headers.IfMatch = IfMatch
    if (StagingDistributionId) query.StagingDistributionId = StagingDistributionId
    return {
      path: `/2020-05-31/distribution/${Id}`,
      method: 'PUT',
      query,
      headers,
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    return {
      Distribution,
      ...maybeGetETagAndLocation(headers),
    }
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
    return {
      FieldLevelEncryption,
      ...maybeGetETagAndLocation(headers),
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
    return {
      FieldLevelEncryptionProfile,
      ...maybeGetETagAndLocation(headers),
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
    return {
      FunctionSummary,
      ...maybeGetETagAndLocation(headers),
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
    return {
      KeyGroup,
      ...maybeGetETagAndLocation(headers),
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
    return {
      KeyValueStore: payload,
      ...maybeGetETagAndLocation(headers),
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

    return {
      OriginAccessControl: payload,
      ...maybeGetETagAndLocation(headers),
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

    return {
      OriginRequestPolicy,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

const UpdatePublicKey = {
  awsDoc: docRoot + 'API_UpdatePublicKey.html',
  validate: {
    PublicKeyConfig,
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

    return {
      PublicKey: payload,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

// TODO: verify
const UpdateRealtimeLogConfig = {
  awsDoc: docRoot + 'API_UpdateRealtimeLogConfig.html',
  validate: {
    ARN,
    EndPoints,
    Fields,
    Name,
    SamplingRate,
  },
  request: (params) => {
    const { EndPoints, Fields } = params
    const UpdateRealtimeLogConfigRequest = { ...params }
    if (EndPoints) UpdateRealtimeLogConfigRequest.EndPoints = { EndPoint: EndPoints }
    if (Fields) UpdateRealtimeLogConfigRequest.Fields = { Field: Fields }
    return {
      path: '/2020-05-31/realtime-log-config',
      headers: xml,
      xmlns,
      payload: { UpdateRealtimeLogConfigRequest },
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

    return {
      ResponseHeadersPolicy,
      ...maybeGetETagAndLocation(headers),
    }
  },
}

// TODO: verify
const UpdateStreamingDistribution = {
  awsDoc: docRoot + 'API_UpdateStreamingDistribution.html',
  validate: {
    Id,
    IfMatch,
    StreamingDistributionConfig,
  },
  request: (params) => {
    const { Id, IfMatch } = params
    const StreamingDistributionConfig = unarrayifyObject(params.StreamingDistributionConfig)
    return {
      path: `/2020-05-31/streaming-distribution/${Id}/config`,
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload: { StreamingDistributionConfig },
    }
  },
  response: ({ headers, payload }) => {
    const StreamingDistribution = arrayifyObject(payload)

    return {
      StreamingDistribution,
      ...maybeGetETagAndLocation(headers),
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
    CreateDistributionWithTags,
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
    CreateRealtimeLogConfig,
    CreateResponseHeadersPolicy,
    CreateStreamingDistribution,
    CreateStreamingDistributionWithTags,
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
    DeleteRealtimeLogConfig,
    DeleteResponseHeadersPolicy,
    DeleteStreamingDistribution,
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
    GetInvalidation,
    GetKeyGroup,
    GetKeyGroupConfig,
    GetMonitoringSubscription,
    GetOriginAccessControl,
    GetOriginAccessControlConfig,
    GetOriginRequestPolicy,
    GetOriginRequestPolicyConfig,
    GetPublicKey,
    GetPublicKeyConfig,
    GetRealtimeLogConfig,
    GetResponseHeadersPolicy,
    GetResponseHeadersPolicyConfig,
    GetStreamingDistribution,
    GetStreamingDistributionConfig,
    ListCachePolicies,
    ListCloudFrontOriginAccessIdentities,
    ListConflictingAliases,
    ListContinuousDeploymentPolicies,
    ListDistributions,
    ListDistributionsByCachePolicyId,
    ListDistributionsByKeyGroup,
    ListDistributionsByOriginRequestPolicyId,
    ListDistributionsByRealtimeLogConfig,
    ListDistributionsByResponseHeadersPolicyId,
    ListDistributionsByWebACLId,
    ListFieldLevelEncryptionConfigs,
    ListFieldLevelEncryptionProfiles,
    ListFunctions,
    ListInvalidations,
    ListKeyGroups,
    ListKeyValueStores,
    ListOriginAccessControls,
    ListOriginRequestPolicies,
    ListPublicKeys,
    ListRealtimeLogConfigs,
    ListResponseHeadersPolicies,
    ListStreamingDistributions,
    ListTagsForResource,
    PublishFunction,
    TagResource,
    TestFunction,
    UntagResource,
    UpdateCachePolicy,
    UpdateCloudFrontOriginAccessIdentity,
    UpdateContinuousDeploymentPolicy,
    UpdateDistribution,
    UpdateDistributionWithStagingConfig,
    UpdateFieldLevelEncryptionConfig,
    UpdateFieldLevelEncryptionProfile,
    UpdateFunction,
    UpdateKeyGroup,
    UpdateKeyValueStore,
    UpdateOriginAccessControl,
    UpdateOriginRequestPolicy,
    UpdatePublicKey,
    UpdateRealtimeLogConfig,
    UpdateResponseHeadersPolicy,
    UpdateStreamingDistribution,
    ...incomplete,
  },
}
