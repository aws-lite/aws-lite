import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  SendMessageCommandOutput as SendMessageResponse,
  GetQueueAttributesCommandOutput as GetQueueAttributesResponse,
  ReceiveMessageCommandOutput as ReceiveMessageResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-sqs";

declare interface AwsLiteSQS {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html SQS: SendMessage}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/sqs/readme.md#SendMessage SQS: SendMessage}
   */
  SendMessage: (input: { MessageBody: string, QueueUrl: string, DelaySeconds?: number, MessageAttributes?: Record<string, any>, MessageDeduplicationId?: string, MessageGroupId?: string, MessageSystemAttributes?: Record<string, any> }) => Promise<SendMessageResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html SQS: GetQueueAttributes}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/sqs/readme.md#GetQueueAttributes SQS: GetQueueAttributes}
   */
  GetQueueAttributes: (input: { QueueUrl: string, AttributeNames?: any[] }) => Promise<GetQueueAttributesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html SQS: ReceiveMessage}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/sqs/readme.md#ReceiveMessage SQS: ReceiveMessage}
   */
  ReceiveMessage: (input: { QueueUrl: string, AttributeNames?: any[], MaxNumberOfMessages?: number, MessageAttributeNames?: any[], MessageSystemAttributeNames?: any[], ReceiveRequestAttemptId?: string, VisibilityTimeout?: number, WaitTimeSeconds?: number }) => Promise<ReceiveMessageResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    SQS: AwsLiteSQS;
  }
}
