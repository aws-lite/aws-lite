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
  /** @description Not yet implemented */
  // AbortMultipartUpload: never
  /** @description Not yet implemented */
  // CompleteMultipartUpload: never
  /** @description Not yet implemented */
  // CopyObject: never
  /** @description Not yet implemented */
  // CreateBucket: never
  /** @description Not yet implemented */
  // CreateMultipartUpload: never
  /** @description Not yet implemented */
  // DeleteBucket: never
  /** @description Not yet implemented */
  // DeleteBucketAnalyticsConfiguration: never
  /** @description Not yet implemented */
  // DeleteBucketCors: never
  /** @description Not yet implemented */
  // DeleteBucketEncryption: never
  /** @description Not yet implemented */
  // DeleteBucketIntelligentTieringConfiguration: never
  /** @description Not yet implemented */
  // DeleteBucketInventoryConfiguration: never
  /** @description Not yet implemented */
  // DeleteBucketLifecycle: never
  /** @description Not yet implemented */
  // DeleteBucketMetricsConfiguration: never
  /** @description Not yet implemented */
  // DeleteBucketOwnershipControls: never
  /** @description Not yet implemented */
  // DeleteBucketPolicy: never
  /** @description Not yet implemented */
  // DeleteBucketReplication: never
  /** @description Not yet implemented */
  // DeleteBucketTagging: never
  /** @description Not yet implemented */
  // DeleteBucketWebsite: never
  /** @description Not yet implemented */
  // DeleteObject: never
  /** @description Not yet implemented */
  // DeleteObjects: never
  /** @description Not yet implemented */
  // DeleteObjectTagging: never
  /** @description Not yet implemented */
  // DeletePublicAccessBlock: never
  /** @description Not yet implemented */
  // GetBucketAccelerateConfiguration: never
  /** @description Not yet implemented */
  // GetBucketAcl: never
  /** @description Not yet implemented */
  // GetBucketAnalyticsConfiguration: never
  /** @description Not yet implemented */
  // GetBucketCors: never
  /** @description Not yet implemented */
  // GetBucketEncryption: never
  /** @description Not yet implemented */
  // GetBucketIntelligentTieringConfiguration: never
  /** @description Not yet implemented */
  // GetBucketInventoryConfiguration: never
  /** @description Not yet implemented */
  // GetBucketLifecycle: never
  /** @description Not yet implemented */
  // GetBucketLifecycleConfiguration: never
  /** @description Not yet implemented */
  // GetBucketLocation: never
  /** @description Not yet implemented */
  // GetBucketLogging: never
  /** @description Not yet implemented */
  // GetBucketMetricsConfiguration: never
  /** @description Not yet implemented */
  // GetBucketNotification: never
  /** @description Not yet implemented */
  // GetBucketNotificationConfiguration: never
  /** @description Not yet implemented */
  // GetBucketOwnershipControls: never
  /** @description Not yet implemented */
  // GetBucketPolicy: never
  /** @description Not yet implemented */
  // GetBucketPolicyStatus: never
  /** @description Not yet implemented */
  // GetBucketReplication: never
  /** @description Not yet implemented */
  // GetBucketRequestPayment: never
  /** @description Not yet implemented */
  // GetBucketTagging: never
  /** @description Not yet implemented */
  // GetBucketVersioning: never
  /** @description Not yet implemented */
  // GetBucketWebsite: never
  /** @description Not yet implemented */
  // GetObjectAcl: never
  /** @description Not yet implemented */
  // GetObjectAttributes: never
  /** @description Not yet implemented */
  // GetObjectLegalHold: never
  /** @description Not yet implemented */
  // GetObjectLockConfiguration: never
  /** @description Not yet implemented */
  // GetObjectRetention: never
  /** @description Not yet implemented */
  // GetObjectTagging: never
  /** @description Not yet implemented */
  // GetObjectTorrent: never
  /** @description Not yet implemented */
  // GetPublicAccessBlock: never
  /** @description Not yet implemented */
  // HeadBucket: never
  /** @description Not yet implemented */
  // ListBucketAnalyticsConfigurations: never
  /** @description Not yet implemented */
  // ListBucketIntelligentTieringConfigurations: never
  /** @description Not yet implemented */
  // ListBucketInventoryConfigurations: never
  /** @description Not yet implemented */
  // ListBucketMetricsConfigurations: never
  /** @description Not yet implemented */
  // ListBuckets: never
  /** @description Not yet implemented */
  // ListMultipartUploads: never
  /** @description Not yet implemented */
  // ListObjects: never
  /** @description Not yet implemented */
  // ListObjectsV2: never
  /** @description Not yet implemented */
  // ListObjectVersions: never
  /** @description Not yet implemented */
  // ListParts: never
  /** @description Not yet implemented */
  // PutBucketAccelerateConfiguration: never
  /** @description Not yet implemented */
  // PutBucketAcl: never
  /** @description Not yet implemented */
  // PutBucketAnalyticsConfiguration: never
  /** @description Not yet implemented */
  // PutBucketCors: never
  /** @description Not yet implemented */
  // PutBucketEncryption: never
  /** @description Not yet implemented */
  // PutBucketIntelligentTieringConfiguration: never
  /** @description Not yet implemented */
  // PutBucketInventoryConfiguration: never
  /** @description Not yet implemented */
  // PutBucketLifecycle: never
  /** @description Not yet implemented */
  // PutBucketLifecycleConfiguration: never
  /** @description Not yet implemented */
  // PutBucketLogging: never
  /** @description Not yet implemented */
  // PutBucketMetricsConfiguration: never
  /** @description Not yet implemented */
  // PutBucketNotification: never
  /** @description Not yet implemented */
  // PutBucketNotificationConfiguration: never
  /** @description Not yet implemented */
  // PutBucketOwnershipControls: never
  /** @description Not yet implemented */
  // PutBucketPolicy: never
  /** @description Not yet implemented */
  // PutBucketReplication: never
  /** @description Not yet implemented */
  // PutBucketRequestPayment: never
  /** @description Not yet implemented */
  // PutBucketTagging: never
  /** @description Not yet implemented */
  // PutBucketVersioning: never
  /** @description Not yet implemented */
  // PutBucketWebsite: never
  /** @description Not yet implemented */
  // PutObjectAcl: never
  /** @description Not yet implemented */
  // PutObjectLegalHold: never
  /** @description Not yet implemented */
  // PutObjectLockConfiguration: never
  /** @description Not yet implemented */
  // PutObjectRetention: never
  /** @description Not yet implemented */
  // PutObjectTagging: never
  /** @description Not yet implemented */
  // PutPublicAccessBlock: never
  /** @description Not yet implemented */
  // RestoreObject: never
  /** @description Not yet implemented */
  // SelectObjectContent: never
  /** @description Not yet implemented */
  // UploadPart: never
  /** @description Not yet implemented */
  // UploadPartCopy: never
  /** @description Not yet implemented */
  // WriteGetObjectResponse: never
  // $METHODS_END
}

declare global {
  interface AwsLiteClient {
    s3: AwsLiteS3;
  }
}
