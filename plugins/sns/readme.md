# [`@aws-lite/sns`](https://aws-lite.org/services/sns)

> Official `aws-lite` plugin for SNS

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/sns
```

Optionally install types:

```sh
npm i -D @aws-lite/sns-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/sns)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `Publish`

[Canonical AWS API doc](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)

Properties:
- **`Message` (string) [required]**
  - Message payload to send
- **`MessageAttributes` (string)**
  - String to MessageAttributeValue object map
- **`MessageDeduplicationId` (string)**
  - Ensures request is idempotent; may only be used for FIFO topics
- **`MessageGroupId` (string)**
  - Tag specifying a specific message group; may only be used for FIFO topics
- **`MessageStructure` (string)**
  - May be set to `json` publish JSON payloads
- **`PhoneNumber` (string)**
  - SMS recipient phone number in E.164 format; if not specified, you must specify `TargetArn` or `TargetArn`
- **`Subject` (string)**
  - Email subject line
- **`TargetArn` (string)**
  - If not specified, you must specify `PhoneNumber` or `TopicArn`
- **`TopicArn` (string)**
  - ARN of the the topic to publish to; if not specified, you must specify `PhoneNumber` or `TargetArn`


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/aws-lite/aws-lite#authoring-aws-lite-plugins)!

- [`AddPermission`](https://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html)
- [`CheckIfPhoneNumberIsOptedOut`](https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html)
- [`ConfirmSubscription`](https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html)
- [`CreatePlatformApplication`](https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html)
- [`CreatePlatformEndpoint`](https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html)
- [`CreateSMSSandboxPhoneNumber`](https://docs.aws.amazon.com/sns/latest/api/API_CreateSMSSandboxPhoneNumber.html)
- [`CreateTopic`](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html)
- [`DeleteEndpoint`](https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html)
- [`DeletePlatformApplication`](https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html)
- [`DeleteSMSSandboxPhoneNumber`](https://docs.aws.amazon.com/sns/latest/api/API_DeleteSMSSandboxPhoneNumber.html)
- [`DeleteTopic`](https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html)
- [`GetDataProtectionPolicy`](https://docs.aws.amazon.com/sns/latest/api/API_GetDataProtectionPolicy.html)
- [`GetEndpointAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html)
- [`GetPlatformApplicationAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html)
- [`GetSMSAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html)
- [`GetSMSSandboxAccountStatus`](https://docs.aws.amazon.com/sns/latest/api/API_GetSMSSandboxAccountStatus.html)
- [`GetSubscriptionAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html)
- [`GetTopicAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html)
- [`ListEndpointsByPlatformApplication`](https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html)
- [`ListOriginationNumbers`](https://docs.aws.amazon.com/sns/latest/api/API_ListOriginationNumbers.html)
- [`ListPhoneNumbersOptedOut`](https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html)
- [`ListPlatformApplications`](https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html)
- [`ListSMSSandboxPhoneNumbers`](https://docs.aws.amazon.com/sns/latest/api/API_ListSMSSandboxPhoneNumbers.html)
- [`ListSubscriptions`](https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html)
- [`ListSubscriptionsByTopic`](https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html)
- [`ListTagsForResource`](https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html)
- [`ListTopics`](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html)
- [`OptInPhoneNumber`](https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html)
- [`PublishBatch`](https://docs.aws.amazon.com/sns/latest/api/API_PublishBatch.html)
- [`PutDataProtectionPolicy`](https://docs.aws.amazon.com/sns/latest/api/API_PutDataProtectionPolicy.html)
- [`RemovePermission`](https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html)
- [`SetEndpointAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html)
- [`SetPlatformApplicationAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html)
- [`SetSMSAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html)
- [`SetSubscriptionAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html)
- [`SetTopicAttributes`](https://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html)
- [`Subscribe`](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)
- [`TagResource`](https://docs.aws.amazon.com/sns/latest/api/API_TagResource.html)
- [`Unsubscribe`](https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html)
- [`UntagResource`](https://docs.aws.amazon.com/sns/latest/api/API_UntagResource.html)
- [`VerifySMSSandboxPhoneNumber`](https://docs.aws.amazon.com/sns/latest/api/API_VerifySMSSandboxPhoneNumber.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
