const required = true

// This is just a GET-only plugin mock to isolate functionality in tests
// It is not intended to cover all Lambda API functionality
module.exports = {
  service: 'lambda',
  methods: {
    // https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html
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
  }
}
