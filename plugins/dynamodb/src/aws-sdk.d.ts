// Generated from @aws-sdk/client-dynamodb@3.1136.0 by npm run gen. Do not edit.
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
declare const ApproximateCreationDateTimePrecision: {
	readonly MICROSECOND: "MICROSECOND";
	readonly MILLISECOND: "MILLISECOND";
};
type ApproximateCreationDateTimePrecision = (typeof ApproximateCreationDateTimePrecision)[keyof typeof ApproximateCreationDateTimePrecision];
declare const ScalarAttributeType: {
	readonly B: "B";
	readonly N: "N";
	readonly S: "S";
};
type ScalarAttributeType = (typeof ScalarAttributeType)[keyof typeof ScalarAttributeType];
declare const BackupStatus: {
	readonly AVAILABLE: "AVAILABLE";
	readonly CREATING: "CREATING";
	readonly DELETED: "DELETED";
};
type BackupStatus = (typeof BackupStatus)[keyof typeof BackupStatus];
declare const BackupType: {
	readonly AWS_BACKUP: "AWS_BACKUP";
	readonly SYSTEM: "SYSTEM";
	readonly USER: "USER";
};
type BackupType = (typeof BackupType)[keyof typeof BackupType];
declare const BillingMode: {
	readonly PAY_PER_REQUEST: "PAY_PER_REQUEST";
	readonly PROVISIONED: "PROVISIONED";
};
type BillingMode = (typeof BillingMode)[keyof typeof BillingMode];
declare const KeyType: {
	readonly HASH: "HASH";
	readonly RANGE: "RANGE";
};
type KeyType = (typeof KeyType)[keyof typeof KeyType];
declare const ProjectionType: {
	readonly ALL: "ALL";
	readonly INCLUDE: "INCLUDE";
	readonly KEYS_ONLY: "KEYS_ONLY";
};
type ProjectionType = (typeof ProjectionType)[keyof typeof ProjectionType];
declare const SSEType: {
	readonly AES256: "AES256";
	readonly KMS: "KMS";
};
type SSEType = (typeof SSEType)[keyof typeof SSEType];
declare const SSEStatus: {
	readonly DISABLED: "DISABLED";
	readonly DISABLING: "DISABLING";
	readonly ENABLED: "ENABLED";
	readonly ENABLING: "ENABLING";
	readonly UPDATING: "UPDATING";
};
type SSEStatus = (typeof SSEStatus)[keyof typeof SSEStatus];
declare const StreamViewType: {
	readonly KEYS_ONLY: "KEYS_ONLY";
	readonly NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES";
	readonly NEW_IMAGE: "NEW_IMAGE";
	readonly OLD_IMAGE: "OLD_IMAGE";
};
type StreamViewType = (typeof StreamViewType)[keyof typeof StreamViewType];
declare const TimeToLiveStatus: {
	readonly DISABLED: "DISABLED";
	readonly DISABLING: "DISABLING";
	readonly ENABLED: "ENABLED";
	readonly ENABLING: "ENABLING";
};
type TimeToLiveStatus = (typeof TimeToLiveStatus)[keyof typeof TimeToLiveStatus];
declare const VectorDistanceFunction: {
	readonly COSINE: "COSINE";
	readonly DOT_PRODUCT: "DOT_PRODUCT";
	readonly EUCLIDEAN: "EUCLIDEAN";
};
type VectorDistanceFunction = (typeof VectorDistanceFunction)[keyof typeof VectorDistanceFunction];
declare const SearchSchemaElementType: {
	readonly HASH: "HASH";
	readonly INLINE_FILTER: "INLINE_FILTER";
};
type SearchSchemaElementType = (typeof SearchSchemaElementType)[keyof typeof SearchSchemaElementType];
declare const BatchStatementErrorCodeEnum: {
	readonly AccessDenied: "AccessDenied";
	readonly ConditionalCheckFailed: "ConditionalCheckFailed";
	readonly DuplicateItem: "DuplicateItem";
	readonly InternalServerError: "InternalServerError";
	readonly ItemCollectionSizeLimitExceeded: "ItemCollectionSizeLimitExceeded";
	readonly ProvisionedThroughputExceeded: "ProvisionedThroughputExceeded";
	readonly RequestLimitExceeded: "RequestLimitExceeded";
	readonly ResourceNotFound: "ResourceNotFound";
	readonly ThrottlingError: "ThrottlingError";
	readonly TransactionConflict: "TransactionConflict";
	readonly ValidationError: "ValidationError";
};
type BatchStatementErrorCodeEnum = (typeof BatchStatementErrorCodeEnum)[keyof typeof BatchStatementErrorCodeEnum];
declare const ContinuousBackupsStatus: {
	readonly DISABLED: "DISABLED";
	readonly ENABLED: "ENABLED";
};
type ContinuousBackupsStatus = (typeof ContinuousBackupsStatus)[keyof typeof ContinuousBackupsStatus];
declare const PointInTimeRecoveryStatus: {
	readonly DISABLED: "DISABLED";
	readonly ENABLED: "ENABLED";
};
type PointInTimeRecoveryStatus = (typeof PointInTimeRecoveryStatus)[keyof typeof PointInTimeRecoveryStatus];
declare const ContributorInsightsMode: {
	readonly ACCESSED_AND_THROTTLED_KEYS: "ACCESSED_AND_THROTTLED_KEYS";
	readonly THROTTLED_KEYS: "THROTTLED_KEYS";
};
type ContributorInsightsMode = (typeof ContributorInsightsMode)[keyof typeof ContributorInsightsMode];
declare const ContributorInsightsStatus: {
	readonly DISABLED: "DISABLED";
	readonly DISABLING: "DISABLING";
	readonly ENABLED: "ENABLED";
	readonly ENABLING: "ENABLING";
	readonly FAILED: "FAILED";
};
type ContributorInsightsStatus = (typeof ContributorInsightsStatus)[keyof typeof ContributorInsightsStatus];
declare const GlobalTableStatus: {
	readonly ACTIVE: "ACTIVE";
	readonly CREATING: "CREATING";
	readonly DELETING: "DELETING";
	readonly UPDATING: "UPDATING";
};
type GlobalTableStatus = (typeof GlobalTableStatus)[keyof typeof GlobalTableStatus];
declare const IndexStatus: {
	readonly ACTIVE: "ACTIVE";
	readonly CREATING: "CREATING";
	readonly DELETING: "DELETING";
	readonly UPDATING: "UPDATING";
};
type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];
declare const GlobalTableSettingsReplicationMode: {
	readonly DISABLED: "DISABLED";
	readonly ENABLED: "ENABLED";
	readonly ENABLED_WITH_OVERRIDES: "ENABLED_WITH_OVERRIDES";
};
type GlobalTableSettingsReplicationMode = (typeof GlobalTableSettingsReplicationMode)[keyof typeof GlobalTableSettingsReplicationMode];
declare const ReplicaStatus: {
	readonly ACTIVE: "ACTIVE";
	readonly ARCHIVED: "ARCHIVED";
	readonly ARCHIVING: "ARCHIVING";
	readonly CREATING: "CREATING";
	readonly CREATION_FAILED: "CREATION_FAILED";
	readonly DELETING: "DELETING";
	readonly INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS";
	readonly REGION_DISABLED: "REGION_DISABLED";
	readonly REPLICATION_NOT_AUTHORIZED: "REPLICATION_NOT_AUTHORIZED";
	readonly UPDATING: "UPDATING";
};
type ReplicaStatus = (typeof ReplicaStatus)[keyof typeof ReplicaStatus];
declare const TableClass: {
	readonly STANDARD: "STANDARD";
	readonly STANDARD_INFREQUENT_ACCESS: "STANDARD_INFREQUENT_ACCESS";
};
type TableClass = (typeof TableClass)[keyof typeof TableClass];
declare const TableStatus: {
	readonly ACTIVE: "ACTIVE";
	readonly ARCHIVED: "ARCHIVED";
	readonly ARCHIVING: "ARCHIVING";
	readonly CREATING: "CREATING";
	readonly DELETING: "DELETING";
	readonly INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS";
	readonly REPLICATION_NOT_AUTHORIZED: "REPLICATION_NOT_AUTHORIZED";
	readonly UPDATING: "UPDATING";
};
type TableStatus = (typeof TableStatus)[keyof typeof TableStatus];
declare const WitnessStatus: {
	readonly ACTIVE: "ACTIVE";
	readonly CREATING: "CREATING";
	readonly DELETING: "DELETING";
};
type WitnessStatus = (typeof WitnessStatus)[keyof typeof WitnessStatus];
declare const MultiRegionConsistency: {
	readonly EVENTUAL: "EVENTUAL";
	readonly STRONG: "STRONG";
};
type MultiRegionConsistency = (typeof MultiRegionConsistency)[keyof typeof MultiRegionConsistency];
declare const ExportFormat: {
	readonly DYNAMODB_JSON: "DYNAMODB_JSON";
	readonly ION: "ION";
};
type ExportFormat = (typeof ExportFormat)[keyof typeof ExportFormat];
declare const ExportStatus: {
	readonly COMPLETED: "COMPLETED";
	readonly FAILED: "FAILED";
	readonly IN_PROGRESS: "IN_PROGRESS";
};
type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];
declare const ExportType: {
	readonly FULL_EXPORT: "FULL_EXPORT";
	readonly INCREMENTAL_EXPORT: "INCREMENTAL_EXPORT";
};
type ExportType = (typeof ExportType)[keyof typeof ExportType];
declare const ExportViewType: {
	readonly NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES";
	readonly NEW_IMAGE: "NEW_IMAGE";
};
type ExportViewType = (typeof ExportViewType)[keyof typeof ExportViewType];
declare const S3SseAlgorithm: {
	readonly AES256: "AES256";
	readonly KMS: "KMS";
};
type S3SseAlgorithm = (typeof S3SseAlgorithm)[keyof typeof S3SseAlgorithm];
declare const ImportStatus: {
	readonly CANCELLED: "CANCELLED";
	readonly CANCELLING: "CANCELLING";
	readonly COMPLETED: "COMPLETED";
	readonly FAILED: "FAILED";
	readonly IN_PROGRESS: "IN_PROGRESS";
};
type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];
declare const InputCompressionType: {
	readonly GZIP: "GZIP";
	readonly NONE: "NONE";
	readonly ZSTD: "ZSTD";
};
type InputCompressionType = (typeof InputCompressionType)[keyof typeof InputCompressionType];
declare const InputFormat: {
	readonly CSV: "CSV";
	readonly DYNAMODB_JSON: "DYNAMODB_JSON";
	readonly ION: "ION";
};
type InputFormat = (typeof InputFormat)[keyof typeof InputFormat];
declare const DestinationStatus: {
	readonly ACTIVE: "ACTIVE";
	readonly DISABLED: "DISABLED";
	readonly DISABLING: "DISABLING";
	readonly ENABLE_FAILED: "ENABLE_FAILED";
	readonly ENABLING: "ENABLING";
	readonly UPDATING: "UPDATING";
};
type DestinationStatus = (typeof DestinationStatus)[keyof typeof DestinationStatus];
interface ArchivalSummary {
	/**
	 * <p>The date and time when table archival was initiated by DynamoDB, in UNIX epoch time
	 *             format.</p>
	 * @public
	 */
	ArchivalDateTime?: Date | undefined;
	/**
	 * <p>The reason DynamoDB archived the table. Currently, the only possible value is:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS</code> - The table was archived due
	 *                     to the table's KMS key being inaccessible for more than seven
	 *                     days. An On-Demand backup was created at the archival time.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ArchivalReason?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the backup the table was archived to, when
	 *             applicable in the archival reason. If you wish to restore this backup to the same table
	 *             name, you will need to delete the original table.</p>
	 * @public
	 */
	ArchivalBackupArn?: string | undefined;
}
interface AttributeDefinition {
	/**
	 * <p>A name for the attribute.</p>
	 * @public
	 */
	AttributeName: string | undefined;
	/**
	 * <p>The data type for the attribute, where:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>S</code> - the attribute is of type String</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>N</code> - the attribute is of type Number</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>B</code> - the attribute is of type Binary</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	AttributeType: ScalarAttributeType | undefined;
}
interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
	/**
	 * <p>Indicates whether scale in by the target tracking policy is disabled. If the value is
	 *             true, scale in is disabled and the target tracking policy won't remove capacity from the
	 *             scalable resource. Otherwise, scale in is enabled and the target tracking policy can
	 *             remove capacity from the scalable resource. The default value is false.</p>
	 * @public
	 */
	DisableScaleIn?: boolean | undefined;
	/**
	 * <p>The amount of time, in seconds, after a scale in activity completes before another
	 *             scale in activity can start. The cooldown period is used to block subsequent scale in
	 *             requests until it has expired. You should scale in conservatively to protect your
	 *             application's availability. However, if another alarm triggers a scale out policy during
	 *             the cooldown period after a scale-in, application auto scaling scales out your scalable
	 *             target immediately. </p>
	 * @public
	 */
	ScaleInCooldown?: number | undefined;
	/**
	 * <p>The amount of time, in seconds, after a scale out activity completes before another
	 *             scale out activity can start. While the cooldown period is in effect, the capacity that
	 *             has been added by the previous scale out event that initiated the cooldown is calculated
	 *             as part of the desired capacity for the next scale out. You should continuously (but not
	 *             excessively) scale out.</p>
	 * @public
	 */
	ScaleOutCooldown?: number | undefined;
	/**
	 * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10)
	 *             or 2e-360 to 2e360 (Base 2).</p>
	 * @public
	 */
	TargetValue: number | undefined;
}
interface AutoScalingPolicyDescription {
	/**
	 * <p>The name of the scaling policy.</p>
	 * @public
	 */
	PolicyName?: string | undefined;
	/**
	 * <p>Represents a target tracking scaling policy configuration.</p>
	 * @public
	 */
	TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription | undefined;
}
interface AutoScalingSettingsDescription {
	/**
	 * <p>The minimum capacity units that a global table or global secondary index should be
	 *             scaled down to.</p>
	 * @public
	 */
	MinimumUnits?: number | undefined;
	/**
	 * <p>The maximum capacity units that a global table or global secondary index should be
	 *             scaled up to.</p>
	 * @public
	 */
	MaximumUnits?: number | undefined;
	/**
	 * <p>Disabled auto scaling for this global table or global secondary index.</p>
	 * @public
	 */
	AutoScalingDisabled?: boolean | undefined;
	/**
	 * <p>Role ARN used for configuring the auto scaling policy.</p>
	 * @public
	 */
	AutoScalingRoleArn?: string | undefined;
	/**
	 * <p>Information about the scaling policies.</p>
	 * @public
	 */
	ScalingPolicies?: AutoScalingPolicyDescription[] | undefined;
}
interface BackupDetails {
	/**
	 * <p>ARN associated with the backup.</p>
	 * @public
	 */
	BackupArn: string | undefined;
	/**
	 * <p>Name of the requested backup.</p>
	 * @public
	 */
	BackupName: string | undefined;
	/**
	 * <p>Size of the backup in bytes. DynamoDB updates this value approximately every six
	 *             hours. Recent changes might not be reflected in this value.</p>
	 * @public
	 */
	BackupSizeBytes?: number | undefined;
	/**
	 * <p>Backup can be in one of the following states: CREATING, ACTIVE, DELETED. </p>
	 * @public
	 */
	BackupStatus: BackupStatus | undefined;
	/**
	 * <p>BackupType:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>USER</code> - You create and manage these using the on-demand backup
	 *                     feature.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SYSTEM</code> - If you delete a table with point-in-time recovery enabled,
	 *                     a <code>SYSTEM</code> backup is automatically created and is retained for 35
	 *                     days (at no additional cost). System backups allow you to restore the deleted
	 *                     table to the state it was in just before the point of deletion. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>AWS_BACKUP</code> - On-demand backup created by you from Backup service.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	BackupType: BackupType | undefined;
	/**
	 * <p>Time at which the backup was created. This is the request time of the backup. </p>
	 * @public
	 */
	BackupCreationDateTime: Date | undefined;
	/**
	 * <p>Time at which the automatic on-demand backup created by DynamoDB will
	 *             expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after
	 *             its creation.</p>
	 * @public
	 */
	BackupExpiryDateTime?: Date | undefined;
}
interface KeySchemaElement {
	/**
	 * <p>The name of a key attribute.</p>
	 * @public
	 */
	AttributeName: string | undefined;
	/**
	 * <p>The role that this key attribute will assume:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>HASH</code> - partition key</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>RANGE</code> - sort key</p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>The partition key of an item is also known as its <i>hash
	 *                     attribute</i>. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across
	 *                 partitions, based on their partition key values.</p>
	 *             <p>The sort key of an item is also known as its <i>range attribute</i>.
	 *                 The term "range attribute" derives from the way DynamoDB stores items with
	 *                 the same partition key physically close together, in sorted order by the sort key
	 *                 value.</p>
	 *          </note>
	 * @public
	 */
	KeyType: KeyType | undefined;
}
interface OnDemandThroughput {
	/**
	 * <p>Maximum number of read request units for the specified table.</p>
	 *          <p>To specify a maximum <code>OnDemandThroughput</code> on your table, set the value of
	 *                 <code>MaxReadRequestUnits</code> as greater than or equal to 1. To remove the
	 *             maximum <code>OnDemandThroughput</code> that is currently set on your table, set the
	 *             value of <code>MaxReadRequestUnits</code> to -1.</p>
	 * @public
	 */
	MaxReadRequestUnits?: number | undefined;
	/**
	 * <p>Maximum number of write request units for the specified table.</p>
	 *          <p>To specify a maximum <code>OnDemandThroughput</code> on your table, set the value of
	 *                 <code>MaxWriteRequestUnits</code> as greater than or equal to 1. To remove the
	 *             maximum <code>OnDemandThroughput</code> that is currently set on your table, set the
	 *             value of <code>MaxWriteRequestUnits</code> to -1.</p>
	 * @public
	 */
	MaxWriteRequestUnits?: number | undefined;
}
interface ProvisionedThroughput {
	/**
	 * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB
	 *             returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html">Specifying
	 *                 Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 *          <p>If read/write capacity mode is <code>PAY_PER_REQUEST</code> the value is set to
	 *             0.</p>
	 * @public
	 */
	ReadCapacityUnits: number | undefined;
	/**
	 * <p>The maximum number of writes consumed per second before DynamoDB returns a
	 *                 <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html">Specifying
	 *                 Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 *          <p>If read/write capacity mode is <code>PAY_PER_REQUEST</code> the value is set to
	 *             0.</p>
	 * @public
	 */
	WriteCapacityUnits: number | undefined;
}
interface SourceTableDetails {
	/**
	 * <p>The name of the table for which the backup was created. </p>
	 * @public
	 */
	TableName: string | undefined;
	/**
	 * <p>Unique identifier for the table for which the backup was created. </p>
	 * @public
	 */
	TableId: string | undefined;
	/**
	 * <p>ARN of the table for which backup was created. </p>
	 * @public
	 */
	TableArn?: string | undefined;
	/**
	 * <p>Size of the table in bytes. Note that this is an approximate value.</p>
	 * @public
	 */
	TableSizeBytes?: number | undefined;
	/**
	 * <p>Schema of the table. </p>
	 * @public
	 */
	KeySchema: KeySchemaElement[] | undefined;
	/**
	 * <p>Time when the source table was created. </p>
	 * @public
	 */
	TableCreationDateTime: Date | undefined;
	/**
	 * <p>Read IOPs and Write IOPS on the table when the backup was created.</p>
	 * @public
	 */
	ProvisionedThroughput: ProvisionedThroughput | undefined;
	/**
	 * <p>Sets the maximum number of read and write units for the specified on-demand table. If
	 *             you use this parameter, you must specify <code>MaxReadRequestUnits</code>,
	 *                 <code>MaxWriteRequestUnits</code>, or both.</p>
	 * @public
	 */
	OnDemandThroughput?: OnDemandThroughput | undefined;
	/**
	 * <p>Number of items in the table. Note that this is an approximate value. </p>
	 * @public
	 */
	ItemCount?: number | undefined;
	/**
	 * <p>Controls how you are charged for read and write throughput and how you manage
	 *             capacity. This setting can be changed later.</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>PROVISIONED</code> - Sets the read/write capacity mode to
	 *                         <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for
	 *                     predictable workloads.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to
	 *                         <code>PAY_PER_REQUEST</code>. We recommend using
	 *                         <code>PAY_PER_REQUEST</code> for unpredictable workloads. </p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	BillingMode?: BillingMode | undefined;
}
interface Projection {
	/**
	 * <p>The set of attributes that are projected into the index:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the
	 *                     index.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>INCLUDE</code> - In addition to the attributes described in
	 *                         <code>KEYS_ONLY</code>, the secondary index will include other non-key
	 *                     attributes that you specify.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ALL</code> - All of the table attributes are projected into the
	 *                     index.</p>
	 *             </li>
	 *          </ul>
	 *          <p>When using the DynamoDB console, <code>ALL</code> is selected by default.</p>
	 * @public
	 */
	ProjectionType?: ProjectionType | undefined;
	/**
	 * <p>Represents the non-key attribute names which will be projected into the index.</p>
	 *          <p>For global and local secondary indexes, the total count of
	 *                 <code>NonKeyAttributes</code> summed across all of the secondary indexes, must not
	 *             exceed 100. If you project the same attribute into two different indexes, this counts as
	 *             two distinct attributes when determining the total. This limit only applies when you
	 *             specify the ProjectionType of <code>INCLUDE</code>. You still can specify the
	 *             ProjectionType of <code>ALL</code> to project all attributes from the source table, even
	 *             if the table has more than 100 attributes.</p>
	 * @public
	 */
	NonKeyAttributes?: string[] | undefined;
}
interface GlobalSecondaryIndexInfo {
	/**
	 * <p>The name of the global secondary index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The complete key schema for a global secondary index, which consists of one or more
	 *             pairs of attribute names and key types:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>HASH</code> - partition key</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>RANGE</code> - sort key</p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>The partition key of an item is also known as its <i>hash
	 *                     attribute</i>. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across
	 *                 partitions, based on their partition key values.</p>
	 *             <p>The sort key of an item is also known as its <i>range attribute</i>.
	 *                 The term "range attribute" derives from the way DynamoDB stores items with
	 *                 the same partition key physically close together, in sorted order by the sort key
	 *                 value.</p>
	 *          </note>
	 * @public
	 */
	KeySchema?: KeySchemaElement[] | undefined;
	/**
	 * <p>Represents attributes that are copied (projected) from the table into the global
	 *             secondary index. These are in addition to the primary key attributes and index key
	 *             attributes, which are automatically projected. </p>
	 * @public
	 */
	Projection?: Projection | undefined;
	/**
	 * <p>Represents the provisioned throughput settings for the specified global secondary
	 *             index. </p>
	 * @public
	 */
	ProvisionedThroughput?: ProvisionedThroughput | undefined;
	/**
	 * <p>Sets the maximum number of read and write units for the specified on-demand table. If
	 *             you use this parameter, you must specify <code>MaxReadRequestUnits</code>,
	 *                 <code>MaxWriteRequestUnits</code>, or both.</p>
	 * @public
	 */
	OnDemandThroughput?: OnDemandThroughput | undefined;
}
interface LocalSecondaryIndexInfo {
	/**
	 * <p>Represents the name of the local secondary index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The complete key schema for a local secondary index, which consists of one or more
	 *             pairs of attribute names and key types:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>HASH</code> - partition key</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>RANGE</code> - sort key</p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>The partition key of an item is also known as its <i>hash
	 *                     attribute</i>. The term "hash attribute" derives from DynamoDB's usage of
	 *                 an internal hash function to evenly distribute data items across partitions, based
	 *                 on their partition key values.</p>
	 *             <p>The sort key of an item is also known as its <i>range attribute</i>.
	 *                 The term "range attribute" derives from the way DynamoDB stores items with the same
	 *                 partition key physically close together, in sorted order by the sort key
	 *                 value.</p>
	 *          </note>
	 * @public
	 */
	KeySchema?: KeySchemaElement[] | undefined;
	/**
	 * <p>Represents attributes that are copied (projected) from the table into the global
	 *             secondary index. These are in addition to the primary key attributes and index key
	 *             attributes, which are automatically projected. </p>
	 * @public
	 */
	Projection?: Projection | undefined;
}
interface SSEDescription {
	/**
	 * <p>Represents the current state of server-side encryption. The only supported values
	 *             are:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ENABLED</code> - Server-side encryption is enabled.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - Server-side encryption is being updated.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	Status?: SSEStatus | undefined;
	/**
	 * <p>Server-side encryption type. The only supported value is:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>KMS</code> - Server-side encryption that uses Key Management Service. The
	 *                     key is stored in your account and is managed by KMS (KMS charges apply).</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	SSEType?: SSEType | undefined;
	/**
	 * <p>The KMS key ARN used for the KMS encryption.</p>
	 * @public
	 */
	KMSMasterKeyArn?: string | undefined;
	/**
	 * <p>Indicates the time, in UNIX epoch date format, when DynamoDB detected that
	 *             the table's KMS key was inaccessible. This attribute will automatically
	 *             be cleared when DynamoDB detects that the table's KMS key is accessible
	 *             again. DynamoDB will initiate the table archival process when table's KMS key remains inaccessible for more than seven days from this date.</p>
	 * @public
	 */
	InaccessibleEncryptionDateTime?: Date | undefined;
}
interface StreamSpecification {
	/**
	 * <p>Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the
	 *             table.</p>
	 * @public
	 */
	StreamEnabled: boolean | undefined;
	/**
	 * <p> When an item in the table is modified, <code>StreamViewType</code> determines what
	 *             information is written to the stream for this table. Valid values for
	 *                 <code>StreamViewType</code> are:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>KEYS_ONLY</code> - Only the key attributes of the modified item are
	 *                     written to the stream.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>NEW_IMAGE</code> - The entire item, as it appears after it was modified,
	 *                     is written to the stream.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>OLD_IMAGE</code> - The entire item, as it appeared before it was modified,
	 *                     is written to the stream.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>NEW_AND_OLD_IMAGES</code> - Both the new and the old item images of the
	 *                     item are written to the stream.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	StreamViewType?: StreamViewType | undefined;
}
interface TimeToLiveDescription {
	/**
	 * <p> The TTL status for the table.</p>
	 * @public
	 */
	TimeToLiveStatus?: TimeToLiveStatus | undefined;
	/**
	 * <p> The name of the TTL attribute for items in the table.</p>
	 * @public
	 */
	AttributeName?: string | undefined;
}
interface SearchSchemaElement {
	/**
	 * <p>The name of the attribute.</p>
	 * @public
	 */
	AttributeName: string | undefined;
	/**
	 * <p>The role of the attribute in the search schema. Valid values:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>HASH</code> - A partition key that partitions the vector index for
	 *                     independent scaling. When specified, you must provide this attribute's value
	 *                     in the <code>SearchConditionExpression</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>INLINE_FILTER</code> - An attribute projected into the vector index
	 *                     for filtering at the storage layer during search. Inline filters are
	 *                     optional in the <code>SearchConditionExpression</code>.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	SearchSchemaElementType: SearchSchemaElementType | undefined;
}
interface VectorAttributeDefinition {
	/**
	 * <p>The name of the vector attribute.</p>
	 * @public
	 */
	AttributeName: string | undefined;
}
interface VectorIndexInfo {
	/**
	 * <p>The name of the vector index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The vector attribute configuration for the index.</p>
	 * @public
	 */
	VectorAttribute?: VectorAttributeDefinition | undefined;
	/**
	 * <p>The search schema that defines partition key and inline filter attributes for
	 *             the vector index.</p>
	 * @public
	 */
	SearchSchema?: SearchSchemaElement[] | undefined;
	/**
	 * <p>Specifies attributes that are copied (projected) from the table into the vector
	 *             index.</p>
	 * @public
	 */
	Projection?: Projection | undefined;
	/**
	 * <p>The number of dimensions in each vector.</p>
	 * @public
	 */
	Dimensions?: number | undefined;
	/**
	 * <p>The distance function used to calculate similarity between vectors.</p>
	 * @public
	 */
	DistanceFunction?: VectorDistanceFunction | undefined;
}
interface SourceTableFeatureDetails {
	/**
	 * <p>Represents the LSI properties for the table when the backup was created. It includes
	 *             the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup.
	 *         </p>
	 * @public
	 */
	LocalSecondaryIndexes?: LocalSecondaryIndexInfo[] | undefined;
	/**
	 * <p>Represents the GSI properties for the table when the backup was created. It includes
	 *             the IndexName, KeySchema, Projection, and ProvisionedThroughput for the GSIs on the
	 *             table at the time of backup. </p>
	 * @public
	 */
	GlobalSecondaryIndexes?: GlobalSecondaryIndexInfo[] | undefined;
	/**
	 * <p>Stream settings on the table when the backup was created.</p>
	 * @public
	 */
	StreamDescription?: StreamSpecification | undefined;
	/**
	 * <p>Time to Live settings on the table when the backup was created.</p>
	 * @public
	 */
	TimeToLiveDescription?: TimeToLiveDescription | undefined;
	/**
	 * <p>The description of the server-side encryption status on the table when the backup was
	 *             created.</p>
	 * @public
	 */
	SSEDescription?: SSEDescription | undefined;
	/**
	 * <p>The vector index properties for the table at the time the backup was created,
	 *             including the index name, vector attribute, dimensions, distance function, search
	 *             schema, and projection.</p>
	 * @public
	 */
	VectorIndexes?: VectorIndexInfo[] | undefined;
}
interface BackupDescription {
	/**
	 * <p>Contains the details of the backup created for the table. </p>
	 * @public
	 */
	BackupDetails?: BackupDetails | undefined;
	/**
	 * <p>Contains the details of the table when the backup was created. </p>
	 * @public
	 */
	SourceTableDetails?: SourceTableDetails | undefined;
	/**
	 * <p>Contains the details of the features enabled on the table when the backup was created.
	 *             For example, LSIs, GSIs, streams, TTL.</p>
	 * @public
	 */
	SourceTableFeatureDetails?: SourceTableFeatureDetails | undefined;
}
interface BackupSummary {
	/**
	 * <p>Name of the table.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>Unique identifier for the table.</p>
	 * @public
	 */
	TableId?: string | undefined;
	/**
	 * <p>ARN associated with the table.</p>
	 * @public
	 */
	TableArn?: string | undefined;
	/**
	 * <p>ARN associated with the backup.</p>
	 * @public
	 */
	BackupArn?: string | undefined;
	/**
	 * <p>Name of the specified backup.</p>
	 * @public
	 */
	BackupName?: string | undefined;
	/**
	 * <p>Time at which the backup was created.</p>
	 * @public
	 */
	BackupCreationDateTime?: Date | undefined;
	/**
	 * <p>Time at which the automatic on-demand backup created by DynamoDB will
	 *             expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after
	 *             its creation.</p>
	 * @public
	 */
	BackupExpiryDateTime?: Date | undefined;
	/**
	 * <p>Backup can be in one of the following states: CREATING, ACTIVE, DELETED.</p>
	 * @public
	 */
	BackupStatus?: BackupStatus | undefined;
	/**
	 * <p>BackupType:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>USER</code> - You create and manage these using the on-demand backup
	 *                     feature.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SYSTEM</code> - If you delete a table with point-in-time recovery enabled,
	 *                     a <code>SYSTEM</code> backup is automatically created and is retained for 35
	 *                     days (at no additional cost). System backups allow you to restore the deleted
	 *                     table to the state it was in just before the point of deletion. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>AWS_BACKUP</code> - On-demand backup created by you from Backup service.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	BackupType?: BackupType | undefined;
	/**
	 * <p>Size of the backup in bytes.</p>
	 * @public
	 */
	BackupSizeBytes?: number | undefined;
}
interface Capacity {
	/**
	 * <p>The total number of read capacity units consumed on a table or an index.</p>
	 * @public
	 */
	ReadCapacityUnits?: number | undefined;
	/**
	 * <p>The total number of write capacity units consumed on a table or an index.</p>
	 * @public
	 */
	WriteCapacityUnits?: number | undefined;
	/**
	 * <p>The total number of capacity units consumed on a table or an index.</p>
	 * @public
	 */
	CapacityUnits?: number | undefined;
}
interface VectorCapacity {
	/**
	 * <p>The number of vector search request bytes consumed by a
	 *             <code>SearchVectors</code> operation.</p>
	 * @public
	 */
	VectorSearchRequestBytes?: number | undefined;
	/**
	 * <p>The number of vector write request bytes consumed when writing to a vector index.
	 *             Reported for write operations that modify attributes indexed by a vector
	 *             index.</p>
	 * @public
	 */
	VectorWriteRequestBytes?: number | undefined;
}
interface ConsumedCapacity {
	/**
	 * <p>The name of the table that was affected by the operation. If you had specified the
	 *             Amazon Resource Name (ARN) of a table in the input, you'll see the table ARN in the response.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>The total number of capacity units consumed by the operation.</p>
	 * @public
	 */
	CapacityUnits?: number | undefined;
	/**
	 * <p>The total number of read capacity units consumed by the operation.</p>
	 * @public
	 */
	ReadCapacityUnits?: number | undefined;
	/**
	 * <p>The total number of write capacity units consumed by the operation.</p>
	 * @public
	 */
	WriteCapacityUnits?: number | undefined;
	/**
	 * <p>The amount of throughput consumed on the table affected by the operation.</p>
	 * @public
	 */
	Table?: Capacity | undefined;
	/**
	 * <p>The amount of throughput consumed on each local index affected by the
	 *             operation.</p>
	 * @public
	 */
	LocalSecondaryIndexes?: Record<string, Capacity> | undefined;
	/**
	 * <p>The amount of throughput consumed on each global index affected by the
	 *             operation.</p>
	 * @public
	 */
	GlobalSecondaryIndexes?: Record<string, Capacity> | undefined;
	/**
	 * <p>The amount of throughput consumed on each vector index affected by the operation.
	 *             Each entry contains <code>VectorWriteRequestBytes</code> (for write operations) or
	 *             <code>VectorSearchRequestBytes</code> (for search operations).</p>
	 * @public
	 */
	VectorIndexes?: Record<string, VectorCapacity> | undefined;
}
interface BillingModeSummary {
	/**
	 * <p>Controls how you are charged for read and write throughput and how you manage
	 *             capacity. This setting can be changed later.</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>PROVISIONED</code> - Sets the read/write capacity mode to
	 *                         <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for
	 *                     predictable workloads.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to
	 *                         <code>PAY_PER_REQUEST</code>. We recommend using
	 *                         <code>PAY_PER_REQUEST</code> for unpredictable workloads. </p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	BillingMode?: BillingMode | undefined;
	/**
	 * <p>Represents the time when <code>PAY_PER_REQUEST</code> was last set as the read/write
	 *             capacity mode.</p>
	 * @public
	 */
	LastUpdateToPayPerRequestDateTime?: Date | undefined;
}
interface PointInTimeRecoveryDescription {
	/**
	 * <p>The current state of point in time recovery:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ENABLED</code> - Point in time recovery is enabled.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DISABLED</code> - Point in time recovery is disabled.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	PointInTimeRecoveryStatus?: PointInTimeRecoveryStatus | undefined;
	/**
	 * <p>The number of preceding days for which continuous backups are taken and maintained.
	 *             Your table data is only recoverable to any point-in-time from within the configured
	 *             recovery period. This parameter is optional.</p>
	 * @public
	 */
	RecoveryPeriodInDays?: number | undefined;
	/**
	 * <p>Specifies the earliest point in time you can restore your table to. You can restore
	 *             your table to any point in time during the last 35 days. </p>
	 * @public
	 */
	EarliestRestorableDateTime?: Date | undefined;
	/**
	 * <p>
	 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
	 *         </p>
	 * @public
	 */
	LatestRestorableDateTime?: Date | undefined;
}
interface ContinuousBackupsDescription {
	/**
	 * <p>
	 *             <code>ContinuousBackupsStatus</code> can be one of the following states: ENABLED,
	 *             DISABLED</p>
	 * @public
	 */
	ContinuousBackupsStatus: ContinuousBackupsStatus | undefined;
	/**
	 * <p>The description of the point in time recovery settings applied to the table.</p>
	 * @public
	 */
	PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription | undefined;
}
interface ContributorInsightsSummary {
	/**
	 * <p>Name of the table associated with the summary.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>Name of the index associated with the summary, if any.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>Describes the current status for contributor insights for the given table and index,
	 *             if applicable.</p>
	 * @public
	 */
	ContributorInsightsStatus?: ContributorInsightsStatus | undefined;
	/**
	 * <p>Indicates the current mode of CloudWatch Contributor Insights, specifying whether it
	 *             tracks all access and throttled events or throttled events only for the DynamoDB
	 *             table or index.</p>
	 * @public
	 */
	ContributorInsightsMode?: ContributorInsightsMode | undefined;
}
interface CreateBackupOutput {
	/**
	 * <p>Contains the details of the backup created for the table.</p>
	 * @public
	 */
	BackupDetails?: BackupDetails | undefined;
}
interface WarmThroughput {
	/**
	 * <p>Represents the number of read operations your base table can instantaneously
	 *             support.</p>
	 * @public
	 */
	ReadUnitsPerSecond?: number | undefined;
	/**
	 * <p>Represents the number of write operations your base table can instantaneously
	 *             support.</p>
	 * @public
	 */
	WriteUnitsPerSecond?: number | undefined;
}
interface Replica {
	/**
	 * <p>The Region where the replica needs to be created.</p>
	 * @public
	 */
	RegionName?: string | undefined;
}
interface OnDemandThroughputOverride {
	/**
	 * <p>Maximum number of read request units for the specified replica table.</p>
	 * @public
	 */
	MaxReadRequestUnits?: number | undefined;
}
interface ProvisionedThroughputOverride {
	/**
	 * <p>Replica-specific read capacity units. If not specified, uses the source table's read
	 *             capacity settings.</p>
	 * @public
	 */
	ReadCapacityUnits?: number | undefined;
}
interface GlobalSecondaryIndexWarmThroughputDescription {
	/**
	 * <p>Represents warm throughput read units per second value for a global secondary
	 *             index.</p>
	 * @public
	 */
	ReadUnitsPerSecond?: number | undefined;
	/**
	 * <p>Represents warm throughput write units per second value for a global secondary
	 *             index.</p>
	 * @public
	 */
	WriteUnitsPerSecond?: number | undefined;
	/**
	 * <p>Represents the warm throughput status being created or updated on a global secondary
	 *             index. The status can only be <code>UPDATING</code> or <code>ACTIVE</code>.</p>
	 * @public
	 */
	Status?: IndexStatus | undefined;
}
interface ReplicaGlobalSecondaryIndexDescription {
	/**
	 * <p>The name of the global secondary index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>If not described, uses the source table GSI's read capacity settings.</p>
	 * @public
	 */
	ProvisionedThroughputOverride?: ProvisionedThroughputOverride | undefined;
	/**
	 * <p>Overrides the maximum on-demand throughput for the specified global secondary index in
	 *             the specified replica table.</p>
	 * @public
	 */
	OnDemandThroughputOverride?: OnDemandThroughputOverride | undefined;
	/**
	 * <p>Represents the warm throughput of the global secondary index for this replica.</p>
	 * @public
	 */
	WarmThroughput?: GlobalSecondaryIndexWarmThroughputDescription | undefined;
}
interface TableClassSummary {
	/**
	 * <p>The table class of the specified table. Valid values are <code>STANDARD</code> and
	 *                 <code>STANDARD_INFREQUENT_ACCESS</code>.</p>
	 * @public
	 */
	TableClass?: TableClass | undefined;
	/**
	 * <p>The date and time at which the table class was last updated.</p>
	 * @public
	 */
	LastUpdateDateTime?: Date | undefined;
}
interface TableWarmThroughputDescription {
	/**
	 * <p>Represents the base table's warm throughput value in read units per second.</p>
	 * @public
	 */
	ReadUnitsPerSecond?: number | undefined;
	/**
	 * <p>Represents the base table's warm throughput value in write units per second.</p>
	 * @public
	 */
	WriteUnitsPerSecond?: number | undefined;
	/**
	 * <p>Represents warm throughput value of the base table.</p>
	 * @public
	 */
	Status?: TableStatus | undefined;
}
interface ReplicaDescription {
	/**
	 * <p>The name of the Region.</p>
	 * @public
	 */
	RegionName?: string | undefined;
	/**
	 * <p>The current state of the replica:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The replica is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The replica is being updated.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The replica is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The replica is ready for use.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>REGION_DISABLED</code> - The replica is inaccessible because the Amazon Web Services Region has been disabled.</p>
	 *                <note>
	 *                   <p>If the Amazon Web Services Region remains inaccessible for more than 20
	 *                         hours, DynamoDB will remove this replica from the replication
	 *                         group. The replica will not be deleted and replication will stop from and to
	 *                         this region.</p>
	 *                </note>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS </code> - The KMS key
	 *                     used to encrypt the table is inaccessible.</p>
	 *                <note>
	 *                   <p>If the KMS key remains inaccessible for more than 20 hours,
	 *                             DynamoDB will remove this replica from the replication group.
	 *                         The replica will not be deleted and replication will stop from and to this
	 *                         region.</p>
	 *                </note>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ReplicaStatus?: ReplicaStatus | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the global table replica.</p>
	 * @public
	 */
	ReplicaArn?: string | undefined;
	/**
	 * <p>Detailed information about the replica status.</p>
	 * @public
	 */
	ReplicaStatusDescription?: string | undefined;
	/**
	 * <p>Specifies the progress of a Create, Update, or Delete action on the replica as a
	 *             percentage.</p>
	 * @public
	 */
	ReplicaStatusPercentProgress?: string | undefined;
	/**
	 * <p>The KMS key of the replica that will be used for KMS
	 *             encryption.</p>
	 * @public
	 */
	KMSMasterKeyId?: string | undefined;
	/**
	 * <p>Replica-specific provisioned throughput. If not described, uses the source table's
	 *             provisioned throughput settings.</p>
	 * @public
	 */
	ProvisionedThroughputOverride?: ProvisionedThroughputOverride | undefined;
	/**
	 * <p>Overrides the maximum on-demand throughput settings for the specified replica
	 *             table.</p>
	 * @public
	 */
	OnDemandThroughputOverride?: OnDemandThroughputOverride | undefined;
	/**
	 * <p>Represents the warm throughput value for this replica.</p>
	 * @public
	 */
	WarmThroughput?: TableWarmThroughputDescription | undefined;
	/**
	 * <p>Replica-specific global secondary index settings.</p>
	 * @public
	 */
	GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[] | undefined;
	/**
	 * <p>The time at which the replica was first detected as inaccessible. To determine cause
	 *             of inaccessibility check the <code>ReplicaStatus</code> property.</p>
	 * @public
	 */
	ReplicaInaccessibleDateTime?: Date | undefined;
	/**
	 * <p>Contains details of the table class.</p>
	 * @public
	 */
	ReplicaTableClassSummary?: TableClassSummary | undefined;
	/**
	 * <p>Indicates one of the settings synchronization modes for the global table replica:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ENABLED</code>: Indicates that the settings synchronization mode for the global table
	 *                     replica is enabled.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DISABLED</code>: Indicates that the settings synchronization mode for the global table
	 *                     replica is disabled.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ENABLED_WITH_OVERRIDES</code>: This mode is set by default for a same account global table.
	 *                     Indicates that certain global table settings can be overridden.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	GlobalTableSettingsReplicationMode?: GlobalTableSettingsReplicationMode | undefined;
}
interface GlobalTableDescription {
	/**
	 * <p>The Regions where the global table has replicas.</p>
	 * @public
	 */
	ReplicationGroup?: ReplicaDescription[] | undefined;
	/**
	 * <p>The unique identifier of the global table.</p>
	 * @public
	 */
	GlobalTableArn?: string | undefined;
	/**
	 * <p>The creation time of the global table.</p>
	 * @public
	 */
	CreationDateTime?: Date | undefined;
	/**
	 * <p>The current state of the global table:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The global table is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The global table is being updated.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The global table is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The global table is ready for use.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	GlobalTableStatus?: GlobalTableStatus | undefined;
	/**
	 * <p>The global table name.</p>
	 * @public
	 */
	GlobalTableName?: string | undefined;
}
interface CreateGlobalTableOutput {
	/**
	 * <p>Contains the details of the global table.</p>
	 * @public
	 */
	GlobalTableDescription?: GlobalTableDescription | undefined;
}
interface GlobalSecondaryIndex {
	/**
	 * <p>The name of the global secondary index. The name must be unique among all other
	 *             indexes on this table.</p>
	 * @public
	 */
	IndexName: string | undefined;
	/**
	 * <p>The complete key schema for a global secondary index, which consists of one or more
	 *             pairs of attribute names and key types:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>HASH</code> - partition key</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>RANGE</code> - sort key</p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>The partition key of an item is also known as its <i>hash
	 *                     attribute</i>. The term "hash attribute" derives from DynamoDB's usage of
	 *                 an internal hash function to evenly distribute data items across partitions, based
	 *                 on their partition key values.</p>
	 *             <p>The sort key of an item is also known as its <i>range attribute</i>.
	 *                 The term "range attribute" derives from the way DynamoDB stores items with the same
	 *                 partition key physically close together, in sorted order by the sort key
	 *                 value.</p>
	 *          </note>
	 * @public
	 */
	KeySchema: KeySchemaElement[] | undefined;
	/**
	 * <p>Represents attributes that are copied (projected) from the table into the global
	 *             secondary index. These are in addition to the primary key attributes and index key
	 *             attributes, which are automatically projected. </p>
	 * @public
	 */
	Projection: Projection | undefined;
	/**
	 * <p>Represents the provisioned throughput settings for the specified global secondary
	 *             index. You must use either <code>OnDemandThroughput</code> or
	 *                 <code>ProvisionedThroughput</code> based on your table's capacity mode.</p>
	 *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service,
	 *                 Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	ProvisionedThroughput?: ProvisionedThroughput | undefined;
	/**
	 * <p>The maximum number of read and write units for the specified global secondary index.
	 *             If you use this parameter, you must specify <code>MaxReadRequestUnits</code>,
	 *                 <code>MaxWriteRequestUnits</code>, or both. You must use either
	 *                 <code>OnDemandThroughput</code> or <code>ProvisionedThroughput</code> based on your
	 *             table's capacity mode.</p>
	 * @public
	 */
	OnDemandThroughput?: OnDemandThroughput | undefined;
	/**
	 * <p>Represents the warm throughput value (in read units per second and write units per
	 *             second) for the specified secondary index. If you use this parameter, you must specify
	 *                 <code>ReadUnitsPerSecond</code>, <code>WriteUnitsPerSecond</code>, or both.</p>
	 * @public
	 */
	WarmThroughput?: WarmThroughput | undefined;
}
interface SSESpecification {
	/**
	 * <p>Indicates whether server-side encryption is done using an Amazon Web Services managed
	 *             key or an Amazon Web Services owned key. If enabled (true), server-side encryption type
	 *             is set to <code>KMS</code> and an Amazon Web Services managed key is used (KMS charges apply). If disabled (false) or not specified, server-side
	 *             encryption is set to Amazon Web Services owned key.</p>
	 * @public
	 */
	Enabled?: boolean | undefined;
	/**
	 * <p>Server-side encryption type. The only supported value is:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>KMS</code> - Server-side encryption that uses Key Management Service. The
	 *                     key is stored in your account and is managed by KMS (KMS charges apply).</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	SSEType?: SSEType | undefined;
	/**
	 * <p>The KMS key that should be used for the KMS encryption.
	 *             To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.
	 *             Note that you should only provide this parameter if the key is different from the
	 *             default DynamoDB key <code>alias/aws/dynamodb</code>.</p>
	 * @public
	 */
	KMSMasterKeyId?: string | undefined;
}
interface Tag {
	/**
	 * <p>The key of the tag. Tag keys are case sensitive. Each DynamoDB table can
	 *             only have up to one tag with the same key. If you try to add an existing tag (same key),
	 *             the existing tag value will be updated to the new value.</p>
	 * @public
	 */
	Key: string | undefined;
	/**
	 * <p>The value of the tag. Tag values are case-sensitive and can be null.</p>
	 * @public
	 */
	Value: string | undefined;
}
interface VectorIndex {
	/**
	 * <p>The name of the vector index.</p>
	 * @public
	 */
	IndexName: string | undefined;
	/**
	 * <p>The vector attribute configuration for the index.</p>
	 * @public
	 */
	VectorAttribute: VectorAttributeDefinition | undefined;
	/**
	 * <p>The search schema that defines partition key and inline filter attributes for
	 *             the vector index.</p>
	 * @public
	 */
	SearchSchema?: SearchSchemaElement[] | undefined;
	/**
	 * <p>Specifies attributes that are copied (projected) from the table into the vector
	 *             index.</p>
	 * @public
	 */
	Projection: Projection | undefined;
	/**
	 * <p>The number of dimensions in each vector.</p>
	 * @public
	 */
	Dimensions: number | undefined;
	/**
	 * <p>The distance function used to calculate similarity between vectors. Valid values:
	 *             <code>COSINE</code>, <code>EUCLIDEAN</code>, <code>DOT_PRODUCT</code>.</p>
	 * @public
	 */
	DistanceFunction: VectorDistanceFunction | undefined;
}
interface ProvisionedThroughputDescription {
	/**
	 * <p>The date and time of the last provisioned throughput increase for this table.</p>
	 * @public
	 */
	LastIncreaseDateTime?: Date | undefined;
	/**
	 * <p>The date and time of the last provisioned throughput decrease for this table.</p>
	 * @public
	 */
	LastDecreaseDateTime?: Date | undefined;
	/**
	 * <p>The number of provisioned throughput decreases for this table during this UTC calendar
	 *             day. For current maximums on provisioned throughput decreases, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service,
	 *                 Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	NumberOfDecreasesToday?: number | undefined;
	/**
	 * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB
	 *             returns a <code>ThrottlingException</code>. Eventually consistent reads require less
	 *             effort than strongly consistent reads, so a setting of 50 <code>ReadCapacityUnits</code>
	 *             per second provides 100 eventually consistent <code>ReadCapacityUnits</code> per
	 *             second.</p>
	 *          <p>For a table or global secondary index that uses on-demand capacity mode
	 *                 (<code>PAY_PER_REQUEST</code>), this value is <code>0</code>, because on-demand mode
	 *             does not use provisioned throughput.</p>
	 * @public
	 */
	ReadCapacityUnits?: number | undefined;
	/**
	 * <p>The maximum number of writes consumed per second before DynamoDB returns a
	 *                 <code>ThrottlingException</code>.</p>
	 *          <p>For a table or global secondary index that uses on-demand capacity mode
	 *                 (<code>PAY_PER_REQUEST</code>), this value is <code>0</code>, because on-demand mode
	 *             does not use provisioned throughput.</p>
	 * @public
	 */
	WriteCapacityUnits?: number | undefined;
}
interface GlobalSecondaryIndexDescription {
	/**
	 * <p>The name of the global secondary index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The complete key schema for a global secondary index, which consists of one or more
	 *             pairs of attribute names and key types:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>HASH</code> - partition key</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>RANGE</code> - sort key</p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>The partition key of an item is also known as its <i>hash
	 *                     attribute</i>. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across
	 *                 partitions, based on their partition key values.</p>
	 *             <p>The sort key of an item is also known as its <i>range attribute</i>.
	 *                 The term "range attribute" derives from the way DynamoDB stores items with
	 *                 the same partition key physically close together, in sorted order by the sort key
	 *                 value.</p>
	 *          </note>
	 * @public
	 */
	KeySchema?: KeySchemaElement[] | undefined;
	/**
	 * <p>Represents attributes that are copied (projected) from the table into the global
	 *             secondary index. These are in addition to the primary key attributes and index key
	 *             attributes, which are automatically projected. </p>
	 * @public
	 */
	Projection?: Projection | undefined;
	/**
	 * <p>The current state of the global secondary index:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The index is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The index is being updated.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The index is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The index is ready for use.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	IndexStatus?: IndexStatus | undefined;
	/**
	 * <p>Indicates whether the index is currently backfilling. <i>Backfilling</i>
	 *             is the process of reading items from the table and determining whether they can be added
	 *             to the index. (Not all items will qualify: For example, a partition key cannot have any
	 *             duplicate values.) If an item can be added to the index, DynamoDB will do so. After all
	 *             items have been processed, the backfilling operation is complete and
	 *                 <code>Backfilling</code> is false.</p>
	 *          <p>You can delete an index that is being created during the <code>Backfilling</code>
	 *             phase when <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code> is
	 *             true. You can't delete the index that is being created when <code>IndexStatus</code> is
	 *             set to CREATING and <code>Backfilling</code> is false. </p>
	 *          <note>
	 *             <p>For indexes that were created during a <code>CreateTable</code> operation, the
	 *                     <code>Backfilling</code> attribute does not appear in the
	 *                     <code>DescribeTable</code> output.</p>
	 *          </note>
	 * @public
	 */
	Backfilling?: boolean | undefined;
	/**
	 * <p>Represents the provisioned throughput settings for the specified global secondary
	 *             index.</p>
	 *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service,
	 *                 Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	ProvisionedThroughput?: ProvisionedThroughputDescription | undefined;
	/**
	 * <p>The total size of the specified index, in bytes. DynamoDB updates this value
	 *             approximately every six hours. Recent changes might not be reflected in this
	 *             value.</p>
	 * @public
	 */
	IndexSizeBytes?: number | undefined;
	/**
	 * <p>The number of items in the specified index. DynamoDB updates this value approximately
	 *             every six hours. Recent changes might not be reflected in this value.</p>
	 * @public
	 */
	ItemCount?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) that uniquely identifies the index.</p>
	 * @public
	 */
	IndexArn?: string | undefined;
	/**
	 * <p>The maximum number of read and write units for the specified global secondary index.
	 *             If you use this parameter, you must specify <code>MaxReadRequestUnits</code>,
	 *                 <code>MaxWriteRequestUnits</code>, or both.</p>
	 * @public
	 */
	OnDemandThroughput?: OnDemandThroughput | undefined;
	/**
	 * <p>Represents the warm throughput value (in read units per second and write units per
	 *             second) for the specified secondary index.</p>
	 * @public
	 */
	WarmThroughput?: GlobalSecondaryIndexWarmThroughputDescription | undefined;
}
interface GlobalTableWitnessDescription {
	/**
	 * <p>The name of the Amazon Web Services Region that serves as a witness for the MRSC global
	 *             table.</p>
	 * @public
	 */
	RegionName?: string | undefined;
	/**
	 * <p>The current status of the witness Region in the MRSC global table.</p>
	 * @public
	 */
	WitnessStatus?: WitnessStatus | undefined;
}
interface LocalSecondaryIndexDescription {
	/**
	 * <p>Represents the name of the local secondary index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The complete key schema for the local secondary index, consisting of one or more pairs
	 *             of attribute names and key types:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>HASH</code> - partition key</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>RANGE</code> - sort key</p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>The partition key of an item is also known as its <i>hash
	 *                     attribute</i>. The term "hash attribute" derives from DynamoDB's usage of
	 *                 an internal hash function to evenly distribute data items across partitions, based
	 *                 on their partition key values.</p>
	 *             <p>The sort key of an item is also known as its <i>range attribute</i>.
	 *                 The term "range attribute" derives from the way DynamoDB stores items with the same
	 *                 partition key physically close together, in sorted order by the sort key
	 *                 value.</p>
	 *          </note>
	 * @public
	 */
	KeySchema?: KeySchemaElement[] | undefined;
	/**
	 * <p>Represents attributes that are copied (projected) from the table into the global
	 *             secondary index. These are in addition to the primary key attributes and index key
	 *             attributes, which are automatically projected. </p>
	 * @public
	 */
	Projection?: Projection | undefined;
	/**
	 * <p>The total size of the specified index, in bytes. DynamoDB updates this value
	 *             approximately every six hours. Recent changes might not be reflected in this
	 *             value.</p>
	 * @public
	 */
	IndexSizeBytes?: number | undefined;
	/**
	 * <p>The number of items in the specified index. DynamoDB updates this value
	 *             approximately every six hours. Recent changes might not be reflected in this
	 *             value.</p>
	 * @public
	 */
	ItemCount?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) that uniquely identifies the index.</p>
	 * @public
	 */
	IndexArn?: string | undefined;
}
interface RestoreSummary {
	/**
	 * <p>The Amazon Resource Name (ARN) of the backup from which the table was restored.</p>
	 * @public
	 */
	SourceBackupArn?: string | undefined;
	/**
	 * <p>The ARN of the source table of the backup that is being restored.</p>
	 * @public
	 */
	SourceTableArn?: string | undefined;
	/**
	 * <p>Point in time or source backup time.</p>
	 * @public
	 */
	RestoreDateTime: Date | undefined;
	/**
	 * <p>Indicates if a restore is in progress or not.</p>
	 * @public
	 */
	RestoreInProgress: boolean | undefined;
}
interface VectorIndexDescription {
	/**
	 * <p>The name of the vector index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The search schema that defines partition key and inline filter attributes for
	 *             the vector index.</p>
	 * @public
	 */
	SearchSchema?: SearchSchemaElement[] | undefined;
	/**
	 * <p>Specifies attributes that are copied (projected) from the table into the vector
	 *             index.</p>
	 * @public
	 */
	Projection?: Projection | undefined;
	/**
	 * <p>The vector attribute configuration for the index.</p>
	 * @public
	 */
	VectorAttribute?: VectorAttributeDefinition | undefined;
	/**
	 * <p>The number of dimensions in each vector.</p>
	 * @public
	 */
	Dimensions?: number | undefined;
	/**
	 * <p>The distance function used to calculate similarity between vectors.</p>
	 * @public
	 */
	DistanceFunction?: VectorDistanceFunction | undefined;
	/**
	 * <p>The current state of the vector index:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The index is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The index is ready for use.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The index is being deleted.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	IndexStatus?: IndexStatus | undefined;
	/**
	 * <p>Specifies whether the index is currently backfilling. During backfill,
	 *             <code>SearchVectors</code> operations might return incomplete results.</p>
	 * @public
	 */
	Backfilling?: boolean | undefined;
	/**
	 * <p>The total size of the vector index, in bytes. Amazon DynamoDB updates this value
	 *             approximately every six hours. Recent changes might not be reflected in this
	 *             value.</p>
	 * @public
	 */
	IndexSizeBytes?: number | undefined;
	/**
	 * <p>The number of items indexed in the vector index. Amazon DynamoDB updates this
	 *             value approximately every six hours. Recent changes might not be reflected in
	 *             this value.</p>
	 * @public
	 */
	ItemCount?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) that uniquely identifies the vector index.</p>
	 * @public
	 */
	IndexArn?: string | undefined;
}
interface TableDescription {
	/**
	 * <p>An array of <code>AttributeDefinition</code> objects. Each of these objects describes
	 *             one attribute in the table and index key schema.</p>
	 *          <p>Each <code>AttributeDefinition</code> object in this array is composed of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>AttributeName</code> - The name of the attribute.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>AttributeType</code> - The data type for the attribute.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	AttributeDefinitions?: AttributeDefinition[] | undefined;
	/**
	 * <p>The name of the table.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>The primary key structure for the table. Each <code>KeySchemaElement</code> consists
	 *             of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>AttributeName</code> - The name of the attribute.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>KeyType</code> - The role of the attribute:</p>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <code>HASH</code> - partition key</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <code>RANGE</code> - sort key</p>
	 *                   </li>
	 *                </ul>
	 *                <note>
	 *                   <p>The partition key of an item is also known as its <i>hash
	 *                             attribute</i>. The term "hash attribute" derives from DynamoDB's
	 *                         usage of an internal hash function to evenly distribute data items across
	 *                         partitions, based on their partition key values.</p>
	 *                   <p>The sort key of an item is also known as its <i>range
	 *                             attribute</i>. The term "range attribute" derives from the way
	 *                         DynamoDB stores items with the same partition key physically close together,
	 *                         in sorted order by the sort key value.</p>
	 *                </note>
	 *             </li>
	 *          </ul>
	 *          <p>For more information about primary keys, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModelPrimaryKey">Primary Key</a> in the <i>Amazon DynamoDB Developer
	 *             Guide</i>.</p>
	 * @public
	 */
	KeySchema?: KeySchemaElement[] | undefined;
	/**
	 * <p>The current state of the table:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The table is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The table/index configuration is being updated. The
	 *                     table/index remains available for data operations when
	 *                     <code>UPDATING</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The table is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The table is ready for use.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS</code> - The KMS key
	 *                     used to encrypt the table in inaccessible. Table operations may fail due to
	 *                     failure to use the KMS key. DynamoDB will initiate the
	 *                     table archival process when a table's KMS key remains
	 *                     inaccessible for more than seven days. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ARCHIVING</code> - The table is being archived. Operations are not allowed
	 *                     until archival is complete. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ARCHIVED</code> - The table has been archived. See the ArchivalReason for
	 *                     more information. </p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	TableStatus?: TableStatus | undefined;
	/**
	 * <p>The date and time when the table was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.</p>
	 * @public
	 */
	CreationDateTime?: Date | undefined;
	/**
	 * <p>The provisioned throughput settings for the table, consisting of read and write
	 *             capacity units, along with data about increases and decreases.</p>
	 * @public
	 */
	ProvisionedThroughput?: ProvisionedThroughputDescription | undefined;
	/**
	 * <p>The total size of the specified table, in bytes. DynamoDB updates this value
	 *             approximately every six hours. Recent changes might not be reflected in this
	 *             value.</p>
	 * @public
	 */
	TableSizeBytes?: number | undefined;
	/**
	 * <p>The number of items in the specified table. DynamoDB updates this value approximately
	 *             every six hours. Recent changes might not be reflected in this value.</p>
	 * @public
	 */
	ItemCount?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) that uniquely identifies the table.</p>
	 * @public
	 */
	TableArn?: string | undefined;
	/**
	 * <p>A unique identifier for the table, in UUID format, generated by DynamoDB when the
	 *             table is created.</p>
	 * @public
	 */
	TableId?: string | undefined;
	/**
	 * <p>Contains the details for the read/write capacity mode.</p>
	 * @public
	 */
	BillingModeSummary?: BillingModeSummary | undefined;
	/**
	 * <p>Represents one or more local secondary indexes on the table. Each index is scoped to a
	 *             given partition key value. Tables with one or more local secondary indexes are subject
	 *             to an item collection size limit, where the amount of data within a given item
	 *             collection cannot exceed 10 GB. Each element is composed of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>IndexName</code> - The name of the local secondary index.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>KeySchema</code> - Specifies the complete index key schema. The attribute
	 *                     names in the key schema must be between 1 and 255 characters (inclusive). The
	 *                     key schema must begin with the same partition key as the table.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>Projection</code> - Specifies attributes that are copied (projected) from
	 *                     the table into the index. These are in addition to the primary key attributes
	 *                     and index key attributes, which are automatically projected. Each attribute
	 *                     specification is composed of:</p>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <code>ProjectionType</code> - One of the following:</p>
	 *                      <ul>
	 *                         <li>
	 *                            <p>
	 *                               <code>KEYS_ONLY</code> - Only the index and primary keys are
	 *                                     projected into the index.</p>
	 *                         </li>
	 *                         <li>
	 *                            <p>
	 *                               <code>INCLUDE</code> - Only the specified table attributes are
	 *                                     projected into the index. The list of projected attributes is in
	 *                                         <code>NonKeyAttributes</code>.</p>
	 *                         </li>
	 *                         <li>
	 *                            <p>
	 *                               <code>ALL</code> - All of the table attributes are projected
	 *                                     into the index.</p>
	 *                         </li>
	 *                      </ul>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <code>NonKeyAttributes</code> - A list of one or more non-key attribute
	 *                             names that are projected into the secondary index. The total count of
	 *                             attributes provided in <code>NonKeyAttributes</code>, summed across all
	 *                             of the secondary indexes, must not exceed 100. If you project the same
	 *                             attribute into two different indexes, this counts as two distinct
	 *                             attributes when determining the total. This limit only applies when you
	 *                             specify the ProjectionType of <code>INCLUDE</code>. You still can
	 *                             specify the ProjectionType of <code>ALL</code> to project all attributes
	 *                             from the source table, even if the table has more than 100
	 *                             attributes.</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IndexSizeBytes</code> - Represents the total size of the index, in bytes.
	 *                     DynamoDB updates this value approximately every six hours. Recent changes might
	 *                     not be reflected in this value.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ItemCount</code> - Represents the number of items in the index. DynamoDB
	 *                     updates this value approximately every six hours. Recent changes might not be
	 *                     reflected in this value.</p>
	 *             </li>
	 *          </ul>
	 *          <p>If the table is in the <code>DELETING</code> state, no information about indexes will
	 *             be returned.</p>
	 * @public
	 */
	LocalSecondaryIndexes?: LocalSecondaryIndexDescription[] | undefined;
	/**
	 * <p>The global secondary indexes, if any, on the table. Each index is scoped to a given
	 *             partition key value. Each element is composed of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>Backfilling</code> - If true, then the index is currently in the
	 *                     backfilling phase. Backfilling occurs only when a new global secondary index is
	 *                     added to the table. It is the process by which DynamoDB populates the new index
	 *                     with data from the table. (This attribute does not appear for indexes that were
	 *                     created during a <code>CreateTable</code> operation.) </p>
	 *                <p> You can delete an index that is being created during the
	 *                         <code>Backfilling</code> phase when <code>IndexStatus</code> is set to
	 *                     CREATING and <code>Backfilling</code> is true. You can't delete the index that
	 *                     is being created when <code>IndexStatus</code> is set to CREATING and
	 *                         <code>Backfilling</code> is false. (This attribute does not appear for
	 *                     indexes that were created during a <code>CreateTable</code> operation.)</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IndexName</code> - The name of the global secondary index.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IndexSizeBytes</code> - The total size of the global secondary index, in
	 *                     bytes. DynamoDB updates this value approximately every six hours. Recent changes
	 *                     might not be reflected in this value. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IndexStatus</code> - The current status of the global secondary
	 *                     index:</p>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <code>CREATING</code> - The index is being created.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <code>UPDATING</code> - The index is being updated.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <code>DELETING</code> - The index is being deleted.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <code>ACTIVE</code> - The index is ready for use.</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ItemCount</code> - The number of items in the global secondary index.
	 *                     DynamoDB updates this value approximately every six hours. Recent changes might
	 *                     not be reflected in this value. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>KeySchema</code> - Specifies the complete index key schema. The attribute
	 *                     names in the key schema must be between 1 and 255 characters (inclusive). The
	 *                     key schema must begin with the same partition key as the table.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>Projection</code> - Specifies attributes that are copied (projected) from
	 *                     the table into the index. These are in addition to the primary key attributes
	 *                     and index key attributes, which are automatically projected. Each attribute
	 *                     specification is composed of:</p>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <code>ProjectionType</code> - One of the following:</p>
	 *                      <ul>
	 *                         <li>
	 *                            <p>
	 *                               <code>KEYS_ONLY</code> - Only the index and primary keys are
	 *                                     projected into the index.</p>
	 *                         </li>
	 *                         <li>
	 *                            <p>
	 *                               <code>INCLUDE</code> - In addition to the attributes described
	 *                                     in <code>KEYS_ONLY</code>, the secondary index will include
	 *                                     other non-key attributes that you specify.</p>
	 *                         </li>
	 *                         <li>
	 *                            <p>
	 *                               <code>ALL</code> - All of the table attributes are projected
	 *                                     into the index.</p>
	 *                         </li>
	 *                      </ul>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <code>NonKeyAttributes</code> - A list of one or more non-key attribute
	 *                             names that are projected into the secondary index. The total count of
	 *                             attributes provided in <code>NonKeyAttributes</code>, summed across all
	 *                             of the secondary indexes, must not exceed 100. If you project the same
	 *                             attribute into two different indexes, this counts as two distinct
	 *                             attributes when determining the total. This limit only applies when you
	 *                             specify the ProjectionType of <code>INCLUDE</code>. You still can
	 *                             specify the ProjectionType of <code>ALL</code> to project all attributes
	 *                             from the source table, even if the table has more than 100
	 *                             attributes.</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ProvisionedThroughput</code> - The provisioned throughput settings for the
	 *                     global secondary index, consisting of read and write capacity units, along with
	 *                     data about increases and decreases. </p>
	 *             </li>
	 *          </ul>
	 *          <p>If the table is in the <code>DELETING</code> state, no information about indexes will
	 *             be returned.</p>
	 * @public
	 */
	GlobalSecondaryIndexes?: GlobalSecondaryIndexDescription[] | undefined;
	/**
	 * <p>The current DynamoDB Streams configuration for the table.</p>
	 * @public
	 */
	StreamSpecification?: StreamSpecification | undefined;
	/**
	 * <p>A timestamp, in ISO 8601 format, for this stream.</p>
	 *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream,
	 *             because it is possible that a stream from another table might have the same timestamp.
	 *             However, the combination of the following three elements is guaranteed to be
	 *             unique:</p>
	 *          <ul>
	 *             <li>
	 *                <p>Amazon Web Services customer ID</p>
	 *             </li>
	 *             <li>
	 *                <p>Table name</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>StreamLabel</code>
	 *                </p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	LatestStreamLabel?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this
	 *             table.</p>
	 * @public
	 */
	LatestStreamArn?: string | undefined;
	/**
	 * <p>Represents the version of <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html">global tables</a>
	 *             in use, if the table is replicated across Amazon Web Services Regions.</p>
	 * @public
	 */
	GlobalTableVersion?: string | undefined;
	/**
	 * <p>Represents replicas of the table.</p>
	 * @public
	 */
	Replicas?: ReplicaDescription[] | undefined;
	/**
	 * <p>The witness Region and its current status in the MRSC global table. Only one witness
	 *             Region can be configured per MRSC global table.</p>
	 * @public
	 */
	GlobalTableWitnesses?: GlobalTableWitnessDescription[] | undefined;
	/**
	 * <p>Indicates one of the settings synchronization modes for the global table:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ENABLED</code>: Indicates that the settings synchronization mode for the global table
	 *                     is enabled.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DISABLED</code>: Indicates that the settings synchronization mode for the global table is
	 *                     disabled.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ENABLED_WITH_OVERRIDES</code>: This mode is set by default for a same account global table.
	 *                     Indicates that certain global table settings can be overridden.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	GlobalTableSettingsReplicationMode?: GlobalTableSettingsReplicationMode | undefined;
	/**
	 * <p>Contains details for the restore.</p>
	 * @public
	 */
	RestoreSummary?: RestoreSummary | undefined;
	/**
	 * <p>The description of the server-side encryption status on the specified table.</p>
	 * @public
	 */
	SSEDescription?: SSEDescription | undefined;
	/**
	 * <p>Contains information about the table archive.</p>
	 * @public
	 */
	ArchivalSummary?: ArchivalSummary | undefined;
	/**
	 * <p>Contains details of the table class.</p>
	 * @public
	 */
	TableClassSummary?: TableClassSummary | undefined;
	/**
	 * <p>Indicates whether deletion protection is enabled (true) or disabled (false) on the
	 *             table.</p>
	 * @public
	 */
	DeletionProtectionEnabled?: boolean | undefined;
	/**
	 * <p>The maximum number of read and write units for the specified on-demand table. If you
	 *             use this parameter, you must specify <code>MaxReadRequestUnits</code>,
	 *                 <code>MaxWriteRequestUnits</code>, or both.</p>
	 * @public
	 */
	OnDemandThroughput?: OnDemandThroughput | undefined;
	/**
	 * <p>Describes the warm throughput value of the base table.</p>
	 * @public
	 */
	WarmThroughput?: TableWarmThroughputDescription | undefined;
	/**
	 * <p>Indicates one of the following consistency modes for a global table:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>EVENTUAL</code>: Indicates that the global table is configured for
	 *                     multi-Region eventual consistency (MREC).</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>STRONG</code>: Indicates that the global table is configured for
	 *                     multi-Region strong consistency (MRSC).</p>
	 *             </li>
	 *          </ul>
	 *          <p>If you don't specify this field, the global table consistency mode defaults to
	 *                 <code>EVENTUAL</code>. For more information about global tables consistency modes,
	 *             see <a href="https://docs.aws.amazon.com/V2globaltables_HowItWorks.html#V2globaltables_HowItWorks.consistency-modes">
	 *                 Consistency modes</a> in DynamoDB developer guide. </p>
	 * @public
	 */
	MultiRegionConsistency?: MultiRegionConsistency | undefined;
	/**
	 * <p>The vector indexes, if any, on the table. Each element is composed of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>IndexName</code> - The name of the vector index.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IndexStatus</code> - The current status of the vector index:
	 *                     <code>CREATING</code>, <code>ACTIVE</code>, or
	 *                     <code>DELETING</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>Backfilling</code> - Specifies whether the index is currently
	 *                     backfilling. During backfill, <code>SearchVectors</code> operations might
	 *                     return incomplete results.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>VectorAttribute</code> - The attribute that contains vector
	 *                     embeddings.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>Dimensions</code> - The number of dimensions in each
	 *                     vector.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DistanceFunction</code> - The distance function used to calculate
	 *                     similarity (<code>COSINE</code>, <code>EUCLIDEAN</code>, or
	 *                     <code>DOT_PRODUCT</code>).</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SearchSchema</code> - The partition key and inline filter
	 *                     attributes for the vector index.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>Projection</code> - Specifies attributes that are copied
	 *                     (projected) from the table into the vector index.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IndexArn</code> - The Amazon Resource Name (ARN) that uniquely
	 *                     identifies the index.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IndexSizeBytes</code> - The total size of the vector index, in
	 *                     bytes. Amazon DynamoDB updates this value approximately every six hours.
	 *                     Recent changes might not be reflected in this value.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ItemCount</code> - The number of items indexed in the vector
	 *                     index. Amazon DynamoDB updates this value approximately every six hours.
	 *                     Recent changes might not be reflected in this value.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	VectorIndexes?: VectorIndexDescription[] | undefined;
}
interface CreateTableOutput {
	/**
	 * <p>Represents the properties of the table.</p>
	 * @public
	 */
	TableDescription?: TableDescription | undefined;
}
interface CsvOptions {
	/**
	 * <p> The delimiter used for separating items in the CSV file being imported. </p>
	 * @public
	 */
	Delimiter?: string | undefined;
	/**
	 * <p> List of the headers used to specify a common header for all source CSV files being
	 *             imported. If this field is specified then the first line of each CSV file is treated as
	 *             data instead of the header. If this field is not specified the the first line of each
	 *             CSV file is treated as the header. </p>
	 * @public
	 */
	HeaderList?: string[] | undefined;
}
interface DeleteBackupOutput {
	/**
	 * <p>Contains the description of the backup created for the table.</p>
	 * @public
	 */
	BackupDescription?: BackupDescription | undefined;
}
interface DeleteTableOutput {
	/**
	 * <p>Represents the properties of a table.</p>
	 * @public
	 */
	TableDescription?: TableDescription | undefined;
}
interface DescribeBackupOutput {
	/**
	 * <p>Contains the description of the backup created for the table.</p>
	 * @public
	 */
	BackupDescription?: BackupDescription | undefined;
}
interface DescribeContinuousBackupsOutput {
	/**
	 * <p>Represents the continuous backups and point in time recovery settings on the
	 *             table.</p>
	 * @public
	 */
	ContinuousBackupsDescription?: ContinuousBackupsDescription | undefined;
}
interface FailureException {
	/**
	 * <p>Exception name.</p>
	 * @public
	 */
	ExceptionName?: string | undefined;
	/**
	 * <p>Description of the failure.</p>
	 * @public
	 */
	ExceptionDescription?: string | undefined;
}
interface DescribeContributorInsightsOutput {
	/**
	 * <p>The name of the table being described.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>The name of the global secondary index being described.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>List of names of the associated contributor insights rules.</p>
	 * @public
	 */
	ContributorInsightsRuleList?: string[] | undefined;
	/**
	 * <p>Current status of contributor insights.</p>
	 * @public
	 */
	ContributorInsightsStatus?: ContributorInsightsStatus | undefined;
	/**
	 * <p>Timestamp of the last time the status was changed.</p>
	 * @public
	 */
	LastUpdateDateTime?: Date | undefined;
	/**
	 * <p>Returns information about the last failure that was encountered.</p>
	 *          <p>The most common exceptions for a FAILED status are:</p>
	 *          <ul>
	 *             <li>
	 *                <p>LimitExceededException - Per-account Amazon CloudWatch Contributor Insights
	 *                     rule limit reached. Please disable Contributor Insights for other tables/indexes
	 *                     OR disable Contributor Insights rules before retrying.</p>
	 *             </li>
	 *             <li>
	 *                <p>AccessDeniedException - Amazon CloudWatch Contributor Insights rules cannot be
	 *                     modified due to insufficient permissions.</p>
	 *             </li>
	 *             <li>
	 *                <p>AccessDeniedException - Failed to create service-linked role for Contributor
	 *                     Insights due to insufficient permissions.</p>
	 *             </li>
	 *             <li>
	 *                <p>InternalServerError - Failed to create Amazon CloudWatch Contributor Insights
	 *                     rules. Please retry request.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	FailureException?: FailureException | undefined;
	/**
	 * <p>The mode of CloudWatch Contributor Insights for DynamoDB that determines
	 *             which events are emitted. Can be set to track all access and throttled events or throttled
	 *             events only.</p>
	 * @public
	 */
	ContributorInsightsMode?: ContributorInsightsMode | undefined;
}
interface Endpoint {
	/**
	 * <p>IP address of the endpoint.</p>
	 * @public
	 */
	Address: string | undefined;
	/**
	 * <p>Endpoint cache time to live (TTL) value.</p>
	 * @public
	 */
	CachePeriodInMinutes: number | undefined;
}
interface DescribeEndpointsResponse {
	/**
	 * <p>List of endpoints.</p>
	 * @public
	 */
	Endpoints: Endpoint[] | undefined;
}
interface IncrementalExportSpecification {
	/**
	 * <p>Time in the past which provides the inclusive start range for the export table's data,
	 *             counted in seconds from the start of the Unix epoch. The incremental export will reflect
	 *             the table's state including and after this point in time.</p>
	 * @public
	 */
	ExportFromTime?: Date | undefined;
	/**
	 * <p>Time in the past which provides the exclusive end range for the export table's data,
	 *             counted in seconds from the start of the Unix epoch. The incremental export will reflect
	 *             the table's state just prior to this point in time. If this is not provided, the latest
	 *             time with data available will be used.</p>
	 * @public
	 */
	ExportToTime?: Date | undefined;
	/**
	 * <p>The view type that was chosen for the export. Valid values are
	 *                 <code>NEW_AND_OLD_IMAGES</code> and <code>NEW_IMAGES</code>. The default value is
	 *                 <code>NEW_AND_OLD_IMAGES</code>.</p>
	 *          <p>
	 *             <code>NEW_AND_OLD_IMAGES</code> exports both the new and old images of each changed
	 *             item, while <code>NEW_IMAGES</code> exports only the new (latest) image. The view type
	 *             you choose determines the structure of each item in the output for
	 *                 <code>insert</code>, <code>update</code>, and <code>delete</code> operations. For
	 *             details and examples of how each view type shapes the export output, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.Output.html">DynamoDB table
	 *                 export output format</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	ExportViewType?: ExportViewType | undefined;
}
interface ExportDescription {
	/**
	 * <p>The Amazon Resource Name (ARN) of the table export.</p>
	 * @public
	 */
	ExportArn?: string | undefined;
	/**
	 * <p>Export can be in one of the following states: IN_PROGRESS, COMPLETED, or
	 *             FAILED.</p>
	 * @public
	 */
	ExportStatus?: ExportStatus | undefined;
	/**
	 * <p>The time at which the export task began.</p>
	 * @public
	 */
	StartTime?: Date | undefined;
	/**
	 * <p>The time at which the export task completed.</p>
	 * @public
	 */
	EndTime?: Date | undefined;
	/**
	 * <p>The name of the manifest file for the export task.</p>
	 * @public
	 */
	ExportManifest?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the table that was exported.</p>
	 * @public
	 */
	TableArn?: string | undefined;
	/**
	 * <p>Unique ID of the table that was exported.</p>
	 * @public
	 */
	TableId?: string | undefined;
	/**
	 * <p>Point in time from which table data was exported.</p>
	 * @public
	 */
	ExportTime?: Date | undefined;
	/**
	 * <p>The client token that was provided for the export task. A client token makes calls to
	 *                 <code>ExportTableToPointInTimeInput</code> idempotent, meaning that multiple
	 *             identical calls have the same effect as one single call.</p>
	 * @public
	 */
	ClientToken?: string | undefined;
	/**
	 * <p>The name of the Amazon S3 bucket containing the export.</p>
	 * @public
	 */
	S3Bucket?: string | undefined;
	/**
	 * <p>The ID of the Amazon Web Services account that owns the bucket containing the
	 *             export.</p>
	 * @public
	 */
	S3BucketOwner?: string | undefined;
	/**
	 * <p>The Amazon S3 bucket prefix used as the file name and path of the exported
	 *             snapshot.</p>
	 * @public
	 */
	S3Prefix?: string | undefined;
	/**
	 * <p>Type of encryption used on the bucket where export data is stored. Valid values for
	 *                 <code>S3SseAlgorithm</code> are:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>AES256</code> - server-side encryption with Amazon S3 managed
	 *                     keys</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>KMS</code> - server-side encryption with KMS managed
	 *                     keys</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	S3SseAlgorithm?: S3SseAlgorithm | undefined;
	/**
	 * <p>The ID of the KMS managed key used to encrypt the S3 bucket where
	 *             export data is stored (if applicable).</p>
	 * @public
	 */
	S3SseKmsKeyId?: string | undefined;
	/**
	 * <p>Status code for the result of the failed export.</p>
	 * @public
	 */
	FailureCode?: string | undefined;
	/**
	 * <p>Export failure reason description.</p>
	 * @public
	 */
	FailureMessage?: string | undefined;
	/**
	 * <p>The format of the exported data. Valid values for <code>ExportFormat</code> are
	 *                 <code>DYNAMODB_JSON</code> or <code>ION</code>.</p>
	 * @public
	 */
	ExportFormat?: ExportFormat | undefined;
	/**
	 * <p>The billable size of the table export.</p>
	 * @public
	 */
	BilledSizeBytes?: number | undefined;
	/**
	 * <p>The number of items exported.</p>
	 * @public
	 */
	ItemCount?: number | undefined;
	/**
	 * <p>The type of export that was performed. Valid values are <code>FULL_EXPORT</code> or
	 *                 <code>INCREMENTAL_EXPORT</code>.</p>
	 * @public
	 */
	ExportType?: ExportType | undefined;
	/**
	 * <p>Optional object containing the parameters specific to an incremental export.</p>
	 * @public
	 */
	IncrementalExportSpecification?: IncrementalExportSpecification | undefined;
}
interface DescribeExportOutput {
	/**
	 * <p>Represents the properties of the export.</p>
	 * @public
	 */
	ExportDescription?: ExportDescription | undefined;
}
interface DescribeGlobalTableOutput {
	/**
	 * <p>Contains the details of the global table.</p>
	 * @public
	 */
	GlobalTableDescription?: GlobalTableDescription | undefined;
}
interface ReplicaGlobalSecondaryIndexSettingsDescription {
	/**
	 * <p>The name of the global secondary index. The name must be unique among all other
	 *             indexes on this table.</p>
	 * @public
	 */
	IndexName: string | undefined;
	/**
	 * <p> The current status of the global secondary index:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The global secondary index is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The global secondary index is being updated.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The global secondary index is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The global secondary index is ready for use.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	IndexStatus?: IndexStatus | undefined;
	/**
	 * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB
	 *             returns a <code>ThrottlingException</code>.</p>
	 * @public
	 */
	ProvisionedReadCapacityUnits?: number | undefined;
	/**
	 * <p>Auto scaling settings for a global secondary index replica's read capacity
	 *             units.</p>
	 * @public
	 */
	ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
	/**
	 * <p>The maximum number of writes consumed per second before DynamoDB returns a
	 *                 <code>ThrottlingException</code>.</p>
	 * @public
	 */
	ProvisionedWriteCapacityUnits?: number | undefined;
	/**
	 * <p>Auto scaling settings for a global secondary index replica's write capacity
	 *             units.</p>
	 * @public
	 */
	ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
}
interface ReplicaSettingsDescription {
	/**
	 * <p>The Region name of the replica.</p>
	 * @public
	 */
	RegionName: string | undefined;
	/**
	 * <p>The current state of the Region:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The Region is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The Region is being updated.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The Region is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The Region is ready for use.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ReplicaStatus?: ReplicaStatus | undefined;
	/**
	 * <p>The read/write capacity mode of the replica.</p>
	 * @public
	 */
	ReplicaBillingModeSummary?: BillingModeSummary | undefined;
	/**
	 * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB
	 *             returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB
	 *                 Developer Guide</i>. </p>
	 * @public
	 */
	ReplicaProvisionedReadCapacityUnits?: number | undefined;
	/**
	 * <p>Auto scaling settings for a global table replica's read capacity units.</p>
	 * @public
	 */
	ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
	/**
	 * <p>The maximum number of writes consumed per second before DynamoDB returns a
	 *                 <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB
	 *                 Developer Guide</i>.</p>
	 * @public
	 */
	ReplicaProvisionedWriteCapacityUnits?: number | undefined;
	/**
	 * <p>Auto scaling settings for a global table replica's write capacity units.</p>
	 * @public
	 */
	ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
	/**
	 * <p>Replica global secondary index settings for the global table.</p>
	 * @public
	 */
	ReplicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[] | undefined;
	/**
	 * <p>Contains details of the table class.</p>
	 * @public
	 */
	ReplicaTableClassSummary?: TableClassSummary | undefined;
}
interface DescribeGlobalTableSettingsOutput {
	/**
	 * <p>The name of the global table.</p>
	 * @public
	 */
	GlobalTableName?: string | undefined;
	/**
	 * <p>The Region-specific settings for the global table.</p>
	 * @public
	 */
	ReplicaSettings?: ReplicaSettingsDescription[] | undefined;
}
interface InputFormatOptions {
	/**
	 * <p> The options for imported source files in CSV format. The values are Delimiter and
	 *             HeaderList. </p>
	 * @public
	 */
	Csv?: CsvOptions | undefined;
}
interface S3BucketSource {
	/**
	 * <p> The account number of the S3 bucket that is being imported from. If the bucket is
	 *             owned by the requester this is optional. </p>
	 * @public
	 */
	S3BucketOwner?: string | undefined;
	/**
	 * <p> The S3 bucket that is being imported from. </p>
	 * @public
	 */
	S3Bucket: string | undefined;
	/**
	 * <p> The key prefix shared by all S3 Objects that are being imported. </p>
	 * @public
	 */
	S3KeyPrefix?: string | undefined;
}
interface TableCreationParameters {
	/**
	 * <p> The name of the table created as part of the import operation. </p>
	 * @public
	 */
	TableName: string | undefined;
	/**
	 * <p> The attributes of the table created as part of the import operation. </p>
	 * @public
	 */
	AttributeDefinitions: AttributeDefinition[] | undefined;
	/**
	 * <p> The primary key and option sort key of the table created as part of the import
	 *             operation. </p>
	 * @public
	 */
	KeySchema: KeySchemaElement[] | undefined;
	/**
	 * <p> The billing mode for provisioning the table created as part of the import operation.
	 *         </p>
	 * @public
	 */
	BillingMode?: BillingMode | undefined;
	/**
	 * <p>Represents the provisioned throughput settings for the specified global secondary
	 *             index. You must use <code>ProvisionedThroughput</code> or
	 *                 <code>OnDemandThroughput</code> based on your table’s capacity mode.</p>
	 *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service,
	 *                 Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	ProvisionedThroughput?: ProvisionedThroughput | undefined;
	/**
	 * <p>Sets the maximum number of read and write units for the specified on-demand table. If
	 *             you use this parameter, you must specify <code>MaxReadRequestUnits</code>,
	 *                 <code>MaxWriteRequestUnits</code>, or both.</p>
	 * @public
	 */
	OnDemandThroughput?: OnDemandThroughput | undefined;
	/**
	 * <p>Represents the settings used to enable server-side encryption.</p>
	 * @public
	 */
	SSESpecification?: SSESpecification | undefined;
	/**
	 * <p> The Global Secondary Indexes (GSI) of the table to be created as part of the import
	 *             operation. </p>
	 * @public
	 */
	GlobalSecondaryIndexes?: GlobalSecondaryIndex[] | undefined;
	/**
	 * <p>The vector indexes of the table to be created as part of the import
	 *             operation.</p>
	 * @public
	 */
	VectorIndexes?: VectorIndex[] | undefined;
}
interface ImportTableDescription {
	/**
	 * <p> The Amazon Resource Number (ARN) corresponding to the import request.
	 *             </p>
	 * @public
	 */
	ImportArn?: string | undefined;
	/**
	 * <p> The status of the import. </p>
	 * @public
	 */
	ImportStatus?: ImportStatus | undefined;
	/**
	 * <p> The Amazon Resource Number (ARN) of the table being imported into.
	 *             </p>
	 * @public
	 */
	TableArn?: string | undefined;
	/**
	 * <p> The table id corresponding to the table created by import table process.
	 *             </p>
	 * @public
	 */
	TableId?: string | undefined;
	/**
	 * <p> The client token that was provided for the import task. Reusing the client token on
	 *             retry makes a call to <code>ImportTable</code> idempotent. </p>
	 * @public
	 */
	ClientToken?: string | undefined;
	/**
	 * <p> Values for the S3 bucket the source file is imported from. Includes bucket name
	 *             (required), key prefix (optional) and bucket account owner ID (optional). </p>
	 * @public
	 */
	S3BucketSource?: S3BucketSource | undefined;
	/**
	 * <p> The number of errors occurred on importing the source file into the target table.
	 *         </p>
	 * @public
	 */
	ErrorCount?: number | undefined;
	/**
	 * <p> The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with the
	 *             target table. </p>
	 * @public
	 */
	CloudWatchLogGroupArn?: string | undefined;
	/**
	 * <p> The format of the source data going into the target table.
	 *             </p>
	 * @public
	 */
	InputFormat?: InputFormat | undefined;
	/**
	 * <p> The format options for the data that was imported into the target table. There is one
	 *             value, CsvOption. </p>
	 * @public
	 */
	InputFormatOptions?: InputFormatOptions | undefined;
	/**
	 * <p> The compression options for the data that has been imported into the target table.
	 *             The values are NONE, GZIP, or ZSTD. </p>
	 * @public
	 */
	InputCompressionType?: InputCompressionType | undefined;
	/**
	 * <p> The parameters for the new table that is being imported into. </p>
	 * @public
	 */
	TableCreationParameters?: TableCreationParameters | undefined;
	/**
	 * <p> The time when this import task started. </p>
	 * @public
	 */
	StartTime?: Date | undefined;
	/**
	 * <p> The time at which the creation of the table associated with this import task
	 *             completed. </p>
	 * @public
	 */
	EndTime?: Date | undefined;
	/**
	 * <p> The total size of data processed from the source file, in Bytes. </p>
	 * @public
	 */
	ProcessedSizeBytes?: number | undefined;
	/**
	 * <p> The total number of items processed from the source file. </p>
	 * @public
	 */
	ProcessedItemCount?: number | undefined;
	/**
	 * <p> The number of items successfully imported into the new table. </p>
	 * @public
	 */
	ImportedItemCount?: number | undefined;
	/**
	 * <p> The error code corresponding to the failure that the import job ran into during
	 *             execution. </p>
	 * @public
	 */
	FailureCode?: string | undefined;
	/**
	 * <p> The error message corresponding to the failure that the import job ran into during
	 *             execution. </p>
	 * @public
	 */
	FailureMessage?: string | undefined;
}
interface DescribeImportOutput {
	/**
	 * <p> Represents the properties of the table created for the import, and parameters of the
	 *             import. The import parameters include import status, how many items were processed, and
	 *             how many errors were encountered. </p>
	 * @public
	 */
	ImportTableDescription: ImportTableDescription | undefined;
}
interface KinesisDataStreamDestination {
	/**
	 * <p>The ARN for a specific Kinesis data stream.</p>
	 * @public
	 */
	StreamArn?: string | undefined;
	/**
	 * <p>The current status of replication.</p>
	 * @public
	 */
	DestinationStatus?: DestinationStatus | undefined;
	/**
	 * <p>The human-readable string that corresponds to the replica status.</p>
	 * @public
	 */
	DestinationStatusDescription?: string | undefined;
	/**
	 * <p>The precision of the Kinesis data stream timestamp. The values are either
	 *                 <code>MILLISECOND</code> or <code>MICROSECOND</code>.</p>
	 * @public
	 */
	ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision | undefined;
}
interface DescribeKinesisStreamingDestinationOutput {
	/**
	 * <p>The name of the table being described.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>The list of replica structures for the table being described.</p>
	 * @public
	 */
	KinesisDataStreamDestinations?: KinesisDataStreamDestination[] | undefined;
}
interface DescribeLimitsOutput {
	/**
	 * <p>The maximum total read capacity units that your account allows you to provision across
	 *             all of your tables in this Region.</p>
	 * @public
	 */
	AccountMaxReadCapacityUnits?: number | undefined;
	/**
	 * <p>The maximum total write capacity units that your account allows you to provision
	 *             across all of your tables in this Region.</p>
	 * @public
	 */
	AccountMaxWriteCapacityUnits?: number | undefined;
	/**
	 * <p>The maximum read capacity units that your account allows you to provision for a new
	 *             table that you are creating in this Region, including the read capacity units
	 *             provisioned for its global secondary indexes (GSIs).</p>
	 * @public
	 */
	TableMaxReadCapacityUnits?: number | undefined;
	/**
	 * <p>The maximum write capacity units that your account allows you to provision for a new
	 *             table that you are creating in this Region, including the write capacity units
	 *             provisioned for its global secondary indexes (GSIs).</p>
	 * @public
	 */
	TableMaxWriteCapacityUnits?: number | undefined;
}
interface DescribeTableOutput {
	/**
	 * <p>The properties of the table.</p>
	 * @public
	 */
	Table?: TableDescription | undefined;
}
interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
	/**
	 * <p>The name of the global secondary index.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The current state of the replica global secondary index:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The index is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The table/index configuration is being updated. The
	 *                     table/index remains available for data operations when
	 *                     <code>UPDATING</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The index is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The index is ready for use.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	IndexStatus?: IndexStatus | undefined;
	/**
	 * <p>Represents the auto scaling settings for a global table or global secondary
	 *             index.</p>
	 * @public
	 */
	ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
	/**
	 * <p>Represents the auto scaling settings for a global table or global secondary
	 *             index.</p>
	 * @public
	 */
	ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
}
interface ReplicaAutoScalingDescription {
	/**
	 * <p>The Region where the replica exists.</p>
	 * @public
	 */
	RegionName?: string | undefined;
	/**
	 * <p>Replica-specific global secondary index auto scaling settings.</p>
	 * @public
	 */
	GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[] | undefined;
	/**
	 * <p>Represents the auto scaling settings for a global table or global secondary
	 *             index.</p>
	 * @public
	 */
	ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
	/**
	 * <p>Represents the auto scaling settings for a global table or global secondary
	 *             index.</p>
	 * @public
	 */
	ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
	/**
	 * <p>The current state of the replica:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The replica is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The replica is being updated.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The replica is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The replica is ready for use.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ReplicaStatus?: ReplicaStatus | undefined;
}
interface TableAutoScalingDescription {
	/**
	 * <p>The name of the table.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>The current state of the table:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CREATING</code> - The table is being created.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UPDATING</code> - The table is being updated.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DELETING</code> - The table is being deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ACTIVE</code> - The table is ready for use.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	TableStatus?: TableStatus | undefined;
	/**
	 * <p>Represents replicas of the global table.</p>
	 * @public
	 */
	Replicas?: ReplicaAutoScalingDescription[] | undefined;
}
interface DescribeTableReplicaAutoScalingOutput {
	/**
	 * <p>Represents the auto scaling properties of the table.</p>
	 * @public
	 */
	TableAutoScalingDescription?: TableAutoScalingDescription | undefined;
}
interface DescribeTimeToLiveOutput {
	/**
	 * <p></p>
	 * @public
	 */
	TimeToLiveDescription?: TimeToLiveDescription | undefined;
}
interface EnableKinesisStreamingConfiguration {
	/**
	 * <p>Toggle for the precision of Kinesis data stream timestamp. The values are either
	 *                 <code>MILLISECOND</code> or <code>MICROSECOND</code>.</p>
	 * @public
	 */
	ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision | undefined;
}
interface KinesisStreamingDestinationOutput {
	/**
	 * <p>The name of the table being modified.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>The ARN for the specific Kinesis data stream.</p>
	 * @public
	 */
	StreamArn?: string | undefined;
	/**
	 * <p>The current status of the replication.</p>
	 * @public
	 */
	DestinationStatus?: DestinationStatus | undefined;
	/**
	 * <p>The destination for the Kinesis streaming information that is being enabled.</p>
	 * @public
	 */
	EnableKinesisStreamingConfiguration?: EnableKinesisStreamingConfiguration | undefined;
}
interface ExportTableToPointInTimeOutput {
	/**
	 * <p>Contains a description of the table export.</p>
	 * @public
	 */
	ExportDescription?: ExportDescription | undefined;
}
interface ImportTableOutput {
	/**
	 * <p> Represents the properties of the table created for the import, and parameters of the
	 *             import. The import parameters include import status, how many items were processed, and
	 *             how many errors were encountered. </p>
	 * @public
	 */
	ImportTableDescription: ImportTableDescription | undefined;
}
interface ListBackupsOutput {
	/**
	 * <p>List of <code>BackupSummary</code> objects.</p>
	 * @public
	 */
	BackupSummaries?: BackupSummary[] | undefined;
	/**
	 * <p> The ARN of the backup last evaluated when the current page of results was returned,
	 *             inclusive of the current page of results. This value may be specified as the
	 *                 <code>ExclusiveStartBackupArn</code> of a new <code>ListBackups</code> operation in
	 *             order to fetch the next page of results. </p>
	 *          <p> If <code>LastEvaluatedBackupArn</code> is empty, then the last page of results has
	 *             been processed and there are no more results to be retrieved. </p>
	 *          <p> If <code>LastEvaluatedBackupArn</code> is not empty, this may or may not indicate
	 *             that there is more data to be returned. All results are guaranteed to have been returned
	 *             if and only if no value for <code>LastEvaluatedBackupArn</code> is returned. </p>
	 * @public
	 */
	LastEvaluatedBackupArn?: string | undefined;
}
interface ListContributorInsightsOutput {
	/**
	 * <p>A list of ContributorInsightsSummary.</p>
	 * @public
	 */
	ContributorInsightsSummaries?: ContributorInsightsSummary[] | undefined;
	/**
	 * <p>A token to go to the next page if there is one.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface ExportSummary {
	/**
	 * <p>The Amazon Resource Name (ARN) of the export.</p>
	 * @public
	 */
	ExportArn?: string | undefined;
	/**
	 * <p>Export can be in one of the following states: IN_PROGRESS, COMPLETED, or
	 *             FAILED.</p>
	 * @public
	 */
	ExportStatus?: ExportStatus | undefined;
	/**
	 * <p>The type of export that was performed. Valid values are <code>FULL_EXPORT</code> or
	 *                 <code>INCREMENTAL_EXPORT</code>.</p>
	 * @public
	 */
	ExportType?: ExportType | undefined;
}
interface ListExportsOutput {
	/**
	 * <p>A list of <code>ExportSummary</code> objects.</p>
	 * @public
	 */
	ExportSummaries?: ExportSummary[] | undefined;
	/**
	 * <p>If this value is returned, there are additional results to be displayed. To retrieve
	 *             them, call <code>ListExports</code> again, with <code>NextToken</code> set to this
	 *             value.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface GlobalTable {
	/**
	 * <p>The global table name.</p>
	 * @public
	 */
	GlobalTableName?: string | undefined;
	/**
	 * <p>The Regions where the global table has replicas.</p>
	 * @public
	 */
	ReplicationGroup?: Replica[] | undefined;
}
interface ListGlobalTablesOutput {
	/**
	 * <p>List of global table names.</p>
	 * @public
	 */
	GlobalTables?: GlobalTable[] | undefined;
	/**
	 * <p>Last evaluated global table name.</p>
	 * @public
	 */
	LastEvaluatedGlobalTableName?: string | undefined;
}
interface ImportSummary {
	/**
	 * <p> The Amazon Resource Number (ARN) corresponding to the import request. </p>
	 * @public
	 */
	ImportArn?: string | undefined;
	/**
	 * <p> The status of the import operation. </p>
	 * @public
	 */
	ImportStatus?: ImportStatus | undefined;
	/**
	 * <p> The Amazon Resource Number (ARN) of the table being imported into. </p>
	 * @public
	 */
	TableArn?: string | undefined;
	/**
	 * <p> The path and S3 bucket of the source file that is being imported. This includes the
	 *             S3Bucket (required), S3KeyPrefix (optional) and S3BucketOwner (optional if the bucket is
	 *             owned by the requester). </p>
	 * @public
	 */
	S3BucketSource?: S3BucketSource | undefined;
	/**
	 * <p> The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with this
	 *             import task. </p>
	 * @public
	 */
	CloudWatchLogGroupArn?: string | undefined;
	/**
	 * <p> The format of the source data. Valid values are <code>CSV</code>,
	 *                 <code>DYNAMODB_JSON</code> or <code>ION</code>.</p>
	 * @public
	 */
	InputFormat?: InputFormat | undefined;
	/**
	 * <p> The time at which this import task began. </p>
	 * @public
	 */
	StartTime?: Date | undefined;
	/**
	 * <p> The time at which this import task ended. </p>
	 * @public
	 */
	EndTime?: Date | undefined;
}
interface ListImportsOutput {
	/**
	 * <p> A list of <code>ImportSummary</code> objects. </p>
	 * @public
	 */
	ImportSummaryList?: ImportSummary[] | undefined;
	/**
	 * <p> If this value is returned, there are additional results to be displayed. To retrieve
	 *             them, call <code>ListImports</code> again, with <code>NextToken</code> set to this
	 *             value. </p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface ListTablesOutput {
	/**
	 * <p>The names of the tables associated with the current account at the current endpoint.
	 *             The maximum size of this array is 100.</p>
	 *          <p>If <code>LastEvaluatedTableName</code> also appears in the output, you can use this
	 *             value as the <code>ExclusiveStartTableName</code> parameter in a subsequent
	 *                 <code>ListTables</code> request and obtain the next page of results.</p>
	 * @public
	 */
	TableNames?: string[] | undefined;
	/**
	 * <p>The name of the last table in the current page of results. Use this value as the
	 *                 <code>ExclusiveStartTableName</code> in a new request to obtain the next page of
	 *             results, until all the table names are returned.</p>
	 *          <p>If you do not receive a <code>LastEvaluatedTableName</code> value in the response,
	 *             this means that there are no more table names to be retrieved.</p>
	 * @public
	 */
	LastEvaluatedTableName?: string | undefined;
}
interface ListTagsOfResourceOutput {
	/**
	 * <p>The tags currently associated with the Amazon DynamoDB resource.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
	/**
	 * <p>If this value is returned, there are additional results to be displayed. To retrieve
	 *             them, call ListTagsOfResource again, with NextToken set to this value.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface RestoreTableFromBackupOutput {
	/**
	 * <p>The description of the table created from an existing backup.</p>
	 * @public
	 */
	TableDescription?: TableDescription | undefined;
}
interface RestoreTableToPointInTimeOutput {
	/**
	 * <p>Represents the properties of a table.</p>
	 * @public
	 */
	TableDescription?: TableDescription | undefined;
}
interface UpdateContinuousBackupsOutput {
	/**
	 * <p>Represents the continuous backups and point in time recovery settings on the
	 *             table.</p>
	 * @public
	 */
	ContinuousBackupsDescription?: ContinuousBackupsDescription | undefined;
}
interface UpdateContributorInsightsOutput {
	/**
	 * <p>The name of the table.</p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p>The name of the global secondary index, if applicable.</p>
	 * @public
	 */
	IndexName?: string | undefined;
	/**
	 * <p>The status of contributor insights</p>
	 * @public
	 */
	ContributorInsightsStatus?: ContributorInsightsStatus | undefined;
	/**
	 * <p>The updated mode of CloudWatch Contributor Insights that determines whether to monitor
	 *             all access and throttled events or to track throttled events exclusively.</p>
	 * @public
	 */
	ContributorInsightsMode?: ContributorInsightsMode | undefined;
}
interface UpdateGlobalTableOutput {
	/**
	 * <p>Contains the details of the global table.</p>
	 * @public
	 */
	GlobalTableDescription?: GlobalTableDescription | undefined;
}
interface UpdateGlobalTableSettingsOutput {
	/**
	 * <p>The name of the global table.</p>
	 * @public
	 */
	GlobalTableName?: string | undefined;
	/**
	 * <p>The Region-specific settings for the global table.</p>
	 * @public
	 */
	ReplicaSettings?: ReplicaSettingsDescription[] | undefined;
}
interface UpdateTableOutput {
	/**
	 * <p>Represents the properties of the table.</p>
	 * @public
	 */
	TableDescription?: TableDescription | undefined;
}
interface UpdateTableReplicaAutoScalingOutput {
	/**
	 * <p>Returns information about the auto scaling settings of a table with replicas.</p>
	 * @public
	 */
	TableAutoScalingDescription?: TableAutoScalingDescription | undefined;
}
interface TimeToLiveSpecification {
	/**
	 * <p>Indicates whether TTL is to be enabled (true) or disabled (false) on the table.</p>
	 * @public
	 */
	Enabled: boolean | undefined;
	/**
	 * <p>The name of the TTL attribute used to store the expiration time for items in the
	 *             table.</p>
	 * @public
	 */
	AttributeName: string | undefined;
}
interface UpdateTimeToLiveOutput {
	/**
	 * <p>Represents the output of an <code>UpdateTimeToLive</code> operation.</p>
	 * @public
	 */
	TimeToLiveSpecification?: TimeToLiveSpecification | undefined;
}
type AttributeValue = AttributeValue.BMember | AttributeValue.BOOLMember | AttributeValue.BSMember | AttributeValue.LMember | AttributeValue.MMember | AttributeValue.NMember | AttributeValue.NSMember | AttributeValue.NULLMember | AttributeValue.SMember | AttributeValue.SSMember | AttributeValue.$UnknownMember;
declare namespace AttributeValue {
	/**
	 * <p>An attribute of type String. For example:</p>
	 *          <p>
	 *             <code>"S": "Hello"</code>
	 *          </p>
	 * @public
	 */
	interface SMember {
		S: string;
		N?: never;
		B?: never;
		SS?: never;
		NS?: never;
		BS?: never;
		M?: never;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type Number. For example:</p>
	 *          <p>
	 *             <code>"N": "123.45"</code>
	 *          </p>
	 *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility
	 *             across languages and libraries. However, DynamoDB treats them as number type attributes
	 *             for mathematical operations.</p>
	 * @public
	 */
	interface NMember {
		S?: never;
		N: string;
		B?: never;
		SS?: never;
		NS?: never;
		BS?: never;
		M?: never;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type Binary. For example:</p>
	 *          <p>
	 *             <code>"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"</code>
	 *          </p>
	 * @public
	 */
	interface BMember {
		S?: never;
		N?: never;
		B: Uint8Array;
		SS?: never;
		NS?: never;
		BS?: never;
		M?: never;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type String Set. For example:</p>
	 *          <p>
	 *             <code>"SS": ["Giraffe", "Hippo" ,"Zebra"]</code>
	 *          </p>
	 * @public
	 */
	interface SSMember {
		S?: never;
		N?: never;
		B?: never;
		SS: string[];
		NS?: never;
		BS?: never;
		M?: never;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type Number Set. For example:</p>
	 *          <p>
	 *             <code>"NS": ["42.2", "-19", "7.5", "3.14"]</code>
	 *          </p>
	 *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility
	 *             across languages and libraries. However, DynamoDB treats them as number type attributes
	 *             for mathematical operations.</p>
	 * @public
	 */
	interface NSMember {
		S?: never;
		N?: never;
		B?: never;
		SS?: never;
		NS: string[];
		BS?: never;
		M?: never;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type Binary Set. For example:</p>
	 *          <p>
	 *             <code>"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]</code>
	 *          </p>
	 * @public
	 */
	interface BSMember {
		S?: never;
		N?: never;
		B?: never;
		SS?: never;
		NS?: never;
		BS: Uint8Array[];
		M?: never;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type Map. For example:</p>
	 *          <p>
	 *             <code>"M": \{"Name": \{"S": "Joe"\}, "Age": \{"N": "35"\}\}</code>
	 *          </p>
	 * @public
	 */
	interface MMember {
		S?: never;
		N?: never;
		B?: never;
		SS?: never;
		NS?: never;
		BS?: never;
		M: Record<string, AttributeValue>;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type List. For example:</p>
	 *          <p>
	 *             <code>"L": [ \{"S": "Cookies"\} , \{"S": "Coffee"\}, \{"N": "3.14159"\}]</code>
	 *          </p>
	 * @public
	 */
	interface LMember {
		S?: never;
		N?: never;
		B?: never;
		SS?: never;
		NS?: never;
		BS?: never;
		M?: never;
		L: AttributeValue[];
		NULL?: never;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type Null. For example:</p>
	 *          <p>
	 *             <code>"NULL": true</code>
	 *          </p>
	 * @public
	 */
	interface NULLMember {
		S?: never;
		N?: never;
		B?: never;
		SS?: never;
		NS?: never;
		BS?: never;
		M?: never;
		L?: never;
		NULL: boolean;
		BOOL?: never;
		$unknown?: never;
	}
	/**
	 * <p>An attribute of type Boolean. For example:</p>
	 *          <p>
	 *             <code>"BOOL": true</code>
	 *          </p>
	 * @public
	 */
	interface BOOLMember {
		S?: never;
		N?: never;
		B?: never;
		SS?: never;
		NS?: never;
		BS?: never;
		M?: never;
		L?: never;
		NULL?: never;
		BOOL: boolean;
		$unknown?: never;
	}
	/**
	 * @public
	 */
	interface $UnknownMember {
		S?: never;
		N?: never;
		B?: never;
		SS?: never;
		NS?: never;
		BS?: never;
		M?: never;
		L?: never;
		NULL?: never;
		BOOL?: never;
		$unknown: [
			string,
			any
		];
	}
	/**
	 * @deprecated unused in schema-serde mode.
	 *
	 */
	interface Visitor<T> {
		S: (value: string) => T;
		N: (value: string) => T;
		B: (value: Uint8Array) => T;
		SS: (value: string[]) => T;
		NS: (value: string[]) => T;
		BS: (value: Uint8Array[]) => T;
		M: (value: Record<string, AttributeValue>) => T;
		L: (value: AttributeValue[]) => T;
		NULL: (value: boolean) => T;
		BOOL: (value: boolean) => T;
		_: (name: string, value: any) => T;
	}
}
interface BatchStatementError {
	/**
	 * <p> The error code associated with the failed PartiQL batch statement. </p>
	 * @public
	 */
	Code?: BatchStatementErrorCodeEnum | undefined;
	/**
	 * <p> The error message associated with the PartiQL batch response. </p>
	 * @public
	 */
	Message?: string | undefined;
	/**
	 * <p>The item which caused the condition check to fail. This will be set if
	 *             ReturnValuesOnConditionCheckFailure is specified as <code>ALL_OLD</code>.</p>
	 * @public
	 */
	Item?: Record<string, AttributeValue> | undefined;
}
interface DeleteRequest {
	/**
	 * <p>A map of attribute name to attribute values, representing the primary key of the item
	 *             to delete. All of the table's primary key attributes must be specified, and their data
	 *             types must match those of the table's key schema.</p>
	 * @public
	 */
	Key: Record<string, AttributeValue> | undefined;
}
interface GetItemOutput {
	/**
	 * <p>A map of attribute names to <code>AttributeValue</code> objects, as specified by
	 *                 <code>ProjectionExpression</code>.</p>
	 * @public
	 */
	Item?: Record<string, AttributeValue> | undefined;
	/**
	 * <p>The capacity units consumed by the <code>GetItem</code> operation. The data returned
	 *             includes the total provisioned throughput consumed, along with statistics for the table
	 *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
	 *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
	 *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#read-operation-consumption">Capacity unit consumption for read operations</a> in the <i>Amazon
	 *                 DynamoDB Developer Guide</i>.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity | undefined;
}
interface ItemCollectionMetrics {
	/**
	 * <p>The partition key value of the item collection. This value is the same as the
	 *             partition key value of the item.</p>
	 * @public
	 */
	ItemCollectionKey?: Record<string, AttributeValue> | undefined;
	/**
	 * <p>An estimate of item collection size, in gigabytes. This value is a two-element array
	 *             containing a lower bound and an upper bound for the estimate. The estimate includes the
	 *             size of all the items in the table, plus the size of all attributes projected into all
	 *             of the local secondary indexes on that table. Use this estimate to measure whether a
	 *             local secondary index is approaching its size limit.</p>
	 *          <p>The estimate is subject to change over time; therefore, do not rely on the precision
	 *             or accuracy of the estimate.</p>
	 * @public
	 */
	SizeEstimateRangeGB?: number[] | undefined;
}
interface ItemResponse {
	/**
	 * <p>Map of attribute data consisting of the data type and attribute value.</p>
	 * @public
	 */
	Item?: Record<string, AttributeValue> | undefined;
}
interface PutRequest {
	/**
	 * <p>A map of attribute name to attribute values, representing the primary key of an item
	 *             to be processed by <code>PutItem</code>. All of the table's primary key attributes must
	 *             be specified, and their data types must match those of the table's key schema. If any
	 *             attributes are present in the item that are part of an index key schema for the table,
	 *             their types must match the index key schema.</p>
	 * @public
	 */
	Item: Record<string, AttributeValue> | undefined;
}
interface KeysAndAttributes {
	/**
	 * <p>The primary key attribute values that define the items and the attributes associated
	 *             with the items.</p>
	 * @public
	 */
	Keys: Record<string, AttributeValue>[] | undefined;
	/**
	 * <p>This is a legacy parameter. Use <code>ProjectionExpression</code> instead. For more
	 *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html">Legacy
	 *                 Conditional Parameters</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	AttributesToGet?: string[] | undefined;
	/**
	 * <p>The consistency of a read operation. If set to <code>true</code>, then a strongly
	 *             consistent read is used; otherwise, an eventually consistent read is used.</p>
	 * @public
	 */
	ConsistentRead?: boolean | undefined;
	/**
	 * <p>A string that identifies one or more attributes to retrieve from the table. These
	 *             attributes can include scalars, sets, or elements of a JSON document. The attributes in
	 *             the <code>ProjectionExpression</code> must be separated by commas.</p>
	 *          <p>If no attribute names are specified, then all attributes will be returned. If any of
	 *             the requested attributes are not found, they will not appear in the result.</p>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	ProjectionExpression?: string | undefined;
	/**
	 * <p>One or more substitution tokens for attribute names in an expression. The following
	 *             are some use cases for using <code>ExpressionAttributeNames</code>:</p>
	 *          <ul>
	 *             <li>
	 *                <p>To access an attribute whose name conflicts with a DynamoDB reserved
	 *                     word.</p>
	 *             </li>
	 *             <li>
	 *                <p>To create a placeholder for repeating occurrences of an attribute name in an
	 *                     expression.</p>
	 *             </li>
	 *             <li>
	 *                <p>To prevent special characters in an attribute name from being misinterpreted
	 *                     in an expression.</p>
	 *             </li>
	 *          </ul>
	 *          <p>Use the <b>#</b> character in an expression to dereference
	 *             an attribute name. For example, consider the following attribute name:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>Percentile</code>
	 *                </p>
	 *             </li>
	 *          </ul>
	 *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used
	 *             directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>). To work around this, you could specify the following for
	 *                 <code>ExpressionAttributeNames</code>:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>\{"#P":"Percentile"\}</code>
	 *                </p>
	 *             </li>
	 *          </ul>
	 *          <p>You could then use this substitution in an expression, as in this example:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>#P = :val</code>
	 *                </p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>Tokens that begin with the <b>:</b> character are
	 *                     <i>expression attribute values</i>, which are placeholders for the
	 *                 actual value at runtime.</p>
	 *          </note>
	 *          <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	ExpressionAttributeNames?: Record<string, string> | undefined;
}
interface ExecuteTransactionOutput {
	/**
	 * <p>The response to a PartiQL transaction.</p>
	 * @public
	 */
	Responses?: ItemResponse[] | undefined;
	/**
	 * <p>The capacity units consumed by the entire operation. The values of the list are
	 *             ordered according to the ordering of the statements.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity[] | undefined;
}
interface TransactGetItemsOutput {
	/**
	 * <p>If the <i>ReturnConsumedCapacity</i> value was <code>TOTAL</code>, this
	 *             is an array of <code>ConsumedCapacity</code> objects, one for each table addressed by
	 *                 <code>TransactGetItem</code> objects in the <i>TransactItems</i>
	 *             parameter. These <code>ConsumedCapacity</code> objects report the read-capacity units
	 *             consumed by the <code>TransactGetItems</code> call in that table.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity[] | undefined;
	/**
	 * <p>An ordered array of up to 100 <code>ItemResponse</code> objects, each of which
	 *             corresponds to the <code>TransactGetItem</code> object in the same position in the
	 *                 <i>TransactItems</i> array. Each <code>ItemResponse</code> object
	 *             contains a Map of the name-value pairs that are the projected attributes of the
	 *             requested item.</p>
	 *          <p>If a requested item could not be retrieved, the corresponding
	 *                 <code>ItemResponse</code> object is Null, or if the requested item has no projected
	 *             attributes, the corresponding <code>ItemResponse</code> object is an empty Map. </p>
	 * @public
	 */
	Responses?: ItemResponse[] | undefined;
}
interface TransactWriteItemsOutput {
	/**
	 * <p>The capacity units consumed by the entire <code>TransactWriteItems</code> operation.
	 *             The values of the list are ordered according to the ordering of the
	 *                 <code>TransactItems</code> request parameter. </p>
	 *          <p>If the table has vector indexes, each element also includes a
	 *             <code>VectorIndexes</code> field with <code>VectorWriteRequestBytes</code> consumed
	 *             for each affected vector index.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity[] | undefined;
	/**
	 * <p>A list of tables that were processed by <code>TransactWriteItems</code> and, for each
	 *             table, information about any item collections that were affected by individual
	 *                 <code>UpdateItem</code>, <code>PutItem</code>, or <code>DeleteItem</code>
	 *             operations. </p>
	 * @public
	 */
	ItemCollectionMetrics?: Record<string, ItemCollectionMetrics[]> | undefined;
}
interface BatchStatementResponse {
	/**
	 * <p> The error associated with a failed PartiQL batch statement. </p>
	 * @public
	 */
	Error?: BatchStatementError | undefined;
	/**
	 * <p> The table name associated with a failed PartiQL batch statement. </p>
	 * @public
	 */
	TableName?: string | undefined;
	/**
	 * <p> A DynamoDB item associated with a BatchStatementResponse </p>
	 * @public
	 */
	Item?: Record<string, AttributeValue> | undefined;
}
interface DeleteItemOutput {
	/**
	 * <p>A map of attribute names to <code>AttributeValue</code> objects, representing the item
	 *             as it appeared before the <code>DeleteItem</code> operation. This map appears in the
	 *             response only if <code>ReturnValues</code> was specified as <code>ALL_OLD</code> in the
	 *             request.</p>
	 * @public
	 */
	Attributes?: Record<string, AttributeValue> | undefined;
	/**
	 * <p>The capacity units consumed by the <code>DeleteItem</code> operation. The data
	 *             returned includes the total provisioned throughput consumed, along with statistics for
	 *             the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is
	 *             only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For
	 *             more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html">Provisioned capacity mode</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 *          <p>If the table has vector indexes, the response includes a
	 *             <code>VectorIndexes</code> field with <code>VectorWriteRequestBytes</code> consumed
	 *             for each affected vector index.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity | undefined;
	/**
	 * <p>Information about item collections, if any, that were affected by the
	 *                 <code>DeleteItem</code> operation. <code>ItemCollectionMetrics</code> is only
	 *             returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the
	 *             table does not have any local secondary indexes, this information is not returned in the
	 *             response.</p>
	 *          <p>Each <code>ItemCollectionMetrics</code> element consists of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ItemCollectionKey</code> - The partition key value of the item collection.
	 *                     This is the same as the partition key value of the item itself.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SizeEstimateRangeGB</code> - An estimate of item collection size, in
	 *                     gigabytes. This value is a two-element array containing a lower bound and an
	 *                     upper bound for the estimate. The estimate includes the size of all the items in
	 *                     the table, plus the size of all attributes projected into all of the local
	 *                     secondary indexes on that table. Use this estimate to measure whether a local
	 *                     secondary index is approaching its size limit.</p>
	 *                <p>The estimate is subject to change over time; therefore, do not rely on the
	 *                     precision or accuracy of the estimate.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ItemCollectionMetrics?: ItemCollectionMetrics | undefined;
}
interface ExecuteStatementOutput {
	/**
	 * <p>If a read operation was used, this property will contain the result of the read
	 *             operation; a map of attribute names and their values. For the write operations this
	 *             value will be empty.</p>
	 * @public
	 */
	Items?: Record<string, AttributeValue>[] | undefined;
	/**
	 * <p>If the response of a read request exceeds the response payload limit DynamoDB will set
	 *             this value in the response. If set, you can use that this value in the subsequent
	 *             request to get the remaining results.</p>
	 * @public
	 */
	NextToken?: string | undefined;
	/**
	 * <p>The capacity units consumed by an operation. The data returned includes the total
	 *             provisioned throughput consumed, along with statistics for the table and any indexes
	 *             involved in the operation. <code>ConsumedCapacity</code> is only returned if the request
	 *             asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html">Provisioned capacity mode</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity | undefined;
	/**
	 * <p>The primary key of the item where the operation stopped, inclusive of the previous
	 *             result set. Use this value to start a new operation, excluding this value in the new
	 *             request. If <code>LastEvaluatedKey</code> is empty, then the "last page" of results has
	 *             been processed and there is no more data to be retrieved. If
	 *                 <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean that there
	 *             is more data in the result set. The only way to know when you have reached the end of
	 *             the result set is when <code>LastEvaluatedKey</code> is empty. </p>
	 * @public
	 */
	LastEvaluatedKey?: Record<string, AttributeValue> | undefined;
}
interface PutItemOutput {
	/**
	 * <p>The attribute values as they appeared before the <code>PutItem</code> operation, but
	 *             only if <code>ReturnValues</code> is specified as <code>ALL_OLD</code> in the request.
	 *             Each element consists of an attribute name and an attribute value.</p>
	 * @public
	 */
	Attributes?: Record<string, AttributeValue> | undefined;
	/**
	 * <p>The capacity units consumed by the <code>PutItem</code> operation. The data returned
	 *             includes the total provisioned throughput consumed, along with statistics for the table
	 *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
	 *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
	 *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#write-operation-consumption">Capacity unity consumption for write operations</a> in the <i>Amazon
	 *                 DynamoDB Developer Guide</i>.</p>
	 *          <p>If the table has vector indexes, the response includes a
	 *             <code>VectorIndexes</code> field with <code>VectorWriteRequestBytes</code> consumed
	 *             for each affected vector index.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity | undefined;
	/**
	 * <p>Information about item collections, if any, that were affected by the
	 *                 <code>PutItem</code> operation. <code>ItemCollectionMetrics</code> is only returned
	 *             if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the table
	 *             does not have any local secondary indexes, this information is not returned in the
	 *             response.</p>
	 *          <p>Each <code>ItemCollectionMetrics</code> element consists of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ItemCollectionKey</code> - The partition key value of the item collection.
	 *                     This is the same as the partition key value of the item itself.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SizeEstimateRangeGB</code> - An estimate of item collection size, in
	 *                     gigabytes. This value is a two-element array containing a lower bound and an
	 *                     upper bound for the estimate. The estimate includes the size of all the items in
	 *                     the table, plus the size of all attributes projected into all of the local
	 *                     secondary indexes on that table. Use this estimate to measure whether a local
	 *                     secondary index is approaching its size limit.</p>
	 *                <p>The estimate is subject to change over time; therefore, do not rely on the
	 *                     precision or accuracy of the estimate.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ItemCollectionMetrics?: ItemCollectionMetrics | undefined;
}
interface QueryOutput {
	/**
	 * <p>An array of item attributes that match the query criteria. Each element in this array
	 *             consists of an attribute name and the value for that attribute.</p>
	 * @public
	 */
	Items?: Record<string, AttributeValue>[] | undefined;
	/**
	 * <p>The number of items in the response.</p>
	 *          <p>If you used a <code>QueryFilter</code> in the request, then <code>Count</code> is the
	 *             number of items returned after the filter was applied, and <code>ScannedCount</code> is
	 *             the number of matching items before the filter was applied.</p>
	 *          <p>If you did not use a filter in the request, then <code>Count</code> and
	 *                 <code>ScannedCount</code> are the same.</p>
	 * @public
	 */
	Count?: number | undefined;
	/**
	 * <p>The number of items evaluated, before any <code>QueryFilter</code> is applied. A high
	 *                 <code>ScannedCount</code> value with few, or no, <code>Count</code> results
	 *             indicates an inefficient <code>Query</code> operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Count">Count and ScannedCount</a> in the <i>Amazon DynamoDB Developer
	 *                 Guide</i>.</p>
	 *          <p>If you did not use a filter in the request, then <code>ScannedCount</code> is the same
	 *             as <code>Count</code>.</p>
	 * @public
	 */
	ScannedCount?: number | undefined;
	/**
	 * <p>The primary key of the item where the operation stopped, inclusive of the previous
	 *             result set. Use this value to start a new operation, excluding this value in the new
	 *             request.</p>
	 *          <p>If <code>LastEvaluatedKey</code> is empty, then the "last page" of results has been
	 *             processed and there is no more data to be retrieved.</p>
	 *          <p>If <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean that there
	 *             is more data in the result set. The only way to know when you have reached the end of
	 *             the result set is when <code>LastEvaluatedKey</code> is empty.</p>
	 * @public
	 */
	LastEvaluatedKey?: Record<string, AttributeValue> | undefined;
	/**
	 * <p>The capacity units consumed by the <code>Query</code> operation. The data returned
	 *             includes the total provisioned throughput consumed, along with statistics for the table
	 *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
	 *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
	 *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#read-operation-consumption">Capacity unit consumption for read operations</a> in the <i>Amazon
	 *                 DynamoDB Developer Guide</i>.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity | undefined;
}
interface ScanOutput {
	/**
	 * <p>An array of item attributes that match the scan criteria. Each element in this array
	 *             consists of an attribute name and the value for that attribute.</p>
	 * @public
	 */
	Items?: Record<string, AttributeValue>[] | undefined;
	/**
	 * <p>The number of items in the response.</p>
	 *          <p>If you set <code>ScanFilter</code> in the request, then <code>Count</code> is the
	 *             number of items returned after the filter was applied, and <code>ScannedCount</code> is
	 *             the number of matching items before the filter was applied.</p>
	 *          <p>If you did not use a filter in the request, then <code>Count</code> is the same as
	 *                 <code>ScannedCount</code>.</p>
	 * @public
	 */
	Count?: number | undefined;
	/**
	 * <p>The number of items evaluated, before any <code>ScanFilter</code> is applied. A high
	 *                 <code>ScannedCount</code> value with few, or no, <code>Count</code> results
	 *             indicates an inefficient <code>Scan</code> operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count">Count and
	 *                 ScannedCount</a> in the <i>Amazon DynamoDB Developer
	 *             Guide</i>.</p>
	 *          <p>If you did not use a filter in the request, then <code>ScannedCount</code> is the same
	 *             as <code>Count</code>.</p>
	 * @public
	 */
	ScannedCount?: number | undefined;
	/**
	 * <p>The primary key of the item where the operation stopped, inclusive of the previous
	 *             result set. Use this value to start a new operation, excluding this value in the new
	 *             request.</p>
	 *          <p>If <code>LastEvaluatedKey</code> is empty, then the "last page" of results has been
	 *             processed and there is no more data to be retrieved.</p>
	 *          <p>If <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean that there
	 *             is more data in the result set. The only way to know when you have reached the end of
	 *             the result set is when <code>LastEvaluatedKey</code> is empty.</p>
	 * @public
	 */
	LastEvaluatedKey?: Record<string, AttributeValue> | undefined;
	/**
	 * <p>The capacity units consumed by the <code>Scan</code> operation. The data returned
	 *             includes the total provisioned throughput consumed, along with statistics for the table
	 *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
	 *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
	 *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#read-operation-consumption">Capacity unit consumption for read operations</a> in the <i>Amazon
	 *                 DynamoDB Developer Guide</i>.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity | undefined;
}
interface UpdateItemOutput {
	/**
	 * <p>A map of attribute values as they appear before or after the <code>UpdateItem</code>
	 *             operation, as determined by the <code>ReturnValues</code> parameter.</p>
	 *          <p>The <code>Attributes</code> map is only present if the update was successful and
	 *                 <code>ReturnValues</code> was specified as something other than <code>NONE</code> in
	 *             the request. Each element represents one attribute.</p>
	 * @public
	 */
	Attributes?: Record<string, AttributeValue> | undefined;
	/**
	 * <p>The capacity units consumed by the <code>UpdateItem</code> operation. The data
	 *             returned includes the total provisioned throughput consumed, along with statistics for
	 *             the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is
	 *             only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For
	 *             more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#write-operation-consumption">Capacity unity consumption for write operations</a> in the <i>Amazon
	 *                 DynamoDB Developer Guide</i>.</p>
	 *          <p>If the table has vector indexes, the response includes a
	 *             <code>VectorIndexes</code> field with <code>VectorWriteRequestBytes</code> consumed
	 *             for each affected vector index.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity | undefined;
	/**
	 * <p>Information about item collections, if any, that were affected by the
	 *                 <code>UpdateItem</code> operation. <code>ItemCollectionMetrics</code> is only
	 *             returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the
	 *             table does not have any local secondary indexes, this information is not returned in the
	 *             response.</p>
	 *          <p>Each <code>ItemCollectionMetrics</code> element consists of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ItemCollectionKey</code> - The partition key value of the item collection.
	 *                     This is the same as the partition key value of the item itself.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SizeEstimateRangeGB</code> - An estimate of item collection size, in
	 *                     gigabytes. This value is a two-element array containing a lower bound and an
	 *                     upper bound for the estimate. The estimate includes the size of all the items in
	 *                     the table, plus the size of all attributes projected into all of the local
	 *                     secondary indexes on that table. Use this estimate to measure whether a local
	 *                     secondary index is approaching its size limit.</p>
	 *                <p>The estimate is subject to change over time; therefore, do not rely on the
	 *                     precision or accuracy of the estimate.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ItemCollectionMetrics?: ItemCollectionMetrics | undefined;
}
interface WriteRequest {
	/**
	 * <p>A request to perform a <code>PutItem</code> operation.</p>
	 * @public
	 */
	PutRequest?: PutRequest | undefined;
	/**
	 * <p>A request to perform a <code>DeleteItem</code> operation.</p>
	 * @public
	 */
	DeleteRequest?: DeleteRequest | undefined;
}
interface BatchExecuteStatementOutput {
	/**
	 * <p>The response to each PartiQL statement in the batch. The values of the list are
	 *             ordered according to the ordering of the request statements.</p>
	 * @public
	 */
	Responses?: BatchStatementResponse[] | undefined;
	/**
	 * <p>The capacity units consumed by the entire operation. The values of the list are
	 *             ordered according to the ordering of the statements.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity[] | undefined;
}
interface BatchGetItemOutput {
	/**
	 * <p>A map of table name or table ARN to a list of items. Each object in
	 *                 <code>Responses</code> consists of a table name or ARN, along with a map of
	 *             attribute data consisting of the data type and attribute value.</p>
	 * @public
	 */
	Responses?: Record<string, Record<string, AttributeValue>[]> | undefined;
	/**
	 * <p>A map of tables and their respective keys that were not processed with the current
	 *             response. The <code>UnprocessedKeys</code> value is in the same form as
	 *                 <code>RequestItems</code>, so the value can be provided directly to a subsequent
	 *                 <code>BatchGetItem</code> operation. For more information, see
	 *                 <code>RequestItems</code> in the Request Parameters section.</p>
	 *          <p>Each element consists of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>Keys</code> - An array of primary key attribute values that define
	 *                     specific items in the table.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ProjectionExpression</code> - One or more attributes to be retrieved from
	 *                     the table or index. By default, all attributes are returned. If a requested
	 *                     attribute is not found, it does not appear in the result.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ConsistentRead</code> - The consistency of a read operation. If set to
	 *                         <code>true</code>, then a strongly consistent read is used; otherwise, an
	 *                     eventually consistent read is used.</p>
	 *             </li>
	 *          </ul>
	 *          <p>If there are no unprocessed keys remaining, the response contains an empty
	 *                 <code>UnprocessedKeys</code> map.</p>
	 * @public
	 */
	UnprocessedKeys?: Record<string, KeysAndAttributes> | undefined;
	/**
	 * <p>The read capacity units consumed by the entire <code>BatchGetItem</code>
	 *             operation.</p>
	 *          <p>Each element consists of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>TableName</code> - The table that consumed the provisioned
	 *                     throughput.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>CapacityUnits</code> - The total number of capacity units consumed.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity[] | undefined;
}
interface BatchWriteItemOutput {
	/**
	 * <p>A map of tables and requests against those tables that were not processed. The
	 *                 <code>UnprocessedItems</code> value is in the same form as
	 *             <code>RequestItems</code>, so you can provide this value directly to a subsequent
	 *                 <code>BatchWriteItem</code> operation. For more information, see
	 *                 <code>RequestItems</code> in the Request Parameters section.</p>
	 *          <p>Each <code>UnprocessedItems</code> entry consists of a table name or table ARN
	 *             and, for that table, a list of operations to perform (<code>DeleteRequest</code> or
	 *                 <code>PutRequest</code>).</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>DeleteRequest</code> - Perform a <code>DeleteItem</code> operation on the
	 *                     specified item. The item to be deleted is identified by a <code>Key</code>
	 *                     subelement:</p>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <code>Key</code> - A map of primary key attribute values that uniquely
	 *                             identify the item. Each entry in this map consists of an attribute name
	 *                             and an attribute value.</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>PutRequest</code> - Perform a <code>PutItem</code> operation on the
	 *                     specified item. The item to be put is identified by an <code>Item</code>
	 *                     subelement:</p>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <code>Item</code> - A map of attributes and their values. Each entry in
	 *                             this map consists of an attribute name and an attribute value. Attribute
	 *                             values must not be null; string and binary type attributes must have
	 *                             lengths greater than zero; and set type attributes must not be empty.
	 *                             Requests that contain empty values will be rejected with a
	 *                                 <code>ValidationException</code> exception.</p>
	 *                      <p>If you specify any attributes that are part of an index key, then the
	 *                             data types for those attributes must match those of the schema in the
	 *                             table's attribute definition.</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *          </ul>
	 *          <p>If there are no unprocessed items remaining, the response contains an empty
	 *                 <code>UnprocessedItems</code> map.</p>
	 * @public
	 */
	UnprocessedItems?: Record<string, WriteRequest[]> | undefined;
	/**
	 * <p>A list of tables that were processed by <code>BatchWriteItem</code> and, for each
	 *             table, information about any item collections that were affected by individual
	 *                 <code>DeleteItem</code> or <code>PutItem</code> operations.</p>
	 *          <p>Each entry consists of the following subelements:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ItemCollectionKey</code> - The partition key value of the item collection.
	 *                     This is the same as the partition key value of the item.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SizeEstimateRangeGB</code> - An estimate of item collection size,
	 *                     expressed in GB. This is a two-element array containing a lower bound and an
	 *                     upper bound for the estimate. The estimate includes the size of all the items in
	 *                     the table, plus the size of all attributes projected into all of the local
	 *                     secondary indexes on the table. Use this estimate to measure whether a local
	 *                     secondary index is approaching its size limit.</p>
	 *                <p>The estimate is subject to change over time; therefore, do not rely on the
	 *                     precision or accuracy of the estimate.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ItemCollectionMetrics?: Record<string, ItemCollectionMetrics[]> | undefined;
	/**
	 * <p>The capacity units consumed by the entire <code>BatchWriteItem</code>
	 *             operation.</p>
	 *          <p>Each element consists of:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>TableName</code> - The table that consumed the provisioned
	 *                     throughput.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>CapacityUnits</code> - The total number of capacity units consumed.</p>
	 *             </li>
	 *          </ul>
	 *          <p>If the table has vector indexes, each element also includes a
	 *             <code>VectorIndexes</code> field with <code>VectorWriteRequestBytes</code> consumed
	 *             for each affected vector index.</p>
	 * @public
	 */
	ConsumedCapacity?: ConsumedCapacity[] | undefined;
}
/**
 * @public
 *
 * The output of {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link BatchGetItemCommand}.
 */
export interface BatchGetItemCommandOutput extends BatchGetItemOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link BatchWriteItemCommand}.
 */
export interface BatchWriteItemCommandOutput extends BatchWriteItemOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandOutput extends CreateBackupOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateGlobalTableCommand}.
 */
export interface CreateGlobalTableCommandOutput extends CreateGlobalTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateTableCommand}.
 */
export interface CreateTableCommandOutput extends CreateTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBackupCommand}.
 */
export interface DeleteBackupCommandOutput extends DeleteBackupOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteItemCommand}.
 */
export interface DeleteItemCommandOutput extends DeleteItemOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteTableCommand}.
 */
export interface DeleteTableCommandOutput extends DeleteTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeBackupCommand}.
 */
export interface DescribeBackupCommandOutput extends DescribeBackupOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeContinuousBackupsCommand}.
 */
export interface DescribeContinuousBackupsCommandOutput extends DescribeContinuousBackupsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeContributorInsightsCommand}.
 */
export interface DescribeContributorInsightsCommandOutput extends DescribeContributorInsightsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandOutput extends DescribeEndpointsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeExportCommand}.
 */
export interface DescribeExportCommandOutput extends DescribeExportOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeGlobalTableCommand}.
 */
export interface DescribeGlobalTableCommandOutput extends DescribeGlobalTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeGlobalTableSettingsCommand}.
 */
export interface DescribeGlobalTableSettingsCommandOutput extends DescribeGlobalTableSettingsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeImportCommand}.
 */
export interface DescribeImportCommandOutput extends DescribeImportOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeKinesisStreamingDestinationCommand}.
 */
export interface DescribeKinesisStreamingDestinationCommandOutput extends DescribeKinesisStreamingDestinationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandOutput extends DescribeLimitsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeTableCommand}.
 */
export interface DescribeTableCommandOutput extends DescribeTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeTableReplicaAutoScalingCommand}.
 */
export interface DescribeTableReplicaAutoScalingCommandOutput extends DescribeTableReplicaAutoScalingOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeTimeToLiveCommand}.
 */
export interface DescribeTimeToLiveCommandOutput extends DescribeTimeToLiveOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DisableKinesisStreamingDestinationCommand}.
 */
export interface DisableKinesisStreamingDestinationCommandOutput extends KinesisStreamingDestinationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link EnableKinesisStreamingDestinationCommand}.
 */
export interface EnableKinesisStreamingDestinationCommandOutput extends KinesisStreamingDestinationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandOutput extends ExecuteStatementOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ExecuteTransactionCommand}.
 */
export interface ExecuteTransactionCommandOutput extends ExecuteTransactionOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ExportTableToPointInTimeCommand}.
 */
export interface ExportTableToPointInTimeCommandOutput extends ExportTableToPointInTimeOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetItemCommand}.
 */
export interface GetItemCommandOutput extends GetItemOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ImportTableCommand}.
 */
export interface ImportTableCommandOutput extends ImportTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListBackupsCommand}.
 */
export interface ListBackupsCommandOutput extends ListBackupsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListContributorInsightsCommand}.
 */
export interface ListContributorInsightsCommandOutput extends ListContributorInsightsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListExportsCommand}.
 */
export interface ListExportsCommandOutput extends ListExportsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListGlobalTablesCommand}.
 */
export interface ListGlobalTablesCommandOutput extends ListGlobalTablesOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListImportsCommand}.
 */
export interface ListImportsCommandOutput extends ListImportsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListTablesCommand}.
 */
export interface ListTablesCommandOutput extends ListTablesOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListTagsOfResourceCommand}.
 */
export interface ListTagsOfResourceCommandOutput extends ListTagsOfResourceOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutItemCommand}.
 */
export interface PutItemCommandOutput extends PutItemOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link QueryCommand}.
 */
export interface QueryCommandOutput extends QueryOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RestoreTableFromBackupCommand}.
 */
export interface RestoreTableFromBackupCommandOutput extends RestoreTableFromBackupOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RestoreTableToPointInTimeCommand}.
 */
export interface RestoreTableToPointInTimeCommandOutput extends RestoreTableToPointInTimeOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ScanCommand}.
 */
export interface ScanCommandOutput extends ScanOutput, MetadataBearer {
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
 * The output of {@link TransactGetItemsCommand}.
 */
export interface TransactGetItemsCommandOutput extends TransactGetItemsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link TransactWriteItemsCommand}.
 */
export interface TransactWriteItemsCommandOutput extends TransactWriteItemsOutput, MetadataBearer {
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
 * The output of {@link UpdateContinuousBackupsCommand}.
 */
export interface UpdateContinuousBackupsCommandOutput extends UpdateContinuousBackupsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateContributorInsightsCommand}.
 */
export interface UpdateContributorInsightsCommandOutput extends UpdateContributorInsightsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateGlobalTableCommand}.
 */
export interface UpdateGlobalTableCommandOutput extends UpdateGlobalTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateGlobalTableSettingsCommand}.
 */
export interface UpdateGlobalTableSettingsCommandOutput extends UpdateGlobalTableSettingsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateItemCommand}.
 */
export interface UpdateItemCommandOutput extends UpdateItemOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandOutput extends UpdateTableOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateTableReplicaAutoScalingCommand}.
 */
export interface UpdateTableReplicaAutoScalingCommandOutput extends UpdateTableReplicaAutoScalingOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateTimeToLiveCommand}.
 */
export interface UpdateTimeToLiveCommandOutput extends UpdateTimeToLiveOutput, MetadataBearer {
}

export {};
