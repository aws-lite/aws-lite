import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const require = createRequire(import.meta.url)
const root = process.cwd()
const pkg = JSON.parse(readFileSync(join(root, 'package.json')))
const workspaces = pkg.workspaces.filter(path => path.startsWith('plugins/'))
const temp = mkdtempSync(join(tmpdir(), 'aws-lite-types-'))
assert(process.env.npm_execpath, 'Run with npm run test:types:standalone')
const npm = (args, cwd = root) => execFileSync(process.execPath, [ process.env.npm_execpath, ...args ], { cwd, encoding: 'utf8' })

try {
  const pack = args => JSON.parse(npm([ 'pack', '--json', '--ignore-scripts', '--pack-destination', temp, ...args ]))
  const packages = [
    ...pack([]),
    ...pack(workspaces.flatMap(path => [ '--workspace', path ])),
  ]
  const pluginPackages = packages.filter(item => item.name !== pkg.name)

  // Compile a consumer outside the repository against the packed packages.
  writeFileSync(join(temp, 'package.json'), JSON.stringify({ private: true, type: 'module' }))
  npm([
    'install', '--offline', '--ignore-scripts', '--no-audit', '--no-fund', '--package-lock=false',
    ...packages.map(item => join(temp, item.filename)),
    `typescript@${require('typescript/package.json').version}`,
    `@types/node@${require('@types/node/package.json').version}`,
  ], temp)
  writeFileSync(join(temp, 'automatic.mts'), readFileSync(join(root, 'test', 'types-standalone', 'automatic.mts')))
  writeFileSync(join(temp, 'all.mts'), pluginPackages.map((item, i) =>
    `import plugin${i} from '${item.name}';\nplugin${i}.methods;`,
  ).join('\n'))
  writeFileSync(join(temp, 'tsconfig.json'), JSON.stringify({
    compilerOptions: {
      strict: true, noEmit: true, skipLibCheck: false,
      target: 'es2020', lib: [ 'es2020' ], types: [ 'node' ],
      module: 'NodeNext', moduleResolution: 'NodeNext', esModuleInterop: true,
    },
    files: [ 'automatic.mts', 'all.mts' ],
  }))
  execFileSync(process.execPath, [ join(temp, 'node_modules', 'typescript', 'bin', 'tsc') ], { cwd: temp, stdio: 'inherit' })
  console.log(`Type checks passed for ${pluginPackages.length} plugin packages.`)
}
finally {
  rmSync(temp, { recursive: true, force: true })
}
