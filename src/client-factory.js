let { readdirSync } = require('fs')
let { join } = require('path')
let services = require('./services')
let request = require('./request')
let errorHandler = require('./error')

module.exports = function clientFactory (config, creds, region) {
  // The basic API client
  async function client (params = {}) {
    let selectedRegion = params.region || region
    try {
      return await request(params, creds, selectedRegion, config)
    }
    catch (err) {
      errorHandler(err)
    }
  }

  // API plugins
  let { autoloadPlugins = true, plugins = [] } = config
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
    if (!Array.isArray(plugins)) {
      throw TypeError('Plugins must be an array')
    }
    plugins.forEach(pluginName => {
      try {
        // eslint-disable-next-line
        let plugin = require(pluginName)
        let { service, methods } = plugin
        if (!service || !services.includes(service)) {
          throw ReferenceError(`Invalid AWS service specified: ${service}`)
        }
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
          clientMethods[name] = Object.defineProperty(async params => {
            let selectedRegion = params.region || region
            let result = await method.request(params)
            let metadata = { service, name }
            try {
              return await request({ ...params, ...result }, creds, selectedRegion, config, metadata)
            }
            catch (err) {
              if (method.error) {
                return await method.error(err)
              }
              else {
                errorHandler(err)
              }
            }
          }, 'name', { value: name })
        })
        client[service] = clientMethods
      }
      catch (err) {
        console.error(`[${pluginName}] Plugin error!`)
        throw err
      }
    })
  }

  return client
}
