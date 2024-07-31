# `@aws-lite/organizations`

> Official `aws-lite` plugin for Organizations

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/organizations
```

Optionally install types:

```sh
npm i -D @aws-lite/organizations-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/organizations)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/organizations)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `ListAccounts`

[Canonical AWS API doc](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html)

Properties:
- **`MaxResults` (number)**
  - Maximum number of items to be returned
- **`NextToken` (string)**
  - Pagination token
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/aws-lite/aws-lite#authoring-aws-lite-plugins)!

- [`AcceptHandshake`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_AcceptHandshake.html)
- [`AttachPolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_AttachPolicy.html)
- [`CancelHandshake`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CancelHandshake.html)
- [`CloseAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CloseAccount.html)
- [`CreateAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html)
- [`CreateGovCloudAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateGovCloudAccount.html)
- [`CreateOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html)
- [`CreateOrganizationalUnit`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganizationalUnit.html)
- [`CreatePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreatePolicy.html)
- [`DeclineHandshake`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeclineHandshake.html)
- [`DeleteOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganization.html)
- [`DeleteOrganizationalUnit`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganizationalUnit.html)
- [`DeletePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeletePolicy.html)
- [`DeleteResourcePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteResourcePolicy.html)
- [`DeregisterDelegatedAdministrator`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeregisterDelegatedAdministrator.html)
- [`DescribeAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeAccount.html)
- [`DescribeCreateAccountStatus`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html)
- [`DescribeEffectivePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeEffectivePolicy.html)
- [`DescribeHandshake`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeHandshake.html)
- [`DescribeOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganization.html)
- [`DescribeOrganizationalUnit`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganizationalUnit.html)
- [`DescribePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribePolicy.html)
- [`DescribeResourcePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeResourcePolicy.html)
- [`DetachPolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html)
- [`DisableAWSServiceAccess`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html)
- [`DisablePolicyType`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisablePolicyType.html)
- [`EnableAllFeatures`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html)
- [`EnableAWSServiceAccess`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html)
- [`EnablePolicyType`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html)
- [`InviteAccountToOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_InviteAccountToOrganization.html)
- [`LeaveOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_LeaveOrganization.html)
- [`ListAccountsForParent`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsForParent.html)
- [`ListAWSServiceAccessForOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAWSServiceAccessForOrganization.html)
- [`ListChildren`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListChildren.html)
- [`ListCreateAccountStatus`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListCreateAccountStatus.html)
- [`ListDelegatedAdministrators`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedAdministrators.html)
- [`ListDelegatedServicesForAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedServicesForAccount.html)
- [`ListHandshakesForAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForAccount.html)
- [`ListHandshakesForOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForOrganization.html)
- [`ListOrganizationalUnitsForParent`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html)
- [`ListParents`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListParents.html)
- [`ListPolicies`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPolicies.html)
- [`ListPoliciesForTarget`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPoliciesForTarget.html)
- [`ListRoots`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html)
- [`ListTagsForResource`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTagsForResource.html)
- [`ListTargetsForPolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTargetsForPolicy.html)
- [`MoveAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_MoveAccount.html)
- [`PutResourcePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_PutResourcePolicy.html)
- [`RegisterDelegatedAdministrator`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html)
- [`RemoveAccountFromOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html)
- [`TagResource`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_TagResource.html)
- [`UntagResource`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_UntagResource.html)
- [`UpdateOrganizationalUnit`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdateOrganizationalUnit.html)
- [`UpdatePolicy`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdatePolicy.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
