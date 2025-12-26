import { join } from 'node:path'
import process from 'node:process'
import test from 'node:test'

let cwd = process.cwd()
let validTypes = [ 'array', 'boolean', 'buffer', 'number', 'object', 'stream', 'string' ]
let plugins

test('Set up env', async t => {
  t.plan(1)
  plugins = (await import('file://' + join(cwd, 'plugins.mjs'))).default
  t.assert.ok(plugins.length, `Loaded ${plugins.length} \`@aws-lite/*\` plugins`)
})

test('Check plugins for docs + validation', async t => {
  let activeMethods = 0
  let totalMethods = 0
  for (let { service } of plugins) {
    let path = service => 'file://' + join(cwd, 'plugins', service, 'src', 'index.mjs')
    let plugin = (await import(path(service))).default
    console.log(`@aws-lite/${service}`)

    // Traverse methods
    let methods = Object.entries(plugin.methods)
    for (let [ name, method ] of methods) {
      if (method === false) {
        t.assert.ok(true, `${name}: method disabled by boolean`)
        totalMethods++
      }
      else if (method.deprecated === true) {
        t.assert.ok(true, `${name}: method deprecated by property`)
        totalMethods++
      }
      else if (method.disabled === true) {
        t.assert.ok(true, `${name}: method disabled by property`)
        totalMethods++
      }
      else {
        activeMethods++
        totalMethods++
        if (method.awsDoc === false) {
          t.assert.ok(true, `${name}: method does not have an AWS doc`)
        }
        else {
          t.assert.match(method.awsDoc, /^https:\/\/docs.aws.amazon.com/, `${name}: method has AWS doc`)
        }
        t.assert.ok(method.validate, `${name}: method has validate object`)
        let validations = Object.entries(method.validate)
        for (let [ param, { type, comment } ] of validations) {
          if (Array.isArray(type)) {
            t.assert.ok(type.every(t => validTypes.includes(t)), `${name}: ${param} valid types (${type.join(', ')})`)
          }
          else {
            t.assert.ok(validTypes.includes(type), `${name}: ${param} valid type (${type})`)
          }
          t.assert.ok(comment, `${name}: ${param} has comment`)
        }
      }
    }
  }
  console.log(`Found ${activeMethods} active methods, and ${totalMethods} total methods across ${plugins.length} plugins`)
})
