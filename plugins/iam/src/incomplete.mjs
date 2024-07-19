const disabled = true
const docRoot = 'https://docs.aws.amazon.com/IAM/latest/APIReference/'
export default {
  CreatePolicyVersion:                       { disabled, awsDoc: docRoot + 'API_CreatePolicyVersion.html' }, // TODO: figure out why this returns status code 302
  CreateSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_CreateSAMLProvider.html' },
  CreateVirtualMFADevice:                    { disabled, awsDoc: docRoot + 'API_CreateVirtualMFADevice.html' },
  DeactivateMFADevice:                       { disabled, awsDoc: docRoot + 'API_DeactivateMFADevice.html' },
  DeleteSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_DeleteSAMLProvider.html' },
  DeleteVirtualMFADevice:                    { disabled, awsDoc: docRoot + 'API_DeleteVirtualMFADevice.html' },
  EnableMFADevice:                           { disabled, awsDoc: docRoot + 'API_EnableMFADevice.html' },
  GetMFADevice:                              { disabled, awsDoc: docRoot + 'API_GetMFADevice.html' }, // TODO: test
  GetSAMLProvider:                           { disabled, awsDoc: docRoot + 'API_GetSAMLProvider.html' },
  GetServiceLinkedRoleDeletionStatus:        { disabled, awsDoc: docRoot + 'API_GetServiceLinkedRoleDeletionStatus.html' },
  ListMFADevices:                            { disabled, awsDoc: docRoot + 'API_ListMFADevices.html' },
  ListMFADeviceTags:                         { disabled, awsDoc: docRoot + 'API_ListMFADeviceTags.html' },
  ListSAMLProviders:                         { disabled, awsDoc: docRoot + 'API_ListSAMLProviders.html' },
  ListSAMLProviderTags:                      { disabled, awsDoc: docRoot + 'API_ListSAMLProviderTags.html' },
  ListServerCertificateTags:                 { disabled, awsDoc: docRoot + 'API_ListServerCertificateTags.html' },
  ListVirtualMFADevices:                     { disabled, awsDoc: docRoot + 'API_ListVirtualMFADevices.html' },
  ResyncMFADevice:                           { disabled, awsDoc: docRoot + 'API_ResyncMFADevice.html' },
  SetSecurityTokenServicePreferences:        { disabled, awsDoc: docRoot + 'API_SetSecurityTokenServicePreferences.html' },
  TagMFADevice:                              { disabled, awsDoc: docRoot + 'API_TagMFADevice.html' },
  TagSAMLProvider:                           { disabled, awsDoc: docRoot + 'API_TagSAMLProvider.html' },
  TagServerCertificate:                      { disabled, awsDoc: docRoot + 'API_TagServerCertificate.html' },
  UntagMFADevice:                            { disabled, awsDoc: docRoot + 'API_UntagMFADevice.html' },
  UntagSAMLProvider:                         { disabled, awsDoc: docRoot + 'API_UntagSAMLProvider.html' },
  UntagServerCertificate:                    { disabled, awsDoc: docRoot + 'API_UntagServerCertificate.html' },
  UpdateSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_UpdateSAMLProvider.html' },
  UpdateServerCertificate:                   { disabled, awsDoc: docRoot + 'API_UpdateServerCertificate.html' },
}
