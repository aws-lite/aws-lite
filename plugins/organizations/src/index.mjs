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
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const ListAccounts = {
  awsDoc: docRoot + 'API_ListAccounts.html',
  validate: {
    MaxResults: { ...num, comment: 'Max number of results per page; results will be paginated if the number of items in the response is greater than `MaxResults`' },
    NextToken: { ...str, comment: 'Pagination token' },
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate

    if (params.paginate) {
      delete params.paginate
      paginate = true
    }

    // Requires `'Content-Type': 'application/x-amz-json-1.1'` in the header, but does not use aws style json in the body.
    return {
      awsjson: false,
      headers: { 'X-Amz-Target': 'AWSOrganizationsV20161128.ListAccounts', 'Content-Type': 'application/x-amz-json-1.1' },
      payload: params,
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
