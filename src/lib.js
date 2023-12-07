let aws, ini

// AWS-flavored JSON stuff
function marshaller (method, obj, awsjsonSetting) {
  if (!aws) {
    // Only require the vendor if + when it's actually needed
    aws = require('./_vendor/aws')
  }

  // We may not be able to AWS JSON-[en|de]code the whole payload, check for specified keys
  if (Array.isArray(awsjsonSetting)) {
    return Object.entries(obj).reduce((acc, [ k, v ]) => {
      if (awsjsonSetting.includes(k)) acc[k] = aws[method](v)
      else acc[k] = v
      return acc
    }, {})
  }
  // Otherwise, just AWS JSON-[en|de]code the whole thing
  return aws[method](obj)
}
let awsjson = {
  marshall: marshaller.bind({}, 'marshall'),
  unmarshall: marshaller.bind({}, 'unmarshall'),
}

async function exists (file) {
  let { stat } = require('fs/promises')
  try { await stat(file); return true }
  catch { return false }
}

async function loadAwsConfig (params) {
  let { awsConfigFile } = params
  let { AWS_SDK_LOAD_CONFIG, AWS_CONFIG_FILE } = process.env
  if (!AWS_SDK_LOAD_CONFIG && !awsConfigFile) return

  let { join } = require('path')
  let os = require('os')
  let home = os.homedir()

  let configFile = AWS_CONFIG_FILE || join(home, '.aws', 'config')
  if (typeof awsConfigFile === 'string') configFile = awsConfigFile
  return await readConfig(configFile)
}

let cache = {}
async function readConfig (file) {
  if (cache[file]) return cache[file]
  if (!(await exists(file))) return

  let { readFile } = require('fs/promises')
  if (!ini) ini = require('ini')

  let data = await readFile(file)
  let result = ini.parse(data.toString())
  cache[file] = result
  return result
}

// Probably this is going to need some refactoring in Arc 11
// Certainly it is not reliable in !Arc local Lambda emulation
let nonLocalEnvs = [ 'staging', 'production' ]
function useAWS () {
  let { ARC_ENV, ARC_LOCAL, ARC_SANDBOX } = process.env
  // Testing is always local
  if (ARC_ENV === 'testing') return false
  // Local, but using AWS resources
  if (nonLocalEnvs.includes(ARC_ENV) && ARC_SANDBOX && !ARC_LOCAL) return false
  // Assumed to be AWS
  return true
}

module.exports = { awsjson, exists, loadAwsConfig, readConfig, useAWS }
