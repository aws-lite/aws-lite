import awsLite from '@aws-lite/client'
import s3, { type GetObjectResponse } from '@aws-lite/s3'
import dynamodb from '@aws-lite/dynamodb'

const client = await awsLite({ plugins: [s3, dynamodb] })
const object: GetObjectResponse = await client.S3.GetObject({ Bucket: 'bucket', Key: 'key' })
const contentType: string | undefined = object.ContentType
// @ts-expect-error Key is required
client.S3.GetObject({ Bucket: 'bucket' })
// @ts-expect-error Response fields retain their types
const invalidContentType: number = object.ContentType

client.DynamoDB.GetItem({ TableName: 'table', Key: { id: 'key' } })
const methods = s3.methods
