const arc = require('@architect/eslint-config')

module.exports = [
  ...arc,
  {
    ignores: [
      '**/_vendor/*',
      'bench/tmp/',
      'scratch',
      'test/mock/plugins/esm-pkg/index.js',
      'test/mock/plugins/invalid/invalid-plugin.js',
    ],
  },
]
