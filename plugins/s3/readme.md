# `@aws-lite/s3`

> Official `aws-lite` plugin for S3

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/s3
```


## Methods

<!-- ! Do not remove method_docs_start / method_docs_end ! -->
<!-- method_docs_start -->
### `GetObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`PartNumber` (number)**
  - Part number (between 1 - 10,000) of the object
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`IfMatch` (string)**
  - Sets request header: `if-match`
- **`IfModifiedSince` (string)**
  - Sets request header: `if-modified-since`
- **`IfNoneMatch` (string)**
  - Sets request header: `if-none-match`
- **`IfUnmodifiedSince` (string)**
  - Sets request header: `if-unmodified-since`
- **`Range` (string)**
  - Sets request header: `range`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ChecksumMode` (string)**
  - Sets request header: `x-amz-checksum-mode`
- **`ResponseCacheControl` (string)**
  - Sets response header: `cache-control`
- **`ResponseContentDisposition` (string)**
  - Sets response header: `content-disposition`
- **`ResponseContentEncoding` (string)**
  - Sets response header: `content-encoding`
- **`ResponseContentLanguage` (string)**
  - Sets response header: `content-language`
- **`ResponseContentType` (string)**
  - Sets response header: `content-type`
- **`ResponseExpires` (string)**
  - Sets response header: `expires`


### `PutObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`File` (string) [required]**
  - File path to be read and uploaded from the local filesystem
- **`MinChunkSize` (number)**
  - Minimum size (in bytes) to utilize AWS-chunk-encoded uploads to S3
- **`ACL` (string)**
  - Sets request header: `x-amz-acl`
- **`BucketKeyEnabled` (string)**
  - Sets request header: `x-amz-server-side-encryption-bucket-key-enabled`
- **`CacheControl` (string)**
  - Sets request header: `cache-control`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ChecksumCRC32` (string)**
  - Sets request header: `x-amz-checksum-crc32`
- **`ChecksumCRC32C` (string)**
  - Sets request header: `x-amz-checksum-crc32c`
- **`ChecksumSHA1` (string)**
  - Sets request header: `x-amz-checksum-sha1`
- **`ChecksumSHA256` (string)**
  - Sets request header: `x-amz-checksum-sha256`
- **`ContentDisposition` (string)**
  - Sets request header: `content-disposition`
- **`ContentEncoding` (string)**
  - Sets request header: `content-encoding`
- **`ContentLanguage` (string)**
  - Sets request header: `content-language`
- **`ContentLength` (string)**
  - Sets request header: `content-length`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ContentType` (string)**
  - Sets request header: `content-type`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`Expires` (string)**
  - Sets request header: `expires`
- **`GrantFullControl` (string)**
  - Sets request header: `x-amz-grant-full-control`
- **`GrantRead` (string)**
  - Sets request header: `x-amz-grant-read`
- **`GrantReadACP` (string)**
  - Sets request header: `x-amz-grant-read-acp`
- **`GrantWriteACP` (string)**
  - Sets request header: `x-amz-grant-write-acp`
- **`ObjectLockLegalHoldStatus` (string)**
  - Sets request header: `x-amz-object-lock-legal-hold`
- **`ObjectLockMode` (string)**
  - Sets request header: `x-amz-object-lock-mode`
- **`ObjectLockRetainUntilDate` (string)**
  - Sets request header: `x-amz-object-lock-retain-until-date`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ServerSideEncryption` (string)**
  - Sets request header: `x-amz-server-side-encryption`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`SSEKMSEncryptionContext` (string)**
  - Sets request header: `x-amz-server-side-encryption-context`
- **`SSEKMSKeyId` (string)**
  - Sets request header: `x-amz-server-side-encryption-aws-kms-key-id`
- **`StorageClass` (string)**
  - Sets request header: `x-amz-storage-class`
- **`Tagging` (string)**
  - Sets request header: `x-amz-tagging`
- **`WebsiteRedirectLocation` (string)**
  - Sets request header: `x-amz-website-redirect-location`


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- `AbortMultipartUpload`
- `CompleteMultipartUpload`
- `CopyObject`
- `CreateBucket`
- `CreateMultipartUpload`
- `DeleteBucket`
- `DeleteBucketAnalyticsConfiguration`
- `DeleteBucketCors`
- `DeleteBucketEncryption`
- `DeleteBucketIntelligentTieringConfiguration`
- `DeleteBucketInventoryConfiguration`
- `DeleteBucketLifecycle`
- `DeleteBucketMetricsConfiguration`
- `DeleteBucketOwnershipControls`
- `DeleteBucketPolicy`
- `DeleteBucketReplication`
- `DeleteBucketTagging`
- `DeleteBucketWebsite`
- `DeleteObject`
- `DeleteObjects`
- `DeleteObjectTagging`
- `DeletePublicAccessBlock`
- `GetBucketAccelerateConfiguration`
- `GetBucketAcl`
- `GetBucketAnalyticsConfiguration`
- `GetBucketCors`
- `GetBucketEncryption`
- `GetBucketIntelligentTieringConfiguration`
- `GetBucketInventoryConfiguration`
- `GetBucketLifecycle`
- `GetBucketLifecycleConfiguration`
- `GetBucketLocation`
- `GetBucketLogging`
- `GetBucketMetricsConfiguration`
- `GetBucketNotification`
- `GetBucketNotificationConfiguration`
- `GetBucketOwnershipControls`
- `GetBucketPolicy`
- `GetBucketPolicyStatus`
- `GetBucketReplication`
- `GetBucketRequestPayment`
- `GetBucketTagging`
- `GetBucketVersioning`
- `GetBucketWebsite`
- `GetObjectAcl`
- `GetObjectAttributes`
- `GetObjectLegalHold`
- `GetObjectLockConfiguration`
- `GetObjectRetention`
- `GetObjectTagging`
- `GetObjectTorrent`
- `GetPublicAccessBlock`
- `HeadBucket`
- `HeadObject`
- `ListBucketAnalyticsConfigurations`
- `ListBucketIntelligentTieringConfigurations`
- `ListBucketInventoryConfigurations`
- `ListBucketMetricsConfigurations`
- `ListBuckets`
- `ListMultipartUploads`
- `ListObjects`
- `ListObjectsV2`
- `ListObjectVersions`
- `ListParts`
- `PutBucketAccelerateConfiguration`
- `PutBucketAcl`
- `PutBucketAnalyticsConfiguration`
- `PutBucketCors`
- `PutBucketEncryption`
- `PutBucketIntelligentTieringConfiguration`
- `PutBucketInventoryConfiguration`
- `PutBucketLifecycle`
- `PutBucketLifecycleConfiguration`
- `PutBucketLogging`
- `PutBucketMetricsConfiguration`
- `PutBucketNotification`
- `PutBucketNotificationConfiguration`
- `PutBucketOwnershipControls`
- `PutBucketPolicy`
- `PutBucketReplication`
- `PutBucketRequestPayment`
- `PutBucketTagging`
- `PutBucketVersioning`
- `PutBucketWebsite`
- `PutObjectAcl`
- `PutObjectLegalHold`
- `PutObjectLockConfiguration`
- `PutObjectRetention`
- `PutObjectTagging`
- `PutPublicAccessBlock`
- `RestoreObject`
- `SelectObjectContent`
- `UploadPart`
- `UploadPartCopy`
- `WriteGetObjectResponse`
<!-- method_docs_end -->


## Learn more

Please see the [main `aws-lite` readme](https://github.com/architect/aws-lite) for more information about `aws-lite` plugins.
