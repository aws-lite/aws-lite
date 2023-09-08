let { join } = require('path')
let { writeFileSync } = require('fs')
let { SSMClient, GetParametersByPathCommand } = require('@aws-sdk/client-ssm')

// Get the list of Lambda regions
async function getRegions () {
  let Path = '/aws/service/global-infrastructure/services'
  let ssm = new SSMClient({ region: 'us-east-1' })
  let results = []
  async function getRegionPage (NextToken) {
    let cmd = new GetParametersByPathCommand({ Path, NextToken })
    let result = await ssm.send(cmd)
    results.push(...result.Parameters)
    if (result.NextToken) await getRegionPage(result.NextToken)
  }
  await getRegionPage()

  let regions = results
    .map(({ Value }) => Value)
    .sort()
    .reverse()
  if (!regions.length) throw Error('No regions found! Weird.')

  return regions
}

async function main () {
  let regions = await getRegions()
  let file = join(__dirname, '..', 'src', 'regions.json')
  writeFileSync(file, JSON.stringify(regions))
}
main()
