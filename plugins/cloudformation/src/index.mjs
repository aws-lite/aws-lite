import incomplete from './incomplete.mjs'

const service = 'cloudformation'
const property = 'CloudFormation'
// const required = true

/**
 * Plugin maintained by: @architect
 */
export default {
  service,
  property,
  methods: { ...incomplete }
}
