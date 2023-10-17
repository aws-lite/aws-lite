let { readdir } = require('fs/promises')
let { join } = require('path')
let { services } = require('./services')
let request = require('./request')
let { validateInput } = require('./validate')
let { awsjson } = require('./lib')
let errorHandler = require('./error')
let aws
let enumerable = false

let credentialProps = [ 'accessKeyId', 'secretAccessKey', 'sessionToken' ]
let copy = obj => JSON.parse(JSON.stringify(obj))

// Never autoload these `@aws-lite/*` packages:
let ignored = [ 'client', 'arc' ]

module.exports = async function clientFactory (config, creds, region) {
  // The basic API client
  async function client (params = {}) {
    let selectedRegion = params.region || region
    validateService(params.service)
    let metadata = { service: params.service }
    try {
      return await request(params, creds, selectedRegion, config, metadata)
    }
    catch (err) {
      errorHandler(err)
    }
  }

  // Service API plugins
  let { autoloadPlugins = true, plugins = [] } = config
  if (autoloadPlugins) {
    let awsLite = '@aws-lite'
    let nodeModulesDir
    try { nodeModulesDir = require.resolve('@aws-lite/client').split(awsLite)[0] }
    catch { nodeModulesDir = join(process.cwd(), 'node_modules') } // Likely just aws-lite tests
    let mods = await readdir(nodeModulesDir)
    // Find first-party plugins
    if (mods.includes(awsLite)) {
      let knownPlugins = await readdir(join(nodeModulesDir, awsLite))
      let filtered = knownPlugins.filter(p => !ignored.includes(p) && !p.endsWith('-types')).map(p => `@aws-lite/${p}`)
      plugins.push(...filtered)
    }
    // Find correctly namespaced 3rd-party plugins
    let findPlugins = mod => mod.startsWith('aws-lite-plugin-') && plugins.push(mod)
    mods.forEach(findPlugins)
  }

  if (plugins.length) {
    for (let pluginName of plugins) {
      try {
        let plugin
        /* istanbul ignore next */
        try {
          // eslint-disable-next-line
          plugin = require(pluginName)
        }
        catch (err) {
          if (hasEsmError(err)) {
            let path = pluginName
            if (process.platform.startsWith('win')) {
              try { path = 'file://' + require.resolve(path) }
              catch { path = 'file://' + pluginName }
            }
            let mod = await import(path)
            plugin = mod.default ? mod.default : mod
          }
          else {
            throw err
          }
        }
        let { service, methods, property } = plugin
        validateService(service)
        if (!methods || (typeof methods !== 'object' || Array.isArray(methods))) {
          throw TypeError('Plugin must export a methods object')
        }
        Object.values(methods).forEach(method => {
          if (method.request && typeof method.request !== 'function') {
            throw ReferenceError(`All plugin request methods must be a function: ${service}`)
          }
          if (method.response && typeof method.response !== 'function') {
            throw ReferenceError(`All plugin response methods must be a function: ${service}`)
          }
          if (method.error && typeof method.error !== 'function') {
            throw ReferenceError(`All plugin error methods must be a function: ${service}`)
          }
        })

        let configuration = copy(config)
        credentialProps.forEach(p => delete configuration[p])
        let credentials = copy(creds)
        Object.defineProperty(credentials, 'secretAccessKey', { enumerable })
        Object.defineProperty(credentials, 'sessionToken', { enumerable })

        // Only require the vendor if it's actually needed
        if (!aws) {
          // eslint-disable-next-line
          aws = require('./_vendor/aws')
        }
        let pluginUtils = {
          awsjsonMarshall: aws.marshall,
          awsjsonUnmarshall: aws.unmarshall,
          config: configuration,
          credentials,
        }
        let clientMethods = {}
        Object.entries(methods).forEach(([ name, method ]) => {
          // Allow for falsy methods to be denoted as incomplete in generated docs
          if (!method || method.disabled) return

          // For convenient error reporting (and jic anyone wants to enumerate everything) try to ensure the AWS API method names pass through
          clientMethods[name] = Object.defineProperty(async input => {
            input = input || {}
            let selectedRegion = input?.region || region
            let metadata = { service, name }
            if (method.awsDoc) {
              metadata.awsDoc = method.awsDoc
            }
            // Printed after the AWS doc
            if (pluginName.startsWith('@aws-lite/')) {
              metadata.readme = `https://github.com/architect/aws-lite/blob/main/plugins/${service}/readme.md#${name}`
            }
            else if (method.readme) {
              metadata.readme = method.readme
            }

            // Initial validation
            if (method.validate) {
              validateInput(method.validate, input, metadata)
            }

            // Run plugin.request()
            if (method.request) {
              try {
                var req = await method.request(input, { ...pluginUtils, region: selectedRegion })
                req = req || {}
              }
              catch (methodError) {
                errorHandler({ error: methodError, metadata })
              }
            }

            // Validate combined inputs of user + plugin
            let params = { ...input, ...req }
            if (method.validate) {
              validateInput(method.validate, params, metadata)
            }

            // Make the request
            try {
              let response = await request({ ...params, service }, creds, selectedRegion, config, metadata)

              // Run plugin.response()
              if (method.response) {
                try {
                  var pluginRes = await method.response(response, { ...pluginUtils, region: selectedRegion })
                }
                catch (methodError) {
                  errorHandler({ error: methodError, metadata })
                }
                if (pluginRes !== undefined) {
                  let unmarshalling = pluginRes.awsjson
                  if (unmarshalling) {
                    delete pluginRes.awsjson
                    // If a payload property isn't included, it _is_ the payload
                    let unmarshalled = awsjson.unmarshall(pluginRes.payload || pluginRes, unmarshalling)
                    response = pluginRes.payload
                      ? { ...pluginRes, payload: unmarshalled }
                      : unmarshalled
                  }
                  else response = pluginRes
                }
              }
              return response
            }
            catch (err) {
              // Run plugin.error()
              if (method.error && !(input instanceof Error)) {
                try {
                  let updatedError = await method.error(err, { ...pluginUtils, region: selectedRegion })
                  errorHandler(updatedError || err)
                }
                catch (methodError) {
                  errorHandler({ error: methodError, metadata: { service, name } })
                }
              }
              errorHandler(err)
            }
          }, 'name', { value: name })
        })

        let serviceName = property || service
        client[serviceName] = clientMethods
        // Lowcase alias
        let propLow = serviceName.toLowerCase()
        if (serviceName !== propLow) {
          client[propLow] = clientMethods
          Object.defineProperty(client, propLow, { enumerable })
        }
      }
      catch (err) {
        console.error(`Plugin error: ${pluginName}`)
        throw err
      }
    }
  }

  return client
}

function validateService (service) {
  if (!service) {
    throw ReferenceError(`No AWS service specified`)
  }
  if (!services.includes(service)) {
    throw ReferenceError(`Invalid AWS service specified: ${service}`)
  }
}

let esmErrors = [
  'Cannot use import statement outside a module',
  `Unexpected token 'export'`,
  'require() of ES Module',
  'Must use import to load ES Module',
]
let hasEsmError = err => esmErrors.some(msg => err.message.includes(msg))
