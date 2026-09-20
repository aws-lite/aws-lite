// Generated from @aws-sdk/client-acm@3.1136.0 by npm run gen. Do not edit.
// AWS SDK and Smithy declarations: see ../readme.md#attribution.

interface ResponseMetadata {
	/**
	 * The status code of the last HTTP response received for this operation.
	 */
	httpStatusCode?: number;
	/**
	 * A unique identifier for the last request sent for this operation. Often
	 * requested by AWS service teams to aid in debugging.
	 */
	requestId?: string;
	/**
	 * A secondary identifier for the last request sent. Used for debugging.
	 */
	extendedRequestId?: string;
	/**
	 * A tertiary identifier for the last request sent. Used for debugging.
	 */
	cfId?: string;
	/**
	 * The number of times this operation was attempted.
	 */
	attempts?: number;
	/**
	 * The total amount of time (in milliseconds) that was spent waiting between
	 * retry attempts.
	 */
	totalRetryDelay?: number;
}
interface MetadataBearer {
	/**
	 * Metadata pertaining to this request.
	 */
	$metadata: ResponseMetadata;
}
declare const CertificateKeyPairOrigin: {
	readonly ACME: "ACME";
	readonly AWS_MANAGED: "AWS_MANAGED";
	readonly CUSTOMER_PROVIDED: "CUSTOMER_PROVIDED";
};
type CertificateKeyPairOrigin = (typeof CertificateKeyPairOrigin)[keyof typeof CertificateKeyPairOrigin];
declare const CertificateExport: {
	readonly DISABLED: "DISABLED";
	readonly ENABLED: "ENABLED";
};
type CertificateExport = (typeof CertificateExport)[keyof typeof CertificateExport];
declare const CertificateManagedBy: {
	readonly CLOUDFRONT: "CLOUDFRONT";
};
type CertificateManagedBy = (typeof CertificateManagedBy)[keyof typeof CertificateManagedBy];
declare const RenewalEligibility: {
	readonly ELIGIBLE: "ELIGIBLE";
	readonly INELIGIBLE: "INELIGIBLE";
};
type RenewalEligibility = (typeof RenewalEligibility)[keyof typeof RenewalEligibility];
declare const RenewalStatus: {
	readonly FAILED: "FAILED";
	readonly PENDING_AUTO_RENEWAL: "PENDING_AUTO_RENEWAL";
	readonly PENDING_VALIDATION: "PENDING_VALIDATION";
	readonly SUCCESS: "SUCCESS";
};
type RenewalStatus = (typeof RenewalStatus)[keyof typeof RenewalStatus];
declare const CertificateStatus: {
	readonly EXPIRED: "EXPIRED";
	readonly FAILED: "FAILED";
	readonly INACTIVE: "INACTIVE";
	readonly ISSUED: "ISSUED";
	readonly PENDING_VALIDATION: "PENDING_VALIDATION";
	readonly REVOKED: "REVOKED";
	readonly VALIDATION_TIMED_OUT: "VALIDATION_TIMED_OUT";
};
type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];
declare const CertificateType: {
	readonly AMAZON_ISSUED: "AMAZON_ISSUED";
	readonly IMPORTED: "IMPORTED";
	readonly PRIVATE: "PRIVATE";
};
type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];
declare const ValidationMethod: {
	readonly DNS: "DNS";
	readonly EMAIL: "EMAIL";
	readonly HTTP: "HTTP";
};
type ValidationMethod = (typeof ValidationMethod)[keyof typeof ValidationMethod];
declare const RecordType: {
	readonly CNAME: "CNAME";
};
type RecordType = (typeof RecordType)[keyof typeof RecordType];
declare const DomainStatus: {
	readonly FAILED: "FAILED";
	readonly PENDING_VALIDATION: "PENDING_VALIDATION";
	readonly SUCCESS: "SUCCESS";
};
type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];
declare const ExtendedKeyUsageName: {
	readonly ANY: "ANY";
	readonly CODE_SIGNING: "CODE_SIGNING";
	readonly CUSTOM: "CUSTOM";
	readonly EMAIL_PROTECTION: "EMAIL_PROTECTION";
	readonly IPSEC_END_SYSTEM: "IPSEC_END_SYSTEM";
	readonly IPSEC_TUNNEL: "IPSEC_TUNNEL";
	readonly IPSEC_USER: "IPSEC_USER";
	readonly NONE: "NONE";
	readonly OCSP_SIGNING: "OCSP_SIGNING";
	readonly TIME_STAMPING: "TIME_STAMPING";
	readonly TLS_WEB_CLIENT_AUTHENTICATION: "TLS_WEB_CLIENT_AUTHENTICATION";
	readonly TLS_WEB_SERVER_AUTHENTICATION: "TLS_WEB_SERVER_AUTHENTICATION";
};
type ExtendedKeyUsageName = (typeof ExtendedKeyUsageName)[keyof typeof ExtendedKeyUsageName];
declare const FailureReason: {
	readonly ADDITIONAL_VERIFICATION_REQUIRED: "ADDITIONAL_VERIFICATION_REQUIRED";
	readonly CAA_ERROR: "CAA_ERROR";
	readonly DOMAIN_NOT_ALLOWED: "DOMAIN_NOT_ALLOWED";
	readonly DOMAIN_VALIDATION_DENIED: "DOMAIN_VALIDATION_DENIED";
	readonly INVALID_PUBLIC_DOMAIN: "INVALID_PUBLIC_DOMAIN";
	readonly NO_AVAILABLE_CONTACTS: "NO_AVAILABLE_CONTACTS";
	readonly OTHER: "OTHER";
	readonly PCA_ACCESS_DENIED: "PCA_ACCESS_DENIED";
	readonly PCA_INVALID_ARGS: "PCA_INVALID_ARGS";
	readonly PCA_INVALID_ARN: "PCA_INVALID_ARN";
	readonly PCA_INVALID_DURATION: "PCA_INVALID_DURATION";
	readonly PCA_INVALID_STATE: "PCA_INVALID_STATE";
	readonly PCA_LIMIT_EXCEEDED: "PCA_LIMIT_EXCEEDED";
	readonly PCA_NAME_CONSTRAINTS_VALIDATION: "PCA_NAME_CONSTRAINTS_VALIDATION";
	readonly PCA_REQUEST_FAILED: "PCA_REQUEST_FAILED";
	readonly PCA_RESOURCE_NOT_FOUND: "PCA_RESOURCE_NOT_FOUND";
	readonly SLR_NOT_FOUND: "SLR_NOT_FOUND";
};
type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];
declare const KeyAlgorithm: {
	readonly EC_prime256v1: "EC_prime256v1";
	readonly EC_secp384r1: "EC_secp384r1";
	readonly EC_secp521r1: "EC_secp521r1";
	readonly RSA_1024: "RSA_1024";
	readonly RSA_2048: "RSA_2048";
	readonly RSA_3072: "RSA_3072";
	readonly RSA_4096: "RSA_4096";
};
type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm];
declare const KeyUsageName: {
	readonly ANY: "ANY";
	readonly CERTIFICATE_SIGNING: "CERTIFICATE_SIGNING";
	readonly CRL_SIGNING: "CRL_SIGNING";
	readonly CUSTOM: "CUSTOM";
	readonly DATA_ENCIPHERMENT: "DATA_ENCIPHERMENT";
	readonly DECIPHER_ONLY: "DECIPHER_ONLY";
	readonly DIGITAL_SIGNATURE: "DIGITAL_SIGNATURE";
	readonly ENCHIPER_ONLY: "ENCIPHER_ONLY";
	readonly KEY_AGREEMENT: "KEY_AGREEMENT";
	readonly KEY_ENCIPHERMENT: "KEY_ENCIPHERMENT";
	readonly NON_REPUDATION: "NON_REPUDIATION";
};
type KeyUsageName = (typeof KeyUsageName)[keyof typeof KeyUsageName];
declare const CertificateTransparencyLoggingPreference: {
	readonly DISABLED: "DISABLED";
	readonly ENABLED: "ENABLED";
};
type CertificateTransparencyLoggingPreference = (typeof CertificateTransparencyLoggingPreference)[keyof typeof CertificateTransparencyLoggingPreference];
declare const RevocationReason: {
	readonly AFFILIATION_CHANGED: "AFFILIATION_CHANGED";
	readonly A_A_COMPROMISE: "A_A_COMPROMISE";
	readonly CA_COMPROMISE: "CA_COMPROMISE";
	readonly CERTIFICATE_HOLD: "CERTIFICATE_HOLD";
	readonly CESSATION_OF_OPERATION: "CESSATION_OF_OPERATION";
	readonly KEY_COMPROMISE: "KEY_COMPROMISE";
	readonly PRIVILEGE_WITHDRAWN: "PRIVILEGE_WITHDRAWN";
	readonly REMOVE_FROM_CRL: "REMOVE_FROM_CRL";
	readonly SUPERCEDED: "SUPERCEDED";
	readonly SUPERSEDED: "SUPERSEDED";
	readonly UNSPECIFIED: "UNSPECIFIED";
};
type RevocationReason = (typeof RevocationReason)[keyof typeof RevocationReason];
declare const UpdateStatus: {
	readonly FAILED: "FAILED";
	readonly PENDING_DOMAIN_VALIDATION: "PENDING_DOMAIN_VALIDATION";
	readonly SUCCESS: "SUCCESS";
};
type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];
declare const UpdateType: {
	readonly DOMAIN_VALIDATION_METHOD: "DOMAIN_VALIDATION_METHOD";
};
type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];
interface ResourceRecord {
	/**
	 * <p>The name of the DNS record to create in your domain. This is supplied by ACM.</p>
	 * @public
	 */
	Name: string | undefined;
	/**
	 * <p>The type of DNS record. Currently this can be <code>CNAME</code>.</p>
	 * @public
	 */
	Type: RecordType | undefined;
	/**
	 * <p>The value of the CNAME record to add to your DNS database. This is supplied by ACM.</p>
	 * @public
	 */
	Value: string | undefined;
}
interface HttpRedirect {
	/**
	 * <p>The URL including the domain to be validated. The certificate authority sends <code>GET</code> requests here during validation.</p>
	 * @public
	 */
	RedirectFrom?: string | undefined;
	/**
	 * <p>The URL hosting the validation token. <code>RedirectFrom</code> must return this content or redirect here.</p>
	 * @public
	 */
	RedirectTo?: string | undefined;
}
interface DomainValidation {
	/**
	 * <p>A fully qualified domain name (FQDN) in the certificate. For example, <code>www.example.com</code> or <code>example.com</code>. </p>
	 * @public
	 */
	DomainName: string | undefined;
	/**
	 * <p>A list of email addresses that ACM used to send domain validation emails.</p>
	 * @public
	 */
	ValidationEmails?: string[] | undefined;
	/**
	 * <p>The domain name that ACM used to send domain validation emails.</p>
	 * @public
	 */
	ValidationDomain?: string | undefined;
	/**
	 * <p>The validation status of the domain name. This can be one of the following values:</p> <ul> <li> <p> <code>PENDING_VALIDATION</code> </p> </li> <li> <p> <code/>SUCCESS</p> </li> <li> <p> <code/>FAILED</p> </li> </ul>
	 * @public
	 */
	ValidationStatus?: DomainStatus | undefined;
	/**
	 * <p>Contains the CNAME record that you add to your DNS database for domain validation. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">Use DNS to Validate Domain Ownership</a>.</p> <note> <p>The CNAME information that you need does not include the name of your domain. If you include your domain name in the DNS database CNAME record, validation fails. For example, if the name is <code>_a79865eb4cd1a6ab990a45779b4e0b96.yourdomain.com</code>, only <code>_a79865eb4cd1a6ab990a45779b4e0b96</code> must be used.</p> </note>
	 * @public
	 */
	ResourceRecord?: ResourceRecord | undefined;
	/**
	 * <p>Contains information for HTTP-based domain validation of certificates requested through Amazon CloudFront and issued by ACM. This field exists only when the certificate type is <code>AMAZON_ISSUED</code> and the validation method is <code>HTTP</code>.</p>
	 * @public
	 */
	HttpRedirect?: HttpRedirect | undefined;
	/**
	 * <p>Specifies the domain validation method.</p>
	 * @public
	 */
	ValidationMethod?: ValidationMethod | undefined;
}
interface ExtendedKeyUsage {
	/**
	 * <p>The name of an Extended Key Usage value.</p>
	 * @public
	 */
	Name?: ExtendedKeyUsageName | undefined;
	/**
	 * <p>An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The following OIDs are defined in RFC 3280 and RFC 5280. </p> <ul> <li> <p> <code>1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.3 (CODE_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.8 (TIME_STAMPING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.9 (OCSP_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.7 (IPSEC_USER)</code> </p> </li> </ul>
	 * @public
	 */
	OID?: string | undefined;
}
interface KeyUsage {
	/**
	 * <p>A string value that contains a Key Usage extension name.</p>
	 * @public
	 */
	Name?: KeyUsageName | undefined;
}
interface CertificateOptions {
	/**
	 * <p>This parameter has been deprecated. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.</p>
	 *
	 * @deprecated (since 12th June 2026) Certificate transparency logging opt-out is no longer available.
	 * @public
	 */
	CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference | undefined;
	/**
	 * <p>You can opt in to allow the export of your certificates by specifying <code>ENABLED</code>. You cannot update the value of <code>Export</code> after the the certificate is created.</p>
	 * @public
	 */
	Export?: CertificateExport | undefined;
	/**
	 * <p>The domain validation method for the certificate. To migrate from email to DNS validation, specify <code>DNS</code>.</p>
	 * @public
	 */
	ValidationMethod?: ValidationMethod | undefined;
}
interface RenewalSummary {
	/**
	 * <p>The status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> of the certificate.</p>
	 * @public
	 */
	RenewalStatus: RenewalStatus | undefined;
	/**
	 * <p>Contains information about the validation of each domain name in the certificate, as it pertains to ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a>. This is different from the initial validation that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
	 * @public
	 */
	DomainValidationOptions: DomainValidation[] | undefined;
	/**
	 * <p>The reason that a renewal request was unsuccessful.</p>
	 * @public
	 */
	RenewalStatusReason?: FailureReason | undefined;
	/**
	 * <p>The time at which the renewal summary was last updated.</p>
	 * @public
	 */
	UpdatedAt: Date | undefined;
}
interface DomainValidationMethodUpdateSummary {
	/**
	 * <p>The validation method that the certificate was using before the update.</p>
	 * @public
	 */
	From?: ValidationMethod | undefined;
	/**
	 * <p>The target validation method for the update.</p>
	 * @public
	 */
	To?: ValidationMethod | undefined;
}
interface UpdateSummary {
	/**
	 * <p>The status of the certificate update. The following are valid values:</p> <ul> <li> <p> <code>PENDING_DOMAIN_VALIDATION</code> – The certificate update is waiting for domain ownership validation to complete.</p> </li> <li> <p> <code>SUCCESS</code> – The certificate was updated successfully.</p> </li> <li> <p> <code>FAILED</code> – The certificate update failed.</p> </li> </ul>
	 * @public
	 */
	Status?: UpdateStatus | undefined;
	/**
	 * <p>The type of update that was requested for the certificate. The following are valid values:</p> <ul> <li> <p> <code>DOMAIN_VALIDATION_METHOD</code> – The update changes the domain validation method for the certificate.</p> </li> </ul>
	 * @public
	 */
	Type?: UpdateType | undefined;
	/**
	 * <p>Contains information about a domain validation method migration, including the previous and target validation methods.</p>
	 * @public
	 */
	DomainValidationMethodUpdateSummary?: DomainValidationMethodUpdateSummary | undefined;
	/**
	 * <p>The time at which the certificate update was requested.</p>
	 * @public
	 */
	RequestedAt?: Date | undefined;
	/**
	 * <p>The time at which the certificate update status was last changed.</p>
	 * @public
	 */
	UpdatedAt?: Date | undefined;
}
interface CertificateDetail {
	/**
	 * <p>The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
	 * @public
	 */
	CertificateArn?: string | undefined;
	/**
	 * <p>The fully qualified domain name for the certificate, such as www.example.com or example.com.</p>
	 * @public
	 */
	DomainName?: string | undefined;
	/**
	 * <p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p>
	 * @public
	 */
	SubjectAlternativeNames?: string[] | undefined;
	/**
	 * <p>Identifies the Amazon Web Services service that manages the certificate issued by ACM.</p>
	 * @public
	 */
	ManagedBy?: CertificateManagedBy | undefined;
	/**
	 * <p>Contains information about the initial validation of each domain name that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
	 * @public
	 */
	DomainValidationOptions?: DomainValidation[] | undefined;
	/**
	 * <p>The serial number of the certificate.</p>
	 * @public
	 */
	Serial?: string | undefined;
	/**
	 * <p>The name of the entity that is associated with the public key contained in the certificate.</p>
	 * @public
	 */
	Subject?: string | undefined;
	/**
	 * <p>The name of the certificate authority that issued and signed the certificate.</p>
	 * @public
	 */
	Issuer?: string | undefined;
	/**
	 * <p>The time at which the certificate was requested.</p>
	 * @public
	 */
	CreatedAt?: Date | undefined;
	/**
	 * <p>The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
	 * @public
	 */
	IssuedAt?: Date | undefined;
	/**
	 * <p>The date and time when the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. </p>
	 * @public
	 */
	ImportedAt?: Date | undefined;
	/**
	 * <p>The status of the certificate.</p> <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and try again. If validation succeeds, the certificate enters status ISSUED. </p>
	 * @public
	 */
	Status?: CertificateStatus | undefined;
	/**
	 * <p>The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
	 * @public
	 */
	RevokedAt?: Date | undefined;
	/**
	 * <p>The reason the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
	 * @public
	 */
	RevocationReason?: RevocationReason | undefined;
	/**
	 * <p>The time before which the certificate is not valid.</p>
	 * @public
	 */
	NotBefore?: Date | undefined;
	/**
	 * <p>The time after which the certificate is not valid.</p>
	 * @public
	 */
	NotAfter?: Date | undefined;
	/**
	 * <p>The algorithm that was used to generate the public-private key pair.</p>
	 * @public
	 */
	KeyAlgorithm?: KeyAlgorithm | undefined;
	/**
	 * <p>The algorithm that was used to sign the certificate.</p>
	 * @public
	 */
	SignatureAlgorithm?: string | undefined;
	/**
	 * <p>A list of ARNs for the Amazon Web Services resources that are using the certificate. A certificate can be used by multiple Amazon Web Services resources. </p>
	 * @public
	 */
	InUseBy?: string[] | undefined;
	/**
	 * <p>The reason the certificate request failed. This value exists only when the certificate status is <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed">Certificate Request Failed</a> in the <i>Certificate Manager User Guide</i>. </p>
	 * @public
	 */
	FailureReason?: FailureReason | undefined;
	/**
	 * <p>The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p>
	 * @public
	 */
	Type?: CertificateType | undefined;
	/**
	 * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
	 * @public
	 */
	RenewalSummary?: RenewalSummary | undefined;
	/**
	 * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
	 * @public
	 */
	KeyUsages?: KeyUsage[] | undefined;
	/**
	 * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). </p>
	 * @public
	 */
	ExtendedKeyUsages?: ExtendedKeyUsage[] | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the certificate. This has the following format: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>
	 * @public
	 */
	CertificateAuthorityArn?: string | undefined;
	/**
	 * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.</p>
	 * @public
	 */
	RenewalEligibility?: RenewalEligibility | undefined;
	/**
	 * <p>Contains the certificate options. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.</p>
	 * @public
	 */
	Options?: CertificateOptions | undefined;
	/**
	 * <p>Contains information about the most recent update to the certificate. This field exists only when the certificate type is <code>AMAZON_ISSUED</code> and a certificate update has been requested.</p>
	 * @public
	 */
	UpdateSummary?: UpdateSummary | undefined;
	/**
	 * <p>The origin of the certificate's key pair.</p>
	 * @public
	 */
	CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;
	/**
	 * <p>The ARN of the ACME endpoint used to issue the certificate.</p>
	 * @public
	 */
	AcmeEndpointArn?: string | undefined;
	/**
	 * <p>The ACME account identifier associated with the certificate.</p>
	 * @public
	 */
	AcmeAccountId?: string | undefined;
}
interface DescribeCertificateResponse {
	/**
	 * <p>Metadata about an ACM certificate.</p>
	 * @public
	 */
	Certificate?: CertificateDetail | undefined;
}
interface CertificateSummary {
	/**
	 * <p>Amazon Resource Name (ARN) of the certificate. This is of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
	 * @public
	 */
	CertificateArn?: string | undefined;
	/**
	 * <p>Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.</p>
	 * @public
	 */
	DomainName?: string | undefined;
	/**
	 * <p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p> <p>When called by <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html">ListCertificates</a>, this parameter will only return the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a>.</p>
	 * @public
	 */
	SubjectAlternativeNameSummaries?: string[] | undefined;
	/**
	 * <p>When called by <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html">ListCertificates</a>, indicates whether the full list of subject alternative names has been included in the response. If false, the response includes all of the subject alternative names included in the certificate. If true, the response only includes the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a>.</p>
	 * @public
	 */
	HasAdditionalSubjectAlternativeNames?: boolean | undefined;
	/**
	 * <p>The status of the certificate.</p> <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and try again. If validation succeeds, the certificate enters status ISSUED. </p>
	 * @public
	 */
	Status?: CertificateStatus | undefined;
	/**
	 * <p>The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p>
	 * @public
	 */
	Type?: CertificateType | undefined;
	/**
	 * <p>The algorithm that was used to generate the public-private key pair.</p>
	 * @public
	 */
	KeyAlgorithm?: KeyAlgorithm | undefined;
	/**
	 * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
	 * @public
	 */
	KeyUsages?: KeyUsageName[] | undefined;
	/**
	 * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). </p>
	 * @public
	 */
	ExtendedKeyUsages?: ExtendedKeyUsageName[] | undefined;
	/**
	 * <p>Indicates if export is enabled for the certificate.</p>
	 * @public
	 */
	ExportOption?: CertificateExport | undefined;
	/**
	 * <p>Indicates whether the certificate is currently in use by any Amazon Web Services resources.</p>
	 * @public
	 */
	InUse?: boolean | undefined;
	/**
	 * <p>Indicates whether the certificate has been exported.</p>
	 * @public
	 */
	Exported?: boolean | undefined;
	/**
	 * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.</p>
	 * @public
	 */
	RenewalEligibility?: RenewalEligibility | undefined;
	/**
	 * <p>The time before which the certificate is not valid.</p>
	 * @public
	 */
	NotBefore?: Date | undefined;
	/**
	 * <p>The time after which the certificate is not valid.</p>
	 * @public
	 */
	NotAfter?: Date | undefined;
	/**
	 * <p>The time at which the certificate was requested.</p>
	 * @public
	 */
	CreatedAt?: Date | undefined;
	/**
	 * <p>The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
	 * @public
	 */
	IssuedAt?: Date | undefined;
	/**
	 * <p>The date and time when the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. </p>
	 * @public
	 */
	ImportedAt?: Date | undefined;
	/**
	 * <p>The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
	 * @public
	 */
	RevokedAt?: Date | undefined;
	/**
	 * <p>Identifies the Amazon Web Services service that manages the certificate issued by ACM.</p>
	 * @public
	 */
	ManagedBy?: CertificateManagedBy | undefined;
	/**
	 * <p>The origin of the certificate's key pair.</p>
	 * @public
	 */
	CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;
}
interface ListCertificatesResponse {
	/**
	 * <p>When the list is truncated, this value is present and contains the value to use for the <code>NextToken</code> parameter in a subsequent pagination request.</p>
	 * @public
	 */
	NextToken?: string | undefined;
	/**
	 * <p>A list of ACM certificates.</p>
	 * @public
	 */
	CertificateSummaryList?: CertificateSummary[] | undefined;
}
interface RequestCertificateResponse {
	/**
	 * <p>String that contains the ARN of the issued certificate. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>
	 * @public
	 */
	CertificateArn?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandOutput extends DescribeCertificateResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandOutput extends ListCertificatesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RequestCertificateCommand}.
 */
export interface RequestCertificateCommandOutput extends RequestCertificateResponse, MetadataBearer {
}

export {};
