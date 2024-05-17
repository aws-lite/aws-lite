const disabled = true
const docRoot = 'https://docs.aws.amazon.com/STS/latest/APIReference/'
export default {
  AssumeRole:                 { disabled, awsDoc: docRoot + 'API_AssumeRole.html' },
  AssumeRoleWithSAML:         { disabled, awsDoc: docRoot + 'API_AssumeRoleWithSAML.html' },
  AssumeRoleWithWebIdentity:  { disabled, awsDoc: docRoot + 'API_AssumeRoleWithWebIdentity.html' },
  DecodeAuthorizationMessage: { disabled, awsDoc: docRoot + 'API_DecodeAuthorizationMessage.html' },
  GetAccessKeyInfo:           { disabled, awsDoc: docRoot + 'API_GetAccessKeyInfo.html' },
  GetFederationToken:         { disabled, awsDoc: docRoot + 'API_GetFederationToken.html' },
  GetSessionToken:            { disabled, awsDoc: docRoot + 'API_GetSessionToken.html' },
}
