# [`@aws-lite/sqs`](https://aws-lite.org/services/sqs)

> Official `aws-lite` plugin for SQS

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/sqs
```

Optionally install types:

```sh
npm i -D @aws-lite/sqs-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/sqs)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `SendMessage`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html)

Properties:
- **`MessageBody` (string) [required]**
  - Message to send, from 1b - 256KiB
- **`QueueUrl` (string) [required]**
  - SQS queue URL to send the message to
- **`DelaySeconds` (number)**
  - Seconds, from 0 - 900, to delay a message
- **`MessageAttributes` (object)**
  - Message attribute map
  - [More details (AWS)](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_MessageAttributeValue.html)
- **`MessageDeduplicationId` (string)**
  - Ensures request is idempotent; may only be used for FIFO queues
- **`MessageGroupId` (string)**
  - Tag specifying a specific message group; may only be used for FIFO queues
- **`MessageSystemAttributes` (object)**
  - Message system attribute map
  - [More details (AWS)](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_MessageSystemAttributeValue.html)


### `GetQueueAttributes`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html)

Properties:
- **`QueueUrl` (string) [required]**
  - SQS queue URL to retrieve attribute information from
- **`AttributeNames` (array)**
  - List of attribute names (strings) to retrieve


### `ReceiveMessage`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html)

Properties:
- **`QueueUrl` (string) [required]**
  - SQS queue URL from which messages are received
- **`AttributeNames` (array)**
  - List of attribute names (strings) to be returned along with each message
- **`MaxNumberOfMessages` (number)**
  - Maximum number of messages to return
- **`MessageAttributeNames` (array)**
  - The name of the message attribute
- **`MessageSystemAttributeNames` (array)**
  - A list of attributes that need to be returned along with each message
- **`ReceiveRequestAttemptId` (string)**
  - The token used for deduplication of `ReceiveMessage` calls
- **`VisibilityTimeout` (number)**
  - The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a `ReceiveMessage` request
- **`WaitTimeSeconds` (number)**
  - The duration (in seconds) for which the call waits for a message to arrive in the queue before returning


### `DeleteMessage`

[Canonical AWS API doc](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html)

Properties:
- **`QueueUrl` (string) [required]**
  - SQS queue URL from which messages are deleted
- **`ReceiptHandle` (string) [required]**
  - The receipt handle associated with the message to delete


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/aws-lite/aws-lite#authoring-aws-lite-plugins)!

- [`AddPermission`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html)
- [`CancelMessageMoveTask`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CancelMessageMoveTask.html)
- [`ChangeMessageVisibility`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html)
- [`ChangeMessageVisibilityBatch`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html)
- [`CreateQueue`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html)
- [`DeleteMessageBatch`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html)
- [`DeleteQueue`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html)
- [`GetQueueUrl`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html)
- [`ListDeadLetterSourceQueues`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html)
- [`ListMessageMoveTasks`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListMessageMoveTasks.html)
- [`ListQueues`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html)
- [`ListQueueTags`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html)
- [`PurgeQueue`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html)
- [`RemovePermission`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html)
- [`SendMessageBatch`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html)
- [`SetQueueAttributes`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html)
- [`StartMessageMoveTask`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_StartMessageMoveTask.html)
- [`TagQueue`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html)
- [`UntagQueue`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_UntagQueue.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
