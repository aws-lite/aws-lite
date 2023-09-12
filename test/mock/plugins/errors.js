let noop = async () => {}
let passthrough = async p => p
let message = 'Lambda validation error'
module.exports = {
  service: 'lambda',
  methods: {
    requestMethodBlowsUp: {
      request: async (input) => {
        input.foo.bar = 'idk'
        return input
      }
    },
    noErrorMethod: {
      request: passthrough,
    },
    errorMethodMutatesError: {
      request: noop,
      error: async (error) => {
        if (error.statusCode === 400 &&
            error?.error?.message?.match(/validation error/)) {
          error.metadata.type = message
        }
        return error
      }
    },
    errorMethodNoop: {
      request: noop,
      error: noop,
    },
    errorMethodBlowsUp: {
      request: noop,
      error: async (err) => {
        err.metadata.type = message
        err.foo.bar = 'idk'
        return err
      }
    }
  }
}
