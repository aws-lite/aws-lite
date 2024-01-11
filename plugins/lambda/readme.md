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


### `DeleteFunctionConcurrency`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html)

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


### `PutFunctionConcurrency`

[Canonical AWS API doc](https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html)

Properties:
- **`FunctionName` (string) [required]**
  - The name of the Lambda function, version, or alias
- **`ReservedConcurrentExecutions` (number) [required]**
  - number of simultaneous executions to reserve


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


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`AddLayerVersionPermission`](https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html)
- [`AddPermission`](https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html)
- [`CreateAlias`](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html)
- [`CreateCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html)
- [`CreateEventSourceMapping`](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html)
- [`CreateFunctionUrlConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html)
- [`DeleteAlias`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html)
- [`DeleteCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html)
- [`DeleteEventSourceMapping`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html)
- [`DeleteFunction`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html)
- [`DeleteFunctionCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html)
- [`DeleteFunctionEventInvokeConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html)
- [`DeleteFunctionUrlConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionUrlConfig.html)
- [`DeleteLayerVersion`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html)
- [`DeleteProvisionedConcurrencyConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html)
- [`GetAccountSettings`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html)
- [`GetAlias`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html)
- [`GetCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html)
- [`GetEventSourceMapping`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html)
- [`GetFunction`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html)
- [`GetFunctionCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html)
- [`GetFunctionConcurrency`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html)
- [`GetFunctionEventInvokeConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html)
- [`GetFunctionUrlConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionUrlConfig.html)
- [`GetLayerVersion`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html)
- [`GetLayerVersionByArn`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionByArn.html)
- [`GetLayerVersionPolicy`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html)
- [`GetPolicy`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html)
- [`GetProvisionedConcurrencyConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html)
- [`GetRuntimeManagementConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_GetRuntimeManagementConfig.html)
- [`InvokeAsync`](https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html)
- [`InvokeWithResponseStream`](https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeWithResponseStream.html)
- [`ListAliases`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html)
- [`ListCodeSigningConfigs`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html)
- [`ListEventSourceMappings`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html)
- [`ListFunctionEventInvokeConfigs`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html)
- [`ListFunctions`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html)
- [`ListFunctionsByCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html)
- [`ListFunctionUrlConfigs`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionUrlConfigs.html)
- [`ListLayers`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html)
- [`ListLayerVersions`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html)
- [`ListProvisionedConcurrencyConfigs`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html)
- [`ListTags`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html)
- [`ListVersionsByFunction`](https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html)
- [`PublishLayerVersion`](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html)
- [`PublishVersion`](https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html)
- [`PutFunctionCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html)
- [`PutFunctionEventInvokeConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html)
- [`PutProvisionedConcurrencyConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html)
- [`PutRuntimeManagementConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_PutRuntimeManagementConfig.html)
- [`RemoveLayerVersionPermission`](https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html)
- [`RemovePermission`](https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html)
- [`TagResource`](https://docs.aws.amazon.com/lambda/latest/dg/API_TagResource.html)
- [`UntagResource`](https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html)
- [`UpdateAlias`](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html)
- [`UpdateCodeSigningConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html)
- [`UpdateEventSourceMapping`](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html)
- [`UpdateFunctionEventInvokeConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html)
- [`UpdateFunctionUrlConfig`](https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
