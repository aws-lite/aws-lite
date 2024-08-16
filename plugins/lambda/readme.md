# [`@aws-lite/lambda`](https://aws-lite.org/services/lambda)

> Official `aws-lite` plugin for Lambda

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/lambda
```

Optionally install types:

```sh
npm i -D @aws-lite/lambda-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/lambda)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `AddLayerVersionPermission`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html)

Properties:
- **`LayerName` (string) [required]**
  - Name or ARN of the layer
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it
- **`VersionNumber` (number) [required]**
  - The version number of the layer
- **`Action` (string) [required]**
  - The API action that grants access to the layer, for example `lambda:GetLayerVersion`
- **`OrganizationId` (string)**
  - When `Principal` is set to `*`, permission will be granted to all accounts in the specified organization
- **`Principal` (string)**
  - Account ID being granted permissions. Use `*` along with the `OrganizationId` to grant permissions to all accounts in the specified organization
- **`StatementId` (string) [required]**
  - ID to distinguish the policy from other policies on the same layer version


### `AddPermission`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function
- **`Action` (string) [required]**
  - Action that the principal can use on the function; for example, `lambda:InvokeFunction`
- **`EventSourceToken` (string)**
  - A token that Alexa Smart Home requires from the invoker
- **`FunctionUrlAuthType` (string)**
  - The type of authentication that your function URL uses. Set to AWS_IAM if you want to restrict access to authenticated users only. Set to NONE if you want to bypass IAM authentication to create a public endpoint
- **`Principal` (string) [required]**
  - The AWS service or AWS account that invokes the function
- **`PrincipalOrgID` (string)**
  - The identifier for your organization in AWS Organizations
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it
- **`SourceAccount` (string)**
  - ID of the AWS account that owns the resource
- **`SourceArn` (string)**
  - ARN of the AWS resource that invokes the function, such as an Amazon S3 bucket
- **`StatementId` (string) [required]**
  - A statement identifier that differentiates the statement from others in the same policy


### `CreateAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Description` (string)**
  - Description of the function
- **`FunctionVersion` (string) [required]**
  - Version of the aliased function
- **`Name` (string) [required]**
  - Name of the alias
- **`RoutingConfig` (object)**
  - Configure function version weights
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing)


### `CreateCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html)

Properties:
- **`AllowedPublishers` (object) [required]**
  - Signing profiles for this code signing configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/api/API_AllowedPublishers.html)
- **`CodeSigningPolicies` (object)**
  - Define actions to take if validation checks fail
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/api/API_CodeSigningPolicies.html)
- **`Description` (string)**
  - Description of the function


### `CreateEventSourceMapping`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`AmazonManagedKafkaEventSourceConfig` (object)**
  - Configuration settings for an Amazon Managed Streaming for Apache Kafka event source
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-AmazonManagedKafkaEventSourceConfig)
- **`BatchSize` (number)**
  - Maximum number of records from 1 to 10000 in each batch that Lambda pulls from the stream or queue
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-BatchSize)
- **`BisectBatchOnFunctionError` (boolean)**
  - If the function returns an error, divide the batch and try again (only for Kinesis and DynamoDB streams)
- **`DestinationConfig` (object)**
  - Specify the destination of an event after being processed by Lambda
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-DestinationConfig)
- **`DocumentDBEventSourceConfig` (object)**
  - Configuration for a `DocumentDB` event source
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-DocumentDBEventSourceConfig)
- **`Enabled` (boolean)**
  - Set to `false` to disable event source upon creation
- **`EventSourceArn` (string)**
  - ARN of the event source
- **`FilterCriteria` (object)**
  - Define how incoming events will be filtered
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-FilterCriteria)
- **`FunctionResponseTypes` (array)**
  - A list of at most 1 string defining the current response type enum applied to the event source mapping; For Kinesis, DynamoDB Streams, and Amazon SQS
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-FunctionResponseTypes)
- **`MaximumBatchingWindowInSeconds` (number)**
  - Maximum time (in seconds) from 0 to 300 that Lambda may spend gathering records before invoking the function
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-MaximumBatchingWindowInSeconds)
- **`MaximumRecordAgeInSeconds` (number)**
  - Maximum age between -1 (infinite, default) to 604,800 of an event before it will be discarded; only for `Kinesis` and `DynamoDB` streams
- **`MaximumRetryAttempts` (number)**
  - Maximum number of tries between -1 (infinite, default) to 10,000 before a record is discarded; `Kinesis` and `DynamoDB` only 
- **`ParallelizationFactor` (number)**
  - Number of batches between 1 to 10 that can be processed from each shard concurrently
- **`Queues` (array)**
  - Array of exactly 1 string specifying the name of the `Amazon MQ` broker destination queue to consume
- **`ScalingConfig` (object)**
  - Configure scaling for the event source; Amazon SQS only
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-ScalingConfig)
- **`SelfManagedEventSource` (object)**
  - A self managed `Apache Kafka` cluster to receive records from
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-SelfManagedEventSource)
- **`SelfManagedKafkaEventSourceConfig` (object)**
  - Configure a self managed `Apache Kafka` event source
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-SelfManagedEventSource)
- **`SourceAccessConfigurations` (array)**
  - Array of at most 22 `SourceAccessConfiguration` objects to specifying authentication protocols or VPC components required to secure the event source
- **`StartingPosition` (string)**
  - Position in a stream to begin reading, valid entries are `TRIM_HORIZON` (all available messages), `LATEST` (from now or after) or `AT_TIMESTAMP` (specify timestamp)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-StartingPosition)
- **`StartingPositionTimestamp` (object)**
  - The `timestamp` in `Unix time seconds` used when `StartingPosition` is set to `AT_TIMESTAMP`; cannot be in the future
- **`Topics` (array)**
  - Array of exactly 1 string specifying the name of the `Kafka` topic
- **`TumblingWindowInSeconds` (number)**
  - Time (in seconds) from 0 to 900 specifying the duration of a processing window for `DynamoDB` and `Kinesis` event stream sources


### `CreateFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html)

Properties:
- **`Code` (object) [required]**
  - Code payload to be run in Lambda; object can contain: `ImageUri` (ECR image), `S3Bucket` + `S3Key` + `S3ObjectVersion` (S3 bucket in the same region, key, and optional version), or `ZipFile` (base64-encoded zip)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_FunctionCode.html)
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Role` (string) [required]**
  - ARN of the function's execution role
- **`Architectures` (array)**
  - System architecture, array can contain either `x86_64` (default) or `arm64`
- **`CodeSigningConfigArn` (string)**
  - ARN of a code-signing configuration used to enable code signing for this function
- **`DeadLetterConfig` (object)**
  - Dead-letter queue configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_DeadLetterConfig.html)
- **`Description` (string)**
  - Description of the function
- **`Environment` (object)**
  - Environment variable configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_Environment.html)
- **`EphemeralStorage` (object)**
  - Size of the function `/tmp` directory (in MB), from 512 (default) to 10240
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_EphemeralStorage.html)
- **`FileSystemConfigs` (array)**
  - EFS file system connection settings
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_FileSystemConfig.html)
- **`Handler` (string)**
  - The name of the handler file and method method within your code that Lambda calls to run your function (e.g. `index.handler`)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html)
- **`ImageConfig` (object)**
  - Container image configuration (overrides Docker file)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_ImageConfig.html)
- **`KMSKeyArn` (string)**
  - ARN of the Key Management Service (KMS) customer managed key used to encrypt your function environment variables
- **`Layers` (array)**
  - List of function layer ARNs (including version) to add to the function execution environment
- **`MemorySize` (number)**
  - Amount of memory available (in MB) at runtime from 128 to 10240; increasing memory also increases CPU allocation
- **`PackageType` (string)**
  - Deployment package type, either `Image` (container image) or `Zip` (zip archive)
- **`Publish` (boolean)**
  - Set to `true` to publish the first version of the function during creation
- **`Runtime` (string)**
  - Runtime identifier
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- **`SnapStart` (object)**
  - SnapStart settings
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_SnapStart.html)
- **`Tags` (array)**
  - List of tags to apply to the function
- **`Timeout` (number)**
  - Time (in seconds) a function is allowed to run before being stopped, from 3 (default) to 900
- **`TracingConfig` (object)**
  - Sample and trace a subset of incoming requests with X-Ray
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_TracingConfig.html)
- **`VpcConfig` (object)**
  - VPC networking configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_VpcConfig.html)


### `CreateFunctionUrlConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html)

Properties:
- **`AuthType` (string) [required]**
  - Type of authentication that the function URL will use, either `AWS_IAM` or `NONE`
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Cors` (object)**
  - Cross-origin resource sharing settings
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html#lambda-CreateFunctionUrlConfig-request-Cors)
- **`InvokeMode` (string)**
  - Specify how the function will be invoked, either `BUFFERED` (default, uses the `Invoke` API operation) or `RESPONSE_STREAM` (streams results as they become available, uses the `InvokeWithResponseStream` API operation)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html#lambda-CreateFunctionUrlConfig-request-InvokeMode)
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `DeleteAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Name` (string) [required]**
  - Name of the alias


### `DeleteCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html)

Properties:
- **`CodeSigningConfigArn` (string) [required]**
  - ARN of the code signing configuration


### `DeleteEventSourceMapping`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html)

Properties:
- **`UUID` (string) [required]**
  - UUID of the event source mapping


### `DeleteFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `DeleteFunctionCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias


### `DeleteFunctionConcurrency`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias


### `DeleteFunctionEventInvokeConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `DeleteFunctionUrlConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionUrlConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `DeleteLayerVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html)

Properties:
- **`LayerName` (string) [required]**
  - Name or ARN of the layer
- **`VersionNumber` (number) [required]**
  - The version number of the layer


### `DeleteProvisionedConcurrencyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string) [required]**
  - Specify a version or alias to invoke a published version of the function


### `GetAccountSettings`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html)

Properties:



### `GetAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Name` (string) [required]**
  - Name of the function alias


### `GetCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html)

Properties:
- **`CodeSigningConfigArn` (string) [required]**
  - ARN of the code signing configuration


### `GetEventSourceMapping`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html)

Properties:
- **`UUID` (string) [required]**
  - ARN of the event source mapping


### `GetFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `GetFunctionCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias


### `GetFunctionConcurrency`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias


### `GetFunctionConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `GetFunctionEventInvokeConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `GetFunctionUrlConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionUrlConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `GetLayerVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html)

Properties:
- **`LayerName` (string) [required]**
  - Name or ARN of the layer
- **`VersionNumber` (number) [required]**
  - The version number of the layer


### `GetLayerVersionByArn`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionByArn.html)

Properties:
- **`Arn` (string) [required]**
  - The ARN of the layer version


### `GetLayerVersionPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html)

Properties:
- **`LayerName` (string) [required]**
  - Name or ARN of the layer
- **`VersionNumber` (number) [required]**
  - The version number of the layer


### `GetPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `GetProvisionedConcurrencyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string) [required]**
  - The version number or alias name


### `GetRuntimeManagementConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_GetRuntimeManagementConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `Invoke`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`InvocationType` (string)**
  - Set invocation type to one of: `RequestResponse` (default, synchronous), `Event` (asynchronous), `DryRun` (validate invoke request only)
- **`Payload` (array, object) [required]**
  - Event payload to invoke function with
- **`LogType` (string)**
  - Set to `Tail` to include the execution log in the `X-Amz-Log-Result` response header of synchronously invoked functions
- **`ClientContext` (string)**
  - Up to 3,583 bytes of base64-encoded data to pass to the function in the context object
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `ListAliases`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`FunctionVersion` (string)**
  - Version of the aliased function
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListCodeSigningConfigs`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html)

Properties:
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListEventSourceMappings`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html)

Properties:
- **`EventSourceArn` (string)**
  - ARN of the event source
- **`FunctionName` (string)**
  - The name of the Lambda function, version, or alias
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFunctionEventInvokeConfigs`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFunctions`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html)

Properties:
- **`FunctionVersion` (string)**
  - Set to `ALL` to include entries for all published versions
- **`Marker` (string)**
  - Pagination token
- **`MasterRegion` (string)**
  - Display `LambdaEdge` functions replicated from a master function in a specified region
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html#API_ListFunctions_RequestSyntax)
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFunctionsByCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html)

Properties:
- **`CodeSigningConfigArn` (string) [required]**
  - ARN of the code signing configuration
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFunctionUrlConfigs`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionUrlConfigs.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListLayers`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html)

Properties:
- **`CompatibleArchitecture` (string)**
  - Set instruction set architecture to one of: `x86_64`, `arm64`
- **`CompatibleRuntime` (string)**
  - Set the runtime identifier
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html#API_ListLayers_RequestSyntax)
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListLayerVersions`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html)

Properties:
- **`LayerName` (string) [required]**
  - Name or ARN of the layer
- **`CompatibleArchitecture` (string)**
  - Set instruction set architecture to one of: `x86_64`, `arm64`
- **`CompatibleRuntime` (string)**
  - Set the runtime identifier
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html#API_ListLayerVersions_RequestSyntax)
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListProvisionedConcurrencyConfigs`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html)

Properties:
- **`Resource` (string) [required]**
  - ARN of the lambda function


### `ListVersionsByFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Marker` (string)**
  - Pagination token
- **`MaxItems` (number)**
  - Maximum number of items to be returned; maximum 10,000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `PublishLayerVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html)

Properties:
- **`Content` (object) [required]**
  - Contents of the layer; object can contain: `S3Bucket`, `S3Key`, `S3ObjectVersion`, or `ZipFile` (base64-encoded zip)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-Content)
- **`CompatibleArchitectures` (array)**
  - Array with a maximum of 2 strings specifying instruction set architecture; array can contain: `x86_64`, `arm64`
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-CompatibleArchitectures)
- **`CompatibleRuntimes` (array)**
  - Array with a maximum of 15 strings specifying compatible runtime environments
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-CompatibleRuntimes)
- **`Description` (string)**
  - Description of the function
- **`LiscenceInfo` (string)**
  - The layer's software license
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-LicenseInfo)


### `PublishVersion`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`CodeSha256` (string)**
  - Checksum to confirm the function has not changed since being updated
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html#lambda-PublishVersion-request-CodeSha256)
- **`Description` (string)**
  - Description of the function
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it


### `PutFunctionCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`CodeSigningConfigArn` (string) [required]**
  - ARN of the code signing configuration


### `PutFunctionConcurrency`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`ReservedConcurrentExecutions` (number) [required]**
  - number of simultaneous executions to reserve


### `PutFunctionEventInvokeConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`DestinationConfig` (object)**
  - Specify the destination of an event after being processed by Lambda
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html#lambda-PutFunctionEventInvokeConfig-request-DestinationConfig)
- **`MaximumEventAgeInSeconds` (number)**
  - Set a maximum age in whole seconds between 60 and 21,600 (inclusive) for events to be processed
- **`MaximumRetryAttempts` (number)**
  - Set a maximum number of retries between 0 and 2 (inclusive) when the function returns an error
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `PutProvisionedConcurrencyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`ProvisionedConcurrentExecutions` (number) [required]**
  - Amount of provisioned concurrency of at least 1, to allocate for the version or alias
- **`Qualifier` (string) [required]**
  - Specify a version or alias to invoke a published version of the function


### `PutRuntimeManagementConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PutRuntimeManagementConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`UpdateRuntimeOn` (string) [required]**
  - Specify the runtime update mode; can be one of: `Auto` (default), `FunctionUpdate`, `Manual`
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PutRuntimeManagementConfig.html#lambda-PutRuntimeManagementConfig-request-UpdateRuntimeOn)
- **`Qualifier` (string)**
  - Specify a version of the function
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_PutRuntimeManagementConfig.html#API_PutRuntimeManagementConfig_RequestSyntax#Qualifier)
- **`RuntimeVersionArn` (string)**
  - ARN of the runtime version the function will use


### `RemoveLayerVersionPermission`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html)

Properties:
- **`LayerName` (string) [required]**
  - Name or ARN of the layer
- **`StatementId` (string) [required]**
  - Identifier specified when the statement was added
- **`VersionNumber` (number) [required]**
  - The version number of the layer
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it


### `RemovePermission`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`StatementId` (string) [required]**
  - Statement ID of the permission to remove
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### `TagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_TagResource.html)

Properties:
- **`Resource` (string) [required]**
  - ARN of the lambda function
- **`Tags` (object) [required]**
  - Record of tags to be applied to the function
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_TagResource.html#lambda-TagResource-request-Tags)


### `UntagResource`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html)

Properties:
- **`Resource` (string) [required]**
  - ARN of the lambda function
- **`TagKeys` (array) [required]**
  - Array of tag keys (strings) to removed from the function


### `UpdateAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Name` (string) [required]**
  - Name of the alias
- **`Description` (string)**
  - Description of the function
- **`FunctionVersion` (string)**
  - Version of the aliased function
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it
- **`RoutingConfig` (object)**
  - Configure function version weights
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing)


### `UpdateCodeSigningConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html)

Properties:
- **`CodeSigningConfigArn` (string) [required]**
  - ARN of the code signing configuration
- **`AllowedPublishers` (object)**
  - Signing profiles for this code signing configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html#lambda-UpdateCodeSigningConfig-request-AllowedPublishers)
- **`CodeSigningPolicies` (object)**
  - Define actions to take if validation checks fail
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html#lambda-UpdateCodeSigningConfig-request-CodeSigningPolicies)
- **`Description` (string)**
  - Description of the function


### `UpdateEventSourceMapping`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html)

Properties:
- **`UUID` (string) [required]**
  - UUID of the event source mapping
- **`AmazonManagedKafkaEventSourceConfig` (object)**
  - Configuration settings for an Amazon Managed Streaming for Apache Kafka event source
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-BatchSize)
- **`BatchSize` (number)**
  - Maximum number of records from 1 to 10000 in each batch that Lambda pulls from the stream or queue
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-BatchSize)
- **`BisectBatchOnFunctionError` (boolean)**
  - If the function returns an error, divide the batch and try again (only for Kinesis and DynamoDB streams)
- **`DestinationConfig` (object)**
  - Specify the destination of an event after being processed by Lambda
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-DestinationConfig)
- **`DocumentDBEventSourceConfig` (object)**
  - Configuration for a `DocumentDB` event source
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-DocumentDBEventSourceConfig)
- **`Enabled` (boolean)**
  - Set to `false` to disable event source upon creation
- **`FilterCriteria` (object)**
  - Define how incoming events will be filtered
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-FilterCriteria)
- **`FunctionName` (string)**
  - The name of the Lambda function, version, or alias
- **`FunctionResponseTypes` (array)**
  - A list of at most 1 string defining the current response type enum applied to the event source mapping; For Kinesis, DynamoDB Streams, and Amazon SQS
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-FunctionResponseTypes)
- **`MaximumBatchingWindowInSeconds` (number)**
  - Maximum time (in seconds) from 0 to 300 that Lambda may spend gathering records before invoking the function
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-MaximumBatchingWindowInSeconds)
- **`MaximumRecordAgeInSeconds` (number)**
  - Maximum age between -1 (infinite, default) to 604,800 of an event before it will be discarded; only for `Kinesis` and `DynamoDB` streams
- **`MaximumRetryAttempts` (number)**
  - Maximum number of tries between -1 (infinite, default) to 10,000 before a record is discarded; `Kinesis` and `DynamoDB` only 
- **`ParallelizationFactor` (number)**
  - Number of batches between 1 to 10 that can be processed from each shard concurrently
- **`Queues` (array)**
  - Array of exactly 1 string specifying the name of the `Amazon MQ` broker destination queue to consume
- **`ScalingConfig` (object)**
  - Configure scaling for the event source; Amazon SQS only
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-ScalingConfig)
- **`SourceAccessConfigurations` (array)**
  - Array of at most 22 `SourceAccessConfiguration` objects to specifying authentication protocols or VPC components required to secure the event source
- **`TumblingWindowInSeconds` (number)**
  - Time (in seconds) from 0 to 900 specifying the duration of a processing window for `DynamoDB` and `Kinesis` event stream sources


### `UpdateFunctionCode`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`Architectures` (array)**
  - System architecture, array can contain either `x86_64` (default) or `arm64`
- **`DryRun` (string)**
  - Validate the request parameters and access permissions without modifying the function code (`true`)
- **`ImageUri` (string)**
  - URI of a container image in the Amazon ECR registry (if not using a .zip file)
- **`Publish` (boolean)**
  - Publish a new version after after updating the code (`true`); effectively the same as calling `PublishVersion`
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it
- **`S3Bucket` (string)**
  - S3 bucket containing the key of the deployment package; must be in the same region
- **`S3Key` (string)**
  - S3 key of the deployment package (must be a .zip file)
- **`S3ObjectVersion` (string)**
  - S3 object version to use, if applicable
- **`ZipFile` (string, buffer)**
  - File path or raw buffer of the .zip deployment package


### `UpdateFunctionConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`DeadLetterConfig` (object)**
  - Dead-letter queue configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_DeadLetterConfig.html)
- **`Description` (string)**
  - Description of the function
- **`Environment` (object)**
  - Environment variable configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_Environment.html)
- **`EphemeralStorage` (object)**
  - Size of the function `/tmp` directory (in MB), from 512 (default) to 10240
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_EphemeralStorage.html)
- **`FileSystemConfigs` (array)**
  - EFS file system connection settings
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_FileSystemConfig.html)
- **`Handler` (string)**
  - The name of the handler file and method method within your code that Lambda calls to run your function (e.g. `index.handler`)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html)
- **`ImageConfig` (object)**
  - Container image configuration (overrides Docker file)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_ImageConfig.html)
- **`KMSKeyArn` (string)**
  - ARN of the Key Management Service (KMS) customer managed key used to encrypt your function environment variables
- **`Layers` (array)**
  - List of function layer ARNs (including version) to add to the function execution environment
- **`MemorySize` (number)**
  - Amount of memory available (in MB) at runtime from 128 to 10240; increasing memory also increases CPU allocation
- **`RevisionId` (string)**
  - Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it
- **`Role` (string)**
  - ARN of the function's execution role
- **`Runtime` (string)**
  - Runtime identifier
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- **`SnapStart` (object)**
  - SnapStart settings
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_SnapStart.html)
- **`Timeout` (number)**
  - Time (in seconds) a function is allowed to run before being stopped, from 3 (default) to 900
- **`TracingConfig` (object)**
  - Sample and trace a subset of incoming requests with X-Ray
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_TracingConfig.html)
- **`VpcConfig` (object)**
  - VPC networking configuration
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_VpcConfig.html)


### `UpdateFunctionEventInvokeConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`DestinationConfig` (object)**
  - Specify the destination of an event after being processed by Lambda
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html#lambda-UpdateFunctionEventInvokeConfig-request-DestinationConfig)
- **`MaximumEventAgeInSeconds` (number)**
  - Set a maximum age in whole seconds between 60 and 21,600 (inclusive) for events to be processed
- **`MaximumRetryAttempts` (number)**
  - Maximum number of tries between -1 (infinite, default) to 10,000 before a record is discarded; `Kinesis` and `DynamoDB` only 


### `UpdateFunctionUrlConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`AuthType` (string)**
  - Type of authentication that the function URL will use, either `AWS_IAM` or `NONE`
- **`Cors` (object)**
  - Cross-origin resource sharing settings
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html#lambda-UpdateFunctionUrlConfig-request-Cors)
- **`InvokeMode` (string)**
  - Specify how the function will be invoked, either `BUFFERED` (default, uses the `Invoke` API operation) or `RESPONSE_STREAM` (streams results as they become available, uses the `InvokeWithResponseStream` API operation)
  - [More details (AWS)](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html#lambda-UpdateFunctionUrlConfig-request-InvokeMode)
- **`Qualifier` (string)**
  - Specify a version or alias to invoke a published version of the function


### Deprecated methods

- [`InvokeAsync`](https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html)


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/aws-lite/aws-lite#authoring-aws-lite-plugins)!

- [`InvokeWithResponseStream`](https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeWithResponseStream.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
