/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'route53'
const property = 'Route53'
// const docRoot = 'https://docs.aws.amazon.com/Route53/latest/APIReference/'

export default {
  name: '@aws-lite/route53',
  service,
  property,
  methods: {
    ...incomplete,
  },
}
