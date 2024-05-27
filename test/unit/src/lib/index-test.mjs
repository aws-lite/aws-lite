import { join } from 'node:path'
import test from 'tape'

let useAWS, tidyQuery
function reset () {
  delete process.env.ARC_ENV
  delete process.env.ARC_LOCAL
  delete process.env.ARC_SANDBOX
}

test('Set up env', async t => {
  t.plan(2)
  let cwd = process.cwd()
  let sut = 'file://' + join(cwd, 'src', 'lib', 'index.js')
  let lib = await import(sut)
  useAWS = lib.useAWS
  tidyQuery = lib.tidyQuery
  t.ok(useAWS, 'useAWS util is present')
  t.ok(tidyQuery, 'tidyQuery util is present')
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

test('tidyQuery', t => {
  t.plan(6)
  let result

  result = tidyQuery({ ok: 'hi', hello: 'there' })
  t.equal(result, 'ok=hi&hello=there', 'Got back correct basic query string parameters')

  result = tidyQuery({ ok: 'hi', hello: 'there', yo: '' })
  t.equal(result, 'ok=hi&hello=there', 'Ignored empty query string param')

  result = tidyQuery({ ok: 'hi', hello: 'there', yo: undefined })
  t.equal(result, 'ok=hi&hello=there', 'Ignored empty query string param')

  result = tidyQuery({ ok: 'hi', hello: true })
  t.equal(result, 'ok=hi&hello=true', 'Got back correct boolean true query string parameter')

  result = tidyQuery({ ok: 'hi', hello: false })
  t.equal(result, 'ok=hi&hello=false', 'Got back correct boolean false query string parameter')

  result = tidyQuery({ ok: 'hi', hello: 0 })
  t.equal(result, 'ok=hi&hello=0', 'Got back correct number 0 query string parameter')
})
