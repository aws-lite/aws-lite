import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AbortMultipartUploadCommandOutput as AbortMultipartUploadResponse,
  CompleteMultipartUploadCommandOutput as CompleteMultipartUploadResponse,
  CreateBucketCommandOutput as CreateBucketResponse,
  CreateMultipartUploadCommandOutput as CreateMultipartUploadResponse,
  DeleteBucketCommandOutput as DeleteBucketResponse,
  DeleteObjectCommandOutput as DeleteObjectResponse,
  DeleteObjectsCommandOutput as DeleteObjectsResponse,
  GetBucketAccelerateConfigurationCommandOutput as GetBucketAccelerateConfigurationResponse,
  GetBucketAclCommandOutput as GetBucketAclResponse,
  GetBucketAnalyticsConfigurationCommandOutput as GetBucketAnalyticsConfigurationResponse,
  GetBucketCorsCommandOutput as GetBucketCorsResponse,
  GetBucketEncryptionCommandOutput as GetBucketEncryptionResponse,
  GetBucketIntelligentTieringConfigurationCommandOutput as GetBucketIntelligentTieringConfigurationResponse,
  GetBucketInventoryConfigurationCommandOutput as GetBucketInventoryConfigurationResponse,
  GetBucketLifecycleConfigurationCommandOutput as GetBucketLifecycleConfigurationResponse,
  GetBucketLocationCommandOutput as GetBucketLocationResponse,
  GetBucketLoggingCommandOutput as GetBucketLoggingResponse,
  GetBucketMetricsConfigurationCommandOutput as GetBucketMetricsConfigurationResponse,
  GetBucketNotificationConfigurationCommandOutput as GetBucketNotificationConfigurationResponse,
  GetBucketOwnershipControlsCommandOutput as GetBucketOwnershipControlsResponse,
  GetBucketPolicyCommandOutput as GetBucketPolicyResponse,
  GetBucketPolicyStatusCommandOutput as GetBucketPolicyStatusResponse,
  GetBucketReplicationCommandOutput as GetBucketReplicationResponse,
  GetBucketRequestPaymentCommandOutput as GetBucketRequestPaymentResponse,
  GetBucketTaggingCommandOutput as GetBucketTaggingResponse,
  GetBucketVersioningCommandOutput as GetBucketVersioningResponse,
  GetBucketWebsiteCommandOutput as GetBucketWebsiteResponse,
  GetObjectCommandOutput as GetObjectResponse,
  HeadObjectCommandOutput as HeadObjectResponse,
  HeadBucketCommandOutput as HeadBucketResponse,
  ListBucketsCommandOutput as ListBucketsResponse,
  ListMultipartUploadsCommandOutput as ListMultipartUploadsResponse,
  ListObjectsV2CommandOutput as ListObjectsV2Response,
  PutObjectCommandOutput as PutObjectResponse,
  UploadCommandOutput as UploadResponse,
  UploadPartCommandOutput as UploadPartResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-s3";

declare interface AwsLiteS3 {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html S3: AbortMultipartUpload}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#AbortMultipartUpload S3: AbortMultipartUpload}
   */
  AbortMultipartUpload: (input: { Bucket: string, Key: string, UploadId: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<AbortMultipartUploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html S3: CompleteMultipartUpload}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#CompleteMultipartUpload S3: CompleteMultipartUpload}
   */
  CompleteMultipartUpload: (input: { Bucket: string, Key: string, UploadId: string, MultipartUpload?: Record<string, any>, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, RequestPayer?: string, ExpectedBucketOwner?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string }) => Promise<CompleteMultipartUploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html S3: CreateBucket}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#CreateBucket S3: CreateBucket}
   */
  CreateBucket: (input: { Bucket: string, CreateBucketConfiguration?: Record<string, any>, ACL?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWrite?: string, GrantWriteACP?: string, ObjectLockEnabledForBucket?: string, ObjectOwnership?: string }) => Promise<CreateBucketResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html S3: CreateMultipartUpload}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#CreateMultipartUpload S3: CreateMultipartUpload}
   */
  CreateMultipartUpload: (input: { Bucket: string, Key: string, ACL?: string, CacheControl?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentType?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ServerSideEncryption?: string, StorageClass?: string, WebsiteRedirectLocation?: string, SSECustomerAlgorithm?: string, SSECustomerKeyMD5?: string, SSEKMSKeyId?: string, SSEKMSEncryptionContext?: string, BucketKeyEnabled?: string, RequestPayer?: string, Tagging?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, ObjectLockLegalHoldStatus?: string, ExpectedBucketOwner?: string, ChecksumAlgorithm?: string }) => Promise<CreateMultipartUploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html S3: DeleteBucket}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucket S3: DeleteBucket}
   */
  DeleteBucket: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html S3: DeleteObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteObject S3: DeleteObject}
   */
  DeleteObject: (input: { Bucket: string, Key: string, VersionId?: string, MFA?: string, RequestPayer?: string, BypassGovernanceRetention?: string, ExpectedBucketOwner?: string }) => Promise<DeleteObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html S3: DeleteObjects}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteObjects S3: DeleteObjects}
   */
  DeleteObjects: (input: { Bucket: string, Delete: Record<string, any>, MFA?: string, RequestPayer?: string, BypassGovernanceRetention?: string, ExpectedBucketOwner?: string, ChecksumAlgorithm?: string, ContentMD5?: string }) => Promise<DeleteObjectsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html S3: GetBucketAccelerateConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketAccelerateConfiguration S3: GetBucketAccelerateConfiguration}
   */
  GetBucketAccelerateConfiguration: (input: { Bucket: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<GetBucketAccelerateConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html S3: GetBucketAcl}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketAcl S3: GetBucketAcl}
   */
  GetBucketAcl: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketAclResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html S3: GetBucketAnalyticsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketAnalyticsConfiguration S3: GetBucketAnalyticsConfiguration}
   */
  GetBucketAnalyticsConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<GetBucketAnalyticsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html S3: GetBucketCors}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketCors S3: GetBucketCors}
   */
  GetBucketCors: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketCorsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html S3: GetBucketEncryption}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketEncryption S3: GetBucketEncryption}
   */
  GetBucketEncryption: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketEncryptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html S3: GetBucketIntelligentTieringConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketIntelligentTieringConfiguration S3: GetBucketIntelligentTieringConfiguration}
   */
  GetBucketIntelligentTieringConfiguration: (input: { Bucket: string, Id: string }) => Promise<GetBucketIntelligentTieringConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html S3: GetBucketInventoryConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketInventoryConfiguration S3: GetBucketInventoryConfiguration}
   */
  GetBucketInventoryConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<GetBucketInventoryConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html S3: GetBucketLifecycleConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketLifecycleConfiguration S3: GetBucketLifecycleConfiguration}
   */
  GetBucketLifecycleConfiguration: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketLifecycleConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html S3: GetBucketLocation}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketLocation S3: GetBucketLocation}
   */
  GetBucketLocation: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketLocationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html S3: GetBucketLogging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketLogging S3: GetBucketLogging}
   */
  GetBucketLogging: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketLoggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html S3: GetBucketMetricsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketMetricsConfiguration S3: GetBucketMetricsConfiguration}
   */
  GetBucketMetricsConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<GetBucketMetricsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html S3: GetBucketNotificationConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketNotificationConfiguration S3: GetBucketNotificationConfiguration}
   */
  GetBucketNotificationConfiguration: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketNotificationConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html S3: GetBucketOwnershipControls}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketOwnershipControls S3: GetBucketOwnershipControls}
   */
  GetBucketOwnershipControls: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketOwnershipControlsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html S3: GetBucketPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketPolicy S3: GetBucketPolicy}
   */
  GetBucketPolicy: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html S3: GetBucketPolicyStatus}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketPolicyStatus S3: GetBucketPolicyStatus}
   */
  GetBucketPolicyStatus: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketPolicyStatusResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html S3: GetBucketReplication}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketReplication S3: GetBucketReplication}
   */
  GetBucketReplication: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketReplicationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html S3: GetBucketRequestPayment}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketRequestPayment S3: GetBucketRequestPayment}
   */
  GetBucketRequestPayment: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketRequestPaymentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html S3: GetBucketTagging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketTagging S3: GetBucketTagging}
   */
  GetBucketTagging: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketTaggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html S3: GetBucketVersioning}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketVersioning S3: GetBucketVersioning}
   */
  GetBucketVersioning: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketVersioningResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html S3: GetBucketWebsite}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketWebsite S3: GetBucketWebsite}
   */
  GetBucketWebsite: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketWebsiteResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html S3: GetObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObject S3: GetObject}
   */
  GetObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string, ResponseCacheControl?: string, ResponseContentDisposition?: string, ResponseContentEncoding?: string, ResponseContentLanguage?: string, ResponseContentType?: string, ResponseExpires?: string, rawResponsePayload?: boolean, streamResponsePayload?: boolean }) => Promise<GetObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html S3: HeadObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#HeadObject S3: HeadObject}
   */
  HeadObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string }) => Promise<HeadObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html S3: HeadBucket}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#HeadBucket S3: HeadBucket}
   */
  HeadBucket: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<HeadBucketResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListBuckets S3: ListBuckets} */
  ListBuckets: () => Promise<ListBucketsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html S3: ListMultipartUploads}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListMultipartUploads S3: ListMultipartUploads}
   */
  ListMultipartUploads: (input: { Bucket: string, Delimiter?: string, EncodingType?: string, KeyMarker?: string, MaxUploads?: number, UploadIdMarker?: string, ExpectedBucketOwner?: string, RequestPayer?: string, paginate?: boolean }) => Promise<ListMultipartUploadsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html S3: ListObjectsV2}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListObjectsV2 S3: ListObjectsV2}
   */
  ListObjectsV2: (input: { Bucket: string, ContinuationToken?: string, Delimiter?: string, EncodingType?: string, FetchOwner?: string, MaxKeys?: number, Prefix?: string, StartAfter?: string, RequestPayer?: string, ExpectedBucketOwner?: string, OptionalObjectAttributes?: string, paginate?: boolean }) => Promise<ListObjectsV2Response>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html S3: PutObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutObject S3: PutObject}
   */
  PutObject: (input: { Bucket: string, Key: string, Body?: Buffer | stream | string, File?: string, ApplyChecksum?: boolean, MinChunkSize?: number, ACL?: string, BucketKeyEnabled?: string, CacheControl?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentLength?: string, ContentMD5?: string, ContentType?: string, ExpectedBucketOwner?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ObjectLockLegalHoldStatus?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, RequestPayer?: string, ServerSideEncryption?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSEncryptionContext?: string, SSEKMSKeyId?: string, StorageClass?: string, Tagging?: string, WebsiteRedirectLocation?: string }) => Promise<PutObjectResponse>
  /**
   * @description
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#Upload S3: Upload}
   */
  Upload: (input: { Bucket: string, Key: string, Body?: Buffer | stream | string, File?: string, ChunkSize?: number, Concurrency?: number, ACL?: string, BucketKeyEnabled?: string, CacheControl?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentType?: string, ExpectedBucketOwner?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ObjectLockLegalHoldStatus?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, RequestPayer?: string, ServerSideEncryption?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSEncryptionContext?: string, SSEKMSKeyId?: string, StorageClass?: string, Tagging?: string, WebsiteRedirectLocation?: string }) => Promise<UploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html S3: UploadPart}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#UploadPart S3: UploadPart}
   */
  UploadPart: (input: { Bucket: string, Key: string, PartNumber?: number, Body?: Buffer | stream | string, ContentLength?: string, ContentMD5?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string }) => Promise<UploadPartResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    S3: AwsLiteS3;
  }
}

export type {
  AwsLiteS3,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  AbortMultipartUploadResponse,
  CompleteMultipartUploadResponse,
  CreateBucketResponse,
  CreateMultipartUploadResponse,
  DeleteBucketResponse,
  DeleteObjectResponse,
  DeleteObjectsResponse,
  GetBucketAccelerateConfigurationResponse,
  GetBucketAclResponse,
  GetBucketAnalyticsConfigurationResponse,
  GetBucketCorsResponse,
  GetBucketEncryptionResponse,
  GetBucketIntelligentTieringConfigurationResponse,
  GetBucketInventoryConfigurationResponse,
  GetBucketLifecycleConfigurationResponse,
  GetBucketLocationResponse,
  GetBucketLoggingResponse,
  GetBucketMetricsConfigurationResponse,
  GetBucketNotificationConfigurationResponse,
  GetBucketOwnershipControlsResponse,
  GetBucketPolicyResponse,
  GetBucketPolicyStatusResponse,
  GetBucketReplicationResponse,
  GetBucketRequestPaymentResponse,
  GetBucketTaggingResponse,
  GetBucketVersioningResponse,
  GetBucketWebsiteResponse,
  GetObjectResponse,
  HeadObjectResponse,
  HeadBucketResponse,
  ListBucketsResponse,
  ListMultipartUploadsResponse,
  ListObjectsV2Response,
  PutObjectResponse,
  UploadResponse,
  UploadPartResponse,
  // $EXPORT_END
}
