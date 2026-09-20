// Generated from @aws-sdk/client-cloudformation@3.1136.0 by npm run gen. Do not edit.
// AWS SDK and Smithy declarations: see ../readme.md#attribution.

interface ResponseMetadata {
	/**
	 * The status code of the last HTTP response received for this operation.
	 */
	httpStatusCode?: number;
	/**
	 * A unique identifier for the last request sent for this operation. Often
	 * requested by AWS service teams to aid in debugging.
	 */
	requestId?: string;
	/**
	 * A secondary identifier for the last request sent. Used for debugging.
	 */
	extendedRequestId?: string;
	/**
	 * A tertiary identifier for the last request sent. Used for debugging.
	 */
	cfId?: string;
	/**
	 * The number of times this operation was attempted.
	 */
	attempts?: number;
	/**
	 * The total amount of time (in milliseconds) that was spent waiting between
	 * retry attempts.
	 */
	totalRetryDelay?: number;
}
interface MetadataBearer {
	/**
	 * Metadata pertaining to this request.
	 */
	$metadata: ResponseMetadata;
}
declare const Capability: {
	readonly CAPABILITY_AUTO_EXPAND: "CAPABILITY_AUTO_EXPAND";
	readonly CAPABILITY_IAM: "CAPABILITY_IAM";
	readonly CAPABILITY_NAMED_IAM: "CAPABILITY_NAMED_IAM";
};
type Capability = (typeof Capability)[keyof typeof Capability];
declare const StackResourceDriftStatus: {
	readonly DELETED: "DELETED";
	readonly IN_SYNC: "IN_SYNC";
	readonly MODIFIED: "MODIFIED";
	readonly NOT_CHECKED: "NOT_CHECKED";
	readonly UNKNOWN: "UNKNOWN";
	readonly UNSUPPORTED: "UNSUPPORTED";
};
type StackResourceDriftStatus = (typeof StackResourceDriftStatus)[keyof typeof StackResourceDriftStatus];
declare const HookFailureMode: {
	readonly FAIL: "FAIL";
	readonly WARN: "WARN";
};
type HookFailureMode = (typeof HookFailureMode)[keyof typeof HookFailureMode];
declare const HookInvocationPoint: {
	readonly PRE_PROVISION: "PRE_PROVISION";
};
type HookInvocationPoint = (typeof HookInvocationPoint)[keyof typeof HookInvocationPoint];
declare const DeploymentConfigMode: {
	readonly EXPRESS: "EXPRESS";
	readonly STANDARD: "STANDARD";
};
type DeploymentConfigMode = (typeof DeploymentConfigMode)[keyof typeof DeploymentConfigMode];
declare const DeletionMode: {
	readonly FORCE_DELETE_STACK: "FORCE_DELETE_STACK";
	readonly STANDARD: "STANDARD";
};
type DeletionMode = (typeof DeletionMode)[keyof typeof DeletionMode];
declare const StackDriftStatus: {
	readonly DRIFTED: "DRIFTED";
	readonly IN_SYNC: "IN_SYNC";
	readonly NOT_CHECKED: "NOT_CHECKED";
	readonly UNKNOWN: "UNKNOWN";
};
type StackDriftStatus = (typeof StackDriftStatus)[keyof typeof StackDriftStatus];
declare const DetailedStatus: {
	readonly CONFIGURATION_COMPLETE: "CONFIGURATION_COMPLETE";
	readonly VALIDATION_FAILED: "VALIDATION_FAILED";
};
type DetailedStatus = (typeof DetailedStatus)[keyof typeof DetailedStatus];
declare const HookStatus: {
	readonly HOOK_COMPLETE_FAILED: "HOOK_COMPLETE_FAILED";
	readonly HOOK_COMPLETE_SUCCEEDED: "HOOK_COMPLETE_SUCCEEDED";
	readonly HOOK_FAILED: "HOOK_FAILED";
	readonly HOOK_IN_PROGRESS: "HOOK_IN_PROGRESS";
};
type HookStatus = (typeof HookStatus)[keyof typeof HookStatus];
declare const OperationType: {
	readonly CONTINUE_ROLLBACK: "CONTINUE_ROLLBACK";
	readonly CREATE_CHANGESET: "CREATE_CHANGESET";
	readonly CREATE_STACK: "CREATE_STACK";
	readonly DELETE_STACK: "DELETE_STACK";
	readonly ROLLBACK: "ROLLBACK";
	readonly UPDATE_STACK: "UPDATE_STACK";
};
type OperationType = (typeof OperationType)[keyof typeof OperationType];
declare const ResourceStatus: {
	readonly CREATE_COMPLETE: "CREATE_COMPLETE";
	readonly CREATE_FAILED: "CREATE_FAILED";
	readonly CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS";
	readonly DELETE_COMPLETE: "DELETE_COMPLETE";
	readonly DELETE_FAILED: "DELETE_FAILED";
	readonly DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS";
	readonly DELETE_SKIPPED: "DELETE_SKIPPED";
	readonly EXPORT_COMPLETE: "EXPORT_COMPLETE";
	readonly EXPORT_FAILED: "EXPORT_FAILED";
	readonly EXPORT_IN_PROGRESS: "EXPORT_IN_PROGRESS";
	readonly EXPORT_ROLLBACK_COMPLETE: "EXPORT_ROLLBACK_COMPLETE";
	readonly EXPORT_ROLLBACK_FAILED: "EXPORT_ROLLBACK_FAILED";
	readonly EXPORT_ROLLBACK_IN_PROGRESS: "EXPORT_ROLLBACK_IN_PROGRESS";
	readonly IMPORT_COMPLETE: "IMPORT_COMPLETE";
	readonly IMPORT_FAILED: "IMPORT_FAILED";
	readonly IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS";
	readonly IMPORT_ROLLBACK_COMPLETE: "IMPORT_ROLLBACK_COMPLETE";
	readonly IMPORT_ROLLBACK_FAILED: "IMPORT_ROLLBACK_FAILED";
	readonly IMPORT_ROLLBACK_IN_PROGRESS: "IMPORT_ROLLBACK_IN_PROGRESS";
	readonly ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE";
	readonly ROLLBACK_FAILED: "ROLLBACK_FAILED";
	readonly ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS";
	readonly UPDATE_COMPLETE: "UPDATE_COMPLETE";
	readonly UPDATE_FAILED: "UPDATE_FAILED";
	readonly UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS";
	readonly UPDATE_ROLLBACK_COMPLETE: "UPDATE_ROLLBACK_COMPLETE";
	readonly UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED";
	readonly UPDATE_ROLLBACK_IN_PROGRESS: "UPDATE_ROLLBACK_IN_PROGRESS";
};
type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];
declare const StackStatus: {
	readonly CREATE_COMPLETE: "CREATE_COMPLETE";
	readonly CREATE_FAILED: "CREATE_FAILED";
	readonly CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS";
	readonly DELETE_COMPLETE: "DELETE_COMPLETE";
	readonly DELETE_FAILED: "DELETE_FAILED";
	readonly DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS";
	readonly IMPORT_COMPLETE: "IMPORT_COMPLETE";
	readonly IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS";
	readonly IMPORT_ROLLBACK_COMPLETE: "IMPORT_ROLLBACK_COMPLETE";
	readonly IMPORT_ROLLBACK_FAILED: "IMPORT_ROLLBACK_FAILED";
	readonly IMPORT_ROLLBACK_IN_PROGRESS: "IMPORT_ROLLBACK_IN_PROGRESS";
	readonly REVIEW_IN_PROGRESS: "REVIEW_IN_PROGRESS";
	readonly ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE";
	readonly ROLLBACK_FAILED: "ROLLBACK_FAILED";
	readonly ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS";
	readonly UPDATE_COMPLETE: "UPDATE_COMPLETE";
	readonly UPDATE_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS";
	readonly UPDATE_FAILED: "UPDATE_FAILED";
	readonly UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS";
	readonly UPDATE_ROLLBACK_COMPLETE: "UPDATE_ROLLBACK_COMPLETE";
	readonly UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS";
	readonly UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED";
	readonly UPDATE_ROLLBACK_IN_PROGRESS: "UPDATE_ROLLBACK_IN_PROGRESS";
};
type StackStatus = (typeof StackStatus)[keyof typeof StackStatus];
interface ModuleInfo {
	/**
	 * <p>A concatenated list of the module type or types that contains the resource. Module types are
	 *    listed starting with the inner-most nested module, and separated by <code>/</code>.</p>
	 *          <p>In the following example, the resource was created from a module of type
	 *     <code>AWS::First::Example::MODULE</code>, that's nested inside a parent module of type
	 *     <code>AWS::Second::Example::MODULE</code>.</p>
	 *          <p>
	 *             <code>AWS::First::Example::MODULE/AWS::Second::Example::MODULE</code>
	 *          </p>
	 * @public
	 */
	TypeHierarchy?: string | undefined;
	/**
	 * <p>A concatenated list of the logical IDs of the module or modules that contains the resource.
	 *    Modules are listed starting with the inner-most nested module, and separated by
	 *    <code>/</code>.</p>
	 *          <p>In the following example, the resource was created from a module, <code>moduleA</code>,
	 *    that's nested inside a parent module, <code>moduleB</code>.</p>
	 *          <p>
	 *             <code>moduleA/moduleB</code>
	 *          </p>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/module-ref-resources.html">Reference module resources in
	 *     CloudFormation templates</a> in the <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	LogicalIdHierarchy?: string | undefined;
}
interface DeploymentConfig {
	/**
	 * <p>Specifies the deployment mode for the stack operation. Possible values are:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>STANDARD</code> - Use the standard deployment behavior, ensuring resources are
	 *      ready to serve traffic before completing the operation. This is the default. You do not need
	 *      to specify this value explicitly.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>EXPRESS</code> - Complete the stack operation when resource configuration is
	 *      applied, without waiting for resources to become ready to serve traffic. Resources continue
	 *      becoming ready in the background.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	Mode?: DeploymentConfigMode | undefined;
	/**
	 * <p>Specifies whether to disable rollback of the stack if the stack operation fails.</p>
	 *          <p>Default: <code>false</code>
	 *          </p>
	 * @public
	 */
	DisableRollback?: boolean | undefined;
}
interface Parameter {
	/**
	 * <p>The key associated with the parameter. If you don't specify a key and value for a particular
	 *    parameter, CloudFormation uses the default value that's specified in your template.</p>
	 * @public
	 */
	ParameterKey?: string | undefined;
	/**
	 * <p>The input value associated with the parameter.</p>
	 * @public
	 */
	ParameterValue?: string | undefined;
	/**
	 * <p>During a stack update, use the existing parameter value that the stack is using for a given
	 *    parameter key. If you specify <code>true</code>, do not specify a parameter value.</p>
	 * @public
	 */
	UsePreviousValue?: boolean | undefined;
	/**
	 * <p>Read-only. The value that corresponds to a Systems Manager parameter key. This field is returned only
	 *    for Systems Manager parameter types in the template. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-supplied-parameter-types.html">Specify
	 *     existing resources at runtime with CloudFormation-supplied parameter types</a> in the
	 *     <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	ResolvedValue?: string | undefined;
}
interface RollbackTrigger {
	/**
	 * <p>The Amazon Resource Name (ARN) of the rollback trigger.</p>
	 *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled
	 *    back.</p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The resource type of the rollback trigger. Specify either <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-cloudwatch-alarm.html">AWS::CloudWatch::Alarm</a> or <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-cloudwatch-compositealarm.html">AWS::CloudWatch::CompositeAlarm</a> resource types.</p>
	 * @public
	 */
	Type: string | undefined;
}
interface RollbackConfiguration {
	/**
	 * <p>The triggers to monitor during stack creation or update actions.</p>
	 *          <p>By default, CloudFormation saves the rollback triggers specified for a stack and applies them to
	 *    any subsequent update operations for the stack, unless you specify otherwise. If you do specify
	 *    rollback triggers for this parameter, those triggers replace any list of triggers previously
	 *    specified for the stack. This means:</p>
	 *          <ul>
	 *             <li>
	 *                <p>To use the rollback triggers previously specified for this stack, if any, don't specify
	 *      this parameter.</p>
	 *             </li>
	 *             <li>
	 *                <p>To specify new or updated rollback triggers, you must specify <i>all</i> the
	 *      triggers that you want used for this stack, even triggers you've specified before (for example,
	 *      when creating the stack or during a previous stack update). Any triggers that you don't include
	 *      in the updated list of triggers are no longer applied to the stack.</p>
	 *             </li>
	 *             <li>
	 *                <p>To remove all currently specified triggers, specify an empty list for this
	 *      parameter.</p>
	 *             </li>
	 *          </ul>
	 *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled
	 *    back.</p>
	 * @public
	 */
	RollbackTriggers?: RollbackTrigger[] | undefined;
	/**
	 * <p>The amount of time, in minutes, during which CloudFormation should monitor all the rollback
	 *    triggers after the stack creation or update operation deploys all necessary resources.</p>
	 *          <p>The default is 0 minutes.</p>
	 *          <p>If you specify a monitoring period but don't specify any rollback triggers, CloudFormation still
	 *    waits the specified period of time before cleaning up old resources after update operations. You
	 *    can use this monitoring period to perform any manual stack validation desired, and manually
	 *    cancel the stack creation or update (using <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html">CancelUpdateStack</a>, for example) as necessary.</p>
	 *          <p>If you specify 0 for this parameter, CloudFormation still monitors the specified rollback
	 *    triggers during stack creation and update operations. Then, for update operations, it begins
	 *    disposing of old resources immediately once the operation completes.</p>
	 * @public
	 */
	MonitoringTimeInMinutes?: number | undefined;
}
interface Tag {
	/**
	 * <p>A string used to identify this tag. You can specify a maximum of 128 characters for a tag
	 *    key. Tags owned by Amazon Web Services have the reserved prefix: <code>aws:</code>.</p>
	 * @public
	 */
	Key: string | undefined;
	/**
	 * <p>A string that contains the value for this tag. You can specify a maximum of 256 characters
	 *    for a tag value.</p>
	 * @public
	 */
	Value: string | undefined;
}
interface CreateStackOutput {
	/**
	 * <p>Unique identifier of the stack.</p>
	 * @public
	 */
	StackId?: string | undefined;
	/**
	 * <p>A unique identifier for this stack operation that can be used to track the operation's
	 *       progress and events.</p>
	 * @public
	 */
	OperationId?: string | undefined;
}
interface StackEvent {
	/**
	 * <p>The unique ID name of the instance of the stack.</p>
	 * @public
	 */
	StackId: string | undefined;
	/**
	 * <p>The unique identifier of this event.</p>
	 * @public
	 */
	EventId: string | undefined;
	/**
	 * <p>The name associated with a stack.</p>
	 * @public
	 */
	StackName: string | undefined;
	/**
	 * <p>The unique identifier of the operation that generated this stack event.</p>
	 * @public
	 */
	OperationId?: string | undefined;
	/**
	 * <p>The logical name of the resource specified in the template.</p>
	 * @public
	 */
	LogicalResourceId?: string | undefined;
	/**
	 * <p>The name or unique identifier associated with the physical instance of the resource.</p>
	 * @public
	 */
	PhysicalResourceId?: string | undefined;
	/**
	 * <p>Type of resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
	 *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	ResourceType?: string | undefined;
	/**
	 * <p>Time the status was updated.</p>
	 * @public
	 */
	Timestamp: Date | undefined;
	/**
	 * <p>Current status of the resource.</p>
	 * @public
	 */
	ResourceStatus?: ResourceStatus | undefined;
	/**
	 * <p>Success/failure message associated with the resource.</p>
	 * @public
	 */
	ResourceStatusReason?: string | undefined;
	/**
	 * <p>BLOB of the properties used to create the resource.</p>
	 * @public
	 */
	ResourceProperties?: string | undefined;
	/**
	 * <p>The token passed to the operation that generated this event.</p>
	 *          <p>All events triggered by a given stack operation are assigned the same client request token,
	 *    which you can use to track operations. For example, if you execute a <code>CreateStack</code>
	 *    operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by
	 *    that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p>
	 *          <p>In the console, stack operations display the client request token on the Events tab. Stack
	 *    operations that are initiated from the console use the token format
	 *     <i>Console-StackOperation-ID</i>, which helps you easily identify the stack
	 *    operation . For example, if you create a stack using the console, each stack event would be
	 *    assigned the same token in the following format:
	 *     <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
	 * @public
	 */
	ClientRequestToken?: string | undefined;
	/**
	 * <p>The name of the Hook.</p>
	 * @public
	 */
	HookType?: string | undefined;
	/**
	 * <p>Provides the status of the change set Hook.</p>
	 * @public
	 */
	HookStatus?: HookStatus | undefined;
	/**
	 * <p>Provides the reason for the Hook status.</p>
	 * @public
	 */
	HookStatusReason?: string | undefined;
	/**
	 * <p>The specific point in the provisioning process where the Hook is invoked.</p>
	 * @public
	 */
	HookInvocationPoint?: HookInvocationPoint | undefined;
	/**
	 * <p>The unique identifier of the Hook invocation.</p>
	 * @public
	 */
	HookInvocationId?: string | undefined;
	/**
	 * <p>Specify the Hook failure mode for non-compliant resources in the followings ways.</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>FAIL</code> Stops provisioning resources.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>WARN</code> Allows provisioning to continue with a warning message.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	HookFailureMode?: HookFailureMode | undefined;
	/**
	 * <p>An optional field that contains information about the detailed status of the stack
	 *    event.</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>CONFIGURATION_COMPLETE</code> - all of the resources in the stack have reached that
	 *      event. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html">Understand
	 *       CloudFormation stack creation events</a> in the <i>CloudFormation User Guide</i>.</p>
	 *             </li>
	 *          </ul>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>VALIDATION_FAILED</code> - template validation failed because of invalid properties
	 *      in the template. The <code>ResourceStatusReason</code> field shows what properties are defined
	 *      incorrectly.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	DetailedStatus?: DetailedStatus | undefined;
}
interface DescribeStackEventsOutput {
	/**
	 * <p>A list of <code>StackEvents</code> structures.</p>
	 * @public
	 */
	StackEvents?: StackEvent[] | undefined;
	/**
	 * <p>If the output exceeds 1 MB in size, a string that identifies the next page of events. If
	 *       no additional page exists, this value is null.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface StackResourceDriftInformation {
	/**
	 * <p>Status of the resource's actual configuration compared to its expected configuration</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>DELETED</code>: The resource differs from its expected configuration in that it has
	 *      been deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>MODIFIED</code>: The resource differs from its expected configuration.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the resource differs from its
	 *      expected configuration.</p>
	 *                <p>Any resources that do not currently support drift detection have a status of
	 *       <code>NOT_CHECKED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource
	 *       type support for imports and drift detection</a>.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected
	 *      configuration.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	StackResourceDriftStatus: StackResourceDriftStatus | undefined;
	/**
	 * <p>When CloudFormation last checked if the resource had drifted from its expected
	 *    configuration.</p>
	 * @public
	 */
	LastCheckTimestamp?: Date | undefined;
}
interface StackResource {
	/**
	 * <p>The name associated with the stack.</p>
	 * @public
	 */
	StackName?: string | undefined;
	/**
	 * <p>Unique identifier of the stack.</p>
	 * @public
	 */
	StackId?: string | undefined;
	/**
	 * <p>The logical name of the resource specified in the template.</p>
	 * @public
	 */
	LogicalResourceId: string | undefined;
	/**
	 * <p>The name or unique identifier that corresponds to a physical instance ID of a resource
	 *    supported by CloudFormation.</p>
	 * @public
	 */
	PhysicalResourceId?: string | undefined;
	/**
	 * <p>Type of resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
	 *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	ResourceType: string | undefined;
	/**
	 * <p>Time the status was updated.</p>
	 * @public
	 */
	Timestamp: Date | undefined;
	/**
	 * <p>Current status of the resource.</p>
	 * @public
	 */
	ResourceStatus: ResourceStatus | undefined;
	/**
	 * <p>Success/failure message associated with the resource.</p>
	 * @public
	 */
	ResourceStatusReason?: string | undefined;
	/**
	 * <p>User defined description associated with the resource.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>Information about whether the resource's actual configuration differs, or has
	 *     <i>drifted</i>, from its expected configuration, as defined in the stack template
	 *    and any values specified as template parameters. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect
	 *     unmanaged configuration changes to stacks and resources with drift detection</a>.</p>
	 * @public
	 */
	DriftInformation?: StackResourceDriftInformation | undefined;
	/**
	 * <p>Contains information about the module from which the resource was created, if the resource
	 *    was created from a module included in the stack template.</p>
	 * @public
	 */
	ModuleInfo?: ModuleInfo | undefined;
}
interface DescribeStackResourcesOutput {
	/**
	 * <p>A list of <code>StackResource</code> structures.</p>
	 * @public
	 */
	StackResources?: StackResource[] | undefined;
}
interface StackDriftInformation {
	/**
	 * <p>Status of the stack's actual configuration compared to its expected template
	 *    configuration.</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>DRIFTED</code>: The stack differs from its expected template configuration. A stack
	 *      is considered to have drifted if one or more of its resources have drifted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack differs from its expected
	 *      template configuration.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected template
	 *      configuration.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>UNKNOWN</code>: CloudFormation could not run drift detection for a resource in the
	 *      stack.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	StackDriftStatus: StackDriftStatus | undefined;
	/**
	 * <p>Most recent time when a drift detection operation was initiated on the stack, or any of its
	 *    individual resources that support drift detection.</p>
	 * @public
	 */
	LastCheckTimestamp?: Date | undefined;
}
interface OperationEntry {
	/**
	 * <p>The type of operation.</p>
	 * @public
	 */
	OperationType?: OperationType | undefined;
	/**
	 * <p>The unique identifier for the operation.</p>
	 * @public
	 */
	OperationId?: string | undefined;
}
interface Output {
	/**
	 * <p>The key associated with the output.</p>
	 * @public
	 */
	OutputKey?: string | undefined;
	/**
	 * <p>The value associated with the output.</p>
	 * @public
	 */
	OutputValue?: string | undefined;
	/**
	 * <p>User defined description associated with the output.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The name of the export associated with the output.</p>
	 * @public
	 */
	ExportName?: string | undefined;
}
interface Stack {
	/**
	 * <p>Unique identifier of the stack.</p>
	 * @public
	 */
	StackId?: string | undefined;
	/**
	 * <p>The name associated with the stack.</p>
	 * @public
	 */
	StackName: string | undefined;
	/**
	 * <p>The unique ID of the change set.</p>
	 * @public
	 */
	ChangeSetId?: string | undefined;
	/**
	 * <p>A user-defined description associated with the stack.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>A list of <code>Parameter</code> structures.</p>
	 * @public
	 */
	Parameters?: Parameter[] | undefined;
	/**
	 * <p>The time at which the stack was created.</p>
	 * @public
	 */
	CreationTime: Date | undefined;
	/**
	 * <p>The time the stack was deleted.</p>
	 * @public
	 */
	DeletionTime?: Date | undefined;
	/**
	 * <p>The time the stack was last updated. This field will only be returned if the stack has been
	 *    updated at least once.</p>
	 * @public
	 */
	LastUpdatedTime?: Date | undefined;
	/**
	 * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating
	 *    operations, and for the specified monitoring period afterwards.</p>
	 * @public
	 */
	RollbackConfiguration?: RollbackConfiguration | undefined;
	/**
	 * <p>Current status of the stack.</p>
	 * @public
	 */
	StackStatus: StackStatus | undefined;
	/**
	 * <p>Success/failure message associated with the stack status.</p>
	 * @public
	 */
	StackStatusReason?: string | undefined;
	/**
	 * <p>Boolean to enable or disable rollback on stack creation failures:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>true</code>: disable rollback.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>false</code>: enable rollback.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	DisableRollback?: boolean | undefined;
	/**
	 * <p>The deployment configuration for the stack, including the deployment mode used for stack
	 *    operations.</p>
	 * @public
	 */
	DeploymentConfig?: DeploymentConfig | undefined;
	/**
	 * <p>Amazon SNS topic Amazon Resource Names (ARNs) to which stack related events are published.</p>
	 * @public
	 */
	NotificationARNs?: string[] | undefined;
	/**
	 * <p>The amount of time within which stack creation should complete.</p>
	 * @public
	 */
	TimeoutInMinutes?: number | undefined;
	/**
	 * <p>The capabilities allowed in the stack.</p>
	 * @public
	 */
	Capabilities?: Capability[] | undefined;
	/**
	 * <p>A list of output structures.</p>
	 * @public
	 */
	Outputs?: Output[] | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of an IAM role that's associated with the stack. During a
	 *    stack operation, CloudFormation uses this role's credentials to make calls on your behalf.</p>
	 * @public
	 */
	RoleARN?: string | undefined;
	/**
	 * <p>A list of <code>Tag</code>s that specify information about the stack.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
	/**
	 * <p>Whether termination protection is enabled for the stack.</p>
	 *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
	 *    termination protection is set on the root stack and can't be changed directly on the nested
	 *    stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protect a CloudFormation
	 *     stack from being deleted</a> in the <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	EnableTerminationProtection?: boolean | undefined;
	/**
	 * <p>For nested stacks, the stack ID of the direct parent of this stack. For the first level of
	 *    nested stacks, the root stack is also the parent stack.</p>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Nested stacks</a> in
	 *    the <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	ParentId?: string | undefined;
	/**
	 * <p>For nested stacks, the stack ID of the top-level stack to which the nested stack ultimately
	 *    belongs.</p>
	 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Nested stacks</a> in
	 *    the <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	RootId?: string | undefined;
	/**
	 * <p>Information about whether a stack's actual configuration differs, or has
	 *     <i>drifted</i>, from its expected configuration, as defined in the stack template
	 *    and any values specified as template parameters. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect
	 *     unmanaged configuration changes to stacks and resources with drift detection</a>.</p>
	 * @public
	 */
	DriftInformation?: StackDriftInformation | undefined;
	/**
	 * <p>When set to <code>true</code>, newly created resources are deleted when the operation rolls
	 *    back. This includes newly created resources marked with a deletion policy of
	 *    <code>Retain</code>.</p>
	 *          <p>Default: <code>false</code>
	 *          </p>
	 * @public
	 */
	RetainExceptOnCreate?: boolean | undefined;
	/**
	 * <p>Specifies the deletion mode for the stack. Possible values are:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>STANDARD</code> - Use the standard behavior. Specifying this value is the same as
	 *      not specifying this parameter.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>FORCE_DELETE_STACK</code> - Delete the stack if it's stuck in a
	 *       <code>DELETE_FAILED</code> state due to resource deletion failure.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	DeletionMode?: DeletionMode | undefined;
	/**
	 * <p>The detailed status of the resource or stack. If <code>CONFIGURATION_COMPLETE</code> is
	 *    present, the resource or resource configuration phase has completed and the stabilization of the
	 *    resources is in progress. The StackSets <code>CONFIGURATION_COMPLETE</code> when all of the
	 *    resources in the stack have reached that event. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html">Understand
	 *     CloudFormation stack creation events</a> in the <i>CloudFormation User Guide</i>.</p>
	 * @public
	 */
	DetailedStatus?: DetailedStatus | undefined;
	/**
	 * <p>Information about the most recent operations performed on this stack.</p>
	 * @public
	 */
	LastOperations?: OperationEntry[] | undefined;
}
interface DescribeStacksOutput {
	/**
	 * <p>A list of stack structures.</p>
	 * @public
	 */
	Stacks?: Stack[] | undefined;
	/**
	 * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If
	 *       no additional page exists, this value is null.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface StackResourceDriftInformationSummary {
	/**
	 * <p>Status of the resource's actual configuration compared to its expected configuration.</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>DELETED</code>: The resource differs from its expected configuration in that it has
	 *      been deleted.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>MODIFIED</code>: The resource differs from its expected configuration.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the resource differs from its
	 *      expected configuration.</p>
	 *                <p>Any resources that don't currently support drift detection have a status of
	 *       <code>NOT_CHECKED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource
	 *       type support for imports and drift detection</a>. If you performed an <a>ContinueUpdateRollback</a> operation on a stack, any resources included in
	 *       <code>ResourcesToSkip</code> will also have a status of <code>NOT_CHECKED</code>. For more
	 *      information about skipping resources during rollback operations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html">Continue rolling back an update</a> in the <i>CloudFormation User Guide</i>.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected
	 *      configuration.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	StackResourceDriftStatus: StackResourceDriftStatus | undefined;
	/**
	 * <p>When CloudFormation last checked if the resource had drifted from its expected
	 *    configuration.</p>
	 * @public
	 */
	LastCheckTimestamp?: Date | undefined;
}
interface StackResourceSummary {
	/**
	 * <p>The logical name of the resource specified in the template.</p>
	 * @public
	 */
	LogicalResourceId: string | undefined;
	/**
	 * <p>The name or unique identifier that corresponds to a physical instance ID of the
	 *    resource.</p>
	 * @public
	 */
	PhysicalResourceId?: string | undefined;
	/**
	 * <p>Type of resource. (For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
	 *     property types reference</a> in the <i>CloudFormation User Guide</i>.)</p>
	 * @public
	 */
	ResourceType: string | undefined;
	/**
	 * <p>Time the status was updated.</p>
	 * @public
	 */
	LastUpdatedTimestamp: Date | undefined;
	/**
	 * <p>Current status of the resource.</p>
	 * @public
	 */
	ResourceStatus: ResourceStatus | undefined;
	/**
	 * <p>Success/failure message associated with the resource.</p>
	 * @public
	 */
	ResourceStatusReason?: string | undefined;
	/**
	 * <p>Information about whether the resource's actual configuration differs, or has
	 *     <i>drifted</i>, from its expected configuration, as defined in the stack template
	 *    and any values specified as template parameters. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect
	 *     unmanaged configuration changes to stacks and resources with drift detection</a>.</p>
	 * @public
	 */
	DriftInformation?: StackResourceDriftInformationSummary | undefined;
	/**
	 * <p>Contains information about the module from which the resource was created, if the resource
	 *    was created from a module included in the stack template.</p>
	 * @public
	 */
	ModuleInfo?: ModuleInfo | undefined;
}
interface ListStackResourcesOutput {
	/**
	 * <p>A list of <code>StackResourceSummary</code> structures.</p>
	 * @public
	 */
	StackResourceSummaries?: StackResourceSummary[] | undefined;
	/**
	 * <p>If the output exceeds 1 MB, a string that identifies the next page of stack resources. If
	 *       no additional page exists, this value is null.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface UpdateStackOutput {
	/**
	 * <p>Unique identifier of the stack.</p>
	 * @public
	 */
	StackId?: string | undefined;
	/**
	 * <p>A unique identifier for this update operation that can be used to track the operation's
	 *       progress and events.</p>
	 * @public
	 */
	OperationId?: string | undefined;
}
interface UpdateTerminationProtectionOutput {
	/**
	 * <p>The unique ID of the stack.</p>
	 * @public
	 */
	StackId?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link CreateStackCommand}.
 */
export interface CreateStackCommandOutput extends CreateStackOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteStackCommand}.
 */
export interface DeleteStackCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeStackEventsCommand}.
 */
export interface DescribeStackEventsCommandOutput extends DescribeStackEventsOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeStackResourcesCommand}.
 */
export interface DescribeStackResourcesCommandOutput extends DescribeStackResourcesOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandOutput extends DescribeStacksOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListStackResourcesCommand}.
 */
export interface ListStackResourcesCommandOutput extends ListStackResourcesOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateStackCommand}.
 */
export interface UpdateStackCommandOutput extends UpdateStackOutput, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateTerminationProtectionCommand}.
 */
export interface UpdateTerminationProtectionCommandOutput extends UpdateTerminationProtectionOutput, MetadataBearer {
}

export {};
