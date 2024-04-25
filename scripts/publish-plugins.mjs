import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { exec, spawn } from 'node:child_process'
import gh from '@actions/core'
import mainPlugins from '../plugins.mjs'

let cwd = process.cwd()
let getPkgJson = path => JSON.parse(readFileSync(join(cwd, path, 'package.json')))

let typePlugins = mainPlugins.map(p => p.types !== false && `${p.service}-types`).filter(Boolean)
let plugins = mainPlugins.map(p => p.service).concat(typePlugins)

let moduleNotFound = /'@aws-lite\/.*' is not in this registry/
let foundErrors = false

async function main () {
  let results = {}
  let getPluginVersions = plugins.map(name => new Promise(res => {
    exec(`npm view @aws-lite/${name} versions`, (err, stdout) => {
      // Differentiate between as-yet unpublished modules
      if (err && err.stack.match(moduleNotFound)) {
        console.log(`Found an unpublished package: @aws-lite/${name}`)
        results[name] = []
        return res()
      }
      // Report errors, but keep going
      else if (err) {
        console.log(`Error getting versions for @aws-lite/${name}`)
        console.log(err)
        foundErrors = true
        return res()
      }
      let output = stdout.replace(/\n/g, '')
      let versions = stdout.startsWith('[')
        ? JSON.parse(output.replace(/'/g, '"'))
        : [ output ]

      results[name] = versions
      res()
    })
  }))

  let start = Date.now()
  await Promise.all(getPluginVersions)
  console.log(`Checked all plugin versions in ${Date.now() - start} ms`)

  let publishing = plugins.map(name => {
    if (!results[name]) return

    let service = name.replace(/-types$/, '')
    let path = `plugins/${service}`
    if (name.endsWith('-types')) path += '/types'

    let modulePkg = getPkgJson(path)
    let { version } = modulePkg

    // Version not found, let's publish it
    if (!results[name].includes(version)) {
      return path
    }
  }).filter(Boolean)

  if (publishing.length) {
    console.log(`Found ${publishing.length} plugins to publish`)

    // TODO maybe support RC tagging, but meh
    let args = `publish --access public`.split(' ')

    for (let mod of publishing) {
      await new Promise((res, rej) => {
        let child = spawn('npm', args, {
          cwd: join(cwd, mod),
          stdio: 'inherit',
        })
        child.on('close', code => {
          if (foundErrors || code !== 0) rej()
          else setTimeout(res, 1000)
        })
      })
    }

    if (process.env.GITHUB_ACTIONS) {
      gh.setOutput('publish', 'true')
    }
  }
  else {
    console.log('No aws-lite plugins found to publish')
    if (foundErrors) process.exit(1)
  }
}
main()
