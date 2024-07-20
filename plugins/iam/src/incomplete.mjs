const disabled = true
const docRoot = 'https://docs.aws.amazon.com/IAM/latest/APIReference/'
export default {
  CreateSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_CreateSAMLProvider.html' },
  DeactivateMFADevice:                       { disabled, awsDoc: docRoot + 'API_DeactivateMFADevice.html' },
  DeleteSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_DeleteSAMLProvider.html' },
  EnableMFADevice:                           { disabled, awsDoc: docRoot + 'API_EnableMFADevice.html' },
  GetMFADevice:                              { disabled, awsDoc: docRoot + 'API_GetMFADevice.html' }, // TODO: test
  GetSAMLProvider:                           { disabled, awsDoc: docRoot + 'API_GetSAMLProvider.html' },
  GetServiceLinkedRoleDeletionStatus:        { disabled, awsDoc: docRoot + 'API_GetServiceLinkedRoleDeletionStatus.html' },
  ListMFADevices:                            { disabled, awsDoc: docRoot + 'API_ListMFADevices.html' },
  ListMFADeviceTags:                         { disabled, awsDoc: docRoot + 'API_ListMFADeviceTags.html' },
  ListSAMLProviders:                         { disabled, awsDoc: docRoot + 'API_ListSAMLProviders.html' },
  ListSAMLProviderTags:                      { disabled, awsDoc: docRoot + 'API_ListSAMLProviderTags.html' },
  ResyncMFADevice:                           { disabled, awsDoc: docRoot + 'API_ResyncMFADevice.html' },
  TagMFADevice:                              { disabled, awsDoc: docRoot + 'API_TagMFADevice.html' },
  TagSAMLProvider:                           { disabled, awsDoc: docRoot + 'API_TagSAMLProvider.html' },
  UntagMFADevice:                            { disabled, awsDoc: docRoot + 'API_UntagMFADevice.html' },
  UntagSAMLProvider:                         { disabled, awsDoc: docRoot + 'API_UntagSAMLProvider.html' },
  UpdateSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_UpdateSAMLProvider.html' },
}
