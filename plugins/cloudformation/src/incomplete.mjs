const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/'
export default {
  DescribeStackResourceDrifts:       { disabled, awsDoc: docRoot + 'API_DescribeStackResourceDrifts.html' }, // TODO: verify
  DescribeTypeRegistration:          { disabled, awsDoc: docRoot + 'API_DescribeTypeRegistration.html' }, // TODO: verify
  ListStackInstanceResourceDrifts:   { disabled, awsDoc: docRoot + 'API_ListStackInstanceResourceDrifts.html' }, // TODO: verify
  ListStackSetAutoDeploymentTargets: { disabled, awsDoc: docRoot + 'API_ListStackSetAutoDeploymentTargets.html' }, // TODO: verify
  PublishType:                       { disabled, awsDoc: docRoot + 'API_PublishType.html' }, // TODO: verify
  RecordHandlerProgress:             { disabled, awsDoc: docRoot + 'API_RecordHandlerProgress.html' }, // Need to do some digging for documentation on this one
  SetTypeConfiguration:              { disabled, awsDoc: docRoot + 'API_SetTypeConfiguration.html' }, // TODO: verify
  UpdateStackSet:                    { disabled, awsDoc: docRoot + 'API_UpdateStackSet.html' }, // TODO: verify
}
