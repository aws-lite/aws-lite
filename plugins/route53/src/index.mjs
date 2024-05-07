/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'

const service = 'route53'
const property = 'Route53'
const required = true
const docRoot = 'https://docs.aws.amazon.com/Route53/latest/APIReference/'

// const arr = { type: 'array' }
const num = { type: 'number' }
const obj = { type: 'object' }
const str = { type: 'string' }

const xml = { 'content-type': 'application/xml' }

const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
const HostedZoneId = { ...str, required, comment: 'ID of the hosted zone containing the resource records set' }

const ChangeResourceRecordSets = {
  awsDoc: docRoot + 'API_ChangeResourceRecordSets.html',
  validate: {
    // ChangeResourceRecordSetsRequest: { ...obj, required, comment: 'Complete `ChangeResourceRecordSetsRequest` object', ref: docRoot + 'API_ChangeResourceRecordSets.html#API_ChangeResourceRecordSets_RequestSyntax' },
    HostedZoneId,
    ChangeBatch: { ...obj, comment: 'Complete `ChangeBatch` object'  },
  },
  request: ({ HostedZoneId, ChangeBatch }) => {
    if (ChangeBatch?.Changes) {
      ChangeBatch.Changes = ChangeBatch.Changes.map((change) => {

        if (change.ResourceRecordSet?.ResourceRecords) {
          change.ResourceRecordSet.ResourceRecords = change.ResourceRecordSet.ResourceRecords.map((record) => {
            return { ResourceRecord: record }
          }).filter(Boolean)
        }

        return { Change: change }
      }).filter(Boolean)
    }

    const payload = {
      ChangeResourceRecordSetsRequest: { ChangeBatch },
    }
    return {
      path: `/2013-04-01/hostedzone/${HostedZoneId}/rrset/`,
      headers: xml,
      method: 'POST',
      payload,
      xmlns: 'https://route53.amazonaws.com/doc/2013-04-01/',
    }
  },
}

const ListResourceRecordSets = {
  awsDoc: docRoot + 'API_ListResourceRecordSets.html',
  validate: {
    HostedZoneId,
    MaxItems: { ...num, comment: 'Max number of items to be returned in a response. If the response has more items than `maxitems`, `IsTruncated` will be true and the response will be paginated' },
    StartRecordIdentifier: { ...str, comment: 'Pagination cursor when the routing policy is not `simple` and results were truncated for a given DNS' },
    StartRecordName: { ...str, comment: 'Name of the first resource record to be listed in lexicographic ordering. If the name doesn\'t exist, results will begin from the first record with a name greater than the provided value' },
    StartRecordType: { ...str, comment: 'The type of resource record to begin listing from' },
    paginate: valPaginate,
  },
  request: (params) => {
    const {
      HostedZoneId: Id,
      MaxItems: maxitems,
      StartRecordName: name,
      StartRecordType: type,
      StartRecordIdentifier: identifier,
    } = params

    let query = { identifier, name, type, maxitems }
    let paginate
    if (params.paginate) {
      paginate = true
    }
    return {
      path: `/2013-04-01/hostedzone/${Id}/rrset`,
      query,
      paginate,
      paginator: {
        type: 'query',
        token: [ 'NextRecordName', 'NextRecordType', 'NextRecordIdentifier' ],
        cursor: [ 'name', 'type', 'identifier' ],
        accumulator: 'ResourceRecordSets',
      },
    }
  },
  response: ({ payload }) => {
    if (Array.isArray(payload.ResourceRecordSets)) {
      payload.ResourceRecordSets = payload.ResourceRecordSets.map(({ ResourceRecordSet }) => ResourceRecordSet)
    }
    else if (Array.isArray(payload.ResourceRecordSets?.ResourceRecordSet)) {
      payload.ResourceRecordSets = payload.ResourceRecordSets.ResourceRecordSet
    }
    else if (typeof payload.ResourceRecordSets?.ResourceRecordSet === 'object') {
      payload.ResourceRecordSets = [ payload.ResourceRecordSets.ResourceRecordSet ]
    }
    else {
      payload.ResourceRecordSets = []
    }

    payload.ResourceRecordSets = payload.ResourceRecordSets.map((i) => {
      if (Array.isArray(i.ResourceRecords?.ResourceRecord)) {
        i.ResourceRecords = i.ResourceRecords.ResourceRecord
      }
      else if (typeof i.ResourceRecords?.ResourceRecord === 'object') {
        i.ResourceRecords = [ i.ResourceRecords.ResourceRecord ]
      }
      else {
        i.ResourceRecords = []
      }
      return i
    }).filter(Boolean)

    return payload
  },
}

export default {
  name: '@aws-lite/route53',
  service,
  property,
  methods: {
    ChangeResourceRecordSets,
    ListResourceRecordSets,
    ...incomplete,
  },
}
