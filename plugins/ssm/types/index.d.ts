import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  DeleteParameterCommandOutput as DeleteParameterResponse,
  DeleteParametersCommandOutput as DeleteParametersResponse,
  GetParameterCommandOutput as GetParameterResponse,
  GetParametersCommandOutput as GetParametersResponse,
  GetParametersByPathCommandOutput as GetParametersByPathResponse,
  PutParameterCommandOutput as PutParameterResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-ssm";

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLiteSSM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter SSM: DeleteParameter}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ssm/readme.md#DeleteParameter SSM: DeleteParameter}
   */
  DeleteParameter: (input: AwsLiteMethodOptions & { Name: string }) => Promise<DeleteParameterResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters SSM: DeleteParameters}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ssm/readme.md#DeleteParameters SSM: DeleteParameters}
   */
  DeleteParameters: (input: AwsLiteMethodOptions & { Names: any[] }) => Promise<DeleteParametersResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html SSM: GetParameter}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ssm/readme.md#GetParameter SSM: GetParameter}
   */
  GetParameter: (input: AwsLiteMethodOptions & { Name: string, WithDecryption?: boolean }) => Promise<GetParameterResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html SSM: GetParameters}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ssm/readme.md#GetParameters SSM: GetParameters}
   */
  GetParameters: (input: AwsLiteMethodOptions & { Names: any[], WithDecryption?: boolean }) => Promise<GetParametersResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath SSM: GetParametersByPath}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ssm/readme.md#GetParametersByPath SSM: GetParametersByPath}
   */
  GetParametersByPath: (input: AwsLiteMethodOptions & { Path: string, MaxResults?: number, NextToken?: string, ParameterFilters?: any[], Recursive?: boolean, WithDecryption?: boolean, paginate?: boolean }) => Promise<GetParametersByPathResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter SSM: PutParameter}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ssm/readme.md#PutParameter SSM: PutParameter}
   */
  PutParameter: (input: AwsLiteMethodOptions & { Name: string, Value: string, AllowedPattern?: string, DataType?: string, Description?: string, KeyId?: string, Overwrite?: boolean, Policies?: any[], Tags?: any[], Tier?: string, Type?: string }) => Promise<PutParameterResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    SSM: AwsLiteSSM;
  }
}

export type {
  AwsLiteSSM,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  DeleteParameterResponse,
  DeleteParametersResponse,
  GetParameterResponse,
  GetParametersResponse,
  GetParametersByPathResponse,
  PutParameterResponse,
  // $EXPORT_END
}
