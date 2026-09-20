import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { builtinModules, createRequire } from 'node:module'
import { join, resolve } from 'node:path'
import { generateDtsBundle } from 'dts-bundle-generator'
import ts from 'typescript'

const readJson = file => JSON.parse(readFileSync(file, 'utf8'))

// Follow package resolution from each dependency, including nested installations.
function collectLibraries (packageFile, libraries = new Map()) {
  if (libraries.has(packageFile)) return libraries
  const pkg = readJson(packageFile)
  libraries.set(packageFile, pkg)
  const require = createRequire(packageFile)
  for (const name of Object.keys(pkg.dependencies || {})) {
    if (name.startsWith('@aws-sdk/') || name.startsWith('@smithy/')) {
      collectLibraries(require.resolve(`${name}/package.json`), libraries)
    }
  }
  return libraries
}

function assertStandalone (text, file) {
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)
  function visit (node) {
    const specifier = node.moduleSpecifier ||
      (ts.isImportTypeNode(node) && node.argument.literal) ||
      (ts.isExternalModuleReference(node) && node.expression)
    if (specifier && ts.isStringLiteral(specifier) &&
        !builtinModules.includes(specifier.text.replace(/^node:/, ''))) {
      throw Error(`Unbundled dependency in ${file}: ${specifier.text}`)
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  if (source.referencedFiles.length || source.typeReferenceDirectives.some(ref => ref.fileName !== 'node')) {
    throw Error(`Unexpected reference directive in ${file}`)
  }
}

export default function generateSdkTypes () {
  const root = process.cwd()
  const pkg = readJson(join(root, 'package.json'))
  const temporaryDirs = []
  try {
    const bundles = pkg.workspaces.filter(path => existsSync(join(root, path, 'src', 'index.d.mts'))).map(path => {
      const pluginDir = resolve(root, path)
      const dir = join(pluginDir, 'src')
      const manifest = readJson(join(pluginDir, 'package.json'))
      const sdk = Object.keys(manifest.devDependencies || {}).find(name => name.startsWith('@aws-sdk/client-'))
      if (!sdk) throw Error(`Missing AWS SDK development dependency in ${pluginDir}/package.json`)
      const require = createRequire(join(pluginDir, 'package.json'))
      const packageFile = require.resolve(`${sdk}/package.json`)
      const libraries = collectLibraries(packageFile)
      const source = ts.createSourceFile('index.d.mts', readFileSync(join(dir, 'index.d.mts'), 'utf8'), ts.ScriptTarget.Latest, true)
      const imports = source.statements.filter(node => ts.isImportDeclaration(node) && node.moduleSpecifier.text === './aws-sdk.js')
      const names = imports.flatMap(node => {
        const bindings = node.importClause?.namedBindings
        if (!bindings || !ts.isNamedImports(bindings)) throw Error(`Expected named SDK imports in ${dir}`)
        return bindings.elements.map(element => (element.propertyName || element.name).text)
      })
      // Resolve the SDK from this workspace, even if npm installed it locally.
      const temp = mkdtempSync(join(pluginDir, '.sdk-types-'))
      temporaryDirs.push(temp)
      const entry = join(temp, 'index.d.ts')
      writeFileSync(entry, `export type { ${[ ...new Set(names) ].join(', ')} } from '${sdk}';\n`)
      return { dir, entry, libraries, sdk: `${sdk}@${readJson(packageFile).version}` }
    })

    const outputs = bundles.map(bundle => {
      console.log(`Extracting declarations from ${bundle.sdk}`)
      return generateDtsBundle([ {
        filePath: bundle.entry,
        libraries: { inlinedLibraries: [ ...new Set([ ...bundle.libraries.values() ].map(lib => lib.name)) ] },
        output: { noBanner: true, exportReferencedTypes: false },
      } ], { preferredConfigPath: join(root, 'tsconfig.json') })[0]
    })

    // Validate every bundle before updating any checked-in output.
    outputs.forEach((output, i) => assertStandalone(output, bundles[i].dir))
    let mutated = false
    outputs.forEach((output, i) => {
      const { dir, sdk } = bundles[i]
      const banner = `// Generated from ${sdk} by npm run gen. Do not edit.\n// AWS SDK and Smithy declarations: see ../readme.md#attribution.\n\n`
      const file = join(dir, 'aws-sdk.d.ts')
      const text = banner + output
      if (!existsSync(file) || readFileSync(file, 'utf8') !== text) {
        writeFileSync(file, text)
        mutated = true
      }
    })
    return mutated
  }
  finally {
    temporaryDirs.forEach(dir => rmSync(dir, { recursive: true, force: true }))
  }
}
