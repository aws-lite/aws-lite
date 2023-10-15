#! /usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { argv, cwd, exit, stdin, stdout } from 'node:process'
import { fileURLToPath } from 'node:url'

const CWD = cwd()
const FILE = fileURLToPath(import.meta.url)
const __dirname = dirname(FILE)

const isCLI = FILE === argv[1]
if (isCLI) {
  // run this on the command line
  let name = argv[2]
  let service = argv[3]
  if (!name || !service) {
    // Keep `readline/promises` import out of the Node.js 14.x tests
    let { createInterface } = await import('node:readline/promises')
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

function createTypesStr ({ methods, name, service, existingTypes }) {
  const serviceProp = service.replace(/ /g, '')
  let existingMethods = []
  if (existingTypes) {
    const interfaceRegex = new RegExp(`declare interface AwsLite${serviceProp} {([^]*?)\n}\n`, 'g')
    const match = interfaceRegex.exec(existingTypes)

    if (match) {
      existingMethods = match[1]
        .trim()
        .replace(/\/\/ \$METHODS_START.*?\/\/ \$METHODS_END\n?/gs, '') // remove generated methods
        .split('\n')
        .map(line => line.trim())
        .filter(line => !line.startsWith('//'))  // remove comments
        .filter(line => !line.startsWith('/**')) // remove JSDoc
        .map(line => line.split(': ')[0]) // grab method name
    }
    else {
      throw ReferenceError(`Interface declaration not found in the input string: ${service}`)
    }
  }

  const outputTypes = []
  const methodTypes = []
  for (const method in methods) {
    if (existingMethods.includes(method)) continue

    const methodDef = methods[method]

    if (methodDef && !methodDef.disabled) {
      const methodResponse = `${method}Response`
      outputTypes.push(`  ${method}CommandOutput as ${methodResponse}`)

      const { awsDoc, validate } = methodDef
      if (validate && Object.keys(validate).length) {
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

        const descString = [ '  /**', '   * @description' ]
        if (awsDoc) descString.push(`   * - AWS Docs: {@link ${awsDoc} ${service}: ${method}}`)
        descString.push(`   * - aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/${name}/readme.md#${method} ${name}}`)
        descString.push('   */')
        methodTypes.push(descString.join('\n'))
        methodTypes.push(`  ${method}: (input: { ${inputTypeString.join(', ')} }) => Promise<${methodResponse}>`)
      }
      else {
        methodTypes.push(`  /** @description aws-lite Docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/${name}/readme.md#${method} ${name}} */`)
        methodTypes.push(`  ${method}: () => Promise<${methodResponse}>`)
      }
    }
  }

  const nameProp = name.match(/[-\.]/g) ? `'${name}'` : name
  const importsRegex = /(?<=(\/\/ \$IMPORTS_START\n))[\s\S]*?(?=(\/\/ \$IMPORTS_END))/g
  const methodsRegex = /(?<=(\/\/ \$METHODS_START\n))[\s\S]*?(?=(\/\/ \$METHODS_END))/g
  const typesTmpl = existingTypes
    ? existingTypes
    : readFileSync(join(__dirname, 'tmpl', '_types-tmpl.d.ts')).toString()
  return typesTmpl
    .replace(/\$SERVICE/g, serviceProp)
    .replace(/\$NAME_PROP/g, nameProp)
    .replace(/\$NAME/g, name)
    .replace(importsRegex, outputTypes.join(',\n') + ',\n  ')
    .replace(methodsRegex, methodTypes.join('\n') + '\n  ')
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
  const pluginTypesDir = join(CWD, 'plugins', name, 'types')

  const { methods } = (await import(join(CWD, 'plugins', name, 'src', 'index.mjs'))).default

  if (!existsSync(pluginTypesDir)) {
    // new plugin types package - this only happens once
    if (isCLI) console.log(`NEW package: ${fullTypesName}`)
    mkdirSync(pluginTypesDir, { recursive: true })

    const typesPackageTmpl = readFileSync(join(__dirname, 'tmpl', '_types-package-tmpl.json')).toString()
    const typesPkg = JSON.parse(typesPackageTmpl)

    typesPkg.name = fullTypesName
    typesPkg.description = `Type definitions for the ${fullPluginName} plugin`
    typesPkg.dependencies[`@aws-sdk/client-${name}`] = '3'

    writeFileSync(join(pluginTypesDir, 'package.json'), JSON.stringify(typesPkg, null, 2) + '\n')
    if (isCLI) console.log(`Created ${pluginTypesDir}/package.json`)

    const typesReadmeTmpl = readFileSync(join(__dirname, 'tmpl', '_types-readme-tmpl.md'))
      .toString()
      .replace(/\$NAME/g, name)

    writeFileSync(join(pluginTypesDir, 'readme.md'), typesReadmeTmpl)
    if (isCLI) console.log(`Created ${pluginTypesDir}/readme.md`)
  }

  const existingTypes = existsSync(join(pluginTypesDir, 'index.d.ts'))
    ? readFileSync(join(pluginTypesDir, 'index.d.ts')).toString()
    : null
  const typesStr = createTypesStr({ methods, name, service, existingTypes })
  writeFileSync(join(pluginTypesDir, 'index.d.ts'), typesStr)
  if (isCLI) console.log(`Created ${pluginTypesDir}/index.d.ts`)
}
