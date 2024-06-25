import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AddClientIDToOpenIDConnectProviderCommandOutput as AddClientIDToOpenIDConnectProviderResponse,
  AddRoleToInstanceProfileCommandOutput as AddRoleToInstanceProfileResponse,
  AddUserToGroupCommandOutput as AddUserToGroupResponse,
  AttachGroupPolicyCommandOutput as AttachGroupPolicyResponse,
  AttachRolePolicyCommandOutput as AttachRolePolicyResponse,
  AttachUserPolicyCommandOutput as AttachUserPolicyResponse,
  CreateAccessKeyCommandOutput as CreateAccessKeyResponse,
  CreateAccountAliasCommandOutput as CreateAccountAliasResponse,
  CreateGroupCommandOutput as CreateGroupResponse,
  CreatePolicyCommandOutput as CreatePolicyResponse,
  CreateRoleCommandOutput as CreateRoleResponse,
  CreateUserCommandOutput as CreateUserResponse,
  DeleteAccessKeyCommandOutput as DeleteAccessKeyResponse,
  DeleteAccountAliasCommandOutput as DeleteAccountAliasResponse,
  DeleteGroupCommandOutput as DeleteGroupResponse,
  DeleteGroupPolicyCommandOutput as DeleteGroupPolicyResponse,
  DeletePolicyCommandOutput as DeletePolicyResponse,
  DeleteRoleCommandOutput as DeleteRoleResponse,
  DeleteUserCommandOutput as DeleteUserResponse,
  DetachGroupPolicyCommandOutput as DetachGroupPolicyResponse,
  GetAccessKeyLastUsedCommandOutput as GetAccessKeyLastUsedResponse,
  GetGroupCommandOutput as GetGroupResponse,
  GetGroupPolicyCommandOutput as GetGroupPolicyResponse,
  GetPolicyCommandOutput as GetPolicyResponse,
  GetRoleCommandOutput as GetRoleResponse,
  GetUserCommandOutput as GetUserResponse,
  ListAccessKeysCommandOutput as ListAccessKeysResponse,
  ListAccountAliasesCommandOutput as ListAccountAliasesResponse,
  PutGroupPolicyCommandOutput as PutGroupPolicyResponse,
  RemoveUserFromGroupCommandOutput as RemoveUserFromGroupResponse,
  UpdateAccessKeyCommandOutput as UpdateAccessKeyResponse,
  UpdateRoleCommandOutput as UpdateRoleResponse,
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
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html IAM: DeletePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeletePolicy IAM: DeletePolicy}
   */
  DeletePolicy: (input: { PolicyArn: string }) => Promise<DeletePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html IAM: DeleteRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteRole IAM: DeleteRole}
   */
  DeleteRole: (input: { RoleName: string }) => Promise<DeleteRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html IAM: DeleteUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteUser IAM: DeleteUser}
   */
  DeleteUser: (input: { UserName: string }) => Promise<DeleteUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html IAM: DetachGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DetachGroupPolicy IAM: DetachGroupPolicy}
   */
  DetachGroupPolicy: (input: { GroupName: string, PolicyArn: string }) => Promise<DetachGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html IAM: GetAccessKeyLastUsed}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetAccessKeyLastUsed IAM: GetAccessKeyLastUsed}
   */
  GetAccessKeyLastUsed: (input: { AccessKeyId: string }) => Promise<GetAccessKeyLastUsedResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html IAM: GetPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetPolicy IAM: GetPolicy}
   */
  GetPolicy: (input: { PolicyArn: string }) => Promise<GetPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html IAM: GetRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetRole IAM: GetRole}
   */
  GetRole: (input: { RoleName: string }) => Promise<GetRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html IAM: GetUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetUser IAM: GetUser}
   */
  GetUser: (input: { UserName: string }) => Promise<GetUserResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html IAM: PutGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutGroupPolicy IAM: PutGroupPolicy}
   */
  PutGroupPolicy: (input: { GroupName: string, PolicyDocument: string | Record<string, any>, PolicyName: string }) => Promise<PutGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html IAM: RemoveUserFromGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#RemoveUserFromGroup IAM: RemoveUserFromGroup}
   */
  RemoveUserFromGroup: (input: { GroupName: string, UserName: string }) => Promise<RemoveUserFromGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html IAM: UpdateAccessKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateAccessKey IAM: UpdateAccessKey}
   */
  UpdateAccessKey: (input: { AccessKeyId: string, Status: string, UserName?: string }) => Promise<UpdateAccessKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html IAM: UpdateRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateRole IAM: UpdateRole}
   */
  UpdateRole: (input: { RoleName: string, Description?: string, MaxSessionDuration?: number }) => Promise<UpdateRoleResponse>
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
  CreateAccessKeyResponse,
  CreateAccountAliasResponse,
  CreateGroupResponse,
  CreatePolicyResponse,
  CreateRoleResponse,
  CreateUserResponse,
  DeleteAccessKeyResponse,
  DeleteAccountAliasResponse,
  DeleteGroupResponse,
  DeleteGroupPolicyResponse,
  DeletePolicyResponse,
  DeleteRoleResponse,
  DeleteUserResponse,
  DetachGroupPolicyResponse,
  GetAccessKeyLastUsedResponse,
  GetGroupResponse,
  GetGroupPolicyResponse,
  GetPolicyResponse,
  GetRoleResponse,
  GetUserResponse,
  ListAccessKeysResponse,
  ListAccountAliasesResponse,
  PutGroupPolicyResponse,
  RemoveUserFromGroupResponse,
  UpdateAccessKeyResponse,
  UpdateRoleResponse,
  // $EXPORT_END
}
