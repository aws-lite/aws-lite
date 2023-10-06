import {
  // $IMPORTS_START
  GetObjectCommandOutput,
  HeadObjectCommandOutput,
  PutObjectCommandOutput,
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
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    s3: AwsLiteS3;
  }
}
