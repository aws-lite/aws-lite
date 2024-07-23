let regions = require('./regions.json')

module.exports = async function getRegion (params) {
  let { config } = params

  let configRegion = validateRegion(config, config.region)
  if (configRegion) return configRegion

  let envRegion = getRegionFromEnv(config)
  if (envRegion) return envRegion

  let AWSConfigRegion = await getRegionFromAWSConfig(params)
  if (AWSConfigRegion) return AWSConfigRegion

  throw ReferenceError('Unable to find AWS region via params, environment variables, or credential / config files')
}

function getRegionFromEnv (config) {
  let { AWS_REGION, AWS_DEFAULT_REGION, AMAZON_REGION } = process.env
  let region = AWS_REGION || AWS_DEFAULT_REGION || AMAZON_REGION

  return validateRegion(config, region)
}

async function getRegionFromAWSConfig (params) {
  let { config, awsConfig } = params
  let { loadAwsConfig } = require('../lib')

  // Only check for an AWS config if absolutely necessary since it's multiple filesystem reads
  awsConfig = params.awsConfig = (awsConfig || await loadAwsConfig(config))
  let profile = awsConfig?.currentProfile

  if (awsConfig && profile) {
    return validateRegion(config, profile.region)
  }
}

function validateRegion (config, region) {
  if (region) {
    if (typeof region !== 'string') {
      throw TypeError('Region must be a string')
    }
    if (!config.host && !regions.includes(region)) {
      throw ReferenceError(`Invalid region specified: ${region}`)
    }
    return region
  }
  return false
}
