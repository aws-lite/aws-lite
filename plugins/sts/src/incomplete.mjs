const disabled = true
const docRoot = 'https://docs.aws.amazon.com/STS/latest/APIReference/'
export default {
  AssumeRole:                 { disabled, awsDoc: docRoot + 'API_AssumeRole' },
  AssumeRoleWithSAML:         { disabled, awsDoc: docRoot + 'API_AssumeRoleWithSAML' },
  AssumeRoleWithWebIdentity:  { disabled, awsDoc: docRoot + 'API_AssumeRoleWithWebIdentity' },
  DecodeAuthorizationMessage: { disabled, awsDoc: docRoot + 'API_DecodeAuthorizationMessage' },
  GetAccessKeyInfo:           { disabled, awsDoc: docRoot + 'API_GetAccessKeyInfo' },
  GetCallerIdentity:          { disabled, awsDoc: docRoot + 'API_GetCallerIdentity' },
  GetFederationToken:         { disabled, awsDoc: docRoot + 'API_GetFederationToken' },
  GetSessionToken:            { disabled, awsDoc: docRoot + 'API_GetSessionToken' },
}
