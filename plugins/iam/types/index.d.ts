import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AddClientIDToOpenIDConnectProviderCommandOutput as AddClientIDToOpenIDConnectProviderResponse,
  AddRoleToInstanceProfileCommandOutput as AddRoleToInstanceProfileResponse,
  AddUserToGroupCommandOutput as AddUserToGroupResponse,
  AttachGroupPolicyCommandOutput as AttachGroupPolicyResponse,
  AttachRolePolicyCommandOutput as AttachRolePolicyResponse,
  AttachUserPolicyCommandOutput as AttachUserPolicyResponse,
  ChangePasswordCommandOutput as ChangePasswordResponse,
  CreateAccessKeyCommandOutput as CreateAccessKeyResponse,
  CreateAccountAliasCommandOutput as CreateAccountAliasResponse,
  CreateGroupCommandOutput as CreateGroupResponse,
  CreateInstanceProfileCommandOutput as CreateInstanceProfileResponse,
  CreateLoginProfileCommandOutput as CreateLoginProfileResponse,
  CreatePolicyCommandOutput as CreatePolicyResponse,
  CreateRoleCommandOutput as CreateRoleResponse,
  CreateServiceLinkedRoleCommandOutput as CreateServiceLinkedRoleResponse,
  CreateServiceSpecificCredentialCommandOutput as CreateServiceSpecificCredentialResponse,
  CreateUserCommandOutput as CreateUserResponse,
  DeleteAccessKeyCommandOutput as DeleteAccessKeyResponse,
  DeleteAccountAliasCommandOutput as DeleteAccountAliasResponse,
  DeleteAccountPasswordPolicyCommandOutput as DeleteAccountPasswordPolicyResponse,
  DeleteGroupCommandOutput as DeleteGroupResponse,
  DeleteGroupPolicyCommandOutput as DeleteGroupPolicyResponse,
  DeleteInstanceProfileCommandOutput as DeleteInstanceProfileResponse,
  DeleteLoginProfileCommandOutput as DeleteLoginProfileResponse,
  DeleteOpenIDConnectProviderCommandOutput as DeleteOpenIDConnectProviderResponse,
  DeletePolicyCommandOutput as DeletePolicyResponse,
  DeletePolicyVersionCommandOutput as DeletePolicyVersionResponse,
  DeleteRoleCommandOutput as DeleteRoleResponse,
  DeleteRolePermissionsBoundaryCommandOutput as DeleteRolePermissionsBoundaryResponse,
  DeleteRolePolicyCommandOutput as DeleteRolePolicyResponse,
  DeleteServiceLinkedRoleCommandOutput as DeleteServiceLinkedRoleResponse,
  DeleteServiceSpecificCredentialCommandOutput as DeleteServiceSpecificCredentialResponse,
  DeleteSigningCertificateCommandOutput as DeleteSigningCertificateResponse,
  DeleteSSHPublicKeyCommandOutput as DeleteSSHPublicKeyResponse,
  DeleteUserCommandOutput as DeleteUserResponse,
  DeleteUserPermissionsBoundaryCommandOutput as DeleteUserPermissionsBoundaryResponse,
  DeleteUserPolicyCommandOutput as DeleteUserPolicyResponse,
  DetachGroupPolicyCommandOutput as DetachGroupPolicyResponse,
  DetachRolePolicyCommandOutput as DetachRolePolicyResponse,
  DetachUserPolicyCommandOutput as DetachUserPolicyResponse,
  GenerateCredentialReportCommandOutput as GenerateCredentialReportResponse,
  GenerateOrganizationsAccessReportCommandOutput as GenerateOrganizationsAccessReportResponse,
  GenerateServiceLastAccessedDetailsCommandOutput as GenerateServiceLastAccessedDetailsResponse,
  GetAccessKeyLastUsedCommandOutput as GetAccessKeyLastUsedResponse,
  GetAccountAuthorizationDetailsCommandOutput as GetAccountAuthorizationDetailsResponse,
  GetAccountPasswordPolicyCommandOutput as GetAccountPasswordPolicyResponse,
  GetAccountSummaryCommandOutput as GetAccountSummaryResponse,
  GetContextKeysForCustomPolicyCommandOutput as GetContextKeysForCustomPolicyResponse,
  GetContextKeysForPrincipalPolicyCommandOutput as GetContextKeysForPrincipalPolicyResponse,
  GetCredentialReportCommandOutput as GetCredentialReportResponse,
  GetGroupCommandOutput as GetGroupResponse,
  GetGroupPolicyCommandOutput as GetGroupPolicyResponse,
  GetInstanceProfileCommandOutput as GetInstanceProfileResponse,
  GetLoginProfileCommandOutput as GetLoginProfileResponse,
  GetOpenIDConnectProviderCommandOutput as GetOpenIDConnectProviderResponse,
  GetOrganizationsAccessReportCommandOutput as GetOrganizationsAccessReportResponse,
  GetPolicyCommandOutput as GetPolicyResponse,
  GetPolicyVersionCommandOutput as GetPolicyVersionResponse,
  GetRoleCommandOutput as GetRoleResponse,
  GetRolePolicyCommandOutput as GetRolePolicyResponse,
  GetServiceLastAccessedDetailsCommandOutput as GetServiceLastAccessedDetailsResponse,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput as GetServiceLastAccessedDetailsWithEntitiesResponse,
  GetSSHPublicKeyCommandOutput as GetSSHPublicKeyResponse,
  GetUserCommandOutput as GetUserResponse,
  GetUserPolicyCommandOutput as GetUserPolicyResponse,
  ListAccessKeysCommandOutput as ListAccessKeysResponse,
  ListAccountAliasesCommandOutput as ListAccountAliasesResponse,
  ListAttachedGroupPoliciesCommandOutput as ListAttachedGroupPoliciesResponse,
  ListAttachedRolePoliciesCommandOutput as ListAttachedRolePoliciesResponse,
  ListAttachedUserPoliciesCommandOutput as ListAttachedUserPoliciesResponse,
  ListEntitiesForPolicyCommandOutput as ListEntitiesForPolicyResponse,
  ListGroupPoliciesCommandOutput as ListGroupPoliciesResponse,
  ListGroupsCommandOutput as ListGroupsResponse,
  ListGroupsForUserCommandOutput as ListGroupsForUserResponse,
  ListInstanceProfilesCommandOutput as ListInstanceProfilesResponse,
  ListInstanceProfilesForRoleCommandOutput as ListInstanceProfilesForRoleResponse,
  ListInstanceProfileTagsCommandOutput as ListInstanceProfileTagsResponse,
  ListOpenIDConnectProvidersCommandOutput as ListOpenIDConnectProvidersResponse,
  ListOpenIDConnectProviderTagsCommandOutput as ListOpenIDConnectProviderTagsResponse,
  ListPoliciesCommandOutput as ListPoliciesResponse,
  ListPoliciesGrantingServiceAccessCommandOutput as ListPoliciesGrantingServiceAccessResponse,
  ListPolicyTagsCommandOutput as ListPolicyTagsResponse,
  ListPolicyVersionsCommandOutput as ListPolicyVersionsResponse,
  ListRolePoliciesCommandOutput as ListRolePoliciesResponse,
  ListRolesCommandOutput as ListRolesResponse,
  ListRoleTagsCommandOutput as ListRoleTagsResponse,
  ListServiceSpecificCredentialsCommandOutput as ListServiceSpecificCredentialsResponse,
  ListSigningCertificatesCommandOutput as ListSigningCertificatesResponse,
  ListSSHPublicKeysCommandOutput as ListSSHPublicKeysResponse,
  ListUserPoliciesCommandOutput as ListUserPoliciesResponse,
  ListUsersCommandOutput as ListUsersResponse,
  ListUserTagsCommandOutput as ListUserTagsResponse,
  PutGroupPolicyCommandOutput as PutGroupPolicyResponse,
  PutRolePermissionsBoundaryCommandOutput as PutRolePermissionsBoundaryResponse,
  PutRolePolicyCommandOutput as PutRolePolicyResponse,
  PutUserPermissionsBoundaryCommandOutput as PutUserPermissionsBoundaryResponse,
  PutUserPolicyCommandOutput as PutUserPolicyResponse,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput as RemoveClientIDFromOpenIDConnectProviderResponse,
  RemoveRoleFromInstanceProfileCommandOutput as RemoveRoleFromInstanceProfileResponse,
  RemoveUserFromGroupCommandOutput as RemoveUserFromGroupResponse,
  ResetServiceSpecificCredentialCommandOutput as ResetServiceSpecificCredentialResponse,
  SetDefaultPolicyVersionCommandOutput as SetDefaultPolicyVersionResponse,
  TagInstanceProfileCommandOutput as TagInstanceProfileResponse,
  TagOpenIDConnectProviderCommandOutput as TagOpenIDConnectProviderResponse,
  TagPolicyCommandOutput as TagPolicyResponse,
  TagRoleCommandOutput as TagRoleResponse,
  TagUserCommandOutput as TagUserResponse,
  SimulateCustomPolicyCommandOutput as SimulateCustomPolicyResponse,
  SimulatePrincipalPolicyCommandOutput as SimulatePrincipalPolicyResponse,
  UntagInstanceProfileCommandOutput as UntagInstanceProfileResponse,
  UntagOpenIDConnectProviderCommandOutput as UntagOpenIDConnectProviderResponse,
  UntagPolicyCommandOutput as UntagPolicyResponse,
  UntagRoleCommandOutput as UntagRoleResponse,
  UntagUserCommandOutput as UntagUserResponse,
  UpdateAccessKeyCommandOutput as UpdateAccessKeyResponse,
  UpdateAccountPasswordPolicyCommandOutput as UpdateAccountPasswordPolicyResponse,
  UpdateAssumeRolePolicyCommandOutput as UpdateAssumeRolePolicyResponse,
  UpdateGroupCommandOutput as UpdateGroupResponse,
  UpdateLoginProfileCommandOutput as UpdateLoginProfileResponse,
  UpdateOpenIDConnectProviderThumbprintCommandOutput as UpdateOpenIDConnectProviderThumbprintResponse,
  UpdateRoleCommandOutput as UpdateRoleResponse,
  UpdateRoleDescriptionCommandOutput as UpdateRoleDescriptionResponse,
  UpdateServiceSpecificCredentialCommandOutput as UpdateServiceSpecificCredentialResponse,
  UpdateSigningCertificateCommandOutput as UpdateSigningCertificateResponse,
  UpdateSSHPublicKeyCommandOutput as UpdateSSHPublicKeyResponse,
  UpdateUserCommandOutput as UpdateUserResponse,
  UploadSigningCertificateCommandOutput as UploadSigningCertificateResponse,
  UploadSSHPublicKeyCommandOutput as UploadSSHPublicKeyResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-iam";

declare interface AwsLiteIAM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html IAM: AddClientIDToOpenIDConnectProvider}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AddClientIDToOpenIDConnectProvider IAM: AddClientIDToOpenIDConnectProvider}
   */
  AddClientIDToOpenIDConnectProvider: (input: { ClientID: string, OpenIDConnectProviderArn: string }) => Promise<AddClientIDToOpenIDConnectProviderResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html IAM: AddRoleToInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AddRoleToInstanceProfile IAM: AddRoleToInstanceProfile}
   */
  AddRoleToInstanceProfile: (input: { InstanceProfileName: string, RoleName: string }) => Promise<AddRoleToInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html IAM: AddUserToGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AddUserToGroup IAM: AddUserToGroup}
   */
  AddUserToGroup: (input: { GroupName: string, UserName: string }) => Promise<AddUserToGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html IAM: AttachGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AttachGroupPolicy IAM: AttachGroupPolicy}
   */
  AttachGroupPolicy: (input: { GroupName: string, PolicyArn: string }) => Promise<AttachGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html IAM: AttachRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AttachRolePolicy IAM: AttachRolePolicy}
   */
  AttachRolePolicy: (input: { PolicyArn: string, RoleName: string }) => Promise<AttachRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html IAM: AttachUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AttachUserPolicy IAM: AttachUserPolicy}
   */
  AttachUserPolicy: (input: { PolicyArn: string, UserName: string }) => Promise<AttachUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html IAM: ChangePassword}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ChangePassword IAM: ChangePassword}
   */
  ChangePassword: (input: { NewPassword: string, OldPassword: string }) => Promise<ChangePasswordResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html IAM: CreateAccessKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateAccessKey IAM: CreateAccessKey}
   */
  CreateAccessKey: (input: { UserName: string }) => Promise<CreateAccessKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html IAM: CreateAccountAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateAccountAlias IAM: CreateAccountAlias}
   */
  CreateAccountAlias: (input: { AccountAlias: string }) => Promise<CreateAccountAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html IAM: CreateGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateGroup IAM: CreateGroup}
   */
  CreateGroup: (input: { GroupName: string, Path?: string }) => Promise<CreateGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html IAM: CreateInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateInstanceProfile IAM: CreateInstanceProfile}
   */
  CreateInstanceProfile: (input: { InstanceProfileName: string, Path?: string, Tags?: any[] }) => Promise<CreateInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html IAM: CreateLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateLoginProfile IAM: CreateLoginProfile}
   */
  CreateLoginProfile: (input: { Password: string, UserName: string, PasswordResetRequired?: boolean }) => Promise<CreateLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html IAM: CreatePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreatePolicy IAM: CreatePolicy}
   */
  CreatePolicy: (input: { PolicyDocument: string | Record<string, any>, PolicyName: string, Description?: string, Path?: string, Tags?: any[] }) => Promise<CreatePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html IAM: CreateRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateRole IAM: CreateRole}
   */
  CreateRole: (input: { AssumeRolePolicyDocument: string | Record<string, any>, RoleName: string, Description?: string, MaxSessionDuration?: number, Path?: string, PermissionsBoundary?: string, Tags?: any[] }) => Promise<CreateRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html IAM: CreateServiceLinkedRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateServiceLinkedRole IAM: CreateServiceLinkedRole}
   */
  CreateServiceLinkedRole: (input: { AWSServiceName: string, CustomSuffix?: string, Description?: string }) => Promise<CreateServiceLinkedRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html IAM: CreateServiceSpecificCredential}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateServiceSpecificCredential IAM: CreateServiceSpecificCredential}
   */
  CreateServiceSpecificCredential: (input: { ServiceName: string, UserName: string }) => Promise<CreateServiceSpecificCredentialResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html IAM: CreateUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateUser IAM: CreateUser}
   */
  CreateUser: (input: { UserName: string, Path?: string, PermissionsBoundary?: string, Tags?: any[] }) => Promise<CreateUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html IAM: DeleteAccessKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteAccessKey IAM: DeleteAccessKey}
   */
  DeleteAccessKey: (input: { AccessKeyId: string, UserName?: string }) => Promise<DeleteAccessKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html IAM: DeleteAccountAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteAccountAlias IAM: DeleteAccountAlias}
   */
  DeleteAccountAlias: (input: { AccountAlias: string }) => Promise<DeleteAccountAliasResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteAccountPasswordPolicy IAM: DeleteAccountPasswordPolicy} */
  DeleteAccountPasswordPolicy: () => Promise<DeleteAccountPasswordPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html IAM: DeleteGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteGroup IAM: DeleteGroup}
   */
  DeleteGroup: (input: { GroupName: string }) => Promise<DeleteGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html IAM: DeleteGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteGroupPolicy IAM: DeleteGroupPolicy}
   */
  DeleteGroupPolicy: (input: { GroupName: string, PolicyName: string }) => Promise<DeleteGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html IAM: DeleteInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteInstanceProfile IAM: DeleteInstanceProfile}
   */
  DeleteInstanceProfile: (input: { InstanceProfileName: string }) => Promise<DeleteInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html IAM: DeleteLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteLoginProfile IAM: DeleteLoginProfile}
   */
  DeleteLoginProfile: (input: { UserName: string }) => Promise<DeleteLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html IAM: DeleteOpenIDConnectProvider}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteOpenIDConnectProvider IAM: DeleteOpenIDConnectProvider}
   */
  DeleteOpenIDConnectProvider: (input: { OpenIDConnectProviderArn: string }) => Promise<DeleteOpenIDConnectProviderResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html IAM: DeletePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeletePolicy IAM: DeletePolicy}
   */
  DeletePolicy: (input: { PolicyArn: string }) => Promise<DeletePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html IAM: DeletePolicyVersion}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeletePolicyVersion IAM: DeletePolicyVersion}
   */
  DeletePolicyVersion: (input: { PolicyArn: string, VersionId: string }) => Promise<DeletePolicyVersionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html IAM: DeleteRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteRole IAM: DeleteRole}
   */
  DeleteRole: (input: { RoleName: string }) => Promise<DeleteRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html IAM: DeleteRolePermissionsBoundary}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteRolePermissionsBoundary IAM: DeleteRolePermissionsBoundary}
   */
  DeleteRolePermissionsBoundary: (input: { RoleName: string }) => Promise<DeleteRolePermissionsBoundaryResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html IAM: DeleteRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteRolePolicy IAM: DeleteRolePolicy}
   */
  DeleteRolePolicy: (input: { RoleName: string, PolicyName: string }) => Promise<DeleteRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html IAM: DeleteServiceLinkedRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteServiceLinkedRole IAM: DeleteServiceLinkedRole}
   */
  DeleteServiceLinkedRole: (input: { RoleName: string }) => Promise<DeleteServiceLinkedRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html IAM: DeleteServiceSpecificCredential}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteServiceSpecificCredential IAM: DeleteServiceSpecificCredential}
   */
  DeleteServiceSpecificCredential: (input: { ServiceSpecificCredentialId: string, UserName: string }) => Promise<DeleteServiceSpecificCredentialResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html IAM: DeleteSigningCertificate}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteSigningCertificate IAM: DeleteSigningCertificate}
   */
  DeleteSigningCertificate: (input: { CertificateId: string, UserName?: string }) => Promise<DeleteSigningCertificateResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html IAM: DeleteSSHPublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteSSHPublicKey IAM: DeleteSSHPublicKey}
   */
  DeleteSSHPublicKey: (input: { SSHPublicKeyId: string, UserName: string }) => Promise<DeleteSSHPublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html IAM: DeleteUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteUser IAM: DeleteUser}
   */
  DeleteUser: (input: { UserName: string }) => Promise<DeleteUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html IAM: DeleteUserPermissionsBoundary}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteUserPermissionsBoundary IAM: DeleteUserPermissionsBoundary}
   */
  DeleteUserPermissionsBoundary: (input: { UserName: string }) => Promise<DeleteUserPermissionsBoundaryResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html IAM: DeleteUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteUserPolicy IAM: DeleteUserPolicy}
   */
  DeleteUserPolicy: (input: { PolicyName: string, UserName: string }) => Promise<DeleteUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html IAM: DetachGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DetachGroupPolicy IAM: DetachGroupPolicy}
   */
  DetachGroupPolicy: (input: { GroupName: string, PolicyArn: string }) => Promise<DetachGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html IAM: DetachRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DetachRolePolicy IAM: DetachRolePolicy}
   */
  DetachRolePolicy: (input: { PolicyArn: string, RoleName: string }) => Promise<DetachRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html IAM: DetachUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DetachUserPolicy IAM: DetachUserPolicy}
   */
  DetachUserPolicy: (input: { PolicyArn: string, UserName: string }) => Promise<DetachUserPolicyResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GenerateCredentialReport IAM: GenerateCredentialReport} */
  GenerateCredentialReport: () => Promise<GenerateCredentialReportResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html IAM: GenerateOrganizationsAccessReport}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GenerateOrganizationsAccessReport IAM: GenerateOrganizationsAccessReport}
   */
  GenerateOrganizationsAccessReport: (input: { EntityPath: string, OrganizationsPolicyId?: string }) => Promise<GenerateOrganizationsAccessReportResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html IAM: GenerateServiceLastAccessedDetails}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GenerateServiceLastAccessedDetails IAM: GenerateServiceLastAccessedDetails}
   */
  GenerateServiceLastAccessedDetails: (input: { Arn: string, Granularity?: string }) => Promise<GenerateServiceLastAccessedDetailsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html IAM: GetAccessKeyLastUsed}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetAccessKeyLastUsed IAM: GetAccessKeyLastUsed}
   */
  GetAccessKeyLastUsed: (input: { AccessKeyId: string }) => Promise<GetAccessKeyLastUsedResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html IAM: GetAccountAuthorizationDetails}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetAccountAuthorizationDetails IAM: GetAccountAuthorizationDetails}
   */
  GetAccountAuthorizationDetails: (input: { Filter?: any[], Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<GetAccountAuthorizationDetailsResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetAccountPasswordPolicy IAM: GetAccountPasswordPolicy} */
  GetAccountPasswordPolicy: () => Promise<GetAccountPasswordPolicyResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetAccountSummary IAM: GetAccountSummary} */
  GetAccountSummary: () => Promise<GetAccountSummaryResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html IAM: GetContextKeysForCustomPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetContextKeysForCustomPolicy IAM: GetContextKeysForCustomPolicy}
   */
  GetContextKeysForCustomPolicy: (input: { PolicyInputList: any[] }) => Promise<GetContextKeysForCustomPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html IAM: GetContextKeysForPrincipalPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetContextKeysForPrincipalPolicy IAM: GetContextKeysForPrincipalPolicy}
   */
  GetContextKeysForPrincipalPolicy: (input: { PolicySourceArn: string, PolicyInputList?: any[] }) => Promise<GetContextKeysForPrincipalPolicyResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetCredentialReport IAM: GetCredentialReport} */
  GetCredentialReport: () => Promise<GetCredentialReportResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html IAM: GetGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetGroup IAM: GetGroup}
   */
  GetGroup: (input: { GroupName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<GetGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html IAM: GetGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetGroupPolicy IAM: GetGroupPolicy}
   */
  GetGroupPolicy: (input: { GroupName: string, PolicyName: string }) => Promise<GetGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html IAM: GetInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetInstanceProfile IAM: GetInstanceProfile}
   */
  GetInstanceProfile: (input: { InstanceProfileName: string }) => Promise<GetInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html IAM: GetLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetLoginProfile IAM: GetLoginProfile}
   */
  GetLoginProfile: (input: { UserName: string }) => Promise<GetLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html IAM: GetOpenIDConnectProvider}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetOpenIDConnectProvider IAM: GetOpenIDConnectProvider}
   */
  GetOpenIDConnectProvider: (input: { OpenIDConnectProviderArn: string }) => Promise<GetOpenIDConnectProviderResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html IAM: GetOrganizationsAccessReport}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetOrganizationsAccessReport IAM: GetOrganizationsAccessReport}
   */
  GetOrganizationsAccessReport: (input: { JobId: string, Marker?: string, MaxItems?: number, SortKey?: string, paginate?: boolean }) => Promise<GetOrganizationsAccessReportResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html IAM: GetPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetPolicy IAM: GetPolicy}
   */
  GetPolicy: (input: { PolicyArn: string }) => Promise<GetPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html IAM: GetPolicyVersion}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetPolicyVersion IAM: GetPolicyVersion}
   */
  GetPolicyVersion: (input: { PolicyArn: string, VersionId: string }) => Promise<GetPolicyVersionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html IAM: GetRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetRole IAM: GetRole}
   */
  GetRole: (input: { RoleName: string }) => Promise<GetRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html IAM: GetRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetRolePolicy IAM: GetRolePolicy}
   */
  GetRolePolicy: (input: { PolicyName: string, RoleName: string }) => Promise<GetRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html IAM: GetServiceLastAccessedDetails}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetServiceLastAccessedDetails IAM: GetServiceLastAccessedDetails}
   */
  GetServiceLastAccessedDetails: (input: { JobId: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<GetServiceLastAccessedDetailsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html IAM: GetServiceLastAccessedDetailsWithEntities}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetServiceLastAccessedDetailsWithEntities IAM: GetServiceLastAccessedDetailsWithEntities}
   */
  GetServiceLastAccessedDetailsWithEntities: (input: { JobId: string, ServiceNamespace: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<GetServiceLastAccessedDetailsWithEntitiesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html IAM: GetSSHPublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetSSHPublicKey IAM: GetSSHPublicKey}
   */
  GetSSHPublicKey: (input: { Encoding: string, SSHPublicKeyId: string, UserName: string }) => Promise<GetSSHPublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html IAM: GetUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetUser IAM: GetUser}
   */
  GetUser: (input: { UserName: string }) => Promise<GetUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html IAM: GetUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetUserPolicy IAM: GetUserPolicy}
   */
  GetUserPolicy: (input: { PolicyName: string, UserName: string }) => Promise<GetUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html IAM: ListAccessKeys}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAccessKeys IAM: ListAccessKeys}
   */
  ListAccessKeys: (input: { Marker?: string, MaxItems?: number, UserName?: string, paginate?: boolean }) => Promise<ListAccessKeysResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html IAM: ListAccountAliases}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAccountAliases IAM: ListAccountAliases}
   */
  ListAccountAliases: (input: { Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListAccountAliasesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html IAM: ListAttachedGroupPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAttachedGroupPolicies IAM: ListAttachedGroupPolicies}
   */
  ListAttachedGroupPolicies: (input: { GroupName: string, Marker?: string, PathPrefix?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListAttachedGroupPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html IAM: ListAttachedRolePolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAttachedRolePolicies IAM: ListAttachedRolePolicies}
   */
  ListAttachedRolePolicies: (input: { RoleName: string, Marker?: string, PathPrefix?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListAttachedRolePoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html IAM: ListAttachedUserPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAttachedUserPolicies IAM: ListAttachedUserPolicies}
   */
  ListAttachedUserPolicies: (input: { UserName: string, Marker?: string, PathPrefix?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListAttachedUserPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html IAM: ListEntitiesForPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListEntitiesForPolicy IAM: ListEntitiesForPolicy}
   */
  ListEntitiesForPolicy: (input: { PolicyArn: string, EntityFilter?: string, Marker?: string, MaxItems?: number, PathPrefix?: string, PolicyUsageFilter?: string }) => Promise<ListEntitiesForPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html IAM: ListGroupPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListGroupPolicies IAM: ListGroupPolicies}
   */
  ListGroupPolicies: (input: { GroupName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListGroupPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html IAM: ListGroups}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListGroups IAM: ListGroups}
   */
  ListGroups: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean }) => Promise<ListGroupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html IAM: ListGroupsForUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListGroupsForUser IAM: ListGroupsForUser}
   */
  ListGroupsForUser: (input: { UserName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListGroupsForUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html IAM: ListInstanceProfiles}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListInstanceProfiles IAM: ListInstanceProfiles}
   */
  ListInstanceProfiles: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean }) => Promise<ListInstanceProfilesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html IAM: ListInstanceProfilesForRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListInstanceProfilesForRole IAM: ListInstanceProfilesForRole}
   */
  ListInstanceProfilesForRole: (input: { RoleName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListInstanceProfilesForRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html IAM: ListInstanceProfileTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListInstanceProfileTags IAM: ListInstanceProfileTags}
   */
  ListInstanceProfileTags: (input: { InstanceProfileName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListInstanceProfileTagsResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListOpenIDConnectProviders IAM: ListOpenIDConnectProviders} */
  ListOpenIDConnectProviders: () => Promise<ListOpenIDConnectProvidersResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviderTags.html IAM: ListOpenIDConnectProviderTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListOpenIDConnectProviderTags IAM: ListOpenIDConnectProviderTags}
   */
  ListOpenIDConnectProviderTags: (input: { OpenIDConnectProviderArn: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListOpenIDConnectProviderTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html IAM: ListPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListPolicies IAM: ListPolicies}
   */
  ListPolicies: (input: { Marker?: string, MaxItems?: number, OnlyAttached?: boolean, PathPrefix?: string, PolicyUsageFilter?: string, Scope?: string, paginate?: boolean }) => Promise<ListPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html IAM: ListPoliciesGrantingServiceAccess}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListPoliciesGrantingServiceAccess IAM: ListPoliciesGrantingServiceAccess}
   */
  ListPoliciesGrantingServiceAccess: (input: { Arn: string, ServiceNamespaces: any[], Marker?: string, paginate?: boolean }) => Promise<ListPoliciesGrantingServiceAccessResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html IAM: ListPolicyTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListPolicyTags IAM: ListPolicyTags}
   */
  ListPolicyTags: (input: { PolicyArn: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListPolicyTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html IAM: ListPolicyVersions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListPolicyVersions IAM: ListPolicyVersions}
   */
  ListPolicyVersions: (input: { PolicyArn: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListPolicyVersionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html IAM: ListRolePolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListRolePolicies IAM: ListRolePolicies}
   */
  ListRolePolicies: (input: { RoleName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListRolePoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html IAM: ListRoles}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListRoles IAM: ListRoles}
   */
  ListRoles: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean }) => Promise<ListRolesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html IAM: ListRoleTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListRoleTags IAM: ListRoleTags}
   */
  ListRoleTags: (input: { RoleName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListRoleTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html IAM: ListServiceSpecificCredentials}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListServiceSpecificCredentials IAM: ListServiceSpecificCredentials}
   */
  ListServiceSpecificCredentials: (input: { ServiceName?: string, UserName?: string }) => Promise<ListServiceSpecificCredentialsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html IAM: ListSigningCertificates}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListSigningCertificates IAM: ListSigningCertificates}
   */
  ListSigningCertificates: (input: { Marker?: string, MaxItems?: number, UserName?: string }) => Promise<ListSigningCertificatesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html IAM: ListSSHPublicKeys}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListSSHPublicKeys IAM: ListSSHPublicKeys}
   */
  ListSSHPublicKeys: (input: { Marker?: string, MaxItems?: number, UserName?: string }) => Promise<ListSSHPublicKeysResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html IAM: ListUserPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListUserPolicies IAM: ListUserPolicies}
   */
  ListUserPolicies: (input: { UserName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListUserPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html IAM: ListUsers}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListUsers IAM: ListUsers}
   */
  ListUsers: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean }) => Promise<ListUsersResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html IAM: ListUserTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListUserTags IAM: ListUserTags}
   */
  ListUserTags: (input: { UserName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListUserTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html IAM: PutGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutGroupPolicy IAM: PutGroupPolicy}
   */
  PutGroupPolicy: (input: { GroupName: string, PolicyDocument: string | Record<string, any>, PolicyName: string }) => Promise<PutGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html IAM: PutRolePermissionsBoundary}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutRolePermissionsBoundary IAM: PutRolePermissionsBoundary}
   */
  PutRolePermissionsBoundary: (input: { PermissionsBoundary: string, RoleName: string }) => Promise<PutRolePermissionsBoundaryResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html IAM: PutRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutRolePolicy IAM: PutRolePolicy}
   */
  PutRolePolicy: (input: { PolicyDocument: string | Record<string, any>, PolicyName: string, RoleName: string }) => Promise<PutRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html IAM: PutUserPermissionsBoundary}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutUserPermissionsBoundary IAM: PutUserPermissionsBoundary}
   */
  PutUserPermissionsBoundary: (input: { PermissionsBoundary: string, UserName: string }) => Promise<PutUserPermissionsBoundaryResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html IAM: PutUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutUserPolicy IAM: PutUserPolicy}
   */
  PutUserPolicy: (input: { PolicyDocument: string | Record<string, any>, PolicyName: string, UserName: string }) => Promise<PutUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html IAM: RemoveClientIDFromOpenIDConnectProvider}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#RemoveClientIDFromOpenIDConnectProvider IAM: RemoveClientIDFromOpenIDConnectProvider}
   */
  RemoveClientIDFromOpenIDConnectProvider: (input: { ClientID: string, OpenIDConnectProviderArn: string }) => Promise<RemoveClientIDFromOpenIDConnectProviderResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html IAM: RemoveRoleFromInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#RemoveRoleFromInstanceProfile IAM: RemoveRoleFromInstanceProfile}
   */
  RemoveRoleFromInstanceProfile: (input: { InstanceProfileName: string, RoleName: string }) => Promise<RemoveRoleFromInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html IAM: RemoveUserFromGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#RemoveUserFromGroup IAM: RemoveUserFromGroup}
   */
  RemoveUserFromGroup: (input: { GroupName: string, UserName: string }) => Promise<RemoveUserFromGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html IAM: ResetServiceSpecificCredential}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ResetServiceSpecificCredential IAM: ResetServiceSpecificCredential}
   */
  ResetServiceSpecificCredential: (input: { ServiceSpecificCredentialId: string, UserName?: string }) => Promise<ResetServiceSpecificCredentialResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html IAM: SetDefaultPolicyVersion}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#SetDefaultPolicyVersion IAM: SetDefaultPolicyVersion}
   */
  SetDefaultPolicyVersion: (input: { PolicyArn: string, VersionId: string }) => Promise<SetDefaultPolicyVersionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html IAM: TagInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagInstanceProfile IAM: TagInstanceProfile}
   */
  TagInstanceProfile: (input: { InstanceProfileName: string, Tags: any[] }) => Promise<TagInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagOpenIDConnectProvider.html IAM: TagOpenIDConnectProvider}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagOpenIDConnectProvider IAM: TagOpenIDConnectProvider}
   */
  TagOpenIDConnectProvider: (input: { OpenIDConnectProviderArn: string, Tags: any[] }) => Promise<TagOpenIDConnectProviderResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html IAM: TagPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagPolicy IAM: TagPolicy}
   */
  TagPolicy: (input: { PolicyArn: string, Tags: any[] }) => Promise<TagPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html IAM: TagRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagRole IAM: TagRole}
   */
  TagRole: (input: { RoleName: string, Tags: any[] }) => Promise<TagRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html IAM: TagUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagUser IAM: TagUser}
   */
  TagUser: (input: { UserName: string, Tags: any[] }) => Promise<TagUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html IAM: SimulateCustomPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#SimulateCustomPolicy IAM: SimulateCustomPolicy}
   */
  SimulateCustomPolicy: (input: { ActionNames: any[], PolicyInputList: any[], CallerArn?: string, ContextEntries?: any[], Marker?: string, MaxItems?: number, PermissionsBoundaryPolicyInputList?: any[], ResourceArns?: any[], ResourceHandlingOption?: string, ResourceOwner?: string, ResourcePolicy?: string | Record<string, any>, paginate?: boolean }) => Promise<SimulateCustomPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html IAM: SimulatePrincipalPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#SimulatePrincipalPolicy IAM: SimulatePrincipalPolicy}
   */
  SimulatePrincipalPolicy: (input: { ActionNames: any[], PolicySourceArn: string, CallerArn?: string, ContextEntries?: any[], Marker?: string, MaxItems?: number, PermissionsBoundaryPolicyInputList?: any[], PolicyInputList?: any[], ResourceArns?: any[], ResourceHandlingOption?: string, ResourceOwner?: string, ResourcePolicy?: string | Record<string, any>, paginate?: boolean }) => Promise<SimulatePrincipalPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html IAM: UntagInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagInstanceProfile IAM: UntagInstanceProfile}
   */
  UntagInstanceProfile: (input: { InstanceProfileName: string, TagKeys: any[] }) => Promise<UntagInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagOpenIDConnectProvider.html IAM: UntagOpenIDConnectProvider}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagOpenIDConnectProvider IAM: UntagOpenIDConnectProvider}
   */
  UntagOpenIDConnectProvider: (input: { OpenIDConnectProviderArn: string, TagKeys: any[] }) => Promise<UntagOpenIDConnectProviderResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html IAM: UntagPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagPolicy IAM: UntagPolicy}
   */
  UntagPolicy: (input: { PolicyArn: string, TagKeys: any[] }) => Promise<UntagPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html IAM: UntagRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagRole IAM: UntagRole}
   */
  UntagRole: (input: { RoleName: string, TagKeys: any[] }) => Promise<UntagRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html IAM: UntagUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagUser IAM: UntagUser}
   */
  UntagUser: (input: { UserName: string, TagKeys: any[] }) => Promise<UntagUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html IAM: UpdateAccessKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateAccessKey IAM: UpdateAccessKey}
   */
  UpdateAccessKey: (input: { AccessKeyId: string, Status: string, UserName?: string }) => Promise<UpdateAccessKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html IAM: UpdateAccountPasswordPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateAccountPasswordPolicy IAM: UpdateAccountPasswordPolicy}
   */
  UpdateAccountPasswordPolicy: (input: { AllowUsersToChangePassword?: boolean, HardExpiry?: boolean, MaxPasswordAge?: number, MinimumPasswordLength?: number, PasswordReusePrevention?: number, RequireLowercaseCharacters?: boolean, RequireNumbers?: boolean, RequireSymbols?: boolean, RequireUppercaseCharacters?: boolean }) => Promise<UpdateAccountPasswordPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html IAM: UpdateAssumeRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateAssumeRolePolicy IAM: UpdateAssumeRolePolicy}
   */
  UpdateAssumeRolePolicy: (input: { PolicyDocument: string | Record<string, any>, RoleName: string }) => Promise<UpdateAssumeRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html IAM: UpdateGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateGroup IAM: UpdateGroup}
   */
  UpdateGroup: (input: { GroupName: string, NewGroupName?: string, NewPath?: string }) => Promise<UpdateGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html IAM: UpdateLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateLoginProfile IAM: UpdateLoginProfile}
   */
  UpdateLoginProfile: (input: { UserName: string, Password?: string, PasswordResetRequired?: boolean }) => Promise<UpdateLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html IAM: UpdateOpenIDConnectProviderThumbprint}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateOpenIDConnectProviderThumbprint IAM: UpdateOpenIDConnectProviderThumbprint}
   */
  UpdateOpenIDConnectProviderThumbprint: (input: { OpenIDConnectProviderArn: string, ThumbprintList: any[] }) => Promise<UpdateOpenIDConnectProviderThumbprintResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html IAM: UpdateRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateRole IAM: UpdateRole}
   */
  UpdateRole: (input: { RoleName: string, Description?: string, MaxSessionDuration?: number }) => Promise<UpdateRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html IAM: UpdateRoleDescription}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateRoleDescription IAM: UpdateRoleDescription}
   */
  UpdateRoleDescription: (input: { RoleName: string, Description?: string }) => Promise<UpdateRoleDescriptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html IAM: UpdateServiceSpecificCredential}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateServiceSpecificCredential IAM: UpdateServiceSpecificCredential}
   */
  UpdateServiceSpecificCredential: (input: { ServiceSpecificCredentialId: string, Status: string, UserName?: string }) => Promise<UpdateServiceSpecificCredentialResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html IAM: UpdateSigningCertificate}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateSigningCertificate IAM: UpdateSigningCertificate}
   */
  UpdateSigningCertificate: (input: { CertificateId: string, Status: string, UserName?: string }) => Promise<UpdateSigningCertificateResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html IAM: UpdateSSHPublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateSSHPublicKey IAM: UpdateSSHPublicKey}
   */
  UpdateSSHPublicKey: (input: { SSHPublicKeyId: string, Status: string, UserName: string }) => Promise<UpdateSSHPublicKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html IAM: UpdateUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateUser IAM: UpdateUser}
   */
  UpdateUser: (input: { UserName: string, NewPath?: string, NewUserName?: string }) => Promise<UpdateUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html IAM: UploadSigningCertificate}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UploadSigningCertificate IAM: UploadSigningCertificate}
   */
  UploadSigningCertificate: (input: { CertificateBody: string, UserName?: string }) => Promise<UploadSigningCertificateResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html IAM: UploadSSHPublicKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UploadSSHPublicKey IAM: UploadSSHPublicKey}
   */
  UploadSSHPublicKey: (input: { SSHPublicKeyBody: string, UserName: string }) => Promise<UploadSSHPublicKeyResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    IAM: AwsLiteIAM;
  }
}

export type {
  AwsLiteIAM,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  AddClientIDToOpenIDConnectProviderResponse,
  AddRoleToInstanceProfileResponse,
  AddUserToGroupResponse,
  AttachGroupPolicyResponse,
  AttachRolePolicyResponse,
  AttachUserPolicyResponse,
  ChangePasswordResponse,
  CreateAccessKeyResponse,
  CreateAccountAliasResponse,
  CreateGroupResponse,
  CreateInstanceProfileResponse,
  CreateLoginProfileResponse,
  CreatePolicyResponse,
  CreateRoleResponse,
  CreateServiceLinkedRoleResponse,
  CreateServiceSpecificCredentialResponse,
  CreateUserResponse,
  DeleteAccessKeyResponse,
  DeleteAccountAliasResponse,
  DeleteAccountPasswordPolicyResponse,
  DeleteGroupResponse,
  DeleteGroupPolicyResponse,
  DeleteInstanceProfileResponse,
  DeleteLoginProfileResponse,
  DeleteOpenIDConnectProviderResponse,
  DeletePolicyResponse,
  DeletePolicyVersionResponse,
  DeleteRoleResponse,
  DeleteRolePermissionsBoundaryResponse,
  DeleteRolePolicyResponse,
  DeleteServiceLinkedRoleResponse,
  DeleteServiceSpecificCredentialResponse,
  DeleteSigningCertificateResponse,
  DeleteSSHPublicKeyResponse,
  DeleteUserResponse,
  DeleteUserPermissionsBoundaryResponse,
  DeleteUserPolicyResponse,
  DetachGroupPolicyResponse,
  DetachRolePolicyResponse,
  DetachUserPolicyResponse,
  GenerateCredentialReportResponse,
  GenerateOrganizationsAccessReportResponse,
  GenerateServiceLastAccessedDetailsResponse,
  GetAccessKeyLastUsedResponse,
  GetAccountAuthorizationDetailsResponse,
  GetAccountPasswordPolicyResponse,
  GetAccountSummaryResponse,
  GetContextKeysForCustomPolicyResponse,
  GetContextKeysForPrincipalPolicyResponse,
  GetCredentialReportResponse,
  GetGroupResponse,
  GetGroupPolicyResponse,
  GetInstanceProfileResponse,
  GetLoginProfileResponse,
  GetOpenIDConnectProviderResponse,
  GetOrganizationsAccessReportResponse,
  GetPolicyResponse,
  GetPolicyVersionResponse,
  GetRoleResponse,
  GetRolePolicyResponse,
  GetServiceLastAccessedDetailsResponse,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
  GetSSHPublicKeyResponse,
  GetUserResponse,
  GetUserPolicyResponse,
  ListAccessKeysResponse,
  ListAccountAliasesResponse,
  ListAttachedGroupPoliciesResponse,
  ListAttachedRolePoliciesResponse,
  ListAttachedUserPoliciesResponse,
  ListEntitiesForPolicyResponse,
  ListGroupPoliciesResponse,
  ListGroupsResponse,
  ListGroupsForUserResponse,
  ListInstanceProfilesResponse,
  ListInstanceProfilesForRoleResponse,
  ListInstanceProfileTagsResponse,
  ListOpenIDConnectProvidersResponse,
  ListOpenIDConnectProviderTagsResponse,
  ListPoliciesResponse,
  ListPoliciesGrantingServiceAccessResponse,
  ListPolicyTagsResponse,
  ListPolicyVersionsResponse,
  ListRolePoliciesResponse,
  ListRolesResponse,
  ListRoleTagsResponse,
  ListServiceSpecificCredentialsResponse,
  ListSigningCertificatesResponse,
  ListSSHPublicKeysResponse,
  ListUserPoliciesResponse,
  ListUsersResponse,
  ListUserTagsResponse,
  PutGroupPolicyResponse,
  PutRolePermissionsBoundaryResponse,
  PutRolePolicyResponse,
  PutUserPermissionsBoundaryResponse,
  PutUserPolicyResponse,
  RemoveClientIDFromOpenIDConnectProviderResponse,
  RemoveRoleFromInstanceProfileResponse,
  RemoveUserFromGroupResponse,
  ResetServiceSpecificCredentialResponse,
  SetDefaultPolicyVersionResponse,
  TagInstanceProfileResponse,
  TagOpenIDConnectProviderResponse,
  TagPolicyResponse,
  TagRoleResponse,
  TagUserResponse,
  SimulateCustomPolicyResponse,
  SimulatePrincipalPolicyResponse,
  UntagInstanceProfileResponse,
  UntagOpenIDConnectProviderResponse,
  UntagPolicyResponse,
  UntagRoleResponse,
  UntagUserResponse,
  UpdateAccessKeyResponse,
  UpdateAccountPasswordPolicyResponse,
  UpdateAssumeRolePolicyResponse,
  UpdateGroupResponse,
  UpdateLoginProfileResponse,
  UpdateOpenIDConnectProviderThumbprintResponse,
  UpdateRoleResponse,
  UpdateRoleDescriptionResponse,
  UpdateServiceSpecificCredentialResponse,
  UpdateSigningCertificateResponse,
  UpdateSSHPublicKeyResponse,
  UpdateUserResponse,
  UploadSigningCertificateResponse,
  UploadSSHPublicKeyResponse,
  // $EXPORT_END
}
