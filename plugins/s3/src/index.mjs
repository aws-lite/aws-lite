import incomplete from './incomplete.mjs'
import PutObject from './put-object.mjs'

const service = 's3'

/**
 * Plugin maintained by: @architect
 */
export default {
  service,
  methods: {
    PutObject,
    ...incomplete
  }
}
