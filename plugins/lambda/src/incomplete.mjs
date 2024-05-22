const disabled = true
const docRoot = 'https://docs.aws.amazon.com/lambda/latest/dg/'
export default {
  InvokeWithResponseStream:           { disabled, awsDoc: docRoot + 'API_InvokeWithResponseStream.html' },
  RemoveLayerVersionPermission:       { disabled, awsDoc: docRoot + 'API_RemoveLayerVersionPermission.html' },
  RemovePermission:                   { disabled, awsDoc: docRoot + 'API_RemovePermission.html' },
  TagResource:                        { disabled, awsDoc: docRoot + 'API_TagResource.html' },
  UntagResource:                      { disabled, awsDoc: docRoot + 'API_UntagResource.html' },
  UpdateCodeSigningConfig:            { disabled, awsDoc: docRoot + 'API_UpdateCodeSigningConfig.html' },
  UpdateEventSourceMapping:           { disabled, awsDoc: docRoot + 'API_UpdateEventSourceMapping.html' },
  UpdateFunctionEventInvokeConfig:    { disabled, awsDoc: docRoot + 'API_UpdateFunctionEventInvokeConfig.html' },
  UpdateFunctionUrlConfig:            { disabled, awsDoc: docRoot + 'API_UpdateFunctionUrlConfig.html' },
}
