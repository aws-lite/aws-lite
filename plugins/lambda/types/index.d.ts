import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  GetFunctionConfigurationCommandOutput as GetFunctionConfigurationResponse,
  InvokeCommandOutput as InvokeResponse,
  UpdateFunctionConfigurationCommandOutput as UpdateFunctionConfigurationResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-lambda";

declare interface AwsLiteLambda {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
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
  Invoke: (input: { FunctionName: string, InvocationType?: string, Payload: array,object, LogType?: string, ClientContext?: string, Qualifier?: string }) => Promise<InvokeResponse>
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
