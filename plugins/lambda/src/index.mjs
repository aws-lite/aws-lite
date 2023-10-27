import incomplete from './incomplete.mjs'

const service = 'lambda'
const property = 'Lambda'
// const required = true
// const docRoot = 'https://docs.aws.amazon.com/lambda/latest/dg/'

/**
 * Plugin maintained by: @architect
 */

export default {
  service,
  property,
  methods: {
    ...incomplete,
  }
}
