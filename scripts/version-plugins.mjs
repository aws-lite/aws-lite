import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { execSync } from 'node:child_process'
import { services } from '../src/services.js'
import plugins from '../plugins.mjs'
import semver from 'semver'
const cwd = process.cwd()

const args = process.argv.slice(2)
const semverArgs = [ 'major', 'minor', 'patch' ]
const action = args[0]
if (!semverArgs.includes(action)) {
  throw ReferenceError(`Version action must be one of: ${semverArgs.join(', ')} (got: ${action})`)
}

const plugin = args[1].replace('-types', '')
const typesOnly = args[1].endsWith('-types')

if (!services.includes(plugin)) {
  throw ReferenceError(`Invalid plugin: ${plugin}`)
}
if (!plugins.some(({ name }) => name === plugin)) {
  throw ReferenceError(`Plugin does not yet exist: ${plugin}`)
}
if (typesOnly && action !== 'patch') {
  throw ReferenceError(`Types packages may only receive patches independent of the main plugin`)
}

const pluginDir = join(cwd, 'plugins', plugin)
const pluginPkgFile = join(pluginDir, 'package.json')
const pluginTypeDir = join(pluginDir, 'types')
const pluginTypePkgFile = join(pluginTypeDir, 'package.json')
if (!existsSync(pluginDir) || !existsSync(pluginTypeDir)) {
  throw ReferenceError(`Plugin or plugin types directory not found: ${plugin}`)
}
if (!existsSync(pluginPkgFile) || !existsSync(pluginTypePkgFile)) {
  throw ReferenceError(`Plugin or types package.json file not found: ${plugin}`)
}

const status = execSync('git status --porcelain')
if (status.length) {
  console.error('Found uncommitted changes:')
  console.error(status.toString())
  console.error('Please stash or commit changes and run again')
  process.exit(1)
}

const changes = {}
if (!typesOnly) changes[pluginPkgFile] = { msg: `\`@aws-lite/${plugin}\` ` }
changes[pluginTypePkgFile] = { msg: `\`@aws-lite/${plugin}-types\` ` }

Object.keys(changes).forEach(file => {
  const pkg = JSON.parse(readFileSync(file))
  const newVersion = semver.inc(pkg.version, action)
  if (typesOnly) {
    changes[file].ver = newVersion
  }
  else if (file === pluginTypePkgFile &&
           semver.lt(newVersion, changes[pluginPkgFile].ver)) {
    changes[file].ver = changes[pluginPkgFile].ver
  }
  else changes[file].ver = newVersion

  pkg.version = changes[file].ver
  changes[file].msg = changes[file].msg += changes[file].ver
  writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n')
})

const files = Object.keys(changes).join(' ')
const msg = Object.values(changes).map(({ msg }) => msg).join('\n')
execSync(`git commit ${files} -m '${msg}'`)
