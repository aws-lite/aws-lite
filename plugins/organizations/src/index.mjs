/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'organizations'
const property = 'Organizations'
// const required = true

export default {
  name: '@aws-lite/organizations',
  service,
  property,
  methods: {
    ...incomplete,
  },
}
