import url from 'url'
import { join } from 'path'
import test from 'tape'
import { readFile } from 'node:fs/promises'
import { parseXML, buildXML } from '../../../src/lib/index.js'
// arrayifyItemsProp tests inferred via arrayify, but maybe add some standalone tests?
import { arrayifyObject, unarrayifyObject } from '../src/lib.mjs'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const copy = i => JSON.parse(JSON.stringify(i))

let xmlBefore, docBefore, jsObj, docAfter, xmlAfter

test('Set up env', async t => {
  t.plan(1)
  const rawXml = await readFile(join(__dirname, 'mock.xml'))
  xmlBefore = rawXml.toString()
    .replace(/^[ ]*/gm, '') // Strip spaces
    .replace(/[\r\n]/gm, '') // Strip line breaks
  docBefore = parseXML(xmlBefore)
  t.ok(docBefore.CacheBehaviors, 'Loaded mock, parsed XML')
})

test('Transform XML', async t => {
  t.plan(1)
  jsObj = arrayifyObject(copy(docBefore))
  const same = {
    CacheBehaviors: {
      Items: [
        {
          AllowedMethods: {
            CachedMethods: {
              Items: [ 'GET', 'POST', 'DELETE' ],
              Quantity: 3
            },
            Items: [ 'PUT', 'PATCH' ],
            Quantity: 2
          },
          FunctionAssociations: {
            Items: [
              { EventType: 'some-event', FunctionARN: 'some::ARN' },
              { EventType: 'another-event', FunctionARN: 'another::ARN' }
            ],
            Quantity: 2
          },
          ForwardedValues: {
            Cookies: {
              WhitelistedNames: {
                Quantity: 0,
                Items: [],
              },
            },
          }
        }
      ],
      Quantity: 1,
    }
  }
  t.deepEqual(jsObj, same, 'Correctly transformed deeply nested XML `Items` arrays to a sane JS format')
})

test('Untransform XML', async t => {
  t.plan(2)
  docAfter = unarrayifyObject(copy(jsObj))
  t.deepEqual(docBefore, docAfter, 'Correctly transformed deeply nested XML `Items` arrays to a sane JS format')

  // Re-add the top-level `DistributionConfig` document tag
  xmlAfter = buildXML({ DistributionConfig: docAfter })
  t.equal(xmlBefore, xmlAfter, 'XML documents match')
})
