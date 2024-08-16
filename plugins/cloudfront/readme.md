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
### `AssociateAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html)

Properties:
- **`TargetDistributionId` (string) [required]**
  - Distribution ID to alias
- **`Alias` (string) [required]**
  - Alternative domain name; must contain one or more dots (.) and can only include lower case characters and dashes, a leading star (*) can be used to indicate all subdomains, for example `*.example.com`


### `CopyDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html)

Properties:
- **`PrimaryDistributionId` (string) [required]**
  - ID of the distribution to be copied
- **`CallerReference` (string) [required]**
  - Unique value that ensures that the request cannot be replayed
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource
- **`Staging` (boolean)**
  - Set to true to specify that the primary distribution will be copied to a staging distribution
- **`Enabled` (boolean)**
  - Set to false to disable the copied distribution upon creation


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


### `CreateContinuousDeploymentPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateContinuousDeploymentPolicy.html)

Properties:
- **`ContinuousDeploymentPolicyConfig` (object) [required]**
  - Complete continuous deployment policy configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ContinuousDeploymentPolicyConfig.html)


### `CreateDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html)

Properties:
- **`DistributionConfig` (object) [required]**
  - Complete distribution configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestSyntax)


### `CreateFieldLevelEncryptionConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html)

Properties:
- **`FieldLevelEncryptionConfig` (object) [required]**
  - Complete field level encryption config object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_FieldLevelEncryptionConfig.html)


### `CreateFieldLevelEncryptionProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html)

Properties:
- **`FieldLevelEncryptionProfileConfig` (object) [required]**
  - Complete field level encryption profile config
  - [More details (AWS)](API_FieldLevelEncryptionProfileConfig.html)


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


### `CreateMonitoringSubscription`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html)

Properties:
- **`DistributionId` (string) [required]**
  - Distribution ID
- **`MonitoringSubscription` (object) [required]**
  - Configuration for additional metrics
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_RealtimeMetricsSubscriptionConfig.html)


### `CreateOriginAccessControl`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginAccessControl.html)

Properties:
- **`OriginAccessControlConfig` (object) [required]**
  - Complete origin access control config
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_OriginAccessControlConfig.html)


### `CreateOriginRequestPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html)

Properties:
- **`OriginRequestPolicyConfig` (object) [required]**
  - Complete origin request policy config
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_OriginRequestPolicyConfig.html)


### `CreatePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html)

Properties:
- **`PublicKeyConfig` (object) [required]**
  - Public key configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html#cloudfront-CreatePublicKey-request-PublicKeyConfig)


### `CreateResponseHeadersPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateResponseHeadersPolicy.html)

Properties:
- **`ResponseHeadersPolicyConfig` (object) [required]**
  - Complete response headers policy config
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ResponseHeadersPolicyConfig.html)


### `DeleteCachePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteCloudFrontOriginAccessIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteContinuousDeploymentPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteContinuousDeploymentPolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteFieldLevelEncryptionConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteFieldLevelEncryptionProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFunction.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteKeyValueStore`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyValueStore.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteMonitoringSubscription`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html)

Properties:
- **`DistributionId` (string) [required]**
  - Distribution ID


### `DeleteOriginAccessControl`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginAccessControl.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteOriginRequestPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeletePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `DeleteResponseHeadersPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteResponseHeadersPolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


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


### `GetContinuousDeploymentPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetContinuousDeploymentPolicyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicyConfig.html)

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


### `GetFieldLevelEncryption`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetFieldLevelEncryptionConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetFieldLevelEncryptionProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetFieldLevelEncryptionProfileConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html)

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


### `GetInvalidation`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html)

Properties:
- **`DistributionId` (string) [required]**
  - Distribution ID
- **`Id` (string) [required]**
  - The resource ID


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


### `GetMonitoringSubscription`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html)

Properties:
- **`DistributionId` (string) [required]**
  - Distribution ID


### `GetOriginAccessControl`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControl.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetOriginAccessControlConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControlConfig.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetOriginRequestPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetOriginRequestPolicyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html)

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


### `GetResponseHeadersPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicy.html)

Properties:
- **`Id` (string) [required]**
  - The resource ID


### `GetResponseHeadersPolicyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicyConfig.html)

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


### `ListConflictingAliases`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html)

Properties:
- **`DistributionId` (string) [required]**
  - Distribution ID
- **`Alias` (string) [required]**
  - Alternative domain name; must contain one or more dots (.) and can only include lower case characters and dashes, a leading star (*) can be used to indicate all subdomains, for example `*.example.com`
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListContinuousDeploymentPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListContinuousDeploymentPolicies.html)

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


### `ListDistributionsByCachePolicyId`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html)

Properties:
- **`CachePolicyId` (string) [required]**
  - Cache policy ID
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListDistributionsByKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByKeyGroup.html)

Properties:
- **`KeyGroupId` (string) [required]**
  - Key group ID
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListDistributionsByOriginRequestPolicyId`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html)

Properties:
- **`OriginRequestPolicyId` (string) [required]**
  - Origin request policy ID
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListDistributionsByResponseHeadersPolicyId`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByResponseHeadersPolicyId.html)

Properties:
- **`ResponseHeadersPolicyId` (string) [required]**
  - Response headers policy ID
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFieldLevelEncryptionConfigs`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFieldLevelEncryptionProfiles`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html)

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


### `ListInvalidations`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html)

Properties:
- **`DistributionId` (string) [required]**
  - Distribution ID
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
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


### `ListOriginAccessControls`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginAccessControls.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListOriginRequestPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Type` (string)**
  - Filter results by policy type; can be one of: `managed`, `custom`
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


### `ListResponseHeadersPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListResponseHeadersPolicies.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Type` (string)**
  - Filter results by policy type; can be one of: `managed`, `custom`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListTagsForResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html)

Properties:
- **`Resource` (string) [required]**
  - ARN of a cloudfront resource


### `TagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html)

Properties:
- **`Resource` (string) [required]**
  - ARN of a cloudfront resource
- **`Tags` (array) [required]**
  - Array of tags


### `TestFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource
- **`EventObject` (string) [required]**
  - Base64 encoded binary data event object that will be passed to your function as an argument
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html#cloudfront-TestFunction-request-EventObject)
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`


### `UntagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UntagResource.html)

Properties:
- **`Resource` (string) [required]**
  - ARN of a cloudfront resource
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UpdateCachePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html)

Properties:
- **`CachePolicyConfig` (object) [required]**
  - Complete cache policy configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CachePolicyConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateCloudFrontOriginAccessIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html)

Properties:
- **`CloudFrontOriginAccessIdentityConfig` (object) [required]**
  - Complete  Cloud Front origin access identity configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateContinuousDeploymentPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateContinuousDeploymentPolicy.html)

Properties:
- **`ContinuousDeploymentPolicyConfig` (object) [required]**
  - Complete continuous deployment policy configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ContinuousDeploymentPolicyConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html)

Properties:
- **`DistributionConfig` (object) [required]**
  - Complete distribution configuration object from `GetDistribution` call
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html#API_UpdateDistribution_RequestBody)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateFieldLevelEncryptionConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html)

Properties:
- **`FieldLevelEncryptionConfig` (object) [required]**
  - Complete field level encryption config object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_FieldLevelEncryptionConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateFieldLevelEncryptionProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html)

Properties:
- **`FieldLevelEncryptionProfileConfig` (object) [required]**
  - Complete field level encryption profile config
  - [More details (AWS)](API_FieldLevelEncryptionProfileConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFunction.html)

Properties:
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource
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
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateKeyValueStore`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyValueStore.html)

Properties:
- **`Name` (string) [required]**
  - User assigned name for the resource
- **`Comment` (string) [required]**
  - New comment for the key value store
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateOriginAccessControl`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginAccessControl.html)

Properties:
- **`OriginAccessControlConfig` (object) [required]**
  - Complete origin access control config
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_OriginAccessControlConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateOriginRequestPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html)

Properties:
- **`OriginRequestPolicyConfig` (object) [required]**
  - Complete origin request policy config
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_OriginRequestPolicyConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdatePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html)

Properties:
- **`PublicKeyConfig` (object) [required]**
  - Public key configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html#cloudfront-UpdatePublicKey-request-PublicKeyConfig)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### `UpdateResponseHeadersPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateResponseHeadersPolicy.html)

Properties:
- **`ResponseHeadersPolicyConfig` (object) [required]**
  - Complete response headers policy config
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ResponseHeadersPolicyConfig.html)
- **`Id` (string) [required]**
  - The resource ID
- **`IfMatch` (string) [required]**
  - Value of `ETag` property returned from a recent call to any of: `Create`, `Get` methods associated with the resource


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`CreateDistributionWithTags`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistributionWithTags.html)
- [`CreateRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateRealtimeLogConfig.html)
- [`CreateStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html)
- [`CreateStreamingDistributionWithTags`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistributionWithTags.html)
- [`DeleteRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteRealtimeLogConfig.html)
- [`DeleteStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html)
- [`GetRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetRealtimeLogConfig.html)
- [`GetStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html)
- [`GetStreamingDistributionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html)
- [`ListDistributionsByRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByRealtimeLogConfig.html)
- [`ListDistributionsByWebACLId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html)
- [`ListRealtimeLogConfigs`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListRealtimeLogConfigs.html)
- [`ListStreamingDistributions`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html)
- [`PublishFunction`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_PublishFunction.html)
- [`UpdateDistributionWithStagingConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistributionWithStagingConfig.html)
- [`UpdateRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateRealtimeLogConfig.html)
- [`UpdateStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateStreamingDistribution.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
