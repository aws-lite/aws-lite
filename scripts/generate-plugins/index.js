#! /usr/bin/env node
let { join } = require('path')
let { existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs')
const cwd = process.cwd()

// Break this into a separate file if it becomes too big / unwieldy!
const plugins = [
  { name: 'dynamodb', service: 'DynamoDB' },
]
const pluginTmpl = readFileSync(join(__dirname, '_plugin-tmpl.js')).toString()
const readmeTmpl = readFileSync(join(__dirname, '_readme-tmpl.md')).toString()
const packageTmpl = readFileSync(join(__dirname, '_package-tmpl.json'))

plugins.forEach(plugin => {
  let pluginDir = join(cwd, 'plugins', plugin.name)
  if (!existsSync(pluginDir)) {
    let pluginSrc = join(pluginDir, 'src')
    mkdirSync(pluginSrc, { recursive: true })

    let name = `@aws-lite/${plugin.name}`
    let desc = `Official \`aws-lite\` plugin for ${plugin.service}`

    // src/index.js
    let src = pluginTmpl
      .replace(/\$NAME/g, plugin.name)
    writeFileSync(join(pluginSrc, 'index.js'), src)

    // package.json
    let pkg = JSON.parse(packageTmpl)
    pkg.name = name
    pkg.description = desc
    writeFileSync(join(pluginDir, 'package.json'), JSON.stringify(pkg, null, 2))

    // readme.md
    let readme = readmeTmpl
      .replace(/\$NAME/g, name)
      .replace(/\$DESC/g, desc)
    writeFileSync(join(pluginDir, 'readme.md'), readme)

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
