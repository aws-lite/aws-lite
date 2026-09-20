// Generated from @aws-sdk/client-organizations@3.1136.0 by npm run gen. Do not edit.
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
declare const AccountJoinedMethod: {
	readonly CREATED: "CREATED";
	readonly INVITED: "INVITED";
};
type AccountJoinedMethod = (typeof AccountJoinedMethod)[keyof typeof AccountJoinedMethod];
declare const AccountState: {
	readonly ACTIVE: "ACTIVE";
	readonly CLOSED: "CLOSED";
	readonly PENDING_ACTIVATION: "PENDING_ACTIVATION";
	readonly PENDING_CLOSURE: "PENDING_CLOSURE";
	readonly SUSPENDED: "SUSPENDED";
};
type AccountState = (typeof AccountState)[keyof typeof AccountState];
declare const AccountStatus: {
	readonly ACTIVE: "ACTIVE";
	readonly PENDING_CLOSURE: "PENDING_CLOSURE";
	readonly SUSPENDED: "SUSPENDED";
};
type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];
interface Account {
	/**
	 * <p>The unique identifier (ID) of the account.</p>
	 *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
	 *     digits.</p>
	 * @public
	 */
	Id?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the account.</p>
	 *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
	 *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
	 * @public
	 */
	Arn?: string | undefined;
	/**
	 * <p>The email address associated with the Amazon Web Services account.</p>
	 *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for this parameter is a string of characters that represents a
	 *             standard internet email address.</p>
	 * @public
	 */
	Email?: string | undefined;
	/**
	 * <p>The friendly name of the account.</p>
	 *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
	 *     that is used to validate this parameter is a string of any of the characters in the ASCII
	 *     character range.</p>
	 * @public
	 */
	Name?: string | undefined;
	/**
	 * <p>The status of the account in the organization.</p>
	 *          <important>
	 *             <p>The <code>Status</code> parameter in the <code>Account</code> object will be retired on September 9, 2026.
	 *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
	 *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
	 *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
	 *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
	 *          </important>
	 * @public
	 */
	Status?: AccountStatus | undefined;
	/**
	 * <p>Each state represents a specific phase in the account lifecycle. Use this information
	 *             to manage account access, automate workflows, or trigger actions based on account state
	 *             changes.</p>
	 *          <p>For more information about account states and their implications, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_account_state.html">Monitor the state of your Amazon Web Services accounts </a> in the
	 *                 <i>Organizations User Guide</i>.</p>
	 * @public
	 */
	State?: AccountState | undefined;
	/**
	 * <p>The paths in the organization where the account exists.</p>
	 * @public
	 */
	Paths?: string[] | undefined;
	/**
	 * <p>The method by which the account joined the organization.</p>
	 * @public
	 */
	JoinedMethod?: AccountJoinedMethod | undefined;
	/**
	 * <p>The date the account became a part of the organization.</p>
	 * @public
	 */
	JoinedTimestamp?: Date | undefined;
}
interface ListAccountsResponse {
	/**
	 * <p>A list of objects in the organization.</p>
	 *          <important>
	 *             <p>The <code>Status</code> parameter in the API response will be retired on September 9, 2026.
	 *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
	 *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
	 *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
	 *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
	 *          </important>
	 * @public
	 */
	Accounts?: Account[] | undefined;
	/**
	 * <p>If present, indicates that more output is available than is
	 *     included in the current response. Use this value in the <code>NextToken</code> request parameter
	 *     in a subsequent call to the operation to get the next part of the output. You should repeat this
	 *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandOutput extends ListAccountsResponse, MetadataBearer {
}

export {};
