import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AddLayerVersionPermissionCommandOutput as AddLayerVersionPermissionResponse,
  AddPermissionCommandOutput as AddPermissionResponse,
  CreateAliasCommandOutput as CreateAliasResponse,
  CreateCodeSigningConfigCommandOutput as CreateCodeSigningConfigResponse,
  CreateEventSourceMappingCommandOutput as CreateEventSourceMappingResponse,
  CreateFunctionCommandOutput as CreateFunctionResponse,
  CreateFunctionUrlConfigCommandOutput as CreateFunctionUrlConfigResponse,
  DeleteAliasCommandOutput as DeleteAliasResponse,
  DeleteCodeSigningConfigCommandOutput as DeleteCodeSigningConfigResponse,
  DeleteEventSourceMappingCommandOutput as DeleteEventSourceMappingResponse,
  DeleteFunctionCommandOutput as DeleteFunctionResponse,
  DeleteFunctionCodeSigningConfigCommandOutput as DeleteFunctionCodeSigningConfigResponse,
  DeleteFunctionConcurrencyCommandOutput as DeleteFunctionConcurrencyResponse,
  DeleteFunctionEventInvokeConfigCommandOutput as DeleteFunctionEventInvokeConfigResponse,
  DeleteFunctionUrlConfigCommandOutput as DeleteFunctionUrlConfigResponse,
  DeleteLayerVersionCommandOutput as DeleteLayerVersionResponse,
  DeleteProvisionedConcurrencyConfigCommandOutput as DeleteProvisionedConcurrencyConfigResponse,
  GetAccountSettingsCommandOutput as GetAccountSettingsResponse,
  GetAliasCommandOutput as GetAliasResponse,
  GetCodeSigningConfigCommandOutput as GetCodeSigningConfigResponse,
  GetEventSourceMappingCommandOutput as GetEventSourceMappingResponse,
  GetFunctionCommandOutput as GetFunctionResponse,
  GetFunctionCodeSigningConfigCommandOutput as GetFunctionCodeSigningConfigResponse,
  GetFunctionConcurrencyCommandOutput as GetFunctionConcurrencyResponse,
  GetFunctionConfigurationCommandOutput as GetFunctionConfigurationResponse,
  GetFunctionEventInvokeConfigCommandOutput as GetFunctionEventInvokeConfigResponse,
  GetFunctionUrlConfigCommandOutput as GetFunctionUrlConfigResponse,
  GetLayerVersionCommandOutput as GetLayerVersionResponse,
  GetLayerVersionByArnCommandOutput as GetLayerVersionByArnResponse,
  GetLayerVersionPolicyCommandOutput as GetLayerVersionPolicyResponse,
  GetPolicyCommandOutput as GetPolicyResponse,
  GetProvisionedConcurrencyConfigCommandOutput as GetProvisionedConcurrencyConfigResponse,
  GetRuntimeManagementConfigCommandOutput as GetRuntimeManagementConfigResponse,
  InvokeCommandOutput as InvokeResponse,
  InvokeAsyncCommandOutput as InvokeAsyncResponse,
  ListAliasesCommandOutput as ListAliasesResponse,
  ListCodeSigningConfigsCommandOutput as ListCodeSigningConfigsResponse,
  ListEventSourceMappingsCommandOutput as ListEventSourceMappingsResponse,
  ListFunctionEventInvokeConfigsCommandOutput as ListFunctionEventInvokeConfigsResponse,
  ListFunctionsCommandOutput as ListFunctionsResponse,
  ListFunctionsByCodeSigningConfigCommandOutput as ListFunctionsByCodeSigningConfigResponse,
  ListFunctionUrlConfigsCommandOutput as ListFunctionUrlConfigsResponse,
  ListLayersCommandOutput as ListLayersResponse,
  ListLayerVersionsCommandOutput as ListLayerVersionsResponse,
  ListProvisionedConcurrencyConfigsCommandOutput as ListProvisionedConcurrencyConfigsResponse,
  ListTagsCommandOutput as ListTagsResponse,
  ListVersionsByFunctionCommandOutput as ListVersionsByFunctionResponse,
  PublishLayerVersionCommandOutput as PublishLayerVersionResponse,
  PublishVersionCommandOutput as PublishVersionResponse,
  PutFunctionCodeSigningConfigCommandOutput as PutFunctionCodeSigningConfigResponse,
  PutFunctionConcurrencyCommandOutput as PutFunctionConcurrencyResponse,
  PutFunctionEventInvokeConfigCommandOutput as PutFunctionEventInvokeConfigResponse,
  PutProvisionedConcurrencyConfigCommandOutput as PutProvisionedConcurrencyConfigResponse,
  PutRuntimeManagementConfigCommandOutput as PutRuntimeManagementConfigResponse,
  RemoveLayerVersionPermissionCommandOutput as RemoveLayerVersionPermissionResponse,
  RemovePermissionCommandOutput as RemovePermissionResponse,
  TagResourceCommandOutput as TagResourceResponse,
  UntagResourceCommandOutput as UntagResourceResponse,
  UpdateAliasCommandOutput as UpdateAliasResponse,
  UpdateCodeSigningConfigCommandOutput as UpdateCodeSigningConfigResponse,
  UpdateEventSourceMappingCommandOutput as UpdateEventSourceMappingResponse,
  UpdateFunctionCodeCommandOutput as UpdateFunctionCodeResponse,
  UpdateFunctionConfigurationCommandOutput as UpdateFunctionConfigurationResponse,
  UpdateFunctionEventInvokeConfigCommandOutput as UpdateFunctionEventInvokeConfigResponse,
  UpdateFunctionUrlConfigCommandOutput as UpdateFunctionUrlConfigResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-lambda";

declare interface AwsLiteLambda {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html Lambda: AddLayerVersionPermission}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#AddLayerVersionPermission Lambda: AddLayerVersionPermission}
   */
  AddLayerVersionPermission: (input: { LayerName: string, RevisionId?: string, VersionNumber: number, Action: string, OrganizationId?: string, Principal?: string, StatementId: string }) => Promise<AddLayerVersionPermissionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html Lambda: AddPermission}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#AddPermission Lambda: AddPermission}
   */
  AddPermission: (input: { FunctionName: string, Qualifier?: string, Action: string, EventSourceToken?: string, FunctionUrlAuthType?: string, Principal: string, PrincipalOrgID?: string, RevisionId?: string, SourceAccount?: string, SourceArn?: string, StatementId: string }) => Promise<AddPermissionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html Lambda: CreateAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#CreateAlias Lambda: CreateAlias}
   */
  CreateAlias: (input: { FunctionName: string, Description?: string, FunctionVersion: string, Name: string, RoutingConfig?: Record<string, any> }) => Promise<CreateAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html Lambda: CreateCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#CreateCodeSigningConfig Lambda: CreateCodeSigningConfig}
   */
  CreateCodeSigningConfig: (input: { AllowedPublishers: Record<string, any>, CodeSigningPolicies?: Record<string, any>, Description?: string }) => Promise<CreateCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html Lambda: CreateEventSourceMapping}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#CreateEventSourceMapping Lambda: CreateEventSourceMapping}
   */
  CreateEventSourceMapping: (input: { FunctionName: string, AmazonManagedKafkaEventSourceConfig?: Record<string, any>, BatchSize?: number, BisectBatchOnFunctionError?: boolean, DestinationConfig?: Record<string, any>, DocumentDBEventSourceConfig?: Record<string, any>, Enabled?: boolean, EventSourceArn?: string, FilterCriteria?: Record<string, any>, FunctionResponseTypes?: any[], MaximumBatchingWindowInSeconds?: number, MaximumRecordAgeInSeconds?: number, MaximumRetryAttempts?: number, ParallelizationFactor?: number, Queues?: any[], ScalingConfig?: Record<string, any>, SelfManagedEventSource?: Record<string, any>, SelfManagedKafkaEventSourceConfig?: Record<string, any>, SourceAccessConfigurations?: any[], StartingPosition?: string, StartingPositionTimestamp?: Record<string, any>, Topics?: any[], TumblingWindowInSeconds?: number }) => Promise<CreateEventSourceMappingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html Lambda: CreateFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#CreateFunction Lambda: CreateFunction}
   */
  CreateFunction: (input: { Code: Record<string, any>, FunctionName: string, Role: string, Architectures?: any[], CodeSigningConfigArn?: string, DeadLetterConfig?: Record<string, any>, Description?: string, Environment?: Record<string, any>, EphemeralStorage?: Record<string, any>, FileSystemConfigs?: any[], Handler?: string, ImageConfig?: Record<string, any>, KMSKeyArn?: string, Layers?: any[], MemorySize?: number, PackageType?: string, Publish?: boolean, Runtime?: string, SnapStart?: Record<string, any>, Tags?: any[], Timeout?: number, TracingConfig?: Record<string, any>, VpcConfig?: Record<string, any> }) => Promise<CreateFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html Lambda: CreateFunctionUrlConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#CreateFunctionUrlConfig Lambda: CreateFunctionUrlConfig}
   */
  CreateFunctionUrlConfig: (input: { AuthType: string, FunctionName: string, Cors?: Record<string, any>, InvokeMode?: string, Qualifier?: string }) => Promise<CreateFunctionUrlConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html Lambda: DeleteAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteAlias Lambda: DeleteAlias}
   */
  DeleteAlias: (input: { FunctionName: string, Name: string }) => Promise<DeleteAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html Lambda: DeleteCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteCodeSigningConfig Lambda: DeleteCodeSigningConfig}
   */
  DeleteCodeSigningConfig: (input: { CodeSigningConfigArn: string }) => Promise<DeleteCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html Lambda: DeleteEventSourceMapping}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteEventSourceMapping Lambda: DeleteEventSourceMapping}
   */
  DeleteEventSourceMapping: (input: { UUID: string }) => Promise<DeleteEventSourceMappingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html Lambda: DeleteFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteFunction Lambda: DeleteFunction}
   */
  DeleteFunction: (input: { FunctionName: string, Qualifier?: string }) => Promise<DeleteFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html Lambda: DeleteFunctionCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteFunctionCodeSigningConfig Lambda: DeleteFunctionCodeSigningConfig}
   */
  DeleteFunctionCodeSigningConfig: (input: { FunctionName: string }) => Promise<DeleteFunctionCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html Lambda: DeleteFunctionConcurrency}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteFunctionConcurrency Lambda: DeleteFunctionConcurrency}
   */
  DeleteFunctionConcurrency: (input: { FunctionName: string }) => Promise<DeleteFunctionConcurrencyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html Lambda: DeleteFunctionEventInvokeConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteFunctionEventInvokeConfig Lambda: DeleteFunctionEventInvokeConfig}
   */
  DeleteFunctionEventInvokeConfig: (input: { FunctionName: string, Qualifier?: string }) => Promise<DeleteFunctionEventInvokeConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionUrlConfig.html Lambda: DeleteFunctionUrlConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteFunctionUrlConfig Lambda: DeleteFunctionUrlConfig}
   */
  DeleteFunctionUrlConfig: (input: { FunctionName: string, Qualifier?: string }) => Promise<DeleteFunctionUrlConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html Lambda: DeleteLayerVersion}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteLayerVersion Lambda: DeleteLayerVersion}
   */
  DeleteLayerVersion: (input: { LayerName: string, VersionNumber: number }) => Promise<DeleteLayerVersionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html Lambda: DeleteProvisionedConcurrencyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#DeleteProvisionedConcurrencyConfig Lambda: DeleteProvisionedConcurrencyConfig}
   */
  DeleteProvisionedConcurrencyConfig: (input: { FunctionName: string, Qualifier: string }) => Promise<DeleteProvisionedConcurrencyConfigResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetAccountSettings Lambda: GetAccountSettings} */
  GetAccountSettings: () => Promise<GetAccountSettingsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html Lambda: GetAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetAlias Lambda: GetAlias}
   */
  GetAlias: (input: { FunctionName: string, Name: string }) => Promise<GetAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html Lambda: GetCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetCodeSigningConfig Lambda: GetCodeSigningConfig}
   */
  GetCodeSigningConfig: (input: { CodeSigningConfigArn: string }) => Promise<GetCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html Lambda: GetEventSourceMapping}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetEventSourceMapping Lambda: GetEventSourceMapping}
   */
  GetEventSourceMapping: (input: { UUID: string }) => Promise<GetEventSourceMappingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html Lambda: GetFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetFunction Lambda: GetFunction}
   */
  GetFunction: (input: { FunctionName: string, Qualifier?: string }) => Promise<GetFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html Lambda: GetFunctionCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetFunctionCodeSigningConfig Lambda: GetFunctionCodeSigningConfig}
   */
  GetFunctionCodeSigningConfig: (input: { FunctionName: string }) => Promise<GetFunctionCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html Lambda: GetFunctionConcurrency}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetFunctionConcurrency Lambda: GetFunctionConcurrency}
   */
  GetFunctionConcurrency: (input: { FunctionName: string }) => Promise<GetFunctionConcurrencyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html Lambda: GetFunctionConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetFunctionConfiguration Lambda: GetFunctionConfiguration}
   */
  GetFunctionConfiguration: (input: { FunctionName: string, Qualifier?: string }) => Promise<GetFunctionConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html Lambda: GetFunctionEventInvokeConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetFunctionEventInvokeConfig Lambda: GetFunctionEventInvokeConfig}
   */
  GetFunctionEventInvokeConfig: (input: { FunctionName: string, Qualifier?: string }) => Promise<GetFunctionEventInvokeConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionUrlConfig.html Lambda: GetFunctionUrlConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetFunctionUrlConfig Lambda: GetFunctionUrlConfig}
   */
  GetFunctionUrlConfig: (input: { FunctionName: string, Qualifier?: string }) => Promise<GetFunctionUrlConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html Lambda: GetLayerVersion}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetLayerVersion Lambda: GetLayerVersion}
   */
  GetLayerVersion: (input: { LayerName: string, VersionNumber: number }) => Promise<GetLayerVersionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionByArn.html Lambda: GetLayerVersionByArn}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetLayerVersionByArn Lambda: GetLayerVersionByArn}
   */
  GetLayerVersionByArn: (input: { Arn: string }) => Promise<GetLayerVersionByArnResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html Lambda: GetLayerVersionPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetLayerVersionPolicy Lambda: GetLayerVersionPolicy}
   */
  GetLayerVersionPolicy: (input: { LayerName: string, VersionNumber: number }) => Promise<GetLayerVersionPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html Lambda: GetPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetPolicy Lambda: GetPolicy}
   */
  GetPolicy: (input: { FunctionName: string, Qualifier?: string }) => Promise<GetPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html Lambda: GetProvisionedConcurrencyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetProvisionedConcurrencyConfig Lambda: GetProvisionedConcurrencyConfig}
   */
  GetProvisionedConcurrencyConfig: (input: { FunctionName: string, Qualifier: string }) => Promise<GetProvisionedConcurrencyConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetRuntimeManagementConfig.html Lambda: GetRuntimeManagementConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#GetRuntimeManagementConfig Lambda: GetRuntimeManagementConfig}
   */
  GetRuntimeManagementConfig: (input: { FunctionName: string, Qualifier?: string }) => Promise<GetRuntimeManagementConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html Lambda: Invoke}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#Invoke Lambda: Invoke}
   */
  Invoke: (input: { FunctionName: string, InvocationType?: string, Payload: any[] | Record<string, any>, LogType?: string, ClientContext?: string, Qualifier?: string }) => Promise<InvokeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html Lambda: InvokeAsync}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#InvokeAsync Lambda: InvokeAsync}
   */
  InvokeAsync: (input: { FunctionName: string, InvokeArgs: Record<string, any> }) => Promise<InvokeAsyncResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html Lambda: ListAliases}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListAliases Lambda: ListAliases}
   */
  ListAliases: (input: { FunctionName: string, FunctionVersion?: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListAliasesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html Lambda: ListCodeSigningConfigs}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListCodeSigningConfigs Lambda: ListCodeSigningConfigs}
   */
  ListCodeSigningConfigs: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListCodeSigningConfigsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html Lambda: ListEventSourceMappings}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListEventSourceMappings Lambda: ListEventSourceMappings}
   */
  ListEventSourceMappings: (input: { EventSourceArn?: string, FunctionName?: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListEventSourceMappingsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html Lambda: ListFunctionEventInvokeConfigs}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListFunctionEventInvokeConfigs Lambda: ListFunctionEventInvokeConfigs}
   */
  ListFunctionEventInvokeConfigs: (input: { FunctionName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListFunctionEventInvokeConfigsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html Lambda: ListFunctions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListFunctions Lambda: ListFunctions}
   */
  ListFunctions: (input: { FunctionVersion?: string, Marker?: string, MasterRegion?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListFunctionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html Lambda: ListFunctionsByCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListFunctionsByCodeSigningConfig Lambda: ListFunctionsByCodeSigningConfig}
   */
  ListFunctionsByCodeSigningConfig: (input: { CodeSigningConfigArn: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListFunctionsByCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionUrlConfigs.html Lambda: ListFunctionUrlConfigs}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListFunctionUrlConfigs Lambda: ListFunctionUrlConfigs}
   */
  ListFunctionUrlConfigs: (input: { FunctionName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListFunctionUrlConfigsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html Lambda: ListLayers}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListLayers Lambda: ListLayers}
   */
  ListLayers: (input: { CompatibleArchitecture?: string, CompatibleRuntime?: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListLayersResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html Lambda: ListLayerVersions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListLayerVersions Lambda: ListLayerVersions}
   */
  ListLayerVersions: (input: { LayerName: string, CompatibleArchitecture?: string, CompatibleRuntime?: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListLayerVersionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html Lambda: ListProvisionedConcurrencyConfigs}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListProvisionedConcurrencyConfigs Lambda: ListProvisionedConcurrencyConfigs}
   */
  ListProvisionedConcurrencyConfigs: (input: { FunctionName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListProvisionedConcurrencyConfigsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html Lambda: ListTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListTags Lambda: ListTags}
   */
  ListTags: (input: { Resource: string }) => Promise<ListTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html Lambda: ListVersionsByFunction}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#ListVersionsByFunction Lambda: ListVersionsByFunction}
   */
  ListVersionsByFunction: (input: { FunctionName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListVersionsByFunctionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html Lambda: PublishLayerVersion}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PublishLayerVersion Lambda: PublishLayerVersion}
   */
  PublishLayerVersion: (input: { Content: Record<string, any>, CompatibleArchitectures?: any[], CompatibleRuntimes?: any[], Description?: string, LiscenceInfo?: string }) => Promise<PublishLayerVersionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html Lambda: PublishVersion}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PublishVersion Lambda: PublishVersion}
   */
  PublishVersion: (input: { FunctionName: string, CodeSha256?: string, Description?: string, RevisionId?: string }) => Promise<PublishVersionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html Lambda: PutFunctionCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PutFunctionCodeSigningConfig Lambda: PutFunctionCodeSigningConfig}
   */
  PutFunctionCodeSigningConfig: (input: { FunctionName: string, CodeSigningConfigArn: string }) => Promise<PutFunctionCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html Lambda: PutFunctionConcurrency}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PutFunctionConcurrency Lambda: PutFunctionConcurrency}
   */
  PutFunctionConcurrency: (input: { FunctionName: string, ReservedConcurrentExecutions: number }) => Promise<PutFunctionConcurrencyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html Lambda: PutFunctionEventInvokeConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PutFunctionEventInvokeConfig Lambda: PutFunctionEventInvokeConfig}
   */
  PutFunctionEventInvokeConfig: (input: { FunctionName: string, DestinationConfig?: Record<string, any>, MaximumEventAgeInSeconds?: number, MaximumRetryAttempts?: number, Qualifier?: string }) => Promise<PutFunctionEventInvokeConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html Lambda: PutProvisionedConcurrencyConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PutProvisionedConcurrencyConfig Lambda: PutProvisionedConcurrencyConfig}
   */
  PutProvisionedConcurrencyConfig: (input: { FunctionName: string, ProvisionedConcurrentExecutions: number, Qualifier: string }) => Promise<PutProvisionedConcurrencyConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutRuntimeManagementConfig.html Lambda: PutRuntimeManagementConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#PutRuntimeManagementConfig Lambda: PutRuntimeManagementConfig}
   */
  PutRuntimeManagementConfig: (input: { FunctionName: string, UpdateRuntimeOn: string, Qualifier?: string, RuntimeVersionArn?: string }) => Promise<PutRuntimeManagementConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html Lambda: RemoveLayerVersionPermission}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#RemoveLayerVersionPermission Lambda: RemoveLayerVersionPermission}
   */
  RemoveLayerVersionPermission: (input: { LayerName: string, StatementId: string, VersionNumber: number, RevisionId?: string }) => Promise<RemoveLayerVersionPermissionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html Lambda: RemovePermission}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#RemovePermission Lambda: RemovePermission}
   */
  RemovePermission: (input: { FunctionName: string, StatementId: string, RevisionId?: string, Qualifier?: string }) => Promise<RemovePermissionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_TagResource.html Lambda: TagResource}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#TagResource Lambda: TagResource}
   */
  TagResource: (input: { Resource: string, Tags: Record<string, any> }) => Promise<TagResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html Lambda: UntagResource}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UntagResource Lambda: UntagResource}
   */
  UntagResource: (input: { Resource: string, TagKeys: any[] }) => Promise<UntagResourceResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html Lambda: UpdateAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateAlias Lambda: UpdateAlias}
   */
  UpdateAlias: (input: { FunctionName: string, Name: string, Description?: string, FunctionVersion?: string, RevisionId?: string, RoutingConfig?: Record<string, any> }) => Promise<UpdateAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html Lambda: UpdateCodeSigningConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateCodeSigningConfig Lambda: UpdateCodeSigningConfig}
   */
  UpdateCodeSigningConfig: (input: { CodeSigningConfigArn: string, AllowedPublishers?: Record<string, any>, CodeSigningPolicies?: Record<string, any>, Description?: string }) => Promise<UpdateCodeSigningConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html Lambda: UpdateEventSourceMapping}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateEventSourceMapping Lambda: UpdateEventSourceMapping}
   */
  UpdateEventSourceMapping: (input: { UUID: string, AmazonManagedKafkaEventSourceConfig?: Record<string, any>, BatchSize?: number, BisectBatchOnFunctionError?: boolean, DestinationConfig?: Record<string, any>, DocumentDBEventSourceConfig?: Record<string, any>, Enabled?: boolean, FilterCriteria?: Record<string, any>, FunctionName?: string, FunctionResponseTypes?: any[], MaximumBatchingWindowInSeconds?: number, MaximumRecordAgeInSeconds?: number, MaximumRetryAttempts?: number, ParallelizationFactor?: number, Queues?: any[], ScalingConfig?: Record<string, any>, SourceAccessConfigurations?: any[], TumblingWindowInSeconds?: number }) => Promise<UpdateEventSourceMappingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html Lambda: UpdateFunctionCode}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateFunctionCode Lambda: UpdateFunctionCode}
   */
  UpdateFunctionCode: (input: { FunctionName: string, Architectures?: any[], DryRun?: string, ImageUri?: string, Publish?: boolean, RevisionId?: string, S3Bucket?: string, S3Key?: string, S3ObjectVersion?: string, ZipFile?: string | Buffer }) => Promise<UpdateFunctionCodeResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html Lambda: UpdateFunctionConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateFunctionConfiguration Lambda: UpdateFunctionConfiguration}
   */
  UpdateFunctionConfiguration: (input: { FunctionName: string, DeadLetterConfig?: Record<string, any>, Description?: string, Environment?: Record<string, any>, EphemeralStorage?: Record<string, any>, FileSystemConfigs?: any[], Handler?: string, ImageConfig?: Record<string, any>, KMSKeyArn?: string, Layers?: any[], MemorySize?: number, RevisionId?: string, Role?: string, Runtime?: string, SnapStart?: Record<string, any>, Timeout?: number, TracingConfig?: Record<string, any>, VpcConfig?: Record<string, any> }) => Promise<UpdateFunctionConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html Lambda: UpdateFunctionEventInvokeConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateFunctionEventInvokeConfig Lambda: UpdateFunctionEventInvokeConfig}
   */
  UpdateFunctionEventInvokeConfig: (input: { FunctionName: string, DestinationConfig?: Record<string, any>, MaximumEventAgeInSeconds?: number, MaximumRetryAttempts?: number }) => Promise<UpdateFunctionEventInvokeConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html Lambda: UpdateFunctionUrlConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/lambda/readme.md#UpdateFunctionUrlConfig Lambda: UpdateFunctionUrlConfig}
   */
  UpdateFunctionUrlConfig: (input: { FunctionName: string, AuthType?: string, Cors?: Record<string, any>, InvokeMode?: string, Qualifier?: string }) => Promise<UpdateFunctionUrlConfigResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    Lambda: AwsLiteLambda;
  }
}

export type {
  AwsLiteLambda,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  AddLayerVersionPermissionResponse,
  AddPermissionResponse,
  CreateAliasResponse,
  CreateCodeSigningConfigResponse,
  CreateEventSourceMappingResponse,
  CreateFunctionResponse,
  CreateFunctionUrlConfigResponse,
  DeleteAliasResponse,
  DeleteCodeSigningConfigResponse,
  DeleteEventSourceMappingResponse,
  DeleteFunctionResponse,
  DeleteFunctionCodeSigningConfigResponse,
  DeleteFunctionConcurrencyResponse,
  DeleteFunctionEventInvokeConfigResponse,
  DeleteFunctionUrlConfigResponse,
  DeleteLayerVersionResponse,
  DeleteProvisionedConcurrencyConfigResponse,
  GetAccountSettingsResponse,
  GetAliasResponse,
  GetCodeSigningConfigResponse,
  GetEventSourceMappingResponse,
  GetFunctionResponse,
  GetFunctionCodeSigningConfigResponse,
  GetFunctionConcurrencyResponse,
  GetFunctionConfigurationResponse,
  GetFunctionEventInvokeConfigResponse,
  GetFunctionUrlConfigResponse,
  GetLayerVersionResponse,
  GetLayerVersionByArnResponse,
  GetLayerVersionPolicyResponse,
  GetPolicyResponse,
  GetProvisionedConcurrencyConfigResponse,
  GetRuntimeManagementConfigResponse,
  InvokeResponse,
  InvokeAsyncResponse,
  ListAliasesResponse,
  ListCodeSigningConfigsResponse,
  ListEventSourceMappingsResponse,
  ListFunctionEventInvokeConfigsResponse,
  ListFunctionsResponse,
  ListFunctionsByCodeSigningConfigResponse,
  ListFunctionUrlConfigsResponse,
  ListLayersResponse,
  ListLayerVersionsResponse,
  ListProvisionedConcurrencyConfigsResponse,
  ListTagsResponse,
  ListVersionsByFunctionResponse,
  PublishLayerVersionResponse,
  PublishVersionResponse,
  PutFunctionCodeSigningConfigResponse,
  PutFunctionConcurrencyResponse,
  PutFunctionEventInvokeConfigResponse,
  PutProvisionedConcurrencyConfigResponse,
  PutRuntimeManagementConfigResponse,
  RemoveLayerVersionPermissionResponse,
  RemovePermissionResponse,
  TagResourceResponse,
  UntagResourceResponse,
  UpdateAliasResponse,
  UpdateCodeSigningConfigResponse,
  UpdateEventSourceMappingResponse,
  UpdateFunctionCodeResponse,
  UpdateFunctionConfigurationResponse,
  UpdateFunctionEventInvokeConfigResponse,
  UpdateFunctionUrlConfigResponse,
  // $EXPORT_END
}
