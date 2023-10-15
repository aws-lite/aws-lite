let { join } = require('path')
let test = require('tape')
let cwd = process.cwd()
let validTypes = [ 'array', 'boolean', 'number', 'object', 'string' ]
let plugins

test('Set up env', async t => {
  t.plan(1)
  plugins = (await import('../../../plugins.mjs')).default
  t.ok(plugins.length, `Loaded ${plugins.length} \`@aws-lite/*\` plugins`)
})

test('Check plugins for docs + validation', async t => {
  let plan = 0
  for (let { name } of plugins) {
    let prefix = process.platform.startsWith('win') ? 'file://' : ''
    let path = name => prefix + join(cwd, 'plugins', name, 'src', 'index.mjs')
    let plugin = (await import(path(name))).default
    t.comment(`@aws-lite/${name}`)

    // Traverse methods
    let methods = Object.entries(plugin.methods)
    for (let [ name, method ] of methods) {
      console.log(name)
      if (method === false) {
        t.pass(`${name}: method disabled by boolean`)
        plan++
      }
      else if (method.deprecated === true) {
        t.pass(`${name}: method deprecated by property`)
        plan++
      }
      else if (method.disabled === true) {
        t.pass(`${name}: method disabled by property`)
        plan++
      }
      else {
        t.match(method.awsDoc, /^https:\/\/docs.aws.amazon.com/, `${name}: method has AWS doc`)
        t.ok(method.validate, `${name}: method has validate object`)
        let validations = Object.entries(method.validate)
        for (let [ param, { type, comment } ] of validations) {
          t.ok(validTypes.includes(type), `${name}: ${param} valid type (${type})`)
          t.ok(comment, `${name}: ${param} has comment`)
        }
        plan += 2 + (validations.length * 2)
      }
    }
  }
  t.plan(plan)
})
