const required = true

module.exports = {
  GetFunctionConfiguration: {
    validate: {
      name: { type: 'string', required },
      payload: false,
    },
    request: async function ({ name }) {
      return {
        endpoint: `/2015-03-31/functions/${name}/configuration`
      }
    },
  },
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
