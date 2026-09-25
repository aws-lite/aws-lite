import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  SendEmailCommandOutput as SendEmailResponse,
  SendRawEmailCommandOutput as SendRawEmailResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-ses";

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLiteSES {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html SES: SendEmail}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ses/readme.md#SendEmail SES: SendEmail}
   */
  SendEmail: (input: AwsLiteMethodOptions & { Source: string, Destination: Record<string, any>, Message: Record<string, any>, ConfigurationSetName?: string, ReplyToAddresses?: any[], ReturnPath?: string, ReturnPathArn?: string, SourceArn?: string, Tags?: any[] }) => Promise<SendEmailResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/ses/latest/APIReference/API_SendRawEmail.html SES: SendRawEmail}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/ses/readme.md#SendRawEmail SES: SendRawEmail}
   */
  SendRawEmail: (input: AwsLiteMethodOptions & { RawMessage: Record<string, any>, ConfigurationSetName?: string, Destinations?: any[], FromArn?: string, ReturnPathArn?: string, Source?: string, SourceArn?: string, Tags?: any[] }) => Promise<SendRawEmailResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    SES: AwsLiteSES;
  }
}

export type {
  AwsLiteSES,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  SendEmailResponse,
  SendRawEmailResponse,
  // $EXPORT_END
}
