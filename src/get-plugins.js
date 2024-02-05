// Never autoload these `@aws-lite/*` packages:
let ignored = [ '@aws-lite/client', '@aws-lite/arc' ]

// Service API plugin getter
module.exports = async function getPlugin (config) {

  let { autoloadPlugins = true, plugins = [] } = config

  if (plugins && !Array.isArray(plugins)) {
    throw TypeError('Plugins must be an array')
  }
  let tidy = p => !ignored.includes(p) && !p.endsWith('-types')
  let dedupe = arr => [ ...new Set(arr) ]

  if (autoloadPlugins) {
    let { exists } = require('./lib')
    let { join } = require('path')
    let awsLite = '@aws-lite'

    let processDir = process.cwd()
    let packageJson = join(processDir, 'package.json')

    let processNodeModulesDir = join(process.cwd(), 'node_modules')
    // aws-lite resolving itself may fail during tests, so just swallow that
    let relativeNodeModulesDir
    try { relativeNodeModulesDir = require.resolve('@aws-lite/client').split(awsLite)[0] }
    catch { /* noop */ }

    async function scanNodeModulesDir (dir) {
      let found = []
      let { readdir } = require('fs/promises')
      let mods = await readdir(dir)
      // Find first-party plugins
      if (mods.includes(awsLite)) {
        let knownPlugins = await readdir(join(dir, awsLite))
        found.push(...knownPlugins.map(p => `@aws-lite/${p}`))
      }
      // Find correctly namespaced 3rd-party plugins
      mods.forEach(p => p.startsWith('aws-lite-plugin-') && found.push(p))
      return found.filter(tidy)
    }

    // Try process.cwd first; let's assume plugins may come in as second-order deps, so we'll need to search the project's filesystem for them
    if (await exists(processNodeModulesDir)) {
      let found = await scanNodeModulesDir(processNodeModulesDir)
      if (found.length) return dedupe(plugins.concat(found))
    }

    // Then let's see what's right nearby; this can be unreliable, as package managers may not always properly flatten the dependency tree
    if (relativeNodeModulesDir && await exists(relativeNodeModulesDir)) {
      let found = await scanNodeModulesDir(relativeNodeModulesDir)
      if (found.length) return dedupe(plugins.concat(found))
    }

    // Perhaps the least reliable due to the likelihood of second-order deps: read the package.json (if possible)
    if (await exists(packageJson)) {
      let { readFile } = require('fs/promises')
      let package = JSON.parse(await readFile(packageJson))
      let { dependencies: deps } = package
      if (deps) {
        let found = Object.keys(deps)
          .filter(m => m.startsWith('@aws-lite/') ||
                       m.startsWith('aws-lite-plugin-'))
          .filter(tidy)
        if (found.length) return dedupe(plugins.concat(found))
      }
    }
  }

  return dedupe(plugins.filter(tidy))
}
