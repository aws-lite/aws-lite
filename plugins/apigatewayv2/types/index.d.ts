import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  CreateApiMappingCommandOutput as CreateApiMappingResponse,
  CreateDeploymentCommandOutput as CreateDeploymentResponse,
  CreateDomainNameCommandOutput as CreateDomainNameResponse,
  DeleteApiMappingCommandOutput as DeleteApiMappingResponse,
  DeleteDomainNameCommandOutput as DeleteDomainNameResponse,
  GetApiMappingsCommandOutput as GetApiMappingsResponse,
  GetDeploymentCommandOutput as GetDeploymentResponse,
  GetDeploymentsCommandOutput as GetDeploymentsResponse,
  UpdateStageCommandOutput as UpdateStageResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-apigatewayv2";

declare interface AwsLiteAPIGatewayV2 {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#CreateApiMapping API Gateway V2: CreateApiMapping}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#CreateApiMapping API Gateway V2: CreateApiMapping}
   */
  CreateApiMapping: (input: { DomainName: string, ApiId: string, ApiMappingKey?: string, Stage: string }) => Promise<CreateApiMappingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments.html#CreateDeployment API Gateway V2: CreateDeployment}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#CreateDeployment API Gateway V2: CreateDeployment}
   */
  CreateDeployment: (input: { ApiId: string, Description?: string, StageName?: string }) => Promise<CreateDeploymentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames.html#CreateDomainName API Gateway V2: CreateDomainName}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#CreateDomainName API Gateway V2: CreateDomainName}
   */
  CreateDomainName: (input: { DomainName: string, DomainNameConfigurations?: any[], MutualTlsAuthentication?: Record<string, any>, Tags?: Record<string, any> }) => Promise<CreateDomainNameResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings-apimappingid.html#DeleteApiMapping API Gateway V2: DeleteApiMapping}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#DeleteApiMapping API Gateway V2: DeleteApiMapping}
   */
  DeleteApiMapping: (input: { ApiMappingId: string, DomainName: string }) => Promise<DeleteApiMappingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname.html#DeleteDomainName API Gateway V2: DeleteDomainName}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#DeleteDomainName API Gateway V2: DeleteDomainName}
   */
  DeleteDomainName: (input: { DomainName: string }) => Promise<DeleteDomainNameResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#GetApiMappings API Gateway V2: GetApiMappings}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#GetApiMappings API Gateway V2: GetApiMappings}
   */
  GetApiMappings: (input: { DomainName: string, MaxResults?: number, NextToken?: string, paginate?: boolean | string }) => Promise<GetApiMappingsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments-deploymentid.html#GetDeployment API Gateway V2: GetDeployment}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#GetDeployment API Gateway V2: GetDeployment}
   */
  GetDeployment: (input: { ApiId: string, NextToken?: string, MaxResults?: number }) => Promise<GetDeploymentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments.html#GetDeployments API Gateway V2: GetDeployments}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/apigatewayv2/readme.md#GetDeployments API Gateway V2: GetDeployments}
   */
  GetDeployments: (input: { ApiId: string, NextToken?: string, MaxResults?: number, paginate?: boolean | string }) => Promise<GetDeploymentsResponse>
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

export type {
  AwsLiteAPIGatewayV2,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  CreateApiMappingResponse,
  CreateDeploymentResponse,
  CreateDomainNameResponse,
  DeleteApiMappingResponse,
  DeleteDomainNameResponse,
  GetApiMappingsResponse,
  GetDeploymentResponse,
  GetDeploymentsResponse,
  UpdateStageResponse,
  // $EXPORT_END
}
