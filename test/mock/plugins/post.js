const required = true

// This is just a POST-only plugin mock to isolate functionality in tests
// It is not intended to cover all Lambda API functionality
module.exports = {
  service: 'lambda',
  methods: {
    // https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html
    Invoke: {
      validate: {
        name: { type: 'string', required },
        payload: { type: [ 'string', 'array', 'object' ], required },
      },
      request: async function ({ name }) {
        return {
          endpoint: `/2015-03-31/functions/${name}/invocations`
        }
      },
      error: async function (error) {
        if (error.statusCode === 400 &&
            error?.error?.message?.match(/validation error/)) {
          error.metadata.type = 'Lambda validation error'
        }
        return error
      }
    },
  }
}
