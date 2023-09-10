let { existsSync, readFileSync } = require('fs')
let { join } = require('path')
let os = require('os')
let ini = require('ini')
let regions = require('./regions.json')

module.exports = function getRegion (params) {
  let { region } = params

  let paramsRegion = validateRegion(region)
  if (paramsRegion) return region

  let envRegion = getRegionFromEnv()
  if (envRegion) return envRegion

  let isInLambda = process.env.AWS_LAMBDA_FUNCTION_NAME
  if (!isInLambda) {
    let configRegion = getRegionFromConfig(params)
    if (configRegion) return configRegion
  }

  throw ReferenceError('You must supply AWS region via params, environment variables, or config file')
}

function getRegionFromEnv () {
  let { AWS_REGION, AWS_DEFAULT_REGION, AMAZON_REGION } = process.env
  let region = AWS_REGION || AWS_DEFAULT_REGION || AMAZON_REGION

  return validateRegion(region)
}

function getRegionFromConfig (params) {
  let { AWS_SDK_LOAD_CONFIG, AWS_CONFIG_FILE, AWS_PROFILE } = process.env
  if (!AWS_SDK_LOAD_CONFIG) return false

  let profile = params.profile || AWS_PROFILE || 'default'
  let profileName = profile === 'default' ? profile : `profile ${profile}`
  let home = os.homedir()

  let configFile = AWS_CONFIG_FILE || join(home, '.aws', 'config')
  if (existsSync(configFile)) {
    let file = readFileSync(configFile)
    let config = ini.parse(file.toString())

    if (!config[profileName]) {
      throw TypeError(`Profile not found: ${profile}`)
    }
    let { region } = config[profileName]

    return validateRegion(region)
  }
}

function validateRegion (region) {
  if (region) {
    if (typeof region !== 'string') {
      throw TypeError('Region must be a string')
    }
    if (!regions.includes(region)) {
      throw ReferenceError(`Invalid region specified: ${region}`)
    }
    return region
  }
  return false
}
