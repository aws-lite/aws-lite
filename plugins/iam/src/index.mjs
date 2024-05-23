/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'iam'
const property = 'IAM'
// const required = true

export default {
  service,
  property,
  methods: {
    ...incomplete,
  },
}
