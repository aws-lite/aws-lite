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
  - Sets header: x-amz-acl
- **`BucketKeyEnabled` (string)**
  - Sets header: x-amz-server-side-encryption-bucket-key-enabled
- **`CacheControl` (string)**
  - Sets header: Cache-Control
- **`ChecksumAlgorithm` (string)**
  - Sets header: x-amz-sdk-checksum-algorithm
- **`ChecksumCRC32` (string)**
  - Sets header: x-amz-checksum-crc32
- **`ChecksumCRC32C` (string)**
  - Sets header: x-amz-checksum-crc32c
- **`ChecksumSHA1` (string)**
  - Sets header: x-amz-checksum-sha1
- **`ChecksumSHA256` (string)**
  - Sets header: x-amz-checksum-sha256
- **`ContentDisposition` (string)**
  - Sets header: Content-Disposition
- **`ContentEncoding` (string)**
  - Sets header: Content-Encoding
- **`ContentLanguage` (string)**
  - Sets header: Content-Language
- **`ContentLength` (string)**
  - Sets header: Content-Length
- **`ContentMD5` (string)**
  - Sets header: Content-MD5
- **`ContentType` (string)**
  - Sets header: Content-Type
- **`ExpectedBucketOwner` (string)**
  - Sets header: x-amz-expected-bucket-owner
- **`Expires` (string)**
  - Sets header: Expires
- **`GrantFullControl` (string)**
  - Sets header: x-amz-grant-full-control
- **`GrantRead` (string)**
  - Sets header: x-amz-grant-read
- **`GrantReadACP` (string)**
  - Sets header: x-amz-grant-read-acp
- **`GrantWriteACP` (string)**
  - Sets header: x-amz-grant-write-acp
- **`ObjectLockLegalHoldStatus` (string)**
  - Sets header: x-amz-object-lock-legal-hold
- **`ObjectLockMode` (string)**
  - Sets header: x-amz-object-lock-mode
- **`ObjectLockRetainUntilDate` (string)**
  - Sets header: x-amz-object-lock-retain-until-date
- **`RequestPayer` (string)**
  - Sets header: x-amz-request-payer
- **`ServerSideEncryption` (string)**
  - Sets header: x-amz-server-side-encryption
- **`SSECustomerAlgorithm` (string)**
  - Sets header: x-amz-server-side-encryption-customer-algorithm
- **`SSECustomerKey` (string)**
  - Sets header: x-amz-server-side-encryption-customer-key
- **`SSECustomerKeyMD5` (string)**
  - Sets header: x-amz-server-side-encryption-customer-key-MD5
- **`SSEKMSEncryptionContext` (string)**
  - Sets header: x-amz-server-side-encryption-context
- **`SSEKMSKeyId` (string)**
  - Sets header: x-amz-server-side-encryption-aws-kms-key-id
- **`StorageClass` (string)**
  - Sets header: x-amz-storage-class
- **`Tagging` (string)**
  - Sets header: x-amz-tagging
- **`WebsiteRedirectLocation` (string)**
  - Sets header: x-amz-website-redirect-location


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
- `GetObject`
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
