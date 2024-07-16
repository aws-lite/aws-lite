let noop = async () => {}
let passthrough = async p => p
let message = 'Lambda validation error'
module.exports = {
  service: 'lambda',
  methods: {
    requestMethodBlowsUp: {
      awsDoc: 'https://requestMethodBlowsUp.lol',
      request: async (input) => {
        input.foo.bar = 'idk'
        return input
      },
    },
    responseMethodBlowsUp: {
      awsDoc: 'https://responseMethodBlowsUp.lol',
      response: async (input) => {
        input.foo.bar = 'idk'
        return input
      },
    },
    noErrorMethod: {
      request: passthrough,
    },
    errorMethodMutatesError: {
      awsDoc: 'https://errorMethodMutatesError.lol',
      readme: 'lolidk',
      request: noop,
      error: async (error) => {
        if (error.statusCode >= 400 && error.statusCode < 500 &&
            error?.error?.message?.match(/validation error/)) {
          error.metadata.type = message
        }
        return error
      },
    },
    errorMethodNoop: {
      awsDoc: 'https://errorMethodNoop.lol',
      request: noop,
      error: noop,
    },
    errorMethodBlowsUp: {
      awsDoc: 'https://errorMethodBlowsUp.lol',
      request: noop,
      error: async (err) => {
        err.metadata.type = message
        err.foo.bar = 'idk'
        return err
      },
    },
  },
}
