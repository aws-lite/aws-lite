# `@aws-lite/apigatewayv2`

> Official `aws-lite` plugin for API Gateway V2

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/apigatewayv2
```

Optionally install types:

```sh
npm i -D @aws-lite/apigatewayv2-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/apigatewayv2)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/apigatewayv2)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `CreateDeployment`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments.html#CreateDeployment)

Properties:
- **`ApiId` (string) [required]**
  - API ID
- **`Description` (string)**
  - Deployment description
- **`StageName` (string)**
  - Stage name


### `GetDeployment`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments-deploymentid.html#GetDeployment)

Properties:
- **`ApiId` (string) [required]**
  - API ID
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`MaxResults` (number)**
  - Maximum number of items to evaluate and return


### `GetDeployments`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments.html#GetDeployments)

Properties:
- **`ApiId` (string) [required]**
  - API ID
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`MaxResults` (number)**
  - Maximum number of items to evaluate and return
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `UpdateStage`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#UpdateStage)

Properties:
- **`ApiId` (string) [required]**
  - API ID
- **`StageName` (string) [required]**
  - Stage name
- **`AccessLogSettings` (object)**
  - Access log settings for the stage
  - [More details (AWS)](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-accesslogsettings)
- **`AutoDeploy` (boolean)**
  - Enable automatic deployments upon API updates: `true` or `false` (default)
- **`ClientCertificateId` (string)**
  - Client certificate ID for the stage
- **`DefaultRouteSettings` (object)**
  - Default route settings for the stage
  - [More details (AWS)](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-routesettings)
- **`DeploymentId` (string)**
  - Deployment ID for the API stage; cannot be updated if `autoDeploy` is enabled
- **`Description` (string)**
  - Deployment description
- **`RouteSettings` (object)**
  - Route settings for the stage
  - [More details (AWS)](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-routesettingsmap)
- **`StageVariables` (object)**
  - Stage variables; names can have alphanumeric and underscore characters, values must match: `[A-Za-z0-9-._~:/?#&=,]+`.
  - [More details (AWS)](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-stagevariablesmap)


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`CreateApi`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis.html#CreateApi)
- [`CreateApiMapping`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#CreateApiMapping)
- [`CreateAuthorizer`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-authorizers.html#CreateAuthorizer)
- [`CreateDomainName`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames.html#CreateDomainName)
- [`CreateIntegration`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations.html#CreateIntegration)
- [`CreateIntegrationResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid-integrationresponses.html#CreateIntegrationResponse)
- [`CreateModel`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-models.html#CreateModel)
- [`CreateRoute`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes.html#CreateRoute)
- [`CreateRouteResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid-routeresponses.html#CreateRouteResponse)
- [`CreateStage`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages.html#CreateStage)
- [`CreateVpcLink`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/vpclinks.html#CreateVpcLink)
- [`DeleteAccessLogSettings`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename-accesslogsettings.html#DeleteAccessLogSettings)
- [`DeleteApi`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid.html#DeleteApi)
- [`DeleteApiMapping`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings-apimappingid.html#DeleteApiMapping)
- [`DeleteAuthorizer`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-authorizers-authorizerid.html#DeleteAuthorizer)
- [`DeleteCorsConfiguration`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-cors.html#DeleteCorsConfiguration)
- [`DeleteDeployment`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments-deploymentid.html#DeleteDeployment)
- [`DeleteDomainName`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname.html#DeleteDomainName)
- [`DeleteIntegration`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid.html#DeleteIntegration)
- [`DeleteIntegrationResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid-integrationresponses-integrationresponseid.html#DeleteIntegrationResponse)
- [`DeleteModel`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-models-modelid.html#DeleteModel)
- [`DeleteRoute`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid.html#DeleteRoute)
- [`DeleteRouteRequestParameter`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid-requestparameters-requestparameterkey.html#DeleteRouteRequestParameter)
- [`DeleteRouteResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid-routeresponses-routeresponseid.html#DeleteRouteResponse)
- [`DeleteRouteSettings`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename-routesettings-routekey.html#DeleteRouteSettings)
- [`DeleteStage`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#DeleteStage)
- [`DeleteVpcLink`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/vpclinks-vpclinkid.html#DeleteVpcLink)
- [`ExportApi`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-exports-specification.html#ExportApi)
- [`GetApi`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid.html#GetApi)
- [`GetApiMapping`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings-apimappingid.html#GetApiMapping)
- [`GetApiMappings`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#GetApiMappings)
- [`GetApis`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis.html#GetApis)
- [`GetAuthorizer`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-authorizers-authorizerid.html#GetAuthorizer)
- [`GetAuthorizers`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-authorizers.html#GetAuthorizers)
- [`GetDomainName`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname.html#GetDomainName)
- [`GetDomainNames`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames.html#GetDomainNames)
- [`GetIntegration`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid.html#GetIntegration)
- [`GetIntegrationResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid-integrationresponses-integrationresponseid.html#GetIntegrationResponse)
- [`GetIntegrationResponses`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid-integrationresponses.html#GetIntegrationResponses)
- [`GetIntegrations`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations.html#GetIntegrations)
- [`GetModel`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-models-modelid.html#GetModel)
- [`GetModels`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-models.html#GetModels)
- [`GetModelTemplate`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-models-modelid-template.html#GetModelTemplate)
- [`GetRoute`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid.html#GetRoute)
- [`GetRouteResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid-routeresponses-routeresponseid.html#GetRouteResponse)
- [`GetRouteResponses`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid-routeresponses.html#GetRouteResponses)
- [`GetRoutes`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes.html#GetRoutes)
- [`GetStage`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename.html#GetStage)
- [`GetStages`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages.html#GetStages)
- [`GetTags`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/tags-resource-arn.html#GetTags)
- [`GetVpcLink`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/vpclinks-vpclinkid.html#GetVpcLink)
- [`GetVpcLinks`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/vpclinks.html#GetVpcLinks)
- [`ImportApi`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis.html#ImportApi)
- [`ReimportApi`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid.html#ReimportApi)
- [`ResetAuthorizersCache`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-stages-stagename-cache-authorizers.html#ResetAuthorizersCache)
- [`TagResource`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/tags-resource-arn.html#TagResource)
- [`UntagResource`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/tags-resource-arn.html#UntagResource)
- [`UpdateApi`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid.html#UpdateApi)
- [`UpdateApiMapping`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings-apimappingid.html#UpdateApiMapping)
- [`UpdateAuthorizer`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-authorizers-authorizerid.html#UpdateAuthorizer)
- [`UpdateDeployment`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-deployments-deploymentid.html#UpdateDeployment)
- [`UpdateDomainName`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname.html#UpdateDomainName)
- [`UpdateIntegration`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid.html#UpdateIntegration)
- [`UpdateIntegrationResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-integrations-integrationid-integrationresponses-integrationresponseid.html#UpdateIntegrationResponse)
- [`UpdateModel`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-models-modelid.html#UpdateModel)
- [`UpdateRoute`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid.html#UpdateRoute)
- [`UpdateRouteResponse`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes-routeid-routeresponses-routeresponseid.html#UpdateRouteResponse)
- [`UpdateVpcLink`](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/vpclinks-vpclinkid.html#UpdateVpcLink)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
