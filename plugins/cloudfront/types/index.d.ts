import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  CreateDistributionCommandOutput as CreateDistributionResponse,
  CreateFunctionCommandOutput as CreateFunctionResponse,
  CreateInvalidationCommandOutput as CreateInvalidationResponse,
  DeleteDistributionCommandOutput as DeleteDistributionResponse,
  DeleteFunctionCommandOutput as DeleteFunctionResponse,
  DescribeFunctionCommandOutput as DescribeFunctionResponse,
  GetDistributionCommandOutput as GetDistributionResponse,
  GetDistributionConfigCommandOutput as GetDistributionConfigResponse,
  GetFunctionCommandOutput as GetFunctionResponse,
  ListDistributionsCommandOutput as ListDistributionsResponse,
  ListFunctionsCommandOutput as ListFunctionsResponse,
  TestFunctionCommandOutput as TestFunctionResponse,
  UpdateDistributionCommandOutput as UpdateDistributionResponse,
  UpdateFunctionCommandOutput as UpdateFunctionResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-cloudfront";

declare interface AwsLiteCloudFront {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
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
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeFunction.html CloudFront: DescribeFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DescribeFunction CloudFront: DescribeFunction}
   */
  DescribeFunction: (input: { Name: string, Stage?: string }) => Promise<DescribeFunctionResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html CloudFront: TestFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#TestFunction CloudFront: TestFunction}
   */
  TestFunction: (input: { Name: string, IfMatch: string, EventObject: string, Stage?: string }) => Promise<TestFunctionResponse>
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
  CreateDistributionResponse,
  CreateFunctionResponse,
  CreateInvalidationResponse,
  DeleteDistributionResponse,
  DeleteFunctionResponse,
  DescribeFunctionResponse,
  GetDistributionResponse,
  GetDistributionConfigResponse,
  GetFunctionResponse,
  ListDistributionsResponse,
  ListFunctionsResponse,
  TestFunctionResponse,
  UpdateDistributionResponse,
  UpdateFunctionResponse,
  // $EXPORT_END
}
