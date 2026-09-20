import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { execSync } from 'node:child_process'
import pluginList from '../plugins.mjs'
import semver from 'semver'
const cwd = process.cwd()

const args = process.argv.slice(2)
const semverArgs = [ 'major', 'minor', 'patch' ]
const action = args[0]
if (!semverArgs.includes(action)) {
  throw ReferenceError(`Version action must be one of: ${semverArgs.join(', ')} (got: ${action})`)
}

const pluginNames = args.slice(1)
const plugins = pluginNames[0] === 'all' ? pluginList.map(({ service }) => service) : pluginNames

const status = execSync('git status --porcelain')
if (status.length) {
  console.error('Found uncommitted changes:')
  console.error(status.toString())
  console.error('Please stash or commit changes and run again')
  process.exit(1)
}

const files = []
const msg = []
for (let plugin of plugins) {
  const pluginDir = join(cwd, 'plugins', plugin)

  if (!existsSync(pluginDir)) {
    throw ReferenceError(`Invalid plugin, or plugin doesn't yet exist: ${plugin}`)
  }
  if (!pluginList.some(({ service }) => service === plugin)) {
    throw ReferenceError(`Plugin not found in aws-lite plugins list: ${plugin}`)
  }
  const pluginPkgFile = join(pluginDir, 'package.json')
  if (!existsSync(pluginPkgFile)) {
    throw ReferenceError(`Plugin package.json file not found: ${plugin}`)
  }

  const pkg = JSON.parse(readFileSync(pluginPkgFile))
  pkg.version = semver.inc(pkg.version, action)
  writeFileSync(pluginPkgFile, JSON.stringify(pkg, null, 2) + '\n')
  files.push(pluginPkgFile)
  msg.push(`\`@aws-lite/${plugin}\` ${pkg.version}`)
}
execSync(`git commit ${files.join(' ')} -m '${msg.join('\n')}'`)
