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
### `ActivateOrganizationsAccess`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateOrganizationsAccess.html)

Properties:



### `ActivateType`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html)

Properties:
- **`AutoUpdate` (boolean)**
  - Set to false to disable auto updates when a minor version is published
- **`ExecutionRoleArn` (string)**
  - ARN of the IAM execution role used to activate the extension
- **`LoggingConfig` (object)**
  - Logging configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_LoggingConfig.html)
- **`MajorVersion` (number)**
  - Specify major version of the extension to be activated; default is the latest version
- **`PublicTypeArn` (string)**
  - ARN of the public extension; you must provide either `PublicTypeArn` or all of: `TypeName`, `Type`, `PublisherId`
- **`PublisherId` (string)**
  - ID of the extension publisher
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`
- **`TypeName` (string)**
  - Name of the extension with length between 10 and 204 (inclusive)
- **`TypeNameAlias` (string)**
  - Optional alias for the public extension; must be unique within the account and region
- **`VersionBump` (string)**
  - Manually update a previously-activated type to a new major or minor version if available; can be one of: `MAJOR`, `MINOR`


### `BatchDescribeTypeConfigurations`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_BatchDescribeTypeConfigurations.html)

Properties:
- **`TypeConfigurationIdentifiers` (array) [required]**
  - Array of type configuration identifiers
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TypeConfigurationIdentifier.html)


### `CancelUpdateStack`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`


### `ContinueUpdateRollback`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`ResourcesToSkip` (array)**
  - Array of logical IDs of resources to skip
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html#API_ContinueUpdateRollback_RequestParameters)
- **`RoleARN` (string)**
  - IAM role ARN CloudFormation assumes to create the stack


### `CreateChangeSet`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html)

Properties:
- **`ChangeSetName` (string) [required]**
  - User created ID for the change set
- **`StackName` (string) [required]**
  - Stack name or ID
- **`Capabilities` (array)**
  - Array of CloudFormation capabilities necessary for stack creation; can be any of: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`
- **`ChangeSetType` (string)**
  - Type of the change set; can be one of: `CREATE`, `UPDATE`, `IMPORT`
- **`ClientToken` (string)**
  - Unique identifier for this request; prevents repeats of the same request
- **`Description` (string)**
  - Description
- **`ImportExistingResources` (boolean)**
  - Set to true to indicate that an existing resource will be imported
- **`IncludeNestedStacks` (boolean)**
  - Set to true to include nested stacks in the specified template
- **`NotificationARNs` (array)**
  - Array of SNS topic ARNs to publish stack related events
- **`OnStackFailure` (string)**
  - Specify an action to take on failure; can be one of: `DO_NOTHING`, `ROLLBACK`, `DELETE`
- **`Parameters` (array)**
  - Array of objects specifying stack input parameters
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html)
- **`ResourceTypes` (array)**
  - Array of CloudFormation template resource types with permissions for this action
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html)
- **`ResourcesToImport` (array)**
  - Array of resources to import
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ResourceToImport.html)
- **`RoleARN` (string)**
  - IAM role ARN CloudFormation assumes to create the stack
- **`RollbackConfiguration` (object)**
  - Rollback triggers to be monitored during creation and updating
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackConfiguration.html)
- **`Tags` (array)**
  - Array of tag objects to associate with the stack
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Tag.html)
- **`TemplateBody` (string, object)**
  - CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b
- **`TemplateURL` (string)**
  - S3 location of CloudFormation template; can be up to 460,800 b
- **`UsePreviousTemplate` (boolean)**
  - Set to true to reuse the template associated with the stack


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
  - Array of CloudFormation template resource types with permissions for this action
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


### `CreateStackInstances`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html)

Properties:
- **`OperationId` (string) [required]**
  - Unique identifier for this stack set operation; prevents repeats of the same request
- **`Regions` (array) [required]**
  - Array of regions where the stack instances will be created
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`Accounts` (array)**
  - Names of the AWS accounts that will be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`DeploymentTargets` (object)**
  - Organizations accounts to be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html)
- **`OperationPreferences` (object)**
  - Preferences for how the stack set operation will be performed
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StackSetOperationPreferences.html)
- **`ParameterOverrides` (array)**
  - Array of `Parameter` objects defining stack set parameters to override in the stack instances
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html)


### `CreateStackSet`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html)

Properties:
- **`ClientRequestToken` (string) [required]**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`AdministrationRoleARN` (string)**
  - ARN of the IAM role to use
- **`AutoDeployment` (object)**
  - Specify if stack sets automatically deploy to organization accounts that are added to the target organization
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ManagedExecution.html)
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`Capabilities` (array)**
  - Array of CloudFormation capabilities necessary for stack creation; can be any of: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`
- **`Description` (string)**
  - Description
- **`ExecutionRoleName` (string)**
  - Name of the IAM execution role used to create the stack set; defaults to `AWSCloudFormationStackSetExecutionRole`
- **`ManagedExecution` (object)**
  - Specify if the stack sets operate concurrently when possible
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ManagedExecution.html)
- **`Parameters` (array)**
  - Array of objects specifying stack input parameters
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html)
- **`PermissionModel` (string)**
  - Describe how IAM roles required for operations are created; can be one of: `SELF_MANAGED` (default), `SERVICE_MANAGED`
- **`StackId` (string)**
  - ARN of a stack to be imported
- **`Tags` (array)**
  - Array of tag objects to associate with the stack
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Tag.html)
- **`TemplateBody` (string, object)**
  - CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b
- **`TemplateURL` (string)**
  - S3 location of CloudFormation template; can be up to 460,800 b


### `DeactivateOrganizationsAccess`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateOrganizationsAccess.html)

Properties:



### `DeleteChangeSet`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html)

Properties:
- **`ChangeSetName` (string) [required]**
  - User created ID for the change set
- **`StackName` (string)**
  - Stack name; must be provided if `ChangeSetName` is not an ARN


### `DeactivateType`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateType.html)

Properties:
- **`Arn` (string)**
  - ARN of the extension
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`
- **`TypeName` (string)**
  - Name of the extension with length between 10 and 204 (inclusive)


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


### `DeleteStackInstances`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html)

Properties:
- **`OperationId` (string) [required]**
  - Unique identifier for this stack set operation; prevents repeats of the same request
- **`Regions` (array) [required]**
  - Array of regions where the stack instances will be created
- **`RetainStacks` (boolean) [required]**
  - Specify if stacks will be retained after the instances are removed from the stack set
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`Accounts` (array)**
  - Names of the AWS accounts that will be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`DeploymentTargets` (object)**
  - Organizations accounts to be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html)
- **`OperationPreferences` (object)**
  - Preferences for how the stack set operation will be performed
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StackSetOperationPreferences.html)


### `DeleteStackSet`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html)

Properties:
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)


### `DeregisterType`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html)

Properties:
- **`Arn` (string)**
  - Amazon resource name
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`
- **`TypeName` (string)**
  - Name of the extension with length between 10 and 204 (inclusive)
- **`VersionId` (string)**
  - ID of a specific extension version; found at the end of the ARN of the extension version


### `DescribeAccountLimits`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html)

Properties:
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `DescribeOrganizationsAccess`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)

Properties:
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)


### `DescribePublisher`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribePublisher.html)

Properties:
- **`PublisherId` (string) [required]**
  - ID of the extension publisher


### `DescribeStackEvents`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `DescribeStackInstance`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html)

Properties:
- **`StackInstanceAccount` (string) [required]**
  - ID of an AWS account associated with the stack instance
- **`StackInstanceRegion` (string) [required]**
  - Region associated with the stack instance
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)


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
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `DescribeStackSet`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html)

Properties:
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)


### `DescribeStackSetOperation`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html)

Properties:
- **`OperationId` (string) [required]**
  - Unique identifier for this stack set operation; prevents repeats of the same request
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)


### `DescribeType`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html)

Properties:
- **`Arn` (string)**
  - Amazon resource name
- **`PublicVersionNumber` (string)**
  - Version number of the public third-party extension
- **`PublisherId` (string)**
  - ID of the extension publisher
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`
- **`TypeName` (string)**
  - Name of the extension with length between 10 and 204 (inclusive)
- **`VersionId` (string)**
  - ID of a specific extension version; found at the end of the ARN of the extension version


### `DetectStackSetDrift`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html)

Properties:
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`OperationId` (string) [required]**
  - Unique identifier for this stack set operation; prevents repeats of the same request
- **`OperationPreferences` (object)**
  - Preferences for how the stack set operation will be performed
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StackSetOperationPreferences.html)


### `EstimateTemplateCost`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html)

Properties:
- **`Parameters` (array)**
  - Array of objects specifying stack input parameters
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html)
- **`TemplateBody` (string, object)**
  - CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b
- **`TemplateURL` (string)**
  - S3 location of CloudFormation template; can be up to 460,800 b


### `GetStackPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID


### `GetTemplate`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html)

Properties:
- **`ChangeSetName` (string)**
  - User created ID for the change set
- **`StackName` (string)**
  - Stack name or ID
- **`TemplateStage` (string)**
  - Template stage; can be one of: `Original`, `Processed`


### `GetTemplateSummary`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html)

Properties:
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`StackName` (string)**
  - Stack name or ID
- **`StackSetName` (string)**
  - Name or ID of a stack set
- **`TemplateBody` (string, object)**
  - CloudFormation template object (which will be automatically serialized to JSON for you), or pre-serialized JSON or YAML; can be up to 51,200 b
- **`TemplateSummaryConfig` (object)**
  - Specify extra options
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TemplateSummaryConfig.html)
- **`TemplateURL` (string)**
  - S3 location of CloudFormation template; can be up to 460,800 b


### `ExecuteChangeSet`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html)

Properties:
- **`ChangeSetName` (string) [required]**
  - User created ID for the change set
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`DisableRollback` (boolean)**
  - Set to true to disable rollback of the stack if stack creation failed
- **`RetainExceptOnCreate` (boolean)**
  - Set to true to ensure newly created resources are deleted if the operation rolls back, even if marked with a deletion policy of `Retain`
- **`StackName` (string)**
  - Stack name or ID


### `ListChangeSets`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListExports`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html)

Properties:
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListStackInstances`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackInstances.html)

Properties:
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`Filters` (array)**
  - Array of `StackInstanceFilter` objects to specify filters for the results
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StackInstanceFilter.html)
- **`MaxResults` (number)**
  - Maximum number of results to be returned in a response
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`StackInstanceAccount` (string)**
  - ID of an AWS account associated with the stack instance
- **`StackInstanceRegion` (string)**
  - Region associated with the stack instance


### `ListStackResources`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListStacks`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html)

Properties:
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`StackStatusFilter` (array)**
  - Filter results by status
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html#API_ListStacks_RequestParameters)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListStackSetOperationResults`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html)

Properties:
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`OperationId` (string) [required]**
  - ID of the stack set operation
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`Filters` (array)**
  - Array of filter objects
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_OperationResultFilter.html)
- **`MaxResults` (number)**
  - Maximum number of results to be returned in a response
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListStackSetOperations`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html)

Properties:
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`MaxResults` (number)**
  - Maximum number of results to be returned in a response
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListStackSets`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html)

Properties:
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`MaxResults` (number)**
  - Maximum number of results to be returned in a response
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`Status` (string)**
  - Filter results by status; can be one of: `ACTIVE`, `DELETED`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListTypeRegistrations`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html)

Properties:
- **`MaxResults` (number)**
  - Maximum number of results to be returned in a response
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`RegistrationStatusFilter` (string)**
  - Filter results by status; can be one of: `COMPLETE`, `IN_PROGRESS` (default), `FAILED`
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`
- **`TypeArn` (string)**
  - ARN of the extension
- **`TypeName` (string)**
  - Name of the extension with length between 10 and 204 (inclusive)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListTypes`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html)

Properties:
- **`DeprecatedStatus` (string)**
  - Filter results by deprecated status; can be one of: `LIVE`, `DEPRECATED`
- **`Filters` (object)**
  - Filter configurations
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TypeFilters.html)
- **`MaxResults` (number)**
  - Maximum number of results to be returned in a response
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`ProvisioningType` (string)**
  - Filter results by provisioning type; can be one of: `FULLY_MUTABLE` (default), `IMMUTABLE`, `NON_PROVISIONABLE`
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`
- **`Visibility` (string)**
  - Filter results by visibility; can be one of: `PRIVATE` (default), `PUBLIC`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListTypeVersions`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html)

Properties:
- **`Arn` (string)**
  - Amazon resource name
- **`DeprecatedStatus` (string)**
  - Filter results by deprecated status; can be one of: `LIVE`, `DEPRECATED`
- **`MaxResults` (number)**
  - Maximum number of results to be returned in a response
- **`NextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`PublisherId` (string)**
  - ID of the extension publisher
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`
- **`TypeName` (string)**
  - Name of the extension with length between 10 and 204 (inclusive)


### `RegisterPublisher`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html)

Properties:
- **`AcceptTermsAndConditions` (boolean)**
  - Set to true to agree to Amazons terms and conditions
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html#API_RegisterPublisher_RequestParameters)
- **`ConnectionArn` (string)**
  - ARN to a Bitbucket or Github account if they are used to verify identity


### `RegisterType`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html)

Properties:
- **`SchemaHandlerPackage` (string) [required]**
  - A URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register
- **`TypeName` (string) [required]**
  - Name of the extension with length between 10 and 204 (inclusive)
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`ExecutionRoleArn` (string)**
  - ARN of the IAM execution role used to activate the extension
- **`LoggingConfig` (object)**
  - Logging configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_LoggingConfig.html)
- **`Type` (string)**
  - Extension type; can be one of: `RESOURCE`, `MODULE`, `HOOK`


### `RollbackStack`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackStack.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`ClientRequestToken` (string)**
  - Unique identifier for this request; from 1 - 128b matching `[a-zA-Z0-9][-a-zA-Z0-9]*`
- **`RetainExceptOnCreate` (boolean)**
  - Set to true to ensure newly created resources are deleted if the operation rolls back, even if marked with a deletion policy of `Retain`
- **`RoleARN` (string)**
  - IAM role ARN CloudFormation assumes to create the stack


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
  - Array of CloudFormation template resource types with permissions for this action
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


### `UpdateStackInstances`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html)

Properties:
- **`OperationId` (string) [required]**
  - Unique identifier for this stack set operation; prevents repeats of the same request
- **`Regions` (array) [required]**
  - Array of regions where the stack instances will be created
- **`StackSetName` (string) [required]**
  - Name or ID of a stack set
- **`Accounts` (array)**
  - Names of the AWS accounts that will be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both
- **`CallAs` (string)**
  - Specify if you are acting as an account admin in the organizations management account or as a delegated admin in a member account; can be one of: `SELF` (default), `DELEGATED_ADMIN`
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeOrganizationsAccess.html)
- **`DeploymentTargets` (object)**
  - Organizations accounts to be affiliated with the stack instances; can specify `Accounts` or `DeploymentTargets` but not both
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html)
- **`OperationPreferences` (object)**
  - Preferences for how the stack set operation will be performed
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StackSetOperationPreferences.html)
- **`ParameterOverrides` (array)**
  - Array of `Parameter` objects defining stack set parameters to override in the stack instances
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html)


### `UpdateTerminationProtection`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html)

Properties:
- **`StackName` (string) [required]**
  - Stack name or ID
- **`EnableTerminationProtection` (boolean) [required]**
  - Enable termination protection on the specified stack


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/aws-lite/aws-lite#authoring-aws-lite-plugins)!

- [`DescribeChangeSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html)
- [`DescribeChangeSetHooks`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSetHooks.html)
- [`DescribeStackDriftDetectionStatus`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html)
- [`DescribeStackResource`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html)
- [`DescribeStackResourceDrifts`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html)
- [`DescribeTypeRegistration`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html)
- [`DetectStackDrift`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html)
- [`DetectStackResourceDrift`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html)
- [`ImportStacksToStackSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ImportStacksToStackSet.html)
- [`ListImports`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html)
- [`ListStackInstanceResourceDrifts`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackInstanceResourceDrifts.html)
- [`PublishType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_PublishType.html)
- [`RecordHandlerProgress`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RecordHandlerProgress.html)
- [`SetStackPolicy`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html)
- [`SetTypeConfiguration`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html)
- [`SetTypeDefaultVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html)
- [`SignalResource`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html)
- [`StopStackSetOperation`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html)
- [`TestType`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TestType.html)
- [`UpdateStackSet`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html)
- [`ValidateTemplate`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
