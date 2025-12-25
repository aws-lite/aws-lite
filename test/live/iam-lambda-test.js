let { join } = require('node:path')
let test = require('node:test')
let Zip = require('adm-zip')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let aws, roleARN
let region = process.env.AWS_REGION || 'us-west-2'
let FunctionName = process.env.AWS_LITE_TEST_LAMBDA_NAME || 'aws-lite-test-lambda'
let p = path => process.platform.startsWith('win') ? 'file://' + path : path

test('Set up env', async t => {
  t.assert.ok(client, 'aws-lite client is present')
  let plugins = [
    import(p(join(__dirname, '_iam.mjs'))),
    // TODO: is the following comment still relevant?
    import(p(join(cwd, 'plugins', 'lambda', 'src', 'index.mjs'))), // We should be able to retire this once we phase out 14.x CI runs
  ]
  aws = await client({ region, plugins })
  t.assert.ok(aws, 'Client ready')
})

test('Get Lambda role', async t => {

  let role
  let roleName = FunctionName + '-role'

  try {
    role = await aws.iam.GetRole({ name: roleName })
    roleARN = role?.GetRoleResult?.Role?.Arn
  }
  catch { /* noop */ }

  if (!role) {
    console.log('Creating test role')
    role = await aws.iam.CreateRole({
      name: roleName,
      desc: 'aws-lite test Lambda role: please do not delete!',
      policyDoc: JSON.stringify({
        Version: '2012-10-17',
        Statement: [ {
          Effect: 'Allow',
          Principal: { Service: 'lambda.amazonaws.com' },
          Action: 'sts:AssumeRole',
        } ],
      }),
      path: '/',
    })
    roleARN = role?.CreateRoleResult?.Role?.Arn
    // Give it a few seconds for the role to be ready for a new Lambda
    // terraform does this too :/ https://github.com/hashicorp/terraform-provider-aws/blob/943230985fefc7b203eedaf6059e905279b27645/aws/resource_aws_lambda_function.go#L333-L353
    await new Promise((resolve) => setTimeout(resolve, 10000))
  }
  t.assert.ok(role, 'Got Lambda execution role')
  t.assert.strictEqual(roleARN?.split(':').length, 6, `Got role ARN: ${roleARN}`)
})

test('Invoke Lambda', async t => {

  async function getConfig (tryNum = 1) {
    let result = await aws.lambda.GetFunctionConfiguration({ FunctionName })
    if (result.State === 'Active') return result
    if (result.State === 'Pending') {
      if (++tryNum > 5) {
        throw Error('Too many GetFunctionConfiguration tries')
      }
      await new Promise((res) => setTimeout(res, 1000))
      return await getConfig(tryNum)
    }
    throw Error(`Lambda in a weird state: ${result.State}`)
  }

  let config
  try {
    config = await getConfig()
  }
  catch (err) {
    if (err.statusCode !== 404) {
      t.assert.fail('Failed, cannot proceed with test')
      console.log(err)
      return
    }
  }

  if (!config) {
    console.log(`Creating new test Lambda!`)

    let zip = new Zip()
    let code = `export const handler = async (event) => ({ ok: true, event })\n`
    zip.addFile('index.mjs', Buffer.from(code, 'utf8'))
    // Deployment contents must be base64-encoded
    let ZipFile = zip.toBuffer().toString('base64')

    await aws.lambda.CreateFunction({
      Architectures: [ 'arm64' ],
      Code: { ZipFile },
      Description: 'aws-lite test Lambda: please do not delete!',
      FunctionName,
      Handler: 'index.handler',
      MemorySize: 256,
      Role: roleARN,
      Runtime: 'nodejs18.x',
    })

    // Check to see if the Lambda is online; it'll blow up if not after a few seconds
    config = await getConfig()
  }

  t.assert.strictEqual(config.FunctionName, FunctionName, 'Got back function config for test Lambda')
  t.assert.strictEqual(config.State, 'Active', 'Test Lambda is active!')

  let Payload = { hello: 'there' }
  let result = await aws.lambda.Invoke({ FunctionName, Payload })
  let expected = { ok: true, event: Payload }
  console.log(`Lambda invoke returned:`, result)
  t.assert.deepStrictEqual(result.Payload, expected, 'Lambda invoked with correct payload')
})
