const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/'
export default {
  DescribeChangeSet:                 { disabled, awsDoc: docRoot + 'API_DescribeChangeSet.html' }, // TODO: test
  DescribeChangeSetHooks:            { disabled, awsDoc: docRoot + 'API_DescribeChangeSetHooks.html' }, // TODO: test
  DescribeStackDriftDetectionStatus: { disabled, awsDoc: docRoot + 'API_DescribeStackDriftDetectionStatus.html' }, // TODO: test
  DescribeStackResource:             { disabled, awsDoc: docRoot + 'API_DescribeStackResource.html' }, // TODO: test
  // TODO: DescribeResourceScan
  DescribeStackResourceDrifts:       { disabled, awsDoc: docRoot + 'API_DescribeStackResourceDrifts.html' }, // TODO: test
  DescribeTypeRegistration:          { disabled, awsDoc: docRoot + 'API_DescribeTypeRegistration.html' }, // TODO: test
  DetectStackDrift:                  { disabled, awsDoc: docRoot + 'API_DetectStackDrift.html' }, // TODO: test
  DetectStackResourceDrift:          { disabled, awsDoc: docRoot + 'API_DetectStackResourceDrift.html' }, // TODO: test
  // TODO: GetGeneratedTemplate
  GetTemplateSummary:                { disabled, awsDoc: docRoot + 'API_GetTemplateSummary.html' },
  ImportStacksToStackSet:            { disabled, awsDoc: docRoot + 'API_ImportStacksToStackSet.html' },
  ListChangeSets:                    { disabled, awsDoc: docRoot + 'API_ListChangeSets.html' },
  ListExports:                       { disabled, awsDoc: docRoot + 'API_ListExports.html' },
  ListImports:                       { disabled, awsDoc: docRoot + 'API_ListImports.html' },
  ListStackInstanceResourceDrifts:   { disabled, awsDoc: docRoot + 'API_ListStackInstanceResourceDrifts.html' },
  ListTypeRegistrations:             { disabled, awsDoc: docRoot + 'API_ListTypeRegistrations.html' }, // TODO: test
  ListTypeVersions:                  { disabled, awsDoc: docRoot + 'API_ListTypeVersions.html' },
  PublishType:                       { disabled, awsDoc: docRoot + 'API_PublishType.html' },
  RecordHandlerProgress:             { disabled, awsDoc: docRoot + 'API_RecordHandlerProgress.html' },
  RegisterPublisher:                 { disabled, awsDoc: docRoot + 'API_RegisterPublisher.html' },
  RollbackStack:                     { disabled, awsDoc: docRoot + 'API_RollbackStack.html' },
  SetStackPolicy:                    { disabled, awsDoc: docRoot + 'API_SetStackPolicy.html' },
  SetTypeConfiguration:              { disabled, awsDoc: docRoot + 'API_SetTypeConfiguration.html' },
  SetTypeDefaultVersion:             { disabled, awsDoc: docRoot + 'API_SetTypeDefaultVersion.html' },
  SignalResource:                    { disabled, awsDoc: docRoot + 'API_SignalResource.html' },
  StopStackSetOperation:             { disabled, awsDoc: docRoot + 'API_StopStackSetOperation.html' },
  TestType:                          { disabled, awsDoc: docRoot + 'API_TestType.html' },
  UpdateStackSet:                    { disabled, awsDoc: docRoot + 'API_UpdateStackSet.html' },
  ValidateTemplate:                  { disabled, awsDoc: docRoot + 'API_ValidateTemplate.html' },
}
