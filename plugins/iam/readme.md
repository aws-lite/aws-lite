# `@aws-lite/iam`

> Official `aws-lite` plugin for IAM

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/iam
```

Optionally install types:

```sh
npm i -D @aws-lite/iam-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/iam)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/iam)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `AddClientIDToOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html)

Properties:
- **`ClientID` (string) [required]**
  - The client ID (aka the audience) to add to the IAM OpenId Connect provider resource
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource


### `AddRoleToInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`RoleName` (string) [required]**
  - Name of the role


### `AddUserToGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`UserName` (string) [required]**
  - User name


### `AttachGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `AttachRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`RoleName` (string) [required]**
  - Name of the role


### `AttachUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`UserName` (string) [required]**
  - User name


### `ChangePassword`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html)

Properties:
- **`NewPassword` (string) [required]**
  - New password; must conform to the accounts password policy
- **`OldPassword` (string) [required]**
  - Current password


### `CreateAccessKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `CreateAccountAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html)

Properties:
- **`AccountAlias` (string) [required]**
  - Account alias to create


### `CreateGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)


### `CreateInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `CreateLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html)

Properties:
- **`Password` (string) [required]**
  - New password for the user
- **`UserName` (string) [required]**
  - User name
- **`PasswordResetRequired` (boolean)**
  - Set to true to specify the user must make a new password on next sign-in


### `CreateOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html)

Properties:
- **`Url` (string) [required]**
  - URL of the identity provider; must begin with `https://`
- **`ClientIDList` (array)**
  - Array of at most 255 client IDs
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html#API_CreateOpenIDConnectProvider_RequestParameters)
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)
- **`ThumbprintList` (array)**
  - Array of server certificate thumbprints for the OIDC identity providers server certificates
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html#API_CreateOpenIDConnectProvider_RequestParameters)


### `CreatePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`Description` (string)**
  - Description of the resource
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `CreatePolicyVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`SetAsDefault` (boolean)**
  - Set to true to make this the default version used by all IAM resources


### `CreateRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html)

Properties:
- **`AssumeRolePolicyDocument` (string, object) [required]**
  - Trust relationship policy document granting an entity permission to assume the role; can be an object, or JSON or YAML string
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the resource
- **`MaxSessionDuration` (number)**
  - Maximum session duration (in seconds) to set for the specified role
- **`Path` (string)**
  - Path for the role identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`PermissionsBoundary` (string)**
  - ARN of a managed policy to be used to set the role's permissions boundary
- **`Tags` (array)**
  - List of tags to attach to the role
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `CreateServiceLinkedRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html)

Properties:
- **`AWSServiceName` (string) [required]**
  - The service principal to which this role is attached; use `CustomSuffix` to prevent duplication errors during multiple requests for the same service
- **`CustomSuffix` (string)**
  - Identifier for the role; not supported by all services
- **`Description` (string)**
  - Description of the resource


### `CreateServiceSpecificCredential`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html)

Properties:
- **`ServiceName` (string) [required]**
  - Name of the AWS service
- **`UserName` (string) [required]**
  - User name


### `CreateUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`PermissionsBoundary` (string)**
  - ARN of a managed policy to be used to set the resource's permissions boundary
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `CreateVirtualMFADevice`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html)

Properties:
- **`VirtualMFADeviceName` (string) [required]**
  - Name of the virtual MFA device
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `DeleteAccessKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html)

Properties:
- **`AccessKeyId` (string) [required]**
  - ID of the access key
- **`UserName` (string)**
  - User name


### `DeleteAccountAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html)

Properties:
- **`AccountAlias` (string) [required]**
  - The account alias


### `DeleteAccountPasswordPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html)

Properties:



### `DeleteGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case


### `DeleteGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyName` (string) [required]**
  - Name of the policy


### `DeleteInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile


### `DeleteLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `DeleteOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html)

Properties:
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource


### `DeletePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `DeletePolicyVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`VersionId` (string) [required]**
  - ID of the policy version; typically `v<n>`


### `DeleteRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `DeleteRolePermissionsBoundary`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `DeleteRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`PolicyName` (string) [required]**
  - Name of the policy


### `DeleteServerCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html)

Properties:
- **`ServerCertificateName` (string) [required]**
  - Name of the server certificate; do not include path, cannot contain spaces


### `DeleteServiceLinkedRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `DeleteServiceSpecificCredential`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html)

Properties:
- **`ServiceSpecificCredentialId` (string) [required]**
  - ID of the service specific credential
- **`UserName` (string) [required]**
  - User name


### `DeleteSigningCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html)

Properties:
- **`CertificateId` (string) [required]**
  - ID of the signing certificate
- **`UserName` (string)**
  - User name


### `DeleteSSHPublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html)

Properties:
- **`SSHPublicKeyId` (string) [required]**
  - ID of the SSH public key
- **`UserName` (string) [required]**
  - User name


### `DeleteUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `DeleteUserPermissionsBoundary`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `DeleteUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html)

Properties:
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`UserName` (string) [required]**
  - User name


### `DeleteVirtualMFADevice`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html)

Properties:
- **`SerialNumber` (string) [required]**
  - Serial number or ARN of the virtual MFA device


### `DetachGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `DetachRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`RoleName` (string) [required]**
  - Name of the role


### `DetachUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`UserName` (string) [required]**
  - User name


### `GenerateCredentialReport`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html)

Properties:



### `GenerateOrganizationsAccessReport`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html)

Properties:
- **`EntityPath` (string) [required]**
  - Path of the AWS Organizations entity
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html#API_GenerateOrganizationsAccessReport_RequestParameters)
- **`OrganizationsPolicyId` (string)**
  - ID of the AWS Organizations service control policy


### `GenerateServiceLastAccessedDetails`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html)

Properties:
- **`Arn` (string) [required]**
  - ARN of the IAM resource used to generate the report
- **`Granularity` (string)**
  - Specify the type of access information; can be one of: `SERVICE_LEVEL` (default), `ACTION_LEVEL`
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html#API_GenerateServiceLastAccessedDetails_RequestParameters)


### `GetAccessKeyLastUsed`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html)

Properties:
- **`AccessKeyId` (string) [required]**
  - ID of the access key


### `GetAccountAuthorizationDetails`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html)

Properties:
- **`Filter` (array)**
  - Filter results by entity type
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html#API_GetAccountAuthorizationDetails_RequestParameters)
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (string)**
  - Set to `iterator` to enable automatic result pagination via async iterator; use this instead of making your own individual pagination requests


### `GetAccountPasswordPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html)

Properties:



### `GetAccountSummary`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html)

Properties:



### `GetContextKeysForCustomPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html)

Properties:
- **`PolicyInputList` (array) [required]**
  - Array of policies to get context keys, each item must be a complete policy object


### `GetContextKeysForPrincipalPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html)

Properties:
- **`PolicySourceArn` (string) [required]**
  - ARN of the user, group or role for which the resources context keys will be listed
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html#API_GetContextKeysForPrincipalPolicy_RequestParameters)
- **`PolicyInputList` (array)**
  - Array of policies to get context keys, each item must be a complete policy object


### `GetCredentialReport`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html)

Properties:



### `GetGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `GetGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyName` (string) [required]**
  - Name of the policy


### `GetInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile


### `GetLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `GetOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html)

Properties:
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource


### `GetOrganizationsAccessReport`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html)

Properties:
- **`JobId` (string) [required]**
  - ID of the report provided in the `GenerateOrganizationsAccessReport` response
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`SortKey` (string)**
  - Sort results by key
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html#API_GetOrganizationsAccessReport_RequestParameters)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `GetPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `GetPolicyVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`VersionId` (string) [required]**
  - ID of the policy version; typically `v<n>`


### `GetRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `GetRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html)

Properties:
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`RoleName` (string) [required]**
  - Name of the role


### `GetServerCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html)

Properties:
- **`ServerCertificateName` (string) [required]**
  - Name of the server certificate; do not include path, cannot contain spaces


### `GetServiceLastAccessedDetails`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html)

Properties:
- **`JobId` (string) [required]**
  - ID of the report provided in the `GenerateServiceLastAccessedDetails` response
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `GetServiceLastAccessedDetailsWithEntities`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html)

Properties:
- **`JobId` (string) [required]**
  - ID of the report provided in the `GenerateServiceLastAccessedDetails` response
- **`ServiceNamespace` (string) [required]**
  - The service namespace for an AWS service
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html#API_GetServiceLastAccessedDetailsWithEntities_RequestParameters)
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `GetSSHPublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html)

Properties:
- **`Encoding` (string) [required]**
  - Specify the encoding format used in the response; can be one of: `SSH`, `PEM`
- **`SSHPublicKeyId` (string) [required]**
  - ID of the SSH public key
- **`UserName` (string) [required]**
  - User name


### `GetUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `GetUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html)

Properties:
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`UserName` (string) [required]**
  - User name


### `ListAccessKeys`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`UserName` (string)**
  - User name
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAccountAliases`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAttachedGroupPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Marker` (string)**
  - Pagination cursor
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAttachedRolePolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAttachedUserPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListEntitiesForPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`EntityFilter` (string)**
  - Filter results by entity type
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html#API_ListEntitiesForPolicy_RequestParameters)
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`PolicyUsageFilter` (string)**
  - Filter results by policy usage
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html#API_ListEntitiesForPolicy_RequestParameters)
- **`paginate` (string)**
  - Set to `iterator` to enable automatic result pagination via async iterator; use this instead of making your own individual pagination requests


### `ListGroupPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListGroups`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListGroupsForUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListInstanceProfiles`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListInstanceProfilesForRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListInstanceProfileTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListOpenIDConnectProviders`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html)

Properties:



### `ListOpenIDConnectProviderTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviderTags.html)

Properties:
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`OnlyAttached` (boolean)**
  - Set to true to only see attached policies
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`PolicyUsageFilter` (string)**
  - Filter results by how they are used; can be one of: `PermissionsPolicy`, `PermissionsBoundary`
- **`Scope` (string)**
  - Filter results by how they are managed; can be one of: `All`, `AWS`, `Local` (customer managed)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPoliciesGrantingServiceAccess`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html)

Properties:
- **`Arn` (string) [required]**
  - ARN of the IAM identity whose policies you want to list
- **`ServiceNamespaces` (array) [required]**
  - Array of namespaces for the AWS services to be listed
- **`Marker` (string)**
  - Pagination cursor
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPolicyTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPolicyVersions`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListRolePolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListRoles`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListRoleTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListServerCertificates`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListServerCertificateTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificateTags.html)

Properties:
- **`ServerCertificateName` (string) [required]**
  - Name of the server certificate; do not include path, cannot contain spaces
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListServiceSpecificCredentials`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html)

Properties:
- **`ServiceName` (string)**
  - Filter results to a specific service
- **`UserName` (string)**
  - User name


### `ListSigningCertificates`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`UserName` (string)**
  - User name


### `ListSSHPublicKeys`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`UserName` (string)**
  - User name


### `ListUserPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListUsers`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListUserTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListVirtualMFADevices`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html)

Properties:
- **`AssignmentStatus` (string)**
  - Filter results by assignment status; can be one of: `Assigned`, `Unassigned`, `Any`
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `PutGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy


### `PutRolePermissionsBoundary`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html)

Properties:
- **`PermissionsBoundary` (string) [required]**
  - ARN of a managed policy to be used to set the resource's permissions boundary
- **`RoleName` (string) [required]**
  - Name of the role


### `PutRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`RoleName` (string) [required]**
  - Name of the role


### `PutUserPermissionsBoundary`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html)

Properties:
- **`PermissionsBoundary` (string) [required]**
  - ARN of a managed policy to be used to set the resource's permissions boundary
- **`UserName` (string) [required]**
  - User name


### `PutUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`UserName` (string) [required]**
  - User name


### `RemoveClientIDFromOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html)

Properties:
- **`ClientID` (string) [required]**
  - The client ID
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource


### `RemoveRoleFromInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`RoleName` (string) [required]**
  - Name of the role


### `RemoveUserFromGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`UserName` (string) [required]**
  - User name


### `ResetServiceSpecificCredential`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html)

Properties:
- **`ServiceSpecificCredentialId` (string) [required]**
  - ID of the service specific credential
- **`UserName` (string)**
  - User name


### `SetDefaultPolicyVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`VersionId` (string) [required]**
  - ID of the policy version; typically `v<n>`


### `SetSecurityTokenServicePreferences`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html)

Properties:
- **`GlobalEndpointTokenVersion` (string) [required]**
  - Version of the global endpoint token; can be one of: `v1Token`, `v2Token`
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html#API_SetSecurityTokenServicePreferences_RequestParameters)


### `SimulateCustomPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html)

Properties:
- **`ActionNames` (array) [required]**
  - Array of between 3 to 128 API operation names
- **`PolicyInputList` (array) [required]**
  - Array of policy document objects
- **`CallerArn` (string)**
  - ARN of the IAM user to use as the simulated caller of the API operations
- **`ContextEntries` (array)**
  - Array of context keys and values
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PermissionsBoundaryPolicyInputList` (array)**
  - IAM permissions boundary policy to simulate
- **`ResourceArns` (array)**
  - Array of AWS resource ARNs; default `*`
- **`ResourceHandlingOption` (string)**
  - Specify the type of simulation to run
- **`ResourceOwner` (string)**
  - ARN representing the AWS account ID that owns any simulated resources
- **`ResourcePolicy` (string, object)**
  - A resource based policy
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `SimulatePrincipalPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html)

Properties:
- **`ActionNames` (array) [required]**
  - Array of between 3 to 128 API operation names
- **`PolicySourceArn` (string) [required]**
  - ARN of the user, group or role whose policies will be included in the simulation
- **`CallerArn` (string)**
  - ARN of the IAM user to use as the simulated caller of the API operations
- **`ContextEntries` (array)**
  - Array of context keys and values
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PermissionsBoundaryPolicyInputList` (array)**
  - IAM permissions boundary policy to simulate
- **`PolicyInputList` (array)**
  - Array of policy document objects
- **`ResourceArns` (array)**
  - Array of AWS resource ARNs; default `*`
- **`ResourceHandlingOption` (string)**
  - Specify the type of simulation to run
- **`ResourceOwner` (string)**
  - ARN representing the AWS account ID that owns any simulated resources
- **`ResourcePolicy` (string, object)**
  - A resource based policy
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `TagInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagOpenIDConnectProvider.html)

Properties:
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagServerCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagServerCertificate.html)

Properties:
- **`ServerCertificateName` (string) [required]**
  - Name of the server certificate; do not include path, cannot contain spaces
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `UntagInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagOpenIDConnectProvider.html)

Properties:
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagServerCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagServerCertificate.html)

Properties:
- **`ServerCertificateName` (string) [required]**
  - Name of the server certificate; do not include path, cannot contain spaces
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UpdateAccessKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html)

Properties:
- **`AccessKeyId` (string) [required]**
  - ID of the access key
- **`Status` (string) [required]**
  - New status for the access key; can be one of: `Active`, `Inactive`
- **`UserName` (string)**
  - User name


### `UpdateAccountPasswordPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html)

Properties:
- **`AllowUsersToChangePassword` (boolean)**
  - Set to true to allow users to change their own passwords
- **`HardExpiry` (boolean)**
  - Set to true to prevent users their password after it expires
- **`MaxPasswordAge` (number)**
  - Number of days between 1 and 1095 before passwords expire
- **`MinimumPasswordLength` (number)**
  - Minimum number of characters between 6 and 128 allowed in a password
- **`PasswordReusePrevention` (number)**
  - Specify how many new passwords from 1 to 24 before a password may be reused
- **`RequireLowercaseCharacters` (boolean)**
  - Set to true to require at least one lowercase character
- **`RequireNumbers` (boolean)**
  - Set to true to require at least one numeric character
- **`RequireSymbols` (boolean)**
  - Set to true to require at least one non-alphanumeric character
- **`RequireUppercaseCharacters` (boolean)**
  - Set to true to require at least one uppercase character


### `UpdateAssumeRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`RoleName` (string) [required]**
  - Name of the role


### `UpdateGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`NewGroupName` (string)**
  - New name for the group
- **`NewPath` (string)**
  - New path for the service


### `UpdateLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Password` (string)**
  - New password for the user
- **`PasswordResetRequired` (boolean)**
  - Set to true to specify the user must make a new password on next sign-in


### `UpdateOpenIDConnectProviderThumbprint`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html)

Properties:
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource
- **`ThumbprintList` (array) [required]**
  - List of certificate thumbprints
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html#API_UpdateOpenIDConnectProviderThumbprint_RequestParameters)


### `UpdateRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the resource
- **`MaxSessionDuration` (number)**
  - Maximum session duration (in seconds) to set for the specified role


### `UpdateRoleDescription`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the resource


### `UpdateServerCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html)

Properties:
- **`ServerCertificateName` (string) [required]**
  - Name of the server certificate; do not include path, cannot contain spaces
- **`NewPath` (string)**
  - New path for the service
- **`NewServerCertificateName` (string)**
  - New name for the server certificate


### `UpdateServiceSpecificCredential`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html)

Properties:
- **`ServiceSpecificCredentialId` (string) [required]**
  - ID of the service specific credential
- **`Status` (string) [required]**
  - Status to be assigned to the credential; can be one of: `Active`, `Inactive`
- **`UserName` (string)**
  - User name


### `UpdateSigningCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html)

Properties:
- **`CertificateId` (string) [required]**
  - ID of the signing certificate
- **`Status` (string) [required]**
  - Status to be assigned to the signing certificate; can be one of: `Active`, `Inactive`
- **`UserName` (string)**
  - User name


### `UpdateSSHPublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html)

Properties:
- **`SSHPublicKeyId` (string) [required]**
  - ID of the SSH public key
- **`Status` (string) [required]**
  - New status for the SSH key; can be one of : `Active`, `Inactive`
- **`UserName` (string) [required]**
  - User name


### `UpdateUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`NewPath` (string)**
  - New path for the service
- **`NewUserName` (string)**
  - New user name


### `UploadServerCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html)

Properties:
- **`CertificateBody` (string) [required]**
  - PEM encoded public key
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html#API_UploadServerCertificate_RequestParameters)
- **`PrivateKey` (string) [required]**
  - PEM encoded private key
- **`ServerCertificateName` (string) [required]**
  - Name of the server certificate; do not include path, cannot contain spaces
- **`CertificateChain` (string)**
  - Contents of the certificate chain
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `UploadSigningCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html)

Properties:
- **`CertificateBody` (string) [required]**
  - Contents of the signing certificate
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html#API_UploadSigningCertificate_RequestParameters)
- **`UserName` (string)**
  - User name


### `UploadSSHPublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html)

Properties:
- **`SSHPublicKeyBody` (string) [required]**
  - SSH public key encoded in SSH-RSA or PEM format; minimum length is 2048 bits
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html#API_UploadSSHPublicKey_RequestParameters)
- **`UserName` (string) [required]**
  - User name


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`CreateSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html)
- [`DeactivateMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html)
- [`DeleteSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html)
- [`EnableMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html)
- [`GetMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetMFADevice.html)
- [`GetSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html)
- [`GetServiceLinkedRoleDeletionStatus`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html)
- [`ListMFADevices`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html)
- [`ListMFADeviceTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADeviceTags.html)
- [`ListSAMLProviders`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html)
- [`ListSAMLProviderTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviderTags.html)
- [`ResyncMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html)
- [`TagMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagMFADevice.html)
- [`TagSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagSAMLProvider.html)
- [`UntagMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagMFADevice.html)
- [`UntagSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagSAMLProvider.html)
- [`UpdateSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
