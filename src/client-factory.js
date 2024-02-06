let { validateService } = require('./services')
let request = require('./request')
let { validateInput } = require('./validate')
let { awsjson, buildXML } = require('./lib')
let errorHandler = require('./error')
let aws
let enumerable = false

let credentialProps = [ 'accessKeyId', 'secretAccessKey', 'sessionToken' ]
let copy = obj => JSON.parse(JSON.stringify(obj))


module.exports = async function clientFactory (config, creds, region) {

  // Attach config + creds to client (and make available for plugins)
  let configuration = copy(config)
  credentialProps.forEach(p => delete configuration[p])
  let credentials = copy(creds)
  Object.defineProperty(credentials, 'secretAccessKey', { enumerable })
  Object.defineProperty(credentials, 'sessionToken', { enumerable })

  // The basic API client
  async function client (params = {}) {
    let selectedRegion = params.region || region
    let metadata = { service: params.service }
    params.validateService = params.validateService === undefined ? true : params.validateService
    try {
      return await request(params, creds, selectedRegion, config, metadata)
    }
    catch (err) {
      errorHandler(err)
    }
  }
  client.config = { ...configuration, region }
  client.credentials = credentials

  /* istanbul ignore next */
  if (config.debug) {
    console.error('[aws-lite] Client instantiated with this config:', client.config)
    console.error('[aws-lite] Client instantiated with these creds:', {
      ...credentials,
      secretAccessKey: credentials.secretAccessKey ? '[found / redacted]' : undefined,
      sessionToken: credentials.sessionToken ? '[found / redacted]' : undefined,
    })
  }

  let { plugins } = config
  if (plugins.length) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error('[aws-lite] Loading plugins', plugins, '\n')
    }
    for (let pluginName of plugins) {
      try {
        let plugin
        /* istanbul ignore next */
        try {
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
        if (config.validateService) {
          validateService(service) // allow consumer to load a plugin without validating the service
        }
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

        // Only require the vendor if it's actually needed
        if (!aws) {
          aws = require('./_vendor/aws')
        }
        let pluginUtils = {
          awsjsonMarshall: aws.marshall,
          awsjsonUnmarshall: aws.unmarshall,
          config: configuration,
          credentials,
          buildXML,
        }
        let clientMethods = {}
        Object.entries(methods).forEach(([ name, method ]) => {
          // Allow for falsy methods to be denoted as incomplete in generated docs
          if (!method || method.disabled) return

          // For convenient error reporting (and jic anyone wants to enumerate everything) try to ensure the AWS API method names pass through
          clientMethods[name] = Object.defineProperty(async input => {
            input = input || {}
            let selectedRegion = input?.region || region
            let metadata = { service, name, property }
            if (method.awsDoc) {
              metadata.awsDoc = method.awsDoc
            }
            // Printed after the AWS doc
            if (pluginName.startsWith('@aws-lite/')) {
              metadata.readme = `https://aws-lite.org/services/${service}#${name.toLowerCase()}`
            }
            else if (method.readme) {
              metadata.readme = method.readme
            }

            // Initial validation
            if (method.validate) {
              validateInput(method.validate, input, metadata)
            }

            // Run plugin.method.request()
            if (method.request) {
              try {
                // TODO: probably deep-copy and/or make input immutable?
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

              // Run plugin.method.response()
              if (method.response) {
                try {
                  var pluginRes = await method.response(response, { ...pluginUtils, region: selectedRegion })
                }
                catch (methodError) {
                  errorHandler({ error: methodError, metadata })
                }
                if (pluginRes !== undefined) {
                  let unmarshalling = pluginRes?.awsjson
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
              // Run plugin.method.error()
              let updatedError
              if (method.error && !(err instanceof Error)) {
                try {
                  updatedError = await method.error(err, { ...pluginUtils, region: selectedRegion })
                }
                catch (methodError) {
                  errorHandler({ error: methodError, metadata: { service, name, property } })
                }
                updatedError = updatedError || err
                updatedError.metadata = { ...updatedError.metadata, ...metadata }
                errorHandler(updatedError)
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

let esmErrors = [
  'Cannot use import statement outside a module',
  `Unexpected token 'export'`,
  'require() of ES Module',
  'Must use import to load ES Module',
]
let hasEsmError = err => esmErrors.some(msg => err.message.includes(msg))
