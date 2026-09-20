#! /usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { cwd } from 'node:process'
import { fileURLToPath } from 'node:url'

const CWD = cwd()
const FILE = fileURLToPath(import.meta.url)
const __dirname = dirname(FILE)

function typeFromValidateEntry (value) {
  if (Array.isArray(value)) {
    return value.map(typeFromValidateEntry).join(' | ')
  }
  else {
    switch (value) {
    case 'object': return 'Record<string, any>'
    case 'array': return 'any[]'
    case 'buffer': return 'Buffer'
    case 'stream': return 'Readable'
    default: return value
    }
  }
}

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
  const exportTypes = []
  for (const method in methods) {
    if (existingMethods.includes(method)) continue

    const methodDef = methods[method]

    if (methodDef && !methodDef.disabled) {
      const { awsDoc, customResponse, validate } = methodDef
      const methodResponse = customResponse || `${method}Response`
      // Only extract response types from aws-sdk if method does not have a custom response
      if (!customResponse) {
        outputTypes.push(`  ${method}CommandOutput as ${methodResponse}`)
        exportTypes.push(`  ${methodResponse}`)
      }

      if (validate && Object.keys(validate).length) {
        const inputType = {}
        for (const key in validate) {
          const { type, required } = validate[key]
          inputType[`${key}${required ? '' : '?'}`] = type
        }

        const inputTypeString = []
        for (const key in inputType) {
          const value = inputType[key]
          const type = typeFromValidateEntry(value)

          inputTypeString.push(`${key}: ${type}`)
        }

        const descString = [ '  /**', '   * @description' ]
        if (awsDoc) descString.push(`   * - AWS docs: {@link ${awsDoc} ${display}: ${method}}`)
        descString.push(`   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/${service}/readme.md#${method} ${display}: ${method}}`)
        descString.push('   */')
        methodTypes.push(descString.join('\n'))
        methodTypes.push(`  ${method}: (input: AwsLiteMethodOptions & { ${inputTypeString.join(', ')} }) => Promise<${methodResponse}>`)
      }
      else {
        methodTypes.push(`  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/${service}/readme.md#${method} ${display}: ${method}} */`)
        methodTypes.push(`  ${method}: () => Promise<${methodResponse}>`)
      }
    }
  }

  const importsRegex = /(?<=(\/\/ \$IMPORTS_START\n))[\s\S]*?(?=(\/\/ \$IMPORTS_END))/g
  const methodsRegex = /(?<=(\/\/ \$METHODS_START\n))[\s\S]*?(?=(\/\/ \$METHODS_END))/g
  const exportRegex = /(?<=(\/\/ \$EXPORT_START\n))[\s\S]*?(?=(\/\/ \$EXPORT_END))/g
  let typesTmpl = existingTypes
    ? existingTypes
    : readFileSync(join(__dirname, 'tmpl', '_types-tmpl.d.mts')).toString()
  // Ensure AwsLiteMethodOptions import exists for existing files
  if (existingTypes && !typesTmpl.includes('import type { AwsLiteMethodOptions }')) {
    typesTmpl = 'import type { AwsLiteMethodOptions } from "@aws-lite/client";\n\n' + typesTmpl
  }
  const trailingComma = outputTypes.length ? ',' : ''
  return typesTmpl
    .replace(/\$PACKAGE_NAME/g, `@aws-lite/${service}`)
    .replace(/\$PROPERTY/g, property)
    .replace(importsRegex, outputTypes.join(',\n') + `${trailingComma}\n  `)
    .replace(methodsRegex, methodTypes.join('\n') + '\n  ')
    .replace(exportRegex, exportTypes.join(',\n') + `${trailingComma}\n  `)
}

/**
 * @param {Object} plugin
 * @param {string} plugin.service - the official service name; example: `cloudformation`
 * @param {string} plugin.awsSdkName - the AWS SDK v3 package name; example: `route-53`
 * @param {string} plugin.property - service property name to be used in code
 * @param {string} plugin.display - the commonly recognized, more formal version (including casing); example: `CloudFormation`
 * @returns {Promise<boolean>} Whether the declarations changed
 */
export default async function main ({ service, awsSdkName, property, display }) {
  const pluginDir = join(CWD, 'plugins', service)
  const pluginPackageFile = join(pluginDir, 'package.json')
  const pluginPackage = readFileSync(pluginPackageFile, 'utf8')
  const pkg = JSON.parse(pluginPackage)
  pkg.types = 'src/index.d.mts'
  pkg.devDependencies ||= {}
  pkg.devDependencies[`@aws-sdk/client-${awsSdkName || service}`] ||= '3'
  const updatedPackage = JSON.stringify(pkg, null, 2) + '\n'
  if (updatedPackage !== pluginPackage) writeFileSync(pluginPackageFile, updatedPackage)

  const { methods } = (await import('file://' + join(CWD, 'plugins', service, 'src', 'index.mjs'))).default

  const typesFile = join(pluginDir, 'src', 'index.d.mts')
  const existingTypes = existsSync(typesFile)
    ? readFileSync(typesFile).toString()
    : null
  const typesStr = createTypesStr({ methods, service, property, display, existingTypes })
  writeFileSync(typesFile, typesStr)
  return typesStr !== existingTypes || updatedPackage !== pluginPackage
}
