const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/'
export default {
  DescribeChangeSet:                 { disabled, awsDoc: docRoot + 'API_DescribeChangeSet.html' }, // TODO: verify
  DescribeChangeSetHooks:            { disabled, awsDoc: docRoot + 'API_DescribeChangeSetHooks.html' }, // TODO: verify
  DescribeStackDriftDetectionStatus: { disabled, awsDoc: docRoot + 'API_DescribeStackDriftDetectionStatus.html' }, // TODO: verify
  DescribeStackResource:             { disabled, awsDoc: docRoot + 'API_DescribeStackResource.html' }, // TODO: verify
  // TODO: DescribeResourceScan
  DescribeStackResourceDrifts:       { disabled, awsDoc: docRoot + 'API_DescribeStackResourceDrifts.html' }, // TODO: verify
  DescribeTypeRegistration:          { disabled, awsDoc: docRoot + 'API_DescribeTypeRegistration.html' }, // TODO: verify
  DetectStackDrift:                  { disabled, awsDoc: docRoot + 'API_DetectStackDrift.html' }, // TODO: verify
  DetectStackResourceDrift:          { disabled, awsDoc: docRoot + 'API_DetectStackResourceDrift.html' }, // TODO: verify
  // TODO: GetGeneratedTemplate
  ImportStacksToStackSet:            { disabled, awsDoc: docRoot + 'API_ImportStacksToStackSet.html' }, // TODO: verify
  // TODO: ListGeneratedTemplates
  ListImports:                       { disabled, awsDoc: docRoot + 'API_ListImports.html' }, // TODO: verify
  // TODO: ListResourceScanRelatedResources
  // TODO: ListResourceScanResources
  // TODO: ListResourceScans
  ListStackInstanceResourceDrifts:   { disabled, awsDoc: docRoot + 'API_ListStackInstanceResourceDrifts.html' }, // TODO: verify
  PublishType:                       { disabled, awsDoc: docRoot + 'API_PublishType.html' }, // TODO: verify
  RecordHandlerProgress:             { disabled, awsDoc: docRoot + 'API_RecordHandlerProgress.html' }, // Need to do some digging for documentation on this one
  SetStackPolicy:                    { disabled, awsDoc: docRoot + 'API_SetStackPolicy.html' },
  SetTypeConfiguration:              { disabled, awsDoc: docRoot + 'API_SetTypeConfiguration.html' },
  SetTypeDefaultVersion:             { disabled, awsDoc: docRoot + 'API_SetTypeDefaultVersion.html' },
  SignalResource:                    { disabled, awsDoc: docRoot + 'API_SignalResource.html' },
  StopStackSetOperation:             { disabled, awsDoc: docRoot + 'API_StopStackSetOperation.html' },
  TestType:                          { disabled, awsDoc: docRoot + 'API_TestType.html' },
  UpdateStackSet:                    { disabled, awsDoc: docRoot + 'API_UpdateStackSet.html' },
  ValidateTemplate:                  { disabled, awsDoc: docRoot + 'API_ValidateTemplate.html' },
}
