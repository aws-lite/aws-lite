import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  DeleteLogGroupCommandOutput as DeleteLogGroupResponse,
  DescribeLogGroupsCommandOutput as DescribeLogGroupsResponse,
  DescribeLogStreamsCommandOutput as DescribeLogStreamsResponse,
  GetLogEventsCommandOutput as GetLogEventsResponse,
  GetQueryResultsCommandOutput as GetQueryResultsResponse,
  StartQueryCommandOutput as StartQueryResponse,
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
  DescribeLogGroups: (input: { accountIdentifiers?: any[], logGroupNamePrefix?: string, logGroupNamePattern?: string, nextToken?: string, limit?: number, includeLinkedAccounts?: boolean, logGroupClass?: string, paginate?: boolean | string }) => Promise<DescribeLogGroupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html CloudWatch Logs: DescribeLogStreams}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#DescribeLogStreams CloudWatch Logs: DescribeLogStreams}
   */
  DescribeLogStreams: (input: { descending?: boolean, limit?: number, logGroupIdentifier?: string, logGroupName?: string, logStreamNamePrefix?: string, nextToken?: string, orderBy?: string, paginate?: boolean | string }) => Promise<DescribeLogStreamsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html CloudWatch Logs: GetLogEvents}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#GetLogEvents CloudWatch Logs: GetLogEvents}
   */
  GetLogEvents: (input: { endTime?: number, limit?: number, logGroupIdentifier?: string, logGroupName?: string, logStreamName: string, nextToken?: string, startFromHead?: boolean, startTime?: number, unmask?: boolean, paginate?: boolean | string }) => Promise<GetLogEventsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html CloudWatch Logs: GetQueryResults}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#GetQueryResults CloudWatch Logs: GetQueryResults}
   */
  GetQueryResults: (input: { queryId?: string }) => Promise<GetQueryResultsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html CloudWatch Logs: StartQuery}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudwatch-logs/readme.md#StartQuery CloudWatch Logs: StartQuery}
   */
  StartQuery: (input: { endTime?: number, limit?: number, logGroupIdentifiers?: any[], logGroupName?: string, logGroupNames?: any[], query?: string, startTime?: number }) => Promise<StartQueryResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    CloudWatchLogs: AwsLiteCloudWatchLogs;
  }
}

export type {
  AwsLiteCloudWatchLogs,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  DeleteLogGroupResponse,
  DescribeLogGroupsResponse,
  DescribeLogStreamsResponse,
  GetLogEventsResponse,
  GetQueryResultsResponse,
  StartQueryResponse,
  // $EXPORT_END
}
