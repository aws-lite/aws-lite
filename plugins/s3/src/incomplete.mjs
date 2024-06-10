const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AmazonS3/latest/API/'
export default {
  CopyObject:                                  { disabled, awsDoc: docRoot + 'API_CopyObject.html' },
  CreateSession:                               { disabled, awsDoc: docRoot + 'API_CreateSession.html' },
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
  ListDirectoryBuckets:                        { disabled, awsDoc: docRoot + 'API_ListDirectoryBuckets.html' },
  ListObjects:                                 { disabled, awsDoc: docRoot + 'API_ListObjects.html' },
  ListObjectVersions:                          { disabled, awsDoc: docRoot + 'API_ListObjectVersions.html' },
  ListParts:                                   { disabled, awsDoc: docRoot + 'API_ListParts.html' },
  PutBucketAcl:                                { disabled, awsDoc: docRoot + 'API_PutBucketAcl.html' }, // Requires nested XML attributes
  PutBucketLifecycle:                          { disabled, awsDoc: docRoot + 'API_PutBucketLifecycle.html' }, // Deprecated, use `PutBucketLifecycleConfiguration`
  PutBucketLogging:                            { disabled, awsDoc: docRoot + 'API_PutBucketLogging.html' }, // Requires nested XML attributes
  PutBucketNotification:                       { disabled, awsDoc: docRoot + 'API_PutBucketNotification.html' }, // Deprecated, use `PutBucketNotificationConfiguration`
  PutObjectAcl:                                { disabled, awsDoc: docRoot + 'API_PutObjectAcl.html' }, // Requires nested XML attributes
  PutPublicAccessBlock:                        { disabled, awsDoc: docRoot + 'API_PutPublicAccessBlock.html' },
  RestoreObject:                               { disabled, awsDoc: docRoot + 'API_RestoreObject.html' },
  SelectObjectContent:                         { disabled, awsDoc: docRoot + 'API_SelectObjectContent.html' },
  UploadPartCopy:                              { disabled, awsDoc: docRoot + 'API_UploadPartCopy.html' },
  WriteGetObjectResponse:                      { disabled, awsDoc: docRoot + 'API_WriteGetObjectResponse.html' },
}
