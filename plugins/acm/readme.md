# `@aws-lite/acm`

> Official `aws-lite` plugin for ACM

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/acm
```

Optionally install types:

```sh
npm i -D @aws-lite/acm-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/acm)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/acm)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `DeleteCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html)

Properties:
- **`CertificateArn` (string) [required]**
  - ARN of the ACM certificate


### `DescribeCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html)

Properties:
- **`CertificateArn` (string) [required]**
  - ARN of the ACM certificate


### `ListCertificates`

[Canonical AWS API doc](https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html)

Properties:
- **`CertificateStatuses` (array)**
  - Array of status values (strings) to define a filter for certificates; array can contain: `PENDING_VALIDATION`, `ISSUED`, `INACTIVE`, `EXPIRED`, `VALIDATION_TIMED_OUT`, `REVOKED`, `FAILED`
- **`Includes` (object)**
  - Object defining a filter for the certificate list
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/APIReference/API_ListCertificates.html#ACM-ListCertificates-request-Includes)
- **`MaxItems` (number)**
  - Maximum number of values to be returned
- **`NextToken` (string)**
  - Pagination token
- **`SortBy` (string)**
  - Specify the create date to sort results; must also specify `SortOrder`
- **`SortOrder` (string)**
  - Specify the order results will be sorted; value can be one of: `ASCENDING`, `DESCENDING`, must also specify `SortBy`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `RequestCertificate`

[Canonical AWS API doc](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html)

Properties:
- **`DomainName` (string) [required]**
  - Domain name to be secured with an ACM certificate; use `*` as a wildcard; example: `example.*.com`
- **`CertificateAuthorityArn` (string)**
  - ARN of a private certificate authority that will issue the certificate; ACM will attempt to issue a public certificate if this is not defined
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html#ACM-RequestCertificate-request-CertificateAuthorityArn)
- **`DomainValidationOptions` (array)**
  - Array containing 1 to 100 `DomainValidationOption` objects that tell ACM where to send emails to validate domain ownership
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html#ACM-RequestCertificate-request-DomainValidationOptions)
- **`IdempotencyToken` (string)**
  - Identifier used to distinguish between calls to `RequestCertificate`
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html#ACM-RequestCertificate-request-IdempotencyToken)
- **`KeyAlgorithm` (string)**
  - Specify the encryption algorithm used to generate public/private keys (default: RSA); can be one of: `RSA_1024`, `RSA_2048`, `RSA_3072`, `RSA_4096`, `EC_prime256v1`, `EC_secp384r1`, `EC_secp521r1`
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html#ACM-RequestCertificate-request-KeyAlgorithm)
- **`Options` (object)**
  - `CertificateOptions` object to specify if the certificate will be added to a transparency log
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html#ACM-RequestCertificate-request-Options)
- **`SubjectAlternativeNames` (array)**
  - Array containing 1 to 50 `FQDN`s to be included in the Subject Alternative Name extension of the ACM certificate
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html#ACM-RequestCertificate-request-SubjectAlternativeNames)
- **`Tags` (array)**
  - Array containing 1 to 50 `Tag` objects to be associated with the certificate
  - [More details (AWS)](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html#ACM-RequestCertificate-request-Tags)
- **`ValidationMethod` (string)**
  - Method to use when requesting a public certificate to validate ownership of the domain being secured; can be one of: `EMAIL`, `DNS`


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`AddTagsToCertificate`](https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html)
- [`ExportCertificate`](https://docs.aws.amazon.com/acm/latest/APIReference/API_ExportCertificate.html)
- [`GetAccountConfiguration`](https://docs.aws.amazon.com/acm/latest/APIReference/API_GetAccountConfiguration.html)
- [`GetCertificate`](https://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html)
- [`ImportCertificate`](https://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html)
- [`ListTagsForCertificate`](https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html)
- [`PutAccountConfiguration`](https://docs.aws.amazon.com/acm/latest/APIReference/API_PutAccountConfiguration.html)
- [`RemoveTagsFromCertificate`](https://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html)
- [`RenewCertificate`](https://docs.aws.amazon.com/acm/latest/APIReference/API_RenewCertificate.html)
- [`ResendValidationEmail`](https://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html)
- [`UpdateCertificateOptions`](https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificateOptions.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
