import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AssociateAliasCommandOutput as AssociateAliasResponse,
  CopyDistributionCommandOutput as CopyDistributionResponse,
  CreateCachePolicyCommandOutput as CreateCachePolicyResponse,
  CreateCloudFrontOriginAccessIdentityCommandOutput as CreateCloudFrontOriginAccessIdentityResponse,
  CreateContinuousDeploymentPolicyCommandOutput as CreateContinuousDeploymentPolicyResponse,
  CreateDistributionCommandOutput as CreateDistributionResponse,
  CreateFieldLevelEncryptionConfigCommandOutput as CreateFieldLevelEncryptionConfigResponse,
  CreateFieldLevelEncryptionProfileCommandOutput as CreateFieldLevelEncryptionProfileResponse,
  CreateFunctionCommandOutput as CreateFunctionResponse,
  CreateInvalidationCommandOutput as CreateInvalidationResponse,
  CreateKeyGroupCommandOutput as CreateKeyGroupResponse,
  CreateKeyValueStoreCommandOutput as CreateKeyValueStoreResponse,
  CreateMonitoringSubscriptionCommandOutput as CreateMonitoringSubscriptionResponse,
  CreateOriginAccessControlCommandOutput as CreateOriginAccessControlResponse,
  CreateOriginRequestPolicyCommandOutput as CreateOriginRequestPolicyResponse,
  CreatePublicKeyCommandOutput as CreatePublicKeyResponse,
  CreateResponseHeadersPolicyCommandOutput as CreateResponseHeadersPolicyResponse,
  DeleteCachePolicyCommandOutput as DeleteCachePolicyResponse,
  DeleteCloudFrontOriginAccessIdentityCommandOutput as DeleteCloudFrontOriginAccessIdentityResponse,
  DeleteContinuousDeploymentPolicyCommandOutput as DeleteContinuousDeploymentPolicyResponse,
  DeleteDistributionCommandOutput as DeleteDistributionResponse,
  DeleteFieldLevelEncryptionConfigCommandOutput as DeleteFieldLevelEncryptionConfigResponse,
  DeleteFieldLevelEncryptionProfileCommandOutput as DeleteFieldLevelEncryptionProfileResponse,
  DeleteFunctionCommandOutput as DeleteFunctionResponse,
  DeleteKeyGroupCommandOutput as DeleteKeyGroupResponse,
  DeleteKeyValueStoreCommandOutput as DeleteKeyValueStoreResponse,
  DeleteMonitoringSubscriptionCommandOutput as DeleteMonitoringSubscriptionResponse,
  DeleteOriginAccessControlCommandOutput as DeleteOriginAccessControlResponse,
  DeleteOriginRequestPolicyCommandOutput as DeleteOriginRequestPolicyResponse,
  DeletePublicKeyCommandOutput as DeletePublicKeyResponse,
  DeleteResponseHeadersPolicyCommandOutput as DeleteResponseHeadersPolicyResponse,
  DescribeFunctionCommandOutput as DescribeFunctionResponse,
  DescribeKeyValueStoreCommandOutput as DescribeKeyValueStoreResponse,
  GetCachePolicyCommandOutput as GetCachePolicyResponse,
  GetCachePolicyConfigCommandOutput as GetCachePolicyConfigResponse,
  GetCloudFrontOriginAccessIdentityCommandOutput as GetCloudFrontOriginAccessIdentityResponse,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput as GetCloudFrontOriginAccessIdentityConfigResponse,
  GetContinuousDeploymentPolicyCommandOutput as GetContinuousDeploymentPolicyResponse,
  GetContinuousDeploymentPolicyConfigCommandOutput as GetContinuousDeploymentPolicyConfigResponse,
  GetDistributionCommandOutput as GetDistributionResponse,
  GetDistributionConfigCommandOutput as GetDistributionConfigResponse,
  GetFieldLevelEncryptionCommandOutput as GetFieldLevelEncryptionResponse,
  GetFieldLevelEncryptionConfigCommandOutput as GetFieldLevelEncryptionConfigResponse,
  GetFieldLevelEncryptionProfileCommandOutput as GetFieldLevelEncryptionProfileResponse,
  GetFieldLevelEncryptionProfileConfigCommandOutput as GetFieldLevelEncryptionProfileConfigResponse,
  GetFunctionCommandOutput as GetFunctionResponse,
  GetInvalidationCommandOutput as GetInvalidationResponse,
  GetKeyGroupCommandOutput as GetKeyGroupResponse,
  GetKeyGroupConfigCommandOutput as GetKeyGroupConfigResponse,
  GetOriginAccessControlCommandOutput as GetOriginAccessControlResponse,
  GetOriginAccessControlConfigCommandOutput as GetOriginAccessControlConfigResponse,
  GetOriginRequestPolicyCommandOutput as GetOriginRequestPolicyResponse,
  GetOriginRequestPolicyConfigCommandOutput as GetOriginRequestPolicyConfigResponse,
  GetMonitoringSubscriptionCommandOutput as GetMonitoringSubscriptionResponse,
  GetPublicKeyCommandOutput as GetPublicKeyResponse,
  GetPublicKeyConfigCommandOutput as GetPublicKeyConfigResponse,
  GetResponseHeadersPolicyCommandOutput as GetResponseHeadersPolicyResponse,
  GetResponseHeadersPolicyConfigCommandOutput as GetResponseHeadersPolicyConfigResponse,
  ListCachePoliciesCommandOutput as ListCachePoliciesResponse,
  ListCloudFrontOriginAccessIdentitiesCommandOutput as ListCloudFrontOriginAccessIdentitiesResponse,
  ListConflictingAliasesCommandOutput as ListConflictingAliasesResponse,
  ListContinuousDeploymentPoliciesCommandOutput as ListContinuousDeploymentPoliciesResponse,
  ListDistributionsCommandOutput as ListDistributionsResponse,
  ListFieldLevelEncryptionConfigsCommandOutput as ListFieldLevelEncryptionConfigsResponse,
  ListFieldLevelEncryptionProfilesCommandOutput as ListFieldLevelEncryptionProfilesResponse,
  ListFunctionsCommandOutput as ListFunctionsResponse,
  ListInvalidationsCommandOutput as ListInvalidationsResponse,
  ListKeyGroupsCommandOutput as ListKeyGroupsResponse,
  ListKeyValueStoresCommandOutput as ListKeyValueStoresResponse,
  ListOriginAccessControlsCommandOutput as ListOriginAccessControlsResponse,
  ListOriginRequestPoliciesCommandOutput as ListOriginRequestPoliciesResponse,
  ListPublicKeysCommandOutput as ListPublicKeysResponse,
  ListResponseHeadersPoliciesCommandOutput as ListResponseHeadersPoliciesResponse,
  ListTagsForResourceCommandOutput as ListTagsForResourceResponse,
  TagResourceCommandOutput as TagResourceResponse,
  TestFunctionCommandOutput as TestFunctionResponse,
  UntagResourceCommandOutput as UntagResourceResponse,
  UpdateCachePolicyCommandOutput as UpdateCachePolicyResponse,
  UpdateCloudFrontOriginAccessIdentityCommandOutput as UpdateCloudFrontOriginAccessIdentityResponse,
  UpdateContinuousDeploymentPolicyCommandOutput as UpdateContinuousDeploymentPolicyResponse,
  UpdateDistributionCommandOutput as UpdateDistributionResponse,
  UpdateFieldLevelEncryptionConfigCommandOutput as UpdateFieldLevelEncryptionConfigResponse,
  UpdateFieldLevelEncryptionProfileCommandOutput as UpdateFieldLevelEncryptionProfileResponse,
  UpdateFunctionCommandOutput as UpdateFunctionResponse,
  UpdateKeyGroupCommandOutput as UpdateKeyGroupResponse,
  UpdateKeyValueStoreCommandOutput as UpdateKeyValueStoreResponse,
  UpdateOriginAccessControlCommandOutput as UpdateOriginAccessControlResponse,
  UpdateOriginRequestPolicyCommandOutput as UpdateOriginRequestPolicyResponse,
  UpdatePublicKeyCommandOutput as UpdatePublicKeyResponse,
  UpdateResponseHeadersPolicyCommandOutput as UpdateResponseHeadersPolicyResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-cloudfront";

declare interface AwsLiteCloudFront {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html CloudFront: AssociateAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#AssociateAlias CloudFront: AssociateAlias}
   */
  AssociateAlias: (input: { TargetDistributionId: string, Alias: string }) => Promise<AssociateAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html CloudFront: CopyDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CopyDistribution CloudFront: CopyDistribution}
   */
  CopyDistribution: (input: { PrimaryDistributionId: string, CallerReference: string, IfMatch: string, Staging?: boolean, Enabled?: boolean }) => Promise<CopyDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html CloudFront: CreateCachePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateCachePolicy CloudFront: CreateCachePolicy}
   */
  CreateCachePolicy: (input: { CachePolicyConfig: Record<string, any> }) => Promise<CreateCachePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html CloudFront: CreateCloudFrontOriginAccessIdentity}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateCloudFrontOriginAccessIdentity CloudFront: CreateCloudFrontOriginAccessIdentity}
   */
  CreateCloudFrontOriginAccessIdentity: (input: { CloudFrontOriginAccessIdentityConfig: Record<string, any> }) => Promise<CreateCloudFrontOriginAccessIdentityResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateContinuousDeploymentPolicy.html CloudFront: CreateContinuousDeploymentPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateContinuousDeploymentPolicy CloudFront: CreateContinuousDeploymentPolicy}
   */
  CreateContinuousDeploymentPolicy: (input: { ContinuousDeploymentPolicyConfig: Record<string, any> }) => Promise<CreateContinuousDeploymentPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html CloudFront: CreateDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateDistribution CloudFront: CreateDistribution}
   */
  CreateDistribution: (input: { DistributionConfig: Record<string, any> }) => Promise<CreateDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html CloudFront: CreateFieldLevelEncryptionConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateFieldLevelEncryptionConfig CloudFront: CreateFieldLevelEncryptionConfig}
   */
  CreateFieldLevelEncryptionConfig: (input: { FieldLevelEncryptionConfig: Record<string, any> }) => Promise<CreateFieldLevelEncryptionConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html CloudFront: CreateFieldLevelEncryptionProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateFieldLevelEncryptionProfile CloudFront: CreateFieldLevelEncryptionProfile}
   */
  CreateFieldLevelEncryptionProfile: (input: { FieldLevelEncryptionProfileConfig: Record<string, any> }) => Promise<CreateFieldLevelEncryptionProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFunction.html CloudFront: CreateFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateFunction CloudFront: CreateFunction}
   */
  CreateFunction: (input: { FunctionCode: string, FunctionConfig: Record<string, any>, Name: string }) => Promise<CreateFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html CloudFront: CreateInvalidation}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateInvalidation CloudFront: CreateInvalidation}
   */
  CreateInvalidation: (input: { Id: string, InvalidationBatch?: string | any[], CallerReference: string }) => Promise<CreateInvalidationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyGroup.html CloudFront: CreateKeyGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateKeyGroup CloudFront: CreateKeyGroup}
   */
  CreateKeyGroup: (input: { KeyGroupConfig: Record<string, any> }) => Promise<CreateKeyGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyValueStore.html CloudFront: CreateKeyValueStore}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateKeyValueStore CloudFront: CreateKeyValueStore}
   */
  CreateKeyValueStore: (input: { Name: string, ImportSource?: Record<string, any>, Comment?: string }) => Promise<CreateKeyValueStoreResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html CloudFront: CreateMonitoringSubscription}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateMonitoringSubscription CloudFront: CreateMonitoringSubscription}
   */
  CreateMonitoringSubscription: (input: { DistributionId: string, MonitoringSubscription: Record<string, any> }) => Promise<CreateMonitoringSubscriptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginAccessControl.html CloudFront: CreateOriginAccessControl}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateOriginAccessControl CloudFront: CreateOriginAccessControl}
   */
  CreateOriginAccessControl: (input: { OriginAccessControlConfig: Record<string, any> }) => Promise<CreateOriginAccessControlResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html CloudFront: CreateOriginRequestPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateOriginRequestPolicy CloudFront: CreateOriginRequestPolicy}
   */
  CreateOriginRequestPolicy: (input: { OriginRequestPolicyConfig: Record<string, any> }) => Promise<CreateOriginRequestPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html CloudFront: CreatePublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreatePublicKey CloudFront: CreatePublicKey}
   */
  CreatePublicKey: (input: { PublicKeyConfig: Record<string, any> }) => Promise<CreatePublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateResponseHeadersPolicy.html CloudFront: CreateResponseHeadersPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateResponseHeadersPolicy CloudFront: CreateResponseHeadersPolicy}
   */
  CreateResponseHeadersPolicy: (input: { ResponseHeadersPolicyConfig: Record<string, any> }) => Promise<CreateResponseHeadersPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html CloudFront: DeleteCachePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteCachePolicy CloudFront: DeleteCachePolicy}
   */
  DeleteCachePolicy: (input: { Id: string, IfMatch: string }) => Promise<DeleteCachePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html CloudFront: DeleteCloudFrontOriginAccessIdentity}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteCloudFrontOriginAccessIdentity CloudFront: DeleteCloudFrontOriginAccessIdentity}
   */
  DeleteCloudFrontOriginAccessIdentity: (input: { Id: string, IfMatch: string }) => Promise<DeleteCloudFrontOriginAccessIdentityResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteContinuousDeploymentPolicy.html CloudFront: DeleteContinuousDeploymentPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteContinuousDeploymentPolicy CloudFront: DeleteContinuousDeploymentPolicy}
   */
  DeleteContinuousDeploymentPolicy: (input: { Id: string, IfMatch: string }) => Promise<DeleteContinuousDeploymentPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html CloudFront: DeleteDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteDistribution CloudFront: DeleteDistribution}
   */
  DeleteDistribution: (input: { Id: string, IfMatch: string }) => Promise<DeleteDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html CloudFront: DeleteFieldLevelEncryptionConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteFieldLevelEncryptionConfig CloudFront: DeleteFieldLevelEncryptionConfig}
   */
  DeleteFieldLevelEncryptionConfig: (input: { Id: string, IfMatch: string }) => Promise<DeleteFieldLevelEncryptionConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html CloudFront: DeleteFieldLevelEncryptionProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteFieldLevelEncryptionProfile CloudFront: DeleteFieldLevelEncryptionProfile}
   */
  DeleteFieldLevelEncryptionProfile: (input: { Id: string, IfMatch: string }) => Promise<DeleteFieldLevelEncryptionProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFunction.html CloudFront: DeleteFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteFunction CloudFront: DeleteFunction}
   */
  DeleteFunction: (input: { Name: string, IfMatch: string }) => Promise<DeleteFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html CloudFront: DeleteKeyGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteKeyGroup CloudFront: DeleteKeyGroup}
   */
  DeleteKeyGroup: (input: { Id: string, IfMatch: string }) => Promise<DeleteKeyGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyValueStore.html CloudFront: DeleteKeyValueStore}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteKeyValueStore CloudFront: DeleteKeyValueStore}
   */
  DeleteKeyValueStore: (input: { Name: string, IfMatch: string }) => Promise<DeleteKeyValueStoreResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html CloudFront: DeleteMonitoringSubscription}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteMonitoringSubscription CloudFront: DeleteMonitoringSubscription}
   */
  DeleteMonitoringSubscription: (input: { DistributionId: string }) => Promise<DeleteMonitoringSubscriptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginAccessControl.html CloudFront: DeleteOriginAccessControl}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteOriginAccessControl CloudFront: DeleteOriginAccessControl}
   */
  DeleteOriginAccessControl: (input: { Id: string, IfMatch: string }) => Promise<DeleteOriginAccessControlResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html CloudFront: DeleteOriginRequestPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteOriginRequestPolicy CloudFront: DeleteOriginRequestPolicy}
   */
  DeleteOriginRequestPolicy: (input: { Id: string, IfMatch: string }) => Promise<DeleteOriginRequestPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html CloudFront: DeletePublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeletePublicKey CloudFront: DeletePublicKey}
   */
  DeletePublicKey: (input: { Id: string, IfMatch: string }) => Promise<DeletePublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteResponseHeadersPolicy.html CloudFront: DeleteResponseHeadersPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteResponseHeadersPolicy CloudFront: DeleteResponseHeadersPolicy}
   */
  DeleteResponseHeadersPolicy: (input: { Id: string, IfMatch: string }) => Promise<DeleteResponseHeadersPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeFunction.html CloudFront: DescribeFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DescribeFunction CloudFront: DescribeFunction}
   */
  DescribeFunction: (input: { Name: string, Stage?: string }) => Promise<DescribeFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeKeyValueStore.html CloudFront: DescribeKeyValueStore}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DescribeKeyValueStore CloudFront: DescribeKeyValueStore}
   */
  DescribeKeyValueStore: (input: { Name: string }) => Promise<DescribeKeyValueStoreResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html CloudFront: GetCachePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetCachePolicy CloudFront: GetCachePolicy}
   */
  GetCachePolicy: (input: { Id: string }) => Promise<GetCachePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html CloudFront: GetCachePolicyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetCachePolicyConfig CloudFront: GetCachePolicyConfig}
   */
  GetCachePolicyConfig: (input: { Id: string }) => Promise<GetCachePolicyConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html CloudFront: GetCloudFrontOriginAccessIdentity}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetCloudFrontOriginAccessIdentity CloudFront: GetCloudFrontOriginAccessIdentity}
   */
  GetCloudFrontOriginAccessIdentity: (input: { Id: string }) => Promise<GetCloudFrontOriginAccessIdentityResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html CloudFront: GetCloudFrontOriginAccessIdentityConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetCloudFrontOriginAccessIdentityConfig CloudFront: GetCloudFrontOriginAccessIdentityConfig}
   */
  GetCloudFrontOriginAccessIdentityConfig: (input: { Id: string }) => Promise<GetCloudFrontOriginAccessIdentityConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicy.html CloudFront: GetContinuousDeploymentPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetContinuousDeploymentPolicy CloudFront: GetContinuousDeploymentPolicy}
   */
  GetContinuousDeploymentPolicy: (input: { Id: string }) => Promise<GetContinuousDeploymentPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicyConfig.html CloudFront: GetContinuousDeploymentPolicyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetContinuousDeploymentPolicyConfig CloudFront: GetContinuousDeploymentPolicyConfig}
   */
  GetContinuousDeploymentPolicyConfig: (input: { Id: string }) => Promise<GetContinuousDeploymentPolicyConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html CloudFront: GetDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetDistribution CloudFront: GetDistribution}
   */
  GetDistribution: (input: { Id: string }) => Promise<GetDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html CloudFront: GetDistributionConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetDistributionConfig CloudFront: GetDistributionConfig}
   */
  GetDistributionConfig: (input: { Id: string }) => Promise<GetDistributionConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html CloudFront: GetFieldLevelEncryption}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetFieldLevelEncryption CloudFront: GetFieldLevelEncryption}
   */
  GetFieldLevelEncryption: (input: { Id: string }) => Promise<GetFieldLevelEncryptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html CloudFront: GetFieldLevelEncryptionConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetFieldLevelEncryptionConfig CloudFront: GetFieldLevelEncryptionConfig}
   */
  GetFieldLevelEncryptionConfig: (input: { Id: string }) => Promise<GetFieldLevelEncryptionConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html CloudFront: GetFieldLevelEncryptionProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetFieldLevelEncryptionProfile CloudFront: GetFieldLevelEncryptionProfile}
   */
  GetFieldLevelEncryptionProfile: (input: { Id: string }) => Promise<GetFieldLevelEncryptionProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html CloudFront: GetFieldLevelEncryptionProfileConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetFieldLevelEncryptionProfileConfig CloudFront: GetFieldLevelEncryptionProfileConfig}
   */
  GetFieldLevelEncryptionProfileConfig: (input: { Id: string }) => Promise<GetFieldLevelEncryptionProfileConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFunction.html CloudFront: GetFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetFunction CloudFront: GetFunction}
   */
  GetFunction: (input: { Name: string, Stage?: string }) => Promise<GetFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html CloudFront: GetInvalidation}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetInvalidation CloudFront: GetInvalidation}
   */
  GetInvalidation: (input: { DistributionId: string, Id: string }) => Promise<GetInvalidationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroup.html CloudFront: GetKeyGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetKeyGroup CloudFront: GetKeyGroup}
   */
  GetKeyGroup: (input: { Id: string }) => Promise<GetKeyGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroupConfig.html CloudFront: GetKeyGroupConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetKeyGroupConfig CloudFront: GetKeyGroupConfig}
   */
  GetKeyGroupConfig: (input: { Id: string }) => Promise<GetKeyGroupConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControl.html CloudFront: GetOriginAccessControl}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetOriginAccessControl CloudFront: GetOriginAccessControl}
   */
  GetOriginAccessControl: (input: { Id: string }) => Promise<GetOriginAccessControlResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControlConfig.html CloudFront: GetOriginAccessControlConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetOriginAccessControlConfig CloudFront: GetOriginAccessControlConfig}
   */
  GetOriginAccessControlConfig: (input: { Id: string }) => Promise<GetOriginAccessControlConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html CloudFront: GetOriginRequestPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetOriginRequestPolicy CloudFront: GetOriginRequestPolicy}
   */
  GetOriginRequestPolicy: (input: { Id: string }) => Promise<GetOriginRequestPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html CloudFront: GetOriginRequestPolicyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetOriginRequestPolicyConfig CloudFront: GetOriginRequestPolicyConfig}
   */
  GetOriginRequestPolicyConfig: (input: { Id: string }) => Promise<GetOriginRequestPolicyConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html CloudFront: GetMonitoringSubscription}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetMonitoringSubscription CloudFront: GetMonitoringSubscription}
   */
  GetMonitoringSubscription: (input: { DistributionId: string }) => Promise<GetMonitoringSubscriptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html CloudFront: GetPublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetPublicKey CloudFront: GetPublicKey}
   */
  GetPublicKey: (input: { Id: string }) => Promise<GetPublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html CloudFront: GetPublicKeyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetPublicKeyConfig CloudFront: GetPublicKeyConfig}
   */
  GetPublicKeyConfig: (input: { Id: string }) => Promise<GetPublicKeyConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicy.html CloudFront: GetResponseHeadersPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetResponseHeadersPolicy CloudFront: GetResponseHeadersPolicy}
   */
  GetResponseHeadersPolicy: (input: { Id: string }) => Promise<GetResponseHeadersPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicyConfig.html CloudFront: GetResponseHeadersPolicyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetResponseHeadersPolicyConfig CloudFront: GetResponseHeadersPolicyConfig}
   */
  GetResponseHeadersPolicyConfig: (input: { Id: string }) => Promise<GetResponseHeadersPolicyConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html CloudFront: ListCachePolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListCachePolicies CloudFront: ListCachePolicies}
   */
  ListCachePolicies: (input: { Marker?: string, MaxItems?: number, Type?: string, paginate?: boolean | string }) => Promise<ListCachePoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html CloudFront: ListCloudFrontOriginAccessIdentities}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListCloudFrontOriginAccessIdentities CloudFront: ListCloudFrontOriginAccessIdentities}
   */
  ListCloudFrontOriginAccessIdentities: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListCloudFrontOriginAccessIdentitiesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html CloudFront: ListConflictingAliases}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListConflictingAliases CloudFront: ListConflictingAliases}
   */
  ListConflictingAliases: (input: { DistributionId: string, Alias: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListConflictingAliasesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListContinuousDeploymentPolicies.html CloudFront: ListContinuousDeploymentPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListContinuousDeploymentPolicies CloudFront: ListContinuousDeploymentPolicies}
   */
  ListContinuousDeploymentPolicies: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListContinuousDeploymentPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html CloudFront: ListDistributions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListDistributions CloudFront: ListDistributions}
   */
  ListDistributions: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListDistributionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html CloudFront: ListFieldLevelEncryptionConfigs}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListFieldLevelEncryptionConfigs CloudFront: ListFieldLevelEncryptionConfigs}
   */
  ListFieldLevelEncryptionConfigs: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListFieldLevelEncryptionConfigsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html CloudFront: ListFieldLevelEncryptionProfiles}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListFieldLevelEncryptionProfiles CloudFront: ListFieldLevelEncryptionProfiles}
   */
  ListFieldLevelEncryptionProfiles: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListFieldLevelEncryptionProfilesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFunctions.html CloudFront: ListFunctions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListFunctions CloudFront: ListFunctions}
   */
  ListFunctions: (input: { Marker?: string, MaxItems?: number, Stage?: string, paginate?: boolean | string }) => Promise<ListFunctionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html CloudFront: ListInvalidations}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListInvalidations CloudFront: ListInvalidations}
   */
  ListInvalidations: (input: { DistributionId: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListInvalidationsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyGroups.html CloudFront: ListKeyGroups}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListKeyGroups CloudFront: ListKeyGroups}
   */
  ListKeyGroups: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListKeyGroupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyValueStores.html CloudFront: ListKeyValueStores}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListKeyValueStores CloudFront: ListKeyValueStores}
   */
  ListKeyValueStores: (input: { Marker?: string, MaxItems?: number, Status?: string, paginate?: boolean | string }) => Promise<ListKeyValueStoresResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginAccessControls.html CloudFront: ListOriginAccessControls}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListOriginAccessControls CloudFront: ListOriginAccessControls}
   */
  ListOriginAccessControls: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListOriginAccessControlsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html CloudFront: ListOriginRequestPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListOriginRequestPolicies CloudFront: ListOriginRequestPolicies}
   */
  ListOriginRequestPolicies: (input: { Marker?: string, MaxItems?: number, Type?: string, paginate?: boolean | string }) => Promise<ListOriginRequestPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html CloudFront: ListPublicKeys}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListPublicKeys CloudFront: ListPublicKeys}
   */
  ListPublicKeys: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListPublicKeysResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListResponseHeadersPolicies.html CloudFront: ListResponseHeadersPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListResponseHeadersPolicies CloudFront: ListResponseHeadersPolicies}
   */
  ListResponseHeadersPolicies: (input: { Marker?: string, MaxItems?: number, Type?: string, paginate?: boolean | string }) => Promise<ListResponseHeadersPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html CloudFront: ListTagsForResource}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListTagsForResource CloudFront: ListTagsForResource}
   */
  ListTagsForResource: (input: { Resource: string }) => Promise<ListTagsForResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html CloudFront: TagResource}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#TagResource CloudFront: TagResource}
   */
  TagResource: (input: { Resource: string, Tags: any[] }) => Promise<TagResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html CloudFront: TestFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#TestFunction CloudFront: TestFunction}
   */
  TestFunction: (input: { Name: string, IfMatch: string, EventObject: string, Stage?: string }) => Promise<TestFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UntagResource.html CloudFront: UntagResource}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UntagResource CloudFront: UntagResource}
   */
  UntagResource: (input: { Resource: string, TagKeys: any[] }) => Promise<UntagResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html CloudFront: UpdateCachePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateCachePolicy CloudFront: UpdateCachePolicy}
   */
  UpdateCachePolicy: (input: { CachePolicyConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateCachePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html CloudFront: UpdateCloudFrontOriginAccessIdentity}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateCloudFrontOriginAccessIdentity CloudFront: UpdateCloudFrontOriginAccessIdentity}
   */
  UpdateCloudFrontOriginAccessIdentity: (input: { CloudFrontOriginAccessIdentityConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateCloudFrontOriginAccessIdentityResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateContinuousDeploymentPolicy.html CloudFront: UpdateContinuousDeploymentPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateContinuousDeploymentPolicy CloudFront: UpdateContinuousDeploymentPolicy}
   */
  UpdateContinuousDeploymentPolicy: (input: { ContinuousDeploymentPolicyConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateContinuousDeploymentPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html CloudFront: UpdateDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateDistribution CloudFront: UpdateDistribution}
   */
  UpdateDistribution: (input: { DistributionConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html CloudFront: UpdateFieldLevelEncryptionConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateFieldLevelEncryptionConfig CloudFront: UpdateFieldLevelEncryptionConfig}
   */
  UpdateFieldLevelEncryptionConfig: (input: { FieldLevelEncryptionConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateFieldLevelEncryptionConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html CloudFront: UpdateFieldLevelEncryptionProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateFieldLevelEncryptionProfile CloudFront: UpdateFieldLevelEncryptionProfile}
   */
  UpdateFieldLevelEncryptionProfile: (input: { FieldLevelEncryptionProfileConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateFieldLevelEncryptionProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFunction.html CloudFront: UpdateFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateFunction CloudFront: UpdateFunction}
   */
  UpdateFunction: (input: { IfMatch: string, Name: string, FunctionCode: string, FunctionConfig: Record<string, any> }) => Promise<UpdateFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyGroup.html CloudFront: UpdateKeyGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateKeyGroup CloudFront: UpdateKeyGroup}
   */
  UpdateKeyGroup: (input: { KeyGroupConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateKeyGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyValueStore.html CloudFront: UpdateKeyValueStore}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateKeyValueStore CloudFront: UpdateKeyValueStore}
   */
  UpdateKeyValueStore: (input: { Name: string, Comment: string, IfMatch: string }) => Promise<UpdateKeyValueStoreResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginAccessControl.html CloudFront: UpdateOriginAccessControl}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateOriginAccessControl CloudFront: UpdateOriginAccessControl}
   */
  UpdateOriginAccessControl: (input: { OriginAccessControlConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateOriginAccessControlResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html CloudFront: UpdateOriginRequestPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateOriginRequestPolicy CloudFront: UpdateOriginRequestPolicy}
   */
  UpdateOriginRequestPolicy: (input: { OriginRequestPolicyConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateOriginRequestPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html CloudFront: UpdatePublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdatePublicKey CloudFront: UpdatePublicKey}
   */
  UpdatePublicKey: (input: { PublicKeyConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdatePublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateResponseHeadersPolicy.html CloudFront: UpdateResponseHeadersPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateResponseHeadersPolicy CloudFront: UpdateResponseHeadersPolicy}
   */
  UpdateResponseHeadersPolicy: (input: { ResponseHeadersPolicyConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateResponseHeadersPolicyResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    CloudFront: AwsLiteCloudFront;
  }
}

export type {
  AwsLiteCloudFront,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  AssociateAliasResponse,
  CopyDistributionResponse,
  CreateCachePolicyResponse,
  CreateCloudFrontOriginAccessIdentityResponse,
  CreateContinuousDeploymentPolicyResponse,
  CreateDistributionResponse,
  CreateFieldLevelEncryptionConfigResponse,
  CreateFieldLevelEncryptionProfileResponse,
  CreateFunctionResponse,
  CreateInvalidationResponse,
  CreateKeyGroupResponse,
  CreateKeyValueStoreResponse,
  CreateMonitoringSubscriptionResponse,
  CreateOriginAccessControlResponse,
  CreateOriginRequestPolicyResponse,
  CreatePublicKeyResponse,
  CreateResponseHeadersPolicyResponse,
  DeleteCachePolicyResponse,
  DeleteCloudFrontOriginAccessIdentityResponse,
  DeleteContinuousDeploymentPolicyResponse,
  DeleteDistributionResponse,
  DeleteFieldLevelEncryptionConfigResponse,
  DeleteFieldLevelEncryptionProfileResponse,
  DeleteFunctionResponse,
  DeleteKeyGroupResponse,
  DeleteKeyValueStoreResponse,
  DeleteMonitoringSubscriptionResponse,
  DeleteOriginAccessControlResponse,
  DeleteOriginRequestPolicyResponse,
  DeletePublicKeyResponse,
  DeleteResponseHeadersPolicyResponse,
  DescribeFunctionResponse,
  DescribeKeyValueStoreResponse,
  GetCachePolicyResponse,
  GetCachePolicyConfigResponse,
  GetCloudFrontOriginAccessIdentityResponse,
  GetCloudFrontOriginAccessIdentityConfigResponse,
  GetContinuousDeploymentPolicyResponse,
  GetContinuousDeploymentPolicyConfigResponse,
  GetDistributionResponse,
  GetDistributionConfigResponse,
  GetFieldLevelEncryptionResponse,
  GetFieldLevelEncryptionConfigResponse,
  GetFieldLevelEncryptionProfileResponse,
  GetFieldLevelEncryptionProfileConfigResponse,
  GetFunctionResponse,
  GetInvalidationResponse,
  GetKeyGroupResponse,
  GetKeyGroupConfigResponse,
  GetOriginAccessControlResponse,
  GetOriginAccessControlConfigResponse,
  GetOriginRequestPolicyResponse,
  GetOriginRequestPolicyConfigResponse,
  GetMonitoringSubscriptionResponse,
  GetPublicKeyResponse,
  GetPublicKeyConfigResponse,
  GetResponseHeadersPolicyResponse,
  GetResponseHeadersPolicyConfigResponse,
  ListCachePoliciesResponse,
  ListCloudFrontOriginAccessIdentitiesResponse,
  ListConflictingAliasesResponse,
  ListContinuousDeploymentPoliciesResponse,
  ListDistributionsResponse,
  ListFieldLevelEncryptionConfigsResponse,
  ListFieldLevelEncryptionProfilesResponse,
  ListFunctionsResponse,
  ListInvalidationsResponse,
  ListKeyGroupsResponse,
  ListKeyValueStoresResponse,
  ListOriginAccessControlsResponse,
  ListOriginRequestPoliciesResponse,
  ListPublicKeysResponse,
  ListResponseHeadersPoliciesResponse,
  ListTagsForResourceResponse,
  TagResourceResponse,
  TestFunctionResponse,
  UntagResourceResponse,
  UpdateCachePolicyResponse,
  UpdateCloudFrontOriginAccessIdentityResponse,
  UpdateContinuousDeploymentPolicyResponse,
  UpdateDistributionResponse,
  UpdateFieldLevelEncryptionConfigResponse,
  UpdateFieldLevelEncryptionProfileResponse,
  UpdateFunctionResponse,
  UpdateKeyGroupResponse,
  UpdateKeyValueStoreResponse,
  UpdateOriginAccessControlResponse,
  UpdateOriginRequestPolicyResponse,
  UpdatePublicKeyResponse,
  UpdateResponseHeadersPolicyResponse,
  // $EXPORT_END
}
