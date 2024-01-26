# `@aws-lite/cloudformation`

> Official `aws-lite` plugin for CloudFormation

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/cloudformation
```

Optionally install types:

```sh
npm i -D @aws-lite/cloudformation-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudformation)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudformation)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `CreateStack`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`Capabilities` (array)**
  - Array of CloudFormation capabilities necessary for stack creation; can be any of: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`DisableRollback` (boolean)**
  - Set to true to disable rollback of the stack if stack creation failed
- **`EnableTerminationProtection` (boolean)**
  - Enable protection against stack deletion
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html)
- **`NotificationARNs` (array)**
  - Array of SNS topic ARNs to publish stack related events
- **`OnFailure` (string)**
  - Action to be taken if stack creation failes; can be one of: `DO_NOTHING`, `ROLLBACK`, `DELETE`
- **`Parameters` (array)**
  - Array of objects specifying stack input parameters
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html)
- **`ResourceTypes` (array)**
  - Array of CloudFormation template resource types with permissions for this create stack action
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html)
- **`RetainExceptOnCreate` (boolean)**
  - Set to true to ensure newly created resources are deleted if the operation rolls back, even if marked with a deletion policy of `Retain`
- **`RoleARN` (string)**
  - IAM role ARN CloudFormation assumes to create the stack
- **`RollbackConfiguration` (object)**
  - Rollback triggers to be monitored during creation and updating
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackConfiguration.html)
- **`StackPolicyBody` (string, object)**
  - Stack policy document; an object will be automatically serialized to JSON, or supply pre-serialized JSON
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html)
- **`StackPolicyURL` (string)**
  - Stack policy url
- **`Tags` (array)**
  - Array of tag objects to associate with the stack
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Tag.html)
- **`TemplateBody` (string, object)**
  - CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b
- **`TemplateURL` (string)**
  - S3 location of CloudFormation template; can be up to 460,800 b
- **`TimeoutInMinutes` (number)**
  - Amount of time before the stack status becomes `CREATE_FAILED`


### `DeleteStack`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`RetainResources` (array)**
  - List of logical resource IDs to retain after stack deletion
- **`RoleARN` (string)**
  - IAM role ARN to assume during deletion


### `DescribeStackResources`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html)

Properties:
- **`StackName` (string)**
  - Stack name or ID
- **`LogicalResourceId` (string)**
  - Logical name of a resource
- **`PhysicalResourceId` (string)**
  - Physical name or ID of a resource; if you do not specify `PhysicalResourceId`, you must specify `StackName`


### `DescribeStacks`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html)

Properties:
- **`StackName` (string)**
  - Stack name or ID
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListStackResources`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `UpdateStack`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`Capabilities` (array)**
  - Array of CloudFormation capabilities necessary for stack creation; can be any of: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`DisableRollback` (boolean)**
  - Set to true to disable rollback of the stack if stack creation failed
- **`NotificationARNs` (array)**
  - Array of SNS topic ARNs to publish stack related events
- **`Parameters` (array)**
  - Array of objects specifying stack input parameters
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html)
- **`ResourceTypes` (array)**
  - Array of CloudFormation template resource types with permissions for this create stack action
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html)
- **`RetainExceptOnCreate` (boolean)**
  - Set to true to ensure newly created resources are deleted if the operation rolls back, even if marked with a deletion policy of `Retain`
- **`RoleARN` (string)**
  - IAM role ARN CloudFormation assumes to create the stack
- **`RollbackConfiguration` (object)**
  - Rollback triggers to be monitored during creation and updating
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackConfiguration.html)
- **`StackPolicyBody` (string, object)**
  - Stack policy document; an object will be automatically serialized to JSON, or supply pre-serialized JSON
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html)
- **`StackPolicyURL` (string)**
  - Stack policy url
- **`Tags` (array)**
  - Array of tag objects to associate with the stack
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Tag.html)
- **`TemplateBody` (string, object)**
  - CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b
- **`TemplateURL` (string)**
  - S3 location of CloudFormation template; can be up to 460,800 b


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`ActivateOrganizationsAccess`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateOrganizationsAccess.html)
- [`ActivateType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html)
- [`BatchDescribeTypeConfigurations`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_BatchDescribeTypeConfigurations.html)
- [`CancelUpdateStack`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html)
- [`ContinueUpdateRollback`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html)
- [`CreateChangeSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html)
- [`CreateStackInstances`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html)
- [`CreateStackSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html)
- [`DeactivateOrganizationsAccess`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateOrganizationsAccess.html)
- [`DeactivateType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateType.html)
- [`DeleteChangeSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html)
- [`DeleteStackInstances`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html)
- [`DeleteStackSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html)
- [`DeregisterType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html)
- [`DescribeAccountLimits`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html)
- [`DescribeChangeSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html)
- [`DescribeChangeSetHooks`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSetHooks.html)
- [`DescribeOrganizationsAccess`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- [`DescribePublisher`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribePublisher.html)
- [`DescribeStackDriftDetectionStatus`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html)
- [`DescribeStackEvents`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html)
- [`DescribeStackInstance`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html)
- [`DescribeStackResource`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html)
- [`DescribeStackResourceDrifts`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html)
- [`DescribeStackSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html)
- [`DescribeStackSetOperation`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html)
- [`DescribeType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html)
- [`DescribeTypeRegistration`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html)
- [`DetectStackDrift`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html)
- [`DetectStackResourceDrift`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html)
- [`DetectStackSetDrift`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html)
- [`EstimateTemplateCost`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html)
- [`ExecuteChangeSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html)
- [`GetStackPolicy`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html)
- [`GetTemplate`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html)
- [`GetTemplateSummary`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html)
- [`ImportStacksToStackSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ImportStacksToStackSet.html)
- [`ListChangeSets`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html)
- [`ListExports`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html)
- [`ListImports`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html)
- [`ListStackInstanceResourceDrifts`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackInstanceResourceDrifts.html)
- [`ListStackInstances`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackInstances.html)
- [`ListStacks`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html)
- [`ListStackSetOperationResults`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html)
- [`ListStackSetOperations`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html)
- [`ListStackSets`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html)
- [`ListTypeRegistrations`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html)
- [`ListTypes`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html)
- [`ListTypeVersions`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html)
- [`PublishType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_PublishType.html)
- [`RecordHandlerProgress`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RecordHandlerProgress.html)
- [`RegisterPublisher`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html)
- [`RegisterType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html)
- [`RollbackStack`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackStack.html)
- [`SetStackPolicy`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html)
- [`SetTypeConfiguration`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html)
- [`SetTypeDefaultVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html)
- [`SignalResource`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html)
- [`StopStackSetOperation`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html)
- [`TestType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TestType.html)
- [`UpdateStackInstances`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html)
- [`UpdateStackSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html)
- [`UpdateTerminationProtection`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html)
- [`ValidateTemplate`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
