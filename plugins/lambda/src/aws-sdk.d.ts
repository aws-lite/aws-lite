// Generated from @aws-sdk/client-lambda@3.1136.0 by npm run gen. Do not edit.
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
interface IUint8ArrayBlobAdapter extends Uint8Array {
	/**
	 * @param encoding - default 'utf-8'.
	 * @returns the blob as string.
	 */
	transformToString(encoding?: string): string;
}
interface Uint8ArrayBlobAdapterConstructor {
	new (...args: any): IUint8ArrayBlobAdapter;
	fromString(source: string, encoding?: string): IUint8ArrayBlobAdapter;
	mutate(source: Uint8Array): IUint8ArrayBlobAdapter;
}
declare const Uint8ArrayBlobAdapter_base: Uint8ArrayBlobAdapterConstructor;
declare class Uint8ArrayBlobAdapter extends Uint8ArrayBlobAdapter_base {
}
declare const FunctionUrlAuthType: {
	readonly AWS_IAM: "AWS_IAM";
	readonly NONE: "NONE";
};
type FunctionUrlAuthType = (typeof FunctionUrlAuthType)[keyof typeof FunctionUrlAuthType];
declare const KafkaSchemaRegistryAuthType: {
	readonly BASIC_AUTH: "BASIC_AUTH";
	readonly CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH";
	readonly SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE";
};
type KafkaSchemaRegistryAuthType = (typeof KafkaSchemaRegistryAuthType)[keyof typeof KafkaSchemaRegistryAuthType];
declare const SchemaRegistryEventRecordFormat: {
	readonly JSON: "JSON";
	readonly SOURCE: "SOURCE";
};
type SchemaRegistryEventRecordFormat = (typeof SchemaRegistryEventRecordFormat)[keyof typeof SchemaRegistryEventRecordFormat];
declare const KafkaSchemaValidationAttribute: {
	readonly KEY: "KEY";
	readonly VALUE: "VALUE";
};
type KafkaSchemaValidationAttribute = (typeof KafkaSchemaValidationAttribute)[keyof typeof KafkaSchemaValidationAttribute];
declare const ApplicationLogLevel: {
	readonly Debug: "DEBUG";
	readonly Error: "ERROR";
	readonly Fatal: "FATAL";
	readonly Info: "INFO";
	readonly Trace: "TRACE";
	readonly Warn: "WARN";
};
type ApplicationLogLevel = (typeof ApplicationLogLevel)[keyof typeof ApplicationLogLevel];
declare const Architecture: {
	readonly arm64: "arm64";
	readonly x86_64: "x86_64";
};
type Architecture = (typeof Architecture)[keyof typeof Architecture];
declare const SystemLogLevel: {
	readonly Debug: "DEBUG";
	readonly Info: "INFO";
	readonly Warn: "WARN";
};
type SystemLogLevel = (typeof SystemLogLevel)[keyof typeof SystemLogLevel];
declare const State: {
	readonly Active: "Active";
	readonly ActiveNonInvocable: "ActiveNonInvocable";
	readonly Deactivated: "Deactivated";
	readonly Deactivating: "Deactivating";
	readonly Deleting: "Deleting";
	readonly Failed: "Failed";
	readonly Inactive: "Inactive";
	readonly Pending: "Pending";
};
type State = (typeof State)[keyof typeof State];
declare const CodeSigningPolicy: {
	readonly Enforce: "Enforce";
	readonly Warn: "Warn";
};
type CodeSigningPolicy = (typeof CodeSigningPolicy)[keyof typeof CodeSigningPolicy];
declare const FullDocument: {
	readonly Default: "Default";
	readonly UpdateLookup: "UpdateLookup";
};
type FullDocument = (typeof FullDocument)[keyof typeof FullDocument];
declare const FunctionResponseType: {
	readonly ReportBatchItemFailures: "ReportBatchItemFailures";
};
type FunctionResponseType = (typeof FunctionResponseType)[keyof typeof FunctionResponseType];
declare const EventSourceMappingSystemLogLevel: {
	readonly Debug: "DEBUG";
	readonly Info: "INFO";
	readonly Warn: "WARN";
};
type EventSourceMappingSystemLogLevel = (typeof EventSourceMappingSystemLogLevel)[keyof typeof EventSourceMappingSystemLogLevel];
declare const EventSourceMappingMetric: {
	readonly ErrorCount: "ErrorCount";
	readonly EventCount: "EventCount";
	readonly KafkaMetrics: "KafkaMetrics";
};
type EventSourceMappingMetric = (typeof EventSourceMappingMetric)[keyof typeof EventSourceMappingMetric];
declare const EndPointType: {
	readonly KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS";
};
type EndPointType = (typeof EndPointType)[keyof typeof EndPointType];
declare const SourceAccessType: {
	readonly BASIC_AUTH: "BASIC_AUTH";
	readonly CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH";
	readonly SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH";
	readonly SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH";
	readonly SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE";
	readonly VIRTUAL_HOST: "VIRTUAL_HOST";
	readonly VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP";
	readonly VPC_SUBNET: "VPC_SUBNET";
};
type SourceAccessType = (typeof SourceAccessType)[keyof typeof SourceAccessType];
declare const EventSourcePosition: {
	readonly AT_TIMESTAMP: "AT_TIMESTAMP";
	readonly LATEST: "LATEST";
	readonly TRIM_HORIZON: "TRIM_HORIZON";
};
type EventSourcePosition = (typeof EventSourcePosition)[keyof typeof EventSourcePosition];
declare const DirectS3Read: {
	readonly AUTO: "AUTO";
	readonly DISABLED: "DISABLED";
	readonly ENABLED: "ENABLED";
};
type DirectS3Read = (typeof DirectS3Read)[keyof typeof DirectS3Read];
declare const LogFormat: {
	readonly Json: "JSON";
	readonly Text: "Text";
};
type LogFormat = (typeof LogFormat)[keyof typeof LogFormat];
declare const PackageType: {
	readonly Image: "Image";
	readonly Zip: "Zip";
};
type PackageType = (typeof PackageType)[keyof typeof PackageType];
declare const Runtime: {
	readonly dotnet10: "dotnet10";
	readonly dotnet6: "dotnet6";
	readonly dotnet8: "dotnet8";
	readonly dotnetcore10: "dotnetcore1.0";
	readonly dotnetcore20: "dotnetcore2.0";
	readonly dotnetcore21: "dotnetcore2.1";
	readonly dotnetcore31: "dotnetcore3.1";
	readonly go1x: "go1.x";
	readonly java11: "java11";
	readonly java11al2023: "java11.al2023";
	readonly java17: "java17";
	readonly java17al2023: "java17.al2023";
	readonly java21: "java21";
	readonly java25: "java25";
	readonly java8: "java8";
	readonly java8al2: "java8.al2";
	readonly java8al2023: "java8.al2023";
	readonly nodejs: "nodejs";
	readonly nodejs10x: "nodejs10.x";
	readonly nodejs12x: "nodejs12.x";
	readonly nodejs14x: "nodejs14.x";
	readonly nodejs16x: "nodejs16.x";
	readonly nodejs18x: "nodejs18.x";
	readonly nodejs20x: "nodejs20.x";
	readonly nodejs22x: "nodejs22.x";
	readonly nodejs24x: "nodejs24.x";
	readonly nodejs26x: "nodejs26.x";
	readonly nodejs43: "nodejs4.3";
	readonly nodejs43edge: "nodejs4.3-edge";
	readonly nodejs610: "nodejs6.10";
	readonly nodejs810: "nodejs8.10";
	readonly provided: "provided";
	readonly providedal2: "provided.al2";
	readonly providedal2023: "provided.al2023";
	readonly python27: "python2.7";
	readonly python310: "python3.10";
	readonly python311: "python3.11";
	readonly python312: "python3.12";
	readonly python313: "python3.13";
	readonly python314: "python3.14";
	readonly python315: "python3.15";
	readonly python36: "python3.6";
	readonly python37: "python3.7";
	readonly python38: "python3.8";
	readonly python39: "python3.9";
	readonly ruby25: "ruby2.5";
	readonly ruby27: "ruby2.7";
	readonly ruby32: "ruby3.2";
	readonly ruby33: "ruby3.3";
	readonly ruby34: "ruby3.4";
	readonly ruby40: "ruby4.0";
};
type Runtime = (typeof Runtime)[keyof typeof Runtime];
declare const SnapStartApplyOn: {
	readonly None: "None";
	readonly PublishedVersions: "PublishedVersions";
};
type SnapStartApplyOn = (typeof SnapStartApplyOn)[keyof typeof SnapStartApplyOn];
declare const TenantIsolationMode: {
	readonly PER_TENANT: "PER_TENANT";
};
type TenantIsolationMode = (typeof TenantIsolationMode)[keyof typeof TenantIsolationMode];
declare const TracingMode: {
	readonly Active: "Active";
	readonly PassThrough: "PassThrough";
};
type TracingMode = (typeof TracingMode)[keyof typeof TracingMode];
declare const LastUpdateStatus: {
	readonly Failed: "Failed";
	readonly InProgress: "InProgress";
	readonly Successful: "Successful";
};
type LastUpdateStatus = (typeof LastUpdateStatus)[keyof typeof LastUpdateStatus];
declare const LastUpdateStatusReasonCode: {
	readonly CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded";
	readonly DependencyError: "DependencyError";
	readonly DisabledKMSKey: "DisabledKMSKey";
	readonly DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl";
	readonly EC2RequestLimitExceeded: "EC2RequestLimitExceeded";
	readonly EFSIOError: "EFSIOError";
	readonly EFSMountConnectivityError: "EFSMountConnectivityError";
	readonly EFSMountFailure: "EFSMountFailure";
	readonly EFSMountTimeout: "EFSMountTimeout";
	readonly EniLimitExceeded: "EniLimitExceeded";
	readonly FunctionError: "FunctionError";
	readonly FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError";
	readonly FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted";
	readonly FunctionErrorInitTimeout: "FunctionError.InitTimeout";
	readonly FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint";
	readonly FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory";
	readonly FunctionErrorPermissionDenied: "FunctionError.PermissionDenied";
	readonly FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError";
	readonly FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions";
	readonly ImageAccessDenied: "ImageAccessDenied";
	readonly ImageDeleted: "ImageDeleted";
	readonly InsufficientCapacity: "InsufficientCapacity";
	readonly InsufficientRolePermissions: "InsufficientRolePermissions";
	readonly InternalError: "InternalError";
	readonly InvalidConfiguration: "InvalidConfiguration";
	readonly InvalidImage: "InvalidImage";
	readonly InvalidRuntime: "InvalidRuntime";
	readonly InvalidSecurityGroup: "InvalidSecurityGroup";
	readonly InvalidStateKMSKey: "InvalidStateKMSKey";
	readonly InvalidSubnet: "InvalidSubnet";
	readonly InvalidZipFileException: "InvalidZipFileException";
	readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
	readonly KMSKeyNotFound: "KMSKeyNotFound";
	readonly ServiceQuotaExceededException: "ServiceQuotaExceededException";
	readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
	readonly VcpuLimitExceeded: "VcpuLimitExceeded";
};
type LastUpdateStatusReasonCode = (typeof LastUpdateStatusReasonCode)[keyof typeof LastUpdateStatusReasonCode];
declare const SnapStartOptimizationStatus: {
	readonly Off: "Off";
	readonly On: "On";
};
type SnapStartOptimizationStatus = (typeof SnapStartOptimizationStatus)[keyof typeof SnapStartOptimizationStatus];
declare const StateReasonCode: {
	readonly CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded";
	readonly Creating: "Creating";
	readonly DependencyError: "DependencyError";
	readonly DisabledKMSKey: "DisabledKMSKey";
	readonly DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl";
	readonly DrainingDurableExecutions: "DrainingDurableExecutions";
	readonly EC2RequestLimitExceeded: "EC2RequestLimitExceeded";
	readonly EFSIOError: "EFSIOError";
	readonly EFSMountConnectivityError: "EFSMountConnectivityError";
	readonly EFSMountFailure: "EFSMountFailure";
	readonly EFSMountTimeout: "EFSMountTimeout";
	readonly EniLimitExceeded: "EniLimitExceeded";
	readonly FunctionError: "FunctionError";
	readonly FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError";
	readonly FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted";
	readonly FunctionErrorInitTimeout: "FunctionError.InitTimeout";
	readonly FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint";
	readonly FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory";
	readonly FunctionErrorPermissionDenied: "FunctionError.PermissionDenied";
	readonly FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError";
	readonly FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions";
	readonly Idle: "Idle";
	readonly ImageAccessDenied: "ImageAccessDenied";
	readonly ImageDeleted: "ImageDeleted";
	readonly InsufficientCapacity: "InsufficientCapacity";
	readonly InsufficientRolePermissions: "InsufficientRolePermissions";
	readonly InternalError: "InternalError";
	readonly InvalidConfiguration: "InvalidConfiguration";
	readonly InvalidImage: "InvalidImage";
	readonly InvalidRuntime: "InvalidRuntime";
	readonly InvalidSecurityGroup: "InvalidSecurityGroup";
	readonly InvalidStateKMSKey: "InvalidStateKMSKey";
	readonly InvalidSubnet: "InvalidSubnet";
	readonly InvalidZipFileException: "InvalidZipFileException";
	readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
	readonly KMSKeyNotFound: "KMSKeyNotFound";
	readonly Restoring: "Restoring";
	readonly ServiceQuotaExceededException: "ServiceQuotaExceededException";
	readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
	readonly VcpuLimitExceeded: "VcpuLimitExceeded";
};
type StateReasonCode = (typeof StateReasonCode)[keyof typeof StateReasonCode];
declare const InvokeMode: {
	readonly BUFFERED: "BUFFERED";
	readonly RESPONSE_STREAM: "RESPONSE_STREAM";
};
type InvokeMode = (typeof InvokeMode)[keyof typeof InvokeMode];
declare const UpdateRuntimeOn: {
	readonly Auto: "Auto";
	readonly FunctionUpdate: "FunctionUpdate";
	readonly Manual: "Manual";
};
type UpdateRuntimeOn = (typeof UpdateRuntimeOn)[keyof typeof UpdateRuntimeOn];
declare const ProvisionedConcurrencyStatusEnum: {
	readonly FAILED: "FAILED";
	readonly IN_PROGRESS: "IN_PROGRESS";
	readonly READY: "READY";
};
type ProvisionedConcurrencyStatusEnum = (typeof ProvisionedConcurrencyStatusEnum)[keyof typeof ProvisionedConcurrencyStatusEnum];
interface AccountLimit {
	/**
	 * <p>The amount of storage space that you can use for all deployment packages and layer archives.</p>
	 * @public
	 */
	TotalCodeSize?: number | undefined;
	/**
	 * <p>The maximum size of a function's deployment package and layers when they're extracted.</p>
	 * @public
	 */
	CodeSizeUnzipped?: number | undefined;
	/**
	 * <p>The maximum size of a deployment package when it's uploaded directly to Lambda. Use Amazon S3 for larger files.</p>
	 * @public
	 */
	CodeSizeZipped?: number | undefined;
	/**
	 * <p>The maximum number of simultaneous function executions.</p>
	 * @public
	 */
	ConcurrentExecutions?: number | undefined;
	/**
	 * <p>The maximum number of simultaneous function executions, minus the capacity that's reserved for individual functions with <a>PutFunctionConcurrency</a>.</p>
	 * @public
	 */
	UnreservedConcurrentExecutions?: number | undefined;
}
interface AccountUsage {
	/**
	 * <p>The amount of storage space, in bytes, that's being used by deployment packages and layer archives.</p>
	 * @public
	 */
	TotalCodeSize?: number | undefined;
	/**
	 * <p>The number of Lambda functions.</p>
	 * @public
	 */
	FunctionCount?: number | undefined;
}
interface AddLayerVersionPermissionResponse {
	/**
	 * <p>The permission statement.</p>
	 * @public
	 */
	Statement?: string | undefined;
	/**
	 * <p>A unique identifier for the current revision of the policy.</p>
	 * @public
	 */
	RevisionId?: string | undefined;
}
interface AddPermissionResponse {
	/**
	 * <p>The permission statement that's added to the function policy.</p>
	 * @public
	 */
	Statement?: string | undefined;
}
interface AliasRoutingConfiguration {
	/**
	 * <p>The second version, and the percentage of traffic that's routed to it.</p>
	 * @public
	 */
	AdditionalVersionWeights?: Record<string, number> | undefined;
}
interface AliasConfiguration {
	/**
	 * <p>The Amazon Resource Name (ARN) of the alias.</p>
	 * @public
	 */
	AliasArn?: string | undefined;
	/**
	 * <p>The name of the alias.</p>
	 * @public
	 */
	Name?: string | undefined;
	/**
	 * <p>The function version that the alias invokes.</p>
	 * @public
	 */
	FunctionVersion?: string | undefined;
	/**
	 * <p>A description of the alias.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing configuration</a> of the alias.</p>
	 * @public
	 */
	RoutingConfig?: AliasRoutingConfiguration | undefined;
	/**
	 * <p>A unique identifier that changes when you update the alias.</p>
	 * @public
	 */
	RevisionId?: string | undefined;
}
interface AllowedPublishers {
	/**
	 * <p>The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package. </p>
	 * @public
	 */
	SigningProfileVersionArns: string[] | undefined;
}
interface KafkaSchemaRegistryAccessConfig {
	/**
	 * <p> The type of authentication Lambda uses to access your schema registry. </p>
	 * @public
	 */
	Type?: KafkaSchemaRegistryAuthType | undefined;
	/**
	 * <p> The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry. </p>
	 * @public
	 */
	URI?: string | undefined;
}
interface KafkaSchemaValidationConfig {
	/**
	 * <p> The attributes you want your schema registry to validate and filter for. If you selected <code>JSON</code> as the <code>EventRecordFormat</code>, Lambda also deserializes the selected message attributes. </p>
	 * @public
	 */
	Attribute?: KafkaSchemaValidationAttribute | undefined;
}
interface KafkaSchemaRegistryConfig {
	/**
	 * <p>The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.</p> <ul> <li> <p>For Glue schema registries, use the ARN of the registry.</p> </li> <li> <p>For Confluent schema registries, use the URL of the registry.</p> </li> </ul>
	 * @public
	 */
	SchemaRegistryURI?: string | undefined;
	/**
	 * <p>The record format that Lambda delivers to your function after schema validation.</p> <ul> <li> <p>Choose <code>JSON</code> to have Lambda deliver the record to your function as a standard JSON object.</p> </li> <li> <p>Choose <code>SOURCE</code> to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.</p> </li> </ul>
	 * @public
	 */
	EventRecordFormat?: SchemaRegistryEventRecordFormat | undefined;
	/**
	 * <p>An array of access configuration objects that tell Lambda how to authenticate with your schema registry.</p>
	 * @public
	 */
	AccessConfigs?: KafkaSchemaRegistryAccessConfig[] | undefined;
	/**
	 * <p>An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.</p>
	 * @public
	 */
	SchemaValidationConfigs?: KafkaSchemaValidationConfig[] | undefined;
}
interface AmazonManagedKafkaEventSourceConfig {
	/**
	 * <p>The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.</p>
	 * @public
	 */
	ConsumerGroupId?: string | undefined;
	/**
	 * <p>Specific configuration settings for a Kafka schema registry.</p>
	 * @public
	 */
	SchemaRegistryConfig?: KafkaSchemaRegistryConfig | undefined;
}
interface CodeSigningPolicies {
	/**
	 * <p>Code signing configuration policy for deployment validation failure. If you set the policy to <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the policy to <code>Warn</code>, Lambda allows the deployment and issues a new Amazon CloudWatch metric (<code>SignatureValidationErrors</code>) and also stores the warning in the CloudTrail log.</p> <p>Default value: <code>Warn</code> </p>
	 * @public
	 */
	UntrustedArtifactOnDeployment?: CodeSigningPolicy | undefined;
}
interface CodeSigningConfig {
	/**
	 * <p>Unique identifer for the Code signing configuration.</p>
	 * @public
	 */
	CodeSigningConfigId: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the Code signing configuration.</p>
	 * @public
	 */
	CodeSigningConfigArn: string | undefined;
	/**
	 * <p>Code signing configuration description.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>List of allowed publishers.</p>
	 * @public
	 */
	AllowedPublishers: AllowedPublishers | undefined;
	/**
	 * <p>The code signing policy controls the validation failure action for signature mismatch or expiry.</p>
	 * @public
	 */
	CodeSigningPolicies: CodeSigningPolicies | undefined;
	/**
	 * <p>The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD). </p>
	 * @public
	 */
	LastModified: string | undefined;
}
interface CreateCodeSigningConfigResponse {
	/**
	 * <p>The code signing configuration.</p>
	 * @public
	 */
	CodeSigningConfig: CodeSigningConfig | undefined;
}
interface DeleteCodeSigningConfigResponse {
}
interface GetCodeSigningConfigResponse {
	/**
	 * <p>The code signing configuration</p>
	 * @public
	 */
	CodeSigningConfig: CodeSigningConfig | undefined;
}
interface ListCodeSigningConfigsResponse {
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>The code signing configurations</p>
	 * @public
	 */
	CodeSigningConfigs?: CodeSigningConfig[] | undefined;
}
interface ListFunctionsByCodeSigningConfigResponse {
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>The function ARNs. </p>
	 * @public
	 */
	FunctionArns?: string[] | undefined;
}
interface UpdateCodeSigningConfigResponse {
	/**
	 * <p>The code signing configuration</p>
	 * @public
	 */
	CodeSigningConfig: CodeSigningConfig | undefined;
}
interface DeleteFunctionResponse {
	/**
	 * <p>The HTTP status code returned by the operation.</p>
	 * @public
	 */
	StatusCode?: number | undefined;
}
interface DurableConfig {
	/**
	 * <p>The ARN of the Key Management Service (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.</p>
	 * @public
	 */
	KMSKeyArn?: string | undefined;
	/**
	 * <p>The number of days to retain execution history after a durable execution completes. After this period, execution history is no longer available through the GetDurableExecutionHistory API.</p>
	 * @public
	 */
	RetentionPeriodInDays?: number | undefined;
	/**
	 * <p>The maximum time (in seconds) that a durable execution can run before timing out. This timeout applies to the entire durable execution, not individual function invocations.</p>
	 * @public
	 */
	ExecutionTimeout?: number | undefined;
}
interface OnFailure {
	/**
	 * <p>The Amazon Resource Name (ARN) of the destination resource.</p> <p>To retain records of failed invocations from <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html">Kinesis</a>, <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html">DynamoDB</a>, <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html">self-managed Apache Kafka</a>, or <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html">Amazon MSK</a>, you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, or Kafka topic as the destination.</p> <note> <p>Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending <code>OnFailure</code> event to the destination. For details on this behavior, refer to <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html">Retaining records of asynchronous invocations</a>.</p> </note> <p>To retain records of failed invocations from <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html">Kinesis</a>, <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html">DynamoDB</a>, <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination">self-managed Kafka</a> or <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination">Amazon MSK</a>, you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.</p>
	 * @public
	 */
	Destination?: string | undefined;
}
interface OnSuccess {
	/**
	 * <p>The Amazon Resource Name (ARN) of the destination resource.</p> <note> <p>Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending <code>OnFailure</code> event to the destination. For details on this behavior, refer to <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html">Retaining records of asynchronous invocations</a>.</p> </note>
	 * @public
	 */
	Destination?: string | undefined;
}
interface DestinationConfig {
	/**
	 * <p>The destination configuration for successful invocations. Not supported in <code>CreateEventSourceMapping</code> or <code>UpdateEventSourceMapping</code>.</p>
	 * @public
	 */
	OnSuccess?: OnSuccess | undefined;
	/**
	 * <p>The destination configuration for failed invocations.</p>
	 * @public
	 */
	OnFailure?: OnFailure | undefined;
}
interface DocumentDBEventSourceConfig {
	/**
	 * <p> The name of the database to consume within the DocumentDB cluster. </p>
	 * @public
	 */
	DatabaseName?: string | undefined;
	/**
	 * <p> The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections. </p>
	 * @public
	 */
	CollectionName?: string | undefined;
	/**
	 * <p> Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. </p>
	 * @public
	 */
	FullDocument?: FullDocument | undefined;
}
interface Filter {
	/**
	 * <p> A filter pattern. For more information on the syntax of a filter pattern, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax"> Filter rule syntax</a>. </p>
	 * @public
	 */
	Pattern?: string | undefined;
}
interface FilterCriteria {
	/**
	 * <p> A list of filters. </p>
	 * @public
	 */
	Filters?: Filter[] | undefined;
}
interface EventSourceMappingLoggingConfig {
	/**
	 * <p> The log level you want your event source mapping to use. Lambda event poller only sends system logs at the selected level of detail and lower, where <code>DEBUG</code> is the highest level and <code>WARN</code> is the lowest. For more information about these metrics, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html"> Event source mapping logging</a>. </p>
	 * @public
	 */
	SystemLogLevel?: EventSourceMappingSystemLogLevel | undefined;
}
interface EventSourceMappingMetricsConfig {
	/**
	 * <p> The metrics you want your event source mapping to produce, including <code>EventCount</code>, <code>ErrorCount</code>, <code>KafkaMetrics</code>. </p> <ul> <li> <p> <code>EventCount</code> to receive metrics related to the number of events processed by your event source mapping.</p> </li> <li> <p> <code>ErrorCount</code> (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the number of errors in your event source mapping processing.</p> </li> <li> <p> <code>KafkaMetrics</code> (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the Kafka consumers from your event source mapping.</p> </li> </ul> <p> For more information about these metrics, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics"> Event source mapping metrics</a>. </p>
	 * @public
	 */
	Metrics?: EventSourceMappingMetric[] | undefined;
}
interface ProvisionedPollerConfig {
	/**
	 * <p>The minimum number of event pollers this event source can scale down to. For Amazon SQS events source mappings, default is 2, and minimum 2 required. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 1.</p>
	 * @public
	 */
	MinimumPollers?: number | undefined;
	/**
	 * <p>The maximum number of event pollers this event source can scale up to. For Amazon SQS event source mappings, the accepted range is between 2 and 10,000, with a default of 200. For Amazon MSK and self-managed Apache Kafka event source mappings, the accepted range is between 1 and 2,000, with a default of 200.</p>
	 * @public
	 */
	MaximumPollers?: number | undefined;
	/**
	 * <p>(Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group. Use this option to group multiple ESMs within the event source's VPC to share Event Poller Unit (EPU) capacity. You can use this option to optimize Provisioned mode costs for your ESMs. You can group up to 100 ESMs per poller group and aggregate maximum pollers across all ESMs in a group cannot exceed 2000.</p>
	 * @public
	 */
	PollerGroupName?: string | undefined;
}
interface ScalingConfig {
	/**
	 * <p>Limits the number of concurrent instances that the Amazon SQS event source can invoke.</p>
	 * @public
	 */
	MaximumConcurrency?: number | undefined;
}
interface SelfManagedEventSource {
	/**
	 * <p>The list of bootstrap servers for your Kafka brokers in the following format: <code>"KAFKA_BOOTSTRAP_SERVERS": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]</code>.</p>
	 * @public
	 */
	Endpoints?: Partial<Record<EndPointType, string[]>> | undefined;
}
interface SelfManagedKafkaEventSourceConfig {
	/**
	 * <p> The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add">Customizable consumer group ID</a>.</p>
	 * @public
	 */
	ConsumerGroupId?: string | undefined;
	/**
	 * <p>Specific configuration settings for a Kafka schema registry.</p>
	 * @public
	 */
	SchemaRegistryConfig?: KafkaSchemaRegistryConfig | undefined;
}
interface SourceAccessConfiguration {
	/**
	 * <p>The type of authentication protocol, VPC components, or virtual host for your event source. For example: <code>"Type":"SASL_SCRAM_512_AUTH"</code>.</p> <ul> <li> <p> <code>BASIC_AUTH</code> – (Amazon MQ) The Secrets Manager secret that stores your broker credentials.</p> </li> <li> <p> <code>BASIC_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.</p> </li> <li> <p> <code>VPC_SUBNET</code> – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.</p> </li> <li> <p> <code>VPC_SECURITY_GROUP</code> – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>SASL_SCRAM_256_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>SASL_SCRAM_512_AUTH</code> – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>VIRTUAL_HOST</code> –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.</p> </li> <li> <p> <code>CLIENT_CERTIFICATE_TLS_AUTH</code> – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.</p> </li> <li> <p> <code>SERVER_ROOT_CA_CERTIFICATE</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers. </p> </li> </ul>
	 * @public
	 */
	Type?: SourceAccessType | undefined;
	/**
	 * <p>The value for your chosen configuration in <code>Type</code>. For example: <code>"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"</code>.</p>
	 * @public
	 */
	URI?: string | undefined;
}
interface FilterCriteriaError {
	/**
	 * <p>The KMS exception that resulted from filter criteria encryption or decryption.</p>
	 * @public
	 */
	ErrorCode?: string | undefined;
	/**
	 * <p>The error message.</p>
	 * @public
	 */
	Message?: string | undefined;
}
interface EventSourceMappingConfiguration {
	/**
	 * <p>The identifier of the event source mapping.</p>
	 * @public
	 */
	UUID?: string | undefined;
	/**
	 * <p>The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.</p>
	 * @public
	 */
	StartingPosition?: EventSourcePosition | undefined;
	/**
	 * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future.</p>
	 * @public
	 */
	StartingPositionTimestamp?: Date | undefined;
	/**
	 * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <p>Default value: Varies by service. For Amazon SQS, the default is 10. For all other services, the default is 100.</p> <p>Related setting: When you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
	 * @public
	 */
	BatchSize?: number | undefined;
	/**
	 * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
	 * @public
	 */
	MaximumBatchingWindowInSeconds?: number | undefined;
	/**
	 * <p>(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
	 * @public
	 */
	ParallelizationFactor?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the event source.</p>
	 * @public
	 */
	EventSourceArn?: string | undefined;
	/**
	 * <p>An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.</p> <p>If filter criteria is encrypted, this field shows up as <code>null</code> in the response of ListEventSourceMapping API calls. You can view this field in plaintext in the response of GetEventSourceMapping and DeleteEventSourceMapping calls if you have <code>kms:Decrypt</code> permissions for the correct KMS key.</p>
	 * @public
	 */
	FilterCriteria?: FilterCriteria | undefined;
	/**
	 * <p>An object that contains details about an error related to filter criteria encryption.</p>
	 * @public
	 */
	FilterCriteriaError?: FilterCriteriaError | undefined;
	/**
	 * <p> The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics">filter criteria</a>.</p>
	 * @public
	 */
	KMSKeyArn?: string | undefined;
	/**
	 * <p>The metrics configuration for your event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics">Event source mapping metrics</a>.</p>
	 * @public
	 */
	MetricsConfig?: EventSourceMappingMetricsConfig | undefined;
	/**
	 * <p>(Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html">Event source mapping logging</a>.</p>
	 * @public
	 */
	LoggingConfig?: EventSourceMappingLoggingConfig | undefined;
	/**
	 * <p>(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.</p>
	 * @public
	 */
	ScalingConfig?: ScalingConfig | undefined;
	/**
	 * <p>The ARN of the Lambda function.</p>
	 * @public
	 */
	FunctionArn?: string | undefined;
	/**
	 * <p>The date that the event source mapping was last updated or that its state changed.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>The result of the event source mapping's last processing attempt.</p>
	 * @public
	 */
	LastProcessingResult?: string | undefined;
	/**
	 * <p>The state of the event source mapping. It can be one of the following: <code>Creating</code>, <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>, <code>Updating</code>, or <code>Deleting</code>.</p>
	 * @public
	 */
	State?: string | undefined;
	/**
	 * <p>Indicates whether a user or Lambda made the last change to the event source mapping.</p>
	 * @public
	 */
	StateTransitionReason?: string | undefined;
	/**
	 * <p>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.</p>
	 * @public
	 */
	DestinationConfig?: DestinationConfig | undefined;
	/**
	 * <p>The name of the Kafka topic.</p>
	 * @public
	 */
	Topics?: string[] | undefined;
	/**
	 * <p> (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.</p>
	 * @public
	 */
	Queues?: string[] | undefined;
	/**
	 * <p>An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.</p>
	 * @public
	 */
	SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined;
	/**
	 * <p>The self-managed Apache Kafka cluster for your event source.</p>
	 * @public
	 */
	SelfManagedEventSource?: SelfManagedEventSource | undefined;
	/**
	 * <p>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.</p> <note> <p>The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed</p> </note>
	 * @public
	 */
	MaximumRecordAgeInSeconds?: number | undefined;
	/**
	 * <p>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) If the function returns an error, split the batch in two and retry. The default value is false.</p>
	 * @public
	 */
	BisectBatchOnFunctionError?: boolean | undefined;
	/**
	 * <p>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.</p>
	 * @public
	 */
	MaximumRetryAttempts?: number | undefined;
	/**
	 * <p>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</p>
	 * @public
	 */
	TumblingWindowInSeconds?: number | undefined;
	/**
	 * <p>(Kinesis, DynamoDB Streams, Amazon MSK, self-managed Apache Kafka, and Amazon SQS) A list of current response type enums applied to the event source mapping.</p>
	 * @public
	 */
	FunctionResponseTypes?: FunctionResponseType[] | undefined;
	/**
	 * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
	 * @public
	 */
	AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig | undefined;
	/**
	 * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
	 * @public
	 */
	SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig | undefined;
	/**
	 * <p>Specific configuration settings for a DocumentDB event source.</p>
	 * @public
	 */
	DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the event source mapping.</p>
	 * @public
	 */
	EventSourceMappingArn?: string | undefined;
	/**
	 * <p>(Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode">provisioned mode</a>.</p>
	 * @public
	 */
	ProvisionedPollerConfig?: ProvisionedPollerConfig | undefined;
}
interface ListEventSourceMappingsResponse {
	/**
	 * <p>A pagination token that's returned when the response doesn't contain all event source mappings.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>A list of event source mappings.</p>
	 * @public
	 */
	EventSourceMappings?: EventSourceMappingConfiguration[] | undefined;
}
interface LambdaManagedInstancesCapacityProviderConfig {
	/**
	 * <p>The Amazon Resource Name (ARN) of the capacity provider.</p>
	 * @public
	 */
	CapacityProviderArn: string | undefined;
	/**
	 * <p>The maximum number of concurrent execution environments that can run on each compute instance.</p>
	 * @public
	 */
	PerExecutionEnvironmentMaxConcurrency?: number | undefined;
	/**
	 * <p>The amount of memory in GiB allocated per vCPU for execution environments.</p>
	 * @public
	 */
	ExecutionEnvironmentMemoryGiBPerVCpu?: number | undefined;
}
interface CapacityProviderConfig {
	/**
	 * <p>Configuration for Lambda-managed instances used by the capacity provider.</p>
	 * @public
	 */
	LambdaManagedInstancesCapacityProviderConfig: LambdaManagedInstancesCapacityProviderConfig | undefined;
}
interface DeadLetterConfig {
	/**
	 * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
	 * @public
	 */
	TargetArn?: string | undefined;
}
interface EphemeralStorage {
	/**
	 * <p>The size of the function's <code>/tmp</code> directory.</p>
	 * @public
	 */
	Size: number | undefined;
}
interface S3FilesConfig {
	/**
	 * <p>Specifies if a function reads from the file system for the lowest latency, or through Amazon S3 Files feature "direct Amazon S3 bucket reads" for the highest throughput. Valid values:</p> <ul> <li> <p> <code>AUTO</code> (default) – Direct reads are active for functions you configure with 512 MB or more of memory.</p> </li> <li> <p> <code>ENABLED</code> – Enforces all reads are directly from the Amazon S3 bucket, regardless of available memory (less than 512 MB).</p> </li> <li> <p> <code>DISABLED</code> – Routes all reads through the file system, regardless of memory configuration.</p> </li> </ul> <p>To use direct reads, you must grant the execution role the <code>s3:GetObject</code> and <code>s3:GetObjectVersion</code> permissions. If a direct read fails, Lambda automatically falls back to reading through the file system.</p>
	 * @public
	 */
	DirectS3Read?: DirectS3Read | undefined;
}
interface FileSystemConfig {
	/**
	 * <p>The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system.</p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The path where the function can access the file system, starting with <code>/mnt/</code>.</p>
	 * @public
	 */
	LocalMountPath: string | undefined;
	/**
	 * <p>The configuration for how your function accesses data on an Amazon S3 file system. Valid only when the file system access point ARN is an Amazon S3 Files access point. If you specify a different access point type (for example, Amazon Elastic File System), the operation returns an <code>InvalidParameterException</code>.</p>
	 * @public
	 */
	S3FilesConfig?: S3FilesConfig | undefined;
}
interface ImageConfig {
	/**
	 * <p>Specifies the entry point to their application, which is typically the location of the runtime executable.</p>
	 * @public
	 */
	EntryPoint?: string[] | undefined;
	/**
	 * <p>Specifies parameters that you want to pass in with ENTRYPOINT.</p>
	 * @public
	 */
	Command?: string[] | undefined;
	/**
	 * <p>Specifies the working directory.</p>
	 * @public
	 */
	WorkingDirectory?: string | undefined;
}
interface LoggingConfig {
	/**
	 * <p>The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.</p>
	 * @public
	 */
	LogFormat?: LogFormat | undefined;
	/**
	 * <p>Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where <code>TRACE</code> is the highest level and <code>FATAL</code> is the lowest.</p>
	 * @public
	 */
	ApplicationLogLevel?: ApplicationLogLevel | undefined;
	/**
	 * <p>Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where <code>DEBUG</code> is the highest level and <code>WARN</code> is the lowest.</p>
	 * @public
	 */
	SystemLogLevel?: SystemLogLevel | undefined;
	/**
	 * <p>The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named <code>/aws/lambda/&lt;function name&gt;</code>. To use a different log group, enter an existing log group or enter a new log group name.</p>
	 * @public
	 */
	LogGroup?: string | undefined;
}
interface TenancyConfig {
	/**
	 * <p>Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.</p>
	 * @public
	 */
	TenantIsolationMode: TenantIsolationMode | undefined;
}
interface EnvironmentError {
	/**
	 * <p>The error code.</p>
	 * @public
	 */
	ErrorCode?: string | undefined;
	/**
	 * <p>The error message.</p>
	 * @public
	 */
	Message?: string | undefined;
}
interface EnvironmentResponse {
	/**
	 * <p>Environment variable key-value pairs. Omitted from CloudTrail logs.</p>
	 * @public
	 */
	Variables?: Record<string, string> | undefined;
	/**
	 * <p>Error messages for environment variables that couldn't be applied.</p>
	 * @public
	 */
	Error?: EnvironmentError | undefined;
}
interface ImageConfigError {
	/**
	 * <p>Error code.</p>
	 * @public
	 */
	ErrorCode?: string | undefined;
	/**
	 * <p>Error message.</p>
	 * @public
	 */
	Message?: string | undefined;
}
interface ImageConfigResponse {
	/**
	 * <p>Configuration values that override the container image Dockerfile.</p>
	 * @public
	 */
	ImageConfig?: ImageConfig | undefined;
	/**
	 * <p>Error response to <code>GetFunctionConfiguration</code>.</p>
	 * @public
	 */
	Error?: ImageConfigError | undefined;
}
interface Layer {
	/**
	 * <p>The Amazon Resource Name (ARN) of the function layer.</p>
	 * @public
	 */
	Arn?: string | undefined;
	/**
	 * <p>The size of the layer archive in bytes.</p>
	 * @public
	 */
	CodeSize?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
	 * @public
	 */
	SigningProfileVersionArn?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of a signing job.</p>
	 * @public
	 */
	SigningJobArn?: string | undefined;
}
interface RuntimeVersionError {
	/**
	 * <p>The error code.</p>
	 * @public
	 */
	ErrorCode?: string | undefined;
	/**
	 * <p>The error message.</p>
	 * @public
	 */
	Message?: string | undefined;
}
interface RuntimeVersionConfig {
	/**
	 * <p>The ARN of the runtime version you want the function to use.</p>
	 * @public
	 */
	RuntimeVersionArn?: string | undefined;
	/**
	 * <p>Error response when Lambda is unable to retrieve the runtime version for a function.</p>
	 * @public
	 */
	Error?: RuntimeVersionError | undefined;
}
interface SnapStartResponse {
	/**
	 * <p>When set to <code>PublishedVersions</code>, Lambda creates a snapshot of the execution environment when you publish a function version.</p>
	 * @public
	 */
	ApplyOn?: SnapStartApplyOn | undefined;
	/**
	 * <p>When you provide a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using">qualified Amazon Resource Name (ARN)</a>, this response element indicates whether SnapStart is activated for the specified function version.</p>
	 * @public
	 */
	OptimizationStatus?: SnapStartOptimizationStatus | undefined;
}
interface TracingConfigResponse {
	/**
	 * <p>The tracing mode.</p>
	 * @public
	 */
	Mode?: TracingMode | undefined;
}
interface VpcConfigResponse {
	/**
	 * <p>A list of VPC subnet IDs.</p>
	 * @public
	 */
	SubnetIds?: string[] | undefined;
	/**
	 * <p>A list of VPC security group IDs.</p>
	 * @public
	 */
	SecurityGroupIds?: string[] | undefined;
	/**
	 * <p>The ID of the VPC.</p>
	 * @public
	 */
	VpcId?: string | undefined;
	/**
	 * <p>Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.</p>
	 * @public
	 */
	Ipv6AllowedForDualStack?: boolean | undefined;
}
interface FunctionConfiguration {
	/**
	 * <p>The name of the function.</p>
	 * @public
	 */
	FunctionName?: string | undefined;
	/**
	 * <p>The function's Amazon Resource Name (ARN).</p>
	 * @public
	 */
	FunctionArn?: string | undefined;
	/**
	 * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"> runtime</a>. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.</p> <p>The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
	 * @public
	 */
	Runtime?: Runtime | undefined;
	/**
	 * <p>The function's execution role.</p>
	 * @public
	 */
	Role?: string | undefined;
	/**
	 * <p>The function that Lambda calls to begin running your function.</p>
	 * @public
	 */
	Handler?: string | undefined;
	/**
	 * <p>The size of the function's deployment package, in bytes.</p>
	 * @public
	 */
	CodeSize?: number | undefined;
	/**
	 * <p>The function's description.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The amount of time in seconds that Lambda allows a function to run before stopping it.</p>
	 * @public
	 */
	Timeout?: number | undefined;
	/**
	 * <p>The amount of memory available to the function at runtime.</p>
	 * @public
	 */
	MemorySize?: number | undefined;
	/**
	 * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	LastModified?: string | undefined;
	/**
	 * <p>The SHA256 hash of the function's deployment package.</p>
	 * @public
	 */
	CodeSha256?: string | undefined;
	/**
	 * <p>The version of the Lambda function.</p>
	 * @public
	 */
	Version?: string | undefined;
	/**
	 * <p>The function's networking configuration.</p>
	 * @public
	 */
	VpcConfig?: VpcConfigResponse | undefined;
	/**
	 * <p>The function's dead letter queue.</p>
	 * @public
	 */
	DeadLetterConfig?: DeadLetterConfig | undefined;
	/**
	 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">environment variables</a>. Omitted from CloudTrail logs.</p>
	 * @public
	 */
	Environment?: EnvironmentResponse | undefined;
	/**
	 * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources:</p> <ul> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>.</p> </li> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> snapshots.</p> </li> <li> <p>When used with <code>SourceKMSKeyArn</code>, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption"> Specifying a customer managed key for Lambda</a>.</p> </li> <li> <p>The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle">Function lifecycle</a>.</p> </li> </ul> <p>If you don't provide a customer managed key, Lambda uses an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p>
	 * @public
	 */
	KMSKeyArn?: string | undefined;
	/**
	 * <p>The function's X-Ray tracing configuration.</p>
	 * @public
	 */
	TracingConfig?: TracingConfigResponse | undefined;
	/**
	 * <p>For Lambda@Edge functions, the ARN of the main function.</p>
	 * @public
	 */
	MasterArn?: string | undefined;
	/**
	 * <p>The latest updated revision of the function or alias.</p>
	 * @public
	 */
	RevisionId?: string | undefined;
	/**
	 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">layers</a>.</p>
	 * @public
	 */
	Layers?: Layer[] | undefined;
	/**
	 * <p>The current state of the function. When the state is <code>Inactive</code>, you can reactivate the function by invoking it.</p>
	 * @public
	 */
	State?: State | undefined;
	/**
	 * <p>The reason for the function's current state.</p>
	 * @public
	 */
	StateReason?: string | undefined;
	/**
	 * <p>The reason code for the function's current state. When the code is <code>Creating</code>, you can't invoke or modify the function.</p>
	 * @public
	 */
	StateReasonCode?: StateReasonCode | undefined;
	/**
	 * <p>The status of the last update that was performed on the function. This is first set to <code>Successful</code> after function creation completes.</p>
	 * @public
	 */
	LastUpdateStatus?: LastUpdateStatus | undefined;
	/**
	 * <p>The reason for the last update that was performed on the function.</p>
	 * @public
	 */
	LastUpdateStatusReason?: string | undefined;
	/**
	 * <p>The reason code for the last update that was performed on the function.</p>
	 * @public
	 */
	LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode | undefined;
	/**
	 * <p>Connection settings for an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a> or an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon S3 file system</a>.</p>
	 * @public
	 */
	FileSystemConfigs?: FileSystemConfig[] | undefined;
	/**
	 * <p>The ARN of the signing profile version.</p>
	 * @public
	 */
	SigningProfileVersionArn?: string | undefined;
	/**
	 * <p>The ARN of the signing job.</p>
	 * @public
	 */
	SigningJobArn?: string | undefined;
	/**
	 * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
	 * @public
	 */
	PackageType?: PackageType | undefined;
	/**
	 * <p>The function's image configuration values.</p>
	 * @public
	 */
	ImageConfigResponse?: ImageConfigResponse | undefined;
	/**
	 * <p>The instruction set architecture that the function supports. Architecture is a string array with one of the valid values. The default architecture value is <code>x86_64</code>.</p>
	 * @public
	 */
	Architectures?: Architecture[] | undefined;
	/**
	 * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage">Configuring ephemeral storage (console)</a>.</p>
	 * @public
	 */
	EphemeralStorage?: EphemeralStorage | undefined;
	/**
	 * <p>Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Improving startup performance with Lambda SnapStart</a>.</p>
	 * @public
	 */
	SnapStart?: SnapStartResponse | undefined;
	/**
	 * <p>The ARN of the runtime and any errors that occured.</p>
	 * @public
	 */
	RuntimeVersionConfig?: RuntimeVersionConfig | undefined;
	/**
	 * <p>The function's Amazon CloudWatch Logs configuration settings.</p>
	 * @public
	 */
	LoggingConfig?: LoggingConfig | undefined;
	/**
	 * <p>The function's tenant isolation configuration settings. Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.</p>
	 * @public
	 */
	TenancyConfig?: TenancyConfig | undefined;
	/**
	 * <p>Configuration for the capacity provider that manages compute resources for Lambda functions.</p>
	 * @public
	 */
	CapacityProviderConfig?: CapacityProviderConfig | undefined;
	/**
	 * <p>The SHA256 hash of the function configuration.</p>
	 * @public
	 */
	ConfigSha256?: string | undefined;
	/**
	 * <p>The function's durable execution configuration settings, if the function is configured for durability.</p>
	 * @public
	 */
	DurableConfig?: DurableConfig | undefined;
}
interface Cors {
	/**
	 * <p>Whether to allow cookies or other credentials in requests to your function URL. The default is <code>false</code>.</p>
	 * @public
	 */
	AllowCredentials?: boolean | undefined;
	/**
	 * <p>The HTTP headers that origins can include in requests to your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.</p>
	 * @public
	 */
	AllowHeaders?: string[] | undefined;
	/**
	 * <p>The HTTP methods that are allowed when calling your function URL. For example: <code>GET</code>, <code>POST</code>, <code>DELETE</code>, or the wildcard character (<code>*</code>).</p>
	 * @public
	 */
	AllowMethods?: string[] | undefined;
	/**
	 * <p>The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example: <code>https://www.example.com</code>, <code>http://localhost:60905</code>.</p> <p>Alternatively, you can grant access to all origins using the wildcard character (<code>*</code>).</p>
	 * @public
	 */
	AllowOrigins?: string[] | undefined;
	/**
	 * <p>The HTTP headers in your function response that you want to expose to origins that call your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.</p>
	 * @public
	 */
	ExposeHeaders?: string[] | undefined;
	/**
	 * <p>The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to <code>0</code>, which means that the browser doesn't cache results.</p>
	 * @public
	 */
	MaxAge?: number | undefined;
}
interface CreateFunctionUrlConfigResponse {
	/**
	 * <p>The HTTP URL endpoint for your function.</p>
	 * @public
	 */
	FunctionUrl: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of your function.</p>
	 * @public
	 */
	FunctionArn: string | undefined;
	/**
	 * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
	 * @public
	 */
	AuthType: FunctionUrlAuthType | undefined;
	/**
	 * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
	 * @public
	 */
	Cors?: Cors | undefined;
	/**
	 * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	CreationTime: string | undefined;
	/**
	 * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
	 * @public
	 */
	InvokeMode?: InvokeMode | undefined;
}
interface FunctionCodeLocationError {
	/**
	 * <p>The error code that identifies why Lambda failed to retrieve the deployment package.</p>
	 * @public
	 */
	ErrorCode?: string | undefined;
	/**
	 * <p>The human-readable message that describes why Lambda failed to retrieve the deployment package.</p>
	 * @public
	 */
	Message?: string | undefined;
}
interface ResolvedS3Object {
	/**
	 * <p>The Amazon S3 bucket that contains the deployment package.</p>
	 * @public
	 */
	S3Bucket?: string | undefined;
	/**
	 * <p>The Amazon S3 key of the deployment package.</p>
	 * @public
	 */
	S3Key?: string | undefined;
	/**
	 * <p>The version of the deployment package object.</p>
	 * @public
	 */
	S3ObjectVersion?: string | undefined;
}
interface FunctionCodeLocation {
	/**
	 * <p>The service that's hosting the file.</p>
	 * @public
	 */
	RepositoryType?: string | undefined;
	/**
	 * <p>A presigned URL that you can use to download the deployment package.</p>
	 * @public
	 */
	Location?: string | undefined;
	/**
	 * <p>URI of a container image in the Amazon ECR registry.</p>
	 * @public
	 */
	ImageUri?: string | undefined;
	/**
	 * <p>The resolved URI for the image.</p>
	 * @public
	 */
	ResolvedImageUri?: string | undefined;
	/**
	 * <p>The resolved Amazon S3 object that contains the deployment package.</p>
	 * @public
	 */
	ResolvedS3Object?: ResolvedS3Object | undefined;
	/**
	 * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a>.</p>
	 * @public
	 */
	SourceKMSKeyArn?: string | undefined;
	/**
	 * <p>An object that contains details about an error related to function deployment package retrieval.</p>
	 * @public
	 */
	Error?: FunctionCodeLocationError | undefined;
}
interface Concurrency {
	/**
	 * <p>The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html">Managing Lambda reserved concurrency</a>.</p>
	 * @public
	 */
	ReservedConcurrentExecutions?: number | undefined;
}
interface TagsError {
	/**
	 * <p>The error code.</p>
	 * @public
	 */
	ErrorCode: string | undefined;
	/**
	 * <p>The error message.</p>
	 * @public
	 */
	Message: string | undefined;
}
interface GetFunctionResponse {
	/**
	 * <p>The configuration of the function or version.</p>
	 * @public
	 */
	Configuration?: FunctionConfiguration | undefined;
	/**
	 * <p>The deployment package of the function or version.</p>
	 * @public
	 */
	Code?: FunctionCodeLocation | undefined;
	/**
	 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. Lambda returns tag data only if you have explicit allow permissions for <a href="https://docs.aws.amazon.com/lambda/latest/api/API_ListTags.html">lambda:ListTags</a>.</p>
	 * @public
	 */
	Tags?: Record<string, string> | undefined;
	/**
	 * <p>An object that contains details about an error related to retrieving tags.</p>
	 * @public
	 */
	TagsError?: TagsError | undefined;
	/**
	 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved concurrency</a>.</p>
	 * @public
	 */
	Concurrency?: Concurrency | undefined;
}
interface GetFunctionCodeSigningConfigResponse {
	/**
	 * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
	 * @public
	 */
	CodeSigningConfigArn: string | undefined;
	/**
	 * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
	 * @public
	 */
	FunctionName: string | undefined;
}
interface GetFunctionConcurrencyResponse {
	/**
	 * <p>The number of simultaneous executions that are reserved for the function.</p>
	 * @public
	 */
	ReservedConcurrentExecutions?: number | undefined;
}
interface GetFunctionUrlConfigResponse {
	/**
	 * <p>The HTTP URL endpoint for your function.</p>
	 * @public
	 */
	FunctionUrl: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of your function.</p>
	 * @public
	 */
	FunctionArn: string | undefined;
	/**
	 * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
	 * @public
	 */
	AuthType: FunctionUrlAuthType | undefined;
	/**
	 * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
	 * @public
	 */
	Cors?: Cors | undefined;
	/**
	 * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	CreationTime: string | undefined;
	/**
	 * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	LastModifiedTime: string | undefined;
	/**
	 * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
	 * @public
	 */
	InvokeMode?: InvokeMode | undefined;
}
interface GetPolicyResponse {
	/**
	 * <p>The resource-based policy.</p>
	 * @public
	 */
	Policy?: string | undefined;
	/**
	 * <p>A unique identifier for the current revision of the policy.</p>
	 * @public
	 */
	RevisionId?: string | undefined;
}
interface GetRuntimeManagementConfigResponse {
	/**
	 * <p>The current runtime update mode of the function.</p>
	 * @public
	 */
	UpdateRuntimeOn?: UpdateRuntimeOn | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of your function.</p>
	 * @public
	 */
	FunctionArn?: string | undefined;
	/**
	 * <p>The ARN of the runtime the function is configured to use. If the runtime update mode is <b>Manual</b>, the ARN is returned, otherwise <code>null</code> is returned.</p>
	 * @public
	 */
	RuntimeVersionArn?: string | undefined;
}
interface InvocationResponse {
	/**
	 * <p>The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code> invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For the <code>DryRun</code> invocation type, the status code is 204.</p>
	 * @public
	 */
	StatusCode?: number | undefined;
	/**
	 * <p>If present, indicates that an error occurred during function execution. Details about the error are included in the response payload.</p>
	 * @public
	 */
	FunctionError?: string | undefined;
	/**
	 * <p>The last 4 KB of the execution log, which is base64-encoded.</p>
	 * @public
	 */
	LogResult?: string | undefined;
	/**
	 * <p>The response from the function, or an error object.</p>
	 * @public
	 */
	Payload?: Uint8Array | undefined;
	/**
	 * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which version the alias resolved to.</p>
	 * @public
	 */
	ExecutedVersion?: string | undefined;
	/**
	 * <p>The ARN of the durable execution that was started. This is returned when invoking a durable function and provides a unique identifier for tracking the execution.</p>
	 * @public
	 */
	DurableExecutionArn?: string | undefined;
}
interface InvokeAsyncResponse {
	/**
	 * <p>The status code.</p>
	 * @public
	 */
	Status?: number | undefined;
}
interface ListFunctionsResponse {
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>A list of Lambda functions.</p>
	 * @public
	 */
	Functions?: FunctionConfiguration[] | undefined;
}
interface FunctionUrlConfig {
	/**
	 * <p>The HTTP URL endpoint for your function.</p>
	 * @public
	 */
	FunctionUrl: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of your function.</p>
	 * @public
	 */
	FunctionArn: string | undefined;
	/**
	 * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	CreationTime: string | undefined;
	/**
	 * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	LastModifiedTime: string | undefined;
	/**
	 * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
	 * @public
	 */
	Cors?: Cors | undefined;
	/**
	 * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
	 * @public
	 */
	AuthType: FunctionUrlAuthType | undefined;
	/**
	 * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
	 * @public
	 */
	InvokeMode?: InvokeMode | undefined;
}
interface ListFunctionUrlConfigsResponse {
	/**
	 * <p>A list of function URL configurations.</p>
	 * @public
	 */
	FunctionUrlConfigs: FunctionUrlConfig[] | undefined;
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
}
interface ProvisionedConcurrencyConfigListItem {
	/**
	 * <p>The Amazon Resource Name (ARN) of the alias or version.</p>
	 * @public
	 */
	FunctionArn?: string | undefined;
	/**
	 * <p>The amount of provisioned concurrency requested.</p>
	 * @public
	 */
	RequestedProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The amount of provisioned concurrency available.</p>
	 * @public
	 */
	AvailableProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
	 * @public
	 */
	AllocatedProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The status of the allocation process.</p>
	 * @public
	 */
	Status?: ProvisionedConcurrencyStatusEnum | undefined;
	/**
	 * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
	 * @public
	 */
	StatusReason?: string | undefined;
	/**
	 * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
	 * @public
	 */
	LastModified?: string | undefined;
}
interface ListProvisionedConcurrencyConfigsResponse {
	/**
	 * <p>A list of provisioned concurrency configurations.</p>
	 * @public
	 */
	ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[] | undefined;
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
}
interface PutFunctionCodeSigningConfigResponse {
	/**
	 * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
	 * @public
	 */
	CodeSigningConfigArn: string | undefined;
	/**
	 * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
	 * @public
	 */
	FunctionName: string | undefined;
}
interface PutRuntimeManagementConfigResponse {
	/**
	 * <p>The runtime update mode.</p>
	 * @public
	 */
	UpdateRuntimeOn: UpdateRuntimeOn | undefined;
	/**
	 * <p>The ARN of the function</p>
	 * @public
	 */
	FunctionArn: string | undefined;
	/**
	 * <p>The ARN of the runtime the function is configured to use. If the runtime update mode is <b>manual</b>, the ARN is returned, otherwise <code>null</code> is returned.</p>
	 * @public
	 */
	RuntimeVersionArn?: string | undefined;
}
interface UpdateFunctionUrlConfigResponse {
	/**
	 * <p>The HTTP URL endpoint for your function.</p>
	 * @public
	 */
	FunctionUrl: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of your function.</p>
	 * @public
	 */
	FunctionArn: string | undefined;
	/**
	 * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
	 * @public
	 */
	AuthType: FunctionUrlAuthType | undefined;
	/**
	 * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
	 * @public
	 */
	Cors?: Cors | undefined;
	/**
	 * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	CreationTime: string | undefined;
	/**
	 * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	LastModifiedTime: string | undefined;
	/**
	 * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
	 * @public
	 */
	InvokeMode?: InvokeMode | undefined;
}
interface ListAliasesResponse {
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>A list of aliases.</p>
	 * @public
	 */
	Aliases?: AliasConfiguration[] | undefined;
}
interface ListVersionsByFunctionResponse {
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>A list of Lambda function versions.</p>
	 * @public
	 */
	Versions?: FunctionConfiguration[] | undefined;
}
interface GetAccountSettingsResponse {
	/**
	 * <p>Limits that are related to concurrency and code storage.</p>
	 * @public
	 */
	AccountLimit?: AccountLimit | undefined;
	/**
	 * <p>The number of functions and amount of storage in use.</p>
	 * @public
	 */
	AccountUsage?: AccountUsage | undefined;
}
interface FunctionEventInvokeConfig {
	/**
	 * <p>The date and time that the configuration was last updated.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the function.</p>
	 * @public
	 */
	FunctionArn?: string | undefined;
	/**
	 * <p>The maximum number of times to retry when the function returns an error.</p>
	 * @public
	 */
	MaximumRetryAttempts?: number | undefined;
	/**
	 * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
	 * @public
	 */
	MaximumEventAgeInSeconds?: number | undefined;
	/**
	 * <p>A destination for events after they have been sent to a function for processing.</p> <p class="title"> <b>Destinations</b> </p> <ul> <li> <p> <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p> </li> <li> <p> <b>Queue</b> - The ARN of a standard SQS queue.</p> </li> <li> <p> <b>Bucket</b> - The ARN of an Amazon S3 bucket.</p> </li> <li> <p> <b>Topic</b> - The ARN of a standard SNS topic.</p> </li> <li> <p> <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p> </li> </ul> <note> <p>S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.</p> </note>
	 * @public
	 */
	DestinationConfig?: DestinationConfig | undefined;
}
interface LayerVersionsListItem {
	/**
	 * <p>The ARN of the layer version.</p>
	 * @public
	 */
	LayerVersionArn?: string | undefined;
	/**
	 * <p>The version number.</p>
	 * @public
	 */
	Version?: number | undefined;
	/**
	 * <p>The description of the version.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.</p>
	 * @public
	 */
	CreatedDate?: string | undefined;
	/**
	 * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
	 * @public
	 */
	CompatibleArchitectures?: Architecture[] | undefined;
	/**
	 * <p>The layer's compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
	 * @public
	 */
	CompatibleRuntimes?: Runtime[] | undefined;
	/**
	 * <p>The layer's open-source license.</p>
	 * @public
	 */
	LicenseInfo?: string | undefined;
}
interface LayersListItem {
	/**
	 * <p>The name of the layer.</p>
	 * @public
	 */
	LayerName?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the function layer.</p>
	 * @public
	 */
	LayerArn?: string | undefined;
	/**
	 * <p>The newest version of the layer.</p>
	 * @public
	 */
	LatestMatchingVersion?: LayerVersionsListItem | undefined;
}
interface ListLayersResponse {
	/**
	 * <p>A pagination token returned when the response doesn't contain all layers.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>A list of function layers.</p>
	 * @public
	 */
	Layers?: LayersListItem[] | undefined;
}
interface LayerVersionContentOutput {
	/**
	 * <p>A link to the layer archive in Amazon S3 that is valid for 10 minutes.</p>
	 * @public
	 */
	Location?: string | undefined;
	/**
	 * <p>The SHA-256 hash of the layer archive.</p>
	 * @public
	 */
	CodeSha256?: string | undefined;
	/**
	 * <p>The size of the layer archive in bytes.</p>
	 * @public
	 */
	CodeSize?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
	 * @public
	 */
	SigningProfileVersionArn?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of a signing job.</p>
	 * @public
	 */
	SigningJobArn?: string | undefined;
	/**
	 * <p>The resolved Amazon S3 object that contains the layer archive.</p>
	 * @public
	 */
	ResolvedS3Object?: ResolvedS3Object | undefined;
}
interface GetLayerVersionResponse {
	/**
	 * <p>Details about the layer version.</p>
	 * @public
	 */
	Content?: LayerVersionContentOutput | undefined;
	/**
	 * <p>The ARN of the layer.</p>
	 * @public
	 */
	LayerArn?: string | undefined;
	/**
	 * <p>The ARN of the layer version.</p>
	 * @public
	 */
	LayerVersionArn?: string | undefined;
	/**
	 * <p>The description of the version.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	CreatedDate?: string | undefined;
	/**
	 * <p>The version number.</p>
	 * @public
	 */
	Version?: number | undefined;
	/**
	 * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
	 * @public
	 */
	CompatibleArchitectures?: Architecture[] | undefined;
	/**
	 * <p>The layer's compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
	 * @public
	 */
	CompatibleRuntimes?: Runtime[] | undefined;
	/**
	 * <p>The layer's software license.</p>
	 * @public
	 */
	LicenseInfo?: string | undefined;
}
interface GetLayerVersionPolicyResponse {
	/**
	 * <p>The policy document.</p>
	 * @public
	 */
	Policy?: string | undefined;
	/**
	 * <p>A unique identifier for the current revision of the policy.</p>
	 * @public
	 */
	RevisionId?: string | undefined;
}
interface ListLayerVersionsResponse {
	/**
	 * <p>A pagination token returned when the response doesn't contain all versions.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
	/**
	 * <p>A list of versions.</p>
	 * @public
	 */
	LayerVersions?: LayerVersionsListItem[] | undefined;
}
interface PublishLayerVersionResponse {
	/**
	 * <p>Details about the layer version.</p>
	 * @public
	 */
	Content?: LayerVersionContentOutput | undefined;
	/**
	 * <p>The ARN of the layer.</p>
	 * @public
	 */
	LayerArn?: string | undefined;
	/**
	 * <p>The ARN of the layer version.</p>
	 * @public
	 */
	LayerVersionArn?: string | undefined;
	/**
	 * <p>The description of the version.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
	 * @public
	 */
	CreatedDate?: string | undefined;
	/**
	 * <p>The version number.</p>
	 * @public
	 */
	Version?: number | undefined;
	/**
	 * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
	 * @public
	 */
	CompatibleArchitectures?: Architecture[] | undefined;
	/**
	 * <p>The layer's compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
	 * @public
	 */
	CompatibleRuntimes?: Runtime[] | undefined;
	/**
	 * <p>The layer's software license.</p>
	 * @public
	 */
	LicenseInfo?: string | undefined;
}
interface ListFunctionEventInvokeConfigsResponse {
	/**
	 * <p>A list of configurations.</p>
	 * @public
	 */
	FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[] | undefined;
	/**
	 * <p>The pagination token that's included if more results are available.</p>
	 * @public
	 */
	NextMarker?: string | undefined;
}
interface ListTagsResponse {
	/**
	 * <p>The function's tags.</p>
	 * @public
	 */
	Tags?: Record<string, string> | undefined;
}
interface GetProvisionedConcurrencyConfigResponse {
	/**
	 * <p>The amount of provisioned concurrency requested.</p>
	 * @public
	 */
	RequestedProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The amount of provisioned concurrency available.</p>
	 * @public
	 */
	AvailableProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
	 * @public
	 */
	AllocatedProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The status of the allocation process.</p>
	 * @public
	 */
	Status?: ProvisionedConcurrencyStatusEnum | undefined;
	/**
	 * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
	 * @public
	 */
	StatusReason?: string | undefined;
	/**
	 * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
	 * @public
	 */
	LastModified?: string | undefined;
}
interface PutProvisionedConcurrencyConfigResponse {
	/**
	 * <p>The amount of provisioned concurrency requested.</p>
	 * @public
	 */
	RequestedProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
	 * @public
	 */
	AllocatedProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The amount of provisioned concurrency available.</p>
	 * @public
	 */
	AvailableProvisionedConcurrentExecutions?: number | undefined;
	/**
	 * <p>The status of the allocation process.</p>
	 * @public
	 */
	Status?: ProvisionedConcurrencyStatusEnum | undefined;
	/**
	 * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
	 * @public
	 */
	StatusReason?: string | undefined;
	/**
	 * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
	 * @public
	 */
	LastModified?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link AddLayerVersionPermissionCommand}.
 */
export interface AddLayerVersionPermissionCommandOutput extends AddLayerVersionPermissionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link AddPermissionCommand}.
 */
export interface AddPermissionCommandOutput extends AddPermissionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandOutput extends AliasConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateCodeSigningConfigCommand}.
 */
export interface CreateCodeSigningConfigCommandOutput extends CreateCodeSigningConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateEventSourceMappingCommand}.
 */
export interface CreateEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandOutput extends FunctionConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateFunctionUrlConfigCommand}.
 */
export interface CreateFunctionUrlConfigCommandOutput extends CreateFunctionUrlConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteAliasCommand}.
 */
export interface DeleteAliasCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteCodeSigningConfigCommand}.
 */
export interface DeleteCodeSigningConfigCommandOutput extends DeleteCodeSigningConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteEventSourceMappingCommand}.
 */
export interface DeleteEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteFunctionCodeSigningConfigCommand}.
 */
export interface DeleteFunctionCodeSigningConfigCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteFunctionCommand}.
 */
export interface DeleteFunctionCommandOutput extends DeleteFunctionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteFunctionConcurrencyCommand}.
 */
export interface DeleteFunctionConcurrencyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteFunctionEventInvokeConfigCommand}.
 */
export interface DeleteFunctionEventInvokeConfigCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteFunctionUrlConfigCommand}.
 */
export interface DeleteFunctionUrlConfigCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteLayerVersionCommand}.
 */
export interface DeleteLayerVersionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteProvisionedConcurrencyConfigCommand}.
 */
export interface DeleteProvisionedConcurrencyConfigCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetAliasCommand}.
 */
export interface GetAliasCommandOutput extends AliasConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetCodeSigningConfigCommand}.
 */
export interface GetCodeSigningConfigCommandOutput extends GetCodeSigningConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetEventSourceMappingCommand}.
 */
export interface GetEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetFunctionCodeSigningConfigCommand}.
 */
export interface GetFunctionCodeSigningConfigCommandOutput extends GetFunctionCodeSigningConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandOutput extends GetFunctionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetFunctionConcurrencyCommand}.
 */
export interface GetFunctionConcurrencyCommandOutput extends GetFunctionConcurrencyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetFunctionConfigurationCommand}.
 */
export interface GetFunctionConfigurationCommandOutput extends FunctionConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetFunctionEventInvokeConfigCommand}.
 */
export interface GetFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetFunctionUrlConfigCommand}.
 */
export interface GetFunctionUrlConfigCommandOutput extends GetFunctionUrlConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetLayerVersionByArnCommand}.
 */
export interface GetLayerVersionByArnCommandOutput extends GetLayerVersionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetLayerVersionCommand}.
 */
export interface GetLayerVersionCommandOutput extends GetLayerVersionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetLayerVersionPolicyCommand}.
 */
export interface GetLayerVersionPolicyCommandOutput extends GetLayerVersionPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandOutput extends GetPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetProvisionedConcurrencyConfigCommand}.
 */
export interface GetProvisionedConcurrencyConfigCommandOutput extends GetProvisionedConcurrencyConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetRuntimeManagementConfigCommand}.
 */
export interface GetRuntimeManagementConfigCommandOutput extends GetRuntimeManagementConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link InvokeAsyncCommand}.
 */
export interface InvokeAsyncCommandOutput extends InvokeAsyncResponse, MetadataBearer {
}
type InvokeCommandOutputType = Omit<InvocationResponse, "Payload"> & {
	Payload?: Uint8ArrayBlobAdapter;
};
/**
 * @public
 *
 * The output of {@link InvokeCommand}.
 */
export interface InvokeCommandOutput extends InvokeCommandOutputType, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandOutput extends ListAliasesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListCodeSigningConfigsCommand}.
 */
export interface ListCodeSigningConfigsCommandOutput extends ListCodeSigningConfigsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListEventSourceMappingsCommand}.
 */
export interface ListEventSourceMappingsCommandOutput extends ListEventSourceMappingsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListFunctionEventInvokeConfigsCommand}.
 */
export interface ListFunctionEventInvokeConfigsCommandOutput extends ListFunctionEventInvokeConfigsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListFunctionsByCodeSigningConfigCommand}.
 */
export interface ListFunctionsByCodeSigningConfigCommandOutput extends ListFunctionsByCodeSigningConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListFunctionsCommand}.
 */
export interface ListFunctionsCommandOutput extends ListFunctionsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListFunctionUrlConfigsCommand}.
 */
export interface ListFunctionUrlConfigsCommandOutput extends ListFunctionUrlConfigsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListLayersCommand}.
 */
export interface ListLayersCommandOutput extends ListLayersResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListLayerVersionsCommand}.
 */
export interface ListLayerVersionsCommandOutput extends ListLayerVersionsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListProvisionedConcurrencyConfigsCommand}.
 */
export interface ListProvisionedConcurrencyConfigsCommandOutput extends ListProvisionedConcurrencyConfigsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListTagsCommand}.
 */
export interface ListTagsCommandOutput extends ListTagsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListVersionsByFunctionCommand}.
 */
export interface ListVersionsByFunctionCommandOutput extends ListVersionsByFunctionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PublishLayerVersionCommand}.
 */
export interface PublishLayerVersionCommandOutput extends PublishLayerVersionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PublishVersionCommand}.
 */
export interface PublishVersionCommandOutput extends FunctionConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutFunctionCodeSigningConfigCommand}.
 */
export interface PutFunctionCodeSigningConfigCommandOutput extends PutFunctionCodeSigningConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutFunctionConcurrencyCommand}.
 */
export interface PutFunctionConcurrencyCommandOutput extends Concurrency, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutFunctionEventInvokeConfigCommand}.
 */
export interface PutFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutProvisionedConcurrencyConfigCommand}.
 */
export interface PutProvisionedConcurrencyConfigCommandOutput extends PutProvisionedConcurrencyConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutRuntimeManagementConfigCommand}.
 */
export interface PutRuntimeManagementConfigCommandOutput extends PutRuntimeManagementConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RemoveLayerVersionPermissionCommand}.
 */
export interface RemoveLayerVersionPermissionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RemovePermissionCommand}.
 */
export interface RemovePermissionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateAliasCommand}.
 */
export interface UpdateAliasCommandOutput extends AliasConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateCodeSigningConfigCommand}.
 */
export interface UpdateCodeSigningConfigCommandOutput extends UpdateCodeSigningConfigResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateEventSourceMappingCommand}.
 */
export interface UpdateEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateFunctionCodeCommand}.
 */
export interface UpdateFunctionCodeCommandOutput extends FunctionConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateFunctionConfigurationCommand}.
 */
export interface UpdateFunctionConfigurationCommandOutput extends FunctionConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateFunctionEventInvokeConfigCommand}.
 */
export interface UpdateFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateFunctionUrlConfigCommand}.
 */
export interface UpdateFunctionUrlConfigCommandOutput extends UpdateFunctionUrlConfigResponse, MetadataBearer {
}

export {};
