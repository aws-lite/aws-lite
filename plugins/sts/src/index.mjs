/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'sts'
const property = 'STS'
// const required = true

export default {
  name: '@aws-lite/sts',
  service,
  property,
  methods: {
    ...incomplete,
  },
}
