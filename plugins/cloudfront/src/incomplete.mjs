const disabled = true
const docRoot = 'https://docs.aws.amazon.com/cloudfront/latest/APIReference/'
export default {
  CreateDistributionWithTags:                 { disabled, awsDoc: docRoot + 'API_CreateDistributionWithTags.html' }, // TODO: verify
  CreateRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_CreateRealtimeLogConfig.html' }, // TODO: verify
  CreateStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_CreateStreamingDistribution.html' }, // TODO: figure out why `rate exceeded` error happens
  CreateStreamingDistributionWithTags:        { disabled, awsDoc: docRoot + 'API_CreateStreamingDistributionWithTags.html' }, // TODO: figure out why `rate exceeded` error happens
  DeleteRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_DeleteRealtimeLogConfig.html' }, // TODO: verify
  DeleteStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_DeleteStreamingDistribution.html' }, // TODO: verify
  GetRealtimeLogConfig:                       { disabled, awsDoc: docRoot + 'API_GetRealtimeLogConfig.html' }, // TODO: verify
  GetStreamingDistribution:                   { disabled, awsDoc: docRoot + 'API_GetStreamingDistribution.html' }, // TODO: verify
  GetStreamingDistributionConfig:             { disabled, awsDoc: docRoot + 'API_GetStreamingDistributionConfig.html' }, // TODO: verify
  ListDistributionsByRealtimeLogConfig:       { disabled, awsDoc: docRoot + 'API_ListDistributionsByRealtimeLogConfig.html' }, // TODO: verify
  ListDistributionsByWebACLId:                { disabled, awsDoc: docRoot + 'API_ListDistributionsByWebACLId.html' }, // TODO: verify
  ListRealtimeLogConfigs:                     { disabled, awsDoc: docRoot + 'API_ListRealtimeLogConfigs.html' }, // TODO: verify
  ListStreamingDistributions:                 { disabled, awsDoc: docRoot + 'API_ListStreamingDistributions.html' }, // TODO: verify
  PublishFunction:                            { disabled, awsDoc: docRoot + 'API_PublishFunction.html' }, // TODO: verify
  UpdateDistributionWithStagingConfig:        { disabled, awsDoc: docRoot + 'API_UpdateDistributionWithStagingConfig.html' }, // TODO: verify
  UpdateRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_UpdateRealtimeLogConfig.html' }, // TODO: verify
  UpdateStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_UpdateStreamingDistribution.html' }, // TODO: verify
}
