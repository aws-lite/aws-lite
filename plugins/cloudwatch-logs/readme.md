# `@aws-lite/cloudwatch-logs`

> Official `aws-lite` plugin for CloudWatch Logs

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/cloudwatch-logs
```

Optionally install types:

```sh
npm i -D @aws-lite/cloudwatch-logs-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudwatch-logs)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudwatch-logs)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `DeleteLogGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html)

Properties:
- **`logGroupName` (string) [required]**
  - Name of the log group


### `DescribeLogGroups`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html)

Properties:
- **`accountIdentifiers` (array)**
  - List of accounts to search when `includeLinkedAccounts` is `true`
- **`logGroupNamePrefix` (string)**
  - Prefix to match
- **`logGroupNamePattern` (string)**
  - Case-sensitive substring to match
- **`nextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`limit` (number)**
  - Maximum number of items to evaluate and return
- **`includeLinkedAccounts` (boolean)**
  - Return log groups in the accounts enumerated by `accountIdentifiers`
- **`logGroupClass` (string)**
  - Log group class setting: `STANDARD` (supports all CloudWatch Logs features), or `INFREQUENT_ACCESS` (feature subset with lower costs)
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `DescribeLogStreams`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html)

Properties:
- **`descending` (boolean)**
  - Return results in descending order (if `true`)
- **`limit` (number)**
  - Maximum number of items to evaluate and return
- **`logGroupIdentifier` (string)**
  - Name or ARN of the log group
- **`logGroupName` (string)**
  - Name of the log group
- **`logStreamNamePrefix` (string)**
  - Prefix to match
- **`nextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`orderBy` (string)**
  - Order results by log stream name (`LogStreamName`) or event time (`LastEventTime`)
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `GetLogEvents`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html)

Properties:
- **`endTime` (number)**
  - End of the time range in epoch milliseconds
- **`limit` (number)**
  - Maximum number of items to evaluate and return
- **`logGroupIdentifier` (string)**
  - Name or ARN of the log group
- **`logGroupName` (string)**
  - Name of the log group
- **`logStreamName` (string) [required]**
  - Name of the log stream
- **`nextToken` (string)**
  - Pagination cursor token to be used if `NextToken` was returned in a previous response
- **`startFromHead` (boolean)**
  - Return earliest log events first (`true`)
- **`startTime` (number)**
  - Start of the time range in epoch milliseconds
- **`unmask` (boolean)**
  - Display log event fields with all sensitive data unmasked and visible (`true`)
- **`paginate` (boolean)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`AssociateKmsKey`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html)
- [`CancelExportTask`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html)
- [`CreateDelivery`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html)
- [`CreateExportTask`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html)
- [`CreateLogAnomalyDetector`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html)
- [`CreateLogGroup`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html)
- [`CreateLogStream`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html)
- [`DeleteAccountPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteAccountPolicy.html)
- [`DeleteDataProtectionPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDataProtectionPolicy.html)
- [`DeleteDelivery`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDelivery.html)
- [`DeleteDeliveryDestination`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestination.html)
- [`DeleteDeliveryDestinationPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestinationPolicy.html)
- [`DeleteDeliverySource`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliverySource.html)
- [`DeleteDestination`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html)
- [`DeleteLogAnomalyDetector`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogAnomalyDetector.html)
- [`DeleteLogStream`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html)
- [`DeleteMetricFilter`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html)
- [`DeleteQueryDefinition`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html)
- [`DeleteResourcePolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html)
- [`DeleteRetentionPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html)
- [`DeleteSubscriptionFilter`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html)
- [`DescribeAccountPolicies`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeAccountPolicies.html)
- [`DescribeDeliveries`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html)
- [`DescribeDeliveryDestinations`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveryDestinations.html)
- [`DescribeDeliverySources`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliverySources.html)
- [`DescribeDestinations`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html)
- [`DescribeExportTasks`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html)
- [`DescribeMetricFilters`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html)
- [`DescribeQueries`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html)
- [`DescribeQueryDefinitions`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html)
- [`DescribeResourcePolicies`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html)
- [`DescribeSubscriptionFilters`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html)
- [`DisassociateKmsKey`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html)
- [`FilterLogEvents`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html)
- [`GetDataProtectionPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDataProtectionPolicy.html)
- [`GetDelivery`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDelivery.html)
- [`GetDeliveryDestination`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestination.html)
- [`GetDeliveryDestinationPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestinationPolicy.html)
- [`GetDeliverySource`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliverySource.html)
- [`GetLogAnomalyDetector`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogAnomalyDetector.html)
- [`GetLogGroupFields`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html)
- [`GetLogRecord`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html)
- [`GetQueryResults`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html)
- [`ListAnomalies`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html)
- [`ListLogAnomalyDetectors`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html)
- [`ListTagsForResource`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html)
- [`ListTagsLogGroup`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html)
- [`PutAccountPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html)
- [`PutDataProtectionPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html)
- [`PutDeliveryDestination`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html)
- [`PutDeliveryDestinationPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html)
- [`PutDeliverySource`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html)
- [`PutDestination`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html)
- [`PutDestinationPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html)
- [`PutLogEvents`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html)
- [`PutMetricFilter`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html)
- [`PutQueryDefinition`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html)
- [`PutResourcePolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html)
- [`PutRetentionPolicy`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html)
- [`PutSubscriptionFilter`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html)
- [`StartLiveTail`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTail.html)
- [`StartQuery`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html)
- [`StopQuery`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html)
- [`TagLogGroup`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html)
- [`TagResource`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html)
- [`TestMetricFilter`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html)
- [`UntagLogGroup`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html)
- [`UntagResource`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html)
- [`UpdateAnomaly`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html)
- [`UpdateLogAnomalyDetector`](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
