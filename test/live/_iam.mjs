let Version = '2010-05-08'
export default {
  service: 'iam',
  methods: {
    GetRole: {
      request: async function ({ name }) {
        return {
          query: {
            Action: 'GetRole',
            RoleName: name,
            Version,
          },
        }
      },
      response: async ({ payload }) => payload,
    },
    CreateRole: {
      request: async function ({ name, policyDoc, desc, path }) {
        return {
          query: {
            Action: 'CreateRole',
            AssumeRolePolicyDocument: policyDoc,
            Description: desc,
            Path: path,
            RoleName: name,
            Version,
          },
        }
      },
      response: async ({ payload }) => payload,
    },
  },
}
