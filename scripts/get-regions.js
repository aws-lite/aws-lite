let { join } = require('path')
let { writeFileSync } = require('fs')
let awsLite = require('../')

// Get the list of current AWS regions
async function main () {
  let aws = await awsLite({ region: 'us-east-1' })

  let results = await aws.ssm.GetParametersByPath({
    Path: '/aws/service/global-infrastructure/regions',
    paginate: true
  })
  let regions = results.Parameters.map(({ Value }) => Value).sort().reverse()
  if (!regions.length) throw Error('No regions found! Weird.')

  let file = join(__dirname, '..', 'src', 'regions.json')
  writeFileSync(file, JSON.stringify(regions))
}
main()
