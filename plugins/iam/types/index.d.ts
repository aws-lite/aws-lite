import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AddUserToGroupCommandOutput as AddUserToGroupResponse,
  CreateGroupCommandOutput as CreateGroupResponse,
  CreateRoleCommandOutput as CreateRoleResponse,
  CreateUserCommandOutput as CreateUserResponse,
  DeleteGroupCommandOutput as DeleteGroupResponse,
  DeleteRoleCommandOutput as DeleteRoleResponse,
  DeleteUserCommandOutput as DeleteUserResponse,
  GetGroupCommandOutput as GetGroupResponse,
  GetRoleCommandOutput as GetRoleResponse,
  GetUserCommandOutput as GetUserResponse,
  RemoveUserFromGroupCommandOutput as RemoveUserFromGroupResponse,
  UpdateRoleCommandOutput as UpdateRoleResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-iam";

declare interface AwsLiteIAM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html IAM: AddUserToGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AddUserToGroup IAM: AddUserToGroup}
   */
  AddUserToGroup: (input: { GroupName: string, UserName: string }) => Promise<AddUserToGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html IAM: CreateGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateGroup IAM: CreateGroup}
   */
  CreateGroup: (input: { GroupName: string, Path?: string }) => Promise<CreateGroupResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html IAM: DeleteGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteGroup IAM: DeleteGroup}
   */
  DeleteGroup: (input: { GroupName: string }) => Promise<DeleteGroupResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html IAM: GetGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetGroup IAM: GetGroup}
   */
  GetGroup: (input: { GroupName: string, Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<GetGroupResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html IAM: RemoveUserFromGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#RemoveUserFromGroup IAM: RemoveUserFromGroup}
   */
  RemoveUserFromGroup: (input: { GroupName: string, UserName: string }) => Promise<RemoveUserFromGroupResponse>
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
  AddUserToGroupResponse,
  CreateGroupResponse,
  CreateRoleResponse,
  CreateUserResponse,
  DeleteGroupResponse,
  DeleteRoleResponse,
  DeleteUserResponse,
  GetGroupResponse,
  GetRoleResponse,
  GetUserResponse,
  RemoveUserFromGroupResponse,
  UpdateRoleResponse,
  // $EXPORT_END
}
