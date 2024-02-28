// Service API plugin getter
module.exports = async function getPlugin (config) {

  let { autoloadPlugins = false, plugins = [] } = config

  if (!Array.isArray(plugins)) {
    throw TypeError('Plugins must be an array')
  }

  if (!autoloadPlugins && !plugins.length) return []

  if (plugins.length) {
    let { is } = require('../lib/validate')

    let resolved = []

    for (let item of plugins) {
      if (item?.then && typeof item.then === 'function') {
        let plugin = await item
        /* istanbul ignore next: our plugins export default, but others may not */
        plugin = plugin.default ? plugin.default : plugin
        resolved.push(plugin)
        continue
      }
      else if (is.object(item)) {
        /* istanbul ignore next: our plugins export default, but others may not */
        let plugin = item.default ? item.default : item
        resolved.push(plugin)
        continue
      }
      throw TypeError('Plugins must be an imported / required module or an import statement')
    }
    return resolved
  }

  /* istanbul ignore else */
  if (autoloadPlugins) {
    let { exists } = require('../lib')
    let { join } = require('node:path')

    let dedupe = arr => [ ...new Set(arr) ]

    let processDir = process.cwd()
    let packageJsonFile = join(processDir, 'package.json')

    let processNodeModulesDir = join(process.cwd(), 'node_modules')
    // aws-lite resolving itself may fail during tests, so just swallow that
    let relativeNodeModulesDir
    try { relativeNodeModulesDir = require.resolve('@aws-lite/client').split(awsLite)[0] }
    catch { /* noop */ }

    let pluginsToLoad = []

    // Try process.cwd first; let's assume plugins may come in as second-order deps, so we'll need to search the project's filesystem for them
    /**/ if (await exists(processNodeModulesDir)) {
      let found = await scanNodeModulesDir(processNodeModulesDir)
      if (found.length) pluginsToLoad.push(...dedupe(plugins.concat(found)))
    }

    // Then let's see what's right nearby; this can be unreliable, as package managers may not always properly flatten the dependency tree
    else /* istanbul ignore next */ if (relativeNodeModulesDir && await exists(relativeNodeModulesDir)) {
      let found = await scanNodeModulesDir(relativeNodeModulesDir)
      if (found.length) pluginsToLoad.push(...dedupe(plugins.concat(found)))
    }

    // Perhaps the least reliable due to the likelihood of second-order deps: read the package.json (if possible)
    else if (await exists(packageJsonFile)) {
      let { readFile } = require('node:fs/promises')
      let packageJson = JSON.parse(await readFile(packageJsonFile))
      let { dependencies: deps } = packageJson
      if (deps) {
        let found = Object.keys(deps)
          .filter(m => m.startsWith('@aws-lite/') ||
                       m.startsWith('aws-lite-plugin-'))
          .filter(tidy)
        if (found.length) pluginsToLoad.push(...dedupe(plugins.concat(found)))
      }
    }

    if (pluginsToLoad.length) {
      for (let pluginName of pluginsToLoad) {
        let plugin
        /* istanbul ignore next */
        try {
          plugin = require(pluginName)
          plugins.push(plugin)
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
            plugins.push(plugin)
          }
          else {
            throw err
          }
        }
      }
    }

    return plugins
  }
}

let awsLite = '@aws-lite'

// Never load these `@aws-lite/*` packages:
let ignored = [ '@aws-lite/client', '@aws-lite/arc' ]

let tidy = p => !ignored.includes(p) && !p.endsWith('-types')

async function scanNodeModulesDir (dir) {
  let found = []
  let { join } = require('node:path')
  let { readdir } = require('node:fs/promises')
  let mods = await readdir(dir)
  // Find first-party plugins
  /* istanbul ignore next: TODO code path not run in 14.x tests, remove once deprecated */
  if (mods.includes(awsLite)) {
    let knownPlugins = await readdir(join(dir, awsLite))
    found.push(...knownPlugins.map(p => `@aws-lite/${p}`))
  }
  // Find correctly namespaced 3rd-party plugins
  mods.forEach(p => p.startsWith('aws-lite-plugin-') && found.push(p))
  return found.filter(tidy)
}

let esmErrors = [
  'Cannot use import statement outside a module',
  `Unexpected token 'export'`,
  'require() of ES Module',
  'Must use import to load ES Module',
]
let hasEsmError = err => esmErrors.some(msg => err.message.includes(msg))
