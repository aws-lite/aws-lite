# `@aws-lite/cloudfront`

> Official `aws-lite` plugin for CloudFront

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/cloudfront
```

Optionally install types:

```sh
npm i -D @aws-lite/cloudfront-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudfront)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudfront)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `CreateCachePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html)

Properties:
- **`CachePolicyConfig` (object) [required]**
  - Complete cache policy configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CachePolicyConfig.html)


### `CreateCloudFrontOriginAccessIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html)

Properties:
- **`CloudFrontOriginAccessIdentityConfig` (object) [required]**
  - Complete  Cloud Front origin access identity configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html)


### `CreateDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html)

Properties:
- **`DistributionConfig` (object) [required]**
  - Complete distribution configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestSyntax)


### `CreateFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFunction.html)

Properties:
- **`FunctionCode` (string) [required]**
  - Base64 encoded function code
- **`FunctionConfig` (object) [required]**
  - Function configuration
- **`Name` (string) [required]**
  - User assigned name for the resource


### `CreateInvalidation`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`InvalidationBatch` (string, array)**
  - One or more invalidation parameters
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html#API_CreateInvalidation_RequestSyntax)
- **`CallerReference` (string) [required]**
  - Unique value that ensures that the request cannot be replayed


### `CreateKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyGroup.html)

Properties:
- **`KeyGroupConfig` (object) [required]**
  - Key group configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_KeyGroupConfig.html)


### `CreateKeyValueStore`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyValueStore.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`ImportSource` (object)**
  - Describe the S3 source ARN and type
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ImportSource.html)
- **`Comment` (string)**
  - Comment for the key value store


### `CreatePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html)

Properties:
- **`PublicKeyConfig` (object) [required]**
  - Public key configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html#cloudfront-CreatePublicKey-request-PublicKeyConfig)


### `DeleteCachePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeleteCloudFrontOriginAccessIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeleteDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string)**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeleteFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFunction.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeleteKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`IfMatch` (string)**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeleteKeyValueStore`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyValueStore.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeletePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string)**
  - Value of previous `GetDistribution` call's `ETag` property


### `DescribeFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeFunction.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`


### `DescribeKeyValueStore`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeKeyValueStore.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource


### `GetCachePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetCachePolicyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetCloudFrontOriginAccessIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetCloudFrontOriginAccessIdentityConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetDistributionConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFunction.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`


### `GetKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroup.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetKeyGroupConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroupConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetPublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetPublicKeyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `ListCachePolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Type` (string)**
  - Filter results by policy type; can be one of: `managed`, `custom`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListCloudFrontOriginAccessIdentities`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListDistributions`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFunctions`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFunctions.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListKeyGroups`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyGroups.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListKeyValueStores`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyValueStores.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Status` (string)**
  - Status of the key value store; can be one of: `READY`, `PROVISIONING`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPublicKeys`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `TestFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property
- **`EventObject` (string) [required]**
  - Base64 encoded binary `Event` object that will be passed to your function as an argument
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`


### `UpdateCachePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html)

Properties:
- **`CachePolicyConfig` (object) [required]**
  - Complete cache policy configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CachePolicyConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `UpdateCloudFrontOriginAccessIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html)

Properties:
- **`CloudFrontOriginAccessIdentityConfig` (object) [required]**
  - Complete  Cloud Front origin access identity configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `UpdateDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html)

Properties:
- **`DistributionConfig` (object) [required]**
  - Complete distribution configuration object from `GetDistribution` call
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html#API_UpdateDistribution_RequestBody)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `UpdateFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFunction.html)

Properties:
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`FunctionCode` (string) [required]**
  - Base64 encoded function code
- **`FunctionConfig` (object) [required]**
  - Function configuration


### `UpdateKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyGroup.html)

Properties:
- **`KeyGroupConfig` (object) [required]**
  - Key group configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_KeyGroupConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `UpdateKeyValueStore`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyValueStore.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`Comment` (string) [required]**
  - New comment for the key value store
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `UpdatePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html)

Properties:
- **`PublicKeyConfig` (object) [required]**
  - Public key configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html#cloudfront-UpdatePublicKey-request-PublicKeyConfig)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`AssociateAlias`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html)
- [`CopyDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html)
- [`CreateContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateContinuousDeploymentPolicy.html)
- [`CreateDistributionWithTags`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistributionWithTags.html)
- [`CreateFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html)
- [`CreateFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html)
- [`CreateMonitoringSubscription`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html)
- [`CreateOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginAccessControl.html)
- [`CreateOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html)
- [`CreateRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateRealtimeLogConfig.html)
- [`CreateResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateResponseHeadersPolicy.html)
- [`CreateStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html)
- [`CreateStreamingDistributionWithTags`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistributionWithTags.html)
- [`DeleteContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteContinuousDeploymentPolicy.html)
- [`DeleteFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html)
- [`DeleteFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html)
- [`DeleteMonitoringSubscription`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html)
- [`DeleteOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginAccessControl.html)
- [`DeleteOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html)
- [`DeleteRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteRealtimeLogConfig.html)
- [`DeleteResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteResponseHeadersPolicy.html)
- [`DeleteStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html)
- [`GetContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicy.html)
- [`GetContinuousDeploymentPolicyConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicyConfig.html)
- [`GetFieldLevelEncryption`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryption.html)
- [`GetFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html)
- [`GetFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html)
- [`GetFieldLevelEncryptionProfileConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html)
- [`GetInvalidation`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html)
- [`GetMonitoringSubscription`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html)
- [`GetOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControl.html)
- [`GetOriginAccessControlConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControlConfig.html)
- [`GetOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html)
- [`GetOriginRequestPolicyConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html)
- [`GetRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetRealtimeLogConfig.html)
- [`GetResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicy.html)
- [`GetResponseHeadersPolicyConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicyConfig.html)
- [`GetStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html)
- [`GetStreamingDistributionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html)
- [`ListConflictingAliases`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html)
- [`ListContinuousDeploymentPolicies`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListContinuousDeploymentPolicies.html)
- [`ListDistributionsByCachePolicyId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html)
- [`ListDistributionsByKeyGroup`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByKeyGroup.html)
- [`ListDistributionsByOriginRequestPolicyId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html)
- [`ListDistributionsByRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByRealtimeLogConfig.html)
- [`ListDistributionsByResponseHeadersPolicyId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByResponseHeadersPolicyId.html)
- [`ListDistributionsByWebACLId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html)
- [`ListFieldLevelEncryptionConfigs`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html)
- [`ListFieldLevelEncryptionProfiles`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html)
- [`ListInvalidations`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html)
- [`ListOriginAccessControls`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginAccessControls.html)
- [`ListOriginRequestPolicies`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html)
- [`ListRealtimeLogConfigs`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListRealtimeLogConfigs.html)
- [`ListResponseHeadersPolicies`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListResponseHeadersPolicies.html)
- [`ListStreamingDistributions`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html)
- [`ListTagsForResource`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html)
- [`PublishFunction`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_PublishFunction.html)
- [`TagResource`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html)
- [`UntagResource`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UntagResource.html)
- [`UpdateContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateContinuousDeploymentPolicy.html)
- [`UpdateDistributionWithStagingConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistributionWithStagingConfig.html)
- [`UpdateFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html)
- [`UpdateFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html)
- [`UpdateOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginAccessControl.html)
- [`UpdateOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html)
- [`UpdateRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateRealtimeLogConfig.html)
- [`UpdateResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateResponseHeadersPolicy.html)
- [`UpdateStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateStreamingDistribution.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
