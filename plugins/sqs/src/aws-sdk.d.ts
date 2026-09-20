// Generated from @aws-sdk/client-sqs@3.1136.0 by npm run gen. Do not edit.
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
declare const QueueAttributeName: {
	readonly All: "All";
	readonly ApproximateNumberOfMessages: "ApproximateNumberOfMessages";
	readonly ApproximateNumberOfMessagesDelayed: "ApproximateNumberOfMessagesDelayed";
	readonly ApproximateNumberOfMessagesNotVisible: "ApproximateNumberOfMessagesNotVisible";
	readonly ContentBasedDeduplication: "ContentBasedDeduplication";
	readonly CreatedTimestamp: "CreatedTimestamp";
	readonly DeduplicationScope: "DeduplicationScope";
	readonly DelaySeconds: "DelaySeconds";
	readonly FifoQueue: "FifoQueue";
	readonly FifoThroughputLimit: "FifoThroughputLimit";
	readonly KmsDataKeyReusePeriodSeconds: "KmsDataKeyReusePeriodSeconds";
	readonly KmsMasterKeyId: "KmsMasterKeyId";
	readonly LastModifiedTimestamp: "LastModifiedTimestamp";
	readonly MaximumMessageSize: "MaximumMessageSize";
	readonly MessageRetentionPeriod: "MessageRetentionPeriod";
	readonly Policy: "Policy";
	readonly QueueArn: "QueueArn";
	readonly ReceiveMessageWaitTimeSeconds: "ReceiveMessageWaitTimeSeconds";
	readonly RedriveAllowPolicy: "RedriveAllowPolicy";
	readonly RedrivePolicy: "RedrivePolicy";
	readonly SqsManagedSseEnabled: "SqsManagedSseEnabled";
	readonly VisibilityTimeout: "VisibilityTimeout";
};
type QueueAttributeName = (typeof QueueAttributeName)[keyof typeof QueueAttributeName];
declare const MessageSystemAttributeName: {
	readonly AWSTraceHeader: "AWSTraceHeader";
	readonly All: "All";
	readonly ApproximateFirstReceiveTimestamp: "ApproximateFirstReceiveTimestamp";
	readonly ApproximateReceiveCount: "ApproximateReceiveCount";
	readonly DeadLetterQueueSourceArn: "DeadLetterQueueSourceArn";
	readonly MessageDeduplicationId: "MessageDeduplicationId";
	readonly MessageGroupId: "MessageGroupId";
	readonly SenderId: "SenderId";
	readonly SentTimestamp: "SentTimestamp";
	readonly SequenceNumber: "SequenceNumber";
};
type MessageSystemAttributeName = (typeof MessageSystemAttributeName)[keyof typeof MessageSystemAttributeName];
interface GetQueueAttributesResult {
	/**
	 * <p>A map of attributes to their respective values.</p>
	 * @public
	 */
	Attributes?: Partial<Record<QueueAttributeName, string>> | undefined;
}
interface MessageAttributeValue {
	/**
	 * <p>Strings are Unicode with UTF-8 binary encoding. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable
	 *                 Characters</a>.</p>
	 * @public
	 */
	StringValue?: string | undefined;
	/**
	 * <p>Binary type attributes can store any binary data, such as compressed data, encrypted
	 *             data, or images.</p>
	 * @public
	 */
	BinaryValue?: Uint8Array | undefined;
	/**
	 * <p>Not implemented. Reserved for future use.</p>
	 * @public
	 */
	StringListValues?: string[] | undefined;
	/**
	 * <p>Not implemented. Reserved for future use.</p>
	 * @public
	 */
	BinaryListValues?: Uint8Array[] | undefined;
	/**
	 * <p>Amazon SQS supports the following logical data types: <code>String</code>,
	 *                 <code>Number</code>, and <code>Binary</code>. For the <code>Number</code> data type,
	 *             you must use <code>StringValue</code>.</p>
	 *          <p>You can also append custom labels. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a> in the <i>Amazon SQS Developer
	 *             Guide</i>.</p>
	 * @public
	 */
	DataType: string | undefined;
}
interface Message {
	/**
	 * <p>A unique identifier for the message. A <code>MessageId</code>is considered unique
	 *             across all Amazon Web Services accounts for an extended period of time.</p>
	 * @public
	 */
	MessageId?: string | undefined;
	/**
	 * <p>An identifier associated with the act of receiving the message. A new receipt handle
	 *             is returned every time you receive a message. When deleting a message, you provide the
	 *             last received receipt handle to delete the message.</p>
	 * @public
	 */
	ReceiptHandle?: string | undefined;
	/**
	 * <p>An MD5 digest of the non-URL-encoded message body string.</p>
	 * @public
	 */
	MD5OfBody?: string | undefined;
	/**
	 * <p>The message's contents (not URL-encoded).</p>
	 * @public
	 */
	Body?: string | undefined;
	/**
	 * <p>A map of the attributes requested in <code>
	 *                <a>ReceiveMessage</a>
	 *             </code> to
	 *             their respective values. Supported attributes:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>ApproximateReceiveCount</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>ApproximateFirstReceiveTimestamp</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>MessageDeduplicationId</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>MessageGroupId</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SenderId</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SentTimestamp</code>
	 *                </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SequenceNumber</code>
	 *                </p>
	 *             </li>
	 *          </ul>
	 *          <p>
	 *             <code>ApproximateFirstReceiveTimestamp</code> and <code>SentTimestamp</code> are each
	 *             returned as an integer representing the <a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in
	 *             milliseconds.</p>
	 * @public
	 */
	Attributes?: Partial<Record<MessageSystemAttributeName, string>> | undefined;
	/**
	 * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
	 * @public
	 */
	MD5OfMessageAttributes?: string | undefined;
	/**
	 * <p>Each message attribute consists of a <code>Name</code>, <code>Type</code>,
	 * and <code>Value</code>. For more information, see
	 * <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS
	 * message attributes</a> in the <i>Amazon SQS Developer Guide</i>.</p>
	 * @public
	 */
	MessageAttributes?: Record<string, MessageAttributeValue> | undefined;
}
interface ReceiveMessageResult {
	/**
	 * <p>A list of messages.</p>
	 * @public
	 */
	Messages?: Message[] | undefined;
}
interface SendMessageResult {
	/**
	 * <p>An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
	 * @public
	 */
	MD5OfMessageBody?: string | undefined;
	/**
	 * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
	 * @public
	 */
	MD5OfMessageAttributes?: string | undefined;
	/**
	 * <p>An MD5 digest of the non-URL-encoded message system attribute string. You can use this
	 * attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest.</p>
	 * @public
	 */
	MD5OfMessageSystemAttributes?: string | undefined;
	/**
	 * <p>An attribute containing the <code>MessageId</code> of the message sent to the queue.
	 *             For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer
	 *                 Guide</i>. </p>
	 * @public
	 */
	MessageId?: string | undefined;
	/**
	 * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
	 *          <p>The large, non-consecutive number that Amazon SQS assigns to each message.</p>
	 *          <p>The length of <code>SequenceNumber</code> is 128 bits. <code>SequenceNumber</code>
	 *             continues to increase for a particular <code>MessageGroupId</code>.</p>
	 * @public
	 */
	SequenceNumber?: string | undefined;
}
/**
 * @public
 *
 * The output of {@link DeleteMessageCommand}.
 */
export interface DeleteMessageCommandOutput extends MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link GetQueueAttributesCommand}.
 */
export interface GetQueueAttributesCommandOutput extends GetQueueAttributesResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ReceiveMessageCommand}.
 */
export interface ReceiveMessageCommandOutput extends ReceiveMessageResult, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link SendMessageCommand}.
 */
export interface SendMessageCommandOutput extends SendMessageResult, MetadataBearer {
}

export {};
