// Generated from @aws-sdk/client-ssm@3.1136.0 by npm run gen. Do not edit.
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
declare const ParameterTier: {
	readonly ADVANCED: "Advanced";
	readonly INTELLIGENT_TIERING: "Intelligent-Tiering";
	readonly STANDARD: "Standard";
};
type ParameterTier = (typeof ParameterTier)[keyof typeof ParameterTier];
declare const ParameterType: {
	readonly SECURE_STRING: "SecureString";
	readonly STRING: "String";
	readonly STRING_LIST: "StringList";
};
type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];
interface DeleteParameterResult {
}
interface DeleteParametersResult {
	/**
	 * <p>The names of the deleted parameters.</p>
	 * @public
	 */
	DeletedParameters?: string[] | undefined;
	/**
	 * <p>The names of parameters that weren't deleted because the parameters aren't valid.</p>
	 * @public
	 */
	InvalidParameters?: string[] | undefined;
}
interface Parameter {
	/**
	 * <p>The name of the parameter.</p>
	 * @public
	 */
	Name?: string | undefined;
	/**
	 * <p>The type of parameter. Valid values include the following: <code>String</code>,
	 *     <code>StringList</code>, and <code>SecureString</code>.</p>
	 *          <note>
	 *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
	 *     spaces between commas in the <code>Value</code> field.</p>
	 *          </note>
	 * @public
	 */
	Type?: ParameterType | undefined;
	/**
	 * <p>The parameter value.</p>
	 *          <note>
	 *             <p>If type is <code>StringList</code>, the system returns a comma-separated string with no
	 *     spaces between commas in the <code>Value</code> field.</p>
	 *          </note>
	 * @public
	 */
	Value?: string | undefined;
	/**
	 * <p>The parameter version.</p>
	 * @public
	 */
	Version?: number | undefined;
	/**
	 * <p>Either the version number or the label used to retrieve the parameter value. Specify
	 *    selectors by using one of the following formats:</p>
	 *          <p>parameter_name:version</p>
	 *          <p>parameter_name:label</p>
	 * @public
	 */
	Selector?: string | undefined;
	/**
	 * <p>Applies to parameters that reference information in other Amazon Web Services services.
	 *     <code>SourceResult</code> is the raw result or response from the source.</p>
	 * @public
	 */
	SourceResult?: string | undefined;
	/**
	 * <p>Date the parameter was last changed or updated and the parameter version was created.</p>
	 * @public
	 */
	LastModifiedDate?: Date | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the parameter.</p>
	 * @public
	 */
	ARN?: string | undefined;
	/**
	 * <p>The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The
	 *    default is <code>text</code>.</p>
	 * @public
	 */
	DataType?: string | undefined;
}
interface GetParameterResult {
	/**
	 * <p>Information about a parameter.</p>
	 * @public
	 */
	Parameter?: Parameter | undefined;
}
interface GetParametersResult {
	/**
	 * <p>A list of details for a parameter.</p>
	 * @public
	 */
	Parameters?: Parameter[] | undefined;
	/**
	 * <p>A list of parameters that aren't formatted correctly or don't run during an
	 *    execution.</p>
	 * @public
	 */
	InvalidParameters?: string[] | undefined;
}
/**
 * @public
 *
 * The output of {@link DeleteParameterCommand}.
 */
export interface DeleteParameterCommandOutput extends DeleteParameterResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteParametersCommand}.
 */
export interface DeleteParametersCommandOutput extends DeleteParametersResult, MetadataBearer {
}
interface GetParametersByPathResult {
	/**
	 * <p>A list of parameters found in the specified hierarchy.</p>
	 * @public
	 */
	Parameters?: Parameter[] | undefined;
	/**
	 * <p>The token for the next set of items to return. Use this token to get the next set of
	 *    results.</p>
	 * @public
	 */
	NextToken?: string | undefined;
}
interface PutParameterResult {
	/**
	 * <p>The new version number of a parameter. If you edit a parameter value, Parameter Store
	 *    automatically creates a new version and assigns this new version a unique ID. You can reference a
	 *    parameter version ID in API operations or in Systems Manager documents (SSM documents). By default, if you
	 *    don't specify a specific version, the system returns the latest parameter value when a parameter
	 *    is called.</p>
	 * @public
	 */
	Version?: number | undefined;
	/**
	 * <p>The tier assigned to the parameter.</p>
	 * @public
	 */
	Tier?: ParameterTier | undefined;
}
/**
 * @public
 *
 * The output of {@link GetParameterCommand}.
 */
export interface GetParameterCommandOutput extends GetParameterResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetParametersByPathCommand}.
 */
export interface GetParametersByPathCommandOutput extends GetParametersByPathResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetParametersCommand}.
 */
export interface GetParametersCommandOutput extends GetParametersResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PutParameterCommand}.
 */
export interface PutParameterCommandOutput extends PutParameterResult, MetadataBearer {
}

export {};
