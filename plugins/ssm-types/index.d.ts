import {
  // $IMPORTS_START
  GetParametersByPathCommandOutput as GetParametersByPathResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-ssm";

declare interface AwsLiteSSM {
  // $METHODS_START
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath SSM: GetParametersByPath}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/ssm/readme.md#GetParametersByPath ssm}
   */
  GetParametersByPath: (input: { Path: string, MaxResults?: number, NextToken?: string, ParameterFilters?: any[], Recursive?: boolean, WithDecryption?: boolean, paginate?: boolean }) => Promise<GetParametersByPathResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    ssm: AwsLiteSSM;
  }
}
