const disabled = true
const docRoot = 'https://docs.aws.amazon.com/IAM/latest/APIReference/'
export default {
  CreatePolicyVersion:                       { disabled, awsDoc: docRoot + 'API_CreatePolicyVersion.html' }, // TODO: figure out why this returns status code 302
  CreateSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_CreateSAMLProvider.html' },
  CreateVirtualMFADevice:                    { disabled, awsDoc: docRoot + 'API_CreateVirtualMFADevice.html' },
  DeactivateMFADevice:                       { disabled, awsDoc: docRoot + 'API_DeactivateMFADevice.html' },
  DeleteSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_DeleteSAMLProvider.html' },
  DeleteServerCertificate:                   { disabled, awsDoc: docRoot + 'API_DeleteServerCertificate.html' },
  DeleteVirtualMFADevice:                    { disabled, awsDoc: docRoot + 'API_DeleteVirtualMFADevice.html' },
  EnableMFADevice:                           { disabled, awsDoc: docRoot + 'API_EnableMFADevice.html' },
  GetGroupPolicy:                            { disabled, awsDoc: docRoot + 'API_GetGroupPolicy.html' }, // TODO: find out why response is mangled
  GetMFADevice:                              { disabled, awsDoc: docRoot + 'API_GetMFADevice.html' }, // TODO: test
  GetOpenIDConnectProvider:                  { disabled, awsDoc: docRoot + 'API_GetOpenIDConnectProvider.html' }, // TODO: test
  GetRolePolicy:                             { disabled, awsDoc: docRoot + 'API_GetRolePolicy.html' }, // TODO: figure out why response is mangled
  GetSAMLProvider:                           { disabled, awsDoc: docRoot + 'API_GetSAMLProvider.html' },
  GetServerCertificate:                      { disabled, awsDoc: docRoot + 'API_GetServerCertificate.html' },
  GetServiceLinkedRoleDeletionStatus:        { disabled, awsDoc: docRoot + 'API_GetServiceLinkedRoleDeletionStatus.html' },
  ListMFADevices:                            { disabled, awsDoc: docRoot + 'API_ListMFADevices.html' },
  ListMFADeviceTags:                         { disabled, awsDoc: docRoot + 'API_ListMFADeviceTags.html' },
  ListOpenIDConnectProviders:                { disabled, awsDoc: docRoot + 'API_ListOpenIDConnectProviders.html' },
  ListOpenIDConnectProviderTags:             { disabled, awsDoc: docRoot + 'API_ListOpenIDConnectProviderTags.html' },
  // ListPoliciesGrantingServiceAccess:         { disabled, awsDoc: docRoot + 'API_ListPoliciesGrantingServiceAccess.html' },
  ListSAMLProviders:                         { disabled, awsDoc: docRoot + 'API_ListSAMLProviders.html' },
  ListSAMLProviderTags:                      { disabled, awsDoc: docRoot + 'API_ListSAMLProviderTags.html' },
  ListServerCertificates:                    { disabled, awsDoc: docRoot + 'API_ListServerCertificates.html' },
  ListServerCertificateTags:                 { disabled, awsDoc: docRoot + 'API_ListServerCertificateTags.html' },
  ListVirtualMFADevices:                     { disabled, awsDoc: docRoot + 'API_ListVirtualMFADevices.html' },
  RemoveClientIDFromOpenIDConnectProvider:   { disabled, awsDoc: docRoot + 'API_RemoveClientIDFromOpenIDConnectProvider.html' },
  ResyncMFADevice:                           { disabled, awsDoc: docRoot + 'API_ResyncMFADevice.html' },
  SetSecurityTokenServicePreferences:        { disabled, awsDoc: docRoot + 'API_SetSecurityTokenServicePreferences.html' },
  // SimulateCustomPolicy:                      { disabled, awsDoc: docRoot + 'API_SimulateCustomPolicy.html' },
  // SimulatePrincipalPolicy:                   { disabled, awsDoc: docRoot + 'API_SimulatePrincipalPolicy.html' },
  TagMFADevice:                              { disabled, awsDoc: docRoot + 'API_TagMFADevice.html' },
  TagOpenIDConnectProvider:                  { disabled, awsDoc: docRoot + 'API_TagOpenIDConnectProvider.html' },
  TagSAMLProvider:                           { disabled, awsDoc: docRoot + 'API_TagSAMLProvider.html' },
  TagServerCertificate:                      { disabled, awsDoc: docRoot + 'API_TagServerCertificate.html' },
  UntagMFADevice:                            { disabled, awsDoc: docRoot + 'API_UntagMFADevice.html' },
  UntagOpenIDConnectProvider:                { disabled, awsDoc: docRoot + 'API_UntagOpenIDConnectProvider.html' },
  UntagSAMLProvider:                         { disabled, awsDoc: docRoot + 'API_UntagSAMLProvider.html' },
  UntagServerCertificate:                    { disabled, awsDoc: docRoot + 'API_UntagServerCertificate.html' },
  UpdateOpenIDConnectProviderThumbprint:     { disabled, awsDoc: docRoot + 'API_UpdateOpenIDConnectProviderThumbprint.html' },
  UpdateSAMLProvider:                        { disabled, awsDoc: docRoot + 'API_UpdateSAMLProvider.html' },
  UpdateServerCertificate:                   { disabled, awsDoc: docRoot + 'API_UpdateServerCertificate.html' },
  UploadServerCertificate:                   { disabled, awsDoc: docRoot + 'API_UploadServerCertificate.html' },
}
