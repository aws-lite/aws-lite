import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  CreateFunctionCommandOutput as CreateFunctionResponse,
  DeleteFunctionConcurrencyCommandOutput as DeleteFunctionConcurrencyResponse,
  GetFunctionConfigurationCommandOutput as GetFunctionConfigurationResponse,
  InvokeCommandOutput as InvokeResponse,
  PutFunctionConcurrencyCommandOutput as PutFunctionConcurrencyResponse,
  UpdateFunctionCodeCommandOutput as UpdateFunctionCodeResponse,
  UpdateFunctionConfigurationCommandOutput as UpdateFunctionConfigurationResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-lambda";

declare interface AwsLiteLambda {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html Lambda: CreateFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#CreateFunction Lambda: CreateFunction}
   */
  CreateFunction: (input: { Code: Record<string, any>, FunctionName: string, Role: string, Architectures?: any[], CodeSigningConfigArn?: string, DeadLetterConfig?: Record<string, any>, Description?: string, Environment?: Record<string, any>, EphemeralStorage?: Record<string, any>, FileSystemConfigs?: any[], Handler?: string, ImageConfig?: Record<string, any>, KMSKeyArn?: string, Layers?: any[], MemorySize?: number, PackageType?: string, Publish?: boolean, Runtime?: string, SnapStart?: Record<string, any>, Tags?: any[], Timeout?: number, TracingConfig?: Record<string, any>, VpcConfig?: Record<string, any> }) => Promise<CreateFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html Lambda: DeleteFunctionConcurrency}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteFunctionConcurrency Lambda: DeleteFunctionConcurrency}
   */
  DeleteFunctionConcurrency: (input: { FunctionName: string }) => Promise<DeleteFunctionConcurrencyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html Lambda: GetFunctionConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetFunctionConfiguration Lambda: GetFunctionConfiguration}
   */
  GetFunctionConfiguration: (input: { FunctionName: string, Qualifier?: string }) => Promise<GetFunctionConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html Lambda: Invoke}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#Invoke Lambda: Invoke}
   */
  Invoke: (input: { FunctionName: string, InvocationType?: string, Payload: any[] | Record<string, any>, LogType?: string, ClientContext?: string, Qualifier?: string }) => Promise<InvokeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html Lambda: PutFunctionConcurrency}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PutFunctionConcurrency Lambda: PutFunctionConcurrency}
   */
  PutFunctionConcurrency: (input: { FunctionName: string, ReservedConcurrentExecutions: number }) => Promise<PutFunctionConcurrencyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html Lambda: UpdateFunctionCode}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateFunctionCode Lambda: UpdateFunctionCode}
   */
  UpdateFunctionCode: (input: { FunctionName: string, Architectures?: any[], DryRun?: string, ImageUri?: string, Publish?: boolean, RevisionId?: string, S3Bucket?: string, S3Key?: string, S3ObjectVersion?: string, ZipFile?: string | Buffer }) => Promise<UpdateFunctionCodeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html Lambda: UpdateFunctionConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateFunctionConfiguration Lambda: UpdateFunctionConfiguration}
   */
  UpdateFunctionConfiguration: (input: { FunctionName: string, DeadLetterConfig?: Record<string, any>, Description?: string, Environment?: Record<string, any>, EphemeralStorage?: Record<string, any>, FileSystemConfigs?: any[], Handler?: string, ImageConfig?: Record<string, any>, KMSKeyArn?: string, Layers?: any[], MemorySize?: number, RevisionId?: string, Role?: string, Runtime?: string, SnapStart?: Record<string, any>, Timeout?: number, TracingConfig?: Record<string, any>, VpcConfig?: Record<string, any> }) => Promise<UpdateFunctionConfigurationResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    Lambda: AwsLiteLambda;
  }
}

export type {
  AwsLiteLambda,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  CreateFunctionResponse,
  DeleteFunctionConcurrencyResponse,
  GetFunctionConfigurationResponse,
  InvokeResponse,
  PutFunctionConcurrencyResponse,
  UpdateFunctionCodeResponse,
  UpdateFunctionConfigurationResponse,
  // $EXPORT_END
}
