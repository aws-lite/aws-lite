const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AmazonS3/latest/API/'
export default {
  CreateSession:                               { disabled, awsDoc: docRoot + 'API_CreateSession.html' },
  GetBucketLifecycle:                          { disabled, awsDoc: docRoot + 'API_GetBucketLifecycle.html' }, // Deprecated, use `GetBucketLifecycleConfiguration`
  GetBucketNotification:                       { disabled, awsDoc: docRoot + 'API_GetBucketNotification.html' }, // Deprecated, use `GetBucketNotificationConfiguration`
  GetObjectAttributes:                         { disabled, awsDoc: docRoot + 'API_GetObjectAttributes.html' }, // Requires pagination cursor in headers
  ListDirectoryBuckets:                        { disabled, awsDoc: docRoot + 'API_ListDirectoryBuckets.html' },
  ListObjects:                                 { disabled, awsDoc: docRoot + 'API_ListObjects.html' },
  ListObjectVersions:                          { disabled, awsDoc: docRoot + 'API_ListObjectVersions.html' }, // Requires multiple paginator accumulators
  ListParts:                                   { disabled, awsDoc: docRoot + 'API_ListParts.html' }, // TODO: prevent paginator from deleting important fields (if needed)
  PutBucketAcl:                                { disabled, awsDoc: docRoot + 'API_PutBucketAcl.html' }, // Requires nested XML attributes
  PutBucketLifecycle:                          { disabled, awsDoc: docRoot + 'API_PutBucketLifecycle.html' }, // Deprecated, use `PutBucketLifecycleConfiguration`
  PutBucketLogging:                            { disabled, awsDoc: docRoot + 'API_PutBucketLogging.html' }, // Requires nested XML attributes
  PutBucketNotification:                       { disabled, awsDoc: docRoot + 'API_PutBucketNotification.html' }, // Deprecated, use `PutBucketNotificationConfiguration`
  PutObjectAcl:                                { disabled, awsDoc: docRoot + 'API_PutObjectAcl.html' }, // Requires nested XML attributes
  SelectObjectContent:                         { disabled, awsDoc: docRoot + 'API_SelectObjectContent.html' },
  UploadPartCopy:                              { disabled, awsDoc: docRoot + 'API_UploadPartCopy.html' },
  WriteGetObjectResponse:                      { disabled, awsDoc: docRoot + 'API_WriteGetObjectResponse.html' },
}
