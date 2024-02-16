let { readFileSync } = require('fs')
let { join } = require('path')
let test = require('tape')
let mockTmp = require('mock-tmp')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'config', 'get-plugins.js')
let getPlugins = require(sut)

let mock = join(cwd, 'test', 'mock')
let pluginDir = join(mock, 'plugins')

test('Set up env', t => {
  t.plan(1)
  t.ok(getPlugins, 'getPlugins module is present')
})

test('Just return an empty array ', async t => {
  t.plan(1)
  t.deepEqual(await getPlugins({}), [], 'Returned empty array')
})

test('Load plugins array', async t => {
  t.plan(2)
  let plugins

  // Node.js 14.x + npm 6 does funky things with npm link-ed (symlinked) modules
  // That's cool, we can confidently skip this test for now, the related code path provably works!
  if (!process.versions.node.startsWith('14')) {
    t.plan(4)
    // eslint-disable-next-line
    plugins = await getPlugins({ plugins: [ import('@aws-lite/dynamodb') ] })
    t.equal(plugins[0].service, 'dynamodb', 'Client explicitly loaded ESM plugin with unresolved import')

    // eslint-disable-next-line
    plugins = await getPlugins({ plugins: [ await import('@aws-lite/lambda') ] })
    t.equal(plugins[0].service, 'lambda', 'Client explicitly loaded ESM plugin with resolved import')
  }

  let cjsPluginPath = join(pluginDir, 'cjs')
  plugins = await getPlugins({ plugins: [ require(cjsPluginPath) ] })
  t.equal(plugins[0].service, 'lambda', 'Client explicitly loaded CJS plugin with require')

  let plugin = require(cjsPluginPath)
  plugins = await getPlugins({ plugins: [ plugin ] })
  t.equal(plugins[0].service, 'lambda', 'Client explicitly loaded CJS plugin object')
})

test('Autoload plugins from process node_modules', async t => {
  t.plan(2)
  let tidy = p => p.split('/')[1]

  let packageJsonFile = join(cwd, 'package.json')
  let packageJson = JSON.parse(readFileSync(packageJsonFile))
  let expected = packageJson.workspaces.map(tidy)

  // Since the process node_modules dir should be npm linked to all our plugins, the loaded plugin list should match the package.json workspace property
  let plugins = await getPlugins({ autoloadPlugins: true })
  t.equal(plugins.length, expected.length, 'Loaded the correct number of plugins')

  let loadedAll = expected.every(svc => plugins.find(({ name }) =>  svc === tidy(name)))
  t.ok(loadedAll, 'Loaded plugins from process node_modules')
})

// TODO: figure out a solid way to test the relative node_modules dir scan path via `require.resolve('@aws-lite/client')` (which is known to fail on tests against itself)

test('Autoload plugins from project package.json', async t => {
  t.plan(2)
  let tmp = mockTmp({
    'package.json': JSON.stringify({
      dependencies: {
        '@aws-lite/client': 'latest',
        '@aws-lite/dynamodb': 'latest',
        '@aws-lite/dynamodb-types': 'latest',
      },
    }),
  })
  process.chdir(tmp)

  let plugins = await getPlugins({ autoloadPlugins: true })
  t.equal(plugins.length, 1, 'Loaded the correct number of plugins')
  t.equal(plugins[0].name, '@aws-lite/dynamodb', 'Loaded plugin from project package.json')

  process.chdir(cwd)
  mockTmp.reset()
})

test('Validate params', async t => {
  t.plan(2)

  try {
    await getPlugins({ plugins: false })
  }
  catch (err) {
    t.match(err.message, /Plugins must be an array/, 'Threw on invalid plugins param')
  }

  try {
    await getPlugins({ plugins: [ '@aws-lite/dynamodb' ] })
  }
  catch (err) {
    t.match(err.message, /Plugins must be an imported \/ required module or an import statement/, 'Threw on invalid plugin')
  }
})
