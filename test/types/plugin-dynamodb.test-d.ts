import { expectError } from 'tsd'
import awsLite = require('@aws-lite/client')

// Test: DynamoDB plugin augments client
awsLite({ plugins: [import('@aws-lite/dynamodb')] }).then((client) => {
  // Test: DynamoDB namespace exists
  client.DynamoDB

  // Test: GetItem - required parameters
  client.DynamoDB.GetItem({
    TableName: 'my-table',
    Key: { id: { S: '123' } },
  })

  // Test: GetItem - with optional parameters
  client.DynamoDB.GetItem({
    TableName: 'my-table',
    Key: { id: { S: '123' } },
    ConsistentRead: true,
    ProjectionExpression: 'id, name',
    ExpressionAttributeNames: { '#n': 'name' },
  })

  // Test: GetItem - missing required params should error
  expectError(client.DynamoDB.GetItem({ Key: { id: { S: '123' } } })) // Missing TableName
  expectError(client.DynamoDB.GetItem({ TableName: 'my-table' })) // Missing Key

  // Test: PutItem - complex nested objects
  client.DynamoDB.PutItem({
    TableName: 'my-table',
    Item: {
      id: { S: '123' },
      name: { S: 'John' },
      age: { N: '30' },
      tags: { SS: ['tag1', 'tag2'] },
      metadata: {
        M: {
          created: { S: '2024-01-01' },
          updated: { S: '2024-01-02' },
        },
      },
    },
  })

  // Test: PutItem - with condition expression
  client.DynamoDB.PutItem({
    TableName: 'my-table',
    Item: { id: { S: '123' } },
    ConditionExpression: 'attribute_not_exists(id)',
    ExpressionAttributeNames: { '#id': 'id' },
    ReturnValues: 'ALL_OLD',
  })

  // Test: Query - with pagination
  client.DynamoDB.Query({
    TableName: 'my-table',
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: { ':pk': { S: 'USER#123' } },
    paginate: true,
  })

  client.DynamoDB.Query({
    TableName: 'my-table',
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: { ':pk': { S: 'USER#123' } },
    paginate: 'cursor',
  })

  // Test: Query - with filter and projection
  client.DynamoDB.Query({
    TableName: 'my-table',
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: { ':pk': { S: 'USER#123' } },
    FilterExpression: 'age > :age',
    ProjectionExpression: 'id, name, age',
  })

  // Test: Scan - all optional except TableName
  client.DynamoDB.Scan({ TableName: 'my-table' })

  client.DynamoDB.Scan({
    TableName: 'my-table',
    FilterExpression: 'age > :age',
    ExpressionAttributeValues: { ':age': { N: '21' } },
    Limit: 100,
    ConsistentRead: false,
    IndexName: 'age-index',
    paginate: true,
  })

  // Test: DescribeEndpoints - no parameters
  client.DynamoDB.DescribeEndpoints()

  // Test: DeleteItem - with return values
  client.DynamoDB.DeleteItem({
    TableName: 'my-table',
    Key: { id: { S: '123' } },
    ReturnValues: 'ALL_OLD',
  })

  // Test: UpdateItem - complex expressions
  client.DynamoDB.UpdateItem({
    TableName: 'my-table',
    Key: { id: { S: '123' } },
    UpdateExpression: 'SET #n = :name, #a = #a + :inc',
    ExpressionAttributeNames: { '#n': 'name', '#a': 'age' },
    ExpressionAttributeValues: {
      ':name': { S: 'Jane' },
      ':inc': { N: '1' },
    },
    ReturnValues: 'ALL_NEW',
  })

  return client
})
