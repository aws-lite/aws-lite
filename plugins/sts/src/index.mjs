/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'sts'
const property = 'STS'
// const required = true
const docRoot = 'https://docs.aws.amazon.com/STS/latest/APIReference/'

const GetCallerIdentity = {
  awsDoc: docRoot + 'API_GetCallerIdentity.html',
  validate: {},
  request: () => {
    return {
      path: '',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      payload: 'Action=GetCallerIdentity&Version=2011-06-15',
    }
  },
  response: (payload) => { payload },
}

export default {
  name: '@aws-lite/sts',
  service,
  property,
  methods: {
    GetCallerIdentity,
    ...incomplete,
  },
}
