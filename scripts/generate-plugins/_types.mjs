#! /usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { cwd } from 'node:process'
import { fileURLToPath } from 'node:url'

const CWD = cwd()
const FILE = fileURLToPath(import.meta.url)
const __dirname = dirname(FILE)

function createTypesStr ({ methods, service, property, display, existingTypes }) {
  let existingMethods = []
  if (existingTypes) {
    const interfaceRegex = new RegExp(`declare interface AwsLite${property} {([^]*?)\n}\n`, 'g')
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
        if (awsDoc) descString.push(`   * - AWS docs: {@link ${awsDoc} ${display}: ${method}}`)
        descString.push(`   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/${service}/readme.md#${method} ${display}: ${method}}`)
        descString.push('   */')
        methodTypes.push(descString.join('\n'))
        methodTypes.push(`  ${method}: (input: { ${inputTypeString.join(', ')} }) => Promise<${methodResponse}>`)
      }
      else {
        methodTypes.push(`  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/${service}/readme.md#${method} ${display}: ${method}} */`)
        methodTypes.push(`  ${method}: () => Promise<${methodResponse}>`)
      }
    }
  }

  const importsRegex = /(?<=(\/\/ \$IMPORTS_START\n))[\s\S]*?(?=(\/\/ \$IMPORTS_END))/g
  const methodsRegex = /(?<=(\/\/ \$METHODS_START\n))[\s\S]*?(?=(\/\/ \$METHODS_END))/g
  const typesTmpl = existingTypes
    ? existingTypes
    : readFileSync(join(__dirname, 'tmpl', '_types-tmpl.d.ts')).toString()
  const trailingComma = outputTypes.length ? ',' : ''
  return typesTmpl
    .replace(/\$SERVICE/g, service)
    .replace(/\$PROPERTY/g, property)
    .replace(importsRegex, outputTypes.join(',\n') + `${trailingComma}\n  `)
    .replace(methodsRegex, methodTypes.join('\n') + '\n  ')
}

/**
 * @param {Object} plugin
 * @param {string} plugin.service - the official service name; example: `cloudformation`
 * @param {string} plugin.property - service property name to be used in code
 * @param {string} plugin.display - the commonly recognized, more formal version (including casing); example: `CloudFormation`
 * @returns {Promise<void>}
 */
export default async function main ({ service, property, display }) {
  const typesName = `${service}-types`
  const typesPackageName = `@aws-lite/${typesName}`
  const packageName = `@aws-lite/${service}`
  const pluginTypesDir = join(CWD, 'plugins', service, 'types')

  const { methods } = (await import(join(CWD, 'plugins', service, 'src', 'index.mjs'))).default

  if (!existsSync(pluginTypesDir)) {
    // new plugin types package - this only happens once
    mkdirSync(pluginTypesDir, { recursive: true })

    const typesPackageTmpl = readFileSync(join(__dirname, 'tmpl', '_types-package-tmpl.json')).toString()
    const typesPkg = JSON.parse(typesPackageTmpl)

    typesPkg.name = typesPackageName
    typesPkg.description = `Type definitions for the \`${packageName}\` plugin`
    typesPkg.homepage = `https://aws-lite.org/services/${service}`
    typesPkg.repository.directory = `plugins/${service}/types`

    typesPkg.dependencies[`@aws-sdk/client-${service}`] = '3'

    writeFileSync(join(pluginTypesDir, 'package.json'), JSON.stringify(typesPkg, null, 2) + '\n')

    const typesReadmeTmpl = readFileSync(join(__dirname, 'tmpl', '_types-readme-tmpl.md'))
      .toString()
      .replace(/\$SERVICE/g, service)

    writeFileSync(join(pluginTypesDir, 'readme.md'), typesReadmeTmpl)
  }

  const existingTypes = existsSync(join(pluginTypesDir, 'index.d.ts'))
    ? readFileSync(join(pluginTypesDir, 'index.d.ts')).toString()
    : null
  const typesStr = createTypesStr({ methods, service, property, display, existingTypes })
  writeFileSync(join(pluginTypesDir, 'index.d.ts'), typesStr)
}
