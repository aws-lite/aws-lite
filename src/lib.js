let aws, ini, xml

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

function tidyQuery (obj) {
  let qs = require('querystring')
  let tidied = {}
  Object.entries(obj).forEach(([ k, v ]) => {
    // Who knows, maybe there's an API service that uses boolean query string params
    if (v || v === false) tidied[k] = v
  })
  if (Object.keys(tidied).length) return qs.stringify(tidied)
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

// XML stuff
let textNodeName = '#text'
/* istanbul ignore next */
function instantiateXml () {
  if (xml) return
  let vendor = require('./_vendor/xml')
  // The following was pulled directly from AWS's implementations of `fast-xml-parser` in SDKv3
  xml = {
    parser: new vendor.XMLParser({
      attributeNamePrefix: '',
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (_, val) => (val.trim() === '' && val.includes('\n') ? '' : undefined),
    }),
    builder: new vendor.XMLBuilder(),
  }
  xml.parser.addEntity('#xD', '\r')
  xml.parser.addEntity('#10', '\n')
  xml.parser.getValueFromTextNode = vendor.getValueFromTextNode
}
function buildXml (obj) {
  instantiateXml()
  return xml.builder.build(obj)
}
function parseXml (body) {
  instantiateXml()
  let parsed = xml.parser.parse(body)
  let key = Object.keys(parsed)[0]
  let payloadToReturn = parsed[key]
  /* istanbul ignore next */ // TODO remove + test
  if (payloadToReturn[textNodeName]) {
    payloadToReturn[key] = payloadToReturn[textNodeName]
    delete payloadToReturn[textNodeName]
  }
  return xml.parser.getValueFromTextNode(payloadToReturn)
}

module.exports = {
  awsjson,
  exists,
  loadAwsConfig,
  readConfig,
  tidyQuery,
  useAWS,
  buildXml,
  parseXml,
}
