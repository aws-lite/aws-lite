const required = true
const passthrough = params => params

module.exports = {
  service: 'lambda',
  methods: {
    NoResponseMethod: {
      request: passthrough
    },
    Passthrough: {
      response: passthrough
    },
    MutateProperty: {
      response: params => {
        params.statusCode = 234
        return params
      }
    },
    MutateAllProperties: {
      response: params => {
        params.statusCode = 234
        params.headers.foo = 'bar'
        params.payload = { hi: 'there' }
        return params
      }
    },
    OnlyPassThroughPayload: {
      response: params => params.payload
    },
    ReturnWhatever: {
      response: params => 'yooo'
    },
    ReturnAwsJsonAll: {
      response: params => ({ ...params, awsjson: true })
    },
    ReturnAwsJsonKey: {
      response: params => ({ ...params, awsjson: [ 'Item' ] })
    },
  }
}
