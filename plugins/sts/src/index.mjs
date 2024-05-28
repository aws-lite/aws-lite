/**
 * Plugin maintained by: @architect
 */

import { default as qs } from 'node:querystring'
import { querystringifyParams } from './lib.mjs'

const service = 'sts'
const property = 'STS'
const required = true
const docRoot = 'https://docs.aws.amazon.com/STS/latest/APIReference/'

// Validation types
const arr = { type: 'array' }
// const obj = { type: 'object' }
const num = { type: 'number' }
const str = { type: 'string' }

const headers = { 'content-type': 'application/x-www-form-urlencoded' }

const DurationSeconds = { ...num, comment: 'Duration of the role session; from `900` to `43200`' }
const Policy = { ...str, comment: 'JSON IAM policy document to use as an inline session policy' }
const PolicyArns = { ...arr, comment: 'ARNs of the IAM managed policies to use' }
const RoleArn = { ...str, required, comment: 'ARN of the role to assume' }
const RoleSessionName = { ...str, required, comment: 'Identifier for the assumed role session; must conform to `[\w+=,.@-]*`' }
const SerialNumber = { ...str, comment: 'MFA device ID associated with the user making the call' }
const Tags = { ...arr, comment: 'Session tags; each tag is an object containing a `Key` and `Value` property' }
const TokenCode = { ...str, comment: `MFA value (if required by the role's trust policy)` }

const getHost = utils => `sts.${utils.region}.amazonaws.com` // See: https://github.com/mhart/aws4/pull/162

const AssumeRole = {
  awsDoc: docRoot + 'API_AssumeRole.html',
  validate: {
    RoleArn,
    RoleSessionName,
    DurationSeconds,
    ExternalId: { ...str, comment: 'Unique identifier that might be required when assuming a role in another account' },
    Policy,
    PolicyArns,
    ProvidedContexts: { ...arr, comment: 'List of previously acquired trusted context assertions in the format of a JSON array', ref: docRoot + 'API_ProvidedContext.html' },
    SerialNumber,
    SourceIdentity: { ...str, comment: 'Source identity specified by the principal making the call' },
    Tags,
    TokenCode,
    TransitiveTagKeys: { ...arr, comment: 'Session tags, set as transitive to subsequent sessions in the role chain', ref: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining' },
  },
  request: (params, utils) => {
    const host = getHost(utils)
    const query = querystringifyParams(params)
    return {
      host,
      query: {
        Action: 'AssumeRole',
        Version: '2011-06-15',
        ...query,
      },
    }
  },
  response: ({ payload }) => payload.AssumeRoleResult,
}

const AssumeRoleWithSAML = {
  awsDoc: docRoot + 'API_AssumeRoleWithSAML.html',
  validate: {
    RoleArn,
    PrincipalArn: { ...str, required, comment: 'ARN of the SAML provider that describes the IdP' },
    SAMLAssertion: { ...str, required, comment: 'base64-encoded SAML authentication response provided by the IdP' },
    DurationSeconds,
    Policy,
    PolicyArns,
  },
  request: (params, utils) => {
    const host = getHost(utils)
    const query = querystringifyParams(params)
    return {
      host,
      query: {
        Action: 'AssumeRoleWithSAML',
        Version: '2011-06-15',
        ...query,
      },
    }
  },
  response: ({ payload }) => payload.AssumeRoleWithSAMLResult,
}

const AssumeRoleWithWebIdentity = {
  awsDoc: docRoot + 'API_AssumeRoleWithWebIdentity.html',
  validate: {
    RoleArn,
    RoleSessionName,
    WebIdentityToken: { ...str, required, comment: 'OAuth 2.0 access token or OpenID Connect ID token provided by the IdP' },
    DurationSeconds,
    ProviderId: { ...str, comment: 'Fully qualified host of the domain name of the OAuth 2.0 IdP; do not specify this value for an OpenID Connect identity provider' },
    Policy,
    PolicyArns,
  },
  request: (params, utils) => {
    const host = getHost(utils)
    const query = querystringifyParams(params)
    return {
      host,
      query: {
        Action: 'AssumeRoleWithWebIdentity',
        Version: '2011-06-15',
        ...query,
      },
    }
  },
  response: ({ payload }) => payload.AssumeRoleWithWebIdentityResult,
}

const DecodeAuthorizationMessage = {
  awsDoc: docRoot + 'API_DecodeAuthorizationMessage.html',
  validate: {
    EncodedMessage: { ...str, required, comment: 'Encoded message returned with the response' },
  },
  request: (params, utils) => {
    const { EncodedMessage } = params
    const host = getHost(utils)
    return {
      host,
      headers,
      payload: qs.stringify({
        Action: 'DecodeAuthorizationMessage',
        Version: '2011-06-15',
        EncodedMessage,
      }),
    }
  },
  response: ({ payload }) => payload,
}

const GetAccessKeyInfo = {
  awsDoc: docRoot + 'API_GetAccessKeyInfo.html',
  validate: {
    AccessKeyId: { ...str, required, comment: 'AWS access key to query' },
  },
  request: (params, utils) => {
    const host = getHost(utils)
    return {
      host,
      query: {
        Action: 'GetAccessKeyInfo',
        Version: '2011-06-15',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetAccessKeyInfoResult,
}

const GetCallerIdentity = {
  awsDoc: docRoot + 'API_GetCallerIdentity.html',
  validate: {},
  request: (params, utils) => {
    const host = getHost(utils)
    return {
      host,
      headers,
      payload: qs.stringify({
        Action: 'GetCallerIdentity',
        Version: '2011-06-15',
      }),
    }
  },
  response: ({ payload }) => payload.GetCallerIdentityResult,
}

const GetFederationToken = {
  awsDoc: docRoot + 'API_GetFederationToken.html',
  validate: {
    Name: { ...str, required, comment: 'Name of the federated user' },
    DurationSeconds,
    Policy,
    PolicyArns,
    Tags,
  },
  request: (params, utils) => {
    const host = getHost(utils)
    return {
      host,
      query: {
        Version: '2011-06-15',
        Action: 'GetFederationToken',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetFederationTokenResult,
}
const GetSessionToken = {
  awsDoc: docRoot + 'API_GetSessionToken.html',
  validate: {
    DurationSeconds,
    SerialNumber,
    // Tags, // Noted in the example, but not found in SDK v3 etc.
    TokenCode,
  },
  request: (params, utils) => {
    const host = getHost(utils)
    return {
      host,
      query: {
        Version: '2011-06-15',
        Action: 'GetFederationToken',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetSessionTokenResult,
}

export default {
  name: '@aws-lite/sts',
  service,
  property,
  methods: {
    AssumeRole,
    AssumeRoleWithSAML,
    AssumeRoleWithWebIdentity,
    DecodeAuthorizationMessage,
    GetAccessKeyInfo,
    GetCallerIdentity,
    GetFederationToken,
    GetSessionToken,
  },
}
