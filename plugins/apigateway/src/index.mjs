/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'apigateway'
const property = 'APIGateway'
// const required = true

export default {
  name: '@aws-lite/apigateway',
  service,
  property,
  methods: { ...incomplete }
}
