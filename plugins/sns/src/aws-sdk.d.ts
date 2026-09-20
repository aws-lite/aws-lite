// Generated from @aws-sdk/client-sns@3.1136.0 by npm run gen. Do not edit.
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
interface PublishResponse {
	/**
	 * <p>Unique identifier assigned to the published message.</p>
	 *          <p>Length Constraint: Maximum 100 characters</p>
	 * @public
	 */
	MessageId?: string | undefined;
	/**
	 * <p>This response element applies only to FIFO (first-in-first-out) topics. </p>
	 *          <p>The sequence number is a large, non-consecutive number that Amazon SNS assigns to each
	 *             message. The length of <code>SequenceNumber</code> is 128 bits.
	 *                 <code>SequenceNumber</code> continues to increase for each
	 *                 <code>MessageGroupId</code>.</p>
	 * @public
	 */
	SequenceNumber?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link PublishCommand}.
 */
export interface PublishCommandOutput extends PublishResponse, MetadataBearer {
}

export {};
