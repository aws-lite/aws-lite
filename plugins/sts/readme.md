# `@aws-lite/sts`

> Official `aws-lite` plugin for STS

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/sts
```

Optionally install types:

```sh
npm i -D @aws-lite/sts-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/sts)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/sts)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `AssumeRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)

Properties:
- **`RoleArn` (string) [required]**
  - ARN of the role to assume
- **`RoleSessionName` (string) [required]**
  - Identifier for the assumed role session; must conform to `[w+=,.@-]*`
- **`DurationSeconds` (number)**
  - Duration of the role session; from `900` to `43200`
- **`ExternalId` (string)**
  - Unique identifier that might be required when assuming a role in another account
- **`Policy` (string)**
  - JSON IAM policy document to use as an inline session policy
- **`PolicyArns` (array)**
  - ARNs of the IAM managed policies to use
- **`ProvidedContexts` (array)**
  - List of previously acquired trusted context assertions in the format of a JSON array
  - [More details (AWS)](https://docs.aws.amazon.com/STS/latest/APIReference/API_ProvidedContext.html)
- **`SerialNumber` (string)**
  - MFA device ID associated with the user making the call
- **`SourceIdentity` (string)**
  - Source identity specified by the principal making the call
- **`Tags` (array)**
  - Session tags; each tag is an object containing a `Key` and `Value` property
- **`TokenCode` (string)**
  - MFA value (if required by the role's trust policy)
- **`TransitiveTagKeys` (array)**
  - Session tags, set as transitive to subsequent sessions in the role chain
  - [More details (AWS)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining)


### `AssumeRoleWithSAML`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html)

Properties:
- **`RoleArn` (string) [required]**
  - ARN of the role to assume
- **`PrincipalArn` (string) [required]**
  - ARN of the SAML provider that describes the IdP
- **`SAMLAssertion` (string) [required]**
  - base64-encoded SAML authentication response provided by the IdP
- **`DurationSeconds` (number)**
  - Duration of the role session; from `900` to `43200`
- **`Policy` (string)**
  - JSON IAM policy document to use as an inline session policy
- **`PolicyArns` (array)**
  - ARNs of the IAM managed policies to use


### `AssumeRoleWithWebIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html)

Properties:
- **`RoleArn` (string) [required]**
  - ARN of the role to assume
- **`RoleSessionName` (string) [required]**
  - Identifier for the assumed role session; must conform to `[w+=,.@-]*`
- **`WebIdentityToken` (string) [required]**
  - OAuth 2.0 access token or OpenID Connect ID token provided by the IdP
- **`DurationSeconds` (number)**
  - Duration of the role session; from `900` to `43200`
- **`ProviderId` (string)**
  - Fully qualified host of the domain name of the OAuth 2.0 IdP; do not specify this value for an OpenID Connect identity provider
- **`Policy` (string)**
  - JSON IAM policy document to use as an inline session policy
- **`PolicyArns` (array)**
  - ARNs of the IAM managed policies to use


### `DecodeAuthorizationMessage`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html)

Properties:
- **`EncodedMessage` (string) [required]**
  - Encoded message returned with the response


### `GetAccessKeyInfo`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetAccessKeyInfo.html)

Properties:
- **`AccessKeyId` (string) [required]**
  - AWS access key to query


### `GetCallerIdentity`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity.html)

Properties:



### `GetFederationToken`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html)

Properties:
- **`Name` (string) [required]**
  - Name of the federated user
- **`DurationSeconds` (number)**
  - Duration of the role session; from `900` to `43200`
- **`Policy` (string)**
  - JSON IAM policy document to use as an inline session policy
- **`PolicyArns` (array)**
  - ARNs of the IAM managed policies to use
- **`Tags` (array)**
  - Session tags; each tag is an object containing a `Key` and `Value` property


### `GetSessionToken`

[Canonical AWS API doc](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html)

Properties:
- **`DurationSeconds` (number)**
  - Duration of the role session; from `900` to `43200`
- **`SerialNumber` (string)**
  - MFA device ID associated with the user making the call
- **`TokenCode` (string)**
  - MFA value (if required by the role's trust policy)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
