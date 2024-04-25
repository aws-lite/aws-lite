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
  let mutated = false
  for (let plugin of plugins) {
    let { service, property, display, maintainers } = plugin
    if (!service || typeof service !== 'string' ||
        !property || typeof property !== 'string' ||
        !display || typeof display !== 'string' ||
        !maintainers || !Array.isArray(maintainers)) {
      throw ReferenceError(`Specified plugin must have 'service' (string), 'property' (string), 'display' (string), and 'maintainers' (array)`)
    }

    let packageName = `@aws-lite/${service}`
    let repoDir = `plugins/${service}`
    let pluginDir = join(cwd, 'plugins', service)
    let maintainersList = maintainers.join(', ')
    if (!existsSync(pluginDir)) {
      mutated = true
      let pluginSrc = join(pluginDir, 'src')
      mkdirSync(pluginSrc, { recursive: true })

      let desc = `Official \`aws-lite\` plugin for ${display}`

      // Plugin: src/index.js
      let src = pluginTmpl
        .replace(/\$SERVICE/g, service)
        .replace(/\$PROPERTY/g, property)
        .replace(/\$MAINTAINERS/g, maintainersList)
      writeFileSync(join(pluginSrc, 'index.mjs'), src)

      // Plugin: package.json
      let pkg = JSON.parse(packageTmpl)
      pkg.name = packageName
      pkg.description = desc
      pkg.author = maintainersList
      pkg.repository.directory = repoDir
      writeFileSync(join(pluginDir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')

      // Plugin: readme.md
      let maintainerLinks = maintainers.map(p => `[${p}](https://github.com/${p.replace('@', '')})`).join(', ')
      let readme = readmeTmpl
        .replace(/\$PACKAGE_NAME/g, packageName)
        .replace(/\$SERVICE/g, service)
        .replace(/\$DESC/g, desc)
        .replace(/\$MAINTAINERS/g, maintainerLinks)
      writeFileSync(join(pluginDir, 'readme.md'), readme)

      // aws-lite project: package.json
      let awsLitePkgFile = join(cwd, 'package.json')
      let awsLitePkg = JSON.parse(readFileSync(awsLitePkgFile).toString())
      let workspace = repoDir
      if (!awsLitePkg.workspaces.includes(workspace)) {
        awsLitePkg.workspaces.push(workspace)
        awsLitePkg.workspaces = awsLitePkg.workspaces.sort()
        writeFileSync(awsLitePkgFile, JSON.stringify(awsLitePkg, null, 2))
      }
    }
    // Maybe update docs
    else {
      const pluginReadmeFile = join(pluginDir, 'readme.md')
      const pluginReadme = readFileSync(pluginReadmeFile).toString()
      // Generate docs markdown
      const { default: _plugin } = await import(packageName)
      let deprecatedMethods = []
      let incompleteMethods = []
      let methodDocs = Object.keys(_plugin.methods).map(method => {
        let header = `### \`${method}\`\n\n`
        if (_plugin.methods[method].deprecated) {
          let item = { method }
          if (_plugin.methods[method]?.awsDoc) item.awsDoc = _plugin.methods[method].awsDoc
          deprecatedMethods.push(item)
          return
        }
        if (!_plugin.methods[method] || _plugin.methods[method].disabled) {
          let item = { method }
          if (_plugin.methods[method]?.awsDoc) item.awsDoc = _plugin.methods[method].awsDoc
          incompleteMethods.push(item)
          return
        }
        const { awsDoc, validate } = _plugin.methods[method]
        if (!awsDoc) throw ReferenceError(`All methods must refer to an AWS service API doc: ${display} ${method}`)
        header += `[Canonical AWS API doc](${awsDoc})\n`
        if (validate) {
          header += `\nProperties:\n` + Object.entries(validate).map(([ param, values ]) => {
            const { type, required, comment, ref } = values
            const _typ = Array.isArray(type) ? type.join(', ') : type
            const _req = required ? ' [required]' : ''
            const _com = comment ? `\n  - ${comment}` : ''
            const _ref = ref ? `\n  - [More details (AWS)](${ref})` : ''
            return `- **\`${param}\` (${_typ})${_req}**${_com}${_ref}`
          }).join('\n')
        }
        return header
      }).filter(Boolean).join('\n\n\n') + '\n'

      if (deprecatedMethods.length) {
        methodDocs += `\n\n### Deprecated methods\n\n` +
                      deprecatedMethods.map(({ method, awsDoc }) => awsDoc
                        ? `- [\`${method}\`](${awsDoc})`
                        : `- \`${method}\``,
                      ).join('\n') + '\n'
      }
      if (incompleteMethods.length) {
        methodDocs += `\n\n### Methods yet to be implemented\n\n` +
                      `> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!\n\n` +
                      incompleteMethods.map(({ method, awsDoc }) => awsDoc
                        ? `- [\`${method}\`](${awsDoc})`
                        : `- \`${method}\``,
                      ).join('\n') + '\n'
      }
      const updatedPluginReadme = pluginReadme.replace(pluginMethodsRegex, methodDocs)
      writeFileSync(pluginReadmeFile, updatedPluginReadme)
      if (updatedPluginReadme !== pluginReadme) {
        mutated = true
      }
    }

    if (plugin.types !== false) {
      try { await generateTypes(plugin) }
      catch (error) {
        console.error(`Failed to generate types for ${service}: ${error.message}`)
      }
    }
  }

  // Project readme.md
  const projectReadmeFile = join(cwd, 'readme.md')
  const projectReadme = readFileSync(projectReadmeFile).toString()
  const pluginList = plugins.map(({ service, display }) => `- [${display}](https://www.npmjs.com/package/@aws-lite/${service})`)
  const updatedProjectReadme = projectReadme.replace(pluginListRegex, pluginList.join('\n') + '\n')
  writeFileSync(projectReadmeFile, updatedProjectReadme)
  if (projectReadme !== updatedProjectReadme) {
    mutated = true
  }

  // If run in the git pre-commit hook, ensure any changes are accounted for
  if (process.env.PRECOMMIT && mutated) {
    throw Error('Found uncommitted changes to plugin docs and/or types, please commit changes and try again')
  }
}
main()
