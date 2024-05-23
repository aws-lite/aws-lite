/**
 * Plugin maintained by: $MAINTAINERS
 */

const service = '$SERVICE'
const property = '$PROPERTY'
const required = true

export default {
  name: '@aws-lite/$SERVICE',
  service,
  property,
  methods: {
    $ReplaceMe: {
      // Include a reference link with each method, for example:
      awsDoc: 'https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html',
      validate: {
        name: { type: 'string', required, comment: 'Basic method description' },
      },
      request: async ({ name }) => {
        return {
          path: `/$API_VER/${name}/etc`,
        }
      },
      response: async ({ payload }) => payload,
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
        name: { type: 'string', required, comment: 'Basic method description' },
      },
      request: async ({ name }) => {
        return {
          path: `/$API_VER/${name}/etc`,
        }
      },
      // response: async ({ payload }) => payload,
      // error: async (err) => err,
    },
  },
}
