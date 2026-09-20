// Generated from @aws-sdk/client-cloudfront@3.1136.0 by npm run gen. Do not edit.
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
declare const ICPRecordalStatus: {
	readonly APPROVED: "APPROVED";
	readonly PENDING: "PENDING";
	readonly SUSPENDED: "SUSPENDED";
};
type ICPRecordalStatus = (typeof ICPRecordalStatus)[keyof typeof ICPRecordalStatus];
declare const Method: {
	readonly DELETE: "DELETE";
	readonly GET: "GET";
	readonly HEAD: "HEAD";
	readonly OPTIONS: "OPTIONS";
	readonly PATCH: "PATCH";
	readonly POST: "POST";
	readonly PUT: "PUT";
};
type Method = (typeof Method)[keyof typeof Method];
declare const IpAddressType: {
	readonly DualStack: "dualstack";
	readonly Ipv4: "ipv4";
	readonly Ipv6: "ipv6";
};
type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];
declare const ItemSelection: {
	readonly all: "all";
	readonly none: "none";
	readonly whitelist: "whitelist";
};
type ItemSelection = (typeof ItemSelection)[keyof typeof ItemSelection];
declare const EventType: {
	readonly origin_request: "origin-request";
	readonly origin_response: "origin-response";
	readonly viewer_request: "viewer-request";
	readonly viewer_response: "viewer-response";
};
type EventType = (typeof EventType)[keyof typeof EventType];
declare const ViewerProtocolPolicy: {
	readonly allow_all: "allow-all";
	readonly https_only: "https-only";
	readonly redirect_to_https: "redirect-to-https";
};
type ViewerProtocolPolicy = (typeof ViewerProtocolPolicy)[keyof typeof ViewerProtocolPolicy];
declare const CertificateSource: {
	readonly acm: "acm";
	readonly cloudfront: "cloudfront";
	readonly iam: "iam";
};
type CertificateSource = (typeof CertificateSource)[keyof typeof CertificateSource];
declare const ConnectionMode: {
	readonly Direct: "direct";
	readonly TenantOnly: "tenant-only";
};
type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];
declare const HttpVersion: {
	readonly http1_1: "http1.1";
	readonly http2: "http2";
	readonly http2and3: "http2and3";
	readonly http3: "http3";
};
type HttpVersion = (typeof HttpVersion)[keyof typeof HttpVersion];
declare const OriginGroupSelectionCriteria: {
	readonly Default: "default";
	readonly MediaQualityBased: "media-quality-based";
};
type OriginGroupSelectionCriteria = (typeof OriginGroupSelectionCriteria)[keyof typeof OriginGroupSelectionCriteria];
declare const OriginProtocolPolicy: {
	readonly http_only: "http-only";
	readonly https_only: "https-only";
	readonly match_viewer: "match-viewer";
};
type OriginProtocolPolicy = (typeof OriginProtocolPolicy)[keyof typeof OriginProtocolPolicy];
declare const SslProtocol: {
	readonly SSLv3: "SSLv3";
	readonly TLSv1: "TLSv1";
	readonly TLSv1_1: "TLSv1.1";
	readonly TLSv1_2: "TLSv1.2";
};
type SslProtocol = (typeof SslProtocol)[keyof typeof SslProtocol];
declare const PriceClass: {
	readonly None: "None";
	readonly PriceClass_100: "PriceClass_100";
	readonly PriceClass_200: "PriceClass_200";
	readonly PriceClass_All: "PriceClass_All";
};
type PriceClass = (typeof PriceClass)[keyof typeof PriceClass];
declare const GeoRestrictionType: {
	readonly blacklist: "blacklist";
	readonly none: "none";
	readonly whitelist: "whitelist";
};
type GeoRestrictionType = (typeof GeoRestrictionType)[keyof typeof GeoRestrictionType];
declare const MinimumProtocolVersion: {
	readonly SSLv3: "SSLv3";
	readonly TLSv1: "TLSv1";
	readonly TLSv1_1_2016: "TLSv1.1_2016";
	readonly TLSv1_2016: "TLSv1_2016";
	readonly TLSv1_2_2018: "TLSv1.2_2018";
	readonly TLSv1_2_2019: "TLSv1.2_2019";
	readonly TLSv1_2_2021: "TLSv1.2_2021";
	readonly TLSv1_2_2025: "TLSv1.2_2025";
	readonly TLSv1_3_2025: "TLSv1.3_2025";
};
type MinimumProtocolVersion = (typeof MinimumProtocolVersion)[keyof typeof MinimumProtocolVersion];
declare const SSLSupportMethod: {
	readonly sni_only: "sni-only";
	readonly static_ip: "static-ip";
	readonly vip: "vip";
};
type SSLSupportMethod = (typeof SSLSupportMethod)[keyof typeof SSLSupportMethod];
declare const ViewerMtlsMode: {
	readonly Optional: "optional";
	readonly Passthrough: "passthrough";
	readonly Required: "required";
};
type ViewerMtlsMode = (typeof ViewerMtlsMode)[keyof typeof ViewerMtlsMode];
interface KeyPairIds {
	/**
	 * <p>The number of key pair identifiers in the list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of CloudFront key pair identifiers.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface KGKeyPairIds {
	/**
	 * <p>The identifier of the key group that contains the public keys.</p>
	 * @public
	 */
	KeyGroupId?: string | undefined;
	/**
	 * <p>A list of CloudFront key pair identifiers.</p>
	 * @public
	 */
	KeyPairIds?: KeyPairIds | undefined;
}
interface ActiveTrustedKeyGroups {
	/**
	 * <p>This field is <code>true</code> if any of the key groups have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is <code>false</code>.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>The number of key groups in the list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of key groups, including the identifiers of the public keys in each key group that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
	 * @public
	 */
	Items?: KGKeyPairIds[] | undefined;
}
interface Signer {
	/**
	 * <p>An Amazon Web Services account number that contains active CloudFront key pairs that CloudFront can use to verify the signatures of signed URLs and signed cookies. If the Amazon Web Services account that owns the key pairs is the same account that owns the CloudFront distribution, the value of this field is <code>self</code>.</p>
	 * @public
	 */
	AwsAccountNumber?: string | undefined;
	/**
	 * <p>A list of CloudFront key pair identifiers.</p>
	 * @public
	 */
	KeyPairIds?: KeyPairIds | undefined;
}
interface ActiveTrustedSigners {
	/**
	 * <p>This field is <code>true</code> if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is <code>false</code>.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>The number of Amazon Web Services accounts in the list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of Amazon Web Services accounts and the identifiers of active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.</p>
	 * @public
	 */
	Items?: Signer[] | undefined;
}
interface Aliases {
	/**
	 * <p>The number of CNAME aliases, if any, that you want to associate with this distribution.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A complex type that contains the CNAME aliases, if any, that you want to associate with this distribution.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface AliasICPRecordal {
	/**
	 * <p>A domain name associated with a distribution.</p>
	 * @public
	 */
	CNAME?: string | undefined;
	/**
	 * <p>The Internet Content Provider (ICP) recordal status for a CNAME. The ICPRecordalStatus is set to APPROVED for all CNAMEs (aliases) in Amazon Web Services Regions outside of China.</p> <p>The status values returned are the following:</p> <ul> <li> <p> <b>APPROVED</b> indicates that the associated CNAME has a valid ICP recordal number. Multiple CNAMEs can be associated with a distribution, and CNAMEs can correspond to different ICP recordals. To be marked as APPROVED, that is, valid to use with the China Regions, a CNAME must have one ICP recordal number associated with it.</p> </li> <li> <p> <b>SUSPENDED</b> indicates that the associated CNAME does not have a valid ICP recordal number.</p> </li> <li> <p> <b>PENDING</b> indicates that CloudFront can't determine the ICP recordal status of the CNAME associated with the distribution because there was an error in trying to determine the status. You can try again to see if the error is resolved in which case CloudFront returns an APPROVED or SUSPENDED status.</p> </li> </ul>
	 * @public
	 */
	ICPRecordalStatus?: ICPRecordalStatus | undefined;
}
interface CachedMethods {
	/**
	 * <p>The number of HTTP methods for which you want CloudFront to cache responses. Valid values are <code>2</code> (for caching responses to <code>GET</code> and <code>HEAD</code> requests) and <code>3</code> (for caching responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests).</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A complex type that contains the HTTP methods that you want CloudFront to cache responses to. Valid values for <code>CachedMethods</code> include <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>, depending on which caching option you choose. For more information, see the preceding section.</p>
	 * @public
	 */
	Items: Method[] | undefined;
}
interface AllowedMethods {
	/**
	 * <p>The number of HTTP methods that you want CloudFront to forward to your origin. Valid values are 2 (for <code>GET</code> and <code>HEAD</code> requests), 3 (for <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests) and 7 (for <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests).</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A complex type that contains the HTTP methods that you want CloudFront to process and forward to your origin.</p>
	 * @public
	 */
	Items: Method[] | undefined;
	/**
	 * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>
	 * @public
	 */
	CachedMethods?: CachedMethods | undefined;
}
interface CookieNames {
	/**
	 * <p>The number of cookie names in the <code>Items</code> list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of cookie names.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface CookiePreference {
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the <code>WhitelistedNames</code> complex type.</p> <p>Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the <code>Forward</code> element.</p>
	 * @public
	 */
	Forward: ItemSelection | undefined;
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Required if you specify <code>whitelist</code> for the value of <code>Forward</code>. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.</p> <p>If you specify <code>all</code> or <code>none</code> for the value of <code>Forward</code>, omit <code>WhitelistedNames</code>. If you change the value of <code>Forward</code> from <code>whitelist</code> to <code>all</code> or <code>none</code> and you don't delete the <code>WhitelistedNames</code> element and its child elements, CloudFront deletes them automatically.</p> <p>For the current limit on the number of cookie names that you can whitelist for each cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront"> CloudFront Limits</a> in the <i>Amazon Web Services General Reference</i>.</p>
	 * @public
	 */
	WhitelistedNames?: CookieNames | undefined;
}
interface Headers$1 {
	/**
	 * <p>The number of header names in the <code>Items</code> list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of HTTP header names.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface QueryStringCacheKeys {
	/**
	 * <p>The number of <code>whitelisted</code> query string parameters for a cache behavior.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list that contains the query string parameters that you want CloudFront to use as a basis for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit <code>Items</code>.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface ForwardedValues {
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of <code>QueryString</code> and on the values that you specify for <code>QueryStringCacheKeys</code>, if any:</p> <p>If you specify true for <code>QueryString</code> and you don't specify any values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.</p> <p>If you specify true for <code>QueryString</code> and you specify one or more values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.</p> <p>If you specify false for <code>QueryString</code>, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html">Configuring CloudFront to Cache Based on Query String Parameters</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	QueryString: boolean | undefined;
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	Cookies: CookiePreference | undefined;
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include headers in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	Headers?: Headers$1 | undefined;
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.</p>
	 * @public
	 */
	QueryStringCacheKeys?: QueryStringCacheKeys | undefined;
}
interface FunctionAssociation {
	/**
	 * <p>The Amazon Resource Name (ARN) of the function.</p>
	 * @public
	 */
	FunctionARN: string | undefined;
	/**
	 * <p>The event type of the function, either <code>viewer-request</code> or <code>viewer-response</code>. You cannot use origin-facing event types (<code>origin-request</code> and <code>origin-response</code>) with a CloudFront function.</p>
	 * @public
	 */
	EventType: EventType | undefined;
}
interface FunctionAssociations {
	/**
	 * <p>The number of CloudFront functions in the list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>The CloudFront functions that are associated with a cache behavior in a CloudFront distribution. Your functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.</p>
	 * @public
	 */
	Items?: FunctionAssociation[] | undefined;
}
interface GrpcConfig {
	/**
	 * <p>Enables your CloudFront distribution to receive gRPC requests and to proxy them directly to your origins.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
}
interface LambdaFunctionAssociation {
	/**
	 * <p>The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST.</p>
	 * @public
	 */
	LambdaFunctionARN: string | undefined;
	/**
	 * <p>Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:</p> <ul> <li> <p> <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.</p> </li> <li> <p> <code>origin-request</code>: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.</p> <p>If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</p> </li> </ul>
	 * @public
	 */
	EventType: EventType | undefined;
	/**
	 * <p>A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the Include Body Option</a> in the Amazon CloudFront Developer Guide.</p>
	 * @public
	 */
	IncludeBody?: boolean | undefined;
}
interface LambdaFunctionAssociations {
	/**
	 * <p>The number of Lambda@Edge function associations for this cache behavior.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p> <b>Optional</b>: A complex type that contains <code>LambdaFunctionAssociation</code> items for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
	 * @public
	 */
	Items?: LambdaFunctionAssociation[] | undefined;
}
interface TrustedKeyGroups {
	/**
	 * <p>This field is <code>true</code> if any of the key groups in the list have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is <code>false</code>.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>The number of key groups in the list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of key groups identifiers.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface TrustedSigners {
	/**
	 * <p>This field is <code>true</code> if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is <code>false</code>.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>The number of Amazon Web Services accounts in the list.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of Amazon Web Services account identifiers.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface CacheBehavior {
	/**
	 * <p>The pattern (for example, <code>images/*.jpg</code>) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.</p> <note> <p>You can optionally include a slash (<code>/</code>) at the beginning of the path pattern. For example, <code>/images/*.jpg</code>. CloudFront behavior is the same with or without the leading <code>/</code>.</p> </note> <p>The path pattern for the default cache behavior is <code>*</code> and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern">Path Pattern</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	PathPattern: string | undefined;
	/**
	 * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they match this cache behavior.</p>
	 * @public
	 */
	TargetOriginId: string | undefined;
	/**
	 * <important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	TrustedSigners?: TrustedSigners | undefined;
	/**
	 * <p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	TrustedKeyGroups?: TrustedKeyGroups | undefined;
	/**
	 * <p>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</p> <ul> <li> <p> <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p> </li> <li> <p> <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.</p> </li> <li> <p> <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).</p> </li> </ul> <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note>
	 * @public
	 */
	ViewerProtocolPolicy: ViewerProtocolPolicy | undefined;
	/**
	 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
	 * @public
	 */
	AllowedMethods?: AllowedMethods | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.</p>
	 * @public
	 */
	SmoothStreaming?: boolean | undefined;
	/**
	 * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	Compress?: boolean | undefined;
	/**
	 * <p>A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.</p>
	 * @public
	 */
	LambdaFunctionAssociations?: LambdaFunctionAssociations | undefined;
	/**
	 * <p>A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.</p>
	 * @public
	 */
	FunctionAssociations?: FunctionAssociations | undefined;
	/**
	 * <p>The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior.</p>
	 * @public
	 */
	FieldLevelEncryptionId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	RealtimeLogConfigArn?: string | undefined;
	/**
	 * <p>The unique identifier of the cache policy that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p>
	 * @public
	 */
	CachePolicyId?: string | undefined;
	/**
	 * <p>The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginRequestPolicyId?: string | undefined;
	/**
	 * <p>The identifier for a response headers policy.</p>
	 * @public
	 */
	ResponseHeadersPolicyId?: string | undefined;
	/**
	 * <p>The gRPC configuration for your cache behavior.</p>
	 * @public
	 */
	GrpcConfig?: GrpcConfig | undefined;
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	ForwardedValues?: ForwardedValues | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html"> Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	MinTTL?: number | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	DefaultTTL?: number | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	MaxTTL?: number | undefined;
}
interface CacheBehaviors {
	/**
	 * <p>The number of cache behaviors for this distribution.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>Optional: A complex type that contains cache behaviors for this distribution. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
	 * @public
	 */
	Items?: CacheBehavior[] | undefined;
}
interface CacheTagConfig {
	/**
	 * <p>The name of the HTTP header that your origin includes in responses. CloudFront uses this header to extract cache tags. The header value must contain comma-separated tag values (for example, <code>product:electronics, category:tv, brand:example</code>).</p>
	 * @public
	 */
	HeaderName: string | undefined;
}
interface ConnectionFunctionAssociation {
	/**
	 * <p>The association's ID.</p>
	 * @public
	 */
	Id: string | undefined;
}
interface CustomErrorResponse {
	/**
	 * <p>The HTTP status code for which you want to specify a custom error page and/or a caching duration.</p>
	 * @public
	 */
	ErrorCode: number | undefined;
	/**
	 * <p>The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by <code>ErrorCode</code>, for example, <code>/4xx-errors/403-forbidden.html</code>. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:</p> <ul> <li> <p>The value of <code>PathPattern</code> matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named <code>/4xx-errors</code>. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, <code>/4xx-errors/*</code>.</p> </li> <li> <p>The value of <code>TargetOriginId</code> specifies the value of the <code>ID</code> element for the origin that contains your custom error pages.</p> </li> </ul> <p>If you specify a value for <code>ResponsePagePath</code>, you must also specify a value for <code>ResponseCode</code>.</p> <p>We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable.</p>
	 * @public
	 */
	ResponsePagePath?: string | undefined;
	/**
	 * <p>The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:</p> <ul> <li> <p>Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute <code>200</code>, the response typically won't be intercepted.</p> </li> <li> <p>If you don't care about distinguishing among different client errors or server errors, you can specify <code>400</code> or <code>500</code> as the <code>ResponseCode</code> for all 4xx or 5xx errors.</p> </li> <li> <p>You might want to return a <code>200</code> status code (OK) and static website so your customers don't know that your website is down.</p> </li> </ul> <p>If you specify a value for <code>ResponseCode</code>, you must also specify a value for <code>ResponsePagePath</code>.</p>
	 * @public
	 */
	ResponseCode?: string | undefined;
	/**
	 * <p>The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in <code>ErrorCode</code>. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	ErrorCachingMinTTL?: number | undefined;
}
interface CustomErrorResponses {
	/**
	 * <p>The number of HTTP status codes for which you want to specify a custom error page and/or a caching duration. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A complex type that contains a <code>CustomErrorResponse</code> element for each HTTP status code for which you want to specify a custom error page and/or a caching duration. </p>
	 * @public
	 */
	Items?: CustomErrorResponse[] | undefined;
}
interface DefaultCacheBehavior {
	/**
	 * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they use the default cache behavior.</p>
	 * @public
	 */
	TargetOriginId: string | undefined;
	/**
	 * <important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	TrustedSigners?: TrustedSigners | undefined;
	/**
	 * <p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	TrustedKeyGroups?: TrustedKeyGroups | undefined;
	/**
	 * <p>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</p> <ul> <li> <p> <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p> </li> <li> <p> <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.</p> </li> <li> <p> <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).</p> </li> </ul> <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note>
	 * @public
	 */
	ViewerProtocolPolicy: ViewerProtocolPolicy | undefined;
	/**
	 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
	 * @public
	 */
	AllowedMethods?: AllowedMethods | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.</p>
	 * @public
	 */
	SmoothStreaming?: boolean | undefined;
	/**
	 * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	Compress?: boolean | undefined;
	/**
	 * <p>A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.</p>
	 * @public
	 */
	LambdaFunctionAssociations?: LambdaFunctionAssociations | undefined;
	/**
	 * <p>A list of CloudFront functions that are associated with this cache behavior. Your functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.</p>
	 * @public
	 */
	FunctionAssociations?: FunctionAssociations | undefined;
	/**
	 * <p>The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior.</p>
	 * @public
	 */
	FieldLevelEncryptionId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	RealtimeLogConfigArn?: string | undefined;
	/**
	 * <p>The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p>
	 * @public
	 */
	CachePolicyId?: string | undefined;
	/**
	 * <p>The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginRequestPolicyId?: string | undefined;
	/**
	 * <p>The identifier for a response headers policy.</p>
	 * @public
	 */
	ResponseHeadersPolicyId?: string | undefined;
	/**
	 * <p>The gRPC configuration for your cache behavior.</p>
	 * @public
	 */
	GrpcConfig?: GrpcConfig | undefined;
	/**
	 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	ForwardedValues?: ForwardedValues | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	MinTTL?: number | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	DefaultTTL?: number | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	MaxTTL?: number | undefined;
}
interface LoggingConfig {
	/**
	 * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a distribution or if you want to disable logging for an existing distribution, specify <code>false</code> for <code>Enabled</code>, and specify empty <code>Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values for <code>Bucket</code> and <code>prefix</code>, the values are automatically deleted.</p>
	 * @public
	 */
	Enabled?: boolean | undefined;
	/**
	 * <p>Specifies whether you want CloudFront to include cookies in access logs, specify <code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify <code>false</code> for <code>IncludeCookies</code>.</p>
	 * @public
	 */
	IncludeCookies?: boolean | undefined;
	/**
	 * <p>The Amazon S3 bucket to store the access logs in, for example, <code>amzn-s3-demo-bucket.s3.amazonaws.com</code>.</p>
	 * @public
	 */
	Bucket?: string | undefined;
	/**
	 * <p>An optional string that you want CloudFront to prefix to the access log <code>filenames</code> for this distribution, for example, <code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
	 * @public
	 */
	Prefix?: string | undefined;
}
interface StatusCodes {
	/**
	 * <p>The number of status codes.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>The items (status codes) for an origin group.</p>
	 * @public
	 */
	Items: number[] | undefined;
}
interface OriginGroupFailoverCriteria {
	/**
	 * <p>The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.</p>
	 * @public
	 */
	StatusCodes: StatusCodes | undefined;
}
interface OriginGroupMember {
	/**
	 * <p>The ID for an origin in an origin group.</p>
	 * @public
	 */
	OriginId: string | undefined;
}
interface OriginGroupMembers {
	/**
	 * <p>The number of origins in an origin group.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>Items (origins) in an origin group.</p>
	 * @public
	 */
	Items: OriginGroupMember[] | undefined;
}
interface OriginGroup {
	/**
	 * <p>The origin group's ID.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>A complex type that contains information about the failover criteria for an origin group.</p>
	 * @public
	 */
	FailoverCriteria: OriginGroupFailoverCriteria | undefined;
	/**
	 * <p>A complex type that contains information about the origins in an origin group.</p>
	 * @public
	 */
	Members: OriginGroupMembers | undefined;
	/**
	 * <p>The selection criteria for the origin group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#concept_origin_groups.creating">Create an origin group</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	SelectionCriteria?: OriginGroupSelectionCriteria | undefined;
}
interface OriginGroups {
	/**
	 * <p>The number of origin groups.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>The items (origin groups) in a distribution.</p>
	 * @public
	 */
	Items?: OriginGroup[] | undefined;
}
interface OriginCustomHeader {
	/**
	 * <p>The name of a header that you want CloudFront to send to your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	HeaderName: string | undefined;
	/**
	 * <p>The value for the header that you specified in the <code>HeaderName</code> field.</p>
	 * @public
	 */
	HeaderValue: string | undefined;
}
interface CustomHeaders {
	/**
	 * <p>The number of custom headers, if any, for this distribution.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p> <b>Optional</b>: A list that contains one <code>OriginCustomHeader</code> element for each custom header that you want CloudFront to forward to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.</p>
	 * @public
	 */
	Items?: OriginCustomHeader[] | undefined;
}
interface OriginMtlsConfig {
	/**
	 * <p>The Amazon Resource Name (ARN) of the client certificate stored in Amazon Web Services Certificate Manager (ACM) that CloudFront uses to authenticate with your origin using Mutual TLS.</p>
	 * @public
	 */
	ClientCertificateArn: string | undefined;
}
interface OriginSslProtocols {
	/**
	 * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an HTTPS connection with this origin.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list that contains allowed SSL/TLS protocols for this distribution.</p>
	 * @public
	 */
	Items: SslProtocol[] | undefined;
}
interface CustomOriginConfig {
	/**
	 * <p>The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.</p>
	 * @public
	 */
	HTTPPort: number | undefined;
	/**
	 * <p>The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.</p>
	 * @public
	 */
	HTTPSPort: number | undefined;
	/**
	 * <p>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:</p> <ul> <li> <p> <code>http-only</code> – CloudFront always uses HTTP to connect to the origin.</p> </li> <li> <p> <code>match-viewer</code> – CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.</p> </li> <li> <p> <code>https-only</code> – CloudFront always uses HTTPS to connect to the origin.</p> </li> </ul>
	 * @public
	 */
	OriginProtocolPolicy: OriginProtocolPolicy | undefined;
	/**
	 * <p>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include <code>SSLv3</code>, <code>TLSv1</code>, <code>TLSv1.1</code>, and <code>TLSv1.2</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols">Minimum Origin SSL Protocol</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginSslProtocols?: OriginSslProtocols | undefined;
	/**
	 * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout">Response timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginReadTimeout?: number | undefined;
	/**
	 * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout">Keep-alive timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginKeepaliveTimeout?: number | undefined;
	/**
	 * <p>Specifies which IP protocol CloudFront uses when connecting to your origin. If your origin uses both IPv4 and IPv6 protocols, you can choose <code>dualstack</code> to help optimize reliability.</p>
	 * @public
	 */
	IpAddressType?: IpAddressType | undefined;
	/**
	 * <p>Configures mutual TLS authentication between CloudFront and your origin server.</p>
	 * @public
	 */
	OriginMtlsConfig?: OriginMtlsConfig | undefined;
}
interface OriginShield {
	/**
	 * <p>A flag that specifies whether Origin Shield is enabled.</p> <p>When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>The Amazon Web Services Region for Origin Shield.</p> <p>Specify the Amazon Web Services Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as <code>us-east-2</code>.</p> <p>When you enable CloudFront Origin Shield, you must specify the Amazon Web Services Region for Origin Shield. For the list of Amazon Web Services Regions that you can specify, and for help choosing the best Region for your origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region">Choosing the Amazon Web Services Region for Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginShieldRegion?: string | undefined;
}
interface S3OriginConfig {
	/**
	 * <note> <p>If you're using origin access control (OAC) instead of origin access identity, specify an empty <code>OriginAccessIdentity</code> element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can <i>only</i> access objects in an Amazon S3 bucket through CloudFront. The format of the value is:</p> <p> <code>origin-access-identity/cloudfront/ID-of-origin-access-identity</code> </p> <p>The <code> <i>ID-of-origin-access-identity</i> </code> is the value that CloudFront returned in the <code>ID</code> element when you created the origin access identity.</p> <p>If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p> <p>To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty <code>OriginAccessIdentity</code> element.</p> <p>To replace the origin access identity, update the distribution configuration and specify the new origin access identity.</p> <p>For more information about the origin access identity, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginAccessIdentity: string | undefined;
	/**
	 * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout">Response timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginReadTimeout?: number | undefined;
}
interface VpcOriginConfig {
	/**
	 * <p>The VPC origin ID.</p>
	 * @public
	 */
	VpcOriginId: string | undefined;
	/**
	 * <p>The account ID of the Amazon Web Services account that owns the VPC origin.</p>
	 * @public
	 */
	OwnerAccountId?: string | undefined;
	/**
	 * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout">Response timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginReadTimeout?: number | undefined;
	/**
	 * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout">Keep-alive timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginKeepaliveTimeout?: number | undefined;
}
interface Origin {
	/**
	 * <p>A unique identifier for the origin. This value must be unique within the distribution.</p> <p>Use this value to specify the <code>TargetOriginId</code> in a <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>The domain name for the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName">Origin Domain Name</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	DomainName: string | undefined;
	/**
	 * <p>An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath">Origin Path</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginPath?: string | undefined;
	/**
	 * <p>A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	CustomHeaders?: CustomHeaders | undefined;
	/**
	 * <p>Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the <code>CustomOriginConfig</code> type instead.</p>
	 * @public
	 */
	S3OriginConfig?: S3OriginConfig | undefined;
	/**
	 * <p>Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the <code>S3OriginConfig</code> type instead.</p>
	 * @public
	 */
	CustomOriginConfig?: CustomOriginConfig | undefined;
	/**
	 * <p>The VPC origin configuration.</p>
	 * @public
	 */
	VpcOriginConfig?: VpcOriginConfig | undefined;
	/**
	 * <p>The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.</p> <p>For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts">Origin Connection Attempts</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	ConnectionAttempts?: number | undefined;
	/**
	 * <p>The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout">Origin Connection Timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	ConnectionTimeout?: number | undefined;
	/**
	 * <p>The time (in seconds) that a request from CloudFront to the origin can stay open and wait for a response. If the complete response isn't received from the origin by this time, CloudFront ends the connection.</p> <p>The value for <code>ResponseCompletionTimeout</code> must be equal to or greater than the value for <code>OriginReadTimeout</code>. If you don't set a value for <code>ResponseCompletionTimeout</code>, CloudFront doesn't enforce a maximum value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#response-completion-timeout">Response completion timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	ResponseCompletionTimeout?: number | undefined;
	/**
	 * <p>CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginShield?: OriginShield | undefined;
	/**
	 * <p>The unique identifier of an origin access control for this origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Restricting access to an Amazon S3 origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	OriginAccessControlId?: string | undefined;
}
interface Origins {
	/**
	 * <p>The number of origins for this distribution.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A list of origins.</p>
	 * @public
	 */
	Items: Origin[] | undefined;
}
interface GeoRestriction {
	/**
	 * <p>The method that you want to use to restrict distribution of your content by country:</p> <ul> <li> <p> <code>none</code>: No geo restriction is enabled, meaning access to content is not restricted by client geo location.</p> </li> <li> <p> <code>blacklist</code>: The <code>Location</code> elements specify the countries in which you don't want CloudFront to distribute your content.</p> </li> <li> <p> <code>whitelist</code>: The <code>Location</code> elements specify the countries in which you want CloudFront to distribute your content.</p> </li> </ul>
	 * @public
	 */
	RestrictionType: GeoRestrictionType | undefined;
	/**
	 * <p>When geo restriction is <code>enabled</code>, this is the number of countries in your <code>whitelist</code> or <code>blacklist</code>. Otherwise, when it is not enabled, <code>Quantity</code> is <code>0</code>, and you can omit <code>Items</code>.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A complex type that contains a <code>Location</code> element for each country in which you want CloudFront either to distribute your content (<code>whitelist</code>) or not distribute your content (<code>blacklist</code>).</p> <p>The <code>Location</code> element is a two-letter, uppercase country code for a country that you want to include in your <code>blacklist</code> or <code>whitelist</code>. Include one <code>Location</code> element for each country.</p> <p>CloudFront and <code>MaxMind</code> both use <code>ISO 3166</code> country codes. For the current list of countries and the corresponding codes, see <code>ISO 3166-1-alpha-2</code> code on the <i>International Organization for Standardization</i> website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface Restrictions {
	/**
	 * <p>A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.</p>
	 * @public
	 */
	GeoRestriction: GeoRestriction | undefined;
}
interface StringSchemaConfig {
	/**
	 * <p>A comment to describe the parameter.</p>
	 * @public
	 */
	Comment?: string | undefined;
	/**
	 * <p>The default value of the parameter.</p>
	 * @public
	 */
	DefaultValue?: string | undefined;
	/**
	 * <p>Whether the defined parameter is required.</p>
	 * @public
	 */
	Required: boolean | undefined;
}
interface ParameterDefinitionSchema {
	/**
	 * <p>An object that contains information about the string schema.</p>
	 * @public
	 */
	StringSchema?: StringSchemaConfig | undefined;
}
interface ParameterDefinition {
	/**
	 * <p>The name of the parameter.</p>
	 * @public
	 */
	Name: string | undefined;
	/**
	 * <p>The value that you assigned to the parameter.</p>
	 * @public
	 */
	Definition: ParameterDefinitionSchema | undefined;
}
interface TenantConfig {
	/**
	 * <p>The parameters that you specify for a distribution tenant.</p>
	 * @public
	 */
	ParameterDefinitions?: ParameterDefinition[] | undefined;
}
interface ViewerCertificate {
	/**
	 * <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, set this field to <code>true</code>.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), set this field to <code>false</code> and specify values for the following fields:</p> <ul> <li> <p> <code>ACMCertificateArn</code> or <code>IAMCertificateId</code> (specify a value for one, not both)</p> </li> <li> <p> <code>MinimumProtocolVersion</code> </p> </li> <li> <p> <code>SSLSupportMethod</code> </p> </li> </ul>
	 * @public
	 */
	CloudFrontDefaultCertificate?: boolean | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>, provide the ID of the IAM certificate.</p> <p>If you specify an IAM certificate ID, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>. </p>
	 * @public
	 */
	IAMCertificateId?: string | undefined;
	/**
	 * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a>, provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (<code>us-east-1</code>).</p> <p>If you specify an ACM certificate ARN, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>.</p>
	 * @public
	 */
	ACMCertificateArn?: string | undefined;
	/**
	 * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.</p> <ul> <li> <p> <code>sni-only</code> – The distribution accepts HTTPS connections from only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a>. This is recommended. Most browsers and clients support SNI.</p> </li> <li> <p> <code>vip</code> – The distribution accepts HTTPS connections from all viewers including those that don't support SNI. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> <li> <p> <code>static-ip</code> - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the <a href="https://console.aws.amazon.com/support/home">Amazon Web ServicesSupport Center</a>.</p> </li> </ul> <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, don't set a value for this field.</p>
	 * @public
	 */
	SSLSupportMethod?: SSLSupportMethod | undefined;
	/**
	 * <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:</p> <ul> <li> <p>The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.</p> </li> <li> <p>The ciphers that CloudFront can use to encrypt the content that it returns to viewers.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers">Supported Protocols and Ciphers Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>On the CloudFront console, this setting is called <b>Security Policy</b>.</p> </note> <p>When you're using SNI only (you set <code>SSLSupportMethod</code> to <code>sni-only</code>), you must specify <code>TLSv1</code> or higher.</p> <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code> (you set <code>CloudFrontDefaultCertificate</code> to <code>true</code>), CloudFront automatically sets the security policy to <code>TLSv1</code> regardless of the value that you set here.</p>
	 * @public
	 */
	MinimumProtocolVersion?: MinimumProtocolVersion | undefined;
	/**
	 * <p>This field is deprecated. Use one of the following fields instead:</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> <li> <p> <code>CloudFrontDefaultCertificate</code> </p> </li> </ul>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	Certificate?: string | undefined;
	/**
	 * <p>This field is deprecated. Use one of the following fields instead:</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> <li> <p> <code>CloudFrontDefaultCertificate</code> </p> </li> </ul>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	CertificateSource?: CertificateSource | undefined;
}
interface TrustStoreConfig {
	/**
	 * <p>The trust store ID.</p>
	 * @public
	 */
	TrustStoreId: string | undefined;
	/**
	 * <p>The configuration to use to advertise trust store CA names.</p>
	 * @public
	 */
	AdvertiseTrustStoreCaNames?: boolean | undefined;
	/**
	 * <p>The configuration to use to ignore certificate expiration.</p>
	 * @public
	 */
	IgnoreCertificateExpiry?: boolean | undefined;
}
interface ViewerMtlsConfig {
	/**
	 * <p>The viewer mTLS mode.</p>
	 * @public
	 */
	Mode?: ViewerMtlsMode | undefined;
	/**
	 * <p>The trust store configuration associated with the viewer mTLS configuration.</p>
	 * @public
	 */
	TrustStoreConfig?: TrustStoreConfig | undefined;
}
interface DistributionConfig {
	/**
	 * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>DistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
	 * @public
	 */
	CallerReference: string | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
	 * @public
	 */
	Aliases?: Aliases | undefined;
	/**
	 * <p>When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is <code>https://www.example.com</code>, you can specify CloudFront to return the <code>index.html</code> file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, <code>https://www.example.com/product-description.html</code>). A default root object avoids exposing the contents of your distribution.</p> <p>You can specify the object name or a path to the object name (for example, <code>index.html</code> or <code>exampleFolderName/index.html</code>). Your string can't begin with a forward slash (<code>/</code>). Only specify the object name or the path to the object.</p> <p>If you don't want to specify a default root object when you create a distribution, include an empty <code>DefaultRootObject</code> element.</p> <p>To delete the default root object from an existing distribution, update the distribution configuration and include an empty <code>DefaultRootObject</code> element.</p> <p>To replace the default root object, update the distribution configuration and specify the new object.</p> <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Specify a default root object</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	DefaultRootObject?: string | undefined;
	/**
	 * <p>A complex type that contains information about origins for this distribution.</p>
	 * @public
	 */
	Origins: Origins | undefined;
	/**
	 * <p>A complex type that contains information about origin groups for this distribution.</p>
	 * @public
	 */
	OriginGroups?: OriginGroups | undefined;
	/**
	 * <p>A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.</p>
	 * @public
	 */
	DefaultCacheBehavior: DefaultCacheBehavior | undefined;
	/**
	 * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
	 * @public
	 */
	CacheBehaviors?: CacheBehaviors | undefined;
	/**
	 * <p>A complex type that controls the following:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	CustomErrorResponses?: CustomErrorResponses | undefined;
	/**
	 * <p>A comment to describe the distribution. The comment cannot be longer than 128 characters.</p>
	 * @public
	 */
	Comment: string | undefined;
	/**
	 * <p>A complex type that controls whether access logs are written for the distribution.</p> <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	Logging?: LoggingConfig | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your objects from all CloudFront edge locations.</p> <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.</p> <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront Pricing</a>.</p>
	 * @public
	 */
	PriceClass?: PriceClass | undefined;
	/**
	 * <p>From this field, you can enable or disable the selected distribution.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p>
	 * @public
	 */
	ViewerCertificate?: ViewerCertificate | undefined;
	/**
	 * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
	 * @public
	 */
	Restrictions?: Restrictions | undefined;
	/**
	 * <note> <p>Multi-tenant distributions only support WAF V2 web ACLs.</p> </note> <p>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p> <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer Guide</a>.</p>
	 * @public
	 */
	WebACLId?: string | undefined;
	/**
	 * <p>(Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't support HTTP/2 automatically use an earlier HTTP version.</p> <p>For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).</p> <p>For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see <a href="https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration">Connection Migration</a> at RFC 9000. For more information about supported TLSv1.3 ciphers, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html">Supported protocols and ciphers between viewers and CloudFront</a>.</p>
	 * @public
	 */
	HttpVersion?: HttpVersion | undefined;
	/**
	 * <note> <p>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html">ConnectionGroup</a>.</p> </note> <p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.</p> <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the <code>IpAddress</code> parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:</p> <ul> <li> <p>You enable IPv6 for the distribution</p> </li> <li> <p>You're using alternate domain names in the URLs for your objects</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Route 53 Amazon Web Services Integration Developer Guide</i>.</p> <p>If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</p>
	 * @public
	 */
	IsIPV6Enabled?: boolean | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>The identifier of a continuous deployment policy. For more information, see <code>CreateContinuousDeploymentPolicy</code>.</p>
	 * @public
	 */
	ContinuousDeploymentPolicyId?: string | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.</p>
	 * @public
	 */
	Staging?: boolean | undefined;
	/**
	 * <note> <p>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html">ConnectionGroup</a>.</p> </note> <p>ID of the Anycast static IP list that is associated with the distribution.</p>
	 * @public
	 */
	AnycastIpListId?: string | undefined;
	/**
	 * <note> <p>This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A distribution tenant configuration.</p>
	 * @public
	 */
	TenantConfig?: TenantConfig | undefined;
	/**
	 * <p>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</p>
	 * @public
	 */
	ConnectionMode?: ConnectionMode | undefined;
	/**
	 * <p>The distribution's viewer mTLS configuration.</p>
	 * @public
	 */
	ViewerMtlsConfig?: ViewerMtlsConfig | undefined;
	/**
	 * <p>The distribution's connection function association.</p>
	 * @public
	 */
	ConnectionFunctionAssociation?: ConnectionFunctionAssociation | undefined;
	/**
	 * <p>Configuration for cache tag extraction from origin responses. When specified, CloudFront reads the header named in <code>HeaderName</code> from origin responses and stores the comma-separated values as cache tags on the object.</p> <p>Distributions without <code>CacheTagConfig</code> do not extract tags. When <code>CacheTagConfig</code> is removed from a distribution via <code>UpdateDistribution</code>, CloudFront stops extracting tags from origin responses.</p> <note> <p>Changing the <code>HeaderName</code> on an existing distribution does not retroactively affect previously cached objects. Tag-based invalidations will not apply to objects already cached using a previous header. To ensure tag invalidations function after updating the header name, use path-based invalidations to recache all objects that use cache tags.</p> </note>
	 * @public
	 */
	CacheTagConfig?: CacheTagConfig | undefined;
}
interface Distribution {
	/**
	 * <p>The distribution's identifier. For example: <code>E1U5RQF7T870K0</code>.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>The distribution's Amazon Resource Name (ARN).</p>
	 * @public
	 */
	ARN: string | undefined;
	/**
	 * <p>The distribution's status. When the status is <code>Deployed</code>, the distribution's information is fully propagated to all CloudFront edge locations.</p>
	 * @public
	 */
	Status: string | undefined;
	/**
	 * <p>The date and time when the distribution was last modified.</p>
	 * @public
	 */
	LastModifiedTime: Date | undefined;
	/**
	 * <p>The number of invalidation batches currently in progress.</p>
	 * @public
	 */
	InProgressInvalidationBatches: number | undefined;
	/**
	 * <p>The distribution's CloudFront domain name. For example: <code>d111111abcdef8.cloudfront.net</code>.</p>
	 * @public
	 */
	DomainName: string | undefined;
	/**
	 * <important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <p>This field contains a list of Amazon Web Services account IDs and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs or signed cookies.</p>
	 * @public
	 */
	ActiveTrustedSigners?: ActiveTrustedSigners | undefined;
	/**
	 * <p>This field contains a list of key groups and the public keys in each key group that CloudFront can use to verify the signatures of signed URLs or signed cookies.</p>
	 * @public
	 */
	ActiveTrustedKeyGroups?: ActiveTrustedKeyGroups | undefined;
	/**
	 * <p>The distribution's configuration.</p>
	 * @public
	 */
	DistributionConfig: DistributionConfig | undefined;
	/**
	 * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
	 * @public
	 */
	AliasICPRecordals?: AliasICPRecordal[] | undefined;
}
interface CreateDistributionResult {
	/**
	 * <p>The distribution's information.</p>
	 * @public
	 */
	Distribution?: Distribution | undefined;
	/**
	 * <p>The fully qualified URI of the new distribution resource just created.</p>
	 * @public
	 */
	Location?: string | undefined;
	/**
	 * <p>The current version of the distribution created.</p>
	 * @public
	 */
	ETag?: string | undefined;
}
interface Paths {
	/**
	 * <p>The number of invalidation paths specified for the objects that you want to invalidate.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A complex type that contains a list of the paths that you want to invalidate.</p>
	 * @public
	 */
	Items?: string[] | undefined;
}
interface InvalidationBatch {
	/**
	 * <p>A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
	 * @public
	 */
	Paths: Paths | undefined;
	/**
	 * <p>A value that you specify to uniquely identify an invalidation request. CloudFront uses the value to prevent you from accidentally resubmitting an identical request. Whenever you create a new invalidation request, you must specify a new value for <code>CallerReference</code> and change other values in the request as applicable. One way to ensure that the value of <code>CallerReference</code> is unique is to use a <code>timestamp</code>, for example, <code>20120301090000</code>.</p> <p>If you make a second invalidation request with the same value for <code>CallerReference</code>, and if the rest of the request is the same, CloudFront doesn't create a new invalidation request. Instead, CloudFront returns information about the invalidation request that you previously created with the same <code>CallerReference</code>.</p> <p>If <code>CallerReference</code> is a value you already sent in a previous invalidation batch request but the content of any <code>Path</code> is different from the original request, CloudFront returns an <code>InvalidationBatchAlreadyExists</code> error.</p>
	 * @public
	 */
	CallerReference: string | undefined;
}
interface Invalidation {
	/**
	 * <p>The identifier for the invalidation request. For example: <code>IDFDVBD632BHDS5</code>.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>The status of the invalidation request. When the invalidation batch is finished, the status is <code>Completed</code>.</p>
	 * @public
	 */
	Status: string | undefined;
	/**
	 * <p>The date and time the invalidation request was first made.</p>
	 * @public
	 */
	CreateTime: Date | undefined;
	/**
	 * <p>The current invalidation information for the batch request.</p>
	 * @public
	 */
	InvalidationBatch: InvalidationBatch | undefined;
}
interface CreateInvalidationResult {
	/**
	 * <p>The fully qualified URI of the distribution and invalidation batch request, including the <code>Invalidation ID</code>.</p>
	 * @public
	 */
	Location?: string | undefined;
	/**
	 * <p>The invalidation's information.</p>
	 * @public
	 */
	Invalidation?: Invalidation | undefined;
}
interface GetDistributionResult {
	/**
	 * <p>The distribution's information.</p>
	 * @public
	 */
	Distribution?: Distribution | undefined;
	/**
	 * <p>The current version of the distribution's information. For example: <code>E2QWRUHAPOMQZL</code>.</p>
	 * @public
	 */
	ETag?: string | undefined;
}
interface GetDistributionConfigResult {
	/**
	 * <p>The distribution's configuration information.</p>
	 * @public
	 */
	DistributionConfig?: DistributionConfig | undefined;
	/**
	 * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
	 * @public
	 */
	ETag?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link CreateDistributionCommand}.
 */
export interface CreateDistributionCommandOutput extends CreateDistributionResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateInvalidationCommand}.
 */
export interface CreateInvalidationCommandOutput extends CreateInvalidationResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteDistributionCommand}.
 */
export interface DeleteDistributionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetDistributionCommand}.
 */
export interface GetDistributionCommandOutput extends GetDistributionResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetDistributionConfigCommand}.
 */
export interface GetDistributionConfigCommandOutput extends GetDistributionConfigResult, MetadataBearer {
}
interface DistributionSummary {
	/**
	 * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.</p>
	 * @public
	 */
	ARN: string | undefined;
	/**
	 * <p>The current version of the distribution.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is propagated to all CloudFront edge locations.</p>
	 * @public
	 */
	Status: string | undefined;
	/**
	 * <p>The date and time the distribution was last modified.</p>
	 * @public
	 */
	LastModifiedTime: Date | undefined;
	/**
	 * <p>The domain name that corresponds to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
	 * @public
	 */
	DomainName: string | undefined;
	/**
	 * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
	 * @public
	 */
	Aliases: Aliases | undefined;
	/**
	 * <p>A complex type that contains information about origins for this distribution.</p>
	 * @public
	 */
	Origins: Origins | undefined;
	/**
	 * <p>A complex type that contains information about origin groups for this distribution.</p>
	 * @public
	 */
	OriginGroups?: OriginGroups | undefined;
	/**
	 * <p>A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.</p>
	 * @public
	 */
	DefaultCacheBehavior: DefaultCacheBehavior | undefined;
	/**
	 * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
	 * @public
	 */
	CacheBehaviors: CacheBehaviors | undefined;
	/**
	 * <p>A complex type that contains zero or more <code>CustomErrorResponses</code> elements.</p>
	 * @public
	 */
	CustomErrorResponses: CustomErrorResponses | undefined;
	/**
	 * <p>The comment originally specified when this distribution was created.</p>
	 * @public
	 */
	Comment: string | undefined;
	/**
	 * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A complex type that contains information about price class for this streaming distribution.</p>
	 * @public
	 */
	PriceClass: PriceClass | undefined;
	/**
	 * <p>Whether the distribution is enabled to accept user requests for content.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p>
	 * @public
	 */
	ViewerCertificate: ViewerCertificate | undefined;
	/**
	 * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
	 * @public
	 */
	Restrictions: Restrictions | undefined;
	/**
	 * <p>The Web ACL Id (if any) associated with the distribution.</p>
	 * @public
	 */
	WebACLId: string | undefined;
	/**
	 * <p>Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't support <code>HTTP/2</code> will automatically use an earlier version.</p>
	 * @public
	 */
	HttpVersion: HttpVersion | undefined;
	/**
	 * <p>Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your distribution.</p>
	 * @public
	 */
	IsIPV6Enabled: boolean | undefined;
	/**
	 * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
	 * @public
	 */
	AliasICPRecordals?: AliasICPRecordal[] | undefined;
	/**
	 * <p>A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.</p>
	 * @public
	 */
	Staging: boolean | undefined;
	/**
	 * <p>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</p>
	 * @public
	 */
	ConnectionMode?: ConnectionMode | undefined;
	/**
	 * <p>ID of the Anycast static IP list that is associated with the distribution.</p>
	 * @public
	 */
	AnycastIpListId?: string | undefined;
	/**
	 * <p>The distribution's viewer mTLS configuration.</p>
	 * @public
	 */
	ViewerMtlsConfig?: ViewerMtlsConfig | undefined;
	/**
	 * <p>The distribution's connection function association.</p>
	 * @public
	 */
	ConnectionFunctionAssociation?: ConnectionFunctionAssociation | undefined;
}
interface DistributionList {
	/**
	 * <p>The value you provided for the <code>Marker</code> request parameter.</p>
	 * @public
	 */
	Marker: string | undefined;
	/**
	 * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your distributions where they left off.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
	 * @public
	 */
	MaxItems: number | undefined;
	/**
	 * <p>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list.</p>
	 * @public
	 */
	IsTruncated: boolean | undefined;
	/**
	 * <p>The number of distributions that were created by the current Amazon Web Services account.</p>
	 * @public
	 */
	Quantity: number | undefined;
	/**
	 * <p>A complex type that contains one <code>DistributionSummary</code> element for each distribution that was created by the current Amazon Web Services account.</p>
	 * @public
	 */
	Items?: DistributionSummary[] | undefined;
}
interface ListDistributionsResult {
	/**
	 * <p>The <code>DistributionList</code> type.</p>
	 * @public
	 */
	DistributionList?: DistributionList | undefined;
}
interface UpdateDistributionResult {
	/**
	 * <p>The distribution's information.</p>
	 * @public
	 */
	Distribution?: Distribution | undefined;
	/**
	 * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
	 * @public
	 */
	ETag?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link ListDistributionsCommand}.
 */
export interface ListDistributionsCommandOutput extends ListDistributionsResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateDistributionCommand}.
 */
export interface UpdateDistributionCommandOutput extends UpdateDistributionResult, MetadataBearer {
}

export {};
