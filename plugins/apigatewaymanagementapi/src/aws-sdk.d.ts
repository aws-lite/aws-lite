// Generated from @aws-sdk/client-apigatewaymanagementapi@3.1136.0 by npm run gen. Do not edit.
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
interface Identity {
	/**
	 * <p>The source IP address of the TCP connection making the request to API Gateway.</p>
	 * @public
	 */
	SourceIp: string | undefined;
	/**
	 * <p>The User Agent of the API caller.</p>
	 * @public
	 */
	UserAgent: string | undefined;
}
interface GetConnectionResponse {
	/**
	 * <p>The time in ISO 8601 format for when the connection was established.</p>
	 * @public
	 */
	ConnectedAt?: Date | undefined;
	Identity?: Identity | undefined;
	/**
	 * <p>The time in ISO 8601 format for when the connection was last active.</p>
	 * @public
	 */
	LastActiveAt?: Date | undefined;
}
/**
 * @public
 *
 * The output of {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandOutput extends GetConnectionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link PostToConnectionCommand}.
 */
export interface PostToConnectionCommandOutput extends MetadataBearer {
}

export {};
