let regions = require('./regions.json')

module.exports = async function getRegion (params) {
  let paramsRegion = validateRegion(params, params.region)
  if (paramsRegion) return paramsRegion

  let envRegion = getRegionFromEnv(params)
  if (envRegion) return envRegion

  let isInLambda = process.env.AWS_LAMBDA_FUNCTION_NAME
  if (!isInLambda) {
    let configRegion = await getRegionFromConfig(params)
    if (configRegion) return configRegion
  }

  throw ReferenceError('You must supply an AWS region via params, environment variables, or config file')
}

function getRegionFromEnv (params) {
  let { AWS_REGION, AWS_DEFAULT_REGION, AMAZON_REGION } = process.env
  let region = AWS_REGION || AWS_DEFAULT_REGION || AMAZON_REGION

  return validateRegion(params, region)
}

async function getRegionFromConfig (params) {
  let { loadAwsConfig } = require('../lib')

  let awsConfig = await loadAwsConfig(params)
  if (awsConfig) {
    let { profile } = params
    let profileName = profile === 'default' ? profile : `profile ${profile}`

    if (!awsConfig[profileName]) {
      throw TypeError(`Profile not found: ${profile}`)
    }
    let { region } = awsConfig[profileName]

    return validateRegion(params, region)
  }
}

function validateRegion (params, region) {
  if (region) {
    if (typeof region !== 'string') {
      throw TypeError('Region must be a string')
    }
    if (!params.host && !regions.includes(region)) {
      throw ReferenceError(`Invalid region specified: ${region}`)
    }
    return region
  }
  return false
}
