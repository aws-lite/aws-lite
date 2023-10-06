import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  GetObjectCommandOutput as GetObjectResponse,
  HeadObjectCommandOutput as HeadObjectResponse,
  ListObjectsV2CommandOutput as ListObjectsV2Response,
  PutObjectCommandOutput as PutObjectResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-s3";

declare interface AwsLiteS3 {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html S3: GetObject}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObject s3}
   */
  GetObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string, ResponseCacheControl?: string, ResponseContentDisposition?: string, ResponseContentEncoding?: string, ResponseContentLanguage?: string, ResponseContentType?: string, ResponseExpires?: string }) => Promise<GetObjectResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html S3: HeadObject}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#HeadObject s3}
   */
  HeadObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string }) => Promise<HeadObjectResponse>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html S3: ListObjectsV2}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListObjectsV2 s3}
   */
  ListObjectsV2: (input: { Bucket: string, ContinuationToken?: string, Delimiter?: string, EncodingType?: string, FetchOwner?: string, MaxKeys?: number, Prefix?: string, StartAfter?: string, RequestPayer?: string, ExpectedBucketOwner?: string, OptionalObjectAttributes?: string, paginate?: boolean }) => Promise<ListObjectsV2Response>
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html S3: PutObject}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutObject s3}
   */
  PutObject: (input: { Bucket: string, Key: string, File: string, MinChunkSize?: number, ACL?: string, BucketKeyEnabled?: string, CacheControl?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentLength?: string, ContentMD5?: string, ContentType?: string, ExpectedBucketOwner?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ObjectLockLegalHoldStatus?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, RequestPayer?: string, ServerSideEncryption?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSEncryptionContext?: string, SSEKMSKeyId?: string, StorageClass?: string, Tagging?: string, WebsiteRedirectLocation?: string }) => Promise<PutObjectResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    s3: AwsLiteS3;
  }
}
