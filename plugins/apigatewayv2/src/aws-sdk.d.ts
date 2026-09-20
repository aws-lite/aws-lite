// Generated from @aws-sdk/client-apigatewayv2@3.1136.0 by npm run gen. Do not edit.
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
declare const IpAddressType: {
	readonly dualstack: "dualstack";
	readonly ipv4: "ipv4";
};
type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];
declare const DeploymentStatus: {
	readonly DEPLOYED: "DEPLOYED";
	readonly FAILED: "FAILED";
	readonly PENDING: "PENDING";
};
type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];
declare const DomainNameStatus: {
	readonly AVAILABLE: "AVAILABLE";
	readonly PENDING_CERTIFICATE_REIMPORT: "PENDING_CERTIFICATE_REIMPORT";
	readonly PENDING_OWNERSHIP_VERIFICATION: "PENDING_OWNERSHIP_VERIFICATION";
	readonly UPDATING: "UPDATING";
};
type DomainNameStatus = (typeof DomainNameStatus)[keyof typeof DomainNameStatus];
declare const EndpointType: {
	readonly EDGE: "EDGE";
	readonly REGIONAL: "REGIONAL";
};
type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];
declare const SecurityPolicy: {
	readonly TLS_1_0: "TLS_1_0";
	readonly TLS_1_2: "TLS_1_2";
};
type SecurityPolicy = (typeof SecurityPolicy)[keyof typeof SecurityPolicy];
declare const RoutingMode: {
	readonly API_MAPPING_ONLY: "API_MAPPING_ONLY";
	readonly ROUTING_RULE_ONLY: "ROUTING_RULE_ONLY";
	readonly ROUTING_RULE_THEN_API_MAPPING: "ROUTING_RULE_THEN_API_MAPPING";
};
type RoutingMode = (typeof RoutingMode)[keyof typeof RoutingMode];
declare const LoggingLevel: {
	readonly ERROR: "ERROR";
	readonly INFO: "INFO";
	readonly OFF: "OFF";
};
type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];
interface ApiMapping {
	/**
	 * <p>The API identifier.</p>
	 * @public
	 */
	ApiId: string | undefined;
	/**
	 * <p>The API mapping identifier.</p>
	 * @public
	 */
	ApiMappingId?: string | undefined;
	/**
	 * <p>The API mapping key.</p>
	 * @public
	 */
	ApiMappingKey?: string | undefined;
	/**
	 * <p>The API stage.</p>
	 * @public
	 */
	Stage: string | undefined;
}
interface Deployment {
	/**
	 * <p>Specifies whether a deployment was automatically released.</p>
	 * @public
	 */
	AutoDeployed?: boolean | undefined;
	/**
	 * <p>The date and time when the Deployment resource was created.</p>
	 * @public
	 */
	CreatedDate?: Date | undefined;
	/**
	 * <p>The identifier for the deployment.</p>
	 * @public
	 */
	DeploymentId?: string | undefined;
	/**
	 * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
	 * @public
	 */
	DeploymentStatus?: DeploymentStatus | undefined;
	/**
	 * <p>May contain additional feedback on the status of an API deployment.</p>
	 * @public
	 */
	DeploymentStatusMessage?: string | undefined;
	/**
	 * <p>The description for the deployment.</p>
	 * @public
	 */
	Description?: string | undefined;
}
interface DomainNameConfiguration {
	/**
	 * <p>A domain name for the API.</p>
	 * @public
	 */
	ApiGatewayDomainName?: string | undefined;
	/**
	 * <p>An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
	 * @public
	 */
	CertificateArn?: string | undefined;
	/**
	 * <p>The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.</p>
	 * @public
	 */
	CertificateName?: string | undefined;
	/**
	 * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
	 * @public
	 */
	CertificateUploadDate?: Date | undefined;
	/**
	 * <p>The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.</p>
	 * @public
	 */
	DomainNameStatus?: DomainNameStatus | undefined;
	/**
	 * <p>An optional text message containing detailed information about status of the domain name migration.</p>
	 * @public
	 */
	DomainNameStatusMessage?: string | undefined;
	/**
	 * <p>The endpoint type.</p>
	 * @public
	 */
	EndpointType?: EndpointType | undefined;
	/**
	 * <p>The Amazon Route 53 Hosted Zone ID of the endpoint.</p>
	 * @public
	 */
	HostedZoneId?: string | undefined;
	/**
	 * <p>The IP address types that can invoke the domain name. Use ipv4 to allow only IPv4 addresses to invoke your domain name, or use dualstack to allow both IPv4 and IPv6 addresses to invoke your domain name.</p>
	 * @public
	 */
	IpAddressType?: IpAddressType | undefined;
	/**
	 * <p>The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.</p>
	 * @public
	 */
	SecurityPolicy?: SecurityPolicy | undefined;
	/**
	 * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn</p>
	 * @public
	 */
	OwnershipVerificationCertificateArn?: string | undefined;
}
interface MutualTlsAuthentication {
	/**
	 * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.</p>
	 * @public
	 */
	TruststoreUri?: string | undefined;
	/**
	 * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
	 * @public
	 */
	TruststoreVersion?: string | undefined;
	/**
	 * <p>A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.</p>
	 * @public
	 */
	TruststoreWarnings?: string[] | undefined;
}
interface AccessLogSettings {
	/**
	 * <p>The ARN of the CloudWatch Logs log group to receive access logs.</p>
	 * @public
	 */
	DestinationArn?: string | undefined;
	/**
	 * <p>A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.</p>
	 * @public
	 */
	Format?: string | undefined;
}
interface RouteSettings {
	/**
	 * <p>Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
	 * @public
	 */
	DataTraceEnabled?: boolean | undefined;
	/**
	 * <p>Specifies whether detailed metrics are enabled.</p>
	 * @public
	 */
	DetailedMetricsEnabled?: boolean | undefined;
	/**
	 * <p>Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.</p>
	 * @public
	 */
	LoggingLevel?: LoggingLevel | undefined;
	/**
	 * <p>Specifies the throttling burst limit.</p>
	 * @public
	 */
	ThrottlingBurstLimit?: number | undefined;
	/**
	 * <p>Specifies the throttling rate limit.</p>
	 * @public
	 */
	ThrottlingRateLimit?: number | undefined;
}
interface CreateApiMappingResponse {
	/**
	 * <p>The API identifier.</p>
	 * @public
	 */
	ApiId?: string | undefined;
	/**
	 * <p>The API mapping identifier.</p>
	 * @public
	 */
	ApiMappingId?: string | undefined;
	/**
	 * <p>The API mapping key.</p>
	 * @public
	 */
	ApiMappingKey?: string | undefined;
	/**
	 * <p>The API stage.</p>
	 * @public
	 */
	Stage?: string | undefined;
}
interface CreateDeploymentResponse {
	/**
	 * <p>Specifies whether a deployment was automatically released.</p>
	 * @public
	 */
	AutoDeployed?: boolean | undefined;
	/**
	 * <p>The date and time when the Deployment resource was created.</p>
	 * @public
	 */
	CreatedDate?: Date | undefined;
	/**
	 * <p>The identifier for the deployment.</p>
	 * @public
	 */
	DeploymentId?: string | undefined;
	/**
	 * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
	 * @public
	 */
	DeploymentStatus?: DeploymentStatus | undefined;
	/**
	 * <p>May contain additional feedback on the status of an API deployment.</p>
	 * @public
	 */
	DeploymentStatusMessage?: string | undefined;
	/**
	 * <p>The description for the deployment.</p>
	 * @public
	 */
	Description?: string | undefined;
}
interface CreateDomainNameResponse {
	/**
	 * <p>The API mapping selection expression.</p>
	 * @public
	 */
	ApiMappingSelectionExpression?: string | undefined;
	/**
	 * <p>The name of the DomainName resource.</p>
	 * @public
	 */
	DomainName?: string | undefined;
	/**
	 * <p>Represents an Amazon Resource Name (ARN).</p>
	 * @public
	 */
	DomainNameArn?: string | undefined;
	/**
	 * <p>The domain name configurations.</p>
	 * @public
	 */
	DomainNameConfigurations?: DomainNameConfiguration[] | undefined;
	/**
	 * <p>The mutual TLS authentication configuration for a custom domain name.</p>
	 * @public
	 */
	MutualTlsAuthentication?: MutualTlsAuthentication | undefined;
	/**
	 * <p>The routing mode.</p>
	 * @public
	 */
	RoutingMode?: RoutingMode | undefined;
	/**
	 * <p>The collection of tags associated with a domain name.</p>
	 * @public
	 */
	Tags?: Record<string, string> | undefined;
}
interface GetApiMappingsResponse {
	/**
	 * <p>The elements from this collection.</p>
	 * @public
	 */
	Items?: ApiMapping[] | undefined;
	/**
	 * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface GetDeploymentResponse {
	/**
	 * <p>Specifies whether a deployment was automatically released.</p>
	 * @public
	 */
	AutoDeployed?: boolean | undefined;
	/**
	 * <p>The date and time when the Deployment resource was created.</p>
	 * @public
	 */
	CreatedDate?: Date | undefined;
	/**
	 * <p>The identifier for the deployment.</p>
	 * @public
	 */
	DeploymentId?: string | undefined;
	/**
	 * <p>The status of the deployment: PENDING, FAILED, or SUCCEEDED.</p>
	 * @public
	 */
	DeploymentStatus?: DeploymentStatus | undefined;
	/**
	 * <p>May contain additional feedback on the status of an API deployment.</p>
	 * @public
	 */
	DeploymentStatusMessage?: string | undefined;
	/**
	 * <p>The description for the deployment.</p>
	 * @public
	 */
	Description?: string | undefined;
}
interface GetDeploymentsResponse {
	/**
	 * <p>The elements from this collection.</p>
	 * @public
	 */
	Items?: Deployment[] | undefined;
	/**
	 * <p>The next page of elements from this collection. Not valid for the last element of the collection.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface UpdateStageResponse {
	/**
	 * <p>Settings for logging access in this stage.</p>
	 * @public
	 */
	AccessLogSettings?: AccessLogSettings | undefined;
	/**
	 * <p>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</p>
	 * @public
	 */
	ApiGatewayManaged?: boolean | undefined;
	/**
	 * <p>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</p>
	 * @public
	 */
	AutoDeploy?: boolean | undefined;
	/**
	 * <p>The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.</p>
	 * @public
	 */
	ClientCertificateId?: string | undefined;
	/**
	 * <p>The timestamp when the stage was created.</p>
	 * @public
	 */
	CreatedDate?: Date | undefined;
	/**
	 * <p>Default route settings for the stage.</p>
	 * @public
	 */
	DefaultRouteSettings?: RouteSettings | undefined;
	/**
	 * <p>The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.</p>
	 * @public
	 */
	DeploymentId?: string | undefined;
	/**
	 * <p>The description of the stage.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</p>
	 * @public
	 */
	LastDeploymentStatusMessage?: string | undefined;
	/**
	 * <p>The timestamp when the stage was last updated.</p>
	 * @public
	 */
	LastUpdatedDate?: Date | undefined;
	/**
	 * <p>Route settings for the stage, by routeKey.</p>
	 * @public
	 */
	RouteSettings?: Record<string, RouteSettings> | undefined;
	/**
	 * <p>The name of the stage.</p>
	 * @public
	 */
	StageName?: string | undefined;
	/**
	 * <p>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.</p>
	 * @public
	 */
	StageVariables?: Record<string, string> | undefined;
	/**
	 * <p>The collection of tags. Each tag element is associated with a given resource.</p>
	 * @public
	 */
	Tags?: Record<string, string> | undefined;
}
/**
 * @public
 *
 * The output of {@link CreateApiMappingCommand}.
 */
export interface CreateApiMappingCommandOutput extends CreateApiMappingResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateDomainNameCommand}.
 */
export interface CreateDomainNameCommandOutput extends CreateDomainNameResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteApiMappingCommand}.
 */
export interface DeleteApiMappingCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteDomainNameCommand}.
 */
export interface DeleteDomainNameCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetApiMappingsCommand}.
 */
export interface GetApiMappingsCommandOutput extends GetApiMappingsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends GetDeploymentResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetDeploymentsCommand}.
 */
export interface GetDeploymentsCommandOutput extends GetDeploymentsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateStageCommand}.
 */
export interface UpdateStageCommandOutput extends UpdateStageResponse, MetadataBearer {
}

export {};
