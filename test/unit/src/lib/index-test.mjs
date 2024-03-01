let { join } = require('node:path')
let test = require('tape')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'lib', 'index.js')
let lib = require(sut)
let { useAWS } = lib

function reset () {
  delete process.env.ARC_ENV
  delete process.env.ARC_LOCAL
  delete process.env.ARC_SANDBOX
}

test('Set up env', t => {
  t.plan(1)
  t.ok(useAWS, 'useAWS util is present')
})

test('useAWS', t => {
  t.plan(4)
  let result

  result = useAWS()
  t.ok(result, `Assume we're using AWS`)
  reset()

  process.env.ARC_ENV = 'testing'
  result = useAWS()
  t.notOk(result, 'Do not use AWS when in Arc testing env')
  reset()

  process.env.ARC_ENV = 'staging'
  process.env.ARC_SANDBOX = 'ok'
  result = useAWS()
  t.notOk(result, `It's ok to AWS in Sandbox + staging env`)
  reset()

  process.env.ARC_ENV = 'staging'
  process.env.ARC_SANDBOX = 'ok'
  process.env.ARC_LOCAL = 'true'
  result = useAWS()
  t.ok(result, `Use AWS when in Sandbox + staging env + ARC_LOCAL mode`)
  reset()
})
