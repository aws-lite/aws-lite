#! /usr/bin/env node
let { mkdirSync, rmSync, statSync, writeFileSync } = require('fs')
let { join } = require('path')
let { execSync }  = require('child_process')
let { build } = require('esbuild')
let folderSize = require('fast-folder-size/sync')

// eslint-disable-next-line
let { formatSize, names, roundHalf } = require('./_helpers')

let installCommands = {
  'aws-lite': '@aws-lite/client', // TODO: install '@aws-lite/dynamodb' when ready!
  'aws-sdk-v2': 'aws-sdk',
  'aws-sdk-v2-client': null,
  'aws-sdk-v3': '@aws-sdk/client-dynamodb',
}

let awsLiteUnbundledSize
let awsLiteBundledSize
let v2installTime
let v2size

async function main () {
  console.log(`---------- Running size benchmarks ---------- `)
  let entryFileFolder = join(__dirname, 'entry-files')
  for (let [ name, friendly ] of Object.entries(names)) {
    let isAWSLite = name === 'aws-lite'
    let time, unbundledSize, bundledSize

    console.log(`[${friendly}]`)

    /**
     * Install
     */
    if (name !== 'aws-sdk-v2-client') {
      let startInstall = Date.now()
      let installDir = join(__dirname, 'tmp', name + '-install')
      rmSync(installDir, { recursive: true, force: true })
      mkdirSync(installDir, { recursive: true })

      // Stub in a package.json
      writeFileSync(join(installDir, 'package.json'), '{}')

      console.log(`Installing ${installCommands[name]}...`)
      let cmd = `npm i --omit=dev ${installCommands[name]}`
      try {
        execSync(cmd, { cwd: installDir, stdio: [] })
      }
      catch (err) {
        console.log(`Installation error`, err)
      }

      unbundledSize = folderSize(join(installDir, 'node_modules'))
      time = Date.now() - startInstall

      if (isAWSLite) {
        awsLiteUnbundledSize = unbundledSize
      }
      if (name === 'aws-sdk-v2') {
        v2size = unbundledSize
      }
      console.log(`- Installation time: ${time} ms`)
    }
    else {
      unbundledSize = v2size
      console.log(`- Installation time: ${v2installTime} ms`)
    }
    let larger = ''
    if (!isAWSLite) larger = ` (~${roundHalf(unbundledSize / awsLiteUnbundledSize)}x larger install size)`
    console.log(`- Unbundled size: ${formatSize(unbundledSize)}${larger}`)

    /**
     * Bundle
     */
    let bundleDir = join(__dirname, 'tmp', name + '-bundle')
    mkdirSync(bundleDir, { recursive: true })
    let outfile = join(bundleDir, `${name}-bundle.js`)
    await build({
      entryPoints: [ join(entryFileFolder, `${name}.js`) ],
      bundle: true,
      platform: 'node',
      format: 'cjs',
      outfile,
    })
    let stat = statSync(outfile)
    bundledSize = stat.size
    if (isAWSLite) {
      awsLiteBundledSize = bundledSize
      larger = ''
    }
    else {
      larger = ` (~${roundHalf(bundledSize / awsLiteBundledSize)}x larger bundle size)`
    }
    console.log(`- Bundled size: ${formatSize(bundledSize)}${larger}`)
    console.log('')
  }
}
main()
