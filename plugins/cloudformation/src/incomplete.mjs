const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/'
export default {
  // TODO: DescribeResourceScan
  DescribeTypeRegistration:          { disabled, awsDoc: docRoot + 'API_DescribeTypeRegistration.html' }, // TODO: verify
  // TODO: GetGeneratedTemplate
  // TODO: ListGeneratedTemplates
  // TODO: ListResourceScanRelatedResources
  // TODO: ListResourceScanResources
  // TODO: ListResourceScans
  ListStackInstanceResourceDrifts:   { disabled, awsDoc: docRoot + 'API_ListStackInstanceResourceDrifts.html' }, // TODO: verify
  PublishType:                       { disabled, awsDoc: docRoot + 'API_PublishType.html' }, // TODO: verify
  RecordHandlerProgress:             { disabled, awsDoc: docRoot + 'API_RecordHandlerProgress.html' }, // Need to do some digging for documentation on this one
  SetTypeConfiguration:              { disabled, awsDoc: docRoot + 'API_SetTypeConfiguration.html' },
  SetTypeDefaultVersion:             { disabled, awsDoc: docRoot + 'API_SetTypeDefaultVersion.html' },
  SignalResource:                    { disabled, awsDoc: docRoot + 'API_SignalResource.html' },
  StopStackSetOperation:             { disabled, awsDoc: docRoot + 'API_StopStackSetOperation.html' },
  TestType:                          { disabled, awsDoc: docRoot + 'API_TestType.html' },
  UpdateStackSet:                    { disabled, awsDoc: docRoot + 'API_UpdateStackSet.html' },
}
