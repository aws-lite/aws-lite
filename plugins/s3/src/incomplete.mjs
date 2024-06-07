const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AmazonS3/latest/API/'
export default {
  CopyObject:                                  { disabled, awsDoc: docRoot + 'API_CopyObject.html' },
  CreateSession:                               { disabled, awsDoc: docRoot + 'API_CreateSession.html' },
  DeleteBucketReplication:                     { disabled, awsDoc: docRoot + 'API_DeleteBucketReplication.html' },
  DeleteBucketTagging:                         { disabled, awsDoc: docRoot + 'API_DeleteBucketTagging.html' },
  DeleteBucketWebsite:                         { disabled, awsDoc: docRoot + 'API_DeleteBucketWebsite.html' },
  DeleteObjectTagging:                         { disabled, awsDoc: docRoot + 'API_DeleteObjectTagging.html' },
  DeletePublicAccessBlock:                     { disabled, awsDoc: docRoot + 'API_DeletePublicAccessBlock.html' },
  GetBucketLifecycle:                          { disabled, awsDoc: docRoot + 'API_GetBucketLifecycle.html' }, // Deprecated, use `GetBucketLifecycleConfiguration`
  GetBucketNotification:                       { disabled, awsDoc: docRoot + 'API_GetBucketNotification.html' }, // Deprecated, use `GetBucketNotificationConfiguration`
  GetObjectAcl:                                { disabled, awsDoc: docRoot + 'API_GetObjectAcl.html' },
  GetObjectAttributes:                         { disabled, awsDoc: docRoot + 'API_GetObjectAttributes.html' },
  GetObjectLegalHold:                          { disabled, awsDoc: docRoot + 'API_GetObjectLegalHold.html' },
  GetObjectLockConfiguration:                  { disabled, awsDoc: docRoot + 'API_GetObjectLockConfiguration.html' },
  GetObjectRetention:                          { disabled, awsDoc: docRoot + 'API_GetObjectRetention.html' },
  GetObjectTagging:                            { disabled, awsDoc: docRoot + 'API_GetObjectTagging.html' },
  GetObjectTorrent:                            { disabled, awsDoc: docRoot + 'API_GetObjectTorrent.html' },
  GetPublicAccessBlock:                        { disabled, awsDoc: docRoot + 'API_GetPublicAccessBlock.html' },
  ListBucketAnalyticsConfigurations:           { disabled, awsDoc: docRoot + 'API_ListBucketAnalyticsConfigurations.html' },
  ListBucketIntelligentTieringConfigurations:  { disabled, awsDoc: docRoot + 'API_ListBucketIntelligentTieringConfigurations.html' },
  ListBucketInventoryConfigurations:           { disabled, awsDoc: docRoot + 'API_ListBucketInventoryConfigurations.html' },
  ListBucketMetricsConfigurations:             { disabled, awsDoc: docRoot + 'API_ListBucketMetricsConfigurations.html' },
  ListDirectoryBuckets:                        { disabled, awsDoc: docRoot + 'API_ListDirectoryBuckets.html' },
  ListObjects:                                 { disabled, awsDoc: docRoot + 'API_ListObjects.html' },
  ListObjectVersions:                          { disabled, awsDoc: docRoot + 'API_ListObjectVersions.html' },
  ListParts:                                   { disabled, awsDoc: docRoot + 'API_ListParts.html' },
  PutBucketAcl:                                { disabled, awsDoc: docRoot + 'API_PutBucketAcl.html' }, // Requires nested XML attributes
  PutBucketLifecycle:                          { disabled, awsDoc: docRoot + 'API_PutBucketLifecycle.html' }, // Deprecated, use `PutBucketLifecycleConfiguration`
  PutBucketLogging:                            { disabled, awsDoc: docRoot + 'API_PutBucketLogging.html' }, // Requires nested XML attributes
  PutBucketNotification:                       { disabled, awsDoc: docRoot + 'API_PutBucketNotification.html' }, // Deprecated, use `PutBucketNotificationConfiguration`
  PutObjectAcl:                                { disabled, awsDoc: docRoot + 'API_PutObjectAcl.html' },
  PutObjectLegalHold:                          { disabled, awsDoc: docRoot + 'API_PutObjectLegalHold.html' },
  PutObjectLockConfiguration:                  { disabled, awsDoc: docRoot + 'API_PutObjectLockConfiguration.html' },
  PutObjectRetention:                          { disabled, awsDoc: docRoot + 'API_PutObjectRetention.html' },
  PutObjectTagging:                            { disabled, awsDoc: docRoot + 'API_PutObjectTagging.html' },
  PutPublicAccessBlock:                        { disabled, awsDoc: docRoot + 'API_PutPublicAccessBlock.html' },
  RestoreObject:                               { disabled, awsDoc: docRoot + 'API_RestoreObject.html' },
  SelectObjectContent:                         { disabled, awsDoc: docRoot + 'API_SelectObjectContent.html' },
  UploadPartCopy:                              { disabled, awsDoc: docRoot + 'API_UploadPartCopy.html' },
  WriteGetObjectResponse:                      { disabled, awsDoc: docRoot + 'API_WriteGetObjectResponse.html' },
}
