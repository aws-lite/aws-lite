import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  CreateDeploymentCommandOutput as CreateDeploymentResponse,
  GetDeploymentCommandOutput as GetDeploymentResponse,
  UpdateStageCommandOutput as UpdateStageResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-apigatewayv2";

declare interface AwsLiteAPIGatewayV2 {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments.html#CreateDeployment API Gateway V2: CreateDeployment}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#CreateDeployment API Gateway V2: CreateDeployment}
   */
  CreateDeployment: (input: { ApiId: string, Description?: string, StageName?: string }) => Promise<CreateDeploymentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments-deploymentid.html#GetDeployment API Gateway V2: GetDeployment}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#GetDeployment API Gateway V2: GetDeployment}
   */
  GetDeployment: (input: { ApiId: string, NextToken?: string, MaxResults?: number }) => Promise<GetDeploymentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#UpdateStage API Gateway V2: UpdateStage}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#UpdateStage API Gateway V2: UpdateStage}
   */
  UpdateStage: (input: { ApiId: string, StageName: string, AccessLogSettings?: Record<string, any>, AutoDeploy?: boolean, ClientCertificateId?: string, DefaultRouteSettings?: Record<string, any>, DeploymentId?: string, Description?: string, RouteSettings?: Record<string, any>, StageVariables?: Record<string, any> }) => Promise<UpdateStageResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    APIGatewayV2: AwsLiteAPIGatewayV2;
  }
}
