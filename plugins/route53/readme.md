# `@aws-lite/route53`

> Official `aws-lite` plugin for Route 53

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/route53
```

Optionally install types:

```sh
npm i -D @aws-lite/route53-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/route53)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/route53)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `ListResourceRecordSets`

[Canonical AWS API doc](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html)

Properties:
- **`HostedZoneId` (string) [required]**
  - ID of the hosted zone containing the resource records set
- **`MaxItems` (number)**
  - Max number of items to be returned in a response. If the response has more items than `maxitems`, `IsTruncated` will be true and the response will be paginated
- **`StartRecordIdentifier` (string)**
  - Pagination cursor when the routing policy is not `simple` and results were truncated for a given DNS
- **`StartRecordName` (string)**
  - Name of the first resource record to be listed in lexicographic ordering. If the name doesn't exist, results will begin from the first record with a name greater than the provided value
- **`StartRecordType` (string)**
  - The type of resource record to begin listing from
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`ActivateKeySigningKey`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ActivateKeySigningKey.html)
- [`AssociateVPCWithHostedZone`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html)
- [`ChangeCidrCollection`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeCidrCollection.html)
- [`ChangeResourceRecordSets`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html)
- [`ChangeTagsForResource`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeTagsForResource.html)
- [`CreateCidrCollection`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateCidrCollection.html)
- [`CreateHealthCheck`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHealthCheck.html)
- [`CreateHostedZone`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html)
- [`CreateKeySigningKey`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateKeySigningKey.html)
- [`CreateQueryLoggingConfig`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html)
- [`CreateReusableDelegationSet`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html)
- [`CreateTrafficPolicy`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html)
- [`CreateTrafficPolicyInstance`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyInstance.html)
- [`CreateTrafficPolicyVersion`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyVersion.html)
- [`CreateVPCAssociationAuthorization`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateVPCAssociationAuthorization.html)
- [`DeactivateKeySigningKey`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeactivateKeySigningKey.html)
- [`DeleteCidrCollection`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteCidrCollection.html)
- [`DeleteHealthCheck`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHealthCheck.html)
- [`DeleteHostedZone`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html)
- [`DeleteKeySigningKey`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteKeySigningKey.html)
- [`DeleteQueryLoggingConfig`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html)
- [`DeleteReusableDelegationSet`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteReusableDelegationSet.html)
- [`DeleteTrafficPolicy`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html)
- [`DeleteTrafficPolicyInstance`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html)
- [`DeleteVPCAssociationAuthorization`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteVPCAssociationAuthorization.html)
- [`DisableHostedZoneDNSSEC`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisableHostedZoneDNSSEC.html)
- [`DisassociateVPCFromHostedZone`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisassociateVPCFromHostedZone.html)
- [`EnableHostedZoneDNSSEC`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_EnableHostedZoneDNSSEC.html)
- [`GetAccountLimit`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html)
- [`GetChange`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html)
- [`GetCheckerIpRanges`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetCheckerIpRanges.html)
- [`GetDNSSEC`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetDNSSEC.html)
- [`GetGeoLocation`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html)
- [`GetHealthCheck`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheck.html)
- [`GetHealthCheckCount`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckCount.html)
- [`GetHealthCheckLastFailureReason`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckLastFailureReason.html)
- [`GetHealthCheckStatus`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckStatus.html)
- [`GetHostedZone`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html)
- [`GetHostedZoneCount`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html)
- [`GetHostedZoneLimit`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html)
- [`GetQueryLoggingConfig`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html)
- [`GetReusableDelegationSet`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html)
- [`GetReusableDelegationSetLimit`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html)
- [`GetTrafficPolicy`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html)
- [`GetTrafficPolicyInstance`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstance.html)
- [`GetTrafficPolicyInstanceCount`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstanceCount.html)
- [`ListCidrBlocks`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrBlocks.html)
- [`ListCidrCollections`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrCollections.html)
- [`ListCidrLocations`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrLocations.html)
- [`ListGeoLocations`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html)
- [`ListHealthChecks`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHealthChecks.html)
- [`ListHostedZones`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html)
- [`ListHostedZonesByName`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByName.html)
- [`ListHostedZonesByVPC`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html)
- [`ListQueryLoggingConfigs`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html)
- [`ListReusableDelegationSets`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListReusableDelegationSets.html)
- [`ListTagsForResource`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResource.html)
- [`ListTagsForResources`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResources.html)
- [`ListTrafficPolicies`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html)
- [`ListTrafficPolicyInstances`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstances.html)
- [`ListTrafficPolicyInstancesByHostedZone`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByHostedZone.html)
- [`ListTrafficPolicyInstancesByPolicy`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByPolicy.html)
- [`ListTrafficPolicyVersions`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyVersions.html)
- [`ListVPCAssociationAuthorizations`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListVPCAssociationAuthorizations.html)
- [`TestDNSAnswer`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_TestDNSAnswer.html)
- [`UpdateHealthCheck`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html)
- [`UpdateHostedZoneComment`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHostedZoneComment.html)
- [`UpdateTrafficPolicyComment`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyComment.html)
- [`UpdateTrafficPolicyInstance`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyInstance.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
