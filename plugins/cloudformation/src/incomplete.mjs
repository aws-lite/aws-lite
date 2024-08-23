const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/'
export default {
  DescribeResourceScan:              { disabled, awsDoc: docRoot + 'API_DescribeResourceScan.html' }, // was missing
  DescribeTypeRegistration:          { disabled, awsDoc: docRoot + 'API_DescribeTypeRegistration.html' }, // TODO: verify
  GetGeneratedTemplate:              { disabled, awsDoc: docRoot + 'API_GetGeneratedTemplate.html' }, // was missing
  ListGeneratedTemplates:            { disabled, awsDoc: docRoot + 'API_ListGeneratedTemplates.html' }, // was missing
  ListResourceScanRelatedResources:  { disabled, awsDoc: docRoot + 'API_ListResourceScanRelatedResources.html' }, // was missing
  ListResourceScanResources:         { disabled, awsDoc: docRoot + 'API_ListResourceScanResources.html' }, // was missing
  ListResourceScans:                 { disabled, awsDoc: docRoot + 'API_ListResourceScans.html' }, // was missing
  ListStackInstanceResourceDrifts:   { disabled, awsDoc: docRoot + 'API_ListStackInstanceResourceDrifts.html' }, // TODO: verify
  PublishType:                       { disabled, awsDoc: docRoot + 'API_PublishType.html' }, // TODO: verify
  RecordHandlerProgress:             { disabled, awsDoc: docRoot + 'API_RecordHandlerProgress.html' }, // Need to do some digging for documentation on this one
  SetTypeConfiguration:              { disabled, awsDoc: docRoot + 'API_SetTypeConfiguration.html' }, // TODO: verify
  StartResourceScan:                 { disabled, awsDoc: docRoot + 'API_StartResourceScan.html' },
  UpdateStackSet:                    { disabled, awsDoc: docRoot + 'API_UpdateStackSet.html' }, // TODO: verify
}
