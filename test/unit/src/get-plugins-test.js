let { readFileSync } = require('fs')
let { join } = require('path')
let test = require('tape')
let mockTmp = require('mock-tmp')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'get-plugins.js')
let getPlugins = require(sut)

test('Set up env', t => {
  t.plan(1)
  t.ok(getPlugins, 'getPlugins module is present')
})

test('Get plugins from process node_modules', async t => {
  t.plan(1)
  // This test relies on workspace linking from npm 8+, so Node.js 14.x / npm 6 should skip it
  if (process.version.startsWith('v14')) {
    t.pass('Skipped test')
    return
  }

  let tidy = arr => arr.map(p => p.split('/')[1])

  let packageJson = join(cwd, 'package.json')
  let package = JSON.parse(readFileSync(packageJson))
  let expected = tidy(package.workspaces)

  // Since the process node_modules dir should be npm linked to all our plugins, the loaded plugin list should match the package.json workspace property
  let plugins = await getPlugins({})
  let actual = tidy(plugins)
  t.deepEqual(actual, expected, 'Loaded plugins from process node_modules')
})

// TODO: figure out a solid way to test the relative node_modules dir scan path via `require.resolve('@aws-lite/client')` (which is known to fail on tests against itself)

test('Get plugins from project package.json', async t => {
  t.plan(1)

  // We aren't actually loading the plugins, just the package.json
  // So no need to mock the whole node_modules filesystem
  let tmp = mockTmp({
    'package.json': JSON.stringify({
      dependencies: {
        '@aws-lite/client': 'latest',
        '@aws-lite/dynamodb': 'latest',
        '@aws-lite/dynamodb-types': 'latest',
        'aws-lite-plugin-foo': 'latest',
        'aws-lite-plugin-foo-types': 'latest',
      },
    })
  })
  process.chdir(tmp)

  let plugins = await getPlugins({})
  t.deepEqual(plugins, [ '@aws-lite/dynamodb', 'aws-lite-plugin-foo' ], 'Loaded plugins from project package.json')

  process.chdir(cwd)
  mockTmp.reset()
})
