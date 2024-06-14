let aws, xml

// AWS-flavored JSON stuff
function marshaller (method, obj, options) {
  if (!aws) {
    // Only require the vendor if + when it's actually needed
    aws = require('../_vendor/aws')
  }
  /* istanbul ignore next */
  options = options || {}
  /* istanbul ignore next */
  let { awsjson: awsjsonSetting, config = {} } = options

  // Allow arbitrary AWS JSON marshalling options
  let { awsjsonMarshall, awsjsonUnmarshall } = config
  let marshallOptions = method === 'marshall' ? awsjsonMarshall : awsjsonUnmarshall
  if (marshallOptions) {
    let { is } = require('./validate')
    if (!is.object(marshallOptions)) throw ReferenceError('AWS JSON marshall/unmarshall options must be an object')
  }

  // We may not be able to AWS JSON-[en|de]code the whole payload, check for specified keys
  if (Array.isArray(awsjsonSetting)) {
    return Object.entries(obj).reduce((acc, [ k, v ]) => {
      if (awsjsonSetting.includes(k)) acc[k] = aws[method](v, marshallOptions)
      else acc[k] = v
      return acc
    }, {})
  }
  // Otherwise, just AWS JSON-[en|de]code the whole thing
  return aws[method](obj, marshallOptions)
}
let awsjson = {
  marshall: marshaller.bind({}, 'marshall'),
  unmarshall: marshaller.bind({}, 'unmarshall'),
}

let copy = obj => JSON.parse(JSON.stringify(obj))

async function exists (file) {
  let { stat } = require('node:fs/promises')
  try { await stat(file); return true }
  catch { return false }
}

// Tidiers
function tidyPathPrefix (pathPrefix) {
  if (pathPrefix === '/') {
    return undefined
  }
  if (!pathPrefix.startsWith('/')) {
    pathPrefix = '/' + pathPrefix
  }
  if (pathPrefix.endsWith('/')) {
    pathPrefix = pathPrefix.substring(0, pathPrefix.length - 1)
  }
  return pathPrefix
}
// Undefined stuff
const tidyObj = obj => Object.keys(obj).forEach(k => !obj[k] && delete obj[k])

function getEndpointParams (input) {
  if (input.endpoint || input.url) {
    try {
      let url = new URL(input.endpoint || input.url)
      let pathPrefix = tidyPathPrefix(url.pathname)
      let host = url.hostname
      let port = Number(url.port)
      let protocol = url.protocol

      let params = { pathPrefix, host, port, protocol }
      tidyObj(params)
      return params
    }
    catch {
      return { host: input.endpoint || input.url }
    }
  }

  let { pathPrefix, host, hostname, port, protocol } = input
  try {
    let url = new URL(host || hostname)
    host = url.hostname
  }
  catch { /* noop */ }
  if (pathPrefix) pathPrefix = tidyPathPrefix(pathPrefix)
  if (port) port = Number(port)
  if (typeof protocol === 'string' && !protocol.endsWith(':')) {
    protocol += ':'
  }
  validateProtocol(protocol)

  let params = { pathPrefix, host: host || hostname, port, protocol }
  tidyObj(params)
  return params
}

async function loadAwsConfig (params) {
  let { awsConfigFile } = params
  let { AWS_SDK_LOAD_CONFIG, AWS_CONFIG_FILE } = process.env
  if (!AWS_SDK_LOAD_CONFIG && !awsConfigFile) return

  let { join } = require('node:path')
  let os = require('node:os')
  let home = os.homedir()

  let configFile = AWS_CONFIG_FILE || join(home, '.aws', 'config')
  if (typeof awsConfigFile === 'string') configFile = awsConfigFile
  return await readConfig(configFile)
}

let cache = {}
async function readConfig (file) {
  if (cache[file]) return cache[file]
  if (!(await exists(file))) return

  let { readFile } = require('node:fs/promises')
  let data = await readFile(file)
  cache[file] = parseAwsIni(data.toString())
  return cache[file]
}

// mhart's fairly strict INI parser – only deals with alpha keys, data must be within sections
// Adapted from: https://github.com/mhart/awscred
// Added inline and whole line comment support
function parseAwsIni (ini) {
  let section
  let out = Object.create(null)
  let re = /^\[([^\]]+)\]\s*(?:#.*)?$|^([a-z_]+)\s*=\s*(.+?)\s*(?:#.*)?$/
  let lines = ini.split(/\r?\n/)

  /* istanbul ignore next */
  lines.forEach(line => {
    let match = line.match(re)
    if (!match) return
    if (match[1]) {
      section = match[1]
      if (out[section] == null) out[section] = Object.create(null)
    }
    else if (section) {
      out[section][match[2]] = match[3]
    }
  })

  return out
}

function tidyQuery (obj) {
  let qs = require('node:querystring')
  let tidied = {}
  Object.entries(obj).forEach(([ k, v ]) => {
    // Who knows, maybe there's an API service that uses boolean query string params
    // For now, otherwise continue to ignore especially falsy values
    if (v || v === false || v === 0 || v === '') tidied[k] = v
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

// Interpolate XML string values to booleans, numbers, dates, etc.
function maybeConvertString (str) {
  /**/ if (str === 'true') return true
  else if (str === 'false') return false
  else if (str === 'null') return null
  else if (str === '') return str
  else if (str?.match(/^[ ]+$/)) return str
  else if (!isNaN(Number(str))) {
    return Number(str)
  }
  try {
    /* istanbul ignore else */
    if (new Date(Date.parse(str)).toISOString() === str) {
      return new Date(str)
    }
  }
  catch { /* noop */ }
  return str
}

function coerceXMLValues (obj) {
  Object.keys(obj).forEach(k => {
    // For whatever reason ignore else isn't working after object check
    /* istanbul ignore next */
    if (typeof obj[k] === 'string') {
      obj[k] = maybeConvertString(obj[k])
    }
    else if (Array.isArray(obj[k])) {
      obj[k] = obj[k].map(i => {
        if (typeof i === 'object' && !Array.isArray(i)) {
          return coerceXMLValues(i)
        }
        return maybeConvertString(i)
      })
    }
    else if (typeof obj[k] === 'object') {
      coerceXMLValues(obj[k])
    }
  })
  return obj
}

/* istanbul ignore next */
function instantiateXml () {
  if (xml) return
  // Only require the vendor if + when it's actually needed
  let vendor = require('../_vendor/xml')
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
function buildXML (obj, params) {
  instantiateXml()
  let payload = xml.builder.build(obj)
  // We may need to repeat this (or make a more generic interface) for `xmlns:xsi`, `xsi:type`, etc.
  if (params?.xmlns) {
    let parent = Object.keys(obj)[0]
    payload = payload.replace(
      `<${parent}>`,
      `<${parent} xmlns="${params.xmlns}">`,
    )
  }
  return payload
}
function parseXML (body) {
  instantiateXml()
  let parsed = xml.parser.parse(body)
  let key = Object.keys(parsed)[0]
  let payloadToReturn = parsed[key]
  /* istanbul ignore next: TODO remove + test */
  if (payloadToReturn[textNodeName]) {
    payloadToReturn[key] = payloadToReturn[textNodeName]
    delete payloadToReturn[textNodeName]
  }
  return coerceXMLValues(xml.parser.getValueFromTextNode(payloadToReturn))
}

function validateProtocol (protocol) {
  if (protocol && ![ 'https:', 'http:' ].includes(protocol)) {
    throw ReferenceError('Protocol must be `https:` or `http:`')
  }
}

// Content type checks
let JSONregex = /application\/json/
let JSONContentType = ct => ct.match(JSONregex)
let AwsJSONregex = /application\/x-amz-json/
let AwsJSONContentType = ct => ct.match(AwsJSONregex)
let XMLregex = /(application|text)\/xml/
let XMLContentType = ct => ct.match(XMLregex)

module.exports = {
  awsjson,
  copy,
  exists,
  getEndpointParams,
  loadAwsConfig,
  readConfig,
  tidyQuery,
  useAWS,
  buildXML,
  parseXML,
  validateProtocol,
  // Content types
  JSONContentType,
  AwsJSONContentType,
  XMLContentType,
}
