/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import lib from './lib.mjs'
const { serializeArray, normalizeResponse } = lib

const service = 'iam'
const property = 'IAM'
const required = true
const docRoot = 'https://docs.aws.amazon.com/IAM/latest/APIReference/'
const userGuide = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/'

const arr = { type: 'array' }
const bool = { type: 'boolean' }
// const obj = { type: 'object' }
const num = { type: 'number' }
const str = { type: 'string' }

const AccessKeyId = { ...str, required, comment: 'ID of the access key' }
const ActionNames = { ...arr, required, comment: 'Array of between 3 to 128 API operation names' }
const AWSServiceName = { ...str, required, comment: 'The service principal to which this role is attached; use `CustomSuffix` to prevent duplication errors during multiple requests for the same service' }
const CallerArn = { ...str, comment: 'ARN of the IAM user to use as the simulated caller of the API operations' }
const CertificateId = { ...str, required, comment: 'ID of the signing certificate' }
const ContextEntries = { ...arr, comment: 'Array of context keys and values' }
const Description = { ...str, comment: 'Description of the resource' }
const GroupName = { ...str, required, comment: 'Name of the group; names are not distinguished by case' }
const InstanceProfileName = { ...str, required, comment: 'Name of the instance profile' }
const Marker = { ...str, comment: 'Pagination cursor' }
const MaxItems = { ...num, comment: 'Maximum number of items to be returned in a response; at most 1000' }
const MaxSessionDuration = { ...num, comment: 'Maximum session duration (in seconds) to set for the specified role' }
const NewPath = { ...str, comment: 'New path for the service' }
const OpenIDConnectProviderArn = { ...str, required, comment: 'ARN of the OpenID Connect resource' }
const Path = { ...str, comment: 'Path for the identifier', ref: userGuide + 'reference_identifiers.html' }
const PathPrefix = { ...str, comment: 'Filter results by path prefix' }
const PermissionsBoundary = { ...str, comment: `ARN of a managed policy to be used to set the resource's permissions boundary` }
const PermissionsBoundaryPolicyInputList = { ...arr, comment: 'IAM permissions boundary policy to simulate' }
const PolicyArn = { ...str, required, comment: 'Arn of the policy' }
const PolicyDocument = { type: [ 'string', 'object' ], required, comment: 'The policy document; can be an object, or JSON or YAML string' }
const PolicyInputList = { ...arr, comment: 'Array of policies to get context keys, each item must be a complete policy object' }
const PolicyName = { ...str, required, comment: 'Name of the policy' }
const PolicySourceArn = { ...str, required, comment: 'ARN of the user, group or role for which the resources context keys will be listed', ref: docRoot + 'API_GetContextKeysForPrincipalPolicy.html#API_GetContextKeysForPrincipalPolicy_RequestParameters' }
const ResourceArns = { ...arr, comment: 'Array of AWS resource ARNs; default `*`' }
const ResourceHandlingOption = { ...str, comment: 'Specify the type of simulation to run' }
const ResourceOwner = { ...str, comment: 'ARN representing the AWS account ID that owns any simulated resources' }
const ResourcePolicy = { type: [ 'string', 'object' ], comment: 'A resource based policy' }
const RoleName = { ...str, required, comment: 'Name of the role' }
const ServiceName = { ...str, required, comment: 'Name of the AWS service' }
const ServiceSpecificCredentialId = { ...str, required, comment: 'ID of the service specific credential' }
const SSHPublicKeyId = { ...str, required, comment: 'ID of the SSH public key' }
const Tags = { ...arr, comment: 'List of tags to attach to the resource', ref: userGuide + 'id_tags.html' }
const UserName = { ...str, required, comment: 'User name' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
const VersionId = { ...str, required, comment: 'ID of the policy version; typically `v<n>`' }


const paginator = { type: 'query', cursor: 'Marker' }

const emptyResponse = () => { return {} }
const defaultVersion = '2010-05-08'

const AddClientIDToOpenIDConnectProvider = {
  awsDoc: docRoot + 'API_AddClientIDToOpenIDConnectProvider.html',
  validate: {
    ClientID: { ...str, required, comment: 'The client ID (aka the audience) to add to the IAM OpenId Connect provider resource' },
    OpenIDConnectProviderArn,
  },
  request: params => {
    return {
      query: {
        Action: 'AddClientIDToOpenIDConnectProvider',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const AddRoleToInstanceProfile = {
  awsDoc: docRoot + 'API_AddRoleToInstanceProfile.html',
  validate: {
    InstanceProfileName,
    RoleName: { ...str, required, comment: 'Name of the role' },
  },
  request: params => {
    return {
      query: {
        Action: 'AddRoleToInstanceProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const AddUserToGroup = {
  awsDoc: docRoot + 'API_AddUserToGroup.html',
  validate: {
    GroupName,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'AddUserToGroup',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const AttachGroupPolicy = {
  awsDoc: docRoot + 'API_AttachGroupPolicy.html',
  validate: {
    GroupName,
    PolicyArn,
  },
  request: params => {
    return {
      query: {
        Action: 'AttachGroupPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const AttachRolePolicy = {
  awsDoc: docRoot + 'API_AttachRolePolicy.html',
  validate: {
    PolicyArn,
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'AttachRolePolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const AttachUserPolicy = {
  awsDoc: docRoot + 'API_AttachUserPolicy.html',
  validate: {
    PolicyArn,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'AttachUserPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const ChangePassword = {
  awsDoc: docRoot + 'API_ChangePassword.html',
  validate: {
    NewPassword: { ...str, required, comment: 'New password; must conform to the accounts password policy' },
    OldPassword: { ...str, required, comment: 'Current password' },
  },
  request: params => {
    return {
      query: {
        Action: 'ChangePassword',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const CreateAccessKey = {
  awsDoc: docRoot + 'API_CreateAccessKey.html',
  validate: {
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'CreateAccessKey',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.CreateAccessKeyResult,
}

const CreateAccountAlias = {
  awsDoc: docRoot + 'API_CreateAccountAlias.html',
  validate: {
    AccountAlias: { ...str, required, comment: 'Account alias to create' },
  },
  request: params => {
    return {
      query: {
        Action: 'CreateAccountAlias',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const CreateGroup = {
  awsDoc: docRoot + 'API_CreateGroup.html',
  validate: {
    GroupName,
    Path,
  },
  request: params => {
    const query = {
      Action: 'CreateGroup',
      Version: defaultVersion,
      ...params,
    }
    return { query }
  },
  response: ({ payload }) => payload.CreateGroupResult,
}

const CreateInstanceProfile = {
  awsDoc: docRoot + 'API_CreateInstanceProfile.html',
  validate: {
    InstanceProfileName,
    Path,
    Tags,
  },
  request: params => {
    const { Tags } = params
    let query = {
      Action: 'CreateInstanceProfile',
      Version: defaultVersion,
      ...params,
    }
    if (Tags) {
      delete query.Tags
      Object.assign(query, serializeArray(Tags, 'Tags'))
    }
    return { query }
  },
  response: ({ payload }) => {
    let { CreateInstanceProfileResult } = payload
    let { InstanceProfile } = CreateInstanceProfileResult
    let { Tags, Roles } = InstanceProfile
    if (Tags) InstanceProfile.Tags = Array.isArray(Tags.member) ? Tags.member : [ Tags.member ]
    if (Roles && !Array.isArray(Roles)) {
      Roles = [ Roles ]
    }
    else {
      Roles = []
    }
    InstanceProfile.Roles = Roles.map(i => {
      const { Tags } = i
      if (Tags) i.Tags = Array.isArray(Tags.member) ? Tags.member : [ Tags.member ]
      return i
    })
    return CreateInstanceProfileResult
  },
}

const CreateLoginProfile = {
  awsDoc: docRoot + 'API_CreateLoginProfile.html',
  validate: {
    Password: { ...str, required, comment: 'New password for the user' },
    UserName,
    PasswordResetRequired: { ...bool, comment: 'Set to true to specify the user must make a new password on next sign-in' },
  },
  request: params => {
    return {
      query: {
        Action: 'CreateLoginProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.CreateLoginProfileResult,
}

const CreateOpenIDConnectProvider = {
  awsDoc: docRoot + 'API_CreateOpenIDConnectProvider.html',
  validate: {
    Url: { ...str, required, comment: 'URL of the identity provider; must begin with `https://`' },
    ClientIDList: { ...arr, comment: 'Array of at most 255 client IDs', ref: docRoot + 'API_CreateOpenIDConnectProvider.html#API_CreateOpenIDConnectProvider_RequestParameters' },
    Tags,
    ThumbprintList: { ...arr, comment: 'Array of server certificate thumbprints for the OIDC identity providers server certificates', ref: docRoot + 'API_CreateOpenIDConnectProvider.html#API_CreateOpenIDConnectProvider_RequestParameters' },
  },
  request: params => {
    const { Url, ClientIDList, Tags, ThumbprintList } = params
    let query = {
      Action: 'CreateOpenIDConnectProvider',
      Version: defaultVersion,
      Url,
    }
    if (ClientIDList) Object.assign(query, serializeArray('ClientIDList', ClientIDList))
    if (Tags) query = Object.assign(query, serializeArray(Tags, 'Tags'))
    if (ThumbprintList) Object.assign(query, serializeArray('ThumbprintList', ThumbprintList))
    return { query }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags' ])
    let { CreateOpenIDConnectProviderResult } = payload
    normalizeResponse(CreateOpenIDConnectProviderResult, arrayKeys)
    return CreateOpenIDConnectProviderResult
  },
}

const CreatePolicy = {
  awsDoc: docRoot + 'API_CreatePolicy.html',
  validate: {
    PolicyDocument,
    PolicyName,
    Description,
    Path,
    Tags,
  },
  request: params => {
    const { Tags } = params
    let query = {
      Action: 'CreatePolicy',
      Version: defaultVersion,
      ...params,
    }
    if (typeof query.PolicyDocument !== 'string') {
      query.PolicyDocument = JSON.stringify(query.PolicyDocument)
    }
    if (Tags) {
      delete query.Tags
      Object.assign(query, serializeArray(Tags, 'Tags'))
    }
    return { query }
  },
  response: ({ payload }) => {
    let { CreatePolicyResult } = payload
    if (CreatePolicyResult.Policy.Tags) {
      const { member } = CreatePolicyResult.Policy.Tags
      CreatePolicyResult.Policy.Tags = Array.isArray(member) ? member : [ member ]
    }
    return CreatePolicyResult
  },
}

// TODO: figure out why this returns status code 302
// const CreatePolicyVersion = {
//   awsDoc: docRoot + 'API_CreatePolicyVersion.html',
//   validate: {
//     PolicyArn,
//     PolicyDocument,
//     SetAsDefault: { ...bool, comment: 'Set to true to make this the default version used by all IAM resources' },
//   },
//   request: params => {
//     let query = {
//       Action: 'CreatePolicyVersion',
//       Version: defaultVersion,
//       ...params,
//     }
//     if (typeof query.PolicyDocument !== 'string') {
//       query.PolicyDocument = JSON.stringify(query.PolicyDocument)
//     }
//   },
//   response: ( payload ) => {
//     return payload
//   },
// }

const CreateRole = {
  awsDoc: docRoot + 'API_CreateRole.html',
  validate: {
    AssumeRolePolicyDocument: { type: [ 'string', 'object' ], required, comment: 'Trust relationship policy document granting an entity permission to assume the role; can be an object, or JSON or YAML string' },
    RoleName,
    Description,
    MaxSessionDuration,
    Path: { ...str, comment: 'Path for the role identifier', ref: userGuide + 'reference_identifiers.html' },
    PermissionsBoundary: { ...str, comment: `ARN of a managed policy to be used to set the role's permissions boundary` },
    Tags: { ...arr, comment: 'List of tags to attach to the role', ref: userGuide + 'id_tags.html' },
  },
  request: params => {
    let query = {
      Action: 'CreateRole',
      Version: '2010-05-08',
      ...params,
    }
    if (typeof query.AssumeRolePolicyDocument !== 'string') {
      query.AssumeRolePolicyDocument = JSON.stringify(query.AssumeRolePolicyDocument)
    }
    return {
      query,
    }
  },
  response: ({ payload }) => payload.CreateRoleResult,
}

const CreateServiceLinkedRole = {
  awsDoc: docRoot + 'API_CreateServiceLinkedRole.html',
  validate: {
    AWSServiceName,
    CustomSuffix: { ...str, comment: 'Identifier for the role; not supported by all services' },
    Description,
  },
  request: params => {
    return {
      query: {
        Action: 'CreateServiceLinkedRole',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.CreateServiceLinkedRoleResult,
}

const CreateServiceSpecificCredential = {
  awsDoc: docRoot + 'API_CreateServiceSpecificCredential.html',
  validate: {
    ServiceName,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'CreateServiceSpecificCredential',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.CreateServiceSpecificCredentialResult,
}

const CreateUser = {
  awsDoc: docRoot + 'API_CreateUser.html',
  validate: {
    UserName,
    Path,
    PermissionsBoundary,
    Tags,
  },
  request: params => {
    let query = {
      Action: 'CreateUser',
      Version: defaultVersion,
      ...params,
    }
    if (query.Tags) {
      query.Tags = query.Tags.forEach(({ Key, Value }, i) => {
        query[`Tags.member.${i + 1}.Key`] = Key
        query[`Tags.member.${i + 1}.Value`] = Value
      })
      delete query.Tags
    }
    return {
      query,
    }
  },
  response: ({ payload }) => {
    let { CreateUserResult } = payload
    const { Tags } = CreateUserResult.User
    if (Tags) {
      const { member } = Tags
      CreateUserResult.User.Tags = Array.isArray(member) ? member : [ member ]
    }
    return CreateUserResult
  },
}

const DeleteAccessKey = {
  awsDoc: docRoot + 'API_DeleteAccessKey.html',
  validate: {
    AccessKeyId,
    UserName: { ...UserName, required: false },
  },
  request: params => {
    const query = {
      Action: 'DeleteAccessKey',
      Version: defaultVersion,
      ...params,
    }
    return { query }
  },
  response: emptyResponse,
}

const DeleteAccountAlias = {
  awsDoc: docRoot + 'API_DeleteAccountAlias.html',
  validate: {
    AccountAlias: { ...str, required, comment: 'The account alias' },
  },
  request: params => {
    const query = {
      Action: 'DeleteAccountAlias',
      Version: defaultVersion,
      ...params,
    }
    return { query }
  },
  response: emptyResponse,
}

const DeleteAccountPasswordPolicy = {
  awsDoc: docRoot + 'API_DeleteAccountPasswordPolicy.html',
  validate: {},
  request: () => {
    return {
      query: {
        Action: 'DeleteAccountPasswordPolicy',
        Version: defaultVersion,
      },
    }
  },
  response: emptyResponse,
}

const DeleteGroup = {
  awsDoc: docRoot + 'API_DeleteGroup.html',
  validate: {
    GroupName,
  },
  request: params => {
    const query = {
      Action: 'DeleteGroup',
      Version: defaultVersion,
      ...params,
    }
    return { query }
  },
  response: emptyResponse,
}

const DeleteGroupPolicy = {
  awsDoc: docRoot + 'API_DeleteGroupPolicy.html',
  validate: {
    GroupName,
    PolicyName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteGroupPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteInstanceProfile = {
  awsDoc: docRoot + 'API_DeleteInstanceProfile.html',
  validate: {
    InstanceProfileName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteInstanceProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteLoginProfile = {
  awsDoc: docRoot + 'API_DeleteLoginProfile.html',
  validate: {
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteLoginProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteOpenIDConnectProvider = {
  awsDoc: docRoot + 'API_DeleteOpenIDConnectProvider.html',
  validate: {
    OpenIDConnectProviderArn,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteOpenIDConnectProvider',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeletePolicy = {
  awsDoc: docRoot + 'API_DeletePolicy.html',
  validate: {
    PolicyArn,
  },
  request: params => {
    return {
      query: {
        Action: 'DeletePolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeletePolicyVersion = {
  awsDoc: docRoot + 'API_DeletePolicyVersion.html',
  validate: {
    PolicyArn,
    VersionId,
  },
  request: params => {
    return {
      query: {
        Action: 'DeletePolicyVersion',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteRole = {
  awsDoc: docRoot + 'API_DeleteRole.html',
  validate: {
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteRole',
        Version: '2010-05-08',
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteRolePermissionsBoundary = {
  awsDoc: docRoot + 'API_DeleteRolePermissionsBoundary.html',
  validate: {
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteRolePermissionsBoundary',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteRolePolicy = {
  awsDoc: docRoot + 'API_DeleteRolePolicy.html',
  validate: {
    RoleName,
    PolicyName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteRolePolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteServiceLinkedRole = {
  awsDoc: docRoot + 'API_DeleteServiceLinkedRole.html',
  validate: {
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteServiceLinkedRole',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.DeleteServiceLinkedRoleResult,
}

const DeleteServiceSpecificCredential = {
  awsDoc: docRoot + 'API_DeleteServiceSpecificCredential.html',
  validate: {
    ServiceSpecificCredentialId: { ...str, required, comment: 'ID of the service specific credential' },
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteServiceSpecificCredential',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteSigningCertificate = {
  awsDoc: docRoot + 'API_DeleteSigningCertificate.html',
  validate: {
    CertificateId,
    UserName: { ...UserName, required: false },
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteSigningCertificate',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteSSHPublicKey = {
  awsDoc: docRoot + 'API_DeleteSSHPublicKey.html',
  validate: {
    SSHPublicKeyId,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteSSHPublicKey',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteUser = {
  awsDoc: docRoot + 'API_DeleteUser.html',
  validate: {
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteUser',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteUserPermissionsBoundary = {
  awsDoc: docRoot + 'API_DeleteUserPermissionsBoundary.html',
  validate: {
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteUserPermissionsBoundary',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DeleteUserPolicy = {
  awsDoc: docRoot + 'API_DeleteUserPolicy.html',
  validate: {
    PolicyName,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'DeleteUserPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DetachGroupPolicy = {
  awsDoc: docRoot + 'API_DetachGroupPolicy.html',
  validate: {
    GroupName,
    PolicyArn,
  },
  request: params => {
    return {
      query: {
        Action: 'DetachGroupPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DetachRolePolicy = {
  awsDoc: docRoot + 'API_DetachRolePolicy.html',
  validate: {
    PolicyArn,
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'DetachRolePolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const DetachUserPolicy = {
  awsDoc: docRoot + 'API_DetachUserPolicy.html',
  validate: {
    PolicyArn,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'DetachUserPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

// TODO: determine if response is mangled
const GenerateCredentialReport = {
  awsDoc: docRoot + 'API_GenerateCredentialReport.html',
  validate: {},
  request: () => {
    return {
      query: {
        Action: 'GenerateCredentialReport',
        Version: defaultVersion,
      },
    }
  },
  response: ({ payload }) => payload.GenerateCredentialReportResult,

}

const GenerateOrganizationsAccessReport = {
  awsDoc: docRoot + 'API_GenerateOrganizationsAccessReport.html',
  validate: {
    EntityPath: { ...str, required, comment: 'Path of the AWS Organizations entity', ref: docRoot + 'API_GenerateOrganizationsAccessReport.html#API_GenerateOrganizationsAccessReport_RequestParameters' },
    OrganizationsPolicyId: { ...str, comment: 'ID of the AWS Organizations service control policy' },
  },
  request: params => {
    return {
      query: {
        Action: 'GenerateOrganizationsAccessReport',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GenerateOrganizationsAccessReportResult,
}

const GenerateServiceLastAccessedDetails = {
  awsDoc: docRoot + 'API_GenerateServiceLastAccessedDetails.html',
  validate: {
    Arn: { ...str, required, comment: 'ARN of the IAM resource used to generate the report' },
    Granularity: { ...str, comment: 'Specify the type of access information; can be one of: `SERVICE_LEVEL` (default), `ACTION_LEVEL`', ref: docRoot + 'API_GenerateServiceLastAccessedDetails.html#API_GenerateServiceLastAccessedDetails_RequestParameters' },
  },
  request: params => {
    return {
      query: {
        Action: 'GenerateServiceLastAccessedDetails',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GenerateServiceLastAccessedDetailsResult,
}

const GetAccessKeyLastUsed = {
  awsDoc: docRoot + 'API_GetAccessKeyLastUsed.html',
  validate: {
    AccessKeyId,
  },
  request: params => {
    return {
      query: {
        Action: 'GetAccessKeyLastUsed',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetAccessKeyLastUsedResult,
}

// TODO: maybe force async pagination when paginating?
// Requires multiple accumulators, use async iterator paginator when paginating
const GetAccountAuthorizationDetails = {
  awsDoc: docRoot + 'API_GetAccountAuthorizationDetails.html',
  validate: {
    Filter: { ...arr, comment: 'Filter results by entity type', ref: docRoot + 'API_GetAccountAuthorizationDetails.html#API_GetAccountAuthorizationDetails_RequestParameters' },
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    const { Filter, paginate } = params
    let query = { ...params, Version: defaultVersion, Action: 'GetAccountAuthorizationDetails' }
    if (paginate) delete query.paginate
    if (Filter) {
      let n = 1
      query.Filter.forEach(i => {
        query[`Filter.member.${n}`] = i
      })
      delete query.Filter
    }
    return {
      query,
      paginate,
      paginator: {
        type: 'query',
        cursor: 'GetAccountAuthorizationDetailsResult.Marker',
        token: 'Marker',
        // accumulator: 'GetAccountAuthorizationDetailsResult.UserDetailList.member',
      },
    }
  },
  response: ({ payload }) => {
    // Arrays nested in arrays nested in arrays
    const arrayKeys = new Set(
      [ 'UserDetailList', 'UserPolicyList', 'GroupList', 'AttachedManagedPolicies', 'Tags',
        'GroupDetailList', 'GroupPolicyList', 'AttachedManagedPolicies',
        'RoleDetailList', 'InstanceProfileList', 'Roles', 'RolePolicyList', 'AttachedManagedPolicies',
        'Policies', 'PolicyVersionList' ])
    let { GetAccountAuthorizationDetailsResult } = payload
    normalizeResponse(GetAccountAuthorizationDetailsResult, arrayKeys, true)
    return GetAccountAuthorizationDetailsResult
  },
}

const GetAccountPasswordPolicy = {
  awsDoc: docRoot + 'API_GetAccountPasswordPolicy.html',
  validate: {},
  request: () => {
    return {
      query: {
        Action: 'GetAccountPasswordPolicy',
        Version: defaultVersion,
      },
    }
  },
  response: ({ payload }) => payload.GetAccountPasswordPolicyResult,
}

const GetAccountSummary = {
  awsDoc: docRoot + 'API_GetAccountSummary.html',
  validate: {},
  request: () => {
    return {
      query: {
        Action: 'GetAccountSummary',
        Version: defaultVersion,
      },
    }
  },
  response: ({ payload }) => {
    const { GetAccountSummaryResult } = payload
    let { SummaryMap } = GetAccountSummaryResult
    SummaryMap.entry.forEach(({ key, value }) => {
      SummaryMap[key] = value
    })
    delete SummaryMap.entry
    return { SummaryMap }
  },
}

const GetContextKeysForCustomPolicy = {
  awsDoc: docRoot + 'API_GetContextKeysForCustomPolicy.html',
  validate: {
    PolicyInputList: { ...PolicyInputList, required },
  },
  request: params => {
    const { PolicyInputList } = params
    let query = {
      Action: 'GetContextKeysForCustomPolicy',
      Version: defaultVersion,
    }
    PolicyInputList.forEach((value, i) => {
      let json = JSON.stringify(value)
      query[`PolicyInputList.member.${i + 1}`] = `${json}`
    })
    return { query }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'ContextKeyNames' ])
    let { GetContextKeysForCustomPolicyResult } = payload
    normalizeResponse(GetContextKeysForCustomPolicyResult, arrayKeys)
    return GetContextKeysForCustomPolicyResult
  },
}

const GetContextKeysForPrincipalPolicy = {
  awsDoc: docRoot + 'API_GetContextKeysForPrincipalPolicy.html',
  validate: {
    PolicySourceArn,
    PolicyInputList,
  },
  request: params => {
    const { PolicySourceArn, PolicyInputList } = params
    let query = {
      Action: 'GetContextKeysForPrincipalPolicy',
      Version: defaultVersion,
      PolicySourceArn,
    }
    if (PolicyInputList) {
      PolicyInputList.forEach((value, i) => {
        let json = JSON.stringify(value)
        query[`PolicyInputList.member.${i + 1}`] = `${json}`
      })
    }
    return { query }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'ContextKeyNames' ])
    let { GetContextKeysForPrincipalPolicyResult } = payload
    normalizeResponse(GetContextKeysForPrincipalPolicyResult, arrayKeys)
    return GetContextKeysForPrincipalPolicyResult
  },
}

const GetCredentialReport = {
  awsDoc: docRoot + 'API_GetCredentialReport.html',
  validate: {},
  request: () => {
    return {
      query: {
        Action: 'GetCredentialReport',
        Version: defaultVersion,
      },
    }
  },
  response: ({ payload }) => payload.GetCredentialReportResult,
}

// TODO: stop paginator from omitting `Group` field
// TODO: figure out why `User.Tags` is mentioned in documentation, but is not returned in response
const GetGroup = {
  awsDoc: docRoot + 'API_GetGroup.html',
  validate: {
    GroupName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'GetGroup',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'GetGroupResult.Marker',
        accumulator: 'GetGroupResult.Users.member',
      },
    }
  },
  response: ({ payload }) => {
    let { GetGroupResult } = payload
    let { Group, Users } = GetGroupResult
    Users = Users.member || []
    if (!Array.isArray(Users)) Users = [ Users ]
    return {
      Group,
      Users,
    }
  },
}

// TODO: figure out why response is mangled
// const GetGroupPolicy = {
//   awsDoc: docRoot + 'API_GetGroupPolicy.html',
//   validate: {
//     GroupName,
//     PolicyName,
//   },
//   request: params => {
//     return {
//       query: {
//         Action: 'GetGroupPolicy',
//         Version: defaultVersion,
//         ...params,
//       },
//     }
//   },
//   response: ({ payload }) => payload.GetGroupPolicyResult,
// }

const GetInstanceProfile = {
  awsDoc: docRoot + 'API_GetInstanceProfile.html',
  validate: {
    InstanceProfileName,
  },
  request: params => {
    return {
      query: {
        Action: 'GetInstanceProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Roles', 'Tags' ])
    let { GetInstanceProfileResult } = payload
    normalizeResponse(GetInstanceProfileResult, arrayKeys, true)
    return GetInstanceProfileResult
  },
}

const GetLoginProfile = {
  awsDoc: docRoot + 'API_GetLoginProfile.html',
  validate: {
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'GetLoginProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetLoginProfileResult,
}

// TODO: test
// const GetMFADevice = {
//   awsDoc: docRoot + 'API_GetMFADevice.html',
//   validate: {
//     SerialNumber: { ...str, required, comment: 'Serial number of the MFA; only accepts FIDO security key ARNs' },
//     UserName: { ...UserName, required: false },
//   },
//   request: params => {
//     return {
//       query: {
//         Action: 'GetMFADevice',
//         Version: defaultVersion,
//         ...params,
//       },
//     }
//   },
//   response: ({ payload }) => {
//     let { GetMFADeviceResult } = payload
//     let { Certifications } = GetMFADeviceResult
//     if (Certifications) {
//       let { entry } = Certifications
//       entry = Array.isArray(entry) ? entry : [ entry ]
//       entry.forEach(({ key, value }) => {
//         Certifications[key] = value
//       })
//       delete Certifications.entry
//     }
//     else {
//       GetMFADevice.Certifications = []
//     }
//     return GetMFADeviceResult
//   },
// }

// TODO: test
// const GetOpenIDConnectProvider = {
//   awsDoc: docRoot + 'API_GetOpenIDConnectProvider.html',
//   validate: {
//     OpenIDConnectProviderArn,
//   },
//   request: params => {
//     return {
//       query: {
//         Action: 'GetOpenIDConnectProvider',
//         Version: defaultVersion,
//         ...params,
//       },
//     }
//   },
//   response: ({ payload }) => {
//     const arrayKeys = new Set([ 'ThumbprintList', 'ClientIDList', 'Tags' ])
//     let { GetOpenIDConnectProviderResult } = payload
//     normalizeResponse(GetOpenIDConnectProviderResult, arrayKeys)
//     return GetOpenIDConnectProviderResult
//   },
// }

const GetOrganizationsAccessReport = {
  awsDoc: docRoot + 'API_GetOrganizationsAccessReport.html',
  validate: {
    JobId: { ...str, required, comment: 'ID of the report provided in the `GenerateOrganizationsAccessReport` response' },
    Marker,
    MaxItems,
    SortKey: { ...str, comment: 'Sort results by key', ref: docRoot + 'API_GetOrganizationsAccessReport.html#API_GetOrganizationsAccessReport_RequestParameters' },
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'GetOrganizationsAccessReport',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'GetOrganizationsAccessReportResult.Marker',
        accumulator: 'GetOrganizationsAccessReportResult.AccessDetails.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'AccessDetails' ])
    let { GetOrganizationsAccessReportResult } = payload
    normalizeResponse(GetOrganizationsAccessReportResult, arrayKeys)
    return GetOrganizationsAccessReportResult
  },
}

const GetPolicy = {
  awsDoc: docRoot + 'API_GetPolicy.html',
  validate: {
    PolicyArn,
  },
  request: params => {
    return {
      query: {
        Action: 'GetPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    let { GetPolicyResult } = payload
    const { Tags } = GetPolicyResult.Policy
    if (Tags) {
      const { member } = Tags
      GetPolicyResult.Policy.Tags = Array.isArray(member) ? member : [ member ]
    }
    return GetPolicyResult
  },
}

const GetPolicyVersion = {
  awsDoc: docRoot + 'API_GetPolicyVersion.html',
  validate: {
    PolicyArn,
    VersionId,
  },
  request: params => {
    return {
      query: {
        Action: 'GetPolicyVersion',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetPolicyVersionResult,
}

const GetRole = {
  awsDoc: docRoot + 'API_GetRole.html',
  validate: {
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'GetRole',
        Version: '2010-05-08',
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetRoleResult,
}

// TODO: figure out why response is mangled
// const GetRolePolicy = {
//   awsDoc: docRoot + 'API_GetRolePolicy.html',
//   validate: {
//     PolicyName,
//     RoleName,
//   },
//   request: params => {
//     return {
//       query: {
//         Action: 'GetRolePolicy',
//         Version: defaultVersion,
//         ...params,
//       },
//     }
//   },
//   response: ({ payload }) => payload.GetRolePolicyResult,
// }

const GetServiceLastAccessedDetails = {
  awsDoc: docRoot + 'API_GetServiceLastAccessedDetails.html',
  validate: {
    JobId: { ...str, required, comment: 'ID of the report provided in the `GenerateServiceLastAccessedDetails` response' },
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'GetServiceLastAccessedDetails',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'GetServiceLastAccessedDetailsResult.Marker',
        accumulator: 'GetServiceLastAccessedDetailsResult.ServicesLastAccessed.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'ServicesLastAccessed' ])
    let { GetServiceLastAccessedDetailsResult } = payload
    normalizeResponse(GetServiceLastAccessedDetailsResult, arrayKeys)
    return GetServiceLastAccessedDetailsResult
  },
}

const GetServiceLastAccessedDetailsWithEntities = {
  awsDoc: docRoot + 'API_GetServiceLastAccessedDetailsWithEntities.html',
  validate: {
    JobId: { ...str, required, comment: 'ID of the report provided in the `GenerateServiceLastAccessedDetails` response' },
    ServiceNamespace: { ...str, required, comment: 'The service namespace for an AWS service', ref: docRoot + 'API_GetServiceLastAccessedDetailsWithEntities.html#API_GetServiceLastAccessedDetailsWithEntities_RequestParameters' },
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'GetServiceLastAccessedDetailsWithEntities',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'GetServiceLastAccessedDetailsWithEntitiesResult.Marker',
        accumulator: 'GetServiceLastAccessedDetailsWithEntitiesResult.EntityDetailsList.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'EntityDetailsList' ])
    let { GetServiceLastAccessedDetailsWithEntitiesResult } = payload
    normalizeResponse(GetServiceLastAccessedDetailsWithEntitiesResult, arrayKeys)
    return GetServiceLastAccessedDetailsWithEntitiesResult
  },
}

// TODO: test
// const GetServiceLinkedRoleDeletionStatus = {
//   awsDoc: docRoot + 'API_GetServiceLinkedRoleDeletionStatus.html',
//   validate: {
//     DeletionTaskId: { ...str, required, comment: 'Deletion task identifier returned by `DeleteServiceLinkedRole`' },
//   },
//   request: params => {
//     return {
//       query: {
//         Action: 'GetServiceLinkedRoleDeletionStatus',
//         Version: defaultVersion,
//         ...params,
//       },
//     }
//   },
//   response: ({ payload }) => {
//     const { GetServiceLinkedRoleDeletionStatusResult: Status } = payload
//     let result = { Status }
//     let { DeletionTaskFailureReasonType: Reason } = payload
//     if (Reason) {
//       let { RoleUsageList } = Reason
//       if (RoleUsageList) {
//         if (!Array.isArray(RoleUsageList)) RoleUsageList = [ RoleUsageList ]
//         Reason.RoleUsageList = RoleUsageList.map(i => {
//           if (i.Resources) {
//             const { Resource } = i.Resources
//             i.Resources = Array.isArray(Resource) ? Resource : [ Resource ]
//           }
//           return i
//         })
//       }
//       result.Reason = Reason
//     }
//   },
// }

const GetSSHPublicKey = {
  awsDoc: docRoot + 'API_GetSSHPublicKey.html',
  validate: {
    Encoding: { ...str, required, comment: 'Specify the encoding format used in the response; can be one of: `SSH`, `PEM`' },
    SSHPublicKeyId,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'GetSSHPublicKey',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.GetSSHPublicKeyResult,
}

const GetUser = {
  awsDoc: docRoot + 'API_GetUser.html',
  validate: {
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'GetUser',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    let { GetUserResult } = payload
    if (GetUserResult.User.Tags) {
      const { member } = GetUserResult.User.Tags
      GetUserResult.User.Tags = Array.isArray(member) ? member : [ member ]
    }
    return GetUserResult
  },
}

// TODO: figure out why response is mangled
// const GetUserPolicy = {
//   awsDoc: docRoot + 'API_GetUserPolicy.html',
//   validate: {
//     PolicyName,
//     UserName,
//   },
//   request: params => {
//     return {
//       query: {
//         Action: 'GetUserPolicy',
//         Version: defaultVersion,
//         ...params,
//       },
//     }
//   },
//   response: ({ payload }) => payload.GetUserPolicyResult,
// }

const ListAccessKeys = {
  awsDoc: docRoot + 'API_ListAccessKeys.html',
  validate: {
    Marker,
    MaxItems,
    UserName: { ...UserName, required: false },
    paginate: valPaginate,

  },
  request: params => {
    let query = {
      Action: 'ListAccessKeys',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListAccessKeysResult.Marker',
        accumulator: 'ListAccessKeysResult.AccessKeyMetadata.member',
      },
    }
  },
  response: ({ payload }) => {
    let { ListAccessKeysResult } = payload
    const { member } = ListAccessKeysResult.AccessKeyMetadata
    if (member) {
      ListAccessKeysResult.AccessKeyMetadata = Array.isArray(member) ? member : [ member ]
    }
    else {
      ListAccessKeysResult.AccessKeyMetadata = []
    }
    return ListAccessKeysResult
  },
}

const ListAccountAliases = {
  awsDoc: docRoot + 'API_ListAccountAliases.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListAccountAliases',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListAccountAliasesResult.Marker',
        accumulator: 'ListAccountAliasesResult.AccountAliases.member',
      },
    }
  },
  response: ({ payload }) => {
    let { ListAccountAliasesResult } = payload
    const { member } = ListAccountAliasesResult.AccountAliases
    if (member) {
      ListAccountAliasesResult.AccountAliases = Array.isArray(member) ? member : [ member ]
    }
    else {
      ListAccountAliasesResult.AccountAliases = []
    }
    return ListAccountAliasesResult
  },
}

const ListAttachedGroupPolicies = {
  awsDoc: docRoot + 'API_ListAttachedGroupPolicies.html',
  validate: {
    GroupName,
    Marker,
    PathPrefix,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListAttachedGroupPolicies',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListAttachedGroupPoliciesResult.Marker',
        accumulator: 'ListAttachedGroupPoliciesResult.AttachedPolicies.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'AttachedPolicies' ])
    let { ListAttachedGroupPoliciesResult } = payload
    normalizeResponse(ListAttachedGroupPoliciesResult, arrayKeys)
    return ListAttachedGroupPoliciesResult
  },
}

const ListAttachedRolePolicies = {
  awsDoc: docRoot + 'API_ListAttachedRolePolicies.html',
  validate: {
    RoleName,
    Marker,
    PathPrefix,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListAttachedRolePolicies',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListAttachedRolePoliciesResult.Marker',
        accumulator: 'ListAttachedRolePoliciesResult.AttachedPolicies.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'AttachedPolicies' ])
    let { ListAttachedRolePoliciesResult } = payload
    normalizeResponse(ListAttachedRolePoliciesResult, arrayKeys)
    return ListAttachedRolePoliciesResult
  },
}

const ListAttachedUserPolicies = {
  awsDoc: docRoot + 'API_ListAttachedUserPolicies.html',
  validate: {
    UserName,
    Marker,
    PathPrefix,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListAttachedUserPolicies',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListAttachedUserPoliciesResult.Marker',
        accumulator: 'ListAttachedUserPoliciesResult.AttachedPolicies.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'AttachedPolicies' ])
    let { ListAttachedUserPoliciesResult } = payload
    normalizeResponse(ListAttachedUserPoliciesResult, arrayKeys)
    return ListAttachedUserPoliciesResult
  },
}

// TODO: enable pagination when iterator pagination is available
const ListEntitiesForPolicy = {
  awsDoc: docRoot + 'API_ListEntitiesForPolicy.html',
  validate: {
    PolicyArn,
    EntityFilter: { ...str, comment: 'Filter results by entity type', ref: docRoot + 'API_ListEntitiesForPolicy.html#API_ListEntitiesForPolicy_RequestParameters' },
    Marker,
    MaxItems,
    PathPrefix,
    PolicyUsageFilter: { ...str, comment: 'Filter results by policy usage', ref: docRoot + 'API_ListEntitiesForPolicy.html#API_ListEntitiesForPolicy_RequestParameters' },
    // paginate: valPaginate,
  },
  request: params => {
    const { paginate } = params
    const query = {
      Action: 'ListEntitiesForPolicy',
      Version: defaultVersion,
      ...params,
    }
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListEntitiesForPolicyResult.Marker',
        // accumulator: 'ListEntitiesForPolicyResult.AttachedPolicies.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'PolicyRoles', 'PolicyGroups', 'PolicyUsers' ])
    const { ListEntitiesForPolicyResult } = payload
    normalizeResponse(ListEntitiesForPolicyResult, arrayKeys)
    return ListEntitiesForPolicyResult
  },
}

const ListGroupPolicies = {
  awsDoc: docRoot + 'API_ListGroupPolicies.html',
  validate: {
    GroupName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListGroupPolicies',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListGroupPoliciesResult.Marker',
        accumulator: 'ListGroupPoliciesResult.PolicyNames.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'PolicyNames' ])
    let { ListGroupPoliciesResult } = payload
    normalizeResponse(ListGroupPoliciesResult, arrayKeys)
    return ListGroupPoliciesResult
  },
}

const ListGroups = {
  awsDoc: docRoot + 'API_ListGroups.html',
  validate: {
    Marker,
    MaxItems,
    PathPrefix,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListGroups',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListGroupsResult.Marker',
        accumulator: 'ListGroupsResult.Groups.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Groups' ])
    let { ListGroupsResult } = payload
    normalizeResponse(ListGroupsResult, arrayKeys)
    return ListGroupsResult
  },
}

const ListGroupsForUser = {
  awsDoc: docRoot + 'API_ListGroupsForUser.html',
  validate: {
    UserName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListGroupsForUser',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListGroupsForUserResult.Marker',
        accumulator: 'ListGroupsForUserResult.Groups.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Groups' ])
    let { ListGroupsForUserResult } = payload
    normalizeResponse(ListGroupsForUserResult, arrayKeys)
    return ListGroupsForUserResult
  },
}

const ListInstanceProfiles = {
  awsDoc: docRoot + 'API_ListInstanceProfiles.html',
  validate: {
    Marker,
    MaxItems,
    PathPrefix,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListInstanceProfiles',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListInstanceProfilesResult.Marker',
        accumulator: 'ListInstanceProfilesResult.InstanceProfiles.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags', 'InstanceProfiles', 'Roles' ])
    let { ListInstanceProfilesResult } = payload
    normalizeResponse(ListInstanceProfilesResult, arrayKeys, true)
    return ListInstanceProfilesResult
  },
}

const ListInstanceProfilesForRole = {
  awsDoc: docRoot + 'API_ListInstanceProfilesForRole.html',
  validate: {
    RoleName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListInstanceProfilesForRole',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListInstanceProfilesForRoleResult.Marker',
        accumulator: 'ListInstanceProfilesForRoleResult.InstanceProfiles.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags', 'InstanceProfiles', 'Roles' ])
    let { ListInstanceProfilesForRoleResult } = payload
    normalizeResponse(ListInstanceProfilesForRoleResult, arrayKeys, true)
    return ListInstanceProfilesForRoleResult
  },
}

const ListInstanceProfileTags = {
  awsDoc: docRoot + 'API_ListInstanceProfileTags.html',
  validate: {
    InstanceProfileName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListInstanceProfileTags',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListInstanceProfileTagsResult.Marker',
        accumulator: 'ListInstanceProfileTagsResult.Tags.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags' ])
    let { ListInstanceProfileTagsResult } = payload
    normalizeResponse(ListInstanceProfileTagsResult, arrayKeys)
    return ListInstanceProfileTagsResult
  },
}

const ListPolicies = {
  awsDoc: docRoot + 'API_ListPolicies.html',
  validate: {
    Marker,
    MaxItems,
    OnlyAttached: { ...bool, comment: 'Set to true to only see attached policies' },
    PathPrefix,
    PolicyUsageFilter: { ...str, comment: 'Filter results by how they are used; can be one of: `PermissionsPolicy`, `PermissionsBoundary`' },
    Scope: { ...str, comment: 'Filter results by how they are managed; can be one of: `All`, `AWS`, `Local` (customer managed)' },
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListPolicies',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListPoliciesResult.Marker',
        accumulator: 'ListPoliciesResult.Policies.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Policies' ])
    let { ListPoliciesResult } = payload
    normalizeResponse(ListPoliciesResult, arrayKeys)
    return ListPoliciesResult
  },
}

const ListPoliciesGrantingServiceAccess = {
  awsDoc: docRoot + 'API_ListPoliciesGrantingServiceAccess.html',
  validate: {
    Arn: { ...str, required, comment: 'ARN of the IAM identity whose policies you want to list' },
    ServiceNamespaces: { ...arr, required, comment: 'Array of namespaces for the AWS services to be listed' },
    Marker,
    paginate: valPaginate,
  },
  request: params => {
    const { ServiceNamespaces, paginate } = params
    const query = {
      Action: 'ListPoliciesGrantingServiceAccess',
      Version: defaultVersion,
      ...params,
    }
    if (paginate) delete params.paginate
    Object.assign(query, serializeArray('ServiceNamespaces', ServiceNamespaces))
    delete query.ServiceNamespaces
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListPoliciesGrantingServiceAccessResult.Marker',
        accumulator: 'ListPoliciesGrantingServiceAccessResult.PoliciesGrantingServiceAccess.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'PoliciesGrantingServiceAccess', 'Policies' ])
    let { ListPoliciesGrantingServiceAccessResult } = payload
    normalizeResponse(ListPoliciesGrantingServiceAccessResult, arrayKeys, true)
    return ListPoliciesGrantingServiceAccessResult
  },
}

const ListPolicyTags = {
  awsDoc: docRoot + 'API_ListPolicyTags.html',
  validate: {
    PolicyArn,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListPolicyTags',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListPolicyTagsResult.Marker',
        accumulator: 'ListPolicyTagsResult.Tags.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags' ])
    let { ListPolicyTagsResult } = payload
    normalizeResponse(ListPolicyTagsResult, arrayKeys)
    return ListPolicyTagsResult
  },
}

const ListPolicyVersions = {
  awsDoc: docRoot + 'API_ListPolicyVersions.html',
  validate: {
    PolicyArn,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListPolicyVersions',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListPolicyVersionsResult.Marker',
        accumulator: 'ListPolicyVersionsResult.Versions.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Versions' ])
    let { ListPolicyVersionsResult } = payload
    normalizeResponse(ListPolicyVersionsResult, arrayKeys)
    return ListPolicyVersionsResult
  },
}

const ListRolePolicies = {
  awsDoc: docRoot + 'API_ListRolePolicies.html',
  validate: {
    RoleName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListRolePolicies',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListRolePoliciesResult.Marker',
        accumulator: 'ListRolePoliciesResult.PolicyNames.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'PolicyNames' ])
    let { ListRolePoliciesResult } = payload
    normalizeResponse(ListRolePoliciesResult, arrayKeys)
    return ListRolePoliciesResult
  },
}

const ListRoles = {
  awsDoc: docRoot + 'API_ListRoles.html',
  validate: {
    Marker,
    MaxItems,
    PathPrefix,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListRoles',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListRolesResult.Marker',
        accumulator: 'ListRolesResult.Roles.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Roles', 'Tags' ])
    let { ListRolesResult } = payload
    normalizeResponse(ListRolesResult, arrayKeys, true)
    return ListRolesResult
  },
}

const ListRoleTags = {
  awsDoc: docRoot + 'API_ListRoleTags.html',
  validate: {
    RoleName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListRoleTags',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListRoleTagsResult.Marker',
        accumulator: 'ListRoleTagsResult.Tags.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags' ])
    let { ListRoleTagsResult } = payload
    normalizeResponse(ListRoleTagsResult, arrayKeys)
    return ListRoleTagsResult
  },
}

const ListServiceSpecificCredentials = {
  awsDoc: docRoot + 'API_ListServiceSpecificCredentials.html',
  validate: {
    ServiceName: { ...str, comment: 'Filter results to a specific service' },
    UserName: { ...UserName, required: false },
  },
  request: params => {
    return {
      query: {
        Action: 'ListServiceSpecificCredentials',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'ServiceSpecificCredentials' ])
    const { ListServiceSpecificCredentialsResult } = payload
    normalizeResponse(ListServiceSpecificCredentialsResult, arrayKeys)
    return ListServiceSpecificCredentialsResult
  },
}

const ListSigningCertificates = {
  awsDoc: docRoot + 'API_ListSigningCertificates.html',
  validate: {
    Marker,
    MaxItems,
    UserName: { ...UserName, required: false },
  },
  request: params => {
    let query = {
      Action: 'ListSigningCertificates',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListSigningCertificatesResult.Marker',
        accumulator: 'ListSigningCertificatesResult.Certificates.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Certificates' ])
    const { ListSigningCertificatesResult } = payload
    normalizeResponse(ListSigningCertificatesResult, arrayKeys)
    return ListSigningCertificatesResult
  },
}

const ListSSHPublicKeys = {
  awsDoc: docRoot + 'API_ListSSHPublicKeys.html',
  validate: {
    Marker,
    MaxItems,
    UserName: { ...UserName, required: false },
  },
  request: params => {
    let query = {
      Action: 'ListSSHPublicKeys',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListSSHPublicKeysResult.Marker',
        accumulator: 'ListSSHPublicKeysResult.SSHPublicKeys.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'SSHPublicKeys' ])
    const { ListSSHPublicKeysResult } = payload
    normalizeResponse(ListSSHPublicKeysResult, arrayKeys)
    return ListSSHPublicKeysResult
  },
}

const ListUserPolicies = {
  awsDoc: docRoot + 'API_ListUserPolicies.html',
  validate: {
    UserName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListUserPolicies',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListUserPoliciesResult.Marker',
        accumulator: 'ListUserPoliciesResult.PolicyNames.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'PolicyNames' ])
    let { ListUserPoliciesResult } = payload
    normalizeResponse(ListUserPoliciesResult, arrayKeys)
    return ListUserPoliciesResult
  },
}

const ListUsers = {
  awsDoc: docRoot + 'API_ListUsers.html',
  validate: {
    Marker,
    MaxItems,
    PathPrefix,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListUsers',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListUsersResult.Marker',
        accumulator: 'ListUsersResult.Users.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Users', 'Tags' ])
    let { ListUsersResult } = payload
    normalizeResponse(ListUsersResult, arrayKeys, true)
    return ListUsersResult
  },
}

const ListUserTags = {
  awsDoc: docRoot + 'API_ListUserTags.html',
  validate: {
    UserName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: params => {
    let query = {
      Action: 'ListUserTags',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'ListUserTagsResult.Marker',
        accumulator: 'ListUserTagsResult.Tags.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags' ])
    let { ListUserTagsResult } = payload
    normalizeResponse(ListUserTagsResult, arrayKeys)
    return ListUserTagsResult
  },
}

const PutGroupPolicy = {
  awsDoc: docRoot + 'API_PutGroupPolicy.html',
  validate: {
    GroupName,
    PolicyDocument,
    PolicyName,
  },
  request: params => {
    let query = {
      Action: 'PutGroupPolicy',
      Version: defaultVersion,
      ...params,
    }
    if (typeof query.PolicyDocument !== 'string') {
      query.PolicyDocument = JSON.stringify(query.PolicyDocument)
    }
    return {
      query,
    }
  },
  response: emptyResponse,
}

const PutRolePermissionsBoundary = {
  awsDoc: docRoot + 'API_PutRolePermissionsBoundary.html',
  validate: {
    PermissionsBoundary: { ...PermissionsBoundary, required },
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'PutRolePermissionsBoundary',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const PutRolePolicy = {
  awsDoc: docRoot + 'API_PutRolePolicy.html',
  validate: {
    PolicyDocument,
    PolicyName,
    RoleName,
  },
  request: params => {
    let query = {
      Action: 'PutRolePolicy',
      Version: defaultVersion,
      ...params,
    }
    if (typeof query.PolicyDocument !== 'string') query.PolicyDocument = JSON.stringify(query.PolicyDocument)
    return {
      query,
    }
  },
  response: emptyResponse,
}

const PutUserPermissionsBoundary = {
  awsDoc: docRoot + 'API_PutUserPermissionsBoundary.html',
  validate: {
    PermissionsBoundary: { ...PermissionsBoundary, required },
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'PutUserPermissionsBoundary',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const PutUserPolicy = {
  awsDoc: docRoot + 'API_PutUserPolicy.html',
  validate: {
    PolicyDocument,
    PolicyName,
    UserName,
  },
  request: params => {
    let query = {
      Action: 'PutUserPolicy',
      Version: defaultVersion,
      ...params,
    }
    if (typeof query.PolicyDocument !== 'string') query.PolicyDocument = JSON.stringify(query.PolicyDocument)
    return {
      query,
    }
  },
  response: emptyResponse,
}

const RemoveRoleFromInstanceProfile = {
  awsDoc: docRoot + 'API_RemoveRoleFromInstanceProfile.html',
  validate: {
    InstanceProfileName,
    RoleName,
  },
  request: params => {
    return {
      query: {
        Action: 'RemoveRoleFromInstanceProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const RemoveUserFromGroup = {
  awsDoc: docRoot + 'API_RemoveUserFromGroup.html',
  validate: {
    GroupName,
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'RemoveUserFromGroup',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const ResetServiceSpecificCredential = {
  awsDoc: docRoot + 'API_ResetServiceSpecificCredential.html',
  validate: {
    ServiceSpecificCredentialId,
    UserName: { ...UserName, required: false },
  },
  request: params => {
    return {
      query: {
        Action: 'ResetServiceSpecificCredential',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.ResetServiceSpecificCredentialResult,
}

const SetDefaultPolicyVersion = {
  awsDoc: docRoot + 'API_SetDefaultPolicyVersion.html',
  validate: {
    PolicyArn,
    VersionId,
  },
  request: params => {
    return {
      query: {
        Action: 'SetDefaultPolicyVersion',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

// TODO: improve documentation
const SimulateCustomPolicy = {
  awsDoc: docRoot + 'API_SimulateCustomPolicy.html',
  validate: {
    ActionNames,
    PolicyInputList: { ...arr, required, comment: 'Array of policy document objects' },
    CallerArn,
    ContextEntries,
    Marker,
    MaxItems,
    PermissionsBoundaryPolicyInputList,
    ResourceArns,
    ResourceHandlingOption,
    ResourceOwner,
    ResourcePolicy,
    paginate: valPaginate,
  },
  request: params => {
    const query = {
      Action: 'SimulateCustomPolicy',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    Object.assign(query, serializeArray(params.ActionNames, 'ActionNames'))
    delete query.ActionNames
    let PolicyInputList = params.PolicyInputList.map(i => {
      return typeof i === 'string' ? i : JSON.stringify(i)
    })
    PolicyInputList = serializeArray(PolicyInputList, 'PolicyInputList')
    Object.assign(query, PolicyInputList)
    delete query.PolicyInputList
    let { ContextEntries } = params
    if (ContextEntries) {
      ContextEntries = serializeArray(ContextEntries, 'ContextEntries', true)
      Object.assign(query, ContextEntries)
      delete query.ContextEntries
    }
    let { PermissionsBoundaryPolicyInputList } = params
    if (PermissionsBoundaryPolicyInputList) {
      PermissionsBoundaryPolicyInputList = PermissionsBoundaryPolicyInputList.map(i => {
        return typeof i === 'string' ? i : JSON.stringify(i)
      })
      PermissionsBoundaryPolicyInputList = serializeArray(PermissionsBoundaryPolicyInputList, 'PermissionsBoundaryPolicyInputList')
      Object.assign(query, PermissionsBoundaryPolicyInputList)
      delete query.PermissionsBoundaryPolicyInputList
    }
    let { ResourceArns } = params
    if (ResourceArns) {
      ResourceArns = serializeArray(ResourceArns, 'ResourceArns')
      Object.assign(query, ResourceArns)
      delete query.ResourceArns
    }
    let { ResourcePolicy } = params
    if (ResourcePolicy && typeof ResourcePolicy === 'object') {
      query.ResourcePolicy = JSON.stringify(ResourcePolicy)
    }
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'SimulateCustomPolicyResult.Marker',
        accumulator: 'SimulateCustomPolicyResult.EvaluationResults.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'EvaluationResults', 'MatchedStatements',
      'MissingContextValues', 'ResourceSpecificResults', 'MatchedStatements' ])
    const { SimulateCustomPolicyResult } = payload
    normalizeResponse(SimulateCustomPolicyResult, arrayKeys, true)
    return SimulateCustomPolicyResult
  },
}

// TODO: improve documentation
const SimulatePrincipalPolicy = {
  awsDoc: docRoot + 'API_SimulatePrincipalPolicy.html',
  validate: {
    ActionNames,
    PolicySourceArn: { ...str, required, comment: 'ARN of the user, group or role whose policies will be included in the simulation' },
    CallerArn,
    ContextEntries,
    Marker,
    MaxItems,
    PermissionsBoundaryPolicyInputList,
    PolicyInputList: { ...arr, comment: 'Array of policy document objects' },
    ResourceArns,
    ResourceHandlingOption,
    ResourceOwner,
    ResourcePolicy,
    paginate: valPaginate,
  },
  request: params => {
    const query = {
      Action: 'SimulatePrincipalPolicy',
      Version: defaultVersion,
      ...params,
    }
    const { paginate } = params
    if (paginate) delete query.paginate
    Object.assign(query, serializeArray(params.ActionNames, 'ActionNames'))
    delete query.ActionNames
    let { PolicyInputList } = params
    if (PolicyInputList) {
      PolicyInputList = PolicyInputList.map(i => {
        return typeof i === 'string' ? i : JSON.stringify(i)
      })
      PolicyInputList = serializeArray(PolicyInputList, 'PolicyInputList')
      Object.assign(query, PolicyInputList)
      delete query.PolicyInputList
    }
    let { ContextEntries } = params
    if (ContextEntries) {
      ContextEntries = serializeArray(ContextEntries, 'ContextEntries', true)
      Object.assign(query, ContextEntries)
      delete query.ContextEntries
    }
    let { PermissionsBoundaryPolicyInputList } = params
    if (PermissionsBoundaryPolicyInputList) {
      PermissionsBoundaryPolicyInputList = PermissionsBoundaryPolicyInputList.map(i => {
        return typeof i === 'string' ? i : JSON.stringify(i)
      })
      PermissionsBoundaryPolicyInputList = serializeArray(PermissionsBoundaryPolicyInputList, 'PermissionsBoundaryPolicyInputList')
      Object.assign(query, PermissionsBoundaryPolicyInputList)
      delete query.PermissionsBoundaryPolicyInputList
    }
    let { ResourceArns } = params
    if (ResourceArns) {
      ResourceArns = serializeArray(ResourceArns, 'ResourceArns')
      Object.assign(query, ResourceArns)
      delete query.ResourceArns
    }
    let { ResourcePolicy } = params
    if (ResourcePolicy && typeof ResourcePolicy === 'object') {
      query.ResourcePolicy = JSON.stringify(ResourcePolicy)
    }
    return {
      query,
      paginate,
      paginator: {
        ...paginator,
        token: 'SimulatePrincipalPolicyResult.Marker',
        accumulator: 'SimulatePrincipalPolicyResult.EvaluationResults.member',
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'EvaluationResults', 'MatchedStatements',
      'MissingContextValues', 'ResourceSpecificResults', 'MatchedStatements' ])
    const { SimulatePrincipalPolicyResult } = payload
    normalizeResponse(SimulatePrincipalPolicyResult, arrayKeys, true)
    return SimulatePrincipalPolicyResult
  },
}

const TagInstanceProfile = {
  awsDoc: docRoot + 'API_TagInstanceProfile.html',
  validate: {
    InstanceProfileName,
    Tags: { ...Tags, required },
  },
  request: params => {
    const { InstanceProfile, Tags } = params
    const query = {
      Action: 'TagInstanceProfile',
      Version: defaultVersion,
      InstanceProfile,
    }
    Object.assign(query, serializeArray(Tags, 'Tags'))
    return { query }
  },
  response: emptyResponse,
}

const TagPolicy = {
  awsDoc: docRoot + 'API_TagPolicy.html',
  validate: {
    PolicyArn,
    Tags: { ...Tags, required },
  },
  request: params => {
    const { PolicyArn, Tags } = params
    const query = {
      Action: 'TagPolicy',
      Version: defaultVersion,
      PolicyArn,
    }
    Object.assign(query, serializeArray(Tags, 'Tags'))
    return { query }
  },
  response: emptyResponse,
}

const TagRole = {
  awsDoc: docRoot + 'API_TagRole.html',
  validate: {
    RoleName,
    Tags: { ...Tags, required },
  },
  request: params => {
    const { RoleName, Tags } = params
    const query = {
      Action: 'TagRole',
      Version: defaultVersion,
      RoleName,
    }
    Object.assign(query, serializeArray(Tags, 'Tags'))
    return { query }
  },
  response: emptyResponse,
}

const TagUser = {
  awsDoc: docRoot + 'API_TagUser.html',
  validate: {
    UserName,
    Tags: { ...Tags, required },
  },
  request: params => {
    const { UserName, Tags } = params
    const query = {
      Action: 'TagUser',
      Version: defaultVersion,
      UserName,
    }
    Object.assign(query, serializeArray(Tags, 'Tags'))
    return { query }
  },
  response: emptyResponse,
}

const UntagInstanceProfile = {
  awsDoc: docRoot + 'API_UntagInstanceProfile.html',
  validate: {
    InstanceProfileName,
    TagKeys: { ...arr, required, comment: 'Array of tag keys' },
  },
  request: params => {
    const { InstanceProfileName, TagKeys } = params
    let query = {
      Action: 'UntagInstanceProfile',
      Version: defaultVersion,
      InstanceProfileName,
    }
    TagKeys.forEach((value, i) => {
      query[`TagKeys.member.${i + 1}`] = value
    })
    return { query }
  },
  response: emptyResponse,
}

const UntagPolicy = {
  awsDoc: docRoot + 'API_UntagPolicy.html',
  validate: {
    PolicyArn,
    TagKeys: { ...arr, required, comment: 'Array of tag keys' },
  },
  request: params => {
    const { PolicyArn, TagKeys } = params
    let query = {
      Action: 'UntagPolicy',
      Version: defaultVersion,
      PolicyArn,
    }
    TagKeys.forEach((value, i) => {
      query[`TagKeys.member.${i + 1}`] = value
    })
    return { query }
  },
  response: emptyResponse,
}

const UntagRole = {
  awsDoc: docRoot + 'API_UntagRole.html',
  validate: {
    RoleName,
    TagKeys: { ...arr, required, comment: 'Array of tag keys' },
  },
  request: params => {
    const { RoleName, TagKeys } = params
    let query = {
      Action: 'UntagRole',
      Version: defaultVersion,
      RoleName,
    }
    TagKeys.forEach((value, i) => {
      query[`TagKeys.member.${i + 1}`] = value
    })
    return { query }
  },
  response: emptyResponse,
}

const UntagUser = {
  awsDoc: docRoot + 'API_UntagUser.html',
  validate: {
    UserName,
    TagKeys: { ...arr, required, comment: 'Array of tag keys' },
  },
  request: params => {
    const { UserName, TagKeys } = params
    let query = {
      Action: 'UntagUser',
      Version: defaultVersion,
      UserName,
    }
    TagKeys.forEach((value, i) => {
      query[`TagKeys.member.${i + 1}`] = value
    })
    return { query }
  },
  response: emptyResponse,
}

const UpdateAccessKey = {
  awsDoc: docRoot + 'API_UpdateAccessKey.html',
  validate: {
    AccessKeyId,
    Status: { ...str, required, comment: 'New status for the access key; can be one of: `Active`, `Inactive`' },
    UserName: { ...UserName, required: false },
  },
  request: params => {
    const query = {
      Action: 'UpdateAccessKey',
      Version: defaultVersion,
      ...params,
    }
    return { query }
  },
  response: emptyResponse,
}

const UpdateAccountPasswordPolicy = {
  awsDoc: docRoot + 'API_UpdateAccountPasswordPolicy.html',
  validate: {
    AllowUsersToChangePassword: { ...bool, comment: 'Set to true to allow users to change their own passwords' },
    HardExpiry: { ...bool, comment: 'Set to true to prevent users their password after it expires' },
    MaxPasswordAge: { ...num, comment: 'Number of days between 1 and 1095 before passwords expire' },
    MinimumPasswordLength: { ...num, comment: 'Minimum number of characters between 6 and 128 allowed in a password' },
    PasswordReusePrevention: { ...num, comment: 'Specify how many new passwords from 1 to 24 before a password may be reused' },
    RequireLowercaseCharacters: { ...bool, comment: 'Set to true to require at least one lowercase character' },
    RequireNumbers: { ...bool, comment: 'Set to true to require at least one numeric character' },
    RequireSymbols: { ...bool, comment: 'Set to true to require at least one non-alphanumeric character' },
    RequireUppercaseCharacters: { ...bool, comment: 'Set to true to require at least one uppercase character' },
  },
  request: params => {
    return {
      query: {
        Action: 'UpdateAccountPasswordPolicy',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const UpdateAssumeRolePolicy = {
  awsDoc: docRoot + 'API_UpdateAssumeRolePolicy.html',
  validate: {
    PolicyDocument,
    RoleName,
  },
  request: params => {
    let query = {
      Action: 'UpdateAssumeRolePolicy',
      Version: defaultVersion,
      ...params,
    }
    if (typeof query.PolicyDocument !== 'string') query.PolicyDocument = JSON.stringify(query.PolicyDocument)
    return {
      query,
    }
  },
  response: emptyResponse,
}

const UpdateGroup = {
  awsDoc: docRoot + 'API_UpdateGroup.html',
  validate: {
    GroupName,
    NewGroupName: { ...str, comment: 'New name for the group' },
    NewPath,
  },
  request: params => {
    const query = {
      Action: 'UpdateGroup',
      Version: defaultVersion,
      ...params,
    }
    return { query }
  },
  response: emptyResponse,
}

const UpdateLoginProfile = {
  awsDoc: docRoot + 'API_UpdateLoginProfile.html',
  validate: {
    UserName,
    Password: { ...str, comment: 'New password for the user' },
    PasswordResetRequired: { ...bool, comment: 'Set to true to specify the user must make a new password on next sign-in' },
  },
  request: params => {
    return {
      query: {
        Action: 'UpdateLoginProfile',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const UpdateRole = {
  awsDoc: docRoot + 'API_UpdateRole.html',
  validate: {
    RoleName,
    Description,
    MaxSessionDuration,
  },
  request: params => {
    return {
      query: {
        Action: 'UpdateRole',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const UpdateRoleDescription = {
  awsDoc: docRoot + 'API_UpdateRoleDescription.html',
  validate: {
    RoleName,
    Description,
  },
  request: params => {
    return {
      query: {
        Action: 'UpdateRoleDescription',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => {
    const arrayKeys = new Set([ 'Tags' ])
    let { UpdateRoleDescriptionResult } = payload
    normalizeResponse(UpdateRoleDescriptionResult, arrayKeys)
    return UpdateRoleDescriptionResult
  },
}

const UpdateServiceSpecificCredential = {
  awsDoc: docRoot + 'API_UpdateServiceSpecificCredential.html',
  validate: {
    ServiceSpecificCredentialId,
    Status: { ...str, required, comment: 'Status to be assigned to the credential; can be one of: `Active`, `Inactive`' },
    UserName: { ...UserName, required: false },
  },
  request: params => {
    return {
      query: {
        Action: 'UpdateServiceSpecificCredential',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const UpdateSigningCertificate = {
  awsDoc: docRoot + 'API_UpdateSigningCertificate.html',
  validate: {
    CertificateId,
    Status: { ...str, required, comment: 'Status to be assigned to the signing certificate; can be one of: `Active`, `Inactive`' },
    UserName: { ...UserName, required: false },
  },
  request: params => {
    return {
      query: {
        Action: 'UpdateSigningCertificate',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const UpdateSSHPublicKey = {
  awsDoc: docRoot + 'API_UpdateSSHPublicKey.html',
  validate: {
    SSHPublicKeyId,
    Status: { ...str, required, comment: 'New status for the SSH key; can be one of : `Active`, `Inactive`' },
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'UpdateSSHPublicKey',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: emptyResponse,
}

const UpdateUser = {
  awsDoc: docRoot + 'API_UpdateUser.html',
  validate: {
    UserName,
    NewPath,
    NewUserName: { ...str, comment: 'New user name' },
  },
  request: params => {
    const query = {
      Action: 'UpdateUser',
      Version: defaultVersion,
      ...params,
    }
    return { query }
  },
  response: emptyResponse,
}

const UploadSigningCertificate = {
  awsDoc: docRoot + 'API_UploadSigningCertificate.html',
  validate: {
    CertificateBody: { ...str, required, comment: 'Contents of the signing certificate', ref: docRoot + 'API_UploadSigningCertificate.html#API_UploadSigningCertificate_RequestParameters' },
    UserName: { ...UserName, required: false },
  },
  request: params => {
    return {
      query: {
        Action: 'UploadSigningCertificate',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.UploadSigningCertificateResult,
}

const UploadSSHPublicKey = {
  awsDoc: docRoot + 'API_UploadSSHPublicKey.html',
  validate: {
    SSHPublicKeyBody: { ...str, required, comment: 'SSH public key encoded in SSH-RSA or PEM format; minimum length is 2048 bits', ref: docRoot + 'API_UploadSSHPublicKey.html#API_UploadSSHPublicKey_RequestParameters' },
    UserName,
  },
  request: params => {
    return {
      query: {
        Action: 'UploadSSHPublicKey',
        Version: defaultVersion,
        ...params,
      },
    }
  },
  response: ({ payload }) => payload.UploadSSHPublicKeyResult,
}

export default {
  name: '@aws-lite/iam',
  service,
  property,
  methods: {
    AddClientIDToOpenIDConnectProvider,
    AddRoleToInstanceProfile,
    AddUserToGroup,
    AttachGroupPolicy,
    AttachRolePolicy,
    AttachUserPolicy,
    ChangePassword,
    CreateAccessKey,
    CreateAccountAlias,
    CreateGroup,
    CreateInstanceProfile,
    CreateLoginProfile,
    CreateOpenIDConnectProvider,
    CreatePolicy,
    // CreatePolicyVersion,
    CreateRole,
    CreateServiceLinkedRole,
    CreateServiceSpecificCredential,
    CreateUser,
    DeleteAccessKey,
    DeleteAccountAlias,
    DeleteAccountPasswordPolicy,
    DeleteGroup,
    DeleteGroupPolicy,
    DeleteInstanceProfile,
    DeleteLoginProfile,
    DeleteOpenIDConnectProvider,
    DeletePolicy,
    DeletePolicyVersion,
    DeleteRole,
    DeleteRolePermissionsBoundary,
    DeleteRolePolicy,
    DeleteServiceLinkedRole,
    DeleteServiceSpecificCredential,
    DeleteSigningCertificate,
    DeleteSSHPublicKey,
    DeleteUser,
    DeleteUserPermissionsBoundary,
    DeleteUserPolicy,
    DetachGroupPolicy,
    DetachRolePolicy,
    DetachUserPolicy,
    GenerateCredentialReport,
    GenerateOrganizationsAccessReport,
    GenerateServiceLastAccessedDetails,
    GetAccessKeyLastUsed,
    GetAccountAuthorizationDetails,
    GetAccountPasswordPolicy,
    GetAccountSummary,
    GetContextKeysForCustomPolicy,
    GetContextKeysForPrincipalPolicy,
    GetCredentialReport,
    GetGroup,
    // GetGroupPolicy,
    GetInstanceProfile,
    GetLoginProfile,
    // GetMFADevice,
    // GetOpenIDConnectProvider,
    GetOrganizationsAccessReport,
    GetPolicy,
    GetPolicyVersion,
    GetRole,
    // GetRolePolicy,
    GetServiceLastAccessedDetails,
    GetServiceLastAccessedDetailsWithEntities,
    // GetServiceLinkedRoleDeletionStatus,
    GetSSHPublicKey,
    GetUser,
    // GetUserPolicy,
    ListAccessKeys,
    ListAccountAliases,
    ListAttachedGroupPolicies,
    ListAttachedRolePolicies,
    ListAttachedUserPolicies,
    ListEntitiesForPolicy,
    ListGroupPolicies,
    ListGroups,
    ListGroupsForUser,
    ListInstanceProfiles,
    ListInstanceProfilesForRole,
    ListInstanceProfileTags,
    ListPolicies,
    ListPoliciesGrantingServiceAccess,
    ListPolicyTags,
    ListPolicyVersions,
    ListRolePolicies,
    ListRoles,
    ListRoleTags,
    ListServiceSpecificCredentials,
    ListSigningCertificates,
    ListSSHPublicKeys,
    ListUserPolicies,
    ListUsers,
    ListUserTags,
    PutGroupPolicy,
    PutRolePermissionsBoundary,
    PutRolePolicy,
    PutUserPermissionsBoundary,
    PutUserPolicy,
    RemoveRoleFromInstanceProfile,
    RemoveUserFromGroup,
    ResetServiceSpecificCredential,
    SetDefaultPolicyVersion,
    TagInstanceProfile,
    TagPolicy,
    TagRole,
    TagUser,
    SimulateCustomPolicy,
    SimulatePrincipalPolicy,
    UntagInstanceProfile,
    UntagPolicy,
    UntagRole,
    UntagUser,
    UpdateAccessKey,
    UpdateAccountPasswordPolicy,
    UpdateAssumeRolePolicy,
    UpdateGroup,
    UpdateLoginProfile,
    UpdateRole,
    UpdateRoleDescription,
    UpdateServiceSpecificCredential,
    UpdateSigningCertificate,
    UpdateSSHPublicKey,
    UpdateUser,
    UploadSigningCertificate,
    UploadSSHPublicKey,
    ...incomplete,
  },
}
