import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  ActivateOrganizationsAccessCommandOutput as ActivateOrganizationsAccessResponse,
  ActivateTypeCommandOutput as ActivateTypeResponse,
  BatchDescribeTypeConfigurationsCommandOutput as BatchDescribeTypeConfigurationsResponse,
  CancelUpdateStackCommandOutput as CancelUpdateStackResponse,
  ContinueUpdateRollbackCommandOutput as ContinueUpdateRollbackResponse,
  CreateChangeSetCommandOutput as CreateChangeSetResponse,
  CreateStackCommandOutput as CreateStackResponse,
  CreateStackInstancesCommandOutput as CreateStackInstancesResponse,
  CreateStackSetCommandOutput as CreateStackSetResponse,
  DeactivateOrganizationsAccessCommandOutput as DeactivateOrganizationsAccessResponse,
  DeleteChangeSetCommandOutput as DeleteChangeSetResponse,
  DeactivateTypeCommandOutput as DeactivateTypeResponse,
  DeleteStackCommandOutput as DeleteStackResponse,
  DeleteStackInstancesCommandOutput as DeleteStackInstancesResponse,
  DeleteStackSetCommandOutput as DeleteStackSetResponse,
  DeregisterTypeCommandOutput as DeregisterTypeResponse,
  DescribeAccountLimitsCommandOutput as DescribeAccountLimitsResponse,
  DescribeChangeSetCommandOutput as DescribeChangeSetResponse,
  DescribeChangeSetHooksCommandOutput as DescribeChangeSetHooksResponse,
  DescribeOrganizationsAccessCommandOutput as DescribeOrganizationsAccessResponse,
  DescribePublisherCommandOutput as DescribePublisherResponse,
  DescribeStackDriftDetectionStatusCommandOutput as DescribeStackDriftDetectionStatusResponse,
  DescribeStackEventsCommandOutput as DescribeStackEventsResponse,
  DescribeStackInstanceCommandOutput as DescribeStackInstanceResponse,
  DescribeStackResourceCommandOutput as DescribeStackResourceResponse,
  DescribeStackResourceDriftsCommandOutput as DescribeStackResourceDriftsResponse,
  DescribeStackResourcesCommandOutput as DescribeStackResourcesResponse,
  DescribeStacksCommandOutput as DescribeStacksResponse,
  DescribeStackSetCommandOutput as DescribeStackSetResponse,
  DescribeStackSetOperationCommandOutput as DescribeStackSetOperationResponse,
  DescribeTypeCommandOutput as DescribeTypeResponse,
  DetectStackDriftCommandOutput as DetectStackDriftResponse,
  DetectStackSetDriftCommandOutput as DetectStackSetDriftResponse,
  EstimateTemplateCostCommandOutput as EstimateTemplateCostResponse,
  GetStackPolicyCommandOutput as GetStackPolicyResponse,
  GetTemplateCommandOutput as GetTemplateResponse,
  GetTemplateSummaryCommandOutput as GetTemplateSummaryResponse,
  ExecuteChangeSetCommandOutput as ExecuteChangeSetResponse,
  ListChangeSetsCommandOutput as ListChangeSetsResponse,
  ListExportsCommandOutput as ListExportsResponse,
  ListStackInstancesCommandOutput as ListStackInstancesResponse,
  ListStackResourcesCommandOutput as ListStackResourcesResponse,
  ListStacksCommandOutput as ListStacksResponse,
  ListStackSetOperationResultsCommandOutput as ListStackSetOperationResultsResponse,
  ListStackSetOperationsCommandOutput as ListStackSetOperationsResponse,
  ListStackSetsCommandOutput as ListStackSetsResponse,
  ListTypeRegistrationsCommandOutput as ListTypeRegistrationsResponse,
  ListTypesCommandOutput as ListTypesResponse,
  ListTypeVersionsCommandOutput as ListTypeVersionsResponse,
  RegisterPublisherCommandOutput as RegisterPublisherResponse,
  RegisterTypeCommandOutput as RegisterTypeResponse,
  RollbackStackCommandOutput as RollbackStackResponse,
  SetStackPolicyCommandOutput as SetStackPolicyResponse,
  UpdateStackCommandOutput as UpdateStackResponse,
  UpdateStackInstancesCommandOutput as UpdateStackInstancesResponse,
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
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_BatchDescribeTypeConfigurations.html CloudFormation: BatchDescribeTypeConfigurations}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#BatchDescribeTypeConfigurations CloudFormation: BatchDescribeTypeConfigurations}
   */
  BatchDescribeTypeConfigurations: (input: { TypeConfigurationIdentifiers: any[] }) => Promise<BatchDescribeTypeConfigurationsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html CloudFormation: CancelUpdateStack}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#CancelUpdateStack CloudFormation: CancelUpdateStack}
   */
  CancelUpdateStack: (input: { StackName: string, ClientRequestToken?: string }) => Promise<CancelUpdateStackResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html CloudFormation: ContinueUpdateRollback}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ContinueUpdateRollback CloudFormation: ContinueUpdateRollback}
   */
  ContinueUpdateRollback: (input: { StackName: string, ClientRequestToken?: string, ResourcesToSkip?: any[], RoleARN?: string }) => Promise<ContinueUpdateRollbackResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html CloudFormation: CreateChangeSet}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#CreateChangeSet CloudFormation: CreateChangeSet}
   */
  CreateChangeSet: (input: { ChangeSetName: string, StackName: string, Capabilities?: any[], ChangeSetType?: string, ClientToken?: string, Description?: string, ImportExistingResources?: boolean, IncludeNestedStacks?: boolean, NotificationARNs?: any[], OnStackFailure?: string, Parameters?: any[], ResourceTypes?: any[], ResourcesToImport?: any[], RoleARN?: string, RollbackConfiguration?: Record<string, any>, Tags?: any[], TemplateBody?: string | Record<string, any>, TemplateURL?: string, UsePreviousTemplate?: boolean }) => Promise<CreateChangeSetResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html CloudFormation: CreateStack}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#CreateStack CloudFormation: CreateStack}
   */
  CreateStack: (input: { StackName: string, Capabilities?: any[], ClientRequestToken?: string, DisableRollback?: boolean, EnableTerminationProtection?: boolean, NotificationARNs?: any[], OnFailure?: string, Parameters?: any[], ResourceTypes?: any[], RetainExceptOnCreate?: boolean, RoleARN?: string, RollbackConfiguration?: Record<string, any>, StackPolicyBody?: string | Record<string, any>, StackPolicyURL?: string, Tags?: any[], TemplateBody?: string | Record<string, any>, TemplateURL?: string, TimeoutInMinutes?: number }) => Promise<CreateStackResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html CloudFormation: CreateStackInstances}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#CreateStackInstances CloudFormation: CreateStackInstances}
   */
  CreateStackInstances: (input: { OperationId: string, Regions: any[], StackSetName: string, Accounts?: any[], CallAs?: string, DeploymentTargets?: Record<string, any>, OperationPreferences?: Record<string, any>, ParameterOverrides?: any[] }) => Promise<CreateStackInstancesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html CloudFormation: CreateStackSet}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#CreateStackSet CloudFormation: CreateStackSet}
   */
  CreateStackSet: (input: { ClientRequestToken: string, StackSetName: string, AdministrationRoleARN?: string, AutoDeployment?: Record<string, any>, CallAs?: string, Capabilities?: any[], Description?: string, ExecutionRoleName?: string, ManagedExecution?: Record<string, any>, Parameters?: any[], PermissionModel?: string, StackId?: string, Tags?: any[], TemplateBody?: string | Record<string, any>, TemplateURL?: string }) => Promise<CreateStackSetResponse>
  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeactivateOrganizationsAccess CloudFormation: DeactivateOrganizationsAccess} */
  DeactivateOrganizationsAccess: () => Promise<DeactivateOrganizationsAccessResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html CloudFormation: DeleteChangeSet}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeleteChangeSet CloudFormation: DeleteChangeSet}
   */
  DeleteChangeSet: (input: { ChangeSetName: string, StackName?: string }) => Promise<DeleteChangeSetResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html CloudFormation: DeleteStackInstances}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeleteStackInstances CloudFormation: DeleteStackInstances}
   */
  DeleteStackInstances: (input: { OperationId: string, Regions: any[], RetainStacks: boolean, StackSetName: string, Accounts?: any[], CallAs?: string, DeploymentTargets?: Record<string, any>, OperationPreferences?: Record<string, any> }) => Promise<DeleteStackInstancesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html CloudFormation: DeleteStackSet}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeleteStackSet CloudFormation: DeleteStackSet}
   */
  DeleteStackSet: (input: { StackSetName: string, CallAs?: string }) => Promise<DeleteStackSetResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html CloudFormation: DeregisterType}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DeregisterType CloudFormation: DeregisterType}
   */
  DeregisterType: (input: { Arn?: string, Type?: string, TypeName?: string, VersionId?: string }) => Promise<DeregisterTypeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html CloudFormation: DescribeAccountLimits}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeAccountLimits CloudFormation: DescribeAccountLimits}
   */
  DescribeAccountLimits: (input: { NextToken?: string, paginate?: boolean | string }) => Promise<DescribeAccountLimitsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html CloudFormation: DescribeChangeSet}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeChangeSet CloudFormation: DescribeChangeSet}
   */
  DescribeChangeSet: (input: { ChangeSetName: string, IncludePropertyValues?: boolean, NextToken?: string, StackName?: string, paginate?: string }) => Promise<DescribeChangeSetResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSetHooks.html CloudFormation: DescribeChangeSetHooks}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeChangeSetHooks CloudFormation: DescribeChangeSetHooks}
   */
  DescribeChangeSetHooks: (input: { ChangeSetName: string, StackName?: string, NextToken?: string, LogicalResourceId?: string, paginate?: boolean | string }) => Promise<DescribeChangeSetHooksResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html CloudFormation: DescribeOrganizationsAccess}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeOrganizationsAccess CloudFormation: DescribeOrganizationsAccess}
   */
  DescribeOrganizationsAccess: (input: { CallAs?: string }) => Promise<DescribeOrganizationsAccessResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribePublisher.html CloudFormation: DescribePublisher}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribePublisher CloudFormation: DescribePublisher}
   */
  DescribePublisher: (input: { PublisherId: string }) => Promise<DescribePublisherResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html CloudFormation: DescribeStackDriftDetectionStatus}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackDriftDetectionStatus CloudFormation: DescribeStackDriftDetectionStatus}
   */
  DescribeStackDriftDetectionStatus: (input: { StackDriftDetectionId: string }) => Promise<DescribeStackDriftDetectionStatusResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html CloudFormation: DescribeStackEvents}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackEvents CloudFormation: DescribeStackEvents}
   */
  DescribeStackEvents: (input: { StackName: string, NextToken?: string, paginate?: boolean | string }) => Promise<DescribeStackEventsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html CloudFormation: DescribeStackInstance}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackInstance CloudFormation: DescribeStackInstance}
   */
  DescribeStackInstance: (input: { StackInstanceAccount: string, StackInstanceRegion: string, StackSetName: string, CallAs?: string }) => Promise<DescribeStackInstanceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html CloudFormation: DescribeStackResource}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackResource CloudFormation: DescribeStackResource}
   */
  DescribeStackResource: (input: { LogicalResourceId: string, StackName: string }) => Promise<DescribeStackResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html CloudFormation: DescribeStackResourceDrifts}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackResourceDrifts CloudFormation: DescribeStackResourceDrifts}
   */
  DescribeStackResourceDrifts: (input: { StackName: string, MaxResults?: number, NextToken?: string, StackResourceDriftStatusFilters?: any[], paginate?: boolean | string }) => Promise<DescribeStackResourceDriftsResponse>
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
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html CloudFormation: DescribeStackSet}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackSet CloudFormation: DescribeStackSet}
   */
  DescribeStackSet: (input: { StackSetName: string, CallAs?: string }) => Promise<DescribeStackSetResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html CloudFormation: DescribeStackSetOperation}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeStackSetOperation CloudFormation: DescribeStackSetOperation}
   */
  DescribeStackSetOperation: (input: { OperationId: string, StackSetName: string, CallAs?: string }) => Promise<DescribeStackSetOperationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html CloudFormation: DescribeType}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DescribeType CloudFormation: DescribeType}
   */
  DescribeType: (input: { Arn?: string, PublicVersionNumber?: string, PublisherId?: string, Type?: string, TypeName?: string, VersionId?: string }) => Promise<DescribeTypeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html CloudFormation: DetectStackDrift}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DetectStackDrift CloudFormation: DetectStackDrift}
   */
  DetectStackDrift: (input: { StackName: string, LogicalResourceIds?: any[] }) => Promise<DetectStackDriftResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html CloudFormation: DetectStackSetDrift}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#DetectStackSetDrift CloudFormation: DetectStackSetDrift}
   */
  DetectStackSetDrift: (input: { StackSetName: string, CallAs?: string, OperationId: string, OperationPreferences?: Record<string, any> }) => Promise<DetectStackSetDriftResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html CloudFormation: EstimateTemplateCost}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#EstimateTemplateCost CloudFormation: EstimateTemplateCost}
   */
  EstimateTemplateCost: (input: { Parameters?: any[], TemplateBody?: string | Record<string, any>, TemplateURL?: string }) => Promise<EstimateTemplateCostResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html CloudFormation: GetStackPolicy}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#GetStackPolicy CloudFormation: GetStackPolicy}
   */
  GetStackPolicy: (input: { StackName: string }) => Promise<GetStackPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html CloudFormation: GetTemplate}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#GetTemplate CloudFormation: GetTemplate}
   */
  GetTemplate: (input: { ChangeSetName?: string, StackName?: string, TemplateStage?: string }) => Promise<GetTemplateResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html CloudFormation: GetTemplateSummary}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#GetTemplateSummary CloudFormation: GetTemplateSummary}
   */
  GetTemplateSummary: (input: { CallAs?: string, StackName?: string, StackSetName?: string, TemplateBody?: string | Record<string, any>, TemplateSummaryConfig?: Record<string, any>, TemplateURL?: string }) => Promise<GetTemplateSummaryResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html CloudFormation: ExecuteChangeSet}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ExecuteChangeSet CloudFormation: ExecuteChangeSet}
   */
  ExecuteChangeSet: (input: { ChangeSetName: string, ClientRequestToken?: string, DisableRollback?: boolean, RetainExceptOnCreate?: boolean, StackName?: string }) => Promise<ExecuteChangeSetResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html CloudFormation: ListChangeSets}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListChangeSets CloudFormation: ListChangeSets}
   */
  ListChangeSets: (input: { StackName: string, NextToken?: string, paginate?: boolean | string }) => Promise<ListChangeSetsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html CloudFormation: ListExports}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListExports CloudFormation: ListExports}
   */
  ListExports: (input: { NextToken?: string, paginate?: boolean | string }) => Promise<ListExportsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackInstances.html CloudFormation: ListStackInstances}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListStackInstances CloudFormation: ListStackInstances}
   */
  ListStackInstances: (input: { StackSetName: string, CallAs?: string, Filters?: any[], MaxResults?: number, NextToken?: string, StackInstanceAccount?: string, StackInstanceRegion?: string }) => Promise<ListStackInstancesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html CloudFormation: ListStackResources}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListStackResources CloudFormation: ListStackResources}
   */
  ListStackResources: (input: { StackName: string, NextToken?: string, paginate?: boolean | string }) => Promise<ListStackResourcesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html CloudFormation: ListStacks}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListStacks CloudFormation: ListStacks}
   */
  ListStacks: (input: { NextToken?: string, StackStatusFilter?: any[], paginate?: boolean | string }) => Promise<ListStacksResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html CloudFormation: ListStackSetOperationResults}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListStackSetOperationResults CloudFormation: ListStackSetOperationResults}
   */
  ListStackSetOperationResults: (input: { StackSetName: string, OperationId: string, CallAs?: string, Filters?: any[], MaxResults?: number, NextToken?: string, paginate?: boolean | string }) => Promise<ListStackSetOperationResultsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html CloudFormation: ListStackSetOperations}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListStackSetOperations CloudFormation: ListStackSetOperations}
   */
  ListStackSetOperations: (input: { StackSetName: string, CallAs?: string, MaxResults?: number, NextToken?: string, paginate?: boolean | string }) => Promise<ListStackSetOperationsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html CloudFormation: ListStackSets}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListStackSets CloudFormation: ListStackSets}
   */
  ListStackSets: (input: { CallAs?: string, MaxResults?: number, NextToken?: string, Status?: string, paginate?: boolean | string }) => Promise<ListStackSetsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html CloudFormation: ListTypeRegistrations}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListTypeRegistrations CloudFormation: ListTypeRegistrations}
   */
  ListTypeRegistrations: (input: { MaxResults?: number, NextToken?: string, RegistrationStatusFilter?: string, Type?: string, TypeArn?: string, TypeName?: string, paginate?: boolean | string }) => Promise<ListTypeRegistrationsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html CloudFormation: ListTypes}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListTypes CloudFormation: ListTypes}
   */
  ListTypes: (input: { DeprecatedStatus?: string, Filters?: Record<string, any>, MaxResults?: number, NextToken?: string, ProvisioningType?: string, Type?: string, Visibility?: string, paginate?: boolean | string }) => Promise<ListTypesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html CloudFormation: ListTypeVersions}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#ListTypeVersions CloudFormation: ListTypeVersions}
   */
  ListTypeVersions: (input: { Arn?: string, DeprecatedStatus?: string, MaxResults?: number, NextToken?: string, PublisherId?: string, Type?: string, TypeName?: string }) => Promise<ListTypeVersionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html CloudFormation: RegisterPublisher}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#RegisterPublisher CloudFormation: RegisterPublisher}
   */
  RegisterPublisher: (input: { AcceptTermsAndConditions?: boolean, ConnectionArn?: string }) => Promise<RegisterPublisherResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html CloudFormation: RegisterType}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#RegisterType CloudFormation: RegisterType}
   */
  RegisterType: (input: { SchemaHandlerPackage: string, TypeName: string, ClientRequestToken?: string, ExecutionRoleArn?: string, LoggingConfig?: Record<string, any>, Type?: string }) => Promise<RegisterTypeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackStack.html CloudFormation: RollbackStack}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#RollbackStack CloudFormation: RollbackStack}
   */
  RollbackStack: (input: { StackName: string, ClientRequestToken?: string, RetainExceptOnCreate?: boolean, RoleARN?: string }) => Promise<RollbackStackResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html CloudFormation: SetStackPolicy}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#SetStackPolicy CloudFormation: SetStackPolicy}
   */
  SetStackPolicy: (input: { StackName: string, StackPolicyBody?: string | Record<string, any>, StackPolicyURL?: string }) => Promise<SetStackPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html CloudFormation: UpdateStack}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#UpdateStack CloudFormation: UpdateStack}
   */
  UpdateStack: (input: { StackName: string, Capabilities?: any[], ClientRequestToken?: string, DisableRollback?: boolean, NotificationARNs?: any[], Parameters?: any[], ResourceTypes?: any[], RetainExceptOnCreate?: boolean, RoleARN?: string, RollbackConfiguration?: Record<string, any>, StackPolicyBody?: string | Record<string, any>, StackPolicyURL?: string, Tags?: any[], TemplateBody?: string | Record<string, any>, TemplateURL?: string }) => Promise<UpdateStackResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html CloudFormation: UpdateStackInstances}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/cloudformation/readme.md#UpdateStackInstances CloudFormation: UpdateStackInstances}
   */
  UpdateStackInstances: (input: { OperationId: string, Regions: any[], StackSetName: string, Accounts?: any[], CallAs?: string, DeploymentTargets?: Record<string, any>, OperationPreferences?: Record<string, any>, ParameterOverrides?: any[] }) => Promise<UpdateStackInstancesResponse>
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
  BatchDescribeTypeConfigurationsResponse,
  CancelUpdateStackResponse,
  ContinueUpdateRollbackResponse,
  CreateChangeSetResponse,
  CreateStackResponse,
  CreateStackInstancesResponse,
  CreateStackSetResponse,
  DeactivateOrganizationsAccessResponse,
  DeleteChangeSetResponse,
  DeactivateTypeResponse,
  DeleteStackResponse,
  DeleteStackInstancesResponse,
  DeleteStackSetResponse,
  DeregisterTypeResponse,
  DescribeAccountLimitsResponse,
  DescribeChangeSetResponse,
  DescribeChangeSetHooksResponse,
  DescribeOrganizationsAccessResponse,
  DescribePublisherResponse,
  DescribeStackDriftDetectionStatusResponse,
  DescribeStackEventsResponse,
  DescribeStackInstanceResponse,
  DescribeStackResourceResponse,
  DescribeStackResourceDriftsResponse,
  DescribeStackResourcesResponse,
  DescribeStacksResponse,
  DescribeStackSetResponse,
  DescribeStackSetOperationResponse,
  DescribeTypeResponse,
  DetectStackDriftResponse,
  DetectStackSetDriftResponse,
  EstimateTemplateCostResponse,
  GetStackPolicyResponse,
  GetTemplateResponse,
  GetTemplateSummaryResponse,
  ExecuteChangeSetResponse,
  ListChangeSetsResponse,
  ListExportsResponse,
  ListStackInstancesResponse,
  ListStackResourcesResponse,
  ListStacksResponse,
  ListStackSetOperationResultsResponse,
  ListStackSetOperationsResponse,
  ListStackSetsResponse,
  ListTypeRegistrationsResponse,
  ListTypesResponse,
  ListTypeVersionsResponse,
  RegisterPublisherResponse,
  RegisterTypeResponse,
  RollbackStackResponse,
  SetStackPolicyResponse,
  UpdateStackResponse,
  UpdateStackInstancesResponse,
  UpdateTerminationProtectionResponse,
  // $EXPORT_END
}
