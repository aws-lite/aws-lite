const arc = require('@architect/eslint-config')

module.exports = [
  ...arc,
  {
    ignores: [
      '**/_vendor/*',
      'bench/tmp/',
      'scratch',
      'test/mock/',
    ],
  },
]
