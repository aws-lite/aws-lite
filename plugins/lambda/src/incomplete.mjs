const disabled = true
const docRoot = 'https://docs.aws.amazon.com/lambda/latest/dg/'
export default {
  InvokeWithResponseStream:           { disabled, awsDoc: docRoot + 'API_InvokeWithResponseStream.html' },
  ListTags:                           { disabled, awsDoc: docRoot + 'API_ListTags.html' },
  ListVersionsByFunction:             { disabled, awsDoc: docRoot + 'API_ListVersionsByFunction.html' },
  PublishLayerVersion:                { disabled, awsDoc: docRoot + 'API_PublishLayerVersion.html' },
  PublishVersion:                     { disabled, awsDoc: docRoot + 'API_PublishVersion.html' },
  PutFunctionCodeSigningConfig:       { disabled, awsDoc: docRoot + 'API_PutFunctionCodeSigningConfig.html' },
  PutFunctionEventInvokeConfig:       { disabled, awsDoc: docRoot + 'API_PutFunctionEventInvokeConfig.html' },
  PutProvisionedConcurrencyConfig:    { disabled, awsDoc: docRoot + 'API_PutProvisionedConcurrencyConfig.html' },
  PutRuntimeManagementConfig:         { disabled, awsDoc: docRoot + 'API_PutRuntimeManagementConfig.html' },
  RemoveLayerVersionPermission:       { disabled, awsDoc: docRoot + 'API_RemoveLayerVersionPermission.html' },
  RemovePermission:                   { disabled, awsDoc: docRoot + 'API_RemovePermission.html' },
  TagResource:                        { disabled, awsDoc: docRoot + 'API_TagResource.html' },
  UntagResource:                      { disabled, awsDoc: docRoot + 'API_UntagResource.html' },
  UpdateCodeSigningConfig:            { disabled, awsDoc: docRoot + 'API_UpdateCodeSigningConfig.html' },
  UpdateEventSourceMapping:           { disabled, awsDoc: docRoot + 'API_UpdateEventSourceMapping.html' },
  UpdateFunctionEventInvokeConfig:    { disabled, awsDoc: docRoot + 'API_UpdateFunctionEventInvokeConfig.html' },
  UpdateFunctionUrlConfig:            { disabled, awsDoc: docRoot + 'API_UpdateFunctionUrlConfig.html' },
}
