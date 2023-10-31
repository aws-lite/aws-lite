import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  PublishCommandOutput as PublishResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-sns";

declare interface AwsLiteSNS {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html SNS: Publish}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/sns/readme.md#Publish SNS: Publish}
   */
  Publish: (input: { Message: string, MessageAttributes?: string, MessageDeduplicationId?: string, MessageGroupId?: string, MessageStructure?: string, PhoneNumber?: string, Subject?: string, TargetArn?: string, TopicArn?: string }) => Promise<PublishResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    sns: AwsLiteSNS;
  }
}
