#! /usr/bin/env node
import { join } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import generateTypes from './_types.mjs'
import plugins from '../../plugins.mjs'

const cwd = process.cwd()
const tmplDir = join(cwd, 'scripts', 'generate-plugins', 'tmpl')
const pluginTmpl = readFileSync(join(tmplDir, '_plugin-tmpl.mjs')).toString()
const readmeTmpl = readFileSync(join(tmplDir, '_readme-tmpl.md')).toString()
const packageTmpl = readFileSync(join(tmplDir, '_package-tmpl.json')).toString()
const pluginListRegex = /(?<=(<!-- plugins_start -->\n))[\s\S]*?(?=(<!-- plugins_end -->))/g
const pluginMethodsRegex = /(?<=(<!-- METHOD_DOCS_START -->\n))[\s\S]*?(?=(<!-- METHOD_DOCS_END -->))/g

async function main () {
  for (let plugin of plugins) {
    if (!plugin.name || typeof plugin.name !== 'string' ||
        !plugin.service || typeof plugin.service !== 'string' ||
        !plugin.maintainers || !Array.isArray(plugin.maintainers)) {
      throw ReferenceError(`Specified plugin must have 'name' (string), 'service' (string), and 'maintainers' (array)`)
    }

    let name = `@aws-lite/${plugin.name}`
    let pluginDir = join(cwd, 'plugins', plugin.name)
    let maintainers = plugin.maintainers.join(', ')
    if (!existsSync(pluginDir)) {
      let pluginSrc = join(pluginDir, 'src')
      mkdirSync(pluginSrc, { recursive: true })

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
      writeFileSync(join(pluginDir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')

      // Plugin: readme.md
      let maintainerLinks = plugin.maintainers.map(p => `[${p}](https://github.com/${p.replace('@', '')})`).join(', ')
      let readme = readmeTmpl
        .replace(/\$NAME/g, name)
        .replace(/\$DESC/g, desc)
        .replace(/\$MAINTAINERS/g, maintainerLinks)
      writeFileSync(join(pluginDir, 'readme.md'), readme)

      // aws-lite project: package.json
      let awsLitePkgFile = join(cwd, 'package.json')
      let awsLitePkg = JSON.parse(readFileSync(awsLitePkgFile).toString())
      let workspace = `plugins/${plugin.name}`
      if (!awsLitePkg.workspaces.includes(workspace)) {
        awsLitePkg.workspaces.push(workspace)
        awsLitePkg.workspaces = awsLitePkg.workspaces.sort()
        writeFileSync(awsLitePkgFile, JSON.stringify(awsLitePkg, null, 2))
      }
    }
    // Maybe update docs
    else {
      const pluginReadmeFile = join(pluginDir, 'readme.md')
      let pluginReadme = readFileSync(pluginReadmeFile).toString()
      // Generate docs markdown
      const { default: _plugin } = await import(name)
      let deprecatedMethods = []
      let incompleteMethods = []
      let methodDocs = Object.keys(_plugin.methods).map(methodName => {
        let header = `### \`${methodName}\`\n\n`
        if (_plugin.methods[methodName].deprecated) {
          let item = { name: methodName }
          if (_plugin.methods[methodName]?.awsDoc) item.awsDoc = _plugin.methods[methodName].awsDoc
          deprecatedMethods.push(item)
          return
        }
        if (!_plugin.methods[methodName] || _plugin.methods[methodName].disabled) {
          let item = { name: methodName }
          if (_plugin.methods[methodName]?.awsDoc) item.awsDoc = _plugin.methods[methodName].awsDoc
          incompleteMethods.push(item)
          return
        }
        const { awsDoc, validate } = _plugin.methods[methodName]
        if (!awsDoc) throw ReferenceError(`All methods must refer to an AWS service API doc: ${name} ${methodName}`)
        header += `[Canonical AWS API doc](${awsDoc})\n`
        if (validate) {
          header += `\nProperties:\n` + Object.entries(validate).map(([ param, values ]) => {
            const { type, required, comment } = values
            const _req = required ? ' [required]' : ''
            const _com = comment ? `\n  - ${comment}` : ''
            return `- **\`${param}\` (${type})${_req}**${_com}`
          }).join('\n')
        }
        return header
      }).filter(Boolean).join('\n\n\n') + '\n'

      if (deprecatedMethods.length) {
        methodDocs += `\n\n### Deprecated methods\n\n` +
                      deprecatedMethods.map(({ name, awsDoc }) => awsDoc
                        ? `- [\`${name}\`](${awsDoc})`
                        : `- \`${name}\``
                      ).join('\n') + '\n'
      }
      if (incompleteMethods.length) {
        methodDocs += `\n\n### Methods yet to be implemented\n\n` +
                      `> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!\n\n` +
                      incompleteMethods.map(({ name, awsDoc }) => awsDoc
                        ? `- [\`${name}\`](${awsDoc})`
                        : `- \`${name}\``
                      ).join('\n') + '\n'
      }
      pluginReadme = pluginReadme.replace(pluginMethodsRegex, methodDocs)
      writeFileSync(pluginReadmeFile, pluginReadme)
    }

    if (plugin.types !== false)
      try { await generateTypes(plugin) }
      catch (error) {
        console.error(`Failed to generate types for ${name}: ${error.message}`)
      }
  }

  // Project readme.md
  const projectReadmeFile = join(cwd, 'readme.md')
  let projectReadme = readFileSync(projectReadmeFile).toString()
  const pluginList = plugins.map(({ name, service }) => `- [${service}](https://www.npmjs.com/package/@aws-lite/${name})`)
  projectReadme = projectReadme.replace(pluginListRegex, pluginList.join('\n') + '\n')
  writeFileSync(projectReadmeFile, projectReadme)
}
main()
