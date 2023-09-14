let Version = '2010-05-08'
module.exports = {
  service: 'iam',
  methods: {
    GetRole: {
      request: async function ({ name }) {
        return {
          query: {
            Action: 'GetRole',
            RoleName: name,
            Version,
          }
        }
      },
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
          }
        }
      },
    }
  }
}
