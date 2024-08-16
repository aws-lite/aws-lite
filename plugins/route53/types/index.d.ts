import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  ChangeResourceRecordSetsCommandOutput as ChangeResourceRecordSetsResponse,
  ListResourceRecordSetsCommandOutput as ListResourceRecordSetsResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-route-53";

declare interface AwsLiteRoute53 {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html Route 53: ChangeResourceRecordSets}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/route53/readme.md#ChangeResourceRecordSets Route 53: ChangeResourceRecordSets}
   */
  ChangeResourceRecordSets: (input: { HostedZoneId: string, ChangeBatch?: Record<string, any> }) => Promise<ChangeResourceRecordSetsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html Route 53: ListResourceRecordSets}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/route53/readme.md#ListResourceRecordSets Route 53: ListResourceRecordSets}
   */
  ListResourceRecordSets: (input: { HostedZoneId: string, MaxItems?: number, StartRecordIdentifier?: string, StartRecordName?: string, StartRecordType?: string, paginate?: boolean | string }) => Promise<ListResourceRecordSetsResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    Route53: AwsLiteRoute53;
  }
}

export type {
  AwsLiteRoute53,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  ChangeResourceRecordSetsResponse,
  ListResourceRecordSetsResponse,
  // $EXPORT_END
}
