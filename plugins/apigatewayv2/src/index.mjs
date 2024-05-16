/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'apigateway'
const property = 'APIGatewayV2'
const required = true
const docRoot = 'https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/'

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const ApiId = { ...str, required, comment: 'API ID' }
const Description = { ...str, comment: 'Deployment description' }
const DomainName = { ...str, required, comment: 'The domain name' }
const Limit = { ...num, comment: 'Maximum number of items to evaluate and return' }
const NextToken = { ...str, comment: 'Pagination cursor token to be used if `NextToken` was returned in a previous response' }
const StageName = { ...str, comment: 'Stage name' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const defaultResponse = ({ payload }) => CamelToPascalParams(payload)
const emptyResponse = () => {}

const paginator = {
  cursor: 'nextToken',
  token: 'nextToken',
  accumulator: 'items',
  type: 'query',
}

// API Gateway v1 + SDK v2 / v3 use camel-cased params
// API Gateway v2 also uses camel-cased params, but SDK v3 Pascal-cases API Gateway v2's camel-cased params
// Generally aws-lite adheres to the conventions set by the API authors, but doing so here would break SDK v3-based types + interop
// Now I can't believe I'm sitting here writing this code tbqh
const pascalToCamelParams = obj => Object.fromEntries(
  Object.entries(obj).reduce(
    (acc, [ k, v ]) => acc.concat(
      [ [ k[0].toLowerCase() + k.slice(1), v ] ],
    ), [],
  ),
)
const isObj = i => i && typeof i === 'object' && !Array.isArray(i)
const isArr = i => Array.isArray(i)
const CamelToPascalParams = obj => Object.fromEntries(
  Object.entries(obj).reduce(
    (acc, [ k, v ]) => {
      let val = v
      if (isObj(v)) val = CamelToPascalParams(v)
      if (isArr(v)) val = val.map(CamelToPascalParams)
      return acc.concat(
        [ [ k[0].toUpperCase() + k.slice(1), val ] ],
      )
    }, [],
  ),
)

const CreateDeployment =  {
  awsDoc: docRoot + 'apis-apiid-deployments.html#CreateDeployment',
  validate: {
    ApiId,
    Description: { ...str, comment: 'Deployment description' },
    StageName,
  },
  request: async (params) => {
    const { apiId, description, stageName } = pascalToCamelParams(params)
    return {
      path: `/v2/apis/${apiId}/deployments`,
      method: 'POST',
      payload: { description, stageName },
    }
  },
  response: defaultResponse,
}

const CreateDomainName = {
  awsDoc: docRoot + 'domainnames.html#CreateDomainName',
  validate: {
    DomainName,
    DomainNameConfigurations: { ...arr, comment: 'Array of `DomainNameConfiguration` objects', ref: docRoot + 'domainnames.html#domainnames-prop-createdomainnameinput-domainnameconfigurations' },
    MutualTlsAuthentication: { ...obj, comment: '`MutualTlsAuthenticationInput` object', ref: docRoot + 'domainnames.html#domainnames-prop-domainname-mutualtlsauthentication' },
    Tags: { ...obj, comment: 'Record containing tags associated with the domain name' },
  },
  request: (params) => {
    return {
      path: '/v2/domainnames',
      payload: params,
    }
  },
  response: defaultResponse,
}

const DeleteApiMapping = {
  awsDoc: docRoot + 'domainnames-domainname-apimappings-apimappingid.html#DeleteApiMapping',
  validate: {
    ApiMappingId: { ...str, required, comment: 'ID of the API mapping' },
    DomainName,
  },
  request: ({ ApiMappingId, DomainName }) => {
    return {
      path: `v2/domainnames/${DomainName}/apimappings/${ApiMappingId}`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteDomainName = {
  awsDoc: docRoot + 'domainnames-domainname.html#DeleteDomainName',
  validate: {
    DomainName,
  },
  request: ({ DomainName }) => {
    return {
      path: `/v2/domainnames/${DomainName}`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const GetApiMappings = {
  awsDoc: docRoot + 'domainnames-domainname-apimappings.html#GetApiMappings',
  validate: {
    DomainName,
    MaxResults: Limit,
    NextToken,
    paginate: valPaginate,
  },
  request: (params) => {
    const { domainName, maxResults, nextToken  } = pascalToCamelParams(params)
    let paginate
    if (params.paginate) paginate = true
    return {
      path: `v2/domainnames/${domainName}/apimappings`,
      query: { maxResults, nextToken },
      paginate,
      paginator,
    }
  },
  response: defaultResponse,
}

const GetDeployment =  {
  awsDoc: docRoot + 'apis-apiid-deployments-deploymentid.html#GetDeployment',
  validate: {
    ApiId,
    NextToken,
    MaxResults: Limit,
  },
  request: async (params) => {
    const { apiId, nextToken, maxResults } = pascalToCamelParams(params)
    return {
      path: `/v2/apis/${apiId}/deployments`,
      query: { nextToken, maxResults },
    }
  },
  response: defaultResponse,
}

const GetDeployments = {
  awsDoc: docRoot + 'apis-apiid-deployments.html#GetDeployments',
  validate: {
    ApiId,
    NextToken,
    MaxResults: Limit,
    paginate: valPaginate,
  },
  request: async (params) => {
    const { apiId, nextToken, maxResults } = pascalToCamelParams(params)
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }
    return {
      path: `/v2/apis/${apiId}/deployments`,
      query: { nextToken, maxResults },
      paginate,
      paginator,
    }
  },
  response: defaultResponse,
}

const UpdateStage =  {
  awsDoc: docRoot + 'apis-apiid-stages-stagename.html#UpdateStage',
  validate: {
    ApiId,
    StageName: { ...StageName, required },
    AccessLogSettings: { ...obj, comment: 'Access log settings for the stage', ref: docRoot + 'apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-accesslogsettings' },
    AutoDeploy: { ...bool, comment: 'Enable automatic deployments upon API updates: `true` or `false` (default)' },
    ClientCertificateId: { ...str, comment: 'Client certificate ID for the stage' },
    DefaultRouteSettings: { ...obj, comment: 'Default route settings for the stage', ref: docRoot + 'apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-routesettings',
    },
    DeploymentId: { ...str, comment: 'Deployment ID for the API stage; cannot be updated if `autoDeploy` is enabled' },
    Description,
    RouteSettings: { ...obj, comment: 'Route settings for the stage', ref: docRoot + 'apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-routesettingsmap' },
    StageVariables: { ...obj, comment: 'Stage variables; names can have alphanumeric and underscore characters, values must match: `[A-Za-z0-9-._~:/?#&=,]+`.', ref: docRoot + 'apis-apiid-stages-stagename.html#apis-apiid-stages-stagename-model-stagevariablesmap' },
  },
  request: async (params) => {
    const payload = pascalToCamelParams(params)
    const { apiId, stageName } = payload
    return {
      path: `/v2/apis/${apiId}/stages/${stageName}`,
      method: 'PATCH',
      payload,
    }
  },
  response: defaultResponse,
}

export default {
  name: '@aws-lite/apigatewayv2',
  service,
  property,
  methods: {
    CreateDeployment,
    CreateDomainName,
    DeleteApiMapping,
    DeleteDomainName,
    GetApiMappings,
    GetDeployment,
    GetDeployments,
    UpdateStage,
    ...incomplete },
}
