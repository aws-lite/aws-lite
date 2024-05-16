/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'acm'
const property = 'ACM'
// const required = true

export default {
  name: '@aws-lite/acm',
  service,
  property,
  methods: {
    ...incomplete,
  },
}
