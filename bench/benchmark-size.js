#! /usr/bin/env node
let { mkdirSync, statSync } = require('fs')
let { join } = require('path')
let { build } = require('esbuild')
let { formatSize, names } = require('./_helpers')

async function main () {
  // TODO: run unbundled size on disk benchmarks
  console.log(`---------- Running bundle size benchmarks ---------- `)
  let entryFileFolder = join(__dirname, 'entry-files')
  for (let entry of Object.keys(names)) {
    let name = entry.split('.js')[0]
    let friendlyName = names[name]
    console.log(`[${friendlyName}]`)

    let outDir = join(__dirname, 'tmp', name)
    mkdirSync(outDir, { recursive: true })
    let outfile = join(outDir, entry)

    let start = Date.now()
    await build({
      entryPoints: [ join(entryFileFolder, entry) ],
      bundle: true,
      platform: 'node',
      format: 'cjs',
      outfile,
    })
    console.log(`esbuild completed bundling in ${Date.now() - start} ms`)
    let { size } = statSync(outfile)
    console.log(`Bundle size: ${formatSize(size)}`)
    console.log('')
  }
}
main()
