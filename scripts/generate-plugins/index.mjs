#! /usr/bin/env node
import { join } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
const cwd = process.cwd()

// Break this into a separate file if it becomes too big / unwieldy!
// - name: the official service name; example: `cloudformation`
// - service: the commonly recognized, more formal version (including casing); example: `CloudFormation`
// - maintainers: array of GitHub handles of the individual(s) or org(s) responsible for maintaining the plugin
const plugins = [
  { name: 'dynamodb', service: 'DynamoDB', maintainers: [ '@architect' ] },
  { name: 's3', service: 'S3', maintainers: [ '@architect' ] },
].sort()
const pluginTmpl = readFileSync(join(cwd, 'scripts', 'generate-plugins', '_plugin-tmpl.mjs')).toString()
const readmeTmpl = readFileSync(join(cwd, 'scripts', 'generate-plugins', '_readme-tmpl.md')).toString()
const packageTmpl = readFileSync(join(cwd, 'scripts', 'generate-plugins', '_package-tmpl.json'))

plugins.forEach(plugin => {
  if (!plugin.name || typeof plugin.name !== 'string' ||
      !plugin.service || typeof plugin.service !== 'string' ||
      !plugin.maintainers || !Array.isArray(plugin.maintainers)) {
    throw ReferenceError(`Specified plugin must have 'name' (string), 'service' (string), and 'maintainers' (array)`)
  }

  let pluginDir = join(cwd, 'plugins', plugin.name)
  let maintainers = plugin.maintainers.join(', ')
  if (!existsSync(pluginDir)) {
    let pluginSrc = join(pluginDir, 'src')
    mkdirSync(pluginSrc, { recursive: true })

    let name = `@aws-lite/${plugin.name}`
    let desc = `Official \`aws-lite\` plugin for ${plugin.service}`

    // Plugin: src/index.js
    let src = pluginTmpl
      .replace(/\$NAME/g, plugin.name)
      .replace(/\$MAINTAINERS/g, maintainers)
    writeFileSync(join(pluginSrc, 'index.mjs'), src)

    // Plugin: package.json
    let pkg = JSON.parse(packageTmpl)
    pkg.name = name
    pkg.description = desc
    pkg.author = maintainers
    pkg.repository.directory = `plugins/${plugin.name}`
    writeFileSync(join(pluginDir, 'package.json'), JSON.stringify(pkg, null, 2))

    // Plugin: readme.md
    let maintainerLinks = plugin.maintainers.map(p => `[${p}](https://github.com/${p.replace('@', '')})`).join(', ')
    let readme = readmeTmpl
      .replace(/\$NAME/g, name)
      .replace(/\$DESC/g, desc)
      .replace(/\$MAINTAINERS/g, maintainerLinks)
    writeFileSync(join(pluginDir, 'readme.md'), readme)

    // Project: package.json
    let projectPkgFile = join(cwd, 'package.json')
    let projectPkg = JSON.parse(readFileSync(projectPkgFile))
    let workspace = `plugins/${plugin.name}`
    if (!projectPkg.workspaces.includes(workspace)) {
      projectPkg.workspaces.push(workspace)
      projectPkg.workspaces = projectPkg.workspaces.sort()
      writeFileSync(projectPkgFile, JSON.stringify(projectPkg, null, 2))
    }
  }
})

// Project readme.md
let projectReadmeFile = join(cwd, 'readme.md')
let projectReadme = readFileSync(projectReadmeFile).toString()
let pluginListRegex = /(?<=(<!-- plugins_start -->\n))[\s\S]*?(?=(<!-- plugins_end -->))/g
let pluginList = plugins.map(({ name, service }) => `- [${service}](https://www.npmjs.com/package/@aws-lite/${name})`)
projectReadme = projectReadme.replace(pluginListRegex, pluginList.join('\n') + '\n')
writeFileSync(projectReadmeFile, projectReadme)
