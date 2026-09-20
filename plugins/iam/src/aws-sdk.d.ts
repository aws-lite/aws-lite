// Generated from @aws-sdk/client-iam@3.1136.0 by npm run gen. Do not edit.
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
declare const AccessAdvisorUsageGranularityType: {
	readonly ACTION_LEVEL: "ACTION_LEVEL";
	readonly SERVICE_LEVEL: "SERVICE_LEVEL";
};
type AccessAdvisorUsageGranularityType = (typeof AccessAdvisorUsageGranularityType)[keyof typeof AccessAdvisorUsageGranularityType];
declare const StatusType: {
	readonly Active: "Active";
	readonly Expired: "Expired";
	readonly Inactive: "Inactive";
};
type StatusType = (typeof StatusType)[keyof typeof StatusType];
declare const PermissionsBoundaryAttachmentType: {
	readonly Policy: "PermissionsBoundaryPolicy";
};
type PermissionsBoundaryAttachmentType = (typeof PermissionsBoundaryAttachmentType)[keyof typeof PermissionsBoundaryAttachmentType];
declare const ReportStateType: {
	readonly COMPLETE: "COMPLETE";
	readonly INPROGRESS: "INPROGRESS";
	readonly STARTED: "STARTED";
};
type ReportStateType = (typeof ReportStateType)[keyof typeof ReportStateType];
declare const SummaryKeyType: {
	readonly AccessKeysPerUserQuota: "AccessKeysPerUserQuota";
	readonly AccountAccessKeysPresent: "AccountAccessKeysPresent";
	readonly AccountMFAEnabled: "AccountMFAEnabled";
	readonly AccountPasswordPresent: "AccountPasswordPresent";
	readonly AccountSigningCertificatesPresent: "AccountSigningCertificatesPresent";
	readonly AssumeRolePolicySizeQuota: "AssumeRolePolicySizeQuota";
	readonly AttachedPoliciesPerGroupQuota: "AttachedPoliciesPerGroupQuota";
	readonly AttachedPoliciesPerRoleQuota: "AttachedPoliciesPerRoleQuota";
	readonly AttachedPoliciesPerUserQuota: "AttachedPoliciesPerUserQuota";
	readonly GlobalEndpointTokenVersion: "GlobalEndpointTokenVersion";
	readonly GroupPolicySizeQuota: "GroupPolicySizeQuota";
	readonly Groups: "Groups";
	readonly GroupsPerUserQuota: "GroupsPerUserQuota";
	readonly GroupsQuota: "GroupsQuota";
	readonly InstanceProfiles: "InstanceProfiles";
	readonly InstanceProfilesQuota: "InstanceProfilesQuota";
	readonly MFADevices: "MFADevices";
	readonly MFADevicesInUse: "MFADevicesInUse";
	readonly Policies: "Policies";
	readonly PoliciesQuota: "PoliciesQuota";
	readonly PolicySizeQuota: "PolicySizeQuota";
	readonly PolicyVersionsInUse: "PolicyVersionsInUse";
	readonly PolicyVersionsInUseQuota: "PolicyVersionsInUseQuota";
	readonly Providers: "Providers";
	readonly RolePolicySizeQuota: "RolePolicySizeQuota";
	readonly Roles: "Roles";
	readonly RolesQuota: "RolesQuota";
	readonly ServerCertificates: "ServerCertificates";
	readonly ServerCertificatesQuota: "ServerCertificatesQuota";
	readonly SigningCertificatesPerUserQuota: "SigningCertificatesPerUserQuota";
	readonly UserPolicySizeQuota: "UserPolicySizeQuota";
	readonly Users: "Users";
	readonly UsersQuota: "UsersQuota";
	readonly VersionsPerPolicyQuota: "VersionsPerPolicyQuota";
};
type SummaryKeyType = (typeof SummaryKeyType)[keyof typeof SummaryKeyType];
declare const ReportFormatType: {
	readonly text_csv: "text/csv";
};
type ReportFormatType = (typeof ReportFormatType)[keyof typeof ReportFormatType];
declare const JobStatusType: {
	readonly COMPLETED: "COMPLETED";
	readonly FAILED: "FAILED";
	readonly IN_PROGRESS: "IN_PROGRESS";
};
type JobStatusType = (typeof JobStatusType)[keyof typeof JobStatusType];
declare const PolicyOwnerEntityType: {
	readonly GROUP: "GROUP";
	readonly ROLE: "ROLE";
	readonly USER: "USER";
};
type PolicyOwnerEntityType = (typeof PolicyOwnerEntityType)[keyof typeof PolicyOwnerEntityType];
declare const PolicyType: {
	readonly INLINE: "INLINE";
	readonly MANAGED: "MANAGED";
};
type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
declare const PolicyEvaluationDecisionType: {
	readonly ALLOWED: "allowed";
	readonly EXPLICIT_DENY: "explicitDeny";
	readonly IMPLICIT_DENY: "implicitDeny";
};
type PolicyEvaluationDecisionType = (typeof PolicyEvaluationDecisionType)[keyof typeof PolicyEvaluationDecisionType];
declare const PolicySourceType: {
	readonly AWS_MANAGED: "aws-managed";
	readonly GROUP: "group";
	readonly NONE: "none";
	readonly RESOURCE: "resource";
	readonly ROLE: "role";
	readonly USER: "user";
	readonly USER_MANAGED: "user-managed";
};
type PolicySourceType = (typeof PolicySourceType)[keyof typeof PolicySourceType];
interface AccessDetail {
	/**
	 * <p>The name of the service in which access was attempted.</p>
	 * @public
	 */
	ServiceName: string | undefined;
	/**
	 * <p>The namespace of the service in which access was attempted.</p>
	 *          <p>To learn the service namespace of a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
	 *             <i>Service Authorization Reference</i>. Choose the name of the service to
	 *          view details for that service. In the first paragraph, find the service prefix. For
	 *          example, <code>(service prefix: a4b)</code>. For more information about service namespaces,
	 *          see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
	 *             service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
	 * @public
	 */
	ServiceNamespace: string | undefined;
	/**
	 * <p>The Region where the last service access attempt occurred.</p>
	 *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
	 *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	Region?: string | undefined;
	/**
	 * <p>The path of the Organizations entity (root, organizational unit, or account) from which an
	 *          authenticated principal last attempted to access the service. Amazon Web Services does not report
	 *          unauthenticated requests.</p>
	 *          <p>This field is null if no principals (IAM users, IAM roles, or root user) in the
	 *          reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	EntityPath?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when an authenticated principal most recently attempted to access the
	 *          service. Amazon Web Services does not report unauthenticated requests.</p>
	 *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
	 *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	LastAuthenticatedTime?: Date | undefined;
	/**
	 * <p>The number of accounts with authenticated principals (root user, IAM users, and IAM
	 *          roles) that attempted to access the service in the tracking period.</p>
	 * @public
	 */
	TotalAuthenticatedEntities?: number | undefined;
}
interface AccessKey {
	/**
	 * <p>The name of the IAM user that the access key is associated with.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The ID for this access key.</p>
	 * @public
	 */
	AccessKeyId: string | undefined;
	/**
	 * <p>The status of the access key. <code>Active</code> means that the key is valid for API
	 *          calls, while <code>Inactive</code> means it is not. </p>
	 * @public
	 */
	Status: StatusType | undefined;
	/**
	 * <p>The secret key used to sign requests.</p>
	 * @public
	 */
	SecretAccessKey: string | undefined;
	/**
	 * <p>The date when the access key was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
}
interface AccessKeyLastUsed {
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the access key was most recently used. This field is null in the
	 *          following situations:</p>
	 *          <ul>
	 *             <li>
	 *                <p>The user does not have an access key.</p>
	 *             </li>
	 *             <li>
	 *                <p>An access key exists but has not been used since IAM began tracking this
	 *                information.</p>
	 *             </li>
	 *             <li>
	 *                <p>There is no sign-in data associated with the user.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	LastUsedDate?: Date | undefined;
	/**
	 * <p>The name of the Amazon Web Services service with which this access key was most recently used. The
	 *          value of this field is "N/A" in the following situations:</p>
	 *          <ul>
	 *             <li>
	 *                <p>The user does not have an access key.</p>
	 *             </li>
	 *             <li>
	 *                <p>An access key exists but has not been used since IAM started tracking this
	 *                information.</p>
	 *             </li>
	 *             <li>
	 *                <p>There is no sign-in data associated with the user.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	ServiceName: string | undefined;
	/**
	 * <p>The Amazon Web Services Region where this access key was most recently used. The value for this field
	 *          is "N/A" in the following situations:</p>
	 *          <ul>
	 *             <li>
	 *                <p>The user does not have an access key.</p>
	 *             </li>
	 *             <li>
	 *                <p>An access key exists but has not been used since IAM began tracking this
	 *                information.</p>
	 *             </li>
	 *             <li>
	 *                <p>There is no sign-in data associated with the user.</p>
	 *             </li>
	 *          </ul>
	 *          <p>For more information about Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and endpoints</a> in the Amazon Web Services
	 *          General Reference.</p>
	 * @public
	 */
	Region: string | undefined;
}
interface AccessKeyMetadata {
	/**
	 * <p>The name of the IAM user that the key is associated with.</p>
	 * @public
	 */
	UserName?: string | undefined;
	/**
	 * <p>The ID for this access key.</p>
	 * @public
	 */
	AccessKeyId?: string | undefined;
	/**
	 * <p>The status of the access key. <code>Active</code> means that the key is valid for API
	 *          calls; <code>Inactive</code> means it is not.</p>
	 * @public
	 */
	Status?: StatusType | undefined;
	/**
	 * <p>The date when the access key was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
}
interface AttachedPermissionsBoundary {
	/**
	 * <p> The permissions boundary usage type that indicates what type of IAM resource is used
	 *          as the permissions boundary for an entity. This data type can only have a value of
	 *             <code>Policy</code>.</p>
	 * @public
	 */
	PermissionsBoundaryType?: PermissionsBoundaryAttachmentType | undefined;
	/**
	 * <p> The ARN of the policy used to set the permissions boundary for the user or role.</p>
	 * @public
	 */
	PermissionsBoundaryArn?: string | undefined;
}
interface RoleLastUsed {
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a> that the role was last used.</p>
	 *          <p>This field is null if the role has not been used within the IAM tracking period. For
	 *          more information about the tracking period, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM User Guide</i>.
	 *       </p>
	 * @public
	 */
	LastUsedDate?: Date | undefined;
	/**
	 * <p>The name of the Amazon Web Services Region in which the role was last used.</p>
	 * @public
	 */
	Region?: string | undefined;
}
interface SourceRoleTemplate {
	/**
	 * <p>The Amazon Resource Name (ARN) of the role template that the role was created
	 *          from.</p>
	 * @public
	 */
	TemplateArn: string | undefined;
	/**
	 * <p>The minor version of the role template that was used to create the role.</p>
	 * @public
	 */
	TemplateMinorVersion: number | undefined;
}
interface Tag {
	/**
	 * <p>The key name that can be used to look up or retrieve the associated value. For example,
	 *         <code>Department</code> or <code>Cost Center</code> are common choices.</p>
	 * @public
	 */
	Key: string | undefined;
	/**
	 * <p>The value associated with this tag. For example, tags with a key name of
	 *         <code>Department</code> could have values such as <code>Human Resources</code>,
	 *         <code>Accounting</code>, and <code>Support</code>. Tags with a key name of <code>Cost
	 *         Center</code> might have values that consist of the number associated with the different
	 *       cost centers in your company. Typically, many resources have tags with the same key name but
	 *       with different values.</p>
	 * @public
	 */
	Value: string | undefined;
}
interface Role {
	/**
	 * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Path: string | undefined;
	/**
	 * <p>The friendly name that identifies the role.</p>
	 * @public
	 */
	RoleName: string | undefined;
	/**
	 * <p> The stable and unique string identifying the role. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	RoleId: string | undefined;
	/**
	 * <p> The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and
	 *          how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i> guide. </p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the role was created.</p>
	 * @public
	 */
	CreateDate: Date | undefined;
	/**
	 * <p>The policy that grants an entity permission to assume the role.</p>
	 * @public
	 */
	AssumeRolePolicyDocument?: string | undefined;
	/**
	 * <p>A description of the role that you provide.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The maximum session duration (in seconds) for the specified role. Anyone who uses the
	 *          CLI, or API to assume the role can specify the duration using the optional
	 *             <code>DurationSeconds</code> API parameter or <code>duration-seconds</code> CLI
	 *          parameter.</p>
	 * @public
	 */
	MaxSessionDuration?: number | undefined;
	/**
	 * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
	 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
	 *             identities </a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
	/**
	 * <p>A list of tags that are attached to the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
	/**
	 * <p>Contains information about the last time that an IAM role was used. This includes the
	 *          date and time and the Region in which the role was last used. Activity is only reported for
	 *          the trailing 400 days. This period can be shorter if your Region began supporting these
	 *          features within the last year. The role might have been used more than 400 days ago. For
	 *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM user
	 *          Guide</i>.</p>
	 * @public
	 */
	RoleLastUsed?: RoleLastUsed | undefined;
	/**
	 * <p>Contains information about the role template that this role was created from. This
	 *          member is present only for roles created with <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AcquireRole.html">AcquireRole</a>.</p>
	 * @public
	 */
	SourceRoleTemplate?: SourceRoleTemplate | undefined;
}
interface AttachedPolicy {
	/**
	 * <p>The friendly name of the attached policy.</p>
	 * @public
	 */
	PolicyName?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	PolicyArn?: string | undefined;
}
interface CreateAccessKeyResponse {
	/**
	 * <p>A structure with details about the access key.</p>
	 * @public
	 */
	AccessKey: AccessKey | undefined;
}
interface Group {
	/**
	 * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Path: string | undefined;
	/**
	 * <p>The friendly name that identifies the group.</p>
	 * @public
	 */
	GroupName: string | undefined;
	/**
	 * <p> The stable and unique string identifying the group. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	GroupId: string | undefined;
	/**
	 * <p> The Amazon Resource Name (ARN) specifying the group. For more information about ARNs
	 *          and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the group was created.</p>
	 * @public
	 */
	CreateDate: Date | undefined;
}
interface CreateGroupResponse {
	/**
	 * <p>A structure containing details about the new group.</p>
	 * @public
	 */
	Group: Group | undefined;
}
interface InstanceProfile {
	/**
	 * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Path: string | undefined;
	/**
	 * <p>The name identifying the instance profile.</p>
	 * @public
	 */
	InstanceProfileName: string | undefined;
	/**
	 * <p> The stable and unique string identifying the instance profile. For more information
	 *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	InstanceProfileId: string | undefined;
	/**
	 * <p> The Amazon Resource Name (ARN) specifying the instance profile. For more information
	 *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The date when the instance profile was created.</p>
	 * @public
	 */
	CreateDate: Date | undefined;
	/**
	 * <p>The role associated with the instance profile.</p>
	 * @public
	 */
	Roles: Role[] | undefined;
	/**
	 * <p>A list of tags that are attached to the instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface CreateInstanceProfileResponse {
	/**
	 * <p>A structure containing details about the new instance profile.</p>
	 * @public
	 */
	InstanceProfile: InstanceProfile | undefined;
}
interface LoginProfile {
	/**
	 * <p>The name of the user, which can be used for signing in to the Amazon Web Services Management Console.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The date when the password for the user was created.</p>
	 * @public
	 */
	CreateDate: Date | undefined;
	/**
	 * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
	 * @public
	 */
	PasswordResetRequired?: boolean | undefined;
}
interface CreateLoginProfileResponse {
	/**
	 * <p>A structure containing the user name and password create date.</p>
	 * @public
	 */
	LoginProfile: LoginProfile | undefined;
}
interface CreateOpenIDConnectProviderResponse {
	/**
	 * <p>The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is
	 *             created. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_OpenIDConnectProviderListEntry.html">OpenIDConnectProviderListEntry</a>. </p>
	 * @public
	 */
	OpenIDConnectProviderArn?: string | undefined;
	/**
	 * <p>A list of tags that are attached to the new IAM OIDC provider. The returned list of
	 *       tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface Policy {
	/**
	 * <p>The friendly name (not ARN) identifying the policy.</p>
	 * @public
	 */
	PolicyName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the policy.</p>
	 *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PolicyId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	Arn?: string | undefined;
	/**
	 * <p>The path to the policy.</p>
	 *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Path?: string | undefined;
	/**
	 * <p>The identifier for the version of the policy that is set as the default version.</p>
	 * @public
	 */
	DefaultVersionId?: string | undefined;
	/**
	 * <p>The number of entities (users, groups, and roles) that the policy is attached to.</p>
	 * @public
	 */
	AttachmentCount?: number | undefined;
	/**
	 * <p>The number of entities (users and roles) for which the policy is used to set the
	 *          permissions boundary. </p>
	 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
	 *             identities </a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PermissionsBoundaryUsageCount?: number | undefined;
	/**
	 * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
	 * @public
	 */
	IsAttachable?: boolean | undefined;
	/**
	 * <p>A friendly description of the policy.</p>
	 *          <p>This element is included in the response to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html">GetPolicy</a> operation. It is not
	 *          included in the response to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html">ListPolicies</a> operation.
	 *       </p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the policy was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the policy was last updated.</p>
	 *          <p>When a policy has only one version, this field contains the date and time when the
	 *          policy was created. When a policy has more than one version, this field contains the date
	 *          and time when the most recent policy version was created.</p>
	 * @public
	 */
	UpdateDate?: Date | undefined;
	/**
	 * <p>A list of tags that are attached to the instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface CreatePolicyResponse {
	/**
	 * <p>A structure containing details about the new policy.</p>
	 * @public
	 */
	Policy?: Policy | undefined;
}
interface PolicyVersion {
	/**
	 * <p>The policy document.</p>
	 *          <p>The policy document is returned in the response to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html">GetPolicyVersion</a> and
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operations. It is not returned in the response
	 *          to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html">CreatePolicyVersion</a>
	 *          or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html">ListPolicyVersions</a> operations. </p>
	 *          <p>The policy document returned in this structure is URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding
	 *          method to convert the policy back to plain JSON text. For example, if you use Java, you can
	 *          use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
	 *          the Java SDK. Other languages and SDKs provide similar functionality.</p>
	 * @public
	 */
	Document?: string | undefined;
	/**
	 * <p>The identifier for the policy version.</p>
	 *          <p>Policy version identifiers always begin with <code>v</code> (always lowercase). When a
	 *          policy is created, the first policy version is <code>v1</code>. </p>
	 * @public
	 */
	VersionId?: string | undefined;
	/**
	 * <p>Specifies whether the policy version is set as the policy's default version.</p>
	 * @public
	 */
	IsDefaultVersion?: boolean | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the policy version was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
}
interface CreatePolicyVersionResponse {
	/**
	 * <p>A structure containing details about the new policy version.</p>
	 * @public
	 */
	PolicyVersion?: PolicyVersion | undefined;
}
interface CreateRoleResponse {
	/**
	 * <p>A structure containing details about the new role.</p>
	 * @public
	 */
	Role: Role | undefined;
}
interface CreateServiceLinkedRoleResponse {
	/**
	 * <p>A <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_Role.html">Role</a>
	 *             object that contains details about the newly created role.</p>
	 * @public
	 */
	Role?: Role | undefined;
}
interface ServiceSpecificCredential {
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the service-specific credential were created.</p>
	 * @public
	 */
	CreateDate: Date | undefined;
	/**
	 * <p>The date and time when the service specific credential expires. This field is only
	 *          present for Bedrock API keys and CloudWatch Logs API keys that were created with an expiration period.</p>
	 * @public
	 */
	ExpirationDate?: Date | undefined;
	/**
	 * <p>The name of the service associated with the service-specific credential.</p>
	 * @public
	 */
	ServiceName: string | undefined;
	/**
	 * <p>The generated user name for the service-specific credential. This value is generated by
	 *          combining the IAM user's name combined with the ID number of the Amazon Web Services account, as in
	 *             <code>jane-at-123456789012</code>, for example. This value cannot be configured by the
	 *          user.</p>
	 * @public
	 */
	ServiceUserName?: string | undefined;
	/**
	 * <p>The generated password for the service-specific credential.</p>
	 * @public
	 */
	ServicePassword?: string | undefined;
	/**
	 * <p>For Bedrock API keys and CloudWatch Logs API keys, this is the public portion of the credential that includes the IAM
	 *          user name and a suffix containing version and creation information.</p>
	 * @public
	 */
	ServiceCredentialAlias?: string | undefined;
	/**
	 * <p>For Bedrock API keys and CloudWatch Logs API keys, this is the secret portion of the credential that should be used
	 *          to authenticate API calls. This value is returned only when the credential is
	 *          created.</p>
	 * @public
	 */
	ServiceCredentialSecret?: string | undefined;
	/**
	 * <p>The unique identifier for the service-specific credential.</p>
	 * @public
	 */
	ServiceSpecificCredentialId: string | undefined;
	/**
	 * <p>The name of the IAM user associated with the service-specific credential.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The status of the service-specific credential. <code>Active</code> means that the key is
	 *          valid for API calls, while <code>Inactive</code> means it is not.</p>
	 * @public
	 */
	Status: StatusType | undefined;
}
interface CreateServiceSpecificCredentialResponse {
	/**
	 * <p>A structure that contains information about the newly created service-specific
	 *             credential.</p>
	 *          <important>
	 *             <p>This is the only time that the password for this credential set is available. It
	 *                 cannot be recovered later. Instead, you must reset the password with <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html">ResetServiceSpecificCredential</a>.</p>
	 *          </important>
	 * @public
	 */
	ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}
interface User {
	/**
	 * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 *          <p>The ARN of the policy used to set the permissions boundary for the user.</p>
	 * @public
	 */
	Path: string | undefined;
	/**
	 * <p>The friendly name identifying the user.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The stable and unique string identifying the user. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	UserId: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs
	 *          and how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
	 *             <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the user was created.</p>
	 * @public
	 */
	CreateDate: Date | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the user's password was last used to sign in to an Amazon Web Services website.
	 *          For a list of Amazon Web Services websites that capture a user's last sign-in time, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Credential
	 *             reports</a> topic in the <i>IAM User Guide</i>. If a password is
	 *          used more than once in a five-minute span, only the first use is returned in this field. If
	 *          the field is null (no value), then it indicates that they never signed in with a password.
	 *          This can be because:</p>
	 *          <ul>
	 *             <li>
	 *                <p>The user never had a password.</p>
	 *             </li>
	 *             <li>
	 *                <p>A password exists but has not been used since IAM started tracking this
	 *                information on October 20, 2014.</p>
	 *             </li>
	 *          </ul>
	 *          <p>A null value does not mean that the user <i>never</i> had a password.
	 *          Also, if the user does not currently have a password but had one in the past, then this
	 *          field contains the date and time the most recent password was used.</p>
	 *          <p>This value is returned only in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html">GetUser</a> and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html">ListUsers</a>
	 *          operations. </p>
	 * @public
	 */
	PasswordLastUsed?: Date | undefined;
	/**
	 * <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
	 *             identities </a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
	/**
	 * <p>A list of tags that are associated with the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface CreateUserResponse {
	/**
	 * <p>A structure with details about the new IAM user.</p>
	 * @public
	 */
	User?: User | undefined;
}
interface VirtualMFADevice {
	/**
	 * <p>The serial number associated with <code>VirtualMFADevice</code>.</p>
	 * @public
	 */
	SerialNumber: string | undefined;
	/**
	 * <p> The base32 seed defined as specified in <a href="https://tools.ietf.org/html/rfc3548.txt">RFC3548</a>. The <code>Base32StringSeed</code> is base32-encoded. </p>
	 * @public
	 */
	Base32StringSeed?: Uint8Array | undefined;
	/**
	 * <p> A QR code PNG image that encodes
	 *             <code>otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String</code>
	 *          where <code>$virtualMFADeviceName</code> is one of the create call arguments.
	 *             <code>AccountName</code> is the user name if set (otherwise, the account ID otherwise),
	 *          and <code>Base32String</code> is the seed in base32 format. The <code>Base32String</code>
	 *          value is base64-encoded. </p>
	 * @public
	 */
	QRCodePNG?: Uint8Array | undefined;
	/**
	 * <p>The IAM user associated with this virtual MFA device.</p>
	 * @public
	 */
	User?: User | undefined;
	/**
	 * <p>The date and time on which the virtual MFA device was enabled.</p>
	 * @public
	 */
	EnableDate?: Date | undefined;
	/**
	 * <p>A list of tags that are attached to the virtual MFA device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface CreateVirtualMFADeviceResponse {
	/**
	 * <p>A structure containing details about the new virtual MFA device.</p>
	 * @public
	 */
	VirtualMFADevice: VirtualMFADevice | undefined;
}
interface DeleteServiceLinkedRoleResponse {
	/**
	 * <p>The deletion task identifier that you can use to check the status of the deletion.
	 *             This identifier is returned in the format
	 *                 <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
	 * @public
	 */
	DeletionTaskId: string | undefined;
}
interface GenerateCredentialReportResponse {
	/**
	 * <p>Information about the state of the credential report.</p>
	 * @public
	 */
	State?: ReportStateType | undefined;
	/**
	 * <p>Information about the credential report.</p>
	 * @public
	 */
	Description?: string | undefined;
}
interface GenerateOrganizationsAccessReportResponse {
	/**
	 * <p>The job identifier that you can use in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html">GetOrganizationsAccessReport</a> operation.</p>
	 * @public
	 */
	JobId?: string | undefined;
}
interface GenerateServiceLastAccessedDetailsResponse {
	/**
	 * <p>The <code>JobId</code> that you can use in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html">GetServiceLastAccessedDetailsWithEntities</a> operations. The
	 *                 <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must
	 *             be used by the same role within a session, or by the same user when used to call
	 *                 <code>GetServiceLastAccessedDetail</code>.</p>
	 * @public
	 */
	JobId?: string | undefined;
}
interface GetAccessKeyLastUsedResponse {
	/**
	 * <p>The name of the IAM user that owns this access key.</p>
	 *          <p></p>
	 * @public
	 */
	UserName?: string | undefined;
	/**
	 * <p>Contains information about the last time the access key was used.</p>
	 * @public
	 */
	AccessKeyLastUsed?: AccessKeyLastUsed | undefined;
}
interface PolicyDetail {
	/**
	 * <p>The name of the policy.</p>
	 * @public
	 */
	PolicyName?: string | undefined;
	/**
	 * <p>The policy document.</p>
	 * @public
	 */
	PolicyDocument?: string | undefined;
}
interface GroupDetail {
	/**
	 * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Path?: string | undefined;
	/**
	 * <p>The friendly name that identifies the group.</p>
	 * @public
	 */
	GroupName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the group. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	GroupId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	Arn?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the group was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
	/**
	 * <p>A list of the inline policies embedded in the group.</p>
	 * @public
	 */
	GroupPolicyList?: PolicyDetail[] | undefined;
	/**
	 * <p>A list of the managed policies attached to the group.</p>
	 * @public
	 */
	AttachedManagedPolicies?: AttachedPolicy[] | undefined;
}
interface ManagedPolicyDetail {
	/**
	 * <p>The friendly name (not ARN) identifying the policy.</p>
	 * @public
	 */
	PolicyName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the policy.</p>
	 *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PolicyId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	Arn?: string | undefined;
	/**
	 * <p>The path to the policy.</p>
	 *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Path?: string | undefined;
	/**
	 * <p>The identifier for the version of the policy that is set as the default (operative)
	 *          version.</p>
	 *          <p>For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
	 *             policies</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	DefaultVersionId?: string | undefined;
	/**
	 * <p>The number of principal entities (users, groups, and roles) that the policy is attached
	 *          to.</p>
	 * @public
	 */
	AttachmentCount?: number | undefined;
	/**
	 * <p>The number of entities (users and roles) for which the policy is used as the permissions
	 *          boundary. </p>
	 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
	 *             identities </a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PermissionsBoundaryUsageCount?: number | undefined;
	/**
	 * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
	 * @public
	 */
	IsAttachable?: boolean | undefined;
	/**
	 * <p>A friendly description of the policy.</p>
	 * @public
	 */
	Description?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the policy was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the policy was last updated.</p>
	 *          <p>When a policy has only one version, this field contains the date and time when the
	 *          policy was created. When a policy has more than one version, this field contains the date
	 *          and time when the most recent policy version was created.</p>
	 * @public
	 */
	UpdateDate?: Date | undefined;
	/**
	 * <p>A list containing information about the versions of the policy.</p>
	 * @public
	 */
	PolicyVersionList?: PolicyVersion[] | undefined;
}
interface RoleDetail {
	/**
	 * <p>The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Path?: string | undefined;
	/**
	 * <p>The friendly name that identifies the role.</p>
	 * @public
	 */
	RoleName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the role. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	RoleId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	Arn?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the role was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
	/**
	 * <p>The trust policy that grants permission to assume the role.</p>
	 * @public
	 */
	AssumeRolePolicyDocument?: string | undefined;
	/**
	 * <p>A list of instance profiles that contain this role.</p>
	 * @public
	 */
	InstanceProfileList?: InstanceProfile[] | undefined;
	/**
	 * <p>A list of inline policies embedded in the role. These policies are the role's access
	 *          (permissions) policies.</p>
	 * @public
	 */
	RolePolicyList?: PolicyDetail[] | undefined;
	/**
	 * <p>A list of managed policies attached to the role. These policies are the role's access
	 *          (permissions) policies.</p>
	 * @public
	 */
	AttachedManagedPolicies?: AttachedPolicy[] | undefined;
	/**
	 * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
	 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
	 *             identities </a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
	/**
	 * <p>A list of tags that are attached to the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
	/**
	 * <p>Contains information about the last time that an IAM role was used. This includes the
	 *          date and time and the Region in which the role was last used. Activity is only reported for
	 *          the trailing 400 days. This period can be shorter if your Region began supporting these
	 *          features within the last year. The role might have been used more than 400 days ago. For
	 *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the
	 *          <i>IAM User Guide</i>.</p>
	 * @public
	 */
	RoleLastUsed?: RoleLastUsed | undefined;
}
interface UserDetail {
	/**
	 * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Path?: string | undefined;
	/**
	 * <p>The friendly name identifying the user.</p>
	 * @public
	 */
	UserName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the user. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	UserId?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	Arn?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the user was created.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
	/**
	 * <p>A list of the inline policies embedded in the user.</p>
	 * @public
	 */
	UserPolicyList?: PolicyDetail[] | undefined;
	/**
	 * <p>A list of IAM groups that the user is in.</p>
	 * @public
	 */
	GroupList?: string[] | undefined;
	/**
	 * <p>A list of the managed policies attached to the user.</p>
	 * @public
	 */
	AttachedManagedPolicies?: AttachedPolicy[] | undefined;
	/**
	 * <p>The ARN of the policy used to set the permissions boundary for the user.</p>
	 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
	 *             identities </a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
	/**
	 * <p>A list of tags that are associated with the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface GetAccountAuthorizationDetailsResponse {
	/**
	 * <p>A list containing information about IAM users.</p>
	 * @public
	 */
	UserDetailList?: UserDetail[] | undefined;
	/**
	 * <p>A list containing information about IAM groups.</p>
	 * @public
	 */
	GroupDetailList?: GroupDetail[] | undefined;
	/**
	 * <p>A list containing information about IAM roles.</p>
	 * @public
	 */
	RoleDetailList?: RoleDetail[] | undefined;
	/**
	 * <p>A list containing information about managed policies.</p>
	 * @public
	 */
	Policies?: ManagedPolicyDetail[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface PasswordPolicy {
	/**
	 * <p>Minimum length to require for IAM user passwords.</p>
	 * @public
	 */
	MinimumPasswordLength?: number | undefined;
	/**
	 * <p>Specifies whether IAM user passwords must contain at least one of the following
	 *          symbols:</p>
	 *          <p>! @ # $ % ^ & * ( ) _ + - = [ ] \{ \} | '</p>
	 * @public
	 */
	RequireSymbols?: boolean | undefined;
	/**
	 * <p>Specifies whether IAM user passwords must contain at least one numeric character (0 to
	 *          9).</p>
	 * @public
	 */
	RequireNumbers?: boolean | undefined;
	/**
	 * <p>Specifies whether IAM user passwords must contain at least one uppercase character (A
	 *          to Z).</p>
	 * @public
	 */
	RequireUppercaseCharacters?: boolean | undefined;
	/**
	 * <p>Specifies whether IAM user passwords must contain at least one lowercase character (a
	 *          to z).</p>
	 * @public
	 */
	RequireLowercaseCharacters?: boolean | undefined;
	/**
	 * <p>Specifies whether IAM users are allowed to change their own password. Gives IAM
	 *          users permissions to <code>iam:ChangePassword</code> for only their user and to the
	 *             <code>iam:GetAccountPasswordPolicy</code> action. This option does not attach a
	 *          permissions policy to each user, rather the permissions are applied at the account-level
	 *          for all users by IAM.</p>
	 * @public
	 */
	AllowUsersToChangePassword?: boolean | undefined;
	/**
	 * <p>Indicates whether passwords in the account expire. Returns true if
	 *             <code>MaxPasswordAge</code> contains a value greater than 0. Returns false if
	 *          MaxPasswordAge is 0 or not present.</p>
	 * @public
	 */
	ExpirePasswords?: boolean | undefined;
	/**
	 * <p>The number of days that an IAM user password is valid.</p>
	 * @public
	 */
	MaxPasswordAge?: number | undefined;
	/**
	 * <p>Specifies the number of previous passwords that IAM users are prevented from
	 *          reusing.</p>
	 * @public
	 */
	PasswordReusePrevention?: number | undefined;
	/**
	 * <p>Specifies whether IAM users are prevented from setting a new password via the
	 *          Amazon Web Services Management Console after their password has expired. The IAM user cannot access the console until
	 *          an administrator resets the password. IAM users with <code>iam:ChangePassword</code>
	 *          permission and active access keys can reset their own expired console password using the
	 *          CLI or API.</p>
	 * @public
	 */
	HardExpiry?: boolean | undefined;
}
interface GetAccountPasswordPolicyResponse {
	/**
	 * <p>A structure that contains details about the account's password policy.</p>
	 * @public
	 */
	PasswordPolicy: PasswordPolicy | undefined;
}
interface GetAccountSummaryResponse {
	/**
	 * <p>A set of key–value pairs containing information about IAM entity usage and
	 *             IAM quotas.</p>
	 * @public
	 */
	SummaryMap?: Partial<Record<SummaryKeyType, number>> | undefined;
}
interface GetContextKeysForPolicyResponse {
	/**
	 * <p>The list of context keys that are referenced in the input policies.</p>
	 * @public
	 */
	ContextKeyNames?: string[] | undefined;
}
interface GetCredentialReportResponse {
	/**
	 * <p>Contains the credential report. The report is Base64-encoded.</p>
	 * @public
	 */
	Content?: Uint8Array | undefined;
	/**
	 * <p>The format (MIME type) of the credential report.</p>
	 * @public
	 */
	ReportFormat?: ReportFormatType | undefined;
	/**
	 * <p> The date and time when the credential report was created, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>.</p>
	 * @public
	 */
	GeneratedTime?: Date | undefined;
}
interface GetGroupResponse {
	/**
	 * <p>A structure that contains details about the group.</p>
	 * @public
	 */
	Group: Group | undefined;
	/**
	 * <p>A list of users in the group.</p>
	 * @public
	 */
	Users: User[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface GetGroupPolicyResponse {
	/**
	 * <p>The group the policy is associated with.</p>
	 * @public
	 */
	GroupName: string | undefined;
	/**
	 * <p>The name of the policy.</p>
	 * @public
	 */
	PolicyName: string | undefined;
	/**
	 * <p>The policy document.</p>
	 *          <p>IAM stores policies in JSON format. However, resources that were created using CloudFormation
	 *             templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format
	 *             before submitting it to IAM.</p>
	 * @public
	 */
	PolicyDocument: string | undefined;
}
interface GetInstanceProfileResponse {
	/**
	 * <p>A structure containing details about the instance profile.</p>
	 * @public
	 */
	InstanceProfile: InstanceProfile | undefined;
}
interface GetLoginProfileResponse {
	/**
	 * <p>A structure containing the user name and the profile creation date for the
	 *             user.</p>
	 * @public
	 */
	LoginProfile: LoginProfile | undefined;
}
interface GetOpenIDConnectProviderResponse {
	/**
	 * <p>The URL that the IAM OIDC provider resource object is associated with. For more
	 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>.</p>
	 * @public
	 */
	Url?: string | undefined;
	/**
	 * <p>A list of client IDs (also known as audiences) that are associated with the specified
	 *             IAM OIDC provider resource object. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>.</p>
	 * @public
	 */
	ClientIDList?: string[] | undefined;
	/**
	 * <p>A list of certificate thumbprints that are associated with the specified IAM OIDC
	 *             provider resource object. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>. </p>
	 * @public
	 */
	ThumbprintList?: string[] | undefined;
	/**
	 * <p>The date and time when the IAM OIDC provider resource object was created in the
	 *             Amazon Web Services account.</p>
	 * @public
	 */
	CreateDate?: Date | undefined;
	/**
	 * <p>A list of tags that are attached to the specified IAM OIDC provider. The returned list of tags is sorted by tag key.
	 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface ErrorDetails {
	/**
	 * <p>Detailed information about the reason that the operation failed.</p>
	 * @public
	 */
	Message: string | undefined;
	/**
	 * <p>The error code associated with the operation failure.</p>
	 * @public
	 */
	Code: string | undefined;
}
interface GetOrganizationsAccessReportResponse {
	/**
	 * <p>The status of the job.</p>
	 * @public
	 */
	JobStatus: JobStatusType | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *                 format</a>, when the report job was created.</p>
	 * @public
	 */
	JobCreationDate: Date | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *                 format</a>, when the generated report job was completed or failed.</p>
	 *          <p>This field is null if the job is still in progress, as indicated by a job status value
	 *             of <code>IN_PROGRESS</code>.</p>
	 * @public
	 */
	JobCompletionDate?: Date | undefined;
	/**
	 * <p>The number of services that the applicable SCPs allow account principals to
	 *             access.</p>
	 * @public
	 */
	NumberOfServicesAccessible?: number | undefined;
	/**
	 * <p>The number of services that account principals are allowed but did not attempt to
	 *             access.</p>
	 * @public
	 */
	NumberOfServicesNotAccessed?: number | undefined;
	/**
	 * <p>An object that contains details about the most recent attempt to access the
	 *             service.</p>
	 * @public
	 */
	AccessDetails?: AccessDetail[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
	/**
	 * <p>Contains information about the reason that the operation failed.</p>
	 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html">GetOrganizationsAccessReport</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a>, and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html">GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
	 * @public
	 */
	ErrorDetails?: ErrorDetails | undefined;
}
interface GetPolicyResponse {
	/**
	 * <p>A structure containing details about the policy.</p>
	 * @public
	 */
	Policy?: Policy | undefined;
}
interface GetPolicyVersionResponse {
	/**
	 * <p>A structure containing details about the policy version.</p>
	 * @public
	 */
	PolicyVersion?: PolicyVersion | undefined;
}
interface GetRoleResponse {
	/**
	 * <p>A structure containing details about the IAM role.</p>
	 * @public
	 */
	Role: Role | undefined;
}
interface GetRolePolicyResponse {
	/**
	 * <p>The role the policy is associated with.</p>
	 * @public
	 */
	RoleName: string | undefined;
	/**
	 * <p>The name of the policy.</p>
	 * @public
	 */
	PolicyName: string | undefined;
	/**
	 * <p>The policy document.</p>
	 *          <p>IAM stores policies in JSON format. However, resources that were created using CloudFormation
	 *             templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format
	 *             before submitting it to IAM.</p>
	 * @public
	 */
	PolicyDocument: string | undefined;
}
interface ServerCertificateMetadata {
	/**
	 * <p> The path to the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Path: string | undefined;
	/**
	 * <p>The name that identifies the server certificate.</p>
	 * @public
	 */
	ServerCertificateName: string | undefined;
	/**
	 * <p> The stable and unique string identifying the server certificate. For more information
	 *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	ServerCertificateId: string | undefined;
	/**
	 * <p> The Amazon Resource Name (ARN) specifying the server certificate. For more information
	 *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
	 *             <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The date when the server certificate was uploaded.</p>
	 * @public
	 */
	UploadDate?: Date | undefined;
	/**
	 * <p>The date on which the certificate is set to expire.</p>
	 * @public
	 */
	Expiration?: Date | undefined;
}
interface ServerCertificate {
	/**
	 * <p>The meta information of the server certificate, such as its name, path, ID, and
	 *          ARN.</p>
	 * @public
	 */
	ServerCertificateMetadata: ServerCertificateMetadata | undefined;
	/**
	 * <p>The contents of the public key certificate.</p>
	 * @public
	 */
	CertificateBody: string | undefined;
	/**
	 * <p>The contents of the public key certificate chain.</p>
	 * @public
	 */
	CertificateChain?: string | undefined;
	/**
	 * <p>A list of tags that are attached to the server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface GetServerCertificateResponse {
	/**
	 * <p>A structure containing details about the server certificate.</p>
	 * @public
	 */
	ServerCertificate: ServerCertificate | undefined;
}
interface TrackedActionLastAccessed {
	/**
	 * <p>The name of the tracked action to which access was attempted. Tracked actions are
	 *          actions that report activity to IAM.</p>
	 * @public
	 */
	ActionName?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	LastAccessedEntity?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when an authenticated entity most recently attempted to access the
	 *          tracked service. Amazon Web Services does not report unauthenticated requests.</p>
	 *          <p>This field is null if no IAM entities attempted to access the service within the
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	LastAccessedTime?: Date | undefined;
	/**
	 * <p>The Region from which the authenticated entity (user or role) last attempted to access
	 *          the tracked action. Amazon Web Services does not report unauthenticated requests.</p>
	 *          <p>This field is null if no IAM entities attempted to access the service within the
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	LastAccessedRegion?: string | undefined;
}
interface ServiceLastAccessed {
	/**
	 * <p>The name of the service in which access was attempted.</p>
	 * @public
	 */
	ServiceName: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when an authenticated entity most recently attempted to access the
	 *          service. Amazon Web Services does not report unauthenticated requests.</p>
	 *          <p>This field is null if no IAM entities attempted to access the service within the
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	LastAuthenticated?: Date | undefined;
	/**
	 * <p>The namespace of the service in which access was attempted.</p>
	 *          <p>To learn the service namespace of a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
	 *             <i>Service Authorization Reference</i>. Choose the name of the service to
	 *          view details for that service. In the first paragraph, find the service prefix. For
	 *          example, <code>(service prefix: a4b)</code>. For more information about service namespaces,
	 *          see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
	 *             Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
	 * @public
	 */
	ServiceNamespace: string | undefined;
	/**
	 * <p>The ARN of the authenticated entity (user or role) that last attempted to access the
	 *          service. Amazon Web Services does not report unauthenticated requests.</p>
	 *          <p>This field is null if no IAM entities attempted to access the service within the
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	LastAuthenticatedEntity?: string | undefined;
	/**
	 * <p>The Region from which the authenticated entity (user or role) last attempted to access
	 *          the service. Amazon Web Services does not report unauthenticated requests.</p>
	 *          <p>This field is null if no IAM entities attempted to access the service within the
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	LastAuthenticatedRegion?: string | undefined;
	/**
	 * <p>The total number of authenticated principals (root user, IAM users, or IAM roles) that
	 *          have attempted to access the service.</p>
	 *          <p>This field is null if no principals attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	TotalAuthenticatedEntities?: number | undefined;
	/**
	 * <p>An object that contains details about the most recent attempt to access a tracked action
	 *          within the service.</p>
	 *          <p>This field is null if there no tracked actions or if the principal did not use the
	 *          tracked actions within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>. This field is also null if the report was generated at the
	 *          service level and not the action level. For more information, see the
	 *             <code>Granularity</code> field in <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html">GenerateServiceLastAccessedDetails</a>.</p>
	 * @public
	 */
	TrackedActionsLastAccessed?: TrackedActionLastAccessed[] | undefined;
}
interface GetServiceLastAccessedDetailsResponse {
	/**
	 * <p>The status of the job.</p>
	 * @public
	 */
	JobStatus: JobStatusType | undefined;
	/**
	 * <p>The type of job. Service jobs return information about when each service was last
	 *             accessed. Action jobs also include information about when tracked actions within the
	 *             service were last accessed.</p>
	 * @public
	 */
	JobType?: AccessAdvisorUsageGranularityType | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *                 format</a>, when the report job was created.</p>
	 * @public
	 */
	JobCreationDate: Date | undefined;
	/**
	 * <p> A <code>ServiceLastAccessed</code> object that contains details about the most recent
	 *             attempt to access the service.</p>
	 * @public
	 */
	ServicesLastAccessed: ServiceLastAccessed[] | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *                 format</a>, when the generated report job was completed or failed.</p>
	 *          <p>This field is null if the job is still in progress, as indicated by a job status value
	 *             of <code>IN_PROGRESS</code>.</p>
	 * @public
	 */
	JobCompletionDate: Date | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
	/**
	 * <p>An object that contains details about the reason the operation failed.</p>
	 * @public
	 */
	Error?: ErrorDetails | undefined;
}
interface EntityInfo {
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	Arn: string | undefined;
	/**
	 * <p>The name of the entity (user or role).</p>
	 * @public
	 */
	Name: string | undefined;
	/**
	 * <p>The type of entity (user or role).</p>
	 * @public
	 */
	Type: PolicyOwnerEntityType | undefined;
	/**
	 * <p>The identifier of the entity (user or role).</p>
	 * @public
	 */
	Id: string | undefined;
	/**
	 * <p>The path to the entity (user or role). For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>. </p>
	 * @public
	 */
	Path?: string | undefined;
}
interface EntityDetails {
	/**
	 * <p>The <code>EntityInfo</code> object that contains details about the entity (user or
	 *          role).</p>
	 * @public
	 */
	EntityInfo: EntityInfo | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the authenticated entity last attempted to access Amazon Web Services. Amazon Web Services does
	 *          not report unauthenticated requests.</p>
	 *          <p>This field is null if no IAM entities attempted to access the service within the
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
	 * @public
	 */
	LastAuthenticated?: Date | undefined;
}
interface GetServiceLastAccessedDetailsWithEntitiesResponse {
	/**
	 * <p>The status of the job.</p>
	 * @public
	 */
	JobStatus: JobStatusType | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *                 format</a>, when the report job was created.</p>
	 * @public
	 */
	JobCreationDate: Date | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *                 format</a>, when the generated report job was completed or failed.</p>
	 *          <p>This field is null if the job is still in progress, as indicated by a job status value
	 *             of <code>IN_PROGRESS</code>.</p>
	 * @public
	 */
	JobCompletionDate: Date | undefined;
	/**
	 * <p>An <code>EntityDetailsList</code> object that contains details about when an IAM
	 *             entity (user or role) used group or policy permissions in an attempt to access the
	 *             specified Amazon Web Services service.</p>
	 * @public
	 */
	EntityDetailsList: EntityDetails[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
	/**
	 * <p>An object that contains details about the reason the operation failed.</p>
	 * @public
	 */
	Error?: ErrorDetails | undefined;
}
interface SSHPublicKey {
	/**
	 * <p>The name of the IAM user associated with the SSH public key.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The unique identifier for the SSH public key.</p>
	 * @public
	 */
	SSHPublicKeyId: string | undefined;
	/**
	 * <p>The MD5 message digest of the SSH public key.</p>
	 * @public
	 */
	Fingerprint: string | undefined;
	/**
	 * <p>The SSH public key.</p>
	 * @public
	 */
	SSHPublicKeyBody: string | undefined;
	/**
	 * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
	 *          authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be
	 *          used.</p>
	 * @public
	 */
	Status: StatusType | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the SSH public key was uploaded.</p>
	 * @public
	 */
	UploadDate?: Date | undefined;
}
interface GetSSHPublicKeyResponse {
	/**
	 * <p>A structure containing details about the SSH public key.</p>
	 * @public
	 */
	SSHPublicKey?: SSHPublicKey | undefined;
}
interface GetUserResponse {
	/**
	 * <p>A structure containing details about the IAM user.</p>
	 *          <important>
	 *             <p>Due to a service issue, password last used data does not include password use from
	 *                 May 3, 2018 22:50 PDT to May 23, 2018 14:08 PDT. This affects <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html">last sign-in</a> dates shown in the IAM console and password last used
	 *                 dates in the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">IAM credential
	 *                     report</a>, and returned by this operation. If users signed in during the
	 *                 affected time, the password last used date that is returned is the date the user
	 *                 last signed in before May 3, 2018. For users that signed in after May 23, 2018 14:08
	 *                 PDT, the returned password last used date is accurate.</p>
	 *             <p>You can use password last used information to identify unused credentials for
	 *                 deletion. For example, you might delete users who did not sign in to Amazon Web Services in the
	 *                 last 90 days. In cases like this, we recommend that you adjust your evaluation
	 *                 window to include dates after May 23, 2018. Alternatively, if your users use access
	 *                 keys to access Amazon Web Services programmatically you can refer to access key last used
	 *                 information because it is accurate for all dates. </p>
	 *          </important>
	 * @public
	 */
	User: User | undefined;
}
interface GetUserPolicyResponse {
	/**
	 * <p>The user the policy is associated with.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The name of the policy.</p>
	 * @public
	 */
	PolicyName: string | undefined;
	/**
	 * <p>The policy document.</p>
	 *          <p>IAM stores policies in JSON format. However, resources that were created using CloudFormation
	 *             templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format
	 *             before submitting it to IAM.</p>
	 * @public
	 */
	PolicyDocument: string | undefined;
}
interface ListAccessKeysResponse {
	/**
	 * <p>A list of objects containing metadata about the access keys.</p>
	 * @public
	 */
	AccessKeyMetadata: AccessKeyMetadata[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListAccountAliasesResponse {
	/**
	 * <p>A list of aliases associated with the account. Amazon Web Services supports only one alias per
	 *             account.</p>
	 * @public
	 */
	AccountAliases: string[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListAttachedGroupPoliciesResponse {
	/**
	 * <p>A list of the attached policies.</p>
	 * @public
	 */
	AttachedPolicies?: AttachedPolicy[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListAttachedRolePoliciesResponse {
	/**
	 * <p>A list of the attached policies.</p>
	 * @public
	 */
	AttachedPolicies?: AttachedPolicy[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListAttachedUserPoliciesResponse {
	/**
	 * <p>A list of the attached policies.</p>
	 * @public
	 */
	AttachedPolicies?: AttachedPolicy[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface PolicyGroup {
	/**
	 * <p>The name (friendly name, not ARN) identifying the group.</p>
	 * @public
	 */
	GroupName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the group. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	GroupId?: string | undefined;
}
interface PolicyRole {
	/**
	 * <p>The name (friendly name, not ARN) identifying the role.</p>
	 * @public
	 */
	RoleName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the role. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	RoleId?: string | undefined;
}
interface PolicyUser {
	/**
	 * <p>The name (friendly name, not ARN) identifying the user.</p>
	 * @public
	 */
	UserName?: string | undefined;
	/**
	 * <p>The stable and unique string identifying the user. For more information about IDs, see
	 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
	 *             identifiers</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	UserId?: string | undefined;
}
interface ListEntitiesForPolicyResponse {
	/**
	 * <p>A list of IAM groups that the policy is attached to.</p>
	 * @public
	 */
	PolicyGroups?: PolicyGroup[] | undefined;
	/**
	 * <p>A list of IAM users that the policy is attached to.</p>
	 * @public
	 */
	PolicyUsers?: PolicyUser[] | undefined;
	/**
	 * <p>A list of IAM roles that the policy is attached to.</p>
	 * @public
	 */
	PolicyRoles?: PolicyRole[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListGroupPoliciesResponse {
	/**
	 * <p>A list of policy names.</p>
	 *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
	 *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
	 * @public
	 */
	PolicyNames: string[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListGroupsResponse {
	/**
	 * <p>A list of groups.</p>
	 * @public
	 */
	Groups: Group[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListGroupsForUserResponse {
	/**
	 * <p>A list of groups.</p>
	 * @public
	 */
	Groups: Group[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListInstanceProfilesResponse {
	/**
	 * <p>A list of instance profiles.</p>
	 * @public
	 */
	InstanceProfiles: InstanceProfile[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListInstanceProfilesForRoleResponse {
	/**
	 * <p>A list of instance profiles.</p>
	 * @public
	 */
	InstanceProfiles: InstanceProfile[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListInstanceProfileTagsResponse {
	/**
	 * <p>The list of tags that are currently attached to the IAM instance profile. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
	 * @public
	 */
	Tags: Tag[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface OpenIDConnectProviderListEntry {
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	Arn?: string | undefined;
}
interface ListOpenIDConnectProvidersResponse {
	/**
	 * <p>The list of IAM OIDC provider resource objects defined in the Amazon Web Services account.</p>
	 * @public
	 */
	OpenIDConnectProviderList?: OpenIDConnectProviderListEntry[] | undefined;
}
interface ListOpenIDConnectProviderTagsResponse {
	/**
	 * <p>The list of tags that are currently attached to the OpenID Connect (OIDC) identity
	 *       provider. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
	 * @public
	 */
	Tags: Tag[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListPoliciesResponse {
	/**
	 * <p>A list of policies.</p>
	 * @public
	 */
	Policies?: Policy[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface PolicyGrantingServiceAccess {
	/**
	 * <p>The policy name.</p>
	 * @public
	 */
	PolicyName: string | undefined;
	/**
	 * <p>The policy type. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed
	 *             policies and inline policies</a> in the
	 *          <i>IAM User Guide</i>.</p>
	 * @public
	 */
	PolicyType: PolicyType | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
	 *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
	 *          the <i>Amazon Web Services General Reference</i>. </p>
	 * @public
	 */
	PolicyArn?: string | undefined;
	/**
	 * <p>The type of entity (user or role) that used the policy to access the service to which
	 *          the inline policy is attached.</p>
	 *          <p>This field is null for managed policies. For more information about these policy types,
	 *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	EntityType?: PolicyOwnerEntityType | undefined;
	/**
	 * <p>The name of the entity (user or role) to which the inline policy is attached.</p>
	 *          <p>This field is null for managed policies. For more information about these policy types,
	 *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
	 *             <i>IAM User Guide</i>.</p>
	 * @public
	 */
	EntityName?: string | undefined;
}
interface ListPoliciesGrantingServiceAccessEntry {
	/**
	 * <p>The namespace of the service that was accessed.</p>
	 *          <p>To learn the service namespace of a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
	 *             <i>Service Authorization Reference</i>. Choose the name of the service to
	 *          view details for that service. In the first paragraph, find the service prefix. For
	 *          example, <code>(service prefix: a4b)</code>. For more information about service namespaces,
	 *          see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
	 *             service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
	 * @public
	 */
	ServiceNamespace?: string | undefined;
	/**
	 * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the
	 *          policy.</p>
	 * @public
	 */
	Policies?: PolicyGrantingServiceAccess[] | undefined;
}
interface ListPoliciesGrantingServiceAccessResponse {
	/**
	 * <p>A <code>ListPoliciesGrantingServiceAccess</code> object that contains details about
	 *             the permissions policies attached to the specified identity (user, group, or
	 *             role).</p>
	 * @public
	 */
	PoliciesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your results were
	 *             truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *             request parameter to retrieve more items. We recommend that you check
	 *                 <code>IsTruncated</code> after every call to ensure that you receive all your
	 *             results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListPolicyTagsResponse {
	/**
	 * <p>The list of tags that are currently attached to the IAM customer managed policy.
	 *       Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
	 * @public
	 */
	Tags: Tag[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListPolicyVersionsResponse {
	/**
	 * <p>A list of policy versions.</p>
	 *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
	 *                 policies</a> in the <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Versions?: PolicyVersion[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListRolePoliciesResponse {
	/**
	 * <p>A list of policy names.</p>
	 * @public
	 */
	PolicyNames: string[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListRolesResponse {
	/**
	 * <p>A list of roles.</p>
	 * @public
	 */
	Roles: Role[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListRoleTagsResponse {
	/**
	 * <p>The list of tags that are currently attached to the role. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
	 * @public
	 */
	Tags: Tag[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListServerCertificatesResponse {
	/**
	 * <p>A list of server certificates.</p>
	 * @public
	 */
	ServerCertificateMetadataList: ServerCertificateMetadata[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListServerCertificateTagsResponse {
	/**
	 * <p>The list of tags that are currently attached to the IAM server certificate.
	 *       Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
	 * @public
	 */
	Tags: Tag[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ServiceSpecificCredentialMetadata {
	/**
	 * <p>The name of the IAM user associated with the service-specific credential.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The status of the service-specific credential. <code>Active</code> means that the key is
	 *          valid for API calls, while <code>Inactive</code> means it is not.</p>
	 * @public
	 */
	Status: StatusType | undefined;
	/**
	 * <p>The generated user name for the service-specific credential.</p>
	 * @public
	 */
	ServiceUserName?: string | undefined;
	/**
	 * <p>For Bedrock API keys and CloudWatch Logs API keys, this is the public portion of the credential that includes the IAM
	 *          user name and a suffix containing version and creation information.</p>
	 * @public
	 */
	ServiceCredentialAlias?: string | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the service-specific credential were created.</p>
	 * @public
	 */
	CreateDate: Date | undefined;
	/**
	 * <p>The date and time when the service specific credential expires. This field is only
	 *          present for Bedrock API keys and CloudWatch Logs API keys that were created with an expiration period.</p>
	 * @public
	 */
	ExpirationDate?: Date | undefined;
	/**
	 * <p>The unique identifier for the service-specific credential.</p>
	 * @public
	 */
	ServiceSpecificCredentialId: string | undefined;
	/**
	 * <p>The name of the service associated with the service-specific credential.</p>
	 * @public
	 */
	ServiceName: string | undefined;
}
interface ListServiceSpecificCredentialsResponse {
	/**
	 * <p>A list of structures that each contain details about a service-specific
	 *             credential.</p>
	 * @public
	 */
	ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[] | undefined;
	/**
	 * <p>When IsTruncated is true, this element is present and contains the value to use for
	 *             the Marker parameter in a subsequent pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your results were
	 *             truncated, you can make a subsequent pagination request using the Marker request
	 *             parameter to retrieve more items.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
}
interface SigningCertificate {
	/**
	 * <p>The name of the user the signing certificate is associated with.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The ID for the signing certificate.</p>
	 * @public
	 */
	CertificateId: string | undefined;
	/**
	 * <p>The contents of the signing certificate.</p>
	 * @public
	 */
	CertificateBody: string | undefined;
	/**
	 * <p>The status of the signing certificate. <code>Active</code> means that the key is valid
	 *          for API calls, while <code>Inactive</code> means it is not.</p>
	 * @public
	 */
	Status: StatusType | undefined;
	/**
	 * <p>The date when the signing certificate was uploaded.</p>
	 * @public
	 */
	UploadDate?: Date | undefined;
}
interface ListSigningCertificatesResponse {
	/**
	 * <p>A list of the user's signing certificate information.</p>
	 * @public
	 */
	Certificates: SigningCertificate[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface SSHPublicKeyMetadata {
	/**
	 * <p>The name of the IAM user associated with the SSH public key.</p>
	 * @public
	 */
	UserName: string | undefined;
	/**
	 * <p>The unique identifier for the SSH public key.</p>
	 * @public
	 */
	SSHPublicKeyId: string | undefined;
	/**
	 * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
	 *          authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be
	 *          used.</p>
	 * @public
	 */
	Status: StatusType | undefined;
	/**
	 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
	 *             format</a>, when the SSH public key was uploaded.</p>
	 * @public
	 */
	UploadDate: Date | undefined;
}
interface ListSSHPublicKeysResponse {
	/**
	 * <p>A list of the SSH public keys assigned to IAM user.</p>
	 * @public
	 */
	SSHPublicKeys?: SSHPublicKeyMetadata[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListUserPoliciesResponse {
	/**
	 * <p>A list of policy names.</p>
	 * @public
	 */
	PolicyNames: string[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListUsersResponse {
	/**
	 * <p>A list of users.</p>
	 * @public
	 */
	Users: User[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListUserTagsResponse {
	/**
	 * <p>The list of tags that are currently attached to the user. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
	 * @public
	 */
	Tags: Tag[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ListVirtualMFADevicesResponse {
	/**
	 * <p> The list of virtual MFA devices in the current account that match the
	 *                 <code>AssignmentStatus</code> value that was passed in the request.</p>
	 * @public
	 */
	VirtualMFADevices: VirtualMFADevice[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and
	 *             contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *             pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
interface ResetServiceSpecificCredentialResponse {
	/**
	 * <p>A structure with details about the updated service-specific credential, including the
	 *             new password.</p>
	 *          <important>
	 *             <p>This is the <b>only</b> time that you can access the
	 *                 password. You cannot recover the password later, but you can reset it again.</p>
	 *          </important>
	 * @public
	 */
	ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}
interface Position {
	/**
	 * <p>The line containing the specified position in the document.</p>
	 * @public
	 */
	Line?: number | undefined;
	/**
	 * <p>The column in the line containing the specified position in the document.</p>
	 * @public
	 */
	Column?: number | undefined;
}
interface Statement {
	/**
	 * <p>The identifier of the policy that was provided as an input.</p>
	 * @public
	 */
	SourcePolicyId?: string | undefined;
	/**
	 * <p>The type of the policy.</p>
	 * @public
	 */
	SourcePolicyType?: PolicySourceType | undefined;
	/**
	 * <p>The row and column of the beginning of the <code>Statement</code> in an IAM
	 *          policy.</p>
	 * @public
	 */
	StartPosition?: Position | undefined;
	/**
	 * <p>The row and column of the end of a <code>Statement</code> in an IAM policy.</p>
	 * @public
	 */
	EndPosition?: Position | undefined;
}
interface OrganizationsDecisionDetail {
	/**
	 * <p>Specifies whether the simulated operation is allowed by the Organizations service control
	 *          policies that impact the simulated user's account.</p>
	 * @public
	 */
	AllowedByOrganizations?: boolean | undefined;
}
interface PermissionsBoundaryDecisionDetail {
	/**
	 * <p>Specifies whether an action is allowed by a permissions boundary that is applied to an
	 *          IAM entity (user or role). A value of <code>true</code> means that the permissions
	 *          boundary does not deny the action. This means that the policy includes an
	 *             <code>Allow</code> statement that matches the request. In this case, if an
	 *          identity-based policy also allows the action, the request is allowed. A value of
	 *             <code>false</code> means that either the requested action is not allowed (implicitly
	 *          denied) or that the action is explicitly denied by the permissions boundary. In both of
	 *          these cases, the action is not allowed, regardless of the identity-based policy.</p>
	 * @public
	 */
	AllowedByPermissionsBoundary?: boolean | undefined;
}
interface ResourceSpecificResult {
	/**
	 * <p>The name of the simulated resource, in Amazon Resource Name (ARN) format.</p>
	 * @public
	 */
	EvalResourceName: string | undefined;
	/**
	 * <p>The result of the simulation of the simulated API operation on the resource specified in
	 *             <code>EvalResourceName</code>.</p>
	 * @public
	 */
	EvalResourceDecision: PolicyEvaluationDecisionType | undefined;
	/**
	 * <p>A list of the statements in the input policies that determine the result for this part
	 *          of the simulation. Remember that even if multiple statements allow the operation on the
	 *          resource, if <i>any</i> statement denies that operation, then the explicit
	 *          deny overrides any allow. In addition, the deny statement is the only entry included in the
	 *          result.</p>
	 * @public
	 */
	MatchedStatements?: Statement[] | undefined;
	/**
	 * <p>A list of context keys that are required by the included input policies but that were
	 *          not provided by one of the input parameters. This list is used when a list of ARNs is
	 *          included in the <code>ResourceArns</code> parameter instead of "*". If you do not specify
	 *          individual resources, by setting <code>ResourceArns</code> to "*" or by not including the
	 *             <code>ResourceArns</code> parameter, then any missing context values are instead
	 *          included under the <code>EvaluationResults</code> section. To discover the context keys
	 *          used by a set of policies, you can call <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html">GetContextKeysForCustomPolicy</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html">GetContextKeysForPrincipalPolicy</a>.</p>
	 * @public
	 */
	MissingContextValues?: string[] | undefined;
	/**
	 * <p>Additional details about the results of the evaluation decision on a single resource.
	 *          This parameter is returned only for cross-account simulations. This parameter explains how
	 *          each policy type contributes to the resource-specific evaluation decision.</p>
	 * @public
	 */
	EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType> | undefined;
	/**
	 * <p>Contains information about the effect that a permissions boundary has on a policy
	 *          simulation when that boundary is applied to an IAM entity.</p>
	 * @public
	 */
	PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail | undefined;
}
interface EvaluationResult {
	/**
	 * <p>The name of the API operation tested on the indicated resource.</p>
	 * @public
	 */
	EvalActionName: string | undefined;
	/**
	 * <p>The ARN template for the simulated resource type (for example,
	 *             <code>arn:$\{Partition\}:s3:::$\{BucketName\}/$\{KeyName\}</code>), or <code>*</code> if no
	 *          ARN format is defined for the action. This is not a specific customer-provided resource
	 *          ARN. To find the decision for a specific resource, use
	 *             <code>ResourceSpecificResults</code>.</p>
	 *          <note>
	 *             <p>If you previously relied on <code>EvalResourceName</code> to identify which specific
	 *             resource a result applies to, you must now use the <code>EvalResourceName</code> field
	 *             within individual entries in <code>ResourceSpecificResults</code> instead.</p>
	 *          </note>
	 * @public
	 */
	EvalResourceName?: string | undefined;
	/**
	 * <p>The result of the simulation.</p>
	 * @public
	 */
	EvalDecision: PolicyEvaluationDecisionType | undefined;
	/**
	 * <p>A list of the statements in the input policies that determine the result for this
	 *          scenario. Remember that even if multiple statements allow the operation on the resource, if
	 *          only one statement denies that operation, then the explicit deny overrides any allow. In
	 *          addition, the deny statement is the only entry included in the result.</p>
	 *          <p>In the top-level result, this field contains the union of matched statements across all
	 *          requested resources. Only statements that contributed to the reported decision are
	 *          included. For per-resource matched statements, see
	 *             <code>ResourceSpecificResults</code>. This field doesn't include statements from
	 *          service control policies (SCPs). Only statements from identity-based and resource-based
	 *          policies appear here.</p>
	 * @public
	 */
	MatchedStatements?: Statement[] | undefined;
	/**
	 * <p>A list of context keys that are required by the included input policies but that were
	 *          not provided by one of the input parameters. This list is used when the resource in a
	 *          simulation is "*", either explicitly, or when the <code>ResourceArns</code> parameter
	 *          blank. If you include a list of resources, then any missing context values are instead
	 *          included under the <code>ResourceSpecificResults</code> section. To discover the context
	 *          keys used by a set of policies, you can call <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html">GetContextKeysForCustomPolicy</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html">GetContextKeysForPrincipalPolicy</a>.</p>
	 *          <p>In the top-level result, this field contains the deduplicated set of missing context
	 *          values across all requested resources. This field doesn't include context keys referenced
	 *          by service control policies (SCPs). Only context keys referenced by identity-based and
	 *          resource-based policies appear here.</p>
	 * @public
	 */
	MissingContextValues?: string[] | undefined;
	/**
	 * <p>A structure that details how Organizations and its service control policies affect the results of
	 *          the simulation. Only applies if the simulated user's account is part of an
	 *          organization.</p>
	 *          <p>For resources that don't support organization-level evaluation, this field is omitted
	 *          from the top-level result. For per-resource details, see
	 *             <code>ResourceSpecificResults</code>.</p>
	 * @public
	 */
	OrganizationsDecisionDetail?: OrganizationsDecisionDetail | undefined;
	/**
	 * <p>Contains information about the effect that a permissions boundary has on a policy
	 *          simulation when the boundary is applied to an IAM entity.</p>
	 * @public
	 */
	PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail | undefined;
	/**
	 * <p>Additional details about the results of the cross-account evaluation decision. This
	 *          parameter is populated for only cross-account simulations. It contains a brief summary of
	 *          how each policy type contributes to the final evaluation decision.</p>
	 *          <p>In the top-level result, this map reports the most restrictive decision per policy
	 *          type across all requested resources.</p>
	 *          <p>If the simulation evaluates policies within the same account and includes a resource
	 *          ARN, then the parameter is present but the response is empty. If the simulation evaluates
	 *          policies within the same account and specifies all resources (<code>*</code>), then the
	 *          parameter is not returned.</p>
	 *          <p>When you make a cross-account request, Amazon Web Services evaluates the request in the trusting
	 *          account and the trusted account. The request is allowed only if both evaluations return
	 *             <code>true</code>. For more information about how policies are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies within a single account</a>.</p>
	 *          <p>If an Organizations SCP included in the evaluation denies access, the simulation ends. In
	 *          this case, policy evaluation does not proceed any further and this parameter is not
	 *          returned.</p>
	 * @public
	 */
	EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType> | undefined;
	/**
	 * <p>The individual results of the simulation of the API operation specified in
	 *          EvalActionName on each resource.</p>
	 * @public
	 */
	ResourceSpecificResults?: ResourceSpecificResult[] | undefined;
}
interface SimulatePolicyResponse {
	/**
	 * <p>The results of the simulation.</p>
	 * @public
	 */
	EvaluationResults?: EvaluationResult[] | undefined;
	/**
	 * <p>A flag that indicates whether there are more items to return. If your
	 *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
	 *     request parameter to retrieve more items. Note that IAM might return fewer than the
	 *     <code>MaxItems</code> number of results even when there are more results available. We recommend
	 *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
	 *     results.</p>
	 * @public
	 */
	IsTruncated?: boolean | undefined;
	/**
	 * <p>When <code>IsTruncated</code> is <code>true</code>, this element
	 *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
	 *     pagination request.</p>
	 * @public
	 */
	Marker?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link AddClientIDToOpenIDConnectProviderCommand}.
 */
export interface AddClientIDToOpenIDConnectProviderCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link AddRoleToInstanceProfileCommand}.
 */
export interface AddRoleToInstanceProfileCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link AddUserToGroupCommand}.
 */
export interface AddUserToGroupCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link AttachGroupPolicyCommand}.
 */
export interface AttachGroupPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link AttachRolePolicyCommand}.
 */
export interface AttachRolePolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link AttachUserPolicyCommand}.
 */
export interface AttachUserPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ChangePasswordCommand}.
 */
export interface ChangePasswordCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateAccessKeyCommand}.
 */
export interface CreateAccessKeyCommandOutput extends CreateAccessKeyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandOutput extends CreateGroupResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateLoginProfileCommand}.
 */
export interface CreateLoginProfileCommandOutput extends CreateLoginProfileResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateOpenIDConnectProviderCommand}.
 */
export interface CreateOpenIDConnectProviderCommandOutput extends CreateOpenIDConnectProviderResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandOutput extends CreatePolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreatePolicyVersionCommand}.
 */
export interface CreatePolicyVersionCommandOutput extends CreatePolicyVersionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateRoleCommand}.
 */
export interface CreateRoleCommandOutput extends CreateRoleResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateServiceLinkedRoleCommand}.
 */
export interface CreateServiceLinkedRoleCommandOutput extends CreateServiceLinkedRoleResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateServiceSpecificCredentialCommand}.
 */
export interface CreateServiceSpecificCredentialCommandOutput extends CreateServiceSpecificCredentialResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateUserCommand}.
 */
export interface CreateUserCommandOutput extends CreateUserResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CreateVirtualMFADeviceCommand}.
 */
export interface CreateVirtualMFADeviceCommandOutput extends CreateVirtualMFADeviceResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteAccessKeyCommand}.
 */
export interface DeleteAccessKeyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteAccountAliasCommand}.
 */
export interface DeleteAccountAliasCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteAccountPasswordPolicyCommand}.
 */
export interface DeleteAccountPasswordPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteGroupCommand}.
 */
export interface DeleteGroupCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteGroupPolicyCommand}.
 */
export interface DeleteGroupPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteInstanceProfileCommand}.
 */
export interface DeleteInstanceProfileCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteLoginProfileCommand}.
 */
export interface DeleteLoginProfileCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteOpenIDConnectProviderCommand}.
 */
export interface DeleteOpenIDConnectProviderCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeletePolicyVersionCommand}.
 */
export interface DeletePolicyVersionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteRoleCommand}.
 */
export interface DeleteRoleCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteRolePermissionsBoundaryCommand}.
 */
export interface DeleteRolePermissionsBoundaryCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteRolePolicyCommand}.
 */
export interface DeleteRolePolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteServerCertificateCommand}.
 */
export interface DeleteServerCertificateCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteServiceLinkedRoleCommand}.
 */
export interface DeleteServiceLinkedRoleCommandOutput extends DeleteServiceLinkedRoleResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteServiceSpecificCredentialCommand}.
 */
export interface DeleteServiceSpecificCredentialCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteSigningCertificateCommand}.
 */
export interface DeleteSigningCertificateCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteSSHPublicKeyCommand}.
 */
export interface DeleteSSHPublicKeyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteUserPermissionsBoundaryCommand}.
 */
export interface DeleteUserPermissionsBoundaryCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteUserPolicyCommand}.
 */
export interface DeleteUserPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteVirtualMFADeviceCommand}.
 */
export interface DeleteVirtualMFADeviceCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DetachGroupPolicyCommand}.
 */
export interface DetachGroupPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DetachRolePolicyCommand}.
 */
export interface DetachRolePolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DetachUserPolicyCommand}.
 */
export interface DetachUserPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GenerateCredentialReportCommand}.
 */
export interface GenerateCredentialReportCommandOutput extends GenerateCredentialReportResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GenerateOrganizationsAccessReportCommand}.
 */
export interface GenerateOrganizationsAccessReportCommandOutput extends GenerateOrganizationsAccessReportResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GenerateServiceLastAccessedDetailsCommand}.
 */
export interface GenerateServiceLastAccessedDetailsCommandOutput extends GenerateServiceLastAccessedDetailsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetAccessKeyLastUsedCommand}.
 */
export interface GetAccessKeyLastUsedCommandOutput extends GetAccessKeyLastUsedResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetAccountAuthorizationDetailsCommand}.
 */
export interface GetAccountAuthorizationDetailsCommandOutput extends GetAccountAuthorizationDetailsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetAccountPasswordPolicyCommand}.
 */
export interface GetAccountPasswordPolicyCommandOutput extends GetAccountPasswordPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetAccountSummaryCommand}.
 */
export interface GetAccountSummaryCommandOutput extends GetAccountSummaryResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetContextKeysForCustomPolicyCommand}.
 */
export interface GetContextKeysForCustomPolicyCommandOutput extends GetContextKeysForPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetContextKeysForPrincipalPolicyCommand}.
 */
export interface GetContextKeysForPrincipalPolicyCommandOutput extends GetContextKeysForPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetCredentialReportCommand}.
 */
export interface GetCredentialReportCommandOutput extends GetCredentialReportResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetGroupCommand}.
 */
export interface GetGroupCommandOutput extends GetGroupResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetGroupPolicyCommand}.
 */
export interface GetGroupPolicyCommandOutput extends GetGroupPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetInstanceProfileCommand}.
 */
export interface GetInstanceProfileCommandOutput extends GetInstanceProfileResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetLoginProfileCommand}.
 */
export interface GetLoginProfileCommandOutput extends GetLoginProfileResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetOpenIDConnectProviderCommand}.
 */
export interface GetOpenIDConnectProviderCommandOutput extends GetOpenIDConnectProviderResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetOrganizationsAccessReportCommand}.
 */
export interface GetOrganizationsAccessReportCommandOutput extends GetOrganizationsAccessReportResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandOutput extends GetPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetPolicyVersionCommand}.
 */
export interface GetPolicyVersionCommandOutput extends GetPolicyVersionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetRoleCommand}.
 */
export interface GetRoleCommandOutput extends GetRoleResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetRolePolicyCommand}.
 */
export interface GetRolePolicyCommandOutput extends GetRolePolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetServerCertificateCommand}.
 */
export interface GetServerCertificateCommandOutput extends GetServerCertificateResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetServiceLastAccessedDetailsCommand}.
 */
export interface GetServiceLastAccessedDetailsCommandOutput extends GetServiceLastAccessedDetailsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetServiceLastAccessedDetailsWithEntitiesCommand}.
 */
export interface GetServiceLastAccessedDetailsWithEntitiesCommandOutput extends GetServiceLastAccessedDetailsWithEntitiesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetSSHPublicKeyCommand}.
 */
export interface GetSSHPublicKeyCommandOutput extends GetSSHPublicKeyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetUserCommand}.
 */
export interface GetUserCommandOutput extends GetUserResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetUserPolicyCommand}.
 */
export interface GetUserPolicyCommandOutput extends GetUserPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListAccessKeysCommand}.
 */
export interface ListAccessKeysCommandOutput extends ListAccessKeysResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListAccountAliasesCommand}.
 */
export interface ListAccountAliasesCommandOutput extends ListAccountAliasesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListAttachedGroupPoliciesCommand}.
 */
export interface ListAttachedGroupPoliciesCommandOutput extends ListAttachedGroupPoliciesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListAttachedRolePoliciesCommand}.
 */
export interface ListAttachedRolePoliciesCommandOutput extends ListAttachedRolePoliciesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListAttachedUserPoliciesCommand}.
 */
export interface ListAttachedUserPoliciesCommandOutput extends ListAttachedUserPoliciesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListEntitiesForPolicyCommand}.
 */
export interface ListEntitiesForPolicyCommandOutput extends ListEntitiesForPolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListGroupPoliciesCommand}.
 */
export interface ListGroupPoliciesCommandOutput extends ListGroupPoliciesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListGroupsCommand}.
 */
export interface ListGroupsCommandOutput extends ListGroupsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListGroupsForUserCommand}.
 */
export interface ListGroupsForUserCommandOutput extends ListGroupsForUserResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListInstanceProfilesCommand}.
 */
export interface ListInstanceProfilesCommandOutput extends ListInstanceProfilesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListInstanceProfilesForRoleCommand}.
 */
export interface ListInstanceProfilesForRoleCommandOutput extends ListInstanceProfilesForRoleResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListInstanceProfileTagsCommand}.
 */
export interface ListInstanceProfileTagsCommandOutput extends ListInstanceProfileTagsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListOpenIDConnectProvidersCommand}.
 */
export interface ListOpenIDConnectProvidersCommandOutput extends ListOpenIDConnectProvidersResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListOpenIDConnectProviderTagsCommand}.
 */
export interface ListOpenIDConnectProviderTagsCommandOutput extends ListOpenIDConnectProviderTagsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListPoliciesGrantingServiceAccessCommand}.
 */
export interface ListPoliciesGrantingServiceAccessCommandOutput extends ListPoliciesGrantingServiceAccessResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListPolicyTagsCommand}.
 */
export interface ListPolicyTagsCommandOutput extends ListPolicyTagsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListPolicyVersionsCommand}.
 */
export interface ListPolicyVersionsCommandOutput extends ListPolicyVersionsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListRolePoliciesCommand}.
 */
export interface ListRolePoliciesCommandOutput extends ListRolePoliciesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListRolesCommand}.
 */
export interface ListRolesCommandOutput extends ListRolesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListRoleTagsCommand}.
 */
export interface ListRoleTagsCommandOutput extends ListRoleTagsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListServerCertificatesCommand}.
 */
export interface ListServerCertificatesCommandOutput extends ListServerCertificatesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListServerCertificateTagsCommand}.
 */
export interface ListServerCertificateTagsCommandOutput extends ListServerCertificateTagsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListServiceSpecificCredentialsCommand}.
 */
export interface ListServiceSpecificCredentialsCommandOutput extends ListServiceSpecificCredentialsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListSigningCertificatesCommand}.
 */
export interface ListSigningCertificatesCommandOutput extends ListSigningCertificatesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListSSHPublicKeysCommand}.
 */
export interface ListSSHPublicKeysCommandOutput extends ListSSHPublicKeysResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListUserPoliciesCommand}.
 */
export interface ListUserPoliciesCommandOutput extends ListUserPoliciesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListUserTagsCommand}.
 */
export interface ListUserTagsCommandOutput extends ListUserTagsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ListVirtualMFADevicesCommand}.
 */
export interface ListVirtualMFADevicesCommandOutput extends ListVirtualMFADevicesResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutGroupPolicyCommand}.
 */
export interface PutGroupPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutRolePermissionsBoundaryCommand}.
 */
export interface PutRolePermissionsBoundaryCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutRolePolicyCommand}.
 */
export interface PutRolePolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutUserPermissionsBoundaryCommand}.
 */
export interface PutUserPermissionsBoundaryCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutUserPolicyCommand}.
 */
export interface PutUserPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RemoveClientIDFromOpenIDConnectProviderCommand}.
 */
export interface RemoveClientIDFromOpenIDConnectProviderCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RemoveRoleFromInstanceProfileCommand}.
 */
export interface RemoveRoleFromInstanceProfileCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RemoveUserFromGroupCommand}.
 */
export interface RemoveUserFromGroupCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ResetServiceSpecificCredentialCommand}.
 */
export interface ResetServiceSpecificCredentialCommandOutput extends ResetServiceSpecificCredentialResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link SetDefaultPolicyVersionCommand}.
 */
export interface SetDefaultPolicyVersionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link SetSecurityTokenServicePreferencesCommand}.
 */
export interface SetSecurityTokenServicePreferencesCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link SimulateCustomPolicyCommand}.
 */
export interface SimulateCustomPolicyCommandOutput extends SimulatePolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link SimulatePrincipalPolicyCommand}.
 */
export interface SimulatePrincipalPolicyCommandOutput extends SimulatePolicyResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link TagInstanceProfileCommand}.
 */
export interface TagInstanceProfileCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link TagOpenIDConnectProviderCommand}.
 */
export interface TagOpenIDConnectProviderCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link TagPolicyCommand}.
 */
export interface TagPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link TagRoleCommand}.
 */
export interface TagRoleCommandOutput extends MetadataBearer {
}
interface UpdateRoleResponse {
}
interface UpdateRoleDescriptionResponse {
	/**
	 * <p>A structure that contains details about the modified role.</p>
	 * @public
	 */
	Role?: Role | undefined;
}
interface UploadServerCertificateResponse {
	/**
	 * <p>The meta information of the uploaded server certificate without its certificate body,
	 *             certificate chain, and private key.</p>
	 * @public
	 */
	ServerCertificateMetadata?: ServerCertificateMetadata | undefined;
	/**
	 * <p>A list of tags that are attached to the new IAM server certificate. The returned list of tags is sorted by tag key.
	 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
	 *       <i>IAM User Guide</i>.</p>
	 * @public
	 */
	Tags?: Tag[] | undefined;
}
interface UploadSigningCertificateResponse {
	/**
	 * <p>Information about the certificate.</p>
	 * @public
	 */
	Certificate: SigningCertificate | undefined;
}
interface UploadSSHPublicKeyResponse {
	/**
	 * <p>Contains information about the SSH public key.</p>
	 * @public
	 */
	SSHPublicKey?: SSHPublicKey | undefined;
}
/**
 * @public
 *
 * The output of {@link TagServerCertificateCommand}.
 */
export interface TagServerCertificateCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link TagUserCommand}.
 */
export interface TagUserCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UntagInstanceProfileCommand}.
 */
export interface UntagInstanceProfileCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UntagOpenIDConnectProviderCommand}.
 */
export interface UntagOpenIDConnectProviderCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UntagPolicyCommand}.
 */
export interface UntagPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UntagRoleCommand}.
 */
export interface UntagRoleCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UntagServerCertificateCommand}.
 */
export interface UntagServerCertificateCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UntagUserCommand}.
 */
export interface UntagUserCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateAccessKeyCommand}.
 */
export interface UpdateAccessKeyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateAccountPasswordPolicyCommand}.
 */
export interface UpdateAccountPasswordPolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateAssumeRolePolicyCommand}.
 */
export interface UpdateAssumeRolePolicyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateLoginProfileCommand}.
 */
export interface UpdateLoginProfileCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateOpenIDConnectProviderThumbprintCommand}.
 */
export interface UpdateOpenIDConnectProviderThumbprintCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateRoleCommand}.
 */
export interface UpdateRoleCommandOutput extends UpdateRoleResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateRoleDescriptionCommand}.
 */
export interface UpdateRoleDescriptionCommandOutput extends UpdateRoleDescriptionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateServerCertificateCommand}.
 */
export interface UpdateServerCertificateCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateServiceSpecificCredentialCommand}.
 */
export interface UpdateServiceSpecificCredentialCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateSigningCertificateCommand}.
 */
export interface UpdateSigningCertificateCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateSSHPublicKeyCommand}.
 */
export interface UpdateSSHPublicKeyCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UploadServerCertificateCommand}.
 */
export interface UploadServerCertificateCommandOutput extends UploadServerCertificateResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UploadSigningCertificateCommand}.
 */
export interface UploadSigningCertificateCommandOutput extends UploadSigningCertificateResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link UploadSSHPublicKeyCommand}.
 */
export interface UploadSSHPublicKeyCommandOutput extends UploadSSHPublicKeyResponse, MetadataBearer {
}

export {};
