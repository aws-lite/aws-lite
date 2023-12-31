const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/'
export default {
  AddPermission:                { disabled, awsDoc: docRoot + 'API_AddPermission.html' },
  CancelMessageMoveTask:        { disabled, awsDoc: docRoot + 'API_CancelMessageMoveTask.html' },
  ChangeMessageVisibility:      { disabled, awsDoc: docRoot + 'API_ChangeMessageVisibility.html' },
  ChangeMessageVisibilityBatch: { disabled, awsDoc: docRoot + 'API_ChangeMessageVisibilityBatch.html' },
  CreateQueue:                  { disabled, awsDoc: docRoot + 'API_CreateQueue.html' },
  DeleteMessageBatch:           { disabled, awsDoc: docRoot + 'API_DeleteMessageBatch.html' },
  DeleteQueue:                  { disabled, awsDoc: docRoot + 'API_DeleteQueue.html' },
  GetQueueUrl:                  { disabled, awsDoc: docRoot + 'API_GetQueueUrl.html' },
  ListDeadLetterSourceQueues:   { disabled, awsDoc: docRoot + 'API_ListDeadLetterSourceQueues.html' },
  ListMessageMoveTasks:         { disabled, awsDoc: docRoot + 'API_ListMessageMoveTasks.html' },
  ListQueues:                   { disabled, awsDoc: docRoot + 'API_ListQueues.html' },
  ListQueueTags:                { disabled, awsDoc: docRoot + 'API_ListQueueTags.html' },
  PurgeQueue:                   { disabled, awsDoc: docRoot + 'API_PurgeQueue.html' },
  RemovePermission:             { disabled, awsDoc: docRoot + 'API_RemovePermission.html' },
  SendMessageBatch:             { disabled, awsDoc: docRoot + 'API_SendMessageBatch.html' },
  SetQueueAttributes:           { disabled, awsDoc: docRoot + 'API_SetQueueAttributes.html' },
  StartMessageMoveTask:         { disabled, awsDoc: docRoot + 'API_StartMessageMoveTask.html' },
  TagQueue:                     { disabled, awsDoc: docRoot + 'API_TagQueue.html' },
  UntagQueue:                   { disabled, awsDoc: docRoot + 'API_UntagQueue.html' },
}
