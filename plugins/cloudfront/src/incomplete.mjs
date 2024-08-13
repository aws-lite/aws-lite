const disabled = true
const docRoot = 'https://docs.aws.amazon.com/cloudfront/latest/APIReference/'
export default {
  CreateDistributionWithTags:                 { disabled, awsDoc: docRoot + 'API_CreateDistributionWithTags.html' }, // TODO: test
  CreateRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_CreateRealtimeLogConfig.html' }, // TODO: test
  CreateStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_CreateStreamingDistribution.html' },
  CreateStreamingDistributionWithTags:        { disabled, awsDoc: docRoot + 'API_CreateStreamingDistributionWithTags.html' },
  DeleteRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_DeleteRealtimeLogConfig.html' },
  DeleteStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_DeleteStreamingDistribution.html' },
  GetInvalidation:                            { disabled, awsDoc: docRoot + 'API_GetInvalidation.html' }, // TODO: test
  GetRealtimeLogConfig:                       { disabled, awsDoc: docRoot + 'API_GetRealtimeLogConfig.html' },
  GetStreamingDistribution:                   { disabled, awsDoc: docRoot + 'API_GetStreamingDistribution.html' },
  GetStreamingDistributionConfig:             { disabled, awsDoc: docRoot + 'API_GetStreamingDistributionConfig.html' },
  ListDistributionsByCachePolicyId:           { disabled, awsDoc: docRoot + 'API_ListDistributionsByCachePolicyId.html' },
  ListDistributionsByKeyGroup:                { disabled, awsDoc: docRoot + 'API_ListDistributionsByKeyGroup.html' },
  ListDistributionsByOriginRequestPolicyId:   { disabled, awsDoc: docRoot + 'API_ListDistributionsByOriginRequestPolicyId.html' },
  ListDistributionsByRealtimeLogConfig:       { disabled, awsDoc: docRoot + 'API_ListDistributionsByRealtimeLogConfig.html' },
  ListDistributionsByResponseHeadersPolicyId: { disabled, awsDoc: docRoot + 'API_ListDistributionsByResponseHeadersPolicyId.html' },
  ListDistributionsByWebACLId:                { disabled, awsDoc: docRoot + 'API_ListDistributionsByWebACLId.html' },
  ListInvalidations:                          { disabled, awsDoc: docRoot + 'API_ListInvalidations.html' }, // TODO: test
  ListRealtimeLogConfigs:                     { disabled, awsDoc: docRoot + 'API_ListRealtimeLogConfigs.html' },
  ListStreamingDistributions:                 { disabled, awsDoc: docRoot + 'API_ListStreamingDistributions.html' },
  ListTagsForResource:                        { disabled, awsDoc: docRoot + 'API_ListTagsForResource.html' },
  PublishFunction:                            { disabled, awsDoc: docRoot + 'API_PublishFunction.html' },
  TagResource:                                { disabled, awsDoc: docRoot + 'API_TagResource.html' }, // TODO: determine correct params/formatting, docs are broken
  UntagResource:                              { disabled, awsDoc: docRoot + 'API_UntagResource.html' },
  UpdateDistributionWithStagingConfig:        { disabled, awsDoc: docRoot + 'API_UpdateDistributionWithStagingConfig.html' },
  UpdateRealtimeLogConfig:                    { disabled, awsDoc: docRoot + 'API_UpdateRealtimeLogConfig.html' },
  UpdateStreamingDistribution:                { disabled, awsDoc: docRoot + 'API_UpdateStreamingDistribution.html' },
}
