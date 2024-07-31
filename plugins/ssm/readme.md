# [`@aws-lite/ssm`](https://aws-lite.org/services/ssm)

> Official `aws-lite` plugin for SSM

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/ssm
```

Optionally install types:

```sh
npm i -D @aws-lite/ssm-types
```

## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/ssm)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `DeleteParameter`

[Canonical AWS API doc](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter)

Properties:
- **`Name` (string) [required]**
  - The name of the parameter


### `DeleteParameters`

[Canonical AWS API doc](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters)

Properties:
- **`Names` (array) [required]**
  - Array of parameter names to delete


### `GetParameter`

[Canonical AWS API doc](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html)

Properties:
- **`Name` (string) [required]**
  - The name of the parameter
- **`WithDecryption` (boolean)**
  - Decrypt encrypted parameter values


### `GetParameters`

[Canonical AWS API doc](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html)

Properties:
- **`Names` (array) [required]**
  - Array of parameter names to query
- **`WithDecryption` (boolean)**
  - Decrypt encrypted parameter values


### `GetParametersByPath`

[Canonical AWS API doc](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath)

Properties:
- **`Path` (string) [required]**
  - Parameter path hierarchy, beginning with `/`
- **`MaxResults` (number)**
  - Limit the maximum number of items returned
- **`NextToken` (string)**
  - Pagination token to start the next set of results
- **`ParameterFilters` (array)**
  - Array of filters to limit results
- **`Recursive` (boolean)**
  - Retrieve all parameters within a hierarchy
- **`WithDecryption` (boolean)**
  - Decrypt encrypted parameter values
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `PutParameter`

[Canonical AWS API doc](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter)

Properties:
- **`Name` (string) [required]**
  - The name of the parameter, including the complete path hierarchy
- **`Value` (string) [required]**
  - Value of the parameter; can be up to 4KB by default, or 8KB if Advanced
- **`AllowedPattern` (string)**
  - Regular expression used to validate the parameter value
- **`DataType` (string)**
  - Data type for a `String` parameter; can be one of: `text`, `aws:ec2:image`, `aws:ssm:integration`
- **`Description` (string)**
  - Description of the parameter
- **`KeyId` (string)**
  - AWS KMS ID to use to encrypt the parameter
- **`Overwrite` (boolean)**
  - Overwrite an existing parameter (defaults to `false`)
- **`Policies` (array)**
  - Array of policies to apply; supports `Expiration`, `ExpirationNotification`, `NoChangeNotification`
  - [More details (AWS)](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html)
- **`Tags` (array)**
  - Array of tags, such as `Key=OS,Value=macOS`
  - [More details (AWS)](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_Tag.html)
- **`Tier` (string)**
  - Parameter tier; can be one of: `Standard`, `Advanced`, `Intelligent-Tiering`
  - [More details (AWS)](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html#systemsmanager-PutParameter-request-Tier)
- **`Type` (string)**
  - Parameter type; can be one of: `String`, `StringList`,`SecureString`


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/aws-lite/aws-lite#authoring-aws-lite-plugins)!

- [`AddTagsToResource`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AddTagsToResource)
- [`AssociateOpsItemRelatedItem`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AssociateOpsItemRelatedItem)
- [`CancelCommand`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelCommand)
- [`CancelMaintenanceWindowExecution`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelMaintenanceWindowExecution)
- [`CreateActivation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateActivation)
- [`CreateAssociation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation)
- [`CreateAssociationBatch`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatch)
- [`CreateDocument`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument)
- [`CreateMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow)
- [`CreateOpsItem`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsItem)
- [`CreateOpsMetadata`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsMetadata)
- [`CreatePatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline)
- [`CreateResourceDataSync`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateResourceDataSync)
- [`DeleteActivation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteActivation)
- [`DeleteAssociation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteAssociation)
- [`DeleteDocument`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteDocument)
- [`DeleteInventory`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteInventory)
- [`DeleteMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteMaintenanceWindow)
- [`DeleteOpsMetadata`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteOpsMetadata)
- [`DeletePatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeletePatchBaseline)
- [`DeleteResourceDataSync`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourceDataSync)
- [`DeleteResourcePolicy`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourcePolicy)
- [`DeregisterManagedInstance`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterManagedInstance)
- [`DeregisterPatchBaselineForPatchGroup`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterPatchBaselineForPatchGroup)
- [`DeregisterTargetFromMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTargetFromMaintenanceWindow)
- [`DeregisterTaskFromMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTaskFromMaintenanceWindow)
- [`DescribeActivations`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeActivations)
- [`DescribeAssociation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociation)
- [`DescribeAssociationExecutions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutions)
- [`DescribeAssociationExecutionTargets`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutionTargets)
- [`DescribeAutomationExecutions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationExecutions)
- [`DescribeAutomationStepExecutions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationStepExecutions)
- [`DescribeAvailablePatches`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAvailablePatches)
- [`DescribeDocument`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocument)
- [`DescribeDocumentPermission`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocumentPermission)
- [`DescribeEffectiveInstanceAssociations`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectiveInstanceAssociations)
- [`DescribeEffectivePatchesForPatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectivePatchesForPatchBaseline)
- [`DescribeInstanceAssociationsStatus`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceAssociationsStatus)
- [`DescribeInstanceInformation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceInformation)
- [`DescribeInstancePatches`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatches)
- [`DescribeInstancePatchStates`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStates)
- [`DescribeInstancePatchStatesForPatchGroup`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStatesForPatchGroup)
- [`DescribeInventoryDeletions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInventoryDeletions)
- [`DescribeMaintenanceWindowExecutions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutions)
- [`DescribeMaintenanceWindowExecutionTaskInvocations`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTaskInvocations)
- [`DescribeMaintenanceWindowExecutionTasks`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTasks)
- [`DescribeMaintenanceWindows`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindows)
- [`DescribeMaintenanceWindowSchedule`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowSchedule)
- [`DescribeMaintenanceWindowsForTarget`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowsForTarget)
- [`DescribeMaintenanceWindowTargets`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTargets)
- [`DescribeMaintenanceWindowTasks`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTasks)
- [`DescribeOpsItems`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeOpsItems)
- [`DescribeParameters`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters)
- [`DescribePatchBaselines`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchBaselines)
- [`DescribePatchGroups`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroups)
- [`DescribePatchGroupState`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroupState)
- [`DescribePatchProperties`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties)
- [`DescribeSessions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeSessions)
- [`DisassociateOpsItemRelatedItem`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DisassociateOpsItemRelatedItem)
- [`GetAutomationExecution`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetAutomationExecution)
- [`GetCalendarState`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCalendarState)
- [`GetCommandInvocation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation)
- [`GetConnectionStatus`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionStatus)
- [`GetDefaultPatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDefaultPatchBaseline)
- [`GetDeployablePatchSnapshotForInstance`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDeployablePatchSnapshotForInstance)
- [`GetDocument`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDocument)
- [`GetInventory`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventory)
- [`GetInventorySchema`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventorySchema)
- [`GetMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindow)
- [`GetMaintenanceWindowExecution`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecution)
- [`GetMaintenanceWindowExecutionTask`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTask)
- [`GetMaintenanceWindowExecutionTaskInvocation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTaskInvocation)
- [`GetMaintenanceWindowTask`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowTask)
- [`GetOpsItem`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsItem)
- [`GetOpsMetadata`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsMetadata)
- [`GetOpsSummary`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsSummary)
- [`GetParameterHistory`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameterHistory)
- [`GetPatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaseline)
- [`GetPatchBaselineForPatchGroup`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaselineForPatchGroup)
- [`GetResourcePolicies`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetResourcePolicies)
- [`GetServiceSetting`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetServiceSetting)
- [`LabelParameterVersion`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_LabelParameterVersion)
- [`ListAssociations`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociations)
- [`ListAssociationVersions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociationVersions)
- [`ListCommandInvocations`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations)
- [`ListCommands`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands)
- [`ListComplianceItems`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceItems)
- [`ListComplianceSummaries`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceSummaries)
- [`ListDocumentMetadataHistory`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentMetadataHistory)
- [`ListDocuments`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments)
- [`ListDocumentVersions`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentVersions)
- [`ListInventoryEntries`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListInventoryEntries)
- [`ListOpsItemEvents`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemEvents)
- [`ListOpsItemRelatedItems`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemRelatedItems)
- [`ListOpsMetadata`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsMetadata)
- [`ListResourceComplianceSummaries`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceComplianceSummaries)
- [`ListResourceDataSync`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceDataSync)
- [`ListTagsForResource`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListTagsForResource)
- [`ModifyDocumentPermission`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ModifyDocumentPermission)
- [`PutComplianceItems`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutComplianceItems)
- [`PutInventory`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutInventory)
- [`PutResourcePolicy`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutResourcePolicy)
- [`RegisterDefaultPatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterDefaultPatchBaseline)
- [`RegisterPatchBaselineForPatchGroup`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterPatchBaselineForPatchGroup)
- [`RegisterTargetWithMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow)
- [`RegisterTaskWithMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow)
- [`RemoveTagsFromResource`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RemoveTagsFromResource)
- [`ResetServiceSetting`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResetServiceSetting)
- [`ResumeSession`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResumeSession)
- [`SendAutomationSignal`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendAutomationSignal)
- [`SendCommand`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand)
- [`StartAssociationsOnce`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAssociationsOnce)
- [`StartAutomationExecution`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAutomationExecution)
- [`StartChangeRequestExecution`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartChangeRequestExecution)
- [`StartSession`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartSession)
- [`StopAutomationExecution`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StopAutomationExecution)
- [`TerminateSession`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_TerminateSession)
- [`UnlabelParameterVersion`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UnlabelParameterVersion)
- [`UpdateAssociation`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation)
- [`UpdateAssociationStatus`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociationStatus)
- [`UpdateDocument`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocument)
- [`UpdateDocumentDefaultVersion`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentDefaultVersion)
- [`UpdateDocumentMetadata`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentMetadata)
- [`UpdateMaintenanceWindow`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindow)
- [`UpdateMaintenanceWindowTarget`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTarget)
- [`UpdateMaintenanceWindowTask`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTask)
- [`UpdateManagedInstanceRole`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateManagedInstanceRole)
- [`UpdateOpsItem`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsItem)
- [`UpdateOpsMetadata`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsMetadata)
- [`UpdatePatchBaseline`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdatePatchBaseline)
- [`UpdateResourceDataSync`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateResourceDataSync)
- [`UpdateServiceSetting`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateServiceSetting)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
