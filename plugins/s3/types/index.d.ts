import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  CreateBucketCommandOutput as CreateBucketResponse,
  CreateMultipartUploadCommandOutput as CreateMultipartUploadResponse,
  DeleteBucketCommandOutput as DeleteBucketResponse,
  DeleteObjectCommandOutput as DeleteObjectResponse,
  DeleteObjectsCommandOutput as DeleteObjectsResponse,
  GetBucketAccelerateConfigurationCommandOutput as GetBucketAccelerateConfigurationResponse,
  GetObjectCommandOutput as GetObjectResponse,
  HeadObjectCommandOutput as HeadObjectResponse,
  HeadBucketCommandOutput as HeadBucketResponse,
  ListBucketsCommandOutput as ListBucketsResponse,
  ListMultipartUploadsCommandOutput as ListMultipartUploadsResponse,
  ListObjectsV2CommandOutput as ListObjectsV2Response,
  PutObjectCommandOutput as PutObjectResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-s3";

declare interface AwsLiteS3 {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
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
  ListMultipartUploads: (input: { Bucket: string, Delimiter?: string, EncodingType?: string, KeyMarker?: string, MaxUploads?: number, UploadIdMarker?: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<ListMultipartUploadsResponse>
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
  PutObject: (input: { Bucket: string, Key: string, Body?: string | Buffer, File?: string, ApplyChecksum?: boolean, MinChunkSize?: number, ACL?: string, BucketKeyEnabled?: string, CacheControl?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentLength?: string, ContentMD5?: string, ContentType?: string, ExpectedBucketOwner?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ObjectLockLegalHoldStatus?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, RequestPayer?: string, ServerSideEncryption?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSEncryptionContext?: string, SSEKMSKeyId?: string, StorageClass?: string, Tagging?: string, WebsiteRedirectLocation?: string }) => Promise<PutObjectResponse>
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
  CreateBucketResponse,
  CreateMultipartUploadResponse,
  DeleteBucketResponse,
  DeleteObjectResponse,
  DeleteObjectsResponse,
  GetBucketAccelerateConfigurationResponse,
  GetObjectResponse,
  HeadObjectResponse,
  HeadBucketResponse,
  ListBucketsResponse,
  ListMultipartUploadsResponse,
  ListObjectsV2Response,
  PutObjectResponse,
  // $EXPORT_END
}
