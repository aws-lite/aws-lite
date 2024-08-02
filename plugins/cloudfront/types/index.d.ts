import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  CreateCachePolicyCommandOutput as CreateCachePolicyResponse,
  CreateDistributionCommandOutput as CreateDistributionResponse,
  CreateFunctionCommandOutput as CreateFunctionResponse,
  CreateInvalidationCommandOutput as CreateInvalidationResponse,
  CreateKeyGroupCommandOutput as CreateKeyGroupResponse,
  CreateKeyValueStoreCommandOutput as CreateKeyValueStoreResponse,
  CreatePublicKeyCommandOutput as CreatePublicKeyResponse,
  DeleteCachePolicyCommandOutput as DeleteCachePolicyResponse,
  DeleteDistributionCommandOutput as DeleteDistributionResponse,
  DeleteFunctionCommandOutput as DeleteFunctionResponse,
  DeleteKeyGroupCommandOutput as DeleteKeyGroupResponse,
  DeleteKeyValueStoreCommandOutput as DeleteKeyValueStoreResponse,
  DeletePublicKeyCommandOutput as DeletePublicKeyResponse,
  DescribeFunctionCommandOutput as DescribeFunctionResponse,
  DescribeKeyValueStoreCommandOutput as DescribeKeyValueStoreResponse,
  GetCachePolicyCommandOutput as GetCachePolicyResponse,
  GetCachePolicyConfigCommandOutput as GetCachePolicyConfigResponse,
  GetDistributionCommandOutput as GetDistributionResponse,
  GetDistributionConfigCommandOutput as GetDistributionConfigResponse,
  GetFunctionCommandOutput as GetFunctionResponse,
  GetKeyGroupCommandOutput as GetKeyGroupResponse,
  GetKeyGroupConfigCommandOutput as GetKeyGroupConfigResponse,
  GetPublicKeyCommandOutput as GetPublicKeyResponse,
  GetPublicKeyConfigCommandOutput as GetPublicKeyConfigResponse,
  ListCachePoliciesCommandOutput as ListCachePoliciesResponse,
  ListDistributionsCommandOutput as ListDistributionsResponse,
  ListFunctionsCommandOutput as ListFunctionsResponse,
  ListKeyGroupsCommandOutput as ListKeyGroupsResponse,
  ListKeyValueStoresCommandOutput as ListKeyValueStoresResponse,
  ListPublicKeysCommandOutput as ListPublicKeysResponse,
  TestFunctionCommandOutput as TestFunctionResponse,
  UpdateCachePolicyCommandOutput as UpdateCachePolicyResponse,
  UpdateDistributionCommandOutput as UpdateDistributionResponse,
  UpdateFunctionCommandOutput as UpdateFunctionResponse,
  UpdateKeyGroupCommandOutput as UpdateKeyGroupResponse,
  UpdateKeyValueStoreCommandOutput as UpdateKeyValueStoreResponse,
  UpdatePublicKeyCommandOutput as UpdatePublicKeyResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-cloudfront";

declare interface AwsLiteCloudFront {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html CloudFront: CreateCachePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateCachePolicy CloudFront: CreateCachePolicy}
   */
  CreateCachePolicy: (input: { CachePolicyConfig: Record<string, any> }) => Promise<CreateCachePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html CloudFront: CreateDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateDistribution CloudFront: CreateDistribution}
   */
  CreateDistribution: (input: { DistributionConfig: Record<string, any> }) => Promise<CreateDistributionResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html CloudFront: CreatePublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreatePublicKey CloudFront: CreatePublicKey}
   */
  CreatePublicKey: (input: { PublicKeyConfig: Record<string, any> }) => Promise<CreatePublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html CloudFront: DeleteCachePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteCachePolicy CloudFront: DeleteCachePolicy}
   */
  DeleteCachePolicy: (input: { Id: string, IfMatch: string }) => Promise<DeleteCachePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html CloudFront: DeleteDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteDistribution CloudFront: DeleteDistribution}
   */
  DeleteDistribution: (input: { Id: string, IfMatch?: string }) => Promise<DeleteDistributionResponse>
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
  DeleteKeyGroup: (input: { Name: string, IfMatch?: string }) => Promise<DeleteKeyGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyValueStore.html CloudFront: DeleteKeyValueStore}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteKeyValueStore CloudFront: DeleteKeyValueStore}
   */
  DeleteKeyValueStore: (input: { Name: string, IfMatch: string }) => Promise<DeleteKeyValueStoreResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html CloudFront: DeletePublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeletePublicKey CloudFront: DeletePublicKey}
   */
  DeletePublicKey: (input: { Id: string, IfMatch?: string }) => Promise<DeletePublicKeyResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFunction.html CloudFront: GetFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetFunction CloudFront: GetFunction}
   */
  GetFunction: (input: { Name: string, Stage?: string }) => Promise<GetFunctionResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html CloudFront: ListCachePolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListCachePolicies CloudFront: ListCachePolicies}
   */
  ListCachePolicies: (input: { Marker?: string, MaxItems?: number, Type?: string }) => Promise<ListCachePoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html CloudFront: ListDistributions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListDistributions CloudFront: ListDistributions}
   */
  ListDistributions: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListDistributionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFunctions.html CloudFront: ListFunctions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListFunctions CloudFront: ListFunctions}
   */
  ListFunctions: (input: { Marker?: string, MaxItems?: number, Stage?: string, paginate?: boolean | string }) => Promise<ListFunctionsResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html CloudFront: ListPublicKeys}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListPublicKeys CloudFront: ListPublicKeys}
   */
  ListPublicKeys: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListPublicKeysResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html CloudFront: TestFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#TestFunction CloudFront: TestFunction}
   */
  TestFunction: (input: { Name: string, IfMatch: string, EventObject: string, Stage?: string }) => Promise<TestFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html CloudFront: UpdateCachePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateCachePolicy CloudFront: UpdateCachePolicy}
   */
  UpdateCachePolicy: (input: { CachePolicyConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateCachePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html CloudFront: UpdateDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateDistribution CloudFront: UpdateDistribution}
   */
  UpdateDistribution: (input: { DistributionConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateDistributionResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html CloudFront: UpdatePublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdatePublicKey CloudFront: UpdatePublicKey}
   */
  UpdatePublicKey: (input: { PublicKeyConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdatePublicKeyResponse>
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
  CreateCachePolicyResponse,
  CreateDistributionResponse,
  CreateFunctionResponse,
  CreateInvalidationResponse,
  CreateKeyGroupResponse,
  CreateKeyValueStoreResponse,
  CreatePublicKeyResponse,
  DeleteCachePolicyResponse,
  DeleteDistributionResponse,
  DeleteFunctionResponse,
  DeleteKeyGroupResponse,
  DeleteKeyValueStoreResponse,
  DeletePublicKeyResponse,
  DescribeFunctionResponse,
  DescribeKeyValueStoreResponse,
  GetCachePolicyResponse,
  GetCachePolicyConfigResponse,
  GetDistributionResponse,
  GetDistributionConfigResponse,
  GetFunctionResponse,
  GetKeyGroupResponse,
  GetKeyGroupConfigResponse,
  GetPublicKeyResponse,
  GetPublicKeyConfigResponse,
  ListCachePoliciesResponse,
  ListDistributionsResponse,
  ListFunctionsResponse,
  ListKeyGroupsResponse,
  ListKeyValueStoresResponse,
  ListPublicKeysResponse,
  TestFunctionResponse,
  UpdateCachePolicyResponse,
  UpdateDistributionResponse,
  UpdateFunctionResponse,
  UpdateKeyGroupResponse,
  UpdateKeyValueStoreResponse,
  UpdatePublicKeyResponse,
  // $EXPORT_END
}
