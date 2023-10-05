import "@aws-lite/client";
import {
  // $IMPORTS_START
  GetObjectCommandOutput,
  HeadObjectCommandOutput,
  PutObjectCommandOutput
  // $IMPORTS_END
} from "@aws-sdk/client-s3";

declare interface AwsLiteS3 {
  // $METHODS_START
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html} */
  GetObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string, ResponseCacheControl?: string, ResponseContentDisposition?: string, ResponseContentEncoding?: string, ResponseContentLanguage?: string, ResponseContentType?: string, ResponseExpires?: string }) => Promise<GetObjectCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html} */
  HeadObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string }) => Promise<HeadObjectCommandOutput>
  /** @description AWS Documentation: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html} */
  PutObject: (input: { Bucket: string, Key: string, File: string, MinChunkSize?: number, ACL?: string, BucketKeyEnabled?: string, CacheControl?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentLength?: string, ContentMD5?: string, ContentType?: string, ExpectedBucketOwner?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ObjectLockLegalHoldStatus?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, RequestPayer?: string, ServerSideEncryption?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSEncryptionContext?: string, SSEKMSKeyId?: string, StorageClass?: string, Tagging?: string, WebsiteRedirectLocation?: string }) => Promise<PutObjectCommandOutput>
  AbortMultipartUpload: never
  CompleteMultipartUpload: never
  CopyObject: never
  CreateBucket: never
  CreateMultipartUpload: never
  DeleteBucket: never
  DeleteBucketAnalyticsConfiguration: never
  DeleteBucketCors: never
  DeleteBucketEncryption: never
  DeleteBucketIntelligentTieringConfiguration: never
  DeleteBucketInventoryConfiguration: never
  DeleteBucketLifecycle: never
  DeleteBucketMetricsConfiguration: never
  DeleteBucketOwnershipControls: never
  DeleteBucketPolicy: never
  DeleteBucketReplication: never
  DeleteBucketTagging: never
  DeleteBucketWebsite: never
  DeleteObject: never
  DeleteObjects: never
  DeleteObjectTagging: never
  DeletePublicAccessBlock: never
  GetBucketAccelerateConfiguration: never
  GetBucketAcl: never
  GetBucketAnalyticsConfiguration: never
  GetBucketCors: never
  GetBucketEncryption: never
  GetBucketIntelligentTieringConfiguration: never
  GetBucketInventoryConfiguration: never
  GetBucketLifecycle: never
  GetBucketLifecycleConfiguration: never
  GetBucketLocation: never
  GetBucketLogging: never
  GetBucketMetricsConfiguration: never
  GetBucketNotification: never
  GetBucketNotificationConfiguration: never
  GetBucketOwnershipControls: never
  GetBucketPolicy: never
  GetBucketPolicyStatus: never
  GetBucketReplication: never
  GetBucketRequestPayment: never
  GetBucketTagging: never
  GetBucketVersioning: never
  GetBucketWebsite: never
  GetObjectAcl: never
  GetObjectAttributes: never
  GetObjectLegalHold: never
  GetObjectLockConfiguration: never
  GetObjectRetention: never
  GetObjectTagging: never
  GetObjectTorrent: never
  GetPublicAccessBlock: never
  HeadBucket: never
  ListBucketAnalyticsConfigurations: never
  ListBucketIntelligentTieringConfigurations: never
  ListBucketInventoryConfigurations: never
  ListBucketMetricsConfigurations: never
  ListBuckets: never
  ListMultipartUploads: never
  ListObjects: never
  ListObjectsV2: never
  ListObjectVersions: never
  ListParts: never
  PutBucketAccelerateConfiguration: never
  PutBucketAcl: never
  PutBucketAnalyticsConfiguration: never
  PutBucketCors: never
  PutBucketEncryption: never
  PutBucketIntelligentTieringConfiguration: never
  PutBucketInventoryConfiguration: never
  PutBucketLifecycle: never
  PutBucketLifecycleConfiguration: never
  PutBucketLogging: never
  PutBucketMetricsConfiguration: never
  PutBucketNotification: never
  PutBucketNotificationConfiguration: never
  PutBucketOwnershipControls: never
  PutBucketPolicy: never
  PutBucketReplication: never
  PutBucketRequestPayment: never
  PutBucketTagging: never
  PutBucketVersioning: never
  PutBucketWebsite: never
  PutObjectAcl: never
  PutObjectLegalHold: never
  PutObjectLockConfiguration: never
  PutObjectRetention: never
  PutObjectTagging: never
  PutPublicAccessBlock: never
  RestoreObject: never
  SelectObjectContent: never
  UploadPart: never
  UploadPartCopy: never
  WriteGetObjectResponse: never
  // $METHODS_END
}

declare global {
  interface AwsLiteClient {
    s3: AwsLiteS3;
  }
}
