const service = '$NAME'
const required = true

/**
 * Plugin maintained by: $MAINTAINERS
 */
export default {
  service,
  methods: {
    // TODO: include a reference link with each method, example:
    // https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html
    $ReplaceMe: {
      validate: {
        name: { type: 'string', required },
      },
      request: async ({ name }) => {
        return {
          endpoint: `/$API_VER/${name}/etc`
        }
      },
      error: async (error) => {
        if (error.statusCode === 400 &&
          error?.error?.message?.match(/validation error/)) {
          error.metadata.type = 'Validation error'
        }
        return error
      }
    },

    // TODO: add API link
    $ReplaceMeToo: {
      validate: {
        name: { type: 'string', required },
      },
      request: async ({ name }) => {
        return {
          endpoint: `/$API_VER/${name}/etc`
        }
      },
      // error: async (error) => error
    },
  }
}
