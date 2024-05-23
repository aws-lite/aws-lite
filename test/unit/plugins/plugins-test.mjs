import { join } from 'node:path'
import process from 'node:process'
import test from 'tape'

let cwd = process.cwd()
let validTypes = [ 'array', 'boolean', 'buffer', 'number', 'object', 'string' ]
let plugins

test('Set up env', async t => {
  t.plan(1)
  plugins = (await import('file://' + join(cwd, 'plugins.mjs'))).default
  t.ok(plugins.length, `Loaded ${plugins.length} \`@aws-lite/*\` plugins`)
})

test('Check plugins for docs + validation', async t => {
  let plan = 0
  let activeMethods = 0
  let totalMethods = 0
  for (let { service } of plugins) {
    let path = service => 'file://' + join(cwd, 'plugins', service, 'src', 'index.mjs')
    let plugin = (await import(path(service))).default
    t.comment(`@aws-lite/${service}`)

    // Traverse methods
    let methods = Object.entries(plugin.methods)
    for (let [ name, method ] of methods) {
      console.log(name)
      if (method === false) {
        t.pass(`${name}: method disabled by boolean`)
        plan++
        totalMethods++
      }
      else if (method.deprecated === true) {
        t.pass(`${name}: method deprecated by property`)
        plan++
        totalMethods++
      }
      else if (method.disabled === true) {
        t.pass(`${name}: method disabled by property`)
        plan++
        totalMethods++
      }
      else {
        activeMethods++
        totalMethods++
        t.match(method.awsDoc, /^https:\/\/docs.aws.amazon.com/, `${name}: method has AWS doc`)
        t.ok(method.validate, `${name}: method has validate object`)
        let validations = Object.entries(method.validate)
        for (let [ param, { type, comment } ] of validations) {
          if (Array.isArray(type)) {
            t.ok(type.every(t => validTypes.includes(t)), `${name}: ${param} valid types (${type.join(', ')})`)
          }
          else {
            t.ok(validTypes.includes(type), `${name}: ${param} valid type (${type})`)
          }
          t.ok(comment, `${name}: ${param} has comment`)
        }
        plan += 2 + (validations.length * 2)
      }
    }
  }
  t.plan(plan)
  console.log(`Found ${activeMethods} active methods, and ${totalMethods} total methods across ${plugins.length} plugins`)
})
