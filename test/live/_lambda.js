const required = true
module.exports = {
  service: 'lambda',
  methods: {
    // https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html
    CreateFunction: {
      request: async function () {
        return {
          endpoint: `/2015-03-31/functions`
        }
      },
    },

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
    },
  }
}
