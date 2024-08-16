const disabled = true
const docRoot = 'https://docs.aws.amazon.com/cloudfront/latest/APIReference/'
export default {
  CreateDistributionWithTags:                 { disabled, awsDoc: docRoot + 'API_CreateDistributionWithTags.html' }, // TODO: test
  CreateRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_CreateRealtimeLogConfig.html' }, // TODO: test
  CreateStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_CreateStreamingDistribution.html' },
  CreateStreamingDistributionWithTags:        { disabled, awsDoc: docRoot + 'API_CreateStreamingDistributionWithTags.html' },
  DeleteRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_DeleteRealtimeLogConfig.html' },
  DeleteStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_DeleteStreamingDistribution.html' },
  GetRealtimeLogConfig:                       { disabled, awsDoc: docRoot + 'API_GetRealtimeLogConfig.html' },
  GetStreamingDistribution:                   { disabled, awsDoc: docRoot + 'API_GetStreamingDistribution.html' },
  GetStreamingDistributionConfig:             { disabled, awsDoc: docRoot + 'API_GetStreamingDistributionConfig.html' },
  ListDistributionsByRealtimeLogConfig:       { disabled, awsDoc: docRoot + 'API_ListDistributionsByRealtimeLogConfig.html' },
  ListDistributionsByWebACLId:                { disabled, awsDoc: docRoot + 'API_ListDistributionsByWebACLId.html' },
  ListRealtimeLogConfigs:                     { disabled, awsDoc: docRoot + 'API_ListRealtimeLogConfigs.html' },
  ListStreamingDistributions:                 { disabled, awsDoc: docRoot + 'API_ListStreamingDistributions.html' },
  PublishFunction:                            { disabled, awsDoc: docRoot + 'API_PublishFunction.html' },
  UpdateDistributionWithStagingConfig:        { disabled, awsDoc: docRoot + 'API_UpdateDistributionWithStagingConfig.html' },
  UpdateRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_UpdateRealtimeLogConfig.html' },
  UpdateStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_UpdateStreamingDistribution.html' },
}
