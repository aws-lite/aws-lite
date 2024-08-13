import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  ActivateOrganizationsAccessCommandOutput as ActivateOrganizationsAccessResponse,
  ActivateTypeCommandOutput as ActivateTypeResponse,
  CreateStackCommandOutput as CreateStackResponse,
  DeactivateOrganizationsAccessCommandOutput as DeactivateOrganizationsAccessResponse,
  DeactivateTypeCommandOutput as DeactivateTypeResponse,
  DeleteStackCommandOutput as DeleteStackResponse,
  DeregisterTypeCommandOutput as DeregisterTypeResponse,
  DescribeOrganizationsAccessCommandOutput as DescribeOrganizationsAccessResponse,
  DescribeStackResourcesCommandOutput as DescribeStackResourcesResponse,
  DescribeStacksCommandOutput as DescribeStacksResponse,
  ListStackResourcesCommandOutput as ListStackResourcesResponse,
  RegisterTypeCommandOutput as RegisterTypeResponse,
  UpdateStackCommandOutput as UpdateStackResponse,
  UpdateTerminationProtectionCommandOutput as UpdateTerminationProtectionResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-cloudformation";

declare interface AwsLiteCloudFormation {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ActivateOrganizationsAccess CloudFormation: ActivateOrganizationsAccess} */
  ActivateOrganizationsAccess: () => Promise<ActivateOrganizationsAccessResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html CloudFormation: ActivateType}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ActivateType CloudFormation: ActivateType}
   */
  ActivateType: (input: { AutoUpdate?: boolean, ExecutionRoleArn?: string, LoggingConfig?: Record<string, any>, MajorVersion?: number, PublicTypeArn?: string, PublisherId?: string, Type?: string, TypeName?: string, TypeNameAlias?: string, VersionBump?: string }) => Promise<ActivateTypeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html CloudFormation: CreateStack}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#CreateStack CloudFormation: CreateStack}
   */
  CreateStack: (input: { StackName: string, Capabilities?: any[], ClientRequestToken?: string, DisableRollback?: boolean, EnableTerminationProtection?: boolean, NotificationARNs?: any[], OnFailure?: string, Parameters?: any[], ResourceTypes?: any[], RetainExceptOnCreate?: boolean, RoleARN?: string, RollbackConfiguration?: Record<string, any>, StackPolicyBody?: string | Record<string, any>, StackPolicyURL?: string, Tags?: any[], TemplateBody?: string | Record<string, any>, TemplateURL?: string, TimeoutInMinutes?: number }) => Promise<CreateStackResponse>
  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeactivateOrganizationsAccess CloudFormation: DeactivateOrganizationsAccess} */
  DeactivateOrganizationsAccess: () => Promise<DeactivateOrganizationsAccessResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateType.html CloudFormation: DeactivateType}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeactivateType CloudFormation: DeactivateType}
   */
  DeactivateType: (input: { Arn?: string, Type?: string, TypeName?: string }) => Promise<DeactivateTypeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html CloudFormation: DeleteStack}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeleteStack CloudFormation: DeleteStack}
   */
  DeleteStack: (input: { StackName: string, ClientRequestToken?: string, RetainResources?: any[], RoleARN?: string }) => Promise<DeleteStackResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html CloudFormation: DeregisterType}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeregisterType CloudFormation: DeregisterType}
   */
  DeregisterType: (input: { Arn?: string, Type?: string, TypeName?: string, VersionId?: string }) => Promise<DeregisterTypeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html CloudFormation: DescribeOrganizationsAccess}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeOrganizationsAccess CloudFormation: DescribeOrganizationsAccess}
   */
  DescribeOrganizationsAccess: (input: { CallAs?: string }) => Promise<DescribeOrganizationsAccessResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html CloudFormation: DescribeStackResources}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackResources CloudFormation: DescribeStackResources}
   */
  DescribeStackResources: (input: { StackName?: string, LogicalResourceId?: string, PhysicalResourceId?: string }) => Promise<DescribeStackResourcesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html CloudFormation: DescribeStacks}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStacks CloudFormation: DescribeStacks}
   */
  DescribeStacks: (input: { StackName?: string, NextToken?: string, paginate?: boolean | string }) => Promise<DescribeStacksResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html CloudFormation: ListStackResources}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListStackResources CloudFormation: ListStackResources}
   */
  ListStackResources: (input: { StackName: string, NextToken?: string, paginate?: boolean | string }) => Promise<ListStackResourcesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html CloudFormation: RegisterType}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#RegisterType CloudFormation: RegisterType}
   */
  RegisterType: (input: { ClientRequestToken?: string, ExecutionRoleArn?: string, LoggingConfig?: Record<string, any>, Type?: string, TypeName?: string }) => Promise<RegisterTypeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html CloudFormation: UpdateStack}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#UpdateStack CloudFormation: UpdateStack}
   */
  UpdateStack: (input: { StackName: string, Capabilities?: any[], ClientRequestToken?: string, DisableRollback?: boolean, NotificationARNs?: any[], Parameters?: any[], ResourceTypes?: any[], RetainExceptOnCreate?: boolean, RoleARN?: string, RollbackConfiguration?: Record<string, any>, StackPolicyBody?: string | Record<string, any>, StackPolicyURL?: string, Tags?: any[], TemplateBody?: string | Record<string, any>, TemplateURL?: string }) => Promise<UpdateStackResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html CloudFormation: UpdateTerminationProtection}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#UpdateTerminationProtection CloudFormation: UpdateTerminationProtection}
   */
  UpdateTerminationProtection: (input: { StackName: string, EnableTerminationProtection: boolean }) => Promise<UpdateTerminationProtectionResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    CloudFormation: AwsLiteCloudFormation;
  }
}

export type {
  AwsLiteCloudFormation,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  ActivateOrganizationsAccessResponse,
  ActivateTypeResponse,
  CreateStackResponse,
  DeactivateOrganizationsAccessResponse,
  DeactivateTypeResponse,
  DeleteStackResponse,
  DeregisterTypeResponse,
  DescribeOrganizationsAccessResponse,
  DescribeStackResourcesResponse,
  DescribeStacksResponse,
  ListStackResourcesResponse,
  RegisterTypeResponse,
  UpdateStackResponse,
  UpdateTerminationProtectionResponse,
  // $EXPORT_END
}
