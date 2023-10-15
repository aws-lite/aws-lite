import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  SendMessageCommandOutput as SendMessageResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-sqs";

declare interface AwsLiteSQS {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS Docs: {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html SQS: SendMessage}
   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/sqs/readme.md#SendMessage sqs}
   */
  SendMessage: (input: { MessageBody: string, QueueUrl: string, DelaySeconds?: number, MessageAttributes?: Record<string, any>, MessageDeduplicationId?: string, MessageGroupId?: string, MessageSystemAttributes?: Record<string, any> }) => Promise<SendMessageResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    sqs: AwsLiteSQS;
  }
}
