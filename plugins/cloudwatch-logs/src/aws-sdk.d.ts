// Generated from @aws-sdk/client-cloudwatch-logs@3.1136.0 by npm run gen. Do not edit.
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
declare const LogGroupClass: {
	readonly DELIVERY: "DELIVERY";
	readonly INFREQUENT_ACCESS: "INFREQUENT_ACCESS";
	readonly STANDARD: "STANDARD";
};
type LogGroupClass = (typeof LogGroupClass)[keyof typeof LogGroupClass];
declare const QueryLanguage: {
	readonly CWLI: "CWLI";
	readonly PPL: "PPL";
	readonly SQL: "SQL";
};
type QueryLanguage = (typeof QueryLanguage)[keyof typeof QueryLanguage];
declare const DataProtectionStatus: {
	readonly ACTIVATED: "ACTIVATED";
	readonly ARCHIVED: "ARCHIVED";
	readonly DELETED: "DELETED";
	readonly DISABLED: "DISABLED";
};
type DataProtectionStatus = (typeof DataProtectionStatus)[keyof typeof DataProtectionStatus];
declare const InheritedProperty: {
	readonly ACCOUNT_DATA_PROTECTION: "ACCOUNT_DATA_PROTECTION";
};
type InheritedProperty = (typeof InheritedProperty)[keyof typeof InheritedProperty];
declare const QueryStatus: {
	readonly Cancelled: "Cancelled";
	readonly Complete: "Complete";
	readonly Failed: "Failed";
	readonly Running: "Running";
	readonly Scheduled: "Scheduled";
	readonly Timeout: "Timeout";
	readonly Unknown: "Unknown";
};
type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];
interface LogGroup {
	/**
	 * <p>The name of the log group.</p>
	 * @public
	 */
	logGroupName?: string | undefined;
	/**
	 * <p>The creation time of the log group, expressed as the number of milliseconds after Jan
	 *       1, 1970 00:00:00 UTC.</p>
	 * @public
	 */
	creationTime?: number | undefined;
	/**
	 * <p>The number of days to retain the log events in the specified log group. Possible values
	 *       are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557,
	 *       2922, 3288, and 3653.</p>
	 *          <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
	 * @public
	 */
	retentionInDays?: number | undefined;
	/**
	 * <p>The number of metric filters.</p>
	 * @public
	 */
	metricFilterCount?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the log group. This version of the ARN includes a
	 *       trailing <code>:*</code> after the log group name. </p>
	 *          <p>Use this version to refer to the ARN in IAM policies when specifying
	 *       permissions for most API actions. The exception is when specifying permissions for <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>,
	 *       and <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. The permissions for those three actions require the ARN
	 *       version that doesn't include a trailing <code>:*</code>.</p>
	 * @public
	 */
	arn?: string | undefined;
	/**
	 * <p>The number of bytes stored.</p>
	 * @public
	 */
	storedBytes?: number | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the KMS key to use when
	 *       encrypting log data.</p>
	 * @public
	 */
	kmsKeyId?: string | undefined;
	/**
	 * <p>Displays whether this log group has a protection policy, or whether it had one in the
	 *       past. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>
	 * @public
	 */
	dataProtectionStatus?: DataProtectionStatus | undefined;
	/**
	 * <p>Displays all the properties that this log group has inherited from account-level
	 *       settings.</p>
	 * @public
	 */
	inheritedProperties?: InheritedProperty[] | undefined;
	/**
	 * <p>This specifies the log group class for this log group. There are three classes:</p>
	 *          <ul>
	 *             <li>
	 *                <p>The <code>Standard</code> log class supports all CloudWatch Logs features.</p>
	 *             </li>
	 *             <li>
	 *                <p>The <code>Infrequent Access</code> log class supports a subset of CloudWatch Logs
	 *           features and incurs lower costs.</p>
	 *             </li>
	 *             <li>
	 *                <p>Use the <code>Delivery</code> log class only for delivering Lambda
	 *           logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in
	 *           the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't
	 *           offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights
	 *           queries.</p>
	 *             </li>
	 *          </ul>
	 *          <p>For details about the features supported by the Standard and Infrequent Access classes,
	 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
	 *          </p>
	 * @public
	 */
	logGroupClass?: LogGroupClass | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the log group. This version of the ARN doesn't
	 *       include a trailing <code>:*</code> after the log group name. </p>
	 *          <p>Use this version to refer to the ARN in the following situations:</p>
	 *          <ul>
	 *             <li>
	 *                <p>In the <code>logGroupIdentifier</code> input field in many CloudWatch Logs
	 *           APIs.</p>
	 *             </li>
	 *             <li>
	 *                <p>In the <code>resourceArn</code> field in tagging APIs</p>
	 *             </li>
	 *             <li>
	 *                <p>In IAM policies, when specifying permissions for <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>, and <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>.</p>
	 *             </li>
	 *          </ul>
	 * @public
	 */
	logGroupArn?: string | undefined;
	/**
	 * <p>Indicates whether deletion protection is enabled for this log group. When enabled,
	 *       deletion protection blocks all deletion operations until it is explicitly disabled.</p>
	 * @public
	 */
	deletionProtectionEnabled?: boolean | undefined;
	/**
	 * <p>Indicates whether bearer token authentication is enabled for this log group. When enabled,
	 *       bearer token authentication is allowed on operations until it is explicitly disabled.</p>
	 * @public
	 */
	bearerTokenAuthenticationEnabled?: boolean | undefined;
}
interface DescribeLogGroupsResponse {
	/**
	 * <p>An array of structures, where each structure contains the information about one log
	 *       group.</p>
	 * @public
	 */
	logGroups?: LogGroup[] | undefined;
	/**
	 * <p>The token for the next set of items to return. The token expires after 24
	 *       hours.</p>
	 * @public
	 */
	nextToken?: string | undefined;
}
interface LogStream {
	/**
	 * <p>The name of the log stream.</p>
	 * @public
	 */
	logStreamName?: string | undefined;
	/**
	 * <p>The creation time of the stream, expressed as the number of milliseconds after
	 *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
	 * @public
	 */
	creationTime?: number | undefined;
	/**
	 * <p>The time of the first event, expressed as the number of milliseconds after <code>Jan 1,
	 *         1970 00:00:00 UTC</code>.</p>
	 * @public
	 */
	firstEventTimestamp?: number | undefined;
	/**
	 * <p>The time of the most recent log event in the log stream in CloudWatch Logs. This number
	 *       is expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. The
	 *         <code>lastEventTime</code> value updates on an eventual consistency basis. It typically
	 *       updates in less than an hour from ingestion, but in rare situations might take
	 *       longer.</p>
	 * @public
	 */
	lastEventTimestamp?: number | undefined;
	/**
	 * <p>The ingestion time, expressed as the number of milliseconds after <code>Jan 1, 1970
	 *         00:00:00 UTC</code> The <code>lastIngestionTime</code> value updates on an eventual
	 *       consistency basis. It typically updates in less than an hour after ingestion, but in rare
	 *       situations might take longer.</p>
	 * @public
	 */
	lastIngestionTime?: number | undefined;
	/**
	 * <p>The sequence token.</p>
	 *          <important>
	 *             <p>The sequence token is now ignored in <code>PutLogEvents</code> actions.
	 *           <code>PutLogEvents</code> actions are always accepted regardless of receiving an invalid
	 *         sequence token. You don't need to obtain <code>uploadSequenceToken</code> to use a
	 *           <code>PutLogEvents</code> action.</p>
	 *          </important>
	 * @public
	 */
	uploadSequenceToken?: string | undefined;
	/**
	 * <p>The Amazon Resource Name (ARN) of the log stream.</p>
	 * @public
	 */
	arn?: string | undefined;
	/**
	 * <p>The number of bytes stored.</p>
	 *          <p>
	 *             <b>Important:</b> As of June 17, 2019, this parameter is no
	 *       longer supported for log streams, and is always reported as zero. This change applies only to
	 *       log streams. The <code>storedBytes</code> parameter for log groups is not affected.</p>
	 *
	 * @deprecated Starting on June 17, 2019, this parameter will be deprecated for log streams, and will be reported as zero. This change applies only to log streams. The storedBytes parameter for log groups is not affected.
	 * @public
	 */
	storedBytes?: number | undefined;
}
interface DescribeLogStreamsResponse {
	/**
	 * <p>The log streams.</p>
	 * @public
	 */
	logStreams?: LogStream[] | undefined;
	/**
	 * <p>The token for the next set of items to return. The token expires after 24
	 *       hours.</p>
	 * @public
	 */
	nextToken?: string | undefined;
}
interface OutputLogEvent {
	/**
	 * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
	 *         1970 00:00:00 UTC</code>.</p>
	 * @public
	 */
	timestamp?: number | undefined;
	/**
	 * <p>The data contained in the log event.</p>
	 * @public
	 */
	message?: string | undefined;
	/**
	 * <p>The time the event was ingested, expressed as the number of milliseconds after
	 *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
	 * @public
	 */
	ingestionTime?: number | undefined;
}
interface GetLogEventsResponse {
	/**
	 * <p>The events.</p>
	 * @public
	 */
	events?: OutputLogEvent[] | undefined;
	/**
	 * <p>The token for the next set of items in the forward direction. The token expires after
	 *       24 hours. If you have reached the end of the stream, it returns the same token you passed
	 *       in.</p>
	 * @public
	 */
	nextForwardToken?: string | undefined;
	/**
	 * <p>The token for the next set of items in the backward direction. The token expires after
	 *       24 hours. This token is not null. If you have reached the end of the stream, it returns the
	 *       same token you passed in.</p>
	 * @public
	 */
	nextBackwardToken?: string | undefined;
}
interface ResultField {
	/**
	 * <p>The log event field.</p>
	 * @public
	 */
	field?: string | undefined;
	/**
	 * <p>The value of this field.</p>
	 * @public
	 */
	value?: string | undefined;
}
interface QueryStatistics {
	/**
	 * <p>The number of log events that matched the query string.</p>
	 * @public
	 */
	recordsMatched?: number | undefined;
	/**
	 * <p>The total number of log events scanned during the query.</p>
	 * @public
	 */
	recordsScanned?: number | undefined;
	/**
	 * <p>An estimate of the number of log events that were skipped when processing this query,
	 *       because the query contained an indexed field. Skipping these entries lowers query costs and
	 *       improves the query performance time. For more information about field indexes, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html">PutIndexPolicy</a>.</p>
	 * @public
	 */
	estimatedRecordsSkipped?: number | undefined;
	/**
	 * <p>The total number of bytes in the log events scanned during the query.</p>
	 * @public
	 */
	bytesScanned?: number | undefined;
	/**
	 * <p>An estimate of the number of bytes in the log events that were skipped when processing
	 *       this query, because the query contained an indexed field. Skipping these entries lowers query
	 *       costs and improves the query performance time. For more information about field indexes, see
	 *         <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html">PutIndexPolicy</a>.</p>
	 * @public
	 */
	estimatedBytesSkipped?: number | undefined;
	/**
	 * <p>The number of log groups that were scanned by this query.</p>
	 * @public
	 */
	logGroupsScanned?: number | undefined;
	/**
	 * <p>The number of rows in the final query result set. This value represents the total number
	 *       of output rows across all pages. For queries that include post-aggregation filters (such as
	 *       <code>stats count(*) by field | filter count > threshold</code>), this value might be less
	 *       than <code>recordsMatched</code>. It reflects only the rows that survived all operations in
	 *       the query.</p>
	 * @public
	 */
	resultCount?: number | undefined;
}
interface GetQueryResultsResponse {
	/**
	 * <p>The query language used for this query. For more information about the query languages
	 *       that CloudWatch Logs supports, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html">Supported query
	 *         languages</a>.</p>
	 * @public
	 */
	queryLanguage?: QueryLanguage | undefined;
	/**
	 * <p>The log events that matched the query criteria during the most recent time it ran.</p>
	 *          <p>The <code>results</code> value is an array of arrays. Each log event is one object in the
	 *       top-level array. Each of these log event objects is an array of
	 *         <code>field</code>/<code>value</code> pairs.</p>
	 * @public
	 */
	results?: ResultField[][] | undefined;
	/**
	 * <p>Includes the number of log events scanned by the query, the number of log events that
	 *       matched the query criteria, and the total number of bytes in the scanned log events. These
	 *       values reflect the full raw results of the query.</p>
	 * @public
	 */
	statistics?: QueryStatistics | undefined;
	/**
	 * <p>The status of the most recent running of the query. Possible values are
	 *         <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>,
	 *         <code>Scheduled</code>, <code>Timeout</code>, and <code>Unknown</code>.</p>
	 *          <p>Queries time out after 60 minutes of runtime. To avoid having your queries time out,
	 *       reduce the time range being searched or partition your query into a number of queries.</p>
	 * @public
	 */
	status?: QueryStatus | undefined;
	/**
	 * <p>If you associated an KMS key with the CloudWatch Logs Insights
	 *       query results in this account, this field displays the ARN of the key that's used to encrypt
	 *       the query results when <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> stores
	 *       them.</p>
	 * @public
	 */
	encryptionKey?: string | undefined;
	/**
	 * <p>If there are more log events remaining in the results, the response includes a
	 *       <code>nextToken</code>. You can use this token in a subsequent <code>GetQueryResults</code>
	 *       request to get the next set of results. You can retrieve up to 100,000 log event results
	 *       from a query by paginating with this token. This is only supported for Logs Insights QL and is currently not supported for PPL and SQL query languages.</p>
	 * @public
	 */
	nextToken?: string | undefined;
}
interface StartQueryResponse {
	/**
	 * <p>The unique ID of the query. </p>
	 * @public
	 */
	queryId?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link DeleteLogGroupCommand}.
 */
export interface DeleteLogGroupCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DeleteLogStreamCommand}.
 */
export interface DeleteLogStreamCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeLogGroupsCommand}.
 */
export interface DescribeLogGroupsCommandOutput extends DescribeLogGroupsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link DescribeLogStreamsCommand}.
 */
export interface DescribeLogStreamsCommandOutput extends DescribeLogStreamsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetLogEventsCommand}.
 */
export interface GetLogEventsCommandOutput extends GetLogEventsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandOutput extends GetQueryResultsResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link StartQueryCommand}.
 */
export interface StartQueryCommandOutput extends StartQueryResponse, MetadataBearer {
}

export {};
