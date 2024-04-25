let awsLite = require('../')

let service = 'dynamodb'
let region = process.env.AWS_REGION || 'us-west-2'
let TableName = process.env.AWS_LITE_TEST_TABLE_NAME || 'aws-lite-test-table'

async function main () {
  let aws = await awsLite({ region })

  try {
    let table = await aws({
      service,
      headers: { 'X-Amz-Target': 'DynamoDB_20120810.DescribeTable' },
      payload: { TableName },
    })
    console.log(`Found test table!`, table)
    return
  }
  catch (err) {
    if (!err?.__type?.includes('ResourceNotFoundException')) {
      throw err
    }
    console.log('Test table not found, creating table')
  }

  let table = await aws({
    service,
    headers: { 'X-Amz-Target': 'DynamoDB_20120810.CreateTable' },
    payload: {
      TableName,
      KeySchema: [
        {
          AttributeName: 'id',
          KeyType: 'HASH',
        },
      ],
      AttributeDefinitions: [
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    },
  })
  console.log(`Created new table: ${TableName} in ${region}`)
  console.log(table)
}
main()
