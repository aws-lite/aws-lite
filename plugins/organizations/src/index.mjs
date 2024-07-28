/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const docRoot = 'https://docs.aws.amazon.com/organizations/latest/APIReference/'
const service = 'organizations'
const property = 'Organizations'
// const required = true

const num = { type: 'number' }
const str = { type: 'string' }
const valPaginate = { type: [ 'boolean', 'string' ], comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const ListAccounts = {
  awsDoc: docRoot + 'API_ListAccounts.html',
  validate: {
    MaxResults: { ...num, comment: 'Maximum number of items to be returned' },
    NextToken: { ...str, comment: 'Pagination token' },
    paginate: valPaginate,
  },
  request: (params) => {
    const payload = { ...params }
    const { paginate } = params
    if (paginate) delete payload.paginate
    return {
      awsjson: false,
      headers: {
        'X-Amz-Target': 'AWSOrganizationsV20161128.ListAccounts',
        'Content-Type': 'application/x-amz-json-1.1' },
      payload,
      paginate,
      paginator: {
        token: 'NextToken',
        cursor: 'NextToken',
        accumulator: 'Accounts',
      },
    }
  },
  response: ({ payload }) => payload,
}

export default {
  name: '@aws-lite/organizations',
  service,
  property,
  methods: {
    ListAccounts,
    ...incomplete,
  },
}
