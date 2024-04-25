#! /usr/bin/env node

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import pluginList from '../../plugins.mjs'

const start = Date.now()
const cwd = process.cwd()
const denoDir = join(cwd, 'node_modules', '.deno')
if (!existsSync(denoDir)) {
  throw Error('Deno has not yet installed dependencies for the test run')
}

const deps = readdirSync(denoDir)

const existingAwsLiteDirs = deps.filter(i => i.startsWith('@aws-lite+'))
if (existingAwsLiteDirs.length) {
  existingAwsLiteDirs.forEach(dir => {
    rmSync(join(denoDir, dir), { recursive: true, force: true })
  })
}

const dirs = [
  cwd,
  ...pluginList.map(({ service }) => join(cwd, 'plugins', service)),
]
dirs.forEach(dir => {
  const pkg = JSON.parse(readFileSync(join(dir, 'package.json')))
  const name = pkg.name.replace('/', '+')
  const ver = pkg.version.split('-')[0]
  const verDir = join(denoDir, `${name}@${ver}`)

  const dest = join(verDir, 'node_modules', '@aws-lite', pkg.name.split('/')[1])
  mkdirSync(dest, { recursive: true })
  writeFileSync(join(verDir, '.initialized'), '')

  cpSync(join(dir, 'package.json'), join(dest, 'package.json'))
  cpSync(join(dir, 'src'), join(dest, 'src'), { recursive: true })
})
console.error(`Prepared ${dirs.length} Deno node_modules dirs in ${Date.now() - start} ms`)
