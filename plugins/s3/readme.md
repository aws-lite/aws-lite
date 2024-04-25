# [`@aws-lite/s3`](https://aws-lite.org/services/s3)

> Official `aws-lite` plugin for S3

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/s3
```

Optionally install types:

```sh
npm i -D @aws-lite/s3-types
```

## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/s3)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `CreateBucket`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`CreateBucketConfiguration` (object)**
  - Complete bucket configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html#API_CreateBucket_RequestSyntax)
- **`ACL` (string)**
  - Sets request header: `x-amz-acl`
- **`GrantFullControl` (string)**
  - Sets request header: `x-amz-grant-full-control`
- **`GrantRead` (string)**
  - Sets request header: `x-amz-grant-read`
- **`GrantReadACP` (string)**
  - Sets request header: `x-amz-grant-read-acp`
- **`GrantWrite` (string)**
  - Sets request header: `x-amz-grant-write`
- **`GrantWriteACP` (string)**
  - Sets request header: `x-amz-grant-write-acp`
- **`ObjectLockEnabledForBucket` (string)**
  - Sets request header: `x-amz-bucket-object-lock-enabled`
- **`ObjectOwnership` (string)**
  - Sets request header: `x-amz-object-ownership`


### `DeleteBucket`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`MFA` (string)**
  - Sets request header: `x-amz-mfa`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`BypassGovernanceRetention` (string)**
  - Sets request header: `x-amz-bypass-governance-retention`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteObjects`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Delete` (object) [required]**
  - Object deletion request
- **`MFA` (string)**
  - Sets request header: `x-amz-mfa`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`BypassGovernanceRetention` (string)**
  - Sets request header: `x-amz-bypass-governance-retention`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`


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
- **`rawResponsePayload` (boolean)**
  - Set to `true` to return payload as a buffer
- **`streamResponsePayload` (boolean)**
  - Set to `true` to return payload as a Node.js stream


### `HeadObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html)

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


### `HeadBucket`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `ListBuckets`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html)

Properties:



### `ListObjectsV2`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ContinuationToken` (string)**
  - Pagination cursor token (returned as `NextContinuationToken`
- **`Delimiter` (string)**
  - Delimiter character used to group keys
- **`EncodingType` (string)**
  - Object key encoding type (must be `url`)
- **`FetchOwner` (string)**
  - Return owner field with results
- **`MaxKeys` (number)**
  - Set the maximum number of keys returned per response
- **`Prefix` (string)**
  - Limit response to keys that begin with the specified prefix
- **`StartAfter` (string)**
  - Starts listing after any specified key in the bucket
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`OptionalObjectAttributes` (string)**
  - Sets request header: `x-amz-optional-object-attributes`
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `PutObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`Body` (string, buffer)**
  - String or buffer to be uploaded
- **`File` (string)**
  - File path to be read and uploaded from the local filesystem
- **`ApplyChecksum` (boolean)**
  - Sign payload; enabling this option may significantly increase memory and latency
- **`MinChunkSize` (number)**
  - Minimum size (in bytes) to utilize signed, AWS-chunk-encoded uploads to S3
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

- [`AbortMultipartUpload`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html)
- [`CompleteMultipartUpload`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html)
- [`CopyObject`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html)
- [`CreateMultipartUpload`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html)
- [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html)
- [`DeleteBucketAnalyticsConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html)
- [`DeleteBucketCors`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html)
- [`DeleteBucketEncryption`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html)
- [`DeleteBucketIntelligentTieringConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html)
- [`DeleteBucketInventoryConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html)
- [`DeleteBucketLifecycle`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html)
- [`DeleteBucketMetricsConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html)
- [`DeleteBucketOwnershipControls`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketOwnershipControls.html)
- [`DeleteBucketPolicy`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html)
- [`DeleteBucketReplication`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html)
- [`DeleteBucketTagging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html)
- [`DeleteBucketWebsite`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html)
- [`DeleteObjectTagging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html)
- [`DeletePublicAccessBlock`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html)
- [`GetBucketAccelerateConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html)
- [`GetBucketAcl`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html)
- [`GetBucketAnalyticsConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html)
- [`GetBucketCors`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html)
- [`GetBucketEncryption`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html)
- [`GetBucketIntelligentTieringConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html)
- [`GetBucketInventoryConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html)
- [`GetBucketLifecycle`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html)
- [`GetBucketLifecycleConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html)
- [`GetBucketLocation`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html)
- [`GetBucketLogging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html)
- [`GetBucketMetricsConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html)
- [`GetBucketNotification`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html)
- [`GetBucketNotificationConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html)
- [`GetBucketOwnershipControls`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html)
- [`GetBucketPolicy`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html)
- [`GetBucketPolicyStatus`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html)
- [`GetBucketReplication`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html)
- [`GetBucketRequestPayment`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html)
- [`GetBucketTagging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html)
- [`GetBucketVersioning`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html)
- [`GetBucketWebsite`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html)
- [`GetObjectAcl`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html)
- [`GetObjectAttributes`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html)
- [`GetObjectLegalHold`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html)
- [`GetObjectLockConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html)
- [`GetObjectRetention`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html)
- [`GetObjectTagging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html)
- [`GetObjectTorrent`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html)
- [`GetPublicAccessBlock`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html)
- [`ListBucketAnalyticsConfigurations`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html)
- [`ListBucketIntelligentTieringConfigurations`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html)
- [`ListBucketInventoryConfigurations`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html)
- [`ListBucketMetricsConfigurations`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html)
- [`ListDirectoryBuckets`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListDirectoryBuckets.html)
- [`ListMultipartUploads`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html)
- [`ListObjects`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html)
- [`ListObjectVersions`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html)
- [`ListParts`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html)
- [`PutBucketAccelerateConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html)
- [`PutBucketAcl`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html)
- [`PutBucketAnalyticsConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html)
- [`PutBucketCors`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html)
- [`PutBucketEncryption`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html)
- [`PutBucketIntelligentTieringConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html)
- [`PutBucketInventoryConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html)
- [`PutBucketLifecycle`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html)
- [`PutBucketLifecycleConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html)
- [`PutBucketLogging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html)
- [`PutBucketMetricsConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html)
- [`PutBucketNotification`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html)
- [`PutBucketNotificationConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotificationConfiguration.html)
- [`PutBucketOwnershipControls`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketOwnershipControls.html)
- [`PutBucketPolicy`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html)
- [`PutBucketReplication`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html)
- [`PutBucketRequestPayment`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html)
- [`PutBucketTagging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html)
- [`PutBucketVersioning`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html)
- [`PutBucketWebsite`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html)
- [`PutObjectAcl`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html)
- [`PutObjectLegalHold`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html)
- [`PutObjectLockConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html)
- [`PutObjectRetention`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html)
- [`PutObjectTagging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html)
- [`PutPublicAccessBlock`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html)
- [`RestoreObject`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html)
- [`SelectObjectContent`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_SelectObjectContent.html)
- [`UploadPart`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html)
- [`UploadPartCopy`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html)
- [`WriteGetObjectResponse`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_WriteGetObjectResponse.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
