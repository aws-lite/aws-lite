import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  DeleteLogGroupCommandOutput as DeleteLogGroupResponse,
  DescribeLogGroupsCommandOutput as DescribeLogGroupsResponse,
  DescribeLogStreamsCommandOutput as DescribeLogStreamsResponse,
  GetLogEventsCommandOutput as GetLogEventsResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-cloudwatch-logs";

declare interface AwsLiteCloudWatchLogs {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html CloudWatch Logs: DeleteLogGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#DeleteLogGroup CloudWatch Logs: DeleteLogGroup}
   */
  DeleteLogGroup: (input: { logGroupName: string }) => Promise<DeleteLogGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html CloudWatch Logs: DescribeLogGroups}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#DescribeLogGroups CloudWatch Logs: DescribeLogGroups}
   */
  DescribeLogGroups: (input: { accountIdentifiers?: any[], logGroupNamePrefix?: string, logGroupNamePattern?: string, nextToken?: string, limit?: number, includeLinkedAccounts?: boolean, logGroupClass?: string, paginate?: boolean }) => Promise<DescribeLogGroupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html CloudWatch Logs: DescribeLogStreams}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#DescribeLogStreams CloudWatch Logs: DescribeLogStreams}
   */
  DescribeLogStreams: (input: { descending?: boolean, limit?: number, logGroupIdentifier?: string, logGroupName?: string, logStreamNamePrefix?: string, nextToken?: string, orderBy?: string, paginate?: boolean }) => Promise<DescribeLogStreamsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html CloudWatch Logs: GetLogEvents}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#GetLogEvents CloudWatch Logs: GetLogEvents}
   */
  GetLogEvents: (input: { endTime?: number, limit?: number, logGroupIdentifier?: string, logGroupName?: string, logStreamName: string, nextToken?: string, startFromHead?: boolean, startTime?: number, unmask?: boolean, paginate?: boolean }) => Promise<GetLogEventsResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    CloudWatchLogs: AwsLiteCloudWatchLogs;
  }
}
