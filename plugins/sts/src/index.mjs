/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { default as qs } from 'node:querystring'

const service = 'sts'
const property = 'STS'
const docRoot = 'https://docs.aws.amazon.com/STS/latest/APIReference/'

const GetCallerIdentity = {
  awsDoc: docRoot + 'API_GetCallerIdentity.html',
  validate: {},
  request: () => {
    return {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      payload: qs.stringify({
        Action: 'GetCallerIdentity',
        Version: '2011-06-15',
      }),
    }
  },
  response: ({ payload }) => payload.GetCallerIdentityResult,
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
