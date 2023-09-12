let { readdirSync } = require('fs')
let { join } = require('path')
let services = require('./services')
let request = require('./request')
let validateInput = require('./validate')
let errorHandler = require('./error')

module.exports = async function clientFactory (config, creds, region) {
  // The basic API client
  async function client (params = {}) {
    let selectedRegion = params.region || region
    validateService(params.service)
    try {
      return await request(params, creds, selectedRegion, config)
    }
    catch (err) {
      errorHandler(err)
    }
  }

  // API plugins
  let { autoloadPlugins = true, plugins = [] } = config
  if (!Array.isArray(plugins)) {
    throw TypeError('Plugins must be an array')
  }

  /* istanbul ignore next */ // TODO check once plugins are published
  if (autoloadPlugins) {
    let nodeModulesDir = join(process.cwd(), 'node_modules')
    let mods = readdirSync(nodeModulesDir)
    // Find first-party plugins
    if (mods.includes('@aws-lite')) {
      let knownPlugins = readdirSync(join(nodeModulesDir, '@aws-lite'))
      plugins.push(...knownPlugins.map(i => `@aws-lite/${i}`))
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
            let path =  process.platform.startsWith('win')
              ? 'file://' + pluginName
              : pluginName
            let mod = await import(path)
            plugin = mod.default ? mod.default : mod
          }
          else {
            throw err
          }
        }
        let { service, methods } = plugin
        validateService(service)
        Object.values(methods).forEach(method => {
          if (typeof method.request !== 'function') {
            throw ReferenceError(`All plugin request methods must be a function: ${service}`)
          }
          // Error handlers are optional
          if (method.error && typeof method.error !== 'function') {
            throw ReferenceError(`All plugin error methods must be a function: ${service}`)
          }
        })
        let clientMethods = {}
        Object.entries(methods).forEach(([ name, method ]) => {
          // For convenient error reporting (and jic anyone wants to enumerate everything) try to ensure the AWS API method names pass through
          clientMethods[name] = Object.defineProperty(async input => {
            let selectedRegion = input.region || region
            let result = await method.request(input)
            let params = { ...input, ...result }
            let metadata = { service, name }
            if (method.validate) {
              validateInput(method.validate, params, metadata)
            }
            /* istanbul ignore next */
            try {
              return await request({ ...params, ...result, service }, creds, selectedRegion, config, metadata)
            }
            catch (err) {
              if (input instanceof Error || !method.error) {
                errorHandler(err)
              }
              let updatedError = await method.error(err)
              errorHandler(updatedError || err)
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
