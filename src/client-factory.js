let { readdirSync } = require('fs')
let { join } = require('path')
let { services } = require('./services')
let request = require('./request')
let { validateInput } = require('./validate')
let { awsjson } = require('./lib')
let errorHandler = require('./error')

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
  /* istanbul ignore next */ // TODO check once plugins are published
  if (autoloadPlugins) {
    let nodeModulesDir = join(process.cwd(), 'node_modules')
    let mods = readdirSync(nodeModulesDir)
    // Find first-party plugins
    if (mods.includes('@aws-lite')) {
      let knownPlugins = readdirSync(join(nodeModulesDir, '@aws-lite'))
      let filtered = knownPlugins.filter(p => !ignored.includes(p)).map(p => `@aws-lite/${p}`)
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
        let { service, methods } = plugin
        validateService(service)
        if (!methods || (typeof methods !== 'object' || Array.isArray(methods))) {
          throw TypeError('Plugin must export a methods object')
        }
        Object.values(methods).forEach(method => {
          if (typeof method.request !== 'function') {
            throw ReferenceError(`All plugin request methods must be a function: ${service}`)
          }
          // Error + Response handlers are optional
          /* istanbul ignore next */ // TODO remove as soon as plugin.response() API settles
          if (method.response && typeof method.response !== 'function') {
            throw ReferenceError(`All plugin response methods must be a function: ${service}`)
          }
          if (method.error && typeof method.error !== 'function') {
            throw ReferenceError(`All plugin error methods must be a function: ${service}`)
          }
        })
        let clientMethods = {}
        Object.entries(methods).forEach(([ name, method ]) => {
          // For convenient error reporting (and jic anyone wants to enumerate everything) try to ensure the AWS API method names pass through
          clientMethods[name] = Object.defineProperty(async input => {
            let selectedRegion = input.region || region
            let metadata = { service, name }

            // Run plugin.request()
            try {
              var result = await method.request(input)
            }
            catch (methodError) {
              errorHandler({ error: methodError, metadata })
            }

            // Hit plugin.validate
            let params = { ...input, ...result }
            if (method.validate) {
              validateInput(method.validate, params, metadata)
            }

            // Make the request
            try {
              let response = await request({ ...params, ...result, service }, creds, selectedRegion, config, metadata)

              // Run plugin.response()
              /* istanbul ignore next */ // TODO remove as soon as plugin.response() API settles
              if (method.response) {
                try {
                  var result = await method.response(response)
                  if (result.response === undefined) {
                    throw TypeError('Response plugins must return a response property')
                  }
                }
                catch (methodError) {
                  errorHandler({ error: methodError, metadata })
                }
                let awsjsonSetting = result.awsjson || result.AWSJSON
                response = awsjsonSetting
                  ? awsjson.unmarshall(result.response, awsjsonSetting)
                  : result.response
              }
              return response
            }
            catch (err) {
              // Run plugin.error()
              if (method.error && !(input instanceof Error)) {
                try {
                  let updatedError = await method.error(err)
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
        client[service] = clientMethods
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
