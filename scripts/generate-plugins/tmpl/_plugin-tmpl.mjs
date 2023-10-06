const service = '$NAME'
const required = true

/**
 * Plugin maintained by: $MAINTAINERS
 */
export default {
  service,
  methods: {
    $ReplaceMe: {
      // Include a reference link with each method, for example:
      awsDoc: 'https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html',
      validate: {
        name: { type: 'string', required },
      },
      request: async ({ name }) => {
        return {
          endpoint: `/$API_VER/${name}/etc`
        }
      },
      response: async (raw) => {
        let response = raw.Item || null
        return { response }
      },
      error: async (err) => {
        if (err.statusCode === 400 &&
            err?.error?.message?.match(/validation error/)) {
          err.metadata.type = 'Validation error'
        }
        return err
      },
    },

    // TODO: add API link
    $ReplaceMeToo: {
      awsDoc: 'https://docs.aws.amazon.com/...',
      validate: {
        name: { type: 'string', required },
      },
      request: async ({ name }) => {
        return {
          endpoint: `/$API_VER/${name}/etc`
        }
      },
      // response: async (response) => ({ response }),
      // error: async (err) => err,
    },
  }
}
