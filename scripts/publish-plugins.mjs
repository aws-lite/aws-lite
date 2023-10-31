let { readFileSync } = require('fs')
let { join } = require('path')
let { exec, spawn } = require('child_process')

let cwd = process.cwd()
let getPkgJson = path => JSON.parse(readFileSync(join(cwd, path, 'package.json')))

let projectPkg = getPkgJson('.')
let plugins = projectPkg.workspaces.map(f => f.split('/')[1])

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

    let modulePkg = getPkgJson(`plugins/${name}`)
    let { version } = modulePkg

    // Version not found, let's publish it
    if (!results[name].includes(version)) {
      return `plugins/${name}`
    }
  }).filter(Boolean)

  if (publishing.length) {
    console.log(`Found ${publishing.length} plugins to publish`)

    // TODO maybe support RC tagging, but meh
    let workspaces = publishing.map(w => `--workspace ${w} --access public`).join(' ')
    let args = `publish ${workspaces}`.split(' ')

    let child = spawn('npm', args, { stdio: 'inherit' })
    child.on('close', code => {
      if (foundErrors || code !== 0) process.exit(1)
    })
  }
  else {
    console.log('No aws-lite plugins found to publish')
    if (foundErrors) process.exit(1)
  }
}
main()
