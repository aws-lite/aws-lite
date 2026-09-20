// Generated from @aws-sdk/client-s3@3.1136.0 by npm run gen. Do not edit.
// AWS SDK and Smithy declarations: see ../readme.md#attribution.

import { IncomingMessage } from 'node:http';
import { Readable } from 'node:stream';

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
type Exact<A, B> = [
	A
] extends [
	B
] ? ([
	B
] extends [
	A
] ? true : false) : false;
type BlobOptionalType = BlobDefined extends true ? Blob : Unavailable;
type ReadableStreamOptionalType = ReadableStreamDefined extends true ? ReadableStream : Unavailable;
type Unavailable = never;
type ReadableStreamDefined = Exact<ReadableStream, {}> extends true ? false : true;
type BlobDefined = Exact<Blob, {}> extends true ? false : true;
interface SdkStreamMixin {
	transformToByteArray: () => Promise<Uint8Array>;
	transformToString: (encoding?: string) => Promise<string>;
	transformToWebStream: () => ReadableStream;
}
type SdkStream<BaseStream> = BaseStream & SdkStreamMixin;
type StreamingBlobTypes = NodeJsRuntimeStreamingBlobTypes | BrowserRuntimeStreamingBlobTypes;
type NodeJsRuntimeStreamingBlobTypes = Readable;
type BrowserRuntimeStreamingBlobTypes = ReadableStreamOptionalType | BlobOptionalType;
type StreamingBlobPayloadOutputTypes = NodeJsRuntimeStreamingBlobPayloadOutputTypes | BrowserRuntimeStreamingBlobPayloadOutputTypes;
type NodeJsRuntimeStreamingBlobPayloadOutputTypes = SdkStream<IncomingMessage | Readable>;
type BrowserRuntimeStreamingBlobPayloadOutputTypes = SdkStream<ReadableStreamOptionalType | BlobOptionalType>;
declare const RequestCharged: {
	readonly requester: "requester";
};
type RequestCharged = (typeof RequestCharged)[keyof typeof RequestCharged];
declare const BucketAccelerateStatus: {
	readonly Enabled: "Enabled";
	readonly Suspended: "Suspended";
};
type BucketAccelerateStatus = (typeof BucketAccelerateStatus)[keyof typeof BucketAccelerateStatus];
declare const Type: {
	readonly AmazonCustomerByEmail: "AmazonCustomerByEmail";
	readonly CanonicalUser: "CanonicalUser";
	readonly Group: "Group";
};
type Type = (typeof Type)[keyof typeof Type];
declare const Permission: {
	readonly FULL_CONTROL: "FULL_CONTROL";
	readonly READ: "READ";
	readonly READ_ACP: "READ_ACP";
	readonly WRITE: "WRITE";
	readonly WRITE_ACP: "WRITE_ACP";
};
type Permission = (typeof Permission)[keyof typeof Permission];
declare const OwnerOverride: {
	readonly Destination: "Destination";
};
type OwnerOverride = (typeof OwnerOverride)[keyof typeof OwnerOverride];
declare const ChecksumType: {
	readonly COMPOSITE: "COMPOSITE";
	readonly FULL_OBJECT: "FULL_OBJECT";
};
type ChecksumType = (typeof ChecksumType)[keyof typeof ChecksumType];
declare const ServerSideEncryption: {
	readonly AES256: "AES256";
	readonly aws_backup: "aws:backup";
	readonly aws_fsx: "aws:fsx";
	readonly aws_kms: "aws:kms";
	readonly aws_kms_dsse: "aws:kms:dsse";
};
type ServerSideEncryption = (typeof ServerSideEncryption)[keyof typeof ServerSideEncryption];
declare const ChecksumAlgorithm: {
	readonly CRC32: "CRC32";
	readonly CRC32C: "CRC32C";
	readonly CRC64NVME: "CRC64NVME";
	readonly MD5: "MD5";
	readonly SHA1: "SHA1";
	readonly SHA256: "SHA256";
	readonly SHA512: "SHA512";
	readonly XXHASH128: "XXHASH128";
	readonly XXHASH3: "XXHASH3";
	readonly XXHASH64: "XXHASH64";
};
type ChecksumAlgorithm = (typeof ChecksumAlgorithm)[keyof typeof ChecksumAlgorithm];
declare const ObjectLockEventHold: {
	readonly OFF: "OFF";
	readonly ON: "ON";
};
type ObjectLockEventHold = (typeof ObjectLockEventHold)[keyof typeof ObjectLockEventHold];
declare const ObjectLockLegalHoldStatus: {
	readonly OFF: "OFF";
	readonly ON: "ON";
};
type ObjectLockLegalHoldStatus = (typeof ObjectLockLegalHoldStatus)[keyof typeof ObjectLockLegalHoldStatus];
declare const ObjectLockMode: {
	readonly COMPLIANCE: "COMPLIANCE";
	readonly GOVERNANCE: "GOVERNANCE";
};
type ObjectLockMode = (typeof ObjectLockMode)[keyof typeof ObjectLockMode];
declare const StorageClass: {
	readonly AWS_BACKUP_LOW_COST_WARM: "AWS_BACKUP_LOW_COST_WARM";
	readonly AWS_BACKUP_WARM: "AWS_BACKUP_WARM";
	readonly DEEP_ARCHIVE: "DEEP_ARCHIVE";
	readonly EXPRESS_ONEZONE: "EXPRESS_ONEZONE";
	readonly FSX_ONTAP: "FSX_ONTAP";
	readonly FSX_OPENZFS: "FSX_OPENZFS";
	readonly GLACIER: "GLACIER";
	readonly GLACIER_IR: "GLACIER_IR";
	readonly INTELLIGENT_TIERING: "INTELLIGENT_TIERING";
	readonly ONEZONE_IA: "ONEZONE_IA";
	readonly OUTPOSTS: "OUTPOSTS";
	readonly REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY";
	readonly SNOW: "SNOW";
	readonly STANDARD: "STANDARD";
	readonly STANDARD_IA: "STANDARD_IA";
};
type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];
declare const LocationType: {
	readonly AvailabilityZone: "AvailabilityZone";
	readonly LocalZone: "LocalZone";
};
type LocationType = (typeof LocationType)[keyof typeof LocationType];
declare const BucketLocationConstraint: {
	readonly EU: "EU";
	readonly af_south_1: "af-south-1";
	readonly ap_east_1: "ap-east-1";
	readonly ap_east_2: "ap-east-2";
	readonly ap_northeast_1: "ap-northeast-1";
	readonly ap_northeast_2: "ap-northeast-2";
	readonly ap_northeast_3: "ap-northeast-3";
	readonly ap_south_1: "ap-south-1";
	readonly ap_south_2: "ap-south-2";
	readonly ap_southeast_1: "ap-southeast-1";
	readonly ap_southeast_2: "ap-southeast-2";
	readonly ap_southeast_3: "ap-southeast-3";
	readonly ap_southeast_4: "ap-southeast-4";
	readonly ap_southeast_5: "ap-southeast-5";
	readonly ap_southeast_6: "ap-southeast-6";
	readonly ap_southeast_7: "ap-southeast-7";
	readonly ca_central_1: "ca-central-1";
	readonly ca_west_1: "ca-west-1";
	readonly cn_north_1: "cn-north-1";
	readonly cn_northwest_1: "cn-northwest-1";
	readonly eu_central_1: "eu-central-1";
	readonly eu_central_2: "eu-central-2";
	readonly eu_north_1: "eu-north-1";
	readonly eu_south_1: "eu-south-1";
	readonly eu_south_2: "eu-south-2";
	readonly eu_west_1: "eu-west-1";
	readonly eu_west_2: "eu-west-2";
	readonly eu_west_3: "eu-west-3";
	readonly il_central_1: "il-central-1";
	readonly me_central_1: "me-central-1";
	readonly me_south_1: "me-south-1";
	readonly mx_central_1: "mx-central-1";
	readonly sa_east_1: "sa-east-1";
	readonly us_east_2: "us-east-2";
	readonly us_gov_east_1: "us-gov-east-1";
	readonly us_gov_west_1: "us-gov-west-1";
	readonly us_west_1: "us-west-1";
	readonly us_west_2: "us-west-2";
};
type BucketLocationConstraint = (typeof BucketLocationConstraint)[keyof typeof BucketLocationConstraint];
declare const ObjectOwnership: {
	readonly BucketOwnerEnforced: "BucketOwnerEnforced";
	readonly BucketOwnerPreferred: "BucketOwnerPreferred";
	readonly ObjectWriter: "ObjectWriter";
};
type ObjectOwnership = (typeof ObjectOwnership)[keyof typeof ObjectOwnership];
declare const AnalyticsS3ExportFileFormat: {
	readonly CSV: "CSV";
};
type AnalyticsS3ExportFileFormat = (typeof AnalyticsS3ExportFileFormat)[keyof typeof AnalyticsS3ExportFileFormat];
declare const StorageClassAnalysisSchemaVersion: {
	readonly V_1: "V_1";
};
type StorageClassAnalysisSchemaVersion = (typeof StorageClassAnalysisSchemaVersion)[keyof typeof StorageClassAnalysisSchemaVersion];
declare const EncryptionType: {
	readonly NONE: "NONE";
	readonly SSE_C: "SSE-C";
};
type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];
declare const IntelligentTieringStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type IntelligentTieringStatus = (typeof IntelligentTieringStatus)[keyof typeof IntelligentTieringStatus];
declare const IntelligentTieringAccessTier: {
	readonly ARCHIVE_ACCESS: "ARCHIVE_ACCESS";
	readonly DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS";
};
type IntelligentTieringAccessTier = (typeof IntelligentTieringAccessTier)[keyof typeof IntelligentTieringAccessTier];
declare const InventoryFormat: {
	readonly CSV: "CSV";
	readonly ORC: "ORC";
	readonly Parquet: "Parquet";
};
type InventoryFormat = (typeof InventoryFormat)[keyof typeof InventoryFormat];
declare const InventoryIncludedObjectVersions: {
	readonly All: "All";
	readonly Current: "Current";
};
type InventoryIncludedObjectVersions = (typeof InventoryIncludedObjectVersions)[keyof typeof InventoryIncludedObjectVersions];
declare const InventoryOptionalField: {
	readonly BucketKeyStatus: "BucketKeyStatus";
	readonly ChecksumAlgorithm: "ChecksumAlgorithm";
	readonly ETag: "ETag";
	readonly EncryptionStatus: "EncryptionStatus";
	readonly IntelligentTieringAccessTier: "IntelligentTieringAccessTier";
	readonly IsMultipartUploaded: "IsMultipartUploaded";
	readonly LastModifiedDate: "LastModifiedDate";
	readonly LifecycleExpirationDate: "LifecycleExpirationDate";
	readonly ObjectAccessControlList: "ObjectAccessControlList";
	readonly ObjectLockEventHoldDuration: "ObjectLockEventHoldDuration";
	readonly ObjectLockEventHoldStatus: "ObjectLockEventHoldStatus";
	readonly ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus";
	readonly ObjectLockMode: "ObjectLockMode";
	readonly ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate";
	readonly ObjectOwner: "ObjectOwner";
	readonly ReplicationStatus: "ReplicationStatus";
	readonly Size: "Size";
	readonly StorageClass: "StorageClass";
};
type InventoryOptionalField = (typeof InventoryOptionalField)[keyof typeof InventoryOptionalField];
declare const InventoryFrequency: {
	readonly Daily: "Daily";
	readonly Weekly: "Weekly";
};
type InventoryFrequency = (typeof InventoryFrequency)[keyof typeof InventoryFrequency];
declare const TransitionStorageClass: {
	readonly DEEP_ARCHIVE: "DEEP_ARCHIVE";
	readonly GLACIER: "GLACIER";
	readonly GLACIER_IR: "GLACIER_IR";
	readonly INTELLIGENT_TIERING: "INTELLIGENT_TIERING";
	readonly ONEZONE_IA: "ONEZONE_IA";
	readonly STANDARD_IA: "STANDARD_IA";
};
type TransitionStorageClass = (typeof TransitionStorageClass)[keyof typeof TransitionStorageClass];
declare const ExpirationStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type ExpirationStatus = (typeof ExpirationStatus)[keyof typeof ExpirationStatus];
declare const TransitionDefaultMinimumObjectSize: {
	readonly all_storage_classes_128K: "all_storage_classes_128K";
	readonly varies_by_storage_class: "varies_by_storage_class";
};
type TransitionDefaultMinimumObjectSize = (typeof TransitionDefaultMinimumObjectSize)[keyof typeof TransitionDefaultMinimumObjectSize];
declare const BucketLogsPermission: {
	readonly FULL_CONTROL: "FULL_CONTROL";
	readonly READ: "READ";
	readonly WRITE: "WRITE";
};
type BucketLogsPermission = (typeof BucketLogsPermission)[keyof typeof BucketLogsPermission];
declare const PartitionDateSource: {
	readonly DeliveryTime: "DeliveryTime";
	readonly EventTime: "EventTime";
};
type PartitionDateSource = (typeof PartitionDateSource)[keyof typeof PartitionDateSource];
declare const Event$1: {
	readonly s3_IntelligentTiering: "s3:IntelligentTiering";
	readonly s3_LifecycleExpiration_: "s3:LifecycleExpiration:*";
	readonly s3_LifecycleExpiration_Delete: "s3:LifecycleExpiration:Delete";
	readonly s3_LifecycleExpiration_DeleteMarkerCreated: "s3:LifecycleExpiration:DeleteMarkerCreated";
	readonly s3_LifecycleTransition: "s3:LifecycleTransition";
	readonly s3_ObjectAcl_Put: "s3:ObjectAcl:Put";
	readonly s3_ObjectAnnotation_: "s3:ObjectAnnotation:*";
	readonly s3_ObjectAnnotation_Delete: "s3:ObjectAnnotation:Delete";
	readonly s3_ObjectAnnotation_Put: "s3:ObjectAnnotation:Put";
	readonly s3_ObjectCreated_: "s3:ObjectCreated:*";
	readonly s3_ObjectCreated_CompleteMultipartUpload: "s3:ObjectCreated:CompleteMultipartUpload";
	readonly s3_ObjectCreated_Copy: "s3:ObjectCreated:Copy";
	readonly s3_ObjectCreated_Post: "s3:ObjectCreated:Post";
	readonly s3_ObjectCreated_Put: "s3:ObjectCreated:Put";
	readonly s3_ObjectRemoved_: "s3:ObjectRemoved:*";
	readonly s3_ObjectRemoved_Delete: "s3:ObjectRemoved:Delete";
	readonly s3_ObjectRemoved_DeleteMarkerCreated: "s3:ObjectRemoved:DeleteMarkerCreated";
	readonly s3_ObjectRestore_: "s3:ObjectRestore:*";
	readonly s3_ObjectRestore_Completed: "s3:ObjectRestore:Completed";
	readonly s3_ObjectRestore_Delete: "s3:ObjectRestore:Delete";
	readonly s3_ObjectRestore_Post: "s3:ObjectRestore:Post";
	readonly s3_ObjectRetention_Put: "s3:ObjectRetention:Put";
	readonly s3_ObjectTagging_: "s3:ObjectTagging:*";
	readonly s3_ObjectTagging_Delete: "s3:ObjectTagging:Delete";
	readonly s3_ObjectTagging_Put: "s3:ObjectTagging:Put";
	readonly s3_ReducedRedundancyLostObject: "s3:ReducedRedundancyLostObject";
	readonly s3_Replication_: "s3:Replication:*";
	readonly s3_Replication_OperationFailedReplication: "s3:Replication:OperationFailedReplication";
	readonly s3_Replication_OperationMissedThreshold: "s3:Replication:OperationMissedThreshold";
	readonly s3_Replication_OperationNotTracked: "s3:Replication:OperationNotTracked";
	readonly s3_Replication_OperationReplicatedAfterThreshold: "s3:Replication:OperationReplicatedAfterThreshold";
};
type Event$1 = (typeof Event$1)[keyof typeof Event$1];
declare const FilterRuleName: {
	readonly prefix: "prefix";
	readonly suffix: "suffix";
};
type FilterRuleName = (typeof FilterRuleName)[keyof typeof FilterRuleName];
declare const DeleteMarkerReplicationStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type DeleteMarkerReplicationStatus = (typeof DeleteMarkerReplicationStatus)[keyof typeof DeleteMarkerReplicationStatus];
declare const MetricsStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];
declare const ReplicationTimeStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type ReplicationTimeStatus = (typeof ReplicationTimeStatus)[keyof typeof ReplicationTimeStatus];
declare const ExistingObjectReplicationStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type ExistingObjectReplicationStatus = (typeof ExistingObjectReplicationStatus)[keyof typeof ExistingObjectReplicationStatus];
declare const ReplicaModificationsStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type ReplicaModificationsStatus = (typeof ReplicaModificationsStatus)[keyof typeof ReplicaModificationsStatus];
declare const SseKmsEncryptedObjectsStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type SseKmsEncryptedObjectsStatus = (typeof SseKmsEncryptedObjectsStatus)[keyof typeof SseKmsEncryptedObjectsStatus];
declare const ReplicationRuleStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type ReplicationRuleStatus = (typeof ReplicationRuleStatus)[keyof typeof ReplicationRuleStatus];
declare const Payer: {
	readonly BucketOwner: "BucketOwner";
	readonly Requester: "Requester";
};
type Payer = (typeof Payer)[keyof typeof Payer];
declare const MFADeleteStatus: {
	readonly Disabled: "Disabled";
	readonly Enabled: "Enabled";
};
type MFADeleteStatus = (typeof MFADeleteStatus)[keyof typeof MFADeleteStatus];
declare const BucketVersioningStatus: {
	readonly Enabled: "Enabled";
	readonly Suspended: "Suspended";
};
type BucketVersioningStatus = (typeof BucketVersioningStatus)[keyof typeof BucketVersioningStatus];
declare const Protocol: {
	readonly http: "http";
	readonly https: "https";
};
type Protocol = (typeof Protocol)[keyof typeof Protocol];
declare const ReplicationStatus: {
	readonly COMPLETE: "COMPLETE";
	readonly COMPLETED: "COMPLETED";
	readonly FAILED: "FAILED";
	readonly PENDING: "PENDING";
	readonly REPLICA: "REPLICA";
};
type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];
declare const ObjectLockEnabled: {
	readonly Enabled: "Enabled";
};
type ObjectLockEnabled = (typeof ObjectLockEnabled)[keyof typeof ObjectLockEnabled];
declare const ObjectLockRetentionMode: {
	readonly COMPLIANCE: "COMPLIANCE";
	readonly GOVERNANCE: "GOVERNANCE";
};
type ObjectLockRetentionMode = (typeof ObjectLockRetentionMode)[keyof typeof ObjectLockRetentionMode];
declare const ArchiveStatus: {
	readonly ARCHIVE_ACCESS: "ARCHIVE_ACCESS";
	readonly DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS";
};
type ArchiveStatus = (typeof ArchiveStatus)[keyof typeof ArchiveStatus];
declare const EncodingType: {
	readonly url: "url";
};
type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];
declare const ObjectStorageClass: {
	readonly AWS_BACKUP_LOW_COST_WARM: "AWS_BACKUP_LOW_COST_WARM";
	readonly AWS_BACKUP_WARM: "AWS_BACKUP_WARM";
	readonly DEEP_ARCHIVE: "DEEP_ARCHIVE";
	readonly EXPRESS_ONEZONE: "EXPRESS_ONEZONE";
	readonly FSX_ONTAP: "FSX_ONTAP";
	readonly FSX_OPENZFS: "FSX_OPENZFS";
	readonly GLACIER: "GLACIER";
	readonly GLACIER_IR: "GLACIER_IR";
	readonly INTELLIGENT_TIERING: "INTELLIGENT_TIERING";
	readonly ONEZONE_IA: "ONEZONE_IA";
	readonly OUTPOSTS: "OUTPOSTS";
	readonly REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY";
	readonly SNOW: "SNOW";
	readonly STANDARD: "STANDARD";
	readonly STANDARD_IA: "STANDARD_IA";
};
type ObjectStorageClass = (typeof ObjectStorageClass)[keyof typeof ObjectStorageClass];
declare const ObjectVersionStorageClass: {
	readonly STANDARD: "STANDARD";
};
type ObjectVersionStorageClass = (typeof ObjectVersionStorageClass)[keyof typeof ObjectVersionStorageClass];
interface AbortIncompleteMultipartUpload {
	/**
	 * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.</p>
	 * @public
	 */
	DaysAfterInitiation?: number | undefined;
}
interface AbortMultipartUploadOutput {
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface Grantee {
	/**
	 * <p></p>
	 * @public
	 */
	DisplayName?: string | undefined;
	/**
	 * <p></p>
	 * @public
	 */
	EmailAddress?: string | undefined;
	/**
	 * <p>The canonical user ID of the grantee.</p>
	 * @public
	 */
	ID?: string | undefined;
	/**
	 * <p>URI of the grantee group.</p>
	 * @public
	 */
	URI?: string | undefined;
	/**
	 * <p>Type of grantee</p>
	 * @public
	 */
	Type: Type | undefined;
}
interface Grant {
	/**
	 * <p>The person being granted permissions.</p>
	 * @public
	 */
	Grantee?: Grantee | undefined;
	/**
	 * <p>Specifies the permission given to the grantee.</p>
	 * @public
	 */
	Permission?: Permission | undefined;
}
interface Owner {
	/**
	 * <p></p>
	 * @public
	 */
	DisplayName?: string | undefined;
	/**
	 * <p>Container for the ID of the owner.</p>
	 * @public
	 */
	ID?: string | undefined;
}
interface AccessControlTranslation {
	/**
	 * <p>Specifies the replica ownership. For default and valid values, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT bucket replication</a> in the
	 *         <i>Amazon S3 API Reference</i>.</p>
	 * @public
	 */
	Owner: OwnerOverride | undefined;
}
interface CompleteMultipartUploadOutput {
	/**
	 * <p>The URI that identifies the newly created object.</p>
	 * @public
	 */
	Location?: string | undefined;
	/**
	 * <p>The name of the bucket that contains the newly created object. Does not return the access point ARN or access point
	 *       alias if used.</p>
	 *          <note>
	 *             <p>Access points are not supported by directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Bucket?: string | undefined;
	/**
	 * <p>The object key of the newly created object.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>If the object expiration is configured, this will contain the expiration date
	 *         (<code>expiry-date</code>) and rule ID (<code>rule-id</code>). The value of <code>rule-id</code> is
	 *       URL-encoded.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Expiration?: string | undefined;
	/**
	 * <p>Entity tag that identifies the newly created object's data. Objects with different object data will
	 *       have different entity tags. The entity tag is an opaque string. The entity tag may or may not be an MD5
	 *       digest of the object data. If the entity tag is not an MD5 digest of the object data, it will contain
	 *       one or more nonhexadecimal characters and/or will consist of less than 32 or more than 32 hexadecimal
	 *       digits. For more information about how the entity tag is calculated, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32 checksum</code> of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>This header can be used as a data integrity check to verify that the data received is the same data
	 *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
	 *       checksum of the object. The <code>CRC64NVME</code> checksum is always a full object checksum. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>. </p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the object. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the object. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the object. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the object. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the object. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
	/**
	 * <p>The checksum type, which determines how part-level checksums are combined to create an object-level
	 *       checksum for multipart objects. You can use this header as a data integrity check to verify that the
	 *       checksum type that is received is the same checksum type that was specified during the
	 *         <code>CreateMultipartUpload</code> request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
	/**
	 * <p>The server-side encryption algorithm used when storing this object in Amazon S3.</p>
	 *          <note>
	 *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
	 *         encryption option is <code>aws:fsx</code>.</p>
	 *          </note>
	 *          <p></p>
	 * @public
	 */
	ServerSideEncryption?: ServerSideEncryption | undefined;
	/**
	 * <p>Version ID of the newly created object, in case the bucket has versioning turned on.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
	 * @public
	 */
	SSEKMSKeyId?: string | undefined;
	/**
	 * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with
	 *       Key Management Service (KMS) keys (SSE-KMS).</p>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface CopyObjectResult {
	/**
	 * <p>Returns the ETag of the new object. The ETag reflects only changes to the contents of an object, not
	 *       its metadata.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>Creation date of the object.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>The checksum type that is used to calculate the object’s checksum value. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the object. This checksum is present
	 *       if the object being copied was uploaded with the <code>CRC64NVME</code> checksum algorithm, or if the
	 *       object was uploaded without a checksum (and Amazon S3 added the default checksum, <code>CRC64NVME</code>, to
	 *       the uploaded object). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the object. This checksum is only present
	 *       if the object was uploaded with the <code>SHA512</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the object. This checksum is only present
	 *       if the object was uploaded with the <code>MD5</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the object. This checksum is only present
	 *       if the object was uploaded with the <code>XXHASH64</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the object. This checksum is only present
	 *       if the object was uploaded with the <code>XXHASH3</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the object. This checksum is only present
	 *       if the object was uploaded with the <code>XXHASH128</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
}
interface CopyObjectOutput {
	/**
	 * <p>Container for all response elements.</p>
	 * @public
	 */
	CopyObjectResult?: CopyObjectResult | undefined;
	/**
	 * <p>If the object expiration is configured, the response includes this header.</p>
	 *          <note>
	 *             <p>Object expiration information is not returned in directory buckets and this header returns the
	 *         value "<code>NotImplemented</code>" in all responses for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Expiration?: string | undefined;
	/**
	 * <p>Version ID of the source object that was copied.</p>
	 *          <note>
	 *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
	 *          </note>
	 * @public
	 */
	CopySourceVersionId?: string | undefined;
	/**
	 * <p>Version ID of the newly created copy.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
	 *          <note>
	 *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
	 *         encryption option is <code>aws:fsx</code>.</p>
	 *          </note>
	 * @public
	 */
	ServerSideEncryption?: ServerSideEncryption | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to confirm the encryption algorithm that's used.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerAlgorithm?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to provide the round-trip message integrity verification of the customer-provided
	 *       encryption key.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerKeyMD5?: string | undefined;
	/**
	 * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
	 * @public
	 */
	SSEKMSKeyId?: string | undefined;
	/**
	 * <p>If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
	 *       this header is a Base64 encoded UTF-8 string holding JSON with the encryption context key-value
	 *       pairs.</p>
	 * @public
	 */
	SSEKMSEncryptionContext?: string | undefined;
	/**
	 * <p>Indicates whether the copied object uses an S3 Bucket Key for server-side encryption with Key Management Service
	 *       (KMS) keys (SSE-KMS).</p>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface CreateBucketOutput {
	/**
	 * <p>A forward slash followed by the name of the bucket for all account regional namespace buckets and all global general purpose buckets created in us-east-1. For example, <code>/amzn-s3-demo-bucket</code>. For global general purpose buckets created in other Amazon Web Services Regions, the Location field is the global endpoint URL. For example, <code>http://amzn-s3-demo-bucket.s3.amazonaws.com/</code>.</p>
	 * @public
	 */
	Location?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all
	 *       of Amazon Web Services.</p>
	 *          <note>
	 *             <p>This parameter is only supported for S3 directory buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html">Using tags with
	 *           directory buckets</a>.</p>
	 *          </note>
	 * @public
	 */
	BucketArn?: string | undefined;
}
interface Tag {
	/**
	 * <p>Name of the object key.</p>
	 * @public
	 */
	Key: string | undefined;
	/**
	 * <p>Value of the tag.</p>
	 * @public
	 */
	Value: string | undefined;
}
interface CreateMultipartUploadOutput {
	/**
	 * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads
	 *       and the prefix in the lifecycle rule matches the object name in the request, the response includes this
	 *       header. The header indicates when the initiated multipart upload becomes eligible for an abort
	 *       operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting
	 *         Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in the
	 *         <i>Amazon S3 User Guide</i>.</p>
	 *          <p>The response also includes the <code>x-amz-abort-rule-id</code> header that provides the ID of the
	 *       lifecycle configuration rule that defines the abort action.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	AbortDate?: Date | undefined;
	/**
	 * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It identifies the
	 *       applicable lifecycle configuration rule that defines the action to abort incomplete multipart
	 *       uploads.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	AbortRuleId?: string | undefined;
	/**
	 * <p>The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or
	 *       access point alias if used.</p>
	 *          <note>
	 *             <p>Access points are not supported by directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Bucket?: string | undefined;
	/**
	 * <p>Object key for which the multipart upload was initiated.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>ID for the initiated multipart upload.</p>
	 * @public
	 */
	UploadId?: string | undefined;
	/**
	 * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
	 *          <note>
	 *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
	 *         encryption option is <code>aws:fsx</code>.</p>
	 *          </note>
	 * @public
	 */
	ServerSideEncryption?: ServerSideEncryption | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to confirm the encryption algorithm that's used.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerAlgorithm?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to provide the round-trip message integrity verification of the customer-provided
	 *       encryption key.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerKeyMD5?: string | undefined;
	/**
	 * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
	 * @public
	 */
	SSEKMSKeyId?: string | undefined;
	/**
	 * <p>If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
	 *          this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.</p>
	 * @public
	 */
	SSEKMSEncryptionContext?: string | undefined;
	/**
	 * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with
	 *       Key Management Service (KMS) keys (SSE-KMS).</p>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
	/**
	 * <p>The algorithm that was used to create a checksum of the object.</p>
	 * @public
	 */
	ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
	/**
	 * <p> Indicates the checksum type that you want Amazon S3 to use to calculate the object’s checksum
	 *       value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
}
interface DeleteObjectOutput {
	/**
	 * <p>Indicates whether the specified object version that was permanently deleted was (true) or was not
	 *       (false) a delete marker before deletion. In a simple DELETE, this header indicates whether (true) or not
	 *       (false) the current version of the object is a delete marker. To learn more about delete markers, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html">Working with delete
	 *         markers</a>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	DeleteMarker?: boolean | undefined;
	/**
	 * <p>Returns the version ID of the delete marker created as a result of the DELETE operation.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface DeletedObject {
	/**
	 * <p>The name of the deleted object.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>The version ID of the deleted object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>Indicates whether the specified object version that was permanently deleted was (true) or was not
	 *       (false) a delete marker before deletion. In a simple DELETE, this header indicates whether (true) or not
	 *       (false) the current version of the object is a delete marker. To learn more about delete markers, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html">Working with delete
	 *         markers</a>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	DeleteMarker?: boolean | undefined;
	/**
	 * <p>The version ID of the delete marker created as a result of the DELETE operation. If you delete a
	 *       specific object version, the value returned by this header is the version ID of the object version
	 *       deleted.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	DeleteMarkerVersionId?: string | undefined;
}
interface _Error {
	/**
	 * <p>The error key.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>The version ID of the error.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>The error code is a string that uniquely identifies an error condition. It is meant to be read and
	 *       understood by programs that detect and handle errors by type. The following is a list of Amazon S3 error
	 *       codes. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error responses</a>.</p>
	 *          <ul>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> AccessDenied </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Access Denied</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> AccountProblem</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> There is a problem with your Amazon Web Services account that prevents
	 *               the action from completing successfully. Contact Amazon Web Services Support for further assistance.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> AllAccessDisabled</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> All access to this Amazon S3 resource has been disabled.
	 *               Contact Amazon Web Services Support for further assistance.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> AmbiguousGrantByEmailAddress</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The email address you provided is associated with more
	 *               than one account.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> AuthorizationHeaderMalformed</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The authorization header you provided is invalid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> BadDigest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The Content-MD5 you specified did not match what we
	 *               received.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> BucketAlreadyExists</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The requested bucket name is not available. The bucket
	 *               namespace is shared by all users of the system. Please select a different name and try
	 *               again.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 409 Conflict</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> BucketAlreadyOwnedByYou</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The bucket you tried to create already exists, and you own
	 *               it. Amazon S3 returns this error in all Amazon Web Services Regions except in the North Virginia Region. For legacy
	 *               compatibility, if you re-create an existing bucket that you already own in the North Virginia
	 *               Region, Amazon S3 returns 200 OK and resets the bucket access control lists (ACLs).</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> 409 Conflict (in all Regions except the North Virginia Region)
	 *             </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> BucketNotEmpty</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The bucket you tried to delete is not empty.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 409 Conflict</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> CredentialsNotSupported</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> This request does not support credentials.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> CrossLocationLoggingProhibited</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Cross-location logging not allowed. Buckets in one
	 *               geographic location cannot log information to a bucket in another location.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> EntityTooSmall</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your proposed upload is smaller than the minimum allowed
	 *               object size.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> EntityTooLarge</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your proposed upload exceeds the maximum allowed object
	 *               size.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> ExpiredToken</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The provided token has expired.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> IllegalVersioningConfigurationException </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Indicates that the versioning configuration specified in
	 *               the request is invalid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> IncompleteBody</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> You did not provide the number of bytes specified by the
	 *               Content-Length HTTP header</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> IncorrectNumberOfFilesInPostRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> POST requires exactly one file upload per request.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InlineDataTooLarge</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Inline data exceeds the maximum allowed size.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InternalError</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> We encountered an internal error. Please try again.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 500 Internal Server Error</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Server</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidAccessKeyId</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The Amazon Web Services access key ID you provided does not exist in our
	 *               records.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidAddressingHeader</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> You must specify the Anonymous role.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> N/A</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidArgument</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Invalid Argument</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidBucketName</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The specified bucket is not valid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidBucketState</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The request is not valid with the current state of the
	 *               bucket.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 409 Conflict</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidDigest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The Content-MD5 you specified is not valid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidEncryptionAlgorithmError</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The encryption request you specified is not valid. The
	 *               valid value is AES256.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidLocationConstraint</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The specified location constraint is not valid. For more
	 *               information about Regions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">How to Select a Region for Your
	 *                 Buckets</a>. </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidObjectState</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The action is not valid for the current state of the
	 *               object.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidPart</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> One or more of the specified parts could not be found. The
	 *               part might not have been uploaded, or the specified entity tag might not have matched the part's
	 *               entity tag.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidPartOrder</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The list of parts was not in ascending order. Parts list
	 *               must be specified in order by part number.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidPayer</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> All access to this object has been disabled. Please
	 *               contact Amazon Web Services Support for further assistance.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidPolicyDocument</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The content of the form does not meet the conditions
	 *               specified in the policy document.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRange</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The requested range cannot be satisfied.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 416 Requested Range Not Satisfiable</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Please use <code>AWS4-HMAC-SHA256</code>.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> SOAP requests must be made over an HTTPS
	 *               connection.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not supported for buckets
	 *               with non-DNS compliant names.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not supported for buckets
	 *               with periods (.) in their names.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Amazon S3 Transfer Accelerate endpoint only supports virtual
	 *               style requests.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Amazon S3 Transfer Accelerate is not configured on this
	 *               bucket.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Amazon S3 Transfer Accelerate is disabled on this
	 *               bucket.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not supported on this
	 *               bucket. Contact Amazon Web Services Support for more information.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Amazon S3 Transfer Acceleration cannot be enabled on this
	 *               bucket. Contact Amazon Web Services Support for more information.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> N/A</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidSecurity</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The provided security credentials are not valid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidSOAPRequest</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The SOAP request body is invalid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidStorageClass</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The storage class you specified is not valid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidTargetBucketForLogging</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The target bucket for logging does not exist, is not owned
	 *               by you, or does not have the appropriate grants for the log-delivery group. </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidToken</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The provided token is malformed or otherwise
	 *               invalid.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> InvalidURI</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Couldn't parse the specified URI.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> KeyTooLongError</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your key is too long.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MalformedACLError</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The XML you provided was not well-formed or did not
	 *               validate against our published schema.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MalformedPOSTRequest </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The body of your POST request is not well-formed
	 *               multipart/form-data.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MalformedXML</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> This happens when the user sends malformed XML (XML that
	 *               doesn't conform to the published XSD) for the configuration. The error message is, "The XML you
	 *               provided was not well-formed or did not validate against our published schema." </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MaxMessageLengthExceeded</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your request was too big.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MaxPostPreDataLengthExceededError</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your POST request fields preceding the upload file were
	 *               too large.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MetadataTooLarge</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your metadata headers exceed the maximum allowed metadata
	 *               size.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MethodNotAllowed</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The specified method is not allowed against this
	 *               resource.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 405 Method Not Allowed</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MissingAttachment</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> A SOAP attachment was expected, but none were
	 *               found.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> N/A</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MissingContentLength</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> You must provide the Content-Length HTTP header.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 411 Length Required</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MissingRequestBodyError</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> This happens when the user sends an empty XML document as
	 *               a request. The error message is, "Request body is empty." </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MissingSecurityElement</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The SOAP 1.1 request is missing a security element.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> MissingSecurityHeader</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your request is missing a required header.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NoLoggingStatusForKey</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> There is no such thing as a logging status subresource for
	 *               a key.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NoSuchBucket</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The specified bucket does not exist.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 404 Not Found</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NoSuchBucketPolicy</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The specified bucket does not have a bucket policy.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 404 Not Found</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NoSuchKey</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The specified key does not exist.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 404 Not Found</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NoSuchLifecycleConfiguration</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The lifecycle configuration does not exist. </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 404 Not Found</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NoSuchUpload</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The specified multipart upload does not exist. The upload
	 *               ID might be invalid, or the multipart upload might have been aborted or completed.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 404 Not Found</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NoSuchVersion </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Indicates that the version ID specified in the request
	 *               does not match an existing version.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 404 Not Found</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NotImplemented</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> A header you provided implies functionality that is not
	 *               implemented.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 501 Not Implemented</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Server</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> NotSignedUp</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your account is not signed up for the Amazon S3 service. You
	 *               must sign up before you can use Amazon S3. You can sign up at the following URL: <a href="http://aws.amazon.com/s3">Amazon S3</a>
	 *                      </p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> OperationAborted</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> A conflicting conditional action is currently in progress
	 *               against this resource. Try again.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 409 Conflict</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> PermanentRedirect</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The bucket you are attempting to access must be addressed
	 *               using the specified endpoint. Send all future requests to this endpoint.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 301 Moved Permanently</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> PreconditionFailed</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> At least one of the preconditions you specified did not
	 *               hold.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 412 Precondition Failed</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> Redirect</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Temporary redirect.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> RestoreAlreadyInProgress</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Object restore is already in progress.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 409 Conflict</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> RequestIsNotMultiPartContent</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Bucket POST must be of the enclosure-type
	 *               multipart/form-data.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> RequestTimeout</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Your socket connection to the server was not read from or
	 *               written to within the timeout period.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> RequestTimeTooSkewed</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The difference between the request time and the server's
	 *               time is too large.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> RequestTorrentOfBucketError</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Requesting the torrent file of a bucket is not
	 *               permitted.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> SignatureDoesNotMatch</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The request signature we calculated does not match the
	 *               signature you provided. Check your Amazon Web Services secret access key and signing method. For more
	 *               information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/SOAPAuthentication.html">SOAP Authentication</a> for
	 *               details.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> ServiceUnavailable</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Service is unable to handle request.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 503 Service Unavailable</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Server</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> SlowDown</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> Reduce your request rate.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 503 Slow Down</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Server</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> TemporaryRedirect</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> You are being redirected to the bucket while DNS
	 *               updates.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> TokenRefreshRequired</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The provided token must be refreshed.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> TooManyBuckets</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> You have attempted to create more buckets than
	 *               allowed.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> UnexpectedContent</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> This request does not support content.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> UnresolvableGrantByEmailAddress</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The email address you provided does not match any account
	 *               on record.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *             <li>
	 *                <ul>
	 *                   <li>
	 *                      <p>
	 *                         <i>Code:</i> UserKeyMustBeSpecified</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>Description:</i> The bucket POST must contain the specified field name. If
	 *               it is specified, check the order of the fields.</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
	 *                   </li>
	 *                   <li>
	 *                      <p>
	 *                         <i>SOAP Fault Code Prefix:</i> Client</p>
	 *                   </li>
	 *                </ul>
	 *             </li>
	 *          </ul>
	 *          <p></p>
	 * @public
	 */
	Code?: string | undefined;
	/**
	 * <p>The error message contains a generic description of the error condition in English. It is intended
	 *       for a human audience. Simple programs display the message directly to the end user if they encounter an
	 *       error condition they don't know how or don't care to handle. Sophisticated programs with more exhaustive
	 *       error handling and proper internationalization are more likely to ignore the error message.</p>
	 * @public
	 */
	Message?: string | undefined;
}
interface DeleteObjectsOutput {
	/**
	 * <p>Container element for a successful delete. It identifies the object that was successfully
	 *       deleted.</p>
	 * @public
	 */
	Deleted?: DeletedObject[] | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
	/**
	 * <p>Container for a failed delete action that describes the object that Amazon S3 attempted to delete and the
	 *       error it encountered.</p>
	 * @public
	 */
	Errors?: _Error[] | undefined;
}
interface DeleteObjectTaggingOutput {
	/**
	 * <p>The versionId of the object the tag-set was removed from.</p>
	 * @public
	 */
	VersionId?: string | undefined;
}
interface GetBucketAccelerateConfigurationOutput {
	/**
	 * <p>The accelerate configuration of the bucket.</p>
	 * @public
	 */
	Status?: BucketAccelerateStatus | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface GetBucketAclOutput {
	/**
	 * <p>Container for the bucket owner's ID.</p>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>A list of grants.</p>
	 * @public
	 */
	Grants?: Grant[] | undefined;
}
interface AnalyticsAndOperator {
	/**
	 * <p>The prefix to use when evaluating an AND predicate: The prefix that an object must have to be
	 *       included in the metrics results.</p>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>The list of tags to use when evaluating an AND predicate.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
type AnalyticsFilter = AnalyticsFilter.AndMember | AnalyticsFilter.PrefixMember | AnalyticsFilter.TagMember | AnalyticsFilter.$UnknownMember;
declare namespace AnalyticsFilter {
	/**
	 * <p>The prefix to use when evaluating an analytics filter.</p>
	 * @public
	 */
	interface PrefixMember {
		Prefix: string;
		Tag?: never;
		And?: never;
		$unknown?: never;
	}
	/**
	 * <p>The tag to use when evaluating an analytics filter.</p>
	 * @public
	 */
	interface TagMember {
		Prefix?: never;
		Tag: Tag;
		And?: never;
		$unknown?: never;
	}
	/**
	 * <p>A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The
	 *       operator must have at least two predicates.</p>
	 * @public
	 */
	interface AndMember {
		Prefix?: never;
		Tag?: never;
		And: AnalyticsAndOperator;
		$unknown?: never;
	}
	/**
	 * @public
	 */
	interface $UnknownMember {
		Prefix?: never;
		Tag?: never;
		And?: never;
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
		Prefix: (value: string) => T;
		Tag: (value: Tag) => T;
		And: (value: AnalyticsAndOperator) => T;
		_: (name: string, value: any) => T;
	}
}
interface AnalyticsS3BucketDestination {
	/**
	 * <p>Specifies the file format used when exporting data to Amazon S3.</p>
	 * @public
	 */
	Format: AnalyticsS3ExportFileFormat | undefined;
	/**
	 * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not
	 *       validated before exporting data.</p>
	 *          <note>
	 *             <p> Although this value is optional, we strongly recommend that you set it to help prevent problems
	 *         if the destination bucket ownership changes. </p>
	 *          </note>
	 * @public
	 */
	BucketAccountId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the bucket to which data is exported.</p>
	 * @public
	 */
	Bucket: string | undefined;
	/**
	 * <p>The prefix to use when exporting data. The prefix is prepended to all results.</p>
	 * @public
	 */
	Prefix?: string | undefined;
}
interface AnalyticsExportDestination {
	/**
	 * <p>A destination signifying output to an S3 bucket.</p>
	 * @public
	 */
	S3BucketDestination: AnalyticsS3BucketDestination | undefined;
}
interface StorageClassAnalysisDataExport {
	/**
	 * <p>The version of the output schema to use when exporting data. Must be <code>V_1</code>.</p>
	 * @public
	 */
	OutputSchemaVersion: StorageClassAnalysisSchemaVersion | undefined;
	/**
	 * <p>The place to store the data for an analysis.</p>
	 * @public
	 */
	Destination: AnalyticsExportDestination | undefined;
}
interface StorageClassAnalysis {
	/**
	 * <p>Specifies how data related to the storage class analysis for an Amazon S3 bucket should be
	 *       exported.</p>
	 * @public
	 */
	DataExport?: StorageClassAnalysisDataExport | undefined;
}
interface AnalyticsConfiguration {
	/**
	 * <p>The ID that identifies the analytics configuration.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix,
	 *       one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be
	 *       considered in any analysis.</p>
	 * @public
	 */
	Filter?: AnalyticsFilter | undefined;
	/**
	 * <p> Contains data related to access patterns to be collected and made available to analyze the
	 *       tradeoffs between different storage classes. </p>
	 * @public
	 */
	StorageClassAnalysis: StorageClassAnalysis | undefined;
}
interface GetBucketAnalyticsConfigurationOutput {
	/**
	 * <p>The configuration and any analyses for the analytics filter.</p>
	 * @public
	 */
	AnalyticsConfiguration?: AnalyticsConfiguration | undefined;
}
interface CORSRule {
	/**
	 * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
	 * @public
	 */
	ID?: string | undefined;
	/**
	 * <p>Headers that are specified in the <code>Access-Control-Request-Headers</code> header. These headers
	 *       are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns
	 *       any requested headers that are allowed.</p>
	 * @public
	 */
	AllowedHeaders?: string[] | undefined;
	/**
	 * <p>An HTTP method that you allow the origin to execute. Valid values are <code>GET</code>,
	 *         <code>PUT</code>, <code>HEAD</code>, <code>POST</code>, and <code>DELETE</code>.</p>
	 * @public
	 */
	AllowedMethods: string[] | undefined;
	/**
	 * <p>One or more origins you want customers to be able to access the bucket from.</p>
	 * @public
	 */
	AllowedOrigins: string[] | undefined;
	/**
	 * <p>One or more headers in the response that you want customers to be able to access from their
	 *       applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p>
	 * @public
	 */
	ExposeHeaders?: string[] | undefined;
	/**
	 * <p>The time in seconds that your browser is to cache the preflight response for the specified
	 *       resource.</p>
	 * @public
	 */
	MaxAgeSeconds?: number | undefined;
}
interface GetBucketCorsOutput {
	/**
	 * <p>A set of origins and methods (cross-origin access that you want to allow). You can add up to 100
	 *       rules to the configuration.</p>
	 * @public
	 */
	CORSRules?: CORSRule[] | undefined;
}
interface ServerSideEncryptionByDefault {
	/**
	 * <p>Server-side encryption algorithm to use for the default encryption.</p>
	 *          <note>
	 *             <p>For directory buckets, there are only two supported values for server-side encryption: <code>AES256</code> and <code>aws:kms</code>.</p>
	 *          </note>
	 * @public
	 */
	SSEAlgorithm: ServerSideEncryption | undefined;
	/**
	 * <p>Amazon Web Services Key Management Service (KMS) customer managed key ID to use for the default encryption. </p>
	 *          <note>
	 *             <ul>
	 *                <li>
	 *                   <p>
	 *                      <b>General purpose buckets</b> - This parameter is allowed if and
	 *             only if <code>SSEAlgorithm</code> is set to <code>aws:kms</code> or
	 *             <code>aws:kms:dsse</code>.</p>
	 *                </li>
	 *                <li>
	 *                   <p>
	 *                      <b>Directory buckets</b> - This parameter is allowed if and
	 *             only if <code>SSEAlgorithm</code> is set to <code>aws:kms</code>.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 *          <p>You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.</p>
	 *          <ul>
	 *             <li>
	 *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>Key ARN:
	 *             <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>Key Alias: <code>alias/alias-name</code>
	 *                </p>
	 *             </li>
	 *          </ul>
	 *          <p>If you are using encryption with cross-account or Amazon Web Services service operations, you must use a fully
	 *       qualified KMS key ARN. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy">Using
	 *         encryption for cross-account operations</a>.</p>
	 *          <note>
	 *             <ul>
	 *                <li>
	 *                   <p>
	 *                      <b>General purpose buckets</b> - If you're specifying a customer
	 *             managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key
	 *             alias instead, then KMS resolves the key within the requester’s account. This behavior can
	 *             result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket
	 *             owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when
	 *             creating a VPC flow log. </p>
	 *                </li>
	 *                <li>
	 *                   <p>
	 *                      <b>Directory buckets</b> -
	 *             When you specify an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">KMS customer managed key</a> for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 *          <important>
	 *             <p>Amazon S3 only supports symmetric encryption KMS keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in
	 *           Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management Service Developer Guide</i>.</p>
	 *          </important>
	 * @public
	 */
	KMSMasterKeyID?: string | undefined;
}
interface BlockedEncryptionTypes {
	/**
	 * <p>The object encryption type that you want to block or unblock for an Amazon S3 general purpose bucket.</p>
	 *          <note>
	 *             <p>Currently, this parameter only supports blocking or unblocking server side encryption with customer-provided keys (SSE-C). For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">Using server-side encryption with customer-provided keys (SSE-C)</a>.</p>
	 *          </note>
	 * @public
	 */
	EncryptionType?: EncryptionType[] | undefined;
}
interface ServerSideEncryptionRule {
	/**
	 * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object
	 *       request doesn't specify any server-side encryption, this default encryption will be applied.</p>
	 * @public
	 */
	ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault | undefined;
	/**
	 * <p>Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS)
	 *       for new objects in the bucket. Existing objects are not affected. Setting the
	 *         <code>BucketKeyEnabled</code> element to <code>true</code> causes Amazon S3 to use an S3 Bucket Key. </p>
	 *          <note>
	 *             <ul>
	 *                <li>
	 *                   <p>
	 *                      <b>General purpose buckets</b> - By default, S3 Bucket Key is not
	 *             enabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the
	 *               <i>Amazon S3 User Guide</i>.</p>
	 *                </li>
	 *                <li>
	 *                   <p>
	 *                      <b>Directory buckets</b> -
	 *             S3 Bucket Keys are always enabled for <code>GET</code> and <code>PUT</code> operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets
	 * to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops">the Copy operation in Batch Operations</a>, or
	 *                             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job">the import jobs</a>. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p>A bucket-level setting for Amazon S3 general purpose buckets used to prevent the upload of new objects encrypted with the specified server-side encryption type. For example, blocking an encryption type will block <code>PutObject</code>, <code>CopyObject</code>, <code>PostObject</code>, multipart upload, and replication requests to the bucket for objects with the specified encryption type. However, you can continue to read and list any pre-existing objects already encrypted with the specified encryption type. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/blocking-unblocking-s3-c-encryption-gpb.html">Blocking or unblocking SSE-C for a general purpose bucket</a>.</p>
	 *          <note>
	 *             <p>Currently, this parameter only supports blocking or unblocking server-side encryption with customer-provided keys (SSE-C). For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">Using server-side encryption with customer-provided keys (SSE-C)</a>.</p>
	 *          </note>
	 * @public
	 */
	BlockedEncryptionTypes?: BlockedEncryptionTypes | undefined;
}
interface ServerSideEncryptionConfiguration {
	/**
	 * <p>Container for information about a particular server-side encryption configuration rule.</p>
	 * @public
	 */
	Rules: ServerSideEncryptionRule[] | undefined;
}
interface GetBucketEncryptionOutput {
	/**
	 * <p>Specifies the default server-side-encryption configuration.</p>
	 * @public
	 */
	ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
}
interface IntelligentTieringAndOperator {
	/**
	 * <p>An object key name prefix that identifies the subset of objects to which the configuration
	 *       applies.</p>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>All of these tags must exist in the object's tag set in order for the configuration to apply.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface IntelligentTieringFilter {
	/**
	 * <p>An object key name prefix that identifies the subset of objects to which the rule applies.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>A container of a key value name pair.</p>
	 * @public
	 */
	Tag?: Tag | undefined;
	/**
	 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The
	 *       operator must have at least two predicates, and an object must match all of the predicates in order for
	 *       the filter to apply.</p>
	 * @public
	 */
	And?: IntelligentTieringAndOperator | undefined;
}
interface Tiering {
	/**
	 * <p>The number of consecutive days of no access after which an object will be eligible to be
	 *       transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier
	 *       must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to
	 *       2 years (730 days).</p>
	 * @public
	 */
	Days: number | undefined;
	/**
	 * <p>S3 Intelligent-Tiering access tier. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for
	 *         automatically optimizing frequently and infrequently accessed objects</a> for a list of access
	 *       tiers in the S3 Intelligent-Tiering storage class.</p>
	 * @public
	 */
	AccessTier: IntelligentTieringAccessTier | undefined;
}
interface IntelligentTieringConfiguration {
	/**
	 * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>Specifies a bucket filter. The configuration only includes objects that meet the filter's
	 *       criteria.</p>
	 * @public
	 */
	Filter?: IntelligentTieringFilter | undefined;
	/**
	 * <p>Specifies the status of the configuration.</p>
	 * @public
	 */
	Status: IntelligentTieringStatus | undefined;
	/**
	 * <p>Specifies the S3 Intelligent-Tiering storage class tier of the configuration.</p>
	 * @public
	 */
	Tierings: Tiering[] | undefined;
}
interface GetBucketIntelligentTieringConfigurationOutput {
	/**
	 * <p>Container for S3 Intelligent-Tiering configuration.</p>
	 * @public
	 */
	IntelligentTieringConfiguration?: IntelligentTieringConfiguration | undefined;
}
interface SSEKMS {
	/**
	 * <p>Specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key to use for encrypting
	 *       inventory reports.</p>
	 * @public
	 */
	KeyId: string | undefined;
}
interface SSES3 {
}
interface InventoryEncryption {
	/**
	 * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
	 * @public
	 */
	SSES3?: SSES3 | undefined;
	/**
	 * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
	 * @public
	 */
	SSEKMS?: SSEKMS | undefined;
}
interface InventoryS3BucketDestination {
	/**
	 * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not
	 *       validated before exporting data. </p>
	 *          <note>
	 *             <p> Although this value is optional, we strongly recommend that you set it to help prevent problems
	 *         if the destination bucket ownership changes. </p>
	 *          </note>
	 * @public
	 */
	AccountId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the bucket where inventory results will be published.</p>
	 * @public
	 */
	Bucket: string | undefined;
	/**
	 * <p>Specifies the output format of the inventory results.</p>
	 * @public
	 */
	Format: InventoryFormat | undefined;
	/**
	 * <p>The prefix that is prepended to all inventory results.</p>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>Contains the type of server-side encryption used to encrypt the inventory results.</p>
	 * @public
	 */
	Encryption?: InventoryEncryption | undefined;
}
interface InventoryDestination {
	/**
	 * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where
	 *       inventory results are published.</p>
	 * @public
	 */
	S3BucketDestination: InventoryS3BucketDestination | undefined;
}
interface InventoryFilter {
	/**
	 * <p>The prefix that an object must have to be included in the inventory results.</p>
	 * @public
	 */
	Prefix: string | undefined;
}
interface InventorySchedule {
	/**
	 * <p>Specifies how frequently inventory results are produced.</p>
	 * @public
	 */
	Frequency: InventoryFrequency | undefined;
}
interface InventoryConfiguration {
	/**
	 * <p>Contains information about where to publish the inventory results.</p>
	 * @public
	 */
	Destination: InventoryDestination | undefined;
	/**
	 * <p>Specifies whether the inventory is enabled or disabled. If set to <code>True</code>, an inventory
	 *       list is generated. If set to <code>False</code>, no inventory list is generated.</p>
	 * @public
	 */
	IsEnabled: boolean | undefined;
	/**
	 * <p>Specifies an inventory filter. The inventory only includes objects that meet the filter's
	 *       criteria.</p>
	 * @public
	 */
	Filter?: InventoryFilter | undefined;
	/**
	 * <p>The ID used to identify the inventory configuration.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>Object versions to include in the inventory list. If set to <code>All</code>, the list includes all
	 *       the object versions, which adds the version-related fields <code>VersionId</code>,
	 *       <code>IsLatest</code>, and <code>DeleteMarker</code> to the list. If set to <code>Current</code>, the
	 *       list does not contain these version-related fields.</p>
	 * @public
	 */
	IncludedObjectVersions: InventoryIncludedObjectVersions | undefined;
	/**
	 * <p>Contains the optional fields that are included in the inventory results.</p>
	 *          <note>
	 *             <p>The following optional fields are supported for directory buckets <code>Size | LastModifiedDate | StorageClass | ETag | IsMultipartUploaded |
	 *       EncryptionStatus | BucketKeyStatus | ChecksumAlgorithm | LifecycleExpirationDate.</code> Throws MalformedXML error if unsupported optional field is provided. </p>
	 *          </note>
	 * @public
	 */
	OptionalFields?: InventoryOptionalField[] | undefined;
	/**
	 * <p>Specifies the schedule for generating inventory results.</p>
	 * @public
	 */
	Schedule: InventorySchedule | undefined;
}
interface GetBucketInventoryConfigurationOutput {
	/**
	 * <p>Specifies the inventory configuration.</p>
	 * @public
	 */
	InventoryConfiguration?: InventoryConfiguration | undefined;
}
interface LifecycleExpiration {
	/**
	 * <p>Indicates at what date the object is to be moved or deleted. The date value must conform to the ISO
	 *       8601 format. The time is always midnight UTC.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	Date?: Date | undefined;
	/**
	 * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a
	 *       non-zero positive integer.</p>
	 * @public
	 */
	Days?: number | undefined;
	/**
	 * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the
	 *       delete marker will be expired; if set to false the policy takes no action. This cannot be specified with
	 *       Days or Date in a Lifecycle Expiration Policy.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	ExpiredObjectDeleteMarker?: boolean | undefined;
}
interface LifecycleRuleAndOperator {
	/**
	 * <p>Prefix identifying one or more objects to which the rule applies.</p>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>All of these tags must exist in the object's tag set in order for the rule to apply.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
	/**
	 * <p>Minimum object size to which the rule applies.</p>
	 * @public
	 */
	ObjectSizeGreaterThan?: number | undefined;
	/**
	 * <p>Maximum object size to which the rule applies.</p>
	 * @public
	 */
	ObjectSizeLessThan?: number | undefined;
}
interface LifecycleRuleFilter {
	/**
	 * <p>Prefix identifying one or more objects to which the rule applies.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>This tag must exist in the object's tag set in order for the rule to apply.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	Tag?: Tag | undefined;
	/**
	 * <p>Minimum object size to which the rule applies.</p>
	 * @public
	 */
	ObjectSizeGreaterThan?: number | undefined;
	/**
	 * <p>Maximum object size to which the rule applies.</p>
	 * @public
	 */
	ObjectSizeLessThan?: number | undefined;
	/**
	 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The
	 *       Lifecycle Rule will apply to any object matching all of the predicates configured inside the And
	 *       operator.</p>
	 * @public
	 */
	And?: LifecycleRuleAndOperator | undefined;
}
interface NoncurrentVersionExpiration {
	/**
	 * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.
	 *       The value must be a non-zero positive integer. For information about the noncurrent days calculations,
	 *       see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How Amazon S3 Calculates
	 *         When an Object Became Noncurrent</a> in the <i>Amazon S3 User Guide</i>.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	NoncurrentDays?: number | undefined;
	/**
	 * <p>Specifies how many noncurrent versions Amazon S3 will retain. You can specify up to 100 noncurrent
	 *       versions to retain. Amazon S3 will permanently delete any additional noncurrent versions beyond the specified
	 *       number to retain. For more information about noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration elements</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	NewerNoncurrentVersions?: number | undefined;
}
interface NoncurrentVersionTransition {
	/**
	 * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.
	 *       For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How Amazon S3 Calculates
	 *         How Long an Object Has Been Noncurrent</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	NoncurrentDays?: number | undefined;
	/**
	 * <p>The class of storage used to store the object.</p>
	 * @public
	 */
	StorageClass?: TransitionStorageClass | undefined;
	/**
	 * <p>Specifies how many noncurrent versions Amazon S3 will retain in the same storage class before
	 *       transitioning objects. You can specify up to 100 noncurrent versions to retain. Amazon S3 will transition any
	 *       additional noncurrent versions beyond the specified number to retain. For more information about
	 *       noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration elements</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	NewerNoncurrentVersions?: number | undefined;
}
interface Transition {
	/**
	 * <p>Indicates when objects are transitioned to the specified storage class. The date value must be in
	 *       ISO 8601 format. The time is always midnight UTC.</p>
	 * @public
	 */
	Date?: Date | undefined;
	/**
	 * <p>Indicates the number of days after creation when objects are transitioned to the specified storage
	 *       class. The value can be <code>0</code> or any positive integer. Be aware that some storage classes have a
	 *       minimum storage duration and that you're charged for transitioning objects before their minimum storage
	 *       duration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints"> Constraints and considerations for transitions</a> in the <i>Amazon S3 User
	 *         Guide</i>.</p>
	 * @public
	 */
	Days?: number | undefined;
	/**
	 * <p>The storage class to which you want the object to transition.</p>
	 * @public
	 */
	StorageClass?: TransitionStorageClass | undefined;
}
interface LifecycleRule {
	/**
	 * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the
	 *       object has a delete marker.</p>
	 * @public
	 */
	Expiration?: LifecycleExpiration | undefined;
	/**
	 * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
	 * @public
	 */
	ID?: string | undefined;
	/**
	 * <p> The general purpose bucket prefix that identifies one or more objects to which the rule applies. We recommend using <code>Filter</code> instead of <code>Prefix</code> for new PUTs. Previous configurations where a prefix is defined will continue to operate as before.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
	 *         <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>,
	 *         <code>ObjectSizeGreaterThan</code>, <code>ObjectSizeLessThan</code>, or <code>And</code> specified.
	 *         <code>Filter</code> is required if the <code>LifecycleRule</code> does not contain a
	 *         <code>Prefix</code> element.</p>
	 *          <p>For more information about <code>Tag</code> filters, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-filters.html">Adding filters to Lifecycle rules</a>
	 *       in the <i>Amazon S3 User Guide</i>.</p>
	 *          <note>
	 *             <p>
	 *                <code>Tag</code> filters are not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Filter?: LifecycleRuleFilter | undefined;
	/**
	 * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being
	 *       applied.</p>
	 * @public
	 */
	Status: ExpirationStatus | undefined;
	/**
	 * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	Transitions?: Transition[] | undefined;
	/**
	 * <p>Specifies the transition rule for the lifecycle rule that describes when noncurrent objects
	 *       transition to a specific storage class. If your bucket is versioning-enabled (or versioning is
	 *       suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a
	 *       specific storage class at a set period in the object's lifetime.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	NoncurrentVersionTransitions?: NoncurrentVersionTransition[] | undefined;
	/**
	 * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the
	 *       noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning
	 *       enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in
	 *       the object's lifetime.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 * @public
	 */
	NoncurrentVersionExpiration?: NoncurrentVersionExpiration | undefined;
	/**
	 * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before
	 *       permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting
	 *         Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in the
	 *         <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload | undefined;
}
interface GetBucketLifecycleConfigurationOutput {
	/**
	 * <p>Container for a lifecycle rule.</p>
	 * @public
	 */
	Rules?: LifecycleRule[] | undefined;
	/**
	 * <p>Indicates which default minimum object size behavior is applied to the lifecycle
	 *       configuration.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It isn't supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>all_storage_classes_128K</code> - Objects smaller than 128 KB will not transition to
	 *           any storage class by default.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>varies_by_storage_class</code> - Objects smaller than 128 KB will transition to Glacier
	 *           Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes
	 *           will prevent transitions smaller than 128 KB. </p>
	 *             </li>
	 *          </ul>
	 *          <p>To customize the minimum object size for any transition you can add a filter that specifies a custom
	 *         <code>ObjectSizeGreaterThan</code> or <code>ObjectSizeLessThan</code> in the body of your transition
	 *       rule. Custom filters always take precedence over the default transition behavior.</p>
	 * @public
	 */
	TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize | undefined;
}
interface GetBucketLocationOutput {
	/**
	 * <p>Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported location
	 *       constraints by Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a>.</p>
	 *          <p>Buckets in Region <code>us-east-1</code> have a LocationConstraint of <code>null</code>. Buckets
	 *       with a LocationConstraint of <code>EU</code> reside in <code>eu-west-1</code>.</p>
	 * @public
	 */
	LocationConstraint?: BucketLocationConstraint | undefined;
}
interface TargetGrant {
	/**
	 * <p>Container for the person being granted permissions.</p>
	 * @public
	 */
	Grantee?: Grantee | undefined;
	/**
	 * <p>Logging permissions assigned to the grantee for the bucket.</p>
	 * @public
	 */
	Permission?: BucketLogsPermission | undefined;
}
interface PartitionedPrefix {
	/**
	 * <p>Specifies the partition date source for the partitioned prefix. <code>PartitionDateSource</code> can
	 *       be <code>EventTime</code> or <code>DeliveryTime</code>.</p>
	 *          <p>For <code>DeliveryTime</code>, the time in the log file names corresponds to the delivery time for
	 *       the log files. </p>
	 *          <p> For <code>EventTime</code>, The logs delivered are for a specific day only. The year, month, and
	 *       day correspond to the day on which the event occurred, and the hour, minutes and seconds are set to 00
	 *       in the key.</p>
	 * @public
	 */
	PartitionDateSource?: PartitionDateSource | undefined;
}
interface SimplePrefix {
}
interface TargetObjectKeyFormat {
	/**
	 * <p>To use the simple format for S3 keys for log objects. To specify SimplePrefix format, set
	 *       SimplePrefix to \{\}.</p>
	 * @public
	 */
	SimplePrefix?: SimplePrefix | undefined;
	/**
	 * <p>Partitioned S3 key for log objects.</p>
	 * @public
	 */
	PartitionedPrefix?: PartitionedPrefix | undefined;
}
interface LoggingEnabled {
	/**
	 * <p>Specifies the bucket where you want Amazon S3 to store server access logs. You can have your logs
	 *       delivered to any bucket that you own, including the same bucket that is being logged. You can also
	 *       configure multiple buckets to deliver their logs to the same target bucket. In this case, you should
	 *       choose a different <code>TargetPrefix</code> for each source bucket so that the delivered log files can
	 *       be distinguished by key.</p>
	 * @public
	 */
	TargetBucket: string | undefined;
	/**
	 * <p>Container for granting information.</p>
	 *          <p>Buckets that use the bucket owner enforced setting for Object Ownership don't support target grants.
	 *       For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general">Permissions for server access log delivery</a> in the
	 *       <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	TargetGrants?: TargetGrant[] | undefined;
	/**
	 * <p>A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single
	 *       bucket, you can use a prefix to distinguish which log files came from which bucket.</p>
	 * @public
	 */
	TargetPrefix: string | undefined;
	/**
	 * <p>Amazon S3 key format for log objects.</p>
	 * @public
	 */
	TargetObjectKeyFormat?: TargetObjectKeyFormat | undefined;
}
interface GetBucketLoggingOutput {
	/**
	 * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a
	 *       bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
	 *         <i>Amazon S3 API Reference</i>.</p>
	 * @public
	 */
	LoggingEnabled?: LoggingEnabled | undefined;
}
interface MetricsAndOperator {
	/**
	 * <p>The prefix used when evaluating an AND predicate.</p>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>The list of tags used when evaluating an AND predicate.</p>
	 *          <note>
	 *             <p>
	 *                <code>Tag</code> filters are not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Tags?: Tag[] | undefined;
	/**
	 * <p>The access point ARN used when evaluating an <code>AND</code> predicate.</p>
	 * @public
	 */
	AccessPointArn?: string | undefined;
}
type MetricsFilter = MetricsFilter.AccessPointArnMember | MetricsFilter.AndMember | MetricsFilter.PrefixMember | MetricsFilter.TagMember | MetricsFilter.$UnknownMember;
declare namespace MetricsFilter {
	/**
	 * <p>The prefix used when evaluating a metrics filter.</p>
	 * @public
	 */
	interface PrefixMember {
		Prefix: string;
		Tag?: never;
		AccessPointArn?: never;
		And?: never;
		$unknown?: never;
	}
	/**
	 * <p>The tag used when evaluating a metrics filter.</p>
	 *          <note>
	 *             <p>
	 *                <code>Tag</code> filters are not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	interface TagMember {
		Prefix?: never;
		Tag: Tag;
		AccessPointArn?: never;
		And?: never;
		$unknown?: never;
	}
	/**
	 * <p>The access point ARN used when evaluating a metrics filter.</p>
	 * @public
	 */
	interface AccessPointArnMember {
		Prefix?: never;
		Tag?: never;
		AccessPointArn: string;
		And?: never;
		$unknown?: never;
	}
	/**
	 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The
	 *       operator must have at least two predicates, and an object must match all of the predicates in order for
	 *       the filter to apply.</p>
	 * @public
	 */
	interface AndMember {
		Prefix?: never;
		Tag?: never;
		AccessPointArn?: never;
		And: MetricsAndOperator;
		$unknown?: never;
	}
	/**
	 * @public
	 */
	interface $UnknownMember {
		Prefix?: never;
		Tag?: never;
		AccessPointArn?: never;
		And?: never;
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
		Prefix: (value: string) => T;
		Tag: (value: Tag) => T;
		AccessPointArn: (value: string) => T;
		And: (value: MetricsAndOperator) => T;
		_: (name: string, value: any) => T;
	}
}
interface MetricsConfiguration {
	/**
	 * <p>The ID used to identify the metrics configuration. The ID has a 64 character limit and can only
	 *       contain letters, numbers, periods, dashes, and underscores.</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>Specifies a metrics configuration filter. The metrics configuration will only include objects that
	 *       meet the filter's criteria. A filter must be a prefix, an object tag, an access point ARN, or a
	 *       conjunction (MetricsAndOperator).</p>
	 *          <note>
	 *             <p>Metrics configurations for directory buckets do not support tag filters.</p>
	 *          </note>
	 * @public
	 */
	Filter?: MetricsFilter | undefined;
}
interface GetBucketMetricsConfigurationOutput {
	/**
	 * <p>Specifies the metrics configuration.</p>
	 * @public
	 */
	MetricsConfiguration?: MetricsConfiguration | undefined;
}
interface EventBridgeConfiguration {
}
interface FilterRule {
	/**
	 * <p>The object key name prefix or suffix identifying one or more objects to which the filtering rule
	 *       applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported.
	 *       For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Name?: FilterRuleName | undefined;
	/**
	 * <p>The value that the filter searches for in object key names.</p>
	 * @public
	 */
	Value?: string | undefined;
}
interface S3KeyFilter {
	/**
	 * <p>A list of containers for the key-value pair that defines the criteria for the filter rule.</p>
	 * @public
	 */
	FilterRules?: FilterRule[] | undefined;
}
interface NotificationConfigurationFilter {
	/**
	 * <p>A container for object key name prefix and suffix filtering rules.</p>
	 * @public
	 */
	Key?: S3KeyFilter | undefined;
}
interface LambdaFunctionConfiguration {
	/**
	 * <p>An optional unique identifier for configurations in a notification configuration. If you don't
	 *       provide one, Amazon S3 will assign an ID.</p>
	 * @public
	 */
	Id?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the Lambda function that Amazon S3 invokes when the specified event
	 *       type occurs.</p>
	 * @public
	 */
	LambdaFunctionArn: string | undefined;
	/**
	 * <p>The Amazon S3 bucket event for which to invoke the Lambda function. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event Types</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Events: Event$1[] | undefined;
	/**
	 * <p>Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring
	 *         event notifications using object key name filtering</a> in the
	 *         <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Filter?: NotificationConfigurationFilter | undefined;
}
interface QueueConfiguration {
	/**
	 * <p>An optional unique identifier for configurations in a notification configuration. If you don't
	 *       provide one, Amazon S3 will assign an ID.</p>
	 * @public
	 */
	Id?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it
	 *       detects events of the specified type.</p>
	 * @public
	 */
	QueueArn: string | undefined;
	/**
	 * <p>A collection of bucket events for which to send notifications</p>
	 * @public
	 */
	Events: Event$1[] | undefined;
	/**
	 * <p>Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring
	 *         event notifications using object key name filtering</a> in the
	 *         <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Filter?: NotificationConfigurationFilter | undefined;
}
interface TopicConfiguration {
	/**
	 * <p>An optional unique identifier for configurations in a notification configuration. If you don't
	 *       provide one, Amazon S3 will assign an ID.</p>
	 * @public
	 */
	Id?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it
	 *       detects events of the specified type.</p>
	 * @public
	 */
	TopicArn: string | undefined;
	/**
	 * <p>The Amazon S3 bucket event about which to send notifications. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event Types</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Events: Event$1[] | undefined;
	/**
	 * <p>Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring
	 *         event notifications using object key name filtering</a> in the
	 *         <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Filter?: NotificationConfigurationFilter | undefined;
}
interface NotificationConfiguration {
	/**
	 * <p>The topic to which notifications are sent and the events for which notifications are
	 *       generated.</p>
	 * @public
	 */
	TopicConfigurations?: TopicConfiguration[] | undefined;
	/**
	 * <p>The Amazon Simple Queue Service queues to publish messages to and the events for which to publish
	 *       messages.</p>
	 * @public
	 */
	QueueConfigurations?: QueueConfiguration[] | undefined;
	/**
	 * <p>Describes the Lambda functions to invoke and the events for which to invoke them.</p>
	 * @public
	 */
	LambdaFunctionConfigurations?: LambdaFunctionConfiguration[] | undefined;
	/**
	 * <p>Enables delivery of events to Amazon EventBridge.</p>
	 * @public
	 */
	EventBridgeConfiguration?: EventBridgeConfiguration | undefined;
}
interface OwnershipControlsRule {
	/**
	 * <p>The container element for object ownership for a bucket's ownership controls.</p>
	 *          <p>
	 *             <code>BucketOwnerPreferred</code> - Objects uploaded to the bucket change ownership to the bucket
	 *       owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned ACL.</p>
	 *          <p>
	 *             <code>ObjectWriter</code> - The uploading account will own the object if the object is uploaded with
	 *       the <code>bucket-owner-full-control</code> canned ACL.</p>
	 *          <p>
	 *             <code>BucketOwnerEnforced</code> - Access control lists (ACLs) are disabled and no longer affect
	 *       permissions. The bucket owner automatically owns and has full control over every object in the bucket.
	 *       The bucket only accepts PUT requests that don't specify an ACL or specify bucket owner full control ACLs
	 *       (such as the predefined <code>bucket-owner-full-control</code> canned ACL or a custom ACL in XML format
	 *       that grants the same permissions).</p>
	 *          <p>By default, <code>ObjectOwnership</code> is set to <code>BucketOwnerEnforced</code> and ACLs are
	 *       disabled. We recommend keeping ACLs disabled, except in uncommon use cases where you must control access
	 *       for each object individually. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling
	 *         ownership of objects and disabling ACLs for your bucket</a> in the
	 *         <i>Amazon S3 User Guide</i>. </p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets. Directory buckets use the bucket owner enforced setting for S3 Object Ownership.</p>
	 *          </note>
	 * @public
	 */
	ObjectOwnership: ObjectOwnership | undefined;
}
interface OwnershipControls {
	/**
	 * <p>The container element for an ownership control rule.</p>
	 * @public
	 */
	Rules: OwnershipControlsRule[] | undefined;
}
interface GetBucketOwnershipControlsOutput {
	/**
	 * <p>The <code>OwnershipControls</code> (BucketOwnerEnforced, BucketOwnerPreferred, or ObjectWriter)
	 *       currently in effect for this Amazon S3 bucket.</p>
	 * @public
	 */
	OwnershipControls?: OwnershipControls | undefined;
}
interface GetBucketPolicyOutput {
	/**
	 * <p>The bucket policy as a JSON document.</p>
	 * @public
	 */
	Policy?: string | undefined;
}
interface PolicyStatus {
	/**
	 * <p>The policy status for this bucket. <code>TRUE</code> indicates that this bucket is public.
	 *         <code>FALSE</code> indicates that the bucket is not public.</p>
	 * @public
	 */
	IsPublic?: boolean | undefined;
}
interface GetBucketPolicyStatusOutput {
	/**
	 * <p>The policy status for the specified bucket.</p>
	 * @public
	 */
	PolicyStatus?: PolicyStatus | undefined;
}
interface DeleteMarkerReplication {
	/**
	 * <p>Indicates whether to replicate delete markers.</p>
	 *          <note>
	 *             <p>Indicates whether to replicate delete markers.</p>
	 *          </note>
	 * @public
	 */
	Status?: DeleteMarkerReplicationStatus | undefined;
}
interface EncryptionConfiguration {
	/**
	 * <p>Specifies the ID (Key ARN or Alias ARN) of the customer managed Amazon Web Services KMS key stored in Amazon Web Services Key
	 *       Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3
	 *       only supports symmetric encryption KMS keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in Amazon Web Services KMS</a> in the
	 *         <i>Amazon Web Services Key Management Service Developer Guide</i>.</p>
	 * @public
	 */
	ReplicaKmsKeyID?: string | undefined;
}
interface ReplicationTimeValue {
	/**
	 * <p> Contains an integer specifying time in minutes. </p>
	 *          <p> Valid value: 15</p>
	 * @public
	 */
	Minutes?: number | undefined;
}
interface Metrics {
	/**
	 * <p> Specifies whether the replication metrics are enabled. </p>
	 * @public
	 */
	Status: MetricsStatus | undefined;
	/**
	 * <p> A container specifying the time threshold for emitting the
	 *         <code>s3:Replication:OperationMissedThreshold</code> event. </p>
	 * @public
	 */
	EventThreshold?: ReplicationTimeValue | undefined;
}
interface ReplicationTime {
	/**
	 * <p> Specifies whether the replication time is enabled. </p>
	 * @public
	 */
	Status: ReplicationTimeStatus | undefined;
	/**
	 * <p> A container specifying the time by which replication should be complete for all objects and
	 *       operations on objects. </p>
	 * @public
	 */
	Time: ReplicationTimeValue | undefined;
}
interface Destination {
	/**
	 * <p> The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.</p>
	 * @public
	 */
	Bucket: string | undefined;
	/**
	 * <p>Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change
	 *       replica ownership to the Amazon Web Services account that owns the destination bucket by specifying the
	 *         <code>AccessControlTranslation</code> property, this is the account ID of the destination bucket
	 *       owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html">Replication Additional Configuration: Changing
	 *         the Replica Owner</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Account?: string | undefined;
	/**
	 * <p> The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By
	 *       default, Amazon S3 uses the storage class of the source object to create the object replica. </p>
	 *          <p>For valid values, see the <code>StorageClass</code> element of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT Bucket replication</a> action in the
	 *         <i>Amazon S3 API Reference</i>.</p>
	 *          <p>
	 *             <code>FSX_OPENZFS</code> is not an accepted value when replicating objects.</p>
	 * @public
	 */
	StorageClass?: StorageClass | undefined;
	/**
	 * <p>Specify this only in a cross-account scenario (where source and destination bucket owners are not
	 *       the same), and you want to change replica ownership to the Amazon Web Services account that owns the destination
	 *       bucket. If this is not specified in the replication configuration, the replicas are owned by same
	 *       Amazon Web Services account that owns the source object.</p>
	 * @public
	 */
	AccessControlTranslation?: AccessControlTranslation | undefined;
	/**
	 * <p>A container that provides information about encryption. If <code>SourceSelectionCriteria</code> is
	 *       specified, you must specify this element.</p>
	 * @public
	 */
	EncryptionConfiguration?: EncryptionConfiguration | undefined;
	/**
	 * <p> A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all
	 *       objects and operations on objects must be replicated. Must be specified together with a
	 *         <code>Metrics</code> block. </p>
	 * @public
	 */
	ReplicationTime?: ReplicationTime | undefined;
	/**
	 * <p> A container specifying replication metrics-related settings enabling replication metrics and
	 *       events. </p>
	 * @public
	 */
	Metrics?: Metrics | undefined;
}
interface ExistingObjectReplication {
	/**
	 * <p>Specifies whether Amazon S3 replicates existing source bucket objects. </p>
	 * @public
	 */
	Status: ExistingObjectReplicationStatus | undefined;
}
interface ReplicationRuleAndOperator {
	/**
	 * <p>An object key name prefix that identifies the subset of objects to which the rule applies.</p>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>An array of tags containing key and value pairs.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface ReplicationRuleFilter {
	/**
	 * <p>An object key name prefix that identifies the subset of objects to which the rule applies.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>A container for specifying a tag key and value. </p>
	 *          <p>The rule applies only to objects that have the tag in their tag set.</p>
	 * @public
	 */
	Tag?: Tag | undefined;
	/**
	 * <p>A container for specifying rule filters. The filters determine the subset of objects to which the
	 *       rule applies. This element is required only if you specify more than one filter. For example: </p>
	 *          <ul>
	 *             <li>
	 *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in
	 *           an <code>And</code> tag.</p>
	 *             </li>
	 *             <li>
	 *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an
	 *             <code>And</code> tag.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	And?: ReplicationRuleAndOperator | undefined;
}
interface ReplicaModifications {
	/**
	 * <p>Specifies whether Amazon S3 replicates modifications on replicas.</p>
	 * @public
	 */
	Status: ReplicaModificationsStatus | undefined;
}
interface SseKmsEncryptedObjects {
	/**
	 * <p>Specifies whether Amazon S3 replicates objects created with server-side encryption using an Amazon Web Services KMS key
	 *       stored in Amazon Web Services Key Management Service.</p>
	 * @public
	 */
	Status: SseKmsEncryptedObjectsStatus | undefined;
}
interface SourceSelectionCriteria {
	/**
	 * <p> A container for filter information for the selection of Amazon S3 objects encrypted with Amazon Web Services KMS. If
	 *       you include <code>SourceSelectionCriteria</code> in the replication configuration, this element is
	 *       required. </p>
	 * @public
	 */
	SseKmsEncryptedObjects?: SseKmsEncryptedObjects | undefined;
	/**
	 * <p>A filter that you can specify for selections for modifications on replicas. Amazon S3 doesn't replicate
	 *       replica modifications by default. In the latest version of replication configuration (when
	 *         <code>Filter</code> is specified), you can specify this element and set the status to
	 *         <code>Enabled</code> to replicate modifications on replicas. </p>
	 *          <note>
	 *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the replication
	 *         configuration is the earlier version, V1. In the earlier version, this element is not allowed</p>
	 *          </note>
	 * @public
	 */
	ReplicaModifications?: ReplicaModifications | undefined;
}
interface ReplicationRule {
	/**
	 * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
	 * @public
	 */
	ID?: string | undefined;
	/**
	 * <p>The priority indicates which rule has precedence whenever two or more replication rules conflict.
	 *       Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or
	 *       more rules with the same destination bucket, then objects will be replicated according to the rule with
	 *       the highest priority. The higher the number, the higher the priority. </p>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Priority?: number | undefined;
	/**
	 * <p>An object key name prefix that identifies the object or objects to which the rule applies. The
	 *       maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string.
	 *       </p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>A filter that identifies the subset of objects to which the replication rule applies. A
	 *         <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an
	 *         <code>And</code> child element.</p>
	 * @public
	 */
	Filter?: ReplicationRuleFilter | undefined;
	/**
	 * <p>Specifies whether the rule is enabled.</p>
	 * @public
	 */
	Status: ReplicationRuleStatus | undefined;
	/**
	 * <p>A container that describes additional filters for identifying the source objects that you want to
	 *       replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3
	 *       supports only the filter that you can specify for objects created with server-side encryption using a
	 *       customer managed key stored in Amazon Web Services Key Management Service (SSE-KMS).</p>
	 * @public
	 */
	SourceSelectionCriteria?: SourceSelectionCriteria | undefined;
	/**
	 * <p>Optional configuration to replicate existing source bucket objects. </p>
	 *          <note>
	 *             <p>This parameter is no longer supported. To replicate existing objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html">Replicating
	 *           existing objects with S3 Batch Replication</a> in the
	 *         <i>Amazon S3 User Guide</i>.</p>
	 *          </note>
	 * @public
	 */
	ExistingObjectReplication?: ExistingObjectReplication | undefined;
	/**
	 * <p>A container for information about the replication destination and its configurations including
	 *       enabling the S3 Replication Time Control (S3 RTC).</p>
	 * @public
	 */
	Destination: Destination | undefined;
	/**
	 * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code> in your
	 *       replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your
	 *         <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code>
	 *             <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating delete markers
	 *       for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule
	 *         Configuration</a>. </p>
	 *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule Configuration</a>. </p>
	 *          <note>
	 *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles replication of
	 *         delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
	 *          </note>
	 * @public
	 */
	DeleteMarkerReplication?: DeleteMarkerReplication | undefined;
}
interface ReplicationConfiguration {
	/**
	 * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that Amazon S3 assumes when replicating
	 *       objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up Replication</a> in the
	 *         <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	Role: string | undefined;
	/**
	 * <p>A container for one or more replication rules. A replication configuration must have at least one
	 *       rule and can contain a maximum of 1,000 rules. </p>
	 * @public
	 */
	Rules: ReplicationRule[] | undefined;
}
interface GetBucketReplicationOutput {
	/**
	 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication
	 *       configuration is 2 MB.</p>
	 * @public
	 */
	ReplicationConfiguration?: ReplicationConfiguration | undefined;
}
interface GetBucketRequestPaymentOutput {
	/**
	 * <p>Specifies who pays for the download and request fees.</p>
	 * @public
	 */
	Payer?: Payer | undefined;
}
interface GetBucketTaggingOutput {
	/**
	 * <p>Contains the tag set.</p>
	 * @public
	 */
	TagSet: Tag[] | undefined;
}
interface GetBucketVersioningOutput {
	/**
	 * <p>The versioning state of the bucket.</p>
	 * @public
	 */
	Status?: BucketVersioningStatus | undefined;
	/**
	 * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only
	 *       returned if the bucket has been configured with MFA delete. If the bucket has never been so configured,
	 *       this element is not returned.</p>
	 * @public
	 */
	MFADelete?: MFADeleteStatus | undefined;
}
interface ErrorDocument {
	/**
	 * <p>The object key name to use when a 4XX class error occurs.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	Key: string | undefined;
}
interface IndexDocument {
	/**
	 * <p>A suffix that is appended to a request that is for a directory on the website endpoint. (For
	 *       example, if the suffix is <code>index.html</code> and you make a request to
	 *         <code>samplebucket/images/</code>, the data that is returned will be for the object with the key name
	 *         <code>images/index.html</code>.) The suffix must not be empty and must not include a slash
	 *       character.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	Suffix: string | undefined;
}
interface RedirectAllRequestsTo {
	/**
	 * <p>Name of the host where requests are redirected.</p>
	 * @public
	 */
	HostName: string | undefined;
	/**
	 * <p>Protocol to use when redirecting requests. The default is the protocol that is used in the original
	 *       request.</p>
	 * @public
	 */
	Protocol?: Protocol | undefined;
}
interface Condition {
	/**
	 * <p>The HTTP error code when the redirect is applied. In the event of an error, if the error code equals
	 *       this value, then the specified redirect is applied. Required when parent element <code>Condition</code>
	 *       is specified and sibling <code>KeyPrefixEquals</code> is not specified. If both are specified, then both
	 *       must be true for the redirect to be applied.</p>
	 * @public
	 */
	HttpErrorCodeReturnedEquals?: string | undefined;
	/**
	 * <p>The object key name prefix when the redirect is applied. For example, to redirect requests for
	 *         <code>ExamplePage.html</code>, the key prefix will be <code>ExamplePage.html</code>. To redirect
	 *       request for all pages with the prefix <code>docs/</code>, the key prefix will be <code>/docs</code>,
	 *       which identifies all objects in the <code>docs/</code> folder. Required when the parent element
	 *         <code>Condition</code> is specified and sibling <code>HttpErrorCodeReturnedEquals</code> is not
	 *       specified. If both conditions are specified, both must be true for the redirect to be applied.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	KeyPrefixEquals?: string | undefined;
}
interface Redirect {
	/**
	 * <p>The host name to use in the redirect request.</p>
	 * @public
	 */
	HostName?: string | undefined;
	/**
	 * <p>The HTTP redirect code to use on the response. Not required if one of the siblings is
	 *       present.</p>
	 * @public
	 */
	HttpRedirectCode?: string | undefined;
	/**
	 * <p>Protocol to use when redirecting requests. The default is the protocol that is used in the original
	 *       request.</p>
	 * @public
	 */
	Protocol?: Protocol | undefined;
	/**
	 * <p>The object key prefix to use in the redirect request. For example, to redirect requests for all
	 *       pages with prefix <code>docs/</code> (objects in the <code>docs/</code> folder) to
	 *         <code>documents/</code>, you can set a condition block with <code>KeyPrefixEquals</code> set to
	 *         <code>docs/</code> and in the Redirect set <code>ReplaceKeyPrefixWith</code> to
	 *         <code>/documents</code>. Not required if one of the siblings is present. Can be present only if
	 *         <code>ReplaceKeyWith</code> is not provided.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	ReplaceKeyPrefixWith?: string | undefined;
	/**
	 * <p>The specific object key to use in the redirect request. For example, redirect request to
	 *         <code>error.html</code>. Not required if one of the siblings is present. Can be present only if
	 *         <code>ReplaceKeyPrefixWith</code> is not provided.</p>
	 *          <important>
	 *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
	 *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
	 *             XML related object key constraints</a>.</p>
	 *          </important>
	 * @public
	 */
	ReplaceKeyWith?: string | undefined;
}
interface RoutingRule {
	/**
	 * <p>A container for describing a condition that must be met for the specified redirect to apply. For
	 *       example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the
	 *         <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another
	 *       host where you might process the error.</p>
	 * @public
	 */
	Condition?: Condition | undefined;
	/**
	 * <p>Container for redirect information. You can redirect requests to another host, to another page, or
	 *       with another protocol. In the event of an error, you can specify a different error code to
	 *       return.</p>
	 * @public
	 */
	Redirect: Redirect | undefined;
}
interface GetBucketWebsiteOutput {
	/**
	 * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.</p>
	 * @public
	 */
	RedirectAllRequestsTo?: RedirectAllRequestsTo | undefined;
	/**
	 * <p>The name of the index document for the website (for example <code>index.html</code>).</p>
	 * @public
	 */
	IndexDocument?: IndexDocument | undefined;
	/**
	 * <p>The object key name of the website error document to use for 4XX class errors.</p>
	 * @public
	 */
	ErrorDocument?: ErrorDocument | undefined;
	/**
	 * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
	 * @public
	 */
	RoutingRules?: RoutingRule[] | undefined;
}
interface GetObjectOutput {
	/**
	 * <p>Object data.</p>
	 * @public
	 */
	Body?: StreamingBlobTypes | undefined;
	/**
	 * <p>Indicates whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this
	 *       response header does not appear in the response.</p>
	 *          <note>
	 *             <ul>
	 *                <li>
	 *                   <p>If the current version of the object is a delete marker, Amazon S3 behaves as if the object was
	 *             deleted and includes <code>x-amz-delete-marker: true</code> in the response.</p>
	 *                </li>
	 *                <li>
	 *                   <p>If the specified version in the request is a delete marker, the response returns a <code>405
	 *               Method Not Allowed</code> error and the <code>Last-Modified: timestamp</code> response
	 *             header.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 * @public
	 */
	DeleteMarker?: boolean | undefined;
	/**
	 * <p>Indicates that a range of bytes was specified in the request.</p>
	 * @public
	 */
	AcceptRanges?: string | undefined;
	/**
	 * <p>If the object expiration is configured (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">
	 *                <code>PutBucketLifecycleConfiguration</code>
	 *             </a>), the response includes this header. It
	 *       includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs providing object
	 *       expiration information. The value of the <code>rule-id</code> is URL-encoded.</p>
	 *          <note>
	 *             <p>Object expiration information is not returned in directory buckets and this header returns the
	 *         value "<code>NotImplemented</code>" in all responses for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Expiration?: string | undefined;
	/**
	 * <p>Provides information about object restoration action and expiration time of the restored object
	 *       copy.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets. Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	Restore?: string | undefined;
	/**
	 * <p>Date and time when the object was last modified.</p>
	 *          <p>
	 *             <b>General purpose buckets </b> - When you specify a
	 *         <code>versionId</code> of the object in your request, if the specified version in the request is a
	 *       delete marker, the response returns a <code>405 Method Not Allowed</code> error and the
	 *         <code>Last-Modified: timestamp</code> response header.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>Size of the body in bytes.</p>
	 * @public
	 */
	ContentLength?: number | undefined;
	/**
	 * <p>An entity tag (ETag) is an opaque identifier assigned by a web server to a specific version of a
	 *       resource found at a URL.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
	/**
	 * <p>The checksum type, which determines how part-level checksums are combined to create an object-level
	 *       checksum for multipart objects. You can use this header response to verify that the checksum type that
	 *       is received is the same checksum type that was specified in the <code>CreateMultipartUpload</code>
	 *       request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
	/**
	 * <p>This is set to the number of metadata entries not returned in the headers that are prefixed with
	 *         <code>x-amz-meta-</code>. This can happen if you create metadata using an API like SOAP that supports
	 *       more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values
	 *       are not legal HTTP headers.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	MissingMeta?: number | undefined;
	/**
	 * <p>Version ID of the object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>Specifies caching behavior along the request/reply chain.</p>
	 * @public
	 */
	CacheControl?: string | undefined;
	/**
	 * <p>Specifies presentational information for the object.</p>
	 * @public
	 */
	ContentDisposition?: string | undefined;
	/**
	 * <p>Indicates what content encodings have been applied to the object and thus what decoding mechanisms
	 *       must be applied to obtain the media-type referenced by the Content-Type header field.</p>
	 * @public
	 */
	ContentEncoding?: string | undefined;
	/**
	 * <p>The language the content is in.</p>
	 * @public
	 */
	ContentLanguage?: string | undefined;
	/**
	 * <p>The portion of the object returned in the response.</p>
	 * @public
	 */
	ContentRange?: string | undefined;
	/**
	 * <p>A standard MIME type describing the format of the object data.</p>
	 * @public
	 */
	ContentType?: string | undefined;
	/**
	 * Deprecated in favor of ExpiresString.
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	Expires?: Date | undefined;
	/**
	 * <p>The date and time at which the object is no longer cacheable.</p>
	 * @public
	 */
	ExpiresString?: string | undefined;
	/**
	 * <p>If the bucket is configured as a website, redirects requests for this object to another object in
	 *       the same bucket or to an external URL. Amazon S3 stores the value of this header in the object
	 *       metadata.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	WebsiteRedirectLocation?: string | undefined;
	/**
	 * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
	 *          <note>
	 *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
	 *         encryption option is <code>aws:fsx</code>.</p>
	 *          </note>
	 * @public
	 */
	ServerSideEncryption?: ServerSideEncryption | undefined;
	/**
	 * <p>A map of metadata to store with the object in S3.</p>
	 * @public
	 */
	Metadata?: Record<string, string> | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to confirm the encryption algorithm that's used.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerAlgorithm?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to provide the round-trip message integrity verification of the customer-provided
	 *       encryption key.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerKeyMD5?: string | undefined;
	/**
	 * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
	 * @public
	 */
	SSEKMSKeyId?: string | undefined;
	/**
	 * <p>Indicates whether the object uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS)
	 *       keys (SSE-KMS).</p>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p>Provides storage class information of the object. Amazon S3 returns this header for all objects except
	 *       for S3 Standard storage class objects.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets </b> -
	 *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	StorageClass?: StorageClass | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
	/**
	 * <p>Amazon S3 can return this if your request involves a bucket that is either a source or destination in a
	 *       replication rule.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ReplicationStatus?: ReplicationStatus | undefined;
	/**
	 * <p>The count of parts this object has. This value is only returned if you specify
	 *         <code>partNumber</code> in your request and the object was uploaded as a multipart upload.</p>
	 * @public
	 */
	PartsCount?: number | undefined;
	/**
	 * <p>The number of tags, if any, on the object, when you have the relevant permission to read object
	 *       tags.</p>
	 *          <p>You can use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> to retrieve the tag set associated with an object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	TagCount?: number | undefined;
	/**
	 * <p>The Object Lock mode that's currently in place for this object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockMode?: ObjectLockMode | undefined;
	/**
	 * <p>The date and time when this object's Object Lock will expire.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockRetainUntilDate?: Date | undefined;
	/**
	 * <p>Indicates whether this object has an active legal hold. This field is only returned if you have
	 *       permission to view an object's legal hold status. </p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;
	/**
	 * <p>The event hold status for this object. This header is only returned if the requester has the
	 *       <code>s3:GetObjectRetention</code> permission.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockEventHold?: ObjectLockEventHold | undefined;
	/**
	 * <p>The event hold duration in days for this object. Only returned when the event hold is
	 *       enabled.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockEventHoldDurationDays?: number | undefined;
	/**
	 * <p>The event hold duration in years for this object. Only returned when the event hold is
	 *       enabled.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockEventHoldDurationYears?: number | undefined;
}
interface GetObjectAclOutput {
	/**
	 * <p> Container for the bucket owner's ID.</p>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>A list of grants.</p>
	 * @public
	 */
	Grants?: Grant[] | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface Checksum {
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32 checksum</code> of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the object. This checksum is present
	 *       if the object was uploaded with the <code>CRC64NVME</code> checksum algorithm, or if the object was
	 *       uploaded without a checksum (and Amazon S3 added the default checksum, <code>CRC64NVME</code>, to the
	 *       uploaded object). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the object. This checksum is present
	 *       if the object was uploaded with the <code>SHA512</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the object. This checksum is present
	 *       if the object was uploaded with the <code>MD5</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the object. This checksum is present
	 *       if the object was uploaded with the <code>XXHASH64</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the object. This checksum is present
	 *       if the object was uploaded with the <code>XXHASH3</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the object. This checksum is present
	 *       if the object was uploaded with the <code>XXHASH128</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
	/**
	 * <p>The checksum type that is used to calculate the object’s checksum value. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
}
interface ObjectPart {
	/**
	 * <p>The part number identifying the part. This value is a positive integer between 1 and 10,000.</p>
	 * @public
	 */
	PartNumber?: number | undefined;
	/**
	 * <p>The size of the uploaded part in bytes.</p>
	 * @public
	 */
	Size?: number | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32</code> checksum of the part. This checksum is present if the
	 *       multipart upload request was created with the <code>CRC32</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the part. This checksum is present if the
	 *       multipart upload request was created with the <code>CRC32C</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>CRC64NVME</code> checksum algorithm, or if the
	 *       object was uploaded without a checksum (and Amazon S3 added the default checksum, <code>CRC64NVME</code>, to
	 *       the uploaded object). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> checksum of the part. This checksum is present if the
	 *       multipart upload request was created with the <code>SHA1</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>SHA256</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>SHA512</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>MD5</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>XXHASH64</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>XXHASH3</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>XXHASH128</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
}
interface GetObjectAttributesParts {
	/**
	 * <p>The total number of parts.</p>
	 * @public
	 */
	TotalPartsCount?: number | undefined;
	/**
	 * <p>The marker for the current part.</p>
	 * @public
	 */
	PartNumberMarker?: string | undefined;
	/**
	 * <p>When a list is truncated, this element specifies the last part in the list, as well as the value to
	 *       use for the <code>PartNumberMarker</code> request parameter in a subsequent request.</p>
	 * @public
	 */
	NextPartNumberMarker?: string | undefined;
	/**
	 * <p>The maximum number of parts allowed in the response.</p>
	 * @public
	 */
	MaxParts?: number | undefined;
	/**
	 * <p>Indicates whether the returned list of parts is truncated. A value of <code>true</code> indicates
	 *       that the list was truncated. A list can be truncated if the number of parts exceeds the limit returned
	 *       in the <code>MaxParts</code> element.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>A container for elements related to a particular part. A response can contain zero or more
	 *         <code>Parts</code> elements.</p>
	 *          <note>
	 *             <ul>
	 *                <li>
	 *                   <p>
	 *                      <b>General purpose buckets</b> - For
	 *               <code>GetObjectAttributes</code>, if an additional checksum (including
	 *               <code>x-amz-checksum-crc32</code>, <code>x-amz-checksum-crc32c</code>,
	 *               <code>x-amz-checksum-sha1</code>, or <code>x-amz-checksum-sha256</code>) isn't applied to the
	 *             object specified in the request, the response doesn't return the <code>Part</code> element.</p>
	 *                </li>
	 *                <li>
	 *                   <p>
	 *                      <b>Directory buckets</b> - For
	 *               <code>GetObjectAttributes</code>, regardless of whether an additional checksum is applied to the
	 *             object specified in the request, the response returns the <code>Part</code> element.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 * @public
	 */
	Parts?: ObjectPart[] | undefined;
}
interface GetObjectAttributesOutput {
	/**
	 * <p>Specifies whether the object retrieved was (<code>true</code>) or was not (<code>false</code>) a
	 *       delete marker. If <code>false</code>, this response header does not appear in the response. To learn
	 *       more about delete markers, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html">Working with delete markers</a>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	DeleteMarker?: boolean | undefined;
	/**
	 * <p>Date and time when the object was last modified.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>The version ID of the object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
	/**
	 * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a resource found
	 *       at a URL.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The checksum or digest of the object.</p>
	 * @public
	 */
	Checksum?: Checksum | undefined;
	/**
	 * <p>A collection of parts associated with a multipart upload.</p>
	 * @public
	 */
	ObjectParts?: GetObjectAttributesParts | undefined;
	/**
	 * <p>Provides the storage class information of the object. Amazon S3 returns this header for all objects
	 *       except for S3 Standard storage class objects.</p>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> -
	 *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	StorageClass?: StorageClass | undefined;
	/**
	 * <p>The size of the object in bytes.</p>
	 * @public
	 */
	ObjectSize?: number | undefined;
}
interface ObjectLockLegalHold {
	/**
	 * <p>Indicates whether the specified object has a legal hold in place.</p>
	 * @public
	 */
	Status?: ObjectLockLegalHoldStatus | undefined;
}
interface GetObjectLegalHoldOutput {
	/**
	 * <p>The current legal hold status for the specified object.</p>
	 * @public
	 */
	LegalHold?: ObjectLockLegalHold | undefined;
}
interface EventHoldDuration {
	/**
	 * <p>The number of days for the event hold duration. The minimum value is 1 and the maximum value is
	 *       36,500.</p>
	 * @public
	 */
	Days?: number | undefined;
	/**
	 * <p>The number of years for the event hold duration. The minimum value is 1 and the maximum value is
	 *       100.</p>
	 * @public
	 */
	Years?: number | undefined;
}
interface DefaultRetention {
	/**
	 * <p>The default Object Lock retention mode you want to apply to new objects placed in the specified
	 *       bucket. Must be used with either <code>Days</code> or <code>Years</code>.</p>
	 * @public
	 */
	Mode?: ObjectLockRetentionMode | undefined;
	/**
	 * <p>The number of days that you want to specify for the default retention period. Must be used with
	 *         <code>Mode</code>.</p>
	 * @public
	 */
	Days?: number | undefined;
	/**
	 * <p>The number of years that you want to specify for the default retention period. Must be used with
	 *         <code>Mode</code>.</p>
	 * @public
	 */
	Years?: number | undefined;
	/**
	 * <p>The default event hold duration to be applied to new objects placed in the specified bucket. When
	 *       configured, new objects will automatically have an event hold enabled with this duration.</p>
	 * @public
	 */
	DefaultEventHold?: EventHoldDuration | undefined;
}
interface ObjectLockRule {
	/**
	 * <p>The default Object Lock retention settings for new objects in this bucket. You can
	 *       specify:</p>
	 *          <ul>
	 *             <li>
	 *                <p>A default retention period, by using <code>Days</code> or <code>Years</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>A default event hold duration, by using <code>DefaultEventHold</code>. This setting also
	 *           uses days or years.</p>
	 *             </li>
	 *          </ul>
	 *          <p>You can set one or both. You cannot use days and years in the same setting.</p>
	 * @public
	 */
	DefaultRetention?: DefaultRetention | undefined;
}
interface ObjectLockConfiguration {
	/**
	 * <p>Indicates whether this bucket has an Object Lock configuration enabled. Enable
	 *         <code>ObjectLockEnabled</code> when you apply <code>ObjectLockConfiguration</code> to a bucket.
	 *     </p>
	 * @public
	 */
	ObjectLockEnabled?: ObjectLockEnabled | undefined;
	/**
	 * <p>Specifies the Object Lock rule for the specified object. Enable the this rule when you apply
	 *         <code>ObjectLockConfiguration</code> to a bucket. Bucket settings require both a mode and a period.
	 *       The period can be either <code>Days</code> or <code>Years</code> but you must select one. You cannot
	 *       specify <code>Days</code> and <code>Years</code> at the same time.</p>
	 * @public
	 */
	Rule?: ObjectLockRule | undefined;
}
interface GetObjectLockConfigurationOutput {
	/**
	 * <p>The specified bucket's Object Lock configuration.</p>
	 * @public
	 */
	ObjectLockConfiguration?: ObjectLockConfiguration | undefined;
}
interface ObjectLockRetention {
	/**
	 * <p>Indicates the Retention mode for the specified object.</p>
	 * @public
	 */
	Mode?: ObjectLockRetentionMode | undefined;
	/**
	 * <p>The date on which this Object Lock Retention will expire.</p>
	 * @public
	 */
	RetainUntilDate?: Date | undefined;
	/**
	 * <p>The event hold status for the object. Set to <code>ON</code> to enable an event hold or
	 *       <code>OFF</code> to disable it.</p>
	 * @public
	 */
	EventHold?: ObjectLockEventHold | undefined;
	/**
	 * <p>The event hold duration for the object. Specifies how long the object remains protected after the
	 *       event hold is released.</p>
	 * @public
	 */
	EventHoldDuration?: EventHoldDuration | undefined;
}
interface GetObjectRetentionOutput {
	/**
	 * <p>The container element for an object's retention settings.</p>
	 * @public
	 */
	Retention?: ObjectLockRetention | undefined;
}
interface GetObjectTaggingOutput {
	/**
	 * <p>The versionId of the object for which you got the tagging information.</p>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>Contains the tag set.</p>
	 * @public
	 */
	TagSet: Tag[] | undefined;
}
interface GetObjectTorrentOutput {
	/**
	 * <p>A Bencoded dictionary as defined by the BitTorrent specification</p>
	 * @public
	 */
	Body?: StreamingBlobTypes | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface PublicAccessBlockConfiguration {
	/**
	 * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects
	 *       in this bucket. Setting this element to <code>TRUE</code> causes the following behavior:</p>
	 *          <ul>
	 *             <li>
	 *                <p>PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.</p>
	 *             </li>
	 *             <li>
	 *                <p>PUT Object calls fail if the request includes a public ACL.</p>
	 *             </li>
	 *             <li>
	 *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
	 *             </li>
	 *          </ul>
	 *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
	 * @public
	 */
	BlockPublicAcls?: boolean | undefined;
	/**
	 * <p>Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting
	 *       this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on this bucket and objects in
	 *       this bucket.</p>
	 *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new
	 *       public ACLs from being set.</p>
	 * @public
	 */
	IgnorePublicAcls?: boolean | undefined;
	/**
	 * <p>Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to
	 *         <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy
	 *       allows public access. </p>
	 *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
	 * @public
	 */
	BlockPublicPolicy?: boolean | undefined;
	/**
	 * <p>Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element
	 *       to <code>TRUE</code> restricts access to this bucket to only Amazon Web Services service principals and
	 *       authorized users within this account if the bucket has a public policy.</p>
	 *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that public and
	 *       cross-account access within any public bucket policy, including non-public delegation to specific
	 *       accounts, is blocked.</p>
	 * @public
	 */
	RestrictPublicBuckets?: boolean | undefined;
}
interface GetPublicAccessBlockOutput {
	/**
	 * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon S3 bucket.</p>
	 * @public
	 */
	PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;
}
interface HeadBucketOutput {
	/**
	 * <p>The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all
	 *       of Amazon Web Services.</p>
	 *          <note>
	 *             <p>This parameter is only supported for S3 directory buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html">Using tags with
	 *           directory buckets</a>.</p>
	 *          </note>
	 * @public
	 */
	BucketArn?: string | undefined;
	/**
	 * <p>The type of location where the bucket is created.</p>
	 *          <note>
	 *             <p>This functionality is only supported by directory buckets.</p>
	 *          </note>
	 * @public
	 */
	BucketLocationType?: LocationType | undefined;
	/**
	 * <p>The name of the location where the bucket will be created.</p>
	 *          <p>For directory buckets, the Zone ID of the Availability Zone or the Local Zone where the bucket is created. An example
	 *       Zone ID value for an Availability Zone is <code>usw2-az1</code>.</p>
	 *          <note>
	 *             <p>This functionality is only supported by directory buckets.</p>
	 *          </note>
	 * @public
	 */
	BucketLocationName?: string | undefined;
	/**
	 * <p>The Region that the bucket is located.</p>
	 * @public
	 */
	BucketRegion?: string | undefined;
	/**
	 * <p>Indicates whether the bucket name used in the request is an access point alias.</p>
	 *          <note>
	 *             <p>For directory buckets, the value of this field is <code>false</code>.</p>
	 *          </note>
	 * @public
	 */
	AccessPointAlias?: boolean | undefined;
}
interface HeadObjectOutput {
	/**
	 * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this
	 *       response header does not appear in the response.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	DeleteMarker?: boolean | undefined;
	/**
	 * <p>Indicates that a range of bytes was specified.</p>
	 * @public
	 */
	AcceptRanges?: string | undefined;
	/**
	 * <p>If the object expiration is configured (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">
	 *                <code>PutBucketLifecycleConfiguration</code>
	 *             </a>), the response includes this header. It
	 *       includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs providing object
	 *       expiration information. The value of the <code>rule-id</code> is URL-encoded.</p>
	 *          <note>
	 *             <p>Object expiration information is not returned in directory buckets and this header returns the
	 *         value "<code>NotImplemented</code>" in all responses for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Expiration?: string | undefined;
	/**
	 * <p>If the object is an archived object (an object whose storage class is GLACIER), the response
	 *       includes this header if either the archive restoration is in progress (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a> or an archive copy is already
	 *       restored.</p>
	 *          <p> If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete
	 *       the object copy. For example:</p>
	 *          <p>
	 *             <code>x-amz-restore: ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00
	 *       GMT"</code>
	 *          </p>
	 *          <p>If the object restoration is in progress, the header returns the value
	 *         <code>ongoing-request="true"</code>.</p>
	 *          <p>For more information about archiving objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-transition-general-considerations">Transitioning Objects: General Considerations</a>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets. Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	Restore?: string | undefined;
	/**
	 * <p>The archive state of the head object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ArchiveStatus?: ArchiveStatus | undefined;
	/**
	 * <p>Date and time when the object was last modified.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>Size of the body in bytes.</p>
	 * @public
	 */
	ContentLength?: number | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32 checksum</code> of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the object. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
	/**
	 * <p>The checksum type, which determines how part-level checksums are combined to create an object-level
	 *       checksum for multipart objects. You can use this header response to verify that the checksum type that
	 *       is received is the same checksum type that was specified in <code>CreateMultipartUpload</code> request.
	 *       For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
	/**
	 * <p>An entity tag (ETag) is an opaque identifier assigned by a web server to a specific version of a
	 *       resource found at a URL.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code> headers. This
	 *       can happen if you create metadata using an API like SOAP that supports more flexible metadata than the
	 *       REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP
	 *       headers.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	MissingMeta?: number | undefined;
	/**
	 * <p>Version ID of the object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>Specifies caching behavior along the request/reply chain.</p>
	 * @public
	 */
	CacheControl?: string | undefined;
	/**
	 * <p>Specifies presentational information for the object.</p>
	 * @public
	 */
	ContentDisposition?: string | undefined;
	/**
	 * <p>Indicates what content encodings have been applied to the object and thus what decoding mechanisms
	 *       must be applied to obtain the media-type referenced by the Content-Type header field.</p>
	 * @public
	 */
	ContentEncoding?: string | undefined;
	/**
	 * <p>The language the content is in.</p>
	 * @public
	 */
	ContentLanguage?: string | undefined;
	/**
	 * <p>A standard MIME type describing the format of the object data.</p>
	 * @public
	 */
	ContentType?: string | undefined;
	/**
	 * <p>The portion of the object returned in the response for a <code>GET</code> request.</p>
	 * @public
	 */
	ContentRange?: string | undefined;
	/**
	 * Deprecated in favor of ExpiresString.
	 *
	 * @deprecated deprecated.
	 * @public
	 */
	Expires?: Date | undefined;
	/**
	 * <p>The date and time at which the object is no longer cacheable.</p>
	 * @public
	 */
	ExpiresString?: string | undefined;
	/**
	 * <p>If the bucket is configured as a website, redirects requests for this object to another object in
	 *       the same bucket or to an external URL. Amazon S3 stores the value of this header in the object
	 *       metadata.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	WebsiteRedirectLocation?: string | undefined;
	/**
	 * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
	 *          <note>
	 *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
	 *         encryption option is <code>aws:fsx</code>.</p>
	 *          </note>
	 * @public
	 */
	ServerSideEncryption?: ServerSideEncryption | undefined;
	/**
	 * <p>A map of metadata to store with the object in S3.</p>
	 * @public
	 */
	Metadata?: Record<string, string> | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to confirm the encryption algorithm that's used.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerAlgorithm?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to provide the round-trip message integrity verification of the customer-provided
	 *       encryption key.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerKeyMD5?: string | undefined;
	/**
	 * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
	 * @public
	 */
	SSEKMSKeyId?: string | undefined;
	/**
	 * <p>Indicates whether the object uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS)
	 *       keys (SSE-KMS).</p>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p>Provides storage class information of the object. Amazon S3 returns this header for all objects except
	 *       for S3 Standard storage class objects.</p>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets </b> -
	 *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	StorageClass?: StorageClass | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
	/**
	 * <p>Amazon S3 can return this header if your request involves a bucket that is either a source or a
	 *       destination in a replication rule.</p>
	 *          <p>In replication, you have a source bucket on which you configure replication and destination bucket
	 *       or buckets where Amazon S3 stores object replicas. When you request an object (<code>GetObject</code>) or
	 *       object metadata (<code>HeadObject</code>) from these buckets, Amazon S3 will return the
	 *         <code>x-amz-replication-status</code> header in the response as follows:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <b>If requesting an object from the source bucket</b>, Amazon S3 will
	 *           return the <code>x-amz-replication-status</code> header if the object in your request is eligible
	 *           for replication.</p>
	 *                <p> For example, suppose that in your replication configuration, you specify object prefix
	 *             <code>TaxDocs</code> requesting Amazon S3 to replicate objects with key prefix <code>TaxDocs</code>.
	 *           Any objects you upload with this key name prefix, for example <code>TaxDocs/document1.pdf</code>,
	 *           are eligible for replication. For any object request with this key name prefix, Amazon S3 will return the
	 *             <code>x-amz-replication-status</code> header with value PENDING, COMPLETED or FAILED indicating
	 *           object replication status.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <b>If requesting an object from a destination bucket</b>, Amazon S3 will
	 *           return the <code>x-amz-replication-status</code> header with value REPLICA if the object in your
	 *           request is a replica that Amazon S3 created and there is no replica modification replication in
	 *           progress.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <b>When replicating objects to multiple destination buckets</b>, the
	 *             <code>x-amz-replication-status</code> header acts differently. The header of the source object
	 *           will only return a value of COMPLETED when replication is successful to all destinations. The header
	 *           will remain at value PENDING until replication has completed for all destinations. If one or more
	 *           destinations fails replication the header will return FAILED. </p>
	 *             </li>
	 *          </ul>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Replication</a>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ReplicationStatus?: ReplicationStatus | undefined;
	/**
	 * <p>The count of parts this object has. This value is only returned if you specify
	 *         <code>partNumber</code> in your request and the object was uploaded as a multipart upload.</p>
	 * @public
	 */
	PartsCount?: number | undefined;
	/**
	 * <p>The number of tags, if any, on the object, when you have the relevant permission to read object
	 *       tags.</p>
	 *          <p>You can use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> to retrieve the tag set associated with an object.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	TagCount?: number | undefined;
	/**
	 * <p>The Object Lock mode, if any, that's in effect for this object. This header is only returned if the
	 *       requester has the <code>s3:GetObjectRetention</code> permission. For more information about S3 Object
	 *       Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>. </p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockMode?: ObjectLockMode | undefined;
	/**
	 * <p>The date and time when the Object Lock retention period expires. This header is only returned if the
	 *       requester has the <code>s3:GetObjectRetention</code> permission.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockRetainUntilDate?: Date | undefined;
	/**
	 * <p>Specifies whether a legal hold is in effect for this object. This header is only returned if the
	 *       requester has the <code>s3:GetObjectLegalHold</code> permission. This header is not returned if the
	 *       specified version of this object has never had a legal hold applied. For more information about S3
	 *       Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object
	 *         Lock</a>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;
	/**
	 * <p>The event hold status for this object. This header is only returned if the requester has the
	 *       <code>s3:GetObjectRetention</code> permission.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockEventHold?: ObjectLockEventHold | undefined;
	/**
	 * <p>The event hold duration in days for this object. Only returned when the event hold is
	 *       enabled.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockEventHoldDurationDays?: number | undefined;
	/**
	 * <p>The event hold duration in years for this object. Only returned when the event hold is
	 *       enabled.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ObjectLockEventHoldDurationYears?: number | undefined;
}
interface ListBucketAnalyticsConfigurationsOutput {
	/**
	 * <p>Indicates whether the returned list of analytics configurations is complete. A value of true
	 *       indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent
	 *       request.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>The marker that is used as a starting point for this analytics configuration list response. This
	 *       value is present if it was sent in the request.</p>
	 * @public
	 */
	ContinuationToken?: string | undefined;
	/**
	 * <p>
	 *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which indicates
	 *       that there are more analytics configurations to list. The next request must include this
	 *         <code>NextContinuationToken</code>. The token is obfuscated and is not a usable value.</p>
	 * @public
	 */
	NextContinuationToken?: string | undefined;
	/**
	 * <p>The list of analytics configurations for a bucket.</p>
	 * @public
	 */
	AnalyticsConfigurationList?: AnalyticsConfiguration[] | undefined;
}
interface ListBucketIntelligentTieringConfigurationsOutput {
	/**
	 * <p>Indicates whether the returned list of analytics configurations is complete. A value of
	 *         <code>true</code> indicates that the list is not complete and the <code>NextContinuationToken</code>
	 *       will be provided for a subsequent request.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>The <code>ContinuationToken</code> that represents a placeholder from where this request should
	 *       begin.</p>
	 * @public
	 */
	ContinuationToken?: string | undefined;
	/**
	 * <p>The marker used to continue this inventory configuration listing. Use the
	 *         <code>NextContinuationToken</code> from this response to continue the listing in a subsequent request.
	 *       The continuation token is an opaque value that Amazon S3 understands.</p>
	 * @public
	 */
	NextContinuationToken?: string | undefined;
	/**
	 * <p>The list of S3 Intelligent-Tiering configurations for a bucket.</p>
	 * @public
	 */
	IntelligentTieringConfigurationList?: IntelligentTieringConfiguration[] | undefined;
}
interface ListBucketInventoryConfigurationsOutput {
	/**
	 * <p>If sent in the request, the marker that is used as a starting point for this inventory configuration
	 *       list response.</p>
	 * @public
	 */
	ContinuationToken?: string | undefined;
	/**
	 * <p>The list of inventory configurations for a bucket.</p>
	 * @public
	 */
	InventoryConfigurationList?: InventoryConfiguration[] | undefined;
	/**
	 * <p>Tells whether the returned list of inventory configurations is complete. A value of true indicates
	 *       that the list is not complete and the NextContinuationToken is provided for a subsequent request.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>The marker used to continue this inventory configuration listing. Use the
	 *         <code>NextContinuationToken</code> from this response to continue the listing in a subsequent request.
	 *       The continuation token is an opaque value that Amazon S3 understands.</p>
	 * @public
	 */
	NextContinuationToken?: string | undefined;
}
interface ListBucketMetricsConfigurationsOutput {
	/**
	 * <p>Indicates whether the returned list of metrics configurations is complete. A value of true indicates
	 *       that the list is not complete and the NextContinuationToken will be provided for a subsequent
	 *       request.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>The marker that is used as a starting point for this metrics configuration list response. This value
	 *       is present if it was sent in the request.</p>
	 * @public
	 */
	ContinuationToken?: string | undefined;
	/**
	 * <p>The marker used to continue a metrics configuration listing that has been truncated. Use the
	 *         <code>NextContinuationToken</code> from a previously truncated list response to continue the listing.
	 *       The continuation token is an opaque value that Amazon S3 understands.</p>
	 * @public
	 */
	NextContinuationToken?: string | undefined;
	/**
	 * <p>The list of metrics configurations for a bucket.</p>
	 * @public
	 */
	MetricsConfigurationList?: MetricsConfiguration[] | undefined;
}
interface Bucket {
	/**
	 * <p>The name of the bucket.</p>
	 * @public
	 */
	Name?: string | undefined;
	/**
	 * <p>Date the bucket was created. This date can change when making changes to your bucket, such as
	 *       editing its bucket policy.</p>
	 * @public
	 */
	CreationDate?: Date | undefined;
	/**
	 * <p>
	 *             <code>BucketRegion</code> indicates the Amazon Web Services region where the bucket is located. If the request
	 *       contains at least one valid parameter, it is included in the response.</p>
	 * @public
	 */
	BucketRegion?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all
	 *       of Amazon Web Services.</p>
	 *          <note>
	 *             <p>This parameter is only supported for S3 directory buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html">Using tags with
	 *           directory buckets</a>.</p>
	 *          </note>
	 * @public
	 */
	BucketArn?: string | undefined;
}
interface ListBucketsOutput {
	/**
	 * <p>The list of buckets owned by the requester.</p>
	 * @public
	 */
	Buckets?: Bucket[] | undefined;
	/**
	 * <p>The owner of the buckets listed.</p>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>
	 *             <code>ContinuationToken</code> is included in the response when there are more buckets that can be
	 *       listed with pagination. The next <code>ListBuckets</code> request to Amazon S3 can be continued with this
	 *         <code>ContinuationToken</code>. <code>ContinuationToken</code> is obfuscated and is not a real
	 *       bucket.</p>
	 * @public
	 */
	ContinuationToken?: string | undefined;
	/**
	 * <p>If <code>Prefix</code> was sent with the request, it is included in the response.</p>
	 *          <p>All bucket names in the response begin with the specified bucket name prefix.</p>
	 * @public
	 */
	Prefix?: string | undefined;
}
interface CommonPrefix {
	/**
	 * <p>Container for the specified common prefix.</p>
	 * @public
	 */
	Prefix?: string | undefined;
}
interface Initiator {
	/**
	 * <p>If the principal is an Amazon Web Services account, it provides the Canonical User ID. If the principal is an
	 *       IAM User, it provides a user ARN value.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - If the principal is an Amazon Web Services account,
	 *         it provides the Amazon Web Services account ID. If the principal is an IAM User, it provides a user ARN
	 *         value.</p>
	 *          </note>
	 * @public
	 */
	ID?: string | undefined;
	/**
	 * <p></p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	DisplayName?: string | undefined;
}
interface MultipartUpload {
	/**
	 * <p>Upload ID that identifies the multipart upload.</p>
	 * @public
	 */
	UploadId?: string | undefined;
	/**
	 * <p>Key of the object for which the multipart upload was initiated.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>Date and time at which the multipart upload was initiated.</p>
	 * @public
	 */
	Initiated?: Date | undefined;
	/**
	 * <p>The class of storage used to store the object.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> -
	 *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	StorageClass?: StorageClass | undefined;
	/**
	 * <p>Specifies the owner of the object that is part of the multipart upload. </p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - The bucket owner is returned as the
	 *         object owner for all the objects.</p>
	 *          </note>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>Identifies who initiated the multipart upload.</p>
	 * @public
	 */
	Initiator?: Initiator | undefined;
	/**
	 * <p>The algorithm that was used to create a checksum of the object.</p>
	 * @public
	 */
	ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
	/**
	 * <p>The checksum type that is used to calculate the object’s checksum value. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
}
interface ListMultipartUploadsOutput {
	/**
	 * <p>The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or
	 *       access point alias if used.</p>
	 * @public
	 */
	Bucket?: string | undefined;
	/**
	 * <p>The key at or after which the listing began.</p>
	 * @public
	 */
	KeyMarker?: string | undefined;
	/**
	 * <p>Together with key-marker, specifies the multipart upload after which listing should begin. If
	 *       key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads
	 *       for a key equal to the key-marker might be included in the list only if they have an upload ID
	 *       lexicographically greater than the specified <code>upload-id-marker</code>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	UploadIdMarker?: string | undefined;
	/**
	 * <p>When a list is truncated, this element specifies the value that should be used for the key-marker
	 *       request parameter in a subsequent request.</p>
	 * @public
	 */
	NextKeyMarker?: string | undefined;
	/**
	 * <p>When a prefix is provided in the request, this field contains the specified prefix. The result
	 *       contains only keys starting with the specified prefix.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - For directory buckets, only prefixes that end in a delimiter (<code>/</code>) are supported.</p>
	 *          </note>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>Contains the delimiter you specified in the request. If you don't specify a delimiter in your
	 *       request, this element is absent from the response.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - For directory buckets, <code>/</code> is the only supported delimiter.</p>
	 *          </note>
	 * @public
	 */
	Delimiter?: string | undefined;
	/**
	 * <p>When a list is truncated, this element specifies the value that should be used for the
	 *         <code>upload-id-marker</code> request parameter in a subsequent request.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	NextUploadIdMarker?: string | undefined;
	/**
	 * <p>Maximum number of multipart uploads that could have been included in the response.</p>
	 * @public
	 */
	MaxUploads?: number | undefined;
	/**
	 * <p>Indicates whether the returned list of multipart uploads is truncated. A value of true indicates
	 *       that the list was truncated. The list can be truncated if the number of multipart uploads exceeds the
	 *       limit allowed or specified by max uploads.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>Container for elements related to a particular multipart upload. A response can contain zero or more
	 *         <code>Upload</code> elements.</p>
	 * @public
	 */
	Uploads?: MultipartUpload[] | undefined;
	/**
	 * <p>If you specify a delimiter in the request, then the result returns each distinct key prefix
	 *       containing the delimiter in a <code>CommonPrefixes</code> element. The distinct key prefixes are
	 *       returned in the <code>Prefix</code> child element.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - For directory buckets, only prefixes that end in a delimiter (<code>/</code>) are supported.</p>
	 *          </note>
	 * @public
	 */
	CommonPrefixes?: CommonPrefix[] | undefined;
	/**
	 * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
	 *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this element in the
	 *       response, and returns encoded key name values in the following response elements:</p>
	 *          <p>
	 *             <code>Delimiter</code>, <code>KeyMarker</code>, <code>Prefix</code>, <code>NextKeyMarker</code>,
	 *         <code>Key</code>.</p>
	 * @public
	 */
	EncodingType?: EncodingType | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface RestoreStatus {
	/**
	 * <p>Specifies whether the object is currently being restored. If the object restoration is in progress,
	 *       the header returns the value <code>TRUE</code>. For example:</p>
	 *          <p>
	 *             <code>x-amz-optional-object-attributes: IsRestoreInProgress="true"</code>
	 *          </p>
	 *          <p>If the object restoration has completed, the header returns the value <code>FALSE</code>. For
	 *       example:</p>
	 *          <p>
	 *             <code>x-amz-optional-object-attributes: IsRestoreInProgress="false",
	 *         RestoreExpiryDate="2012-12-21T00:00:00.000Z"</code>
	 *          </p>
	 *          <p>If the object hasn't been restored, there is no header response.</p>
	 * @public
	 */
	IsRestoreInProgress?: boolean | undefined;
	/**
	 * <p>Indicates when the restored copy will expire. This value is populated only if the object has already
	 *       been restored. For example:</p>
	 *          <p>
	 *             <code>x-amz-optional-object-attributes: IsRestoreInProgress="false",
	 *         RestoreExpiryDate="2012-12-21T00:00:00.000Z"</code>
	 *          </p>
	 * @public
	 */
	RestoreExpiryDate?: Date | undefined;
}
interface _Object {
	/**
	 * <p>The name that you assign to an object. You use the object key to retrieve the object.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>Creation date of the object.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object,
	 *       not its metadata. The ETag may or may not be an MD5 digest of the object data. Whether or not it is
	 *       depends on how the object was created and how it is encrypted as described below:</p>
	 *          <ul>
	 *             <li>
	 *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services
	 *           Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are an MD5 digest of
	 *           their object data.</p>
	 *             </li>
	 *             <li>
	 *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services
	 *           Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are not an MD5 digest of
	 *           their object data.</p>
	 *             </li>
	 *             <li>
	 *                <p>If an object is created by either the Multipart Upload or Part Copy operation, the ETag is not
	 *           an MD5 digest, regardless of the method of encryption. If an object is larger than 16 MB, the Amazon Web Services
	 *           Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag
	 *           will not be an MD5 digest.</p>
	 *             </li>
	 *          </ul>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - MD5 is not supported by directory buckets.</p>
	 *          </note>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The algorithm that was used to create a checksum of the object.</p>
	 * @public
	 */
	ChecksumAlgorithm?: ChecksumAlgorithm[] | undefined;
	/**
	 * <p>The checksum type that is used to calculate the object’s checksum value. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
	/**
	 * <p>Size in bytes of the object</p>
	 * @public
	 */
	Size?: number | undefined;
	/**
	 * <p>The class of storage used to store the object.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> -
	 *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	StorageClass?: ObjectStorageClass | undefined;
	/**
	 * <p>The owner of the object</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - The bucket owner is returned as the
	 *         object owner.</p>
	 *          </note>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>Specifies the restoration status of an object. Objects in certain storage classes must be restored
	 *       before they can be retrieved. For more information about these storage classes and how to work with
	 *       archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html">
	 *         Working with archived objects</a> in the <i>Amazon S3 User Guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets. Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	RestoreStatus?: RestoreStatus | undefined;
}
interface ListObjectsV2Output {
	/**
	 * <p>Set to <code>false</code> if all of the results were returned. Set to <code>true</code> if more keys
	 *       are available to return. If the number of results exceeds that specified by <code>MaxKeys</code>, all of
	 *       the results might not be returned.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>Metadata about each object returned.</p>
	 * @public
	 */
	Contents?: _Object[] | undefined;
	/**
	 * <p>The bucket name.</p>
	 * @public
	 */
	Name?: string | undefined;
	/**
	 * <p>Keys that begin with the indicated prefix.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - For directory buckets, only prefixes that end in a delimiter (<code>/</code>) are supported.</p>
	 *          </note>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>Causes keys that contain the same string between the <code>prefix</code> and the first occurrence of
	 *       the delimiter to be rolled up into a single result element in the <code>CommonPrefixes</code>
	 *       collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result
	 *       counts as only one return against the <code>MaxKeys</code> value.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - For directory buckets, <code>/</code> is the only supported delimiter.</p>
	 *          </note>
	 * @public
	 */
	Delimiter?: string | undefined;
	/**
	 * <p>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000
	 *       key names. The response might contain fewer keys but will never contain more.</p>
	 * @public
	 */
	MaxKeys?: number | undefined;
	/**
	 * <p>All of the keys (up to 1,000) that share the same prefix are grouped together. When counting the
	 *       total numbers of returns by this API operation, this group of keys is considered as one item.</p>
	 *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a delimiter.</p>
	 *          <p>
	 *             <code>CommonPrefixes</code> contains all (if there are any) keys between <code>Prefix</code> and the
	 *       next occurrence of the string specified by a delimiter.</p>
	 *          <p>
	 *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory specified by
	 *         <code>Prefix</code>.</p>
	 *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash (<code>/</code>) as
	 *       in <code>notes/summer/july</code>, the common prefix is <code>notes/summer/</code>. All of the keys that
	 *       roll up into a common prefix count as a single return when calculating the number of returns. </p>
	 *          <note>
	 *             <ul>
	 *                <li>
	 *                   <p>
	 *                      <b>Directory buckets</b> - For directory buckets, only prefixes that end in a delimiter (<code>/</code>) are supported.</p>
	 *                </li>
	 *                <li>
	 *                   <p>
	 *                      <b>Directory buckets </b> - When you query
	 *               <code>ListObjectsV2</code> with a delimiter during in-progress multipart uploads, the
	 *               <code>CommonPrefixes</code> response parameter contains the prefixes that are associated with
	 *             the in-progress multipart uploads. For more information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart Upload
	 *               Overview</a> in the <i>Amazon S3 User Guide</i>.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 * @public
	 */
	CommonPrefixes?: CommonPrefix[] | undefined;
	/**
	 * <p>Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
	 *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this element in the
	 *       response, and returns encoded key name values in the following response elements:</p>
	 *          <p>
	 *             <code>Delimiter, Prefix, Key,</code> and <code>StartAfter</code>.</p>
	 * @public
	 */
	EncodingType?: EncodingType | undefined;
	/**
	 * <p>
	 *             <code>KeyCount</code> is the number of keys returned with this request. <code>KeyCount</code> will
	 *       always be less than or equal to the <code>MaxKeys</code> field. For example, if you ask for 50 keys,
	 *       your result will include 50 keys or fewer.</p>
	 * @public
	 */
	KeyCount?: number | undefined;
	/**
	 * <p> If <code>ContinuationToken</code> was sent with the request, it is included in the response. You
	 *       can use the returned <code>ContinuationToken</code> for pagination of the list response.</p>
	 * @public
	 */
	ContinuationToken?: string | undefined;
	/**
	 * <p>
	 *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which means there
	 *       are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with
	 *       this <code>NextContinuationToken</code>. <code>NextContinuationToken</code> is obfuscated and is not a
	 *       real key</p>
	 * @public
	 */
	NextContinuationToken?: string | undefined;
	/**
	 * <p>If StartAfter was sent with the request, it is included in the response.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	StartAfter?: string | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface DeleteMarkerEntry {
	/**
	 * <p>The account that created the delete marker. </p>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>The object key.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>Version ID of an object.</p>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>Specifies whether the object is (true) or is not (false) the latest version of an object. </p>
	 * @public
	 */
	IsLatest?: boolean | undefined;
	/**
	 * <p>Date and time when the object was last modified.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
}
interface ObjectVersion {
	/**
	 * <p>The entity tag is an MD5 hash of that version of the object.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The algorithm that was used to create a checksum of the object.</p>
	 * @public
	 */
	ChecksumAlgorithm?: ChecksumAlgorithm[] | undefined;
	/**
	 * <p>The checksum type that is used to calculate the object’s checksum value. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
	/**
	 * <p>Size in bytes of the object.</p>
	 * @public
	 */
	Size?: number | undefined;
	/**
	 * <p>The class of storage used to store the object.</p>
	 * @public
	 */
	StorageClass?: ObjectVersionStorageClass | undefined;
	/**
	 * <p>The object key.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>Version ID of an object.</p>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>Specifies whether the object is (true) or is not (false) the latest version of an object.</p>
	 * @public
	 */
	IsLatest?: boolean | undefined;
	/**
	 * <p>Date and time when the object was last modified.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>Specifies the owner of the object.</p>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>Specifies the restoration status of an object. Objects in certain storage classes must be restored
	 *       before they can be retrieved. For more information about these storage classes and how to work with
	 *       archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html">
	 *         Working with archived objects</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	RestoreStatus?: RestoreStatus | undefined;
}
interface ListObjectVersionsOutput {
	/**
	 * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria.
	 *       If your results were truncated, you can make a follow-up paginated request by using the
	 *         <code>NextKeyMarker</code> and <code>NextVersionIdMarker</code> response parameters as a starting
	 *       place in another request to return the rest of the results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>Marks the last key returned in a truncated response.</p>
	 * @public
	 */
	KeyMarker?: string | undefined;
	/**
	 * <p>Marks the last version of the key returned in a truncated response.</p>
	 * @public
	 */
	VersionIdMarker?: string | undefined;
	/**
	 * <p>When the number of responses exceeds the value of <code>MaxKeys</code>, <code>NextKeyMarker</code>
	 *       specifies the first key not returned that satisfies the search criteria. Use this value for the
	 *       key-marker request parameter in a subsequent request.</p>
	 * @public
	 */
	NextKeyMarker?: string | undefined;
	/**
	 * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
	 *         <code>NextVersionIdMarker</code> specifies the first object version not returned that satisfies the
	 *       search criteria. Use this value for the <code>version-id-marker</code> request parameter in a subsequent
	 *       request.</p>
	 * @public
	 */
	NextVersionIdMarker?: string | undefined;
	/**
	 * <p>Container for version information.</p>
	 * @public
	 */
	Versions?: ObjectVersion[] | undefined;
	/**
	 * <p>Container for an object that is a delete marker. To learn more about delete markers, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html">Working with delete
	 *         markers</a>.</p>
	 * @public
	 */
	DeleteMarkers?: DeleteMarkerEntry[] | undefined;
	/**
	 * <p>The bucket name.</p>
	 * @public
	 */
	Name?: string | undefined;
	/**
	 * <p>Selects objects that start with the value supplied by this parameter.</p>
	 * @public
	 */
	Prefix?: string | undefined;
	/**
	 * <p>The delimiter grouping the included keys. A delimiter is a character that you specify to group keys.
	 *       All keys that contain the same string between the prefix and the first occurrence of the delimiter are
	 *       grouped under a single result element in <code>CommonPrefixes</code>. These groups are counted as one
	 *       result against the <code>max-keys</code> limitation. These keys are not returned elsewhere in the
	 *       response.</p>
	 * @public
	 */
	Delimiter?: string | undefined;
	/**
	 * <p>Specifies the maximum number of objects to return.</p>
	 * @public
	 */
	MaxKeys?: number | undefined;
	/**
	 * <p>All of the keys rolled up into a common prefix count as a single return when calculating the number
	 *       of returns.</p>
	 * @public
	 */
	CommonPrefixes?: CommonPrefix[] | undefined;
	/**
	 * <p> Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
	 *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this element in the
	 *       response, and returns encoded key name values in the following response elements:</p>
	 *          <p>
	 *             <code>KeyMarker, NextKeyMarker, Prefix, Key</code>, and <code>Delimiter</code>.</p>
	 * @public
	 */
	EncodingType?: EncodingType | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface Part {
	/**
	 * <p>Part number identifying the part. This is a positive integer between 1 and 10,000.</p>
	 * @public
	 */
	PartNumber?: number | undefined;
	/**
	 * <p>Date and time at which the part was uploaded.</p>
	 * @public
	 */
	LastModified?: Date | undefined;
	/**
	 * <p>Entity tag returned when the part was uploaded.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>Size in bytes of the uploaded part data.</p>
	 * @public
	 */
	Size?: number | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32</code> checksum of the part. This checksum is present if the
	 *       object was uploaded with the <code>CRC32</code> checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
	 *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the part. This checksum is present if the
	 *       object was uploaded with the <code>CRC32C</code> checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
	 *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>CRC64NVME</code> checksum algorithm, or if the
	 *       object was uploaded without a checksum (and Amazon S3 added the default checksum, <code>CRC64NVME</code>, to
	 *       the uploaded object). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> checksum of the part. This checksum is present if the
	 *       object was uploaded with the <code>SHA1</code> checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
	 *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> checksum of the part. This checksum is present if
	 *       the object was uploaded with the <code>SHA256</code> checksum algorithm. For more information, see
	 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>SHA512</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>MD5</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>XXHASH64</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>XXHASH3</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the part. This checksum is present if
	 *       the multipart upload request was created with the <code>XXHASH128</code> checksum algorithm. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
}
interface ListPartsOutput {
	/**
	 * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads
	 *       and the prefix in the lifecycle rule matches the object name in the request, then the response includes
	 *       this header indicating when the initiated multipart upload will become eligible for abort operation. For
	 *       more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting
	 *         Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a>.</p>
	 *          <p>The response will also include the <code>x-amz-abort-rule-id</code> header that will provide the ID
	 *       of the lifecycle configuration rule that defines this action.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	AbortDate?: Date | undefined;
	/**
	 * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It identifies
	 *       applicable lifecycle configuration rule that defines the action to abort incomplete multipart
	 *       uploads.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	AbortRuleId?: string | undefined;
	/**
	 * <p>The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or
	 *       access point alias if used.</p>
	 * @public
	 */
	Bucket?: string | undefined;
	/**
	 * <p>Object key for which the multipart upload was initiated.</p>
	 * @public
	 */
	Key?: string | undefined;
	/**
	 * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
	 * @public
	 */
	UploadId?: string | undefined;
	/**
	 * <p>Specifies the part after which listing should begin. Only parts with higher part numbers will be
	 *       listed.</p>
	 * @public
	 */
	PartNumberMarker?: string | undefined;
	/**
	 * <p>When a list is truncated, this element specifies the last part in the list, as well as the value to
	 *       use for the <code>part-number-marker</code> request parameter in a subsequent request.</p>
	 * @public
	 */
	NextPartNumberMarker?: string | undefined;
	/**
	 * <p>Maximum number of parts that were allowed in the response.</p>
	 * @public
	 */
	MaxParts?: number | undefined;
	/**
	 * <p> Indicates whether the returned list of parts is truncated. A true value indicates that the list was
	 *       truncated. A list can be truncated if the number of parts exceeds the limit returned in the MaxParts
	 *       element.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>Container for elements related to a particular part. A response can contain zero or more
	 *         <code>Part</code> elements.</p>
	 * @public
	 */
	Parts?: Part[] | undefined;
	/**
	 * <p>Container element that identifies who initiated the multipart upload. If the initiator is an
	 *       Amazon Web Services account, this element provides the same information as the <code>Owner</code> element. If the
	 *       initiator is an IAM User, this element provides the user ARN.</p>
	 * @public
	 */
	Initiator?: Initiator | undefined;
	/**
	 * <p>Container element that identifies the object owner, after the object is created. If multipart upload
	 *       is initiated by an IAM user, this element provides the parent account ID.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> - The bucket owner is returned as the
	 *         object owner for all the parts.</p>
	 *          </note>
	 * @public
	 */
	Owner?: Owner | undefined;
	/**
	 * <p>The class of storage used to store the uploaded object.</p>
	 *          <note>
	 *             <p>
	 *                <b>Directory buckets</b> -
	 *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
	 *          </note>
	 * @public
	 */
	StorageClass?: StorageClass | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
	/**
	 * <p>The algorithm that was used to create a checksum of the object.</p>
	 * @public
	 */
	ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
	/**
	 * <p>The checksum type, which determines how part-level checksums are combined to create an object-level
	 *       checksum for multipart objects. You can use this header response to verify that the checksum type that
	 *       is received is the same checksum type that was specified in <code>CreateMultipartUpload</code> request.
	 *       For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
	 *         User Guide</a>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
}
interface PutBucketLifecycleConfigurationOutput {
	/**
	 * <p>Indicates which default minimum object size behavior is applied to the lifecycle
	 *       configuration.</p>
	 *          <note>
	 *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
	 *         lifecycle configurations.</p>
	 *          </note>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>all_storage_classes_128K</code> - Objects smaller than 128 KB will not transition to
	 *           any storage class by default. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>varies_by_storage_class</code> - Objects smaller than 128 KB will transition to Glacier
	 *           Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes
	 *           will prevent transitions smaller than 128 KB. </p>
	 *             </li>
	 *          </ul>
	 *          <p>To customize the minimum object size for any transition you can add a filter that specifies a custom
	 *         <code>ObjectSizeGreaterThan</code> or <code>ObjectSizeLessThan</code> in the body of your transition
	 *       rule. Custom filters always take precedence over the default transition behavior.</p>
	 * @public
	 */
	TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize | undefined;
}
interface PutObjectOutput {
	/**
	 * <p>If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>) in the <i>Amazon S3 User Guide</i>, the response
	 *       includes this header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs
	 *       that provide information about object expiration. The value of the <code>rule-id</code> is
	 *       URL-encoded.</p>
	 *          <note>
	 *             <p>Object expiration information is not returned in directory buckets and this header returns the
	 *         value "<code>NotImplemented</code>" in all responses for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Expiration?: string | undefined;
	/**
	 * <p>Entity tag for the uploaded object.</p>
	 *          <p>
	 *             <b>General purpose buckets </b> - To ensure that data is not corrupted
	 *       traversing the network, for objects where the ETag is the MD5 digest of the object, you can calculate
	 *       the MD5 while putting an object to Amazon S3 and compare the returned ETag to the calculated MD5
	 *       value.</p>
	 *          <p>
	 *             <b>Directory buckets </b> - The ETag for the object in a
	 *       directory bucket isn't the MD5 digest of the object.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32 checksum</code> of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the object. This header is present if
	 *       the object was uploaded with the <code>CRC64NVME</code> checksum algorithm, or if it was uploaded
	 *       without a checksum (and Amazon S3 added the default checksum, <code>CRC64NVME</code>, to the uploaded
	 *       object). For more information about how checksums are calculated with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
	 *         integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This checksum is only present if the checksum was uploaded
	 *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
	 *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
	 *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> digest of the object. This header is present if
	 *       the object was uploaded with the <code>SHA512</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> digest of the object. This header is present if
	 *       the object was uploaded with the <code>MD5</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the object. This header is present if
	 *       the object was uploaded with the <code>XXHASH64</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the object. This header is present if
	 *       the object was uploaded with the <code>XXHASH3</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the object. This header is present if
	 *       the object was uploaded with the <code>XXHASH128</code> checksum algorithm. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *         object integrity in the Amazon S3 User Guide</a>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
	/**
	 * <p>This header specifies the checksum type of the object, which determines how part-level checksums are
	 *       combined to create an object-level checksum for multipart objects. For <code>PutObject</code> uploads,
	 *       the checksum type is always <code>FULL_OBJECT</code>. You can use this header as a data integrity check
	 *       to verify that the checksum type that is received is the same checksum that was specified. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
	 *       the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumType?: ChecksumType | undefined;
	/**
	 * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
	 *          <note>
	 *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
	 *         encryption option is <code>aws:fsx</code>.</p>
	 *          </note>
	 * @public
	 */
	ServerSideEncryption?: ServerSideEncryption | undefined;
	/**
	 * <p>Version ID of the object.</p>
	 *          <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID for the
	 *       object being stored. Amazon S3 returns this ID in the response. When you enable versioning for a bucket, if
	 *       Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects.
	 *       For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to
	 *         Versioning-Enabled Buckets</a> in the <i>Amazon S3 User Guide</i>. For information about
	 *       returning the versioning state of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to confirm the encryption algorithm that's used.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerAlgorithm?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to provide the round-trip message integrity verification of the customer-provided
	 *       encryption key.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerKeyMD5?: string | undefined;
	/**
	 * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
	 * @public
	 */
	SSEKMSKeyId?: string | undefined;
	/**
	 * <p>If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
	 *          this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.
	 *          This value is stored as object metadata and automatically gets
	 *          passed on to Amazon Web Services KMS for future <code>GetObject</code>
	 *          operations on this object.</p>
	 * @public
	 */
	SSEKMSEncryptionContext?: string | undefined;
	/**
	 * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption with
	 *       Key Management Service (KMS) keys (SSE-KMS).</p>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p> The size of the object in bytes. This value is only be present if you append to an object. </p>
	 *          <note>
	 *             <p>This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in
	 *         directory buckets.</p>
	 *          </note>
	 * @public
	 */
	Size?: number | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface PutObjectLegalHoldOutput {
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface PutObjectLockConfigurationOutput {
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface PutObjectRetentionOutput {
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
interface PutObjectTaggingOutput {
	/**
	 * <p>The versionId of the object the tag-set was added to.</p>
	 * @public
	 */
	VersionId?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link AbortMultipartUploadCommand}.
 */
export interface AbortMultipartUploadCommandOutput extends AbortMultipartUploadOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CompleteMultipartUploadCommand}.
 */
export interface CompleteMultipartUploadCommandOutput extends CompleteMultipartUploadOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CopyObjectCommand}.
 */
export interface CopyObjectCommandOutput extends CopyObjectOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateBucketCommand}.
 */
export interface CreateBucketCommandOutput extends CreateBucketOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateMultipartUploadCommand}.
 */
export interface CreateMultipartUploadCommandOutput extends CreateMultipartUploadOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketAnalyticsConfigurationCommand}.
 */
export interface DeleteBucketAnalyticsConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketCommand}.
 */
export interface DeleteBucketCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketCorsCommand}.
 */
export interface DeleteBucketCorsCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketEncryptionCommand}.
 */
export interface DeleteBucketEncryptionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketIntelligentTieringConfigurationCommand}.
 */
export interface DeleteBucketIntelligentTieringConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketInventoryConfigurationCommand}.
 */
export interface DeleteBucketInventoryConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketLifecycleCommand}.
 */
export interface DeleteBucketLifecycleCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketMetricsConfigurationCommand}.
 */
export interface DeleteBucketMetricsConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketOwnershipControlsCommand}.
 */
export interface DeleteBucketOwnershipControlsCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketPolicyCommand}.
 */
export interface DeleteBucketPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketReplicationCommand}.
 */
export interface DeleteBucketReplicationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketTaggingCommand}.
 */
export interface DeleteBucketTaggingCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketWebsiteCommand}.
 */
export interface DeleteBucketWebsiteCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteObjectCommand}.
 */
export interface DeleteObjectCommandOutput extends DeleteObjectOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteObjectsCommand}.
 */
export interface DeleteObjectsCommandOutput extends DeleteObjectsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteObjectTaggingCommand}.
 */
export interface DeleteObjectTaggingCommandOutput extends DeleteObjectTaggingOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeletePublicAccessBlockCommand}.
 */
export interface DeletePublicAccessBlockCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketAccelerateConfigurationCommand}.
 */
export interface GetBucketAccelerateConfigurationCommandOutput extends GetBucketAccelerateConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketAclCommand}.
 */
export interface GetBucketAclCommandOutput extends GetBucketAclOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketAnalyticsConfigurationCommand}.
 */
export interface GetBucketAnalyticsConfigurationCommandOutput extends GetBucketAnalyticsConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketCorsCommand}.
 */
export interface GetBucketCorsCommandOutput extends GetBucketCorsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketEncryptionCommand}.
 */
export interface GetBucketEncryptionCommandOutput extends GetBucketEncryptionOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketIntelligentTieringConfigurationCommand}.
 */
export interface GetBucketIntelligentTieringConfigurationCommandOutput extends GetBucketIntelligentTieringConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandOutput extends GetBucketInventoryConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketLifecycleConfigurationCommand}.
 */
export interface GetBucketLifecycleConfigurationCommandOutput extends GetBucketLifecycleConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandOutput extends GetBucketLocationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketLoggingCommand}.
 */
export interface GetBucketLoggingCommandOutput extends GetBucketLoggingOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketMetricsConfigurationCommand}.
 */
export interface GetBucketMetricsConfigurationCommandOutput extends GetBucketMetricsConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketNotificationConfigurationCommand}.
 */
export interface GetBucketNotificationConfigurationCommandOutput extends NotificationConfiguration, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandOutput extends GetBucketOwnershipControlsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketPolicyCommand}.
 */
export interface GetBucketPolicyCommandOutput extends GetBucketPolicyOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketPolicyStatusCommand}.
 */
export interface GetBucketPolicyStatusCommandOutput extends GetBucketPolicyStatusOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketReplicationCommand}.
 */
export interface GetBucketReplicationCommandOutput extends GetBucketReplicationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketRequestPaymentCommand}.
 */
export interface GetBucketRequestPaymentCommandOutput extends GetBucketRequestPaymentOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketTaggingCommand}.
 */
export interface GetBucketTaggingCommandOutput extends GetBucketTaggingOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketVersioningCommand}.
 */
export interface GetBucketVersioningCommandOutput extends GetBucketVersioningOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetBucketWebsiteCommand}.
 */
export interface GetBucketWebsiteCommandOutput extends GetBucketWebsiteOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetObjectAclCommand}.
 */
export interface GetObjectAclCommandOutput extends GetObjectAclOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetObjectAttributesCommand}.
 */
export interface GetObjectAttributesCommandOutput extends GetObjectAttributesOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetObjectCommand}.
 */
export interface GetObjectCommandOutput extends Omit<GetObjectOutput, "Body">, MetadataBearer {
	Body?: StreamingBlobPayloadOutputTypes;
}
/**
 * @public
 *
 * The output of {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandOutput extends GetObjectLegalHoldOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetObjectLockConfigurationCommand}.
 */
export interface GetObjectLockConfigurationCommandOutput extends GetObjectLockConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetObjectRetentionCommand}.
 */
export interface GetObjectRetentionCommandOutput extends GetObjectRetentionOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetObjectTaggingCommand}.
 */
export interface GetObjectTaggingCommandOutput extends GetObjectTaggingOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetObjectTorrentCommand}.
 */
export interface GetObjectTorrentCommandOutput extends Omit<GetObjectTorrentOutput, "Body">, MetadataBearer {
	Body?: StreamingBlobPayloadOutputTypes;
}
/**
 * @public
 *
 * The output of {@link GetPublicAccessBlockCommand}.
 */
export interface GetPublicAccessBlockCommandOutput extends GetPublicAccessBlockOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandOutput extends HeadBucketOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link HeadObjectCommand}.
 */
export interface HeadObjectCommandOutput extends HeadObjectOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListBucketAnalyticsConfigurationsCommand}.
 */
export interface ListBucketAnalyticsConfigurationsCommandOutput extends ListBucketAnalyticsConfigurationsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListBucketIntelligentTieringConfigurationsCommand}.
 */
export interface ListBucketIntelligentTieringConfigurationsCommandOutput extends ListBucketIntelligentTieringConfigurationsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListBucketInventoryConfigurationsCommand}.
 */
export interface ListBucketInventoryConfigurationsCommandOutput extends ListBucketInventoryConfigurationsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListBucketMetricsConfigurationsCommand}.
 */
export interface ListBucketMetricsConfigurationsCommandOutput extends ListBucketMetricsConfigurationsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandOutput extends ListBucketsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListMultipartUploadsCommand}.
 */
export interface ListMultipartUploadsCommandOutput extends ListMultipartUploadsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListObjectsV2Command}.
 */
export interface ListObjectsV2CommandOutput extends ListObjectsV2Output, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListObjectVersionsCommand}.
 */
export interface ListObjectVersionsCommandOutput extends ListObjectVersionsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListPartsCommand}.
 */
export interface ListPartsCommandOutput extends ListPartsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketAccelerateConfigurationCommand}.
 */
export interface PutBucketAccelerateConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketAnalyticsConfigurationCommand}.
 */
export interface PutBucketAnalyticsConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketCorsCommand}.
 */
export interface PutBucketCorsCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketEncryptionCommand}.
 */
export interface PutBucketEncryptionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketIntelligentTieringConfigurationCommand}.
 */
export interface PutBucketIntelligentTieringConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketInventoryConfigurationCommand}.
 */
export interface PutBucketInventoryConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketLifecycleConfigurationCommand}.
 */
export interface PutBucketLifecycleConfigurationCommandOutput extends PutBucketLifecycleConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketMetricsConfigurationCommand}.
 */
export interface PutBucketMetricsConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketNotificationConfigurationCommand}.
 */
export interface PutBucketNotificationConfigurationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketOwnershipControlsCommand}.
 */
export interface PutBucketOwnershipControlsCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketPolicyCommand}.
 */
export interface PutBucketPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketReplicationCommand}.
 */
export interface PutBucketReplicationCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketRequestPaymentCommand}.
 */
export interface PutBucketRequestPaymentCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketTaggingCommand}.
 */
export interface PutBucketTaggingCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketVersioningCommand}.
 */
export interface PutBucketVersioningCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutBucketWebsiteCommand}.
 */
export interface PutBucketWebsiteCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutObjectCommand}.
 */
export interface PutObjectCommandOutput extends PutObjectOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutObjectLegalHoldCommand}.
 */
export interface PutObjectLegalHoldCommandOutput extends PutObjectLegalHoldOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutObjectLockConfigurationCommand}.
 */
export interface PutObjectLockConfigurationCommandOutput extends PutObjectLockConfigurationOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutObjectRetentionCommand}.
 */
export interface PutObjectRetentionCommandOutput extends PutObjectRetentionOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutObjectTaggingCommand}.
 */
export interface PutObjectTaggingCommandOutput extends PutObjectTaggingOutput, MetadataBearer {
}
interface RestoreObjectOutput {
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
	/**
	 * <p>Indicates the path in the provided S3 output location where Select results will be restored
	 *       to.</p>
	 * @public
	 */
	RestoreOutputPath?: string | undefined;
}
interface UploadPartOutput {
	/**
	 * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
	 *          <note>
	 *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
	 *         encryption option is <code>aws:fsx</code>.</p>
	 *          </note>
	 * @public
	 */
	ServerSideEncryption?: ServerSideEncryption | undefined;
	/**
	 * <p>Entity tag for the uploaded object.</p>
	 * @public
	 */
	ETag?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32?: string | undefined;
	/**
	 * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC32C?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumCRC64NVME?: string | undefined;
	/**
	 * <p>The Base64 encoded, 160-bit <code>SHA1</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA1?: string | undefined;
	/**
	 * <p>The Base64 encoded, 256-bit <code>SHA256</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA256?: string | undefined;
	/**
	 * <p>The Base64 encoded, 512-bit <code>SHA512</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumSHA512?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>MD5</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumMD5?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH64</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH64?: string | undefined;
	/**
	 * <p>The Base64 encoded, 64-bit <code>XXHASH3</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH3?: string | undefined;
	/**
	 * <p>The Base64 encoded, 128-bit <code>XXHASH128</code> checksum of the part. This will only be present if
	 *       the checksum was provided in the request. For more information, see
	 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
	 *        object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
	 * @public
	 */
	ChecksumXXHASH128?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to confirm the encryption algorithm that's used.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerAlgorithm?: string | undefined;
	/**
	 * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
	 *       include this header to provide the round-trip message integrity verification of the customer-provided
	 *       encryption key.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	SSECustomerKeyMD5?: string | undefined;
	/**
	 * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
	 * @public
	 */
	SSEKMSKeyId?: string | undefined;
	/**
	 * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with
	 *       Key Management Service (KMS) keys (SSE-KMS).</p>
	 * @public
	 */
	BucketKeyEnabled?: boolean | undefined;
	/**
	 * <p>If present, indicates that the requester was successfully charged for the request. For more
	 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
	 *         Storage Service user guide</i>.</p>
	 *          <note>
	 *             <p>This functionality is not supported for directory buckets.</p>
	 *          </note>
	 * @public
	 */
	RequestCharged?: RequestCharged | undefined;
}
/**
 * @public
 *
 * The output of {@link PutPublicAccessBlockCommand}.
 */
export interface PutPublicAccessBlockCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RestoreObjectCommand}.
 */
export interface RestoreObjectCommandOutput extends RestoreObjectOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UploadPartCommand}.
 */
export interface UploadPartCommandOutput extends UploadPartOutput, MetadataBearer {
}

export {};
