/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'acm'
const property = 'ACM'
const required = true
const docRoot = 'https://docs.aws.amazon.com/acm/latest/APIReference/'

const arr = { type: 'array' }
// const bool = { type: 'boolean' }
const obj = { type: 'object' }
const num = { type: 'number' }
const str = { type: 'string' }

const CertificateArn = { ...str, required, comment: 'ARN of the ACM certificate' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const defaultResponse = ({ payload }) => payload

const DeleteCertificate = {
  awsDoc: docRoot + 'API_DeleteCertificate.html',
  validate: {
    CertificateArn,
  },
  request: ({ CertificateArn }) => {
    return {
      awsjson: false,
      headers: {
        'X-Amz-Target': 'CertificateManager.DeleteCertificate',
        'Content-Type': 'application/x-amz-json-1.1',
      },
      payload: { CertificateArn },
    }
  },
  response: () => {},
}

const DescribeCertificate = {
  awsDoc: docRoot + 'API_DescribeCertificate.html',
  validate: {
    CertificateArn,
  },
  request: ({ CertificateArn }) => {
    return {
      awsjson: false,
      headers: {
        'X-Amz-Target': 'CertificateManager.DescribeCertificate',
        'Content-Type': 'application/x-amz-json-1.1',
      },
      payload: { CertificateArn },
    }
  },
  response: defaultResponse,
}

const ListCertificates = {
  awsDoc: docRoot + 'API_ListCertificates.html',
  validate: {
    CertificateStatuses: { ...arr, comment: 'Array of status values (strings) to define a filter for certificates; array can contain any of the values `PENDING_VALIDATION`, `ISSUED`, `INACTIVE`, `EXPIRED`, `VALIDATION_TIMED_OUT`, `REVOKED`, `FAILED`' },
    Includes: { ...obj, comment: 'Object defining a filter for the certificate list', ref: docRoot + 'APIReference/API_ListCertificates.html#ACM-ListCertificates-request-Includes' },
    MaxItems: { ...num, comment: 'Maximum number of values to be returned: results will be paginated if the number of results exceeds `MaxItems`' },
    NextToken: { ...str, comment: 'Pagination token' },
    SortBy: { ...str, comment: 'Specify the field used to sort results; value can be `CREATED_AT`: `SortOrder` must also be provided'  },
    SortOrder: { ...str, comment: 'Specify the order results will be sorted; value can be one of `ASCENDING`, `DESCENDING`: `SortBy` must also be provided' },
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }
    return {
      awsjson: false,
      headers: {
        'X-Amz-Target': 'CertificateManager.ListCertificates',
        'Content-Type': 'application/x-amz-json-1.1',
      },
      payload: params,
      paginate,
      paginator: {
        token: 'NextToken',
        cursor: 'NextToken',
        accumulator: 'CertificateSummaryList',
      },
    }
  },
  response: defaultResponse,
}

const RequestCertificate = {
  awsDoc: docRoot + 'API_RequestCertificate.html',
  validate: {
    DomainName: { ...str, required, comment: 'Domain name to be secured with an ACM certificate; use `*` as a wildcard (ex. example.*.com)' },
    CertificateAuthorityArn: { ...str, comment: 'ARN of a private certificate authority that will issue the certificate: ACM will attempt to issue a public certificate if this is blank', ref: docRoot + 'API_RequestCertificate.html#ACM-RequestCertificate-request-CertificateAuthorityArn'  },
    DomainValidationOptions: { ...arr, comment: 'Array of 1 to 100 `DomainValidationOption` objects that tell ACM where to send emails to validate domain ownership', ref: docRoot + 'API_RequestCertificate.html#ACM-RequestCertificate-request-DomainValidationOptions' },
    IdempotencyToken: { ...str, comment: 'Identifier used to distinguish between calls to `RequestCertificate`. Valid for 1 hour after creation. Any requests within the hour, using the same value will be considered duplicates' },
    KeyAlgorithm: { ...str, comment: 'Specify the encryption algorithm used to generate public/private keys (default: RSA); can be one of `RSA_1024`, `RSA_2048`, `RSA_3072`, `RSA_4096`, `EC_prime256v1`, `EC_secp384r1`, `EC_secp521r1`', ref: docRoot + 'API_RequestCertificate.html#ACM-RequestCertificate-request-KeyAlgorithm' },
    Options: { ...obj, comment: '`CertificateOptions` object to specify if the certificate will be added to a transparency log', ref: docRoot + 'API_RequestCertificate.html#ACM-RequestCertificate-request-Options' },
    SubjectAlternativeNames: { ...arr, comment: 'Array of 1 to 50 `FQDN`s to be included in the Subject Alternative Name extension of the ACM certificate', ref: docRoot + 'API_RequestCertificate.html#ACM-RequestCertificate-request-SubjectAlternativeNames' },
    Tags: { ...arr, comment: 'Array of 1 to 50 `Tag` objects to be associated with the certificate', ref: docRoot + 'API_RequestCertificate.html#ACM-RequestCertificate-request-Tags' },
    ValidationMethod: { ...str, comment: 'Method to use when requesting a public certificate to validate ownership of the domain being secured; can be one of `EMAIL`, `DNS`' },
  },
  request: (params) => {
    return {
      awsjson: false,
      headers: {
        'X-Amz-Target': 'CertificateManager.RequestCertificate',
        'Content-Type': 'application/x-amz-json-1.1',
      },
      payload: params,
    }
  },
  response: defaultResponse,
}

export default {
  name: '@aws-lite/acm',
  service,
  property,
  methods: {
    DeleteCertificate,
    DescribeCertificate,
    ListCertificates,
    RequestCertificate,
    ...incomplete,
  },
}
