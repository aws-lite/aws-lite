// Each item here is expected to contain an Items property; each value is the XML property containing the Items in question
const arrayProperties = {
  // CachePolicy
  'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies': 'Name',
  'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers': 'Name',
  'CachePolicy.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings': 'Name',
  // CachePolicyConfig
  'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies': 'Name',
  'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers': 'Name',
  'CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings': 'Name',
  // CachePolicyConfigConfig
  'ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies': 'Name',
  'ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers': 'Name',
  // ContinuousDeploymentPolicy
  'ContinuousDeploymentPolicyConfig.StagingDistributionDnsNames': 'DnsName',
  'ContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfig.StagingDistributionDnsNames': 'DnsName',
  // ContinuousDeploymentPolicyConfig
  'ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings': 'Name',
  'StagingDistributionDnsNames': 'DnsName',
  // Distribution
  'ActiveTrustedKeyGroups': 'KeyGroup',
  'ActiveTrustedKeyGroups.Items.KeyPairIds': 'KeyPairId',
  'ActiveTrustedSigners': 'Signer',
  'ActiveTrustedSigners.Items.KeyPairIds': 'KeyPairId',
  'AliasICPRecordals': 'AliasICPRecordal',
  // DistributionConfig
  'DistributionConfig.Aliases': 'CNAME',
  'DistributionConfig.CacheBehaviors': 'CacheBehavior',
  'DistributionConfig.CacheBehaviors.Items.AllowedMethods': 'Method',
  'DistributionConfig.CacheBehaviors.Items.AllowedMethods.CachedMethods': 'Method',
  'DistributionConfig.CacheBehaviors.Items.ForwardedValues.Cookies.WhitelistedNames': 'Name',
  'DistributionConfig.CacheBehaviors.Items.ForwardedValues.Headers': 'Name',
  'DistributionConfig.CacheBehaviors.Items.ForwardedValues.QueryStringCacheKeys': 'Name',
  'DistributionConfig.CacheBehaviors.Items.FunctionAssociations': 'FunctionAssociation',
  'DistributionConfig.CacheBehaviors.Items.LambdaFunctionAssociations': 'LambdaFunctionAssociation',
  'DistributionConfig.CacheBehaviors.Items.TrustedKeyGroups': 'KeyGroup',
  'DistributionConfig.CacheBehaviors.Items.TrustedSigners': 'AwsAccountNumber',
  'DistributionConfig.CustomErrorResponses': 'CustomErrorResponse',
  'DistributionConfig.DefaultCacheBehavior.AllowedMethods': 'Method',
  'DistributionConfig.DefaultCacheBehavior.AllowedMethods.CachedMethods': 'Method',
  'DistributionConfig.DefaultCacheBehavior.ForwardedValues.Headers': 'Name',
  'DistributionConfig.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys': 'Name',
  'DistributionConfig.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames': 'Name',
  'DistributionConfig.DefaultCacheBehavior.FunctionAssociations': 'FunctionAssociation',
  'DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations': 'LambdaFunctionAssociation',
  'DistributionConfig.DefaultCacheBehavior.TrustedKeyGroups': 'KeyGroup',
  'DistributionConfig.DefaultCacheBehavior.TrustedSigners': 'AwsAccountNumber',
  'DistributionConfig.OriginGroups': 'OriginGroup',
  'DistributionConfig.OriginGroups.Items.Members': 'OriginGroupMember',
  'DistributionConfig.OriginGroups.Items.FailoverCriteria.StatusCodes': 'StatusCode',
  'DistributionConfig.Origins': 'Origin',
  'DistributionConfig.Origins.Items.CustomHeaders': 'OriginCustomHeader',
  'DistributionConfig.Origins.Items.CustomOriginConfig.OriginSslProtocols': 'SslProtocol',
  'DistributionConfig.Restrictions.GeoRestriction': 'Location',
  // DistributionSummary
  'Aliases': 'CNAME',
  'CacheBehaviors': 'CacheBehavior',
  'CacheBehaviors.Items.AllowedMethods': 'Method',
  'CacheBehaviors.Items.AllowedMethods.CachedMethods': 'Method',
  'CacheBehaviors.Items.ForwardedValues.Cookies.WhitelistedNames': 'Name',
  'CacheBehaviors.Items.ForwardedValues.Headers': 'Name',
  'CacheBehaviors.Items.ForwardedValues.QueryStringCacheKeys': 'Name',
  'CacheBehaviors.Items.FunctionAssociations': 'FunctionAssociation',
  'CacheBehaviors.Items.LambdaFunctionAssociations': 'LambdaFunctionAssociation',
  'CacheBehaviors.Items.TrustedKeyGroups': 'KeyGroup',
  'CacheBehaviors.Items.TrustedSigners': 'AwsAccountNumber',
  'CustomErrorResponses': 'CustomErrorResponse',
  'DefaultCacheBehavior.AllowedMethods': 'Method',
  'DefaultCacheBehavior.AllowedMethods.CachedMethods': 'Method',
  'DefaultCacheBehavior.ForwardedValues.Headers': 'Name',
  'DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys': 'Name',
  'DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames': 'Name',
  'DefaultCacheBehavior.FunctionAssociations': 'FunctionAssociation',
  'DefaultCacheBehavior.LambdaFunctionAssociations': 'LambdaFunctionAssociation',
  'DefaultCacheBehavior.TrustedKeyGroups': 'KeyGroup',
  'DefaultCacheBehavior.TrustedSigners': 'AwsAccountNumber',
  'OriginGroups': 'OriginGroup',
  'OriginGroups.Items.Members': 'OriginGroupMember',
  'OriginGroups.Items.FailoverCriteria.StatusCodes': 'StatusCode',
  'Origins': 'Origin',
  'Origins.Items.CustomHeaders': 'OriginCustomHeader',
  'Origins.Items.CustomOriginConfig.OriginSslProtocols': 'SslProtocol',
  'Restrictions.GeoRestriction': 'Location',
  // DistributionConfigWithTags
  'Tags': 'Tag',
  // StreamingDistribution
  // 'ActiveTrustedSigners': 'Signer',
  // 'ActiveTrustedSigners.Items.KeyPairIds': 'KeyPairId',
  // StreamingDistributionConfig
  'StreamingDistributionConfig.Aliases': 'CNAME',
  'StreamingDistributionConfig.TrustedSigners': 'AwsAccountNumber',
  // FieldLevelEncryptionConfig
  'FieldLevelEncryptionConfig.ContentTypeProfileConfig.ContentTypeProfiles': 'ContentTypeProfile',
  'FieldLevelEncryptionConfig.QueryArgProfileConfig.QueryArgProfiles': 'QueryArgProfile',
  'ContentTypeProfileConfig.ContentTypeProfiles': 'ContentTypeProfile',
  'QueryArgProfileConfig.QueryArgProfiles': 'QueryArgProfile',
  // FieldLevelEncryptionProfileConfig
  'FieldLevelEncryptionProfileConfig.EncryptionEntities': 'EncryptionEntity',
  'FieldLevelEncryptionProfileConfig.EncryptionEntities.Items.FieldPatterns': 'FieldPattern',
  'EncryptionEntities': 'EncryptionEntity',
  'EncryptionEntities.Items.FieldPatterns': 'FieldPattern',
  // Functions
  'FunctionConfig.KeyValueStoreAssociations': 'KeyValueStoreAssociation',
  'FunctionSummary.FunctionConfig.KeyValueStoreAssociations': 'KeyValueStoreAssociation',
  // Invalidations
  'InvalidationBatch.Paths': 'Path',
  // KeyGroups
  'KeyGroupConfig': 'PublicKey',
  'KeyGroup.KeyGroupConfig': 'PublicKey',
  // OriginRequestPolicy
  'OriginRequestPolicyConfig.CookiesConfig.Cookies': 'Name',
  'OriginRequestPolicyConfig.HeadersConfig.Headers': 'Name',
  'OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings': 'Name',
  'OriginRequestPolicy.OriginRequestPolicyConfig.CookiesConfig.Cookies': 'Name',
  'OriginRequestPolicy.OriginRequestPolicyConfig.HeadersConfig.Headers': 'Name',
  'OriginRequestPolicy.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings': 'Name',
  'CookiesConfig.Cookies': 'Name',
  'HeadersConfig.Headers': 'Name',
  'QueryStringsConfig.QueryStrings': 'Name',
  // ResponseHeadersPolicy
  'CorsConfig.AccessControlAllowHeaders': 'Header',
  'CorsConfig.AccessControlAllowMethods': 'Method',
  'CorsConfig.AccessControlAllowOrigins': 'Origin',
  'CorsConfig.AccessControlExposeHeaders': 'Header',
  'CustomHeadersConfig': 'ResponseHeadersPolicyCustomHeader',
  'RemoveHeadersConfig': 'ResponseHeadersPolicyRemoveHeader',
  'ResponseHeadersPolicyConfig.CorsConfig.AccessControlAllowHeaders': 'Header',
  'ResponseHeadersPolicyConfig.CorsConfig.AccessControlAllowMethods': 'Method',
  'ResponseHeadersPolicyConfig.CorsConfig.AccessControlAllowOrigins': 'Origin',
  'ResponseHeadersPolicyConfig.CorsConfig.AccessControlExposeHeaders': 'Header',
  'ResponseHeadersPolicyConfig.CustomHeadersConfig': 'ResponseHeadersPolicyCustomHeader',
  'ResponseHeadersPolicyConfig.RemoveHeadersConfig': 'ResponseHeadersPolicyRemoveHeader',
  'ResponseHeadersPolicy.ResponseHeadersPolicyConfig.CorsConfig.AccessControlAllowHeaders': 'Header',
  'ResponseHeadersPolicy.ResponseHeadersPolicyConfig.CorsConfig.AccessControlAllowMethods': 'Method',
  'ResponseHeadersPolicy.ResponseHeadersPolicyConfig.CorsConfig.AccessControlAllowOrigins': 'Origin',
  'ResponseHeadersPolicy.ResponseHeadersPolicyConfig.CorsConfig.AccessControlExposeHeaders': 'Header',
  'ResponseHeadersPolicy.ResponseHeadersPolicyConfig.CustomHeadersConfig': 'ResponseHeadersPolicyCustomHeader',
  'ResponseHeadersPolicy.ResponseHeadersPolicyConfig.RemoveHeadersConfig': 'ResponseHeadersPolicyRemoveHeader',
}

const arrayifyItemsProp = obj => {
  // Handle obj.Items XML interpolation: Items may not exist, may be an object containing an array, or may be an object with a single property containing an object
  let { Items } = obj

  // Items not (yet) populated
  if (!Items) Items = []
  const firstItem = Object.values(Items)[0]

  // Items is an array within an object
  /**/ if (Array.isArray(firstItem)) Items = firstItem
  // Items is a single object within an object
  else if (typeof Items === 'object') Items = [ firstItem ]

  obj.Items = Items.filter(Boolean).flat()
  return obj
}

function getPropertyPath (obj, lastPropertyPath, key) {
  // Don't add array index keys to the name strings
  if (Array.isArray(obj)) {
    return lastPropertyPath ? lastPropertyPath : ''
  }
  return lastPropertyPath ? `${lastPropertyPath}.${key}` : key
}

function arrayifyObject (obj, lastPropertyPath, arraysList = arrayProperties) {
  Object.entries(obj).forEach(([ key, value ]) => {
    const currentPropertyPath = getPropertyPath(obj, lastPropertyPath, key)
    // We've traversed into a property that should have an `Items` array
    if (arraysList[currentPropertyPath]) {
      obj[key] = arrayifyItemsProp(value)
    }

    // Just in case: reset the reference for value
    value = obj[key]

    if (Array.isArray(value)) {
      // Note: this does not currently attempt to recurse arrays containing arrays
      obj[key] = value.map(i => {
        if (typeof i === 'object' && i && !Array.isArray(i)) {
          return arrayifyObject(i, currentPropertyPath)
        }
        return i
      })
    }
    else if (typeof value === 'object') {
      arrayifyObject(value, currentPropertyPath)
    }
  })
  return obj
}

function maybeGetETagAndLocation (headers) {
  const result = {}
  if (headers.etag || headers.ETag || headers.ettag) result.ETag = headers.etag || headers.ETag || headers.ettag // ettag for `UpdateFunction` wtf amazon
  if (headers.location) result.Location = headers.location
  return result
}

// Specifically for unarrayifying distros to be re-serialized to XML (see: UpdateDistribution)
// TODO: refactor to prevent mutating input
function unarrayifyObject (obj, lastPropertyPath) {
  Object.entries(obj).forEach(([ key, value ]) => {
    const currentPropertyPath = getPropertyPath(obj, lastPropertyPath, key)

    if (Array.isArray(value)) {
      // Note: this does not currently attempt to recurse arrays containing arrays
      obj[key] = value.map(i => {
        if (typeof i === 'object' && i && !Array.isArray(i)) {
          return unarrayifyObject(i, currentPropertyPath)
        }
        return i
      })
    }
    else if (typeof value === 'object') {
      obj[key] = unarrayifyObject(value, currentPropertyPath)
    }

    // Just in case: reset the reference for value
    value = obj[key]

    // We've traversed into a property that needs to have its `Items` array readied for XML
    if (arrayProperties[currentPropertyPath] && value.Items) {
      obj[key] = { ...value }
      if (value.Items.length === 0) {
        delete obj[key].Items
      }
      else {
        obj[key].Items = value.Items.length === 1
          ? { [arrayProperties[currentPropertyPath]]: value.Items[0] }
          : { [arrayProperties[currentPropertyPath]]: value.Items }
      }
    }
  })
  return obj
}

// Method for de-Items-ing an object; prob no longer necessary, but here jic
/* function stripEmptyItems (obj) {
  Object.entries(obj).forEach(([ key, value ]) => {
    if (obj[key]?.Quantity === 0 &&
        Array.isArray(obj[key]?.Items) &&
        !obj[key].Items.length) {
      delete obj[key].Items
    }

    if (Array.isArray(value)) {
      obj[key] = value.map(i => {
        if (typeof i === 'object' && i && !Array.isArray(i)) {
          return stripEmptyItems(i)
        }
        return i
      })
    }
    else if (typeof value === 'object') {
      stripEmptyItems(value)
    }
  })
  return obj
} */

export {
  arrayifyItemsProp,
  arrayifyObject,
  unarrayifyObject,
  maybeGetETagAndLocation,
}
