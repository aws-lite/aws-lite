#! /usr/bin/env node
import { createInterface } from 'node:readline/promises'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { argv, cwd, exit, stdin, stdout } from 'node:process'
import { fileURLToPath } from 'node:url'

const CWD = cwd()
const FILE = fileURLToPath(import.meta.url)
const HERE = dirname(FILE)

const isCLI = FILE === argv[1]
if (isCLI) {
  // run this on the command line
  let name = argv[2]
  let service = argv[3]
  if (!name || !service) {
    const rl = createInterface({ input: stdin, output: stdout })
    name = await rl.question('plugin name: ')
    if (!name) {
      console.log('Must specify plugin name')
      exit(1)
    }
    service = await rl.question('service name: ')
    if (!service) {
      console.log('Must specify service name')
      exit(1)
    }
    rl.close()
  }
  try {
    await main({ name, service })
  }
  catch (error) {
    console.error(error)
    exit(1)
  }
}

function createTypesStr ({ methods, name, service }) {
  const outputs = []
  const lines = []
  for (const method in methods) {
    // TODO: exclude methods that already exist outside of $METHODS block
    // * this would allow authors to customize the types for those methods
    const methodDef = methods[method]

    if (typeof methodDef === 'object') {
      const output = `${method}CommandOutput`
      outputs.push(`  ${output}`)

      const { awsDoc, validate } = methodDef
      if (validate) {
        const inputType = {}
        for (const key in validate) {
          const { type, required } = validate[key]
          inputType[`${key}${required ? '' : '?'}`] = type
        }

        const inputTypeString = []
        for (const key in inputType) {
          const value = inputType[key]

          let type
          switch (value) {
          case 'object': type = 'Record<string, any>'
            break
          case 'array': type = 'any[]'
            break
          default: type = value
            break
          }

          inputTypeString.push(`${key}: ${type}`)
        }

        if (awsDoc) lines.push(`  /** @description AWS Documentation: {@link ${awsDoc}} */`)
        lines.push(`  ${method}: (input: { ${inputTypeString.join(', ')} }) => Promise<${output}>`)
      }
      else {
        lines.push(`  ${method}: () => Promise<${output}>`)
      }
    }
    else if (typeof methodDef === 'boolean' && methodDef === false) {
      // incomplete method
      lines.push('  /** @description Not yet implemented */')
      lines.push(`  // ${method}: never`)
    }
  }

  const typesTmpl = readFileSync(join(HERE, 'tmpl', '_types-tmpl.d.ts')).toString()

  const importsRegex = /(?<=(\/\/ \$IMPORTS_START\n))[\s\S]*?(?=(\/\/ \$IMPORTS_END))/g
  const methodsRegex = /(?<=(\/\/ \$METHODS_START\n))[\s\S]*?(?=(\/\/ \$METHODS_END))/g
  return typesTmpl
    .replace(/\$SERVICE/g, service)
    .replace(/\$NAME/g, name)
    .replace(importsRegex, outputs.join(',\n') + '\n  ')
    .replace(methodsRegex, lines.join('\n') + '\n  ')
}

/**
 * @param {Object} plugin
 * @param {string} plugin.name - the official service name; example: `cloudformation`
 * @param {string} plugin.service - the commonly recognized, more formal version (including casing); example: `CloudFormation`
 * @returns {Promise<void>}
 */
export default async function main ({ name, service }) {
  const typesName = `${name}-types`
  const fullTypesName = `@aws-lite/${typesName}`
  const fullPluginName = `@aws-lite/${name}`
  const { methods } = (await import(join(CWD, 'plugins', name, 'src', 'index.mjs'))).default
  const pluginTypesDir = join(CWD, 'plugins', typesName)

  if (!existsSync(pluginTypesDir)) {
    // new plugin types package
    if (isCLI) console.log(`NEW package: ${fullTypesName}`)
    mkdirSync(pluginTypesDir, { recursive: true })

    const typesPackageTmpl = readFileSync(join(HERE, 'tmpl', '_types-package-tmpl.json')).toString()
    const typesPkg = JSON.parse(typesPackageTmpl)

    typesPkg.name = fullTypesName
    typesPkg.description = `Type definitions for the ${fullPluginName} plugin`
    // TODO: not "latest"
    typesPkg.devDependencies['@aws-lite/client'] = 'latest'
    typesPkg.devDependencies[fullPluginName] = 'latest'
    typesPkg.devDependencies[`@aws-sdk/client-${name}`] = 'latest'

    writeFileSync(join(pluginTypesDir, 'package.json'), JSON.stringify(typesPkg, null, 2))
    if (isCLI) console.log(`Created ${pluginTypesDir}/package.json`)
  }

  const typesStr = createTypesStr({ methods, name, service })
  writeFileSync(join(pluginTypesDir, 'index.d.ts'), typesStr)
  if (isCLI) console.log(`Created ${pluginTypesDir}/index.d.ts`)

  // TODO: plugin-types readme
}
