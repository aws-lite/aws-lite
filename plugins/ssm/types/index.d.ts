import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  GetParameterCommandOutput as GetParameterResponse,
  GetParametersCommandOutput as GetParametersResponse,
  GetParametersByPathCommandOutput as GetParametersByPathResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-ssm";

declare interface AwsLiteSSM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html SSM: GetParameter}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/ssm/readme.md#GetParameter SSM: GetParameter}
   */
  GetParameter: (input: { Name: string, WithDecryption?: boolean }) => Promise<GetParameterResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html SSM: GetParameters}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/ssm/readme.md#GetParameters SSM: GetParameters}
   */
  GetParameters: (input: { Names: any[], WithDecryption?: boolean }) => Promise<GetParametersResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath SSM: GetParametersByPath}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/ssm/readme.md#GetParametersByPath SSM: GetParametersByPath}
   */
  GetParametersByPath: (input: { Path: string, MaxResults?: number, NextToken?: string, ParameterFilters?: any[], Recursive?: boolean, WithDecryption?: boolean, paginate?: boolean }) => Promise<GetParametersByPathResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    SSM: AwsLiteSSM;
  }
}
