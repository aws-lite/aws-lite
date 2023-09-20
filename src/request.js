let qs = require('querystring')
let aws4 = require('aws4')
let { globalServices, semiGlobalServices } = require('./services')
let { is } = require('./validate')
let { awsjson, useAWS } = require('./lib')

let JSONregex = /application\/json/
let JSONContentType = ct => ct.match(JSONregex)
let AwsJSONregex = /application\/x-amz-json/
let AwsJSONContentType = ct => ct.match(AwsJSONregex)

module.exports = function request (params, creds, region, config, metadata) {
  return new Promise((resolve, reject) => {

    // Path
    params.path = params.endpoint || '/'
    if (!params.path.startsWith('/')) {
      params.path = '/' + params.path
    }

    // Host
    params.host = params.host || params.hostname || config.host || config.hostname
    if (params.hostname) delete params.hostname

    // Structured query string
    if (params.query) {
      if (!is.object(params.query)) {
        throw ReferenceError('Query property must be an object')
      }
      // Expect aws4 to handle RFC 3986 encoding when appending the query string to the passed path
      params.path += '?' + qs.stringify(params.query)
    }

    // Headers, content-type
    let headers = params.headers || {}
    let contentType = headers['content-type'] || headers['Content-Type'] || ''
    /* istanbul ignore next */
    if (headers['Content-Type']) delete headers['Content-Type']

    // Body - JSON-ify payload where convenient!
    let body = params.payload || params.body || params.data || params.json
    let awsjsonSetting = params.awsjson || params.AWSJSON
    // Lots of potentially weird valid json (like just a null), deal with it if / when we need to I guess
    if (typeof body === 'object') {
      // Backfill content-type if it's just an object
      if (!contentType) contentType = 'application/json'
      // A variety of services use AWS JSON; we'll make it easier via a header or passed param
      if (AwsJSONContentType(contentType) || awsjsonSetting) {
        // Backfill content-type header yet again
        if (!AwsJSONContentType(contentType)) {
          contentType = 'application/x-amz-json-1.0'
        }
        body = awsjson.marshall(body, awsjsonSetting)
      }
      // Final JSON encoding
      params.body = JSON.stringify(body)
    }
    // Everything else just passes through
    else params.body = body

    // Finalize headers, content-type
    if (contentType) headers['content-type'] = contentType
    params.headers = headers

    // Sign the payload; let aws4 handle (most) logic related to region + service instantiation
    let signing = { region, ...params }
    /* istanbul ignore next */
    if (globalServices.includes(params.service)) {
      // If it's semi-global and the region is not us-east-1, leave the region in
      // Otherwise, exclude the region from the signed headers
      let isSemiGlobal = semiGlobalServices.includes(params.service)
      if (!isSemiGlobal || (isSemiGlobal && region === 'us-east-1')) {
        signing = params
        delete signing.region // jic the user specified it per-request
      }
    }

    // Sign and construct the request
    let options = aws4.sign(signing, creds)
    // Normalize host (again): aws4 sometimes uses host, sometimes hostname
    /* istanbul ignore next */ // This won't get seen by nyc
    options.host = options.host || options.hostname
    /* istanbul ignore next */
    if (options.hostname) delete options.hostname

    // Importing http(s) is a bit slow (~1ms), so only instantiate the client we need
    options.protocol = (params.protocol || config.protocol) + ':'
    let isHTTPS = options.host.includes('.amazonaws.com') || options.protocol === 'https:'
    /* istanbul ignore next */ // eslint-disable-next-line
    let http = isHTTPS ? require('https') : require('http')

    // Port configuration
    options.port = params.port || config.port

    // Disable keep-alive locally (or wait Node's default 5s for sockets to time out)
    /* istanbul ignore next */
    options.agent = new http.Agent({ keepAlive: config.keepAlive ?? useAWS() })

    let req = http.request(options, res => {
      let data = []
      /* istanbul ignore next */ // We can always expect headers, but jic
      let { headers = {}, statusCode } = res
      let ok = statusCode >= 200 && statusCode < 303
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => {
        let result = data.join()
        let contentType = headers['content-type'] || headers['Content-Type'] || ''
        if (JSONContentType(contentType) || AwsJSONContentType(contentType)) {
          result = JSON.parse(result)
        }
        // Some services may attempt to respond with regular JSON, but an AWS JSON content-type. Sure. Ok. Anyway, try to guard against that.
        if (AwsJSONContentType(contentType)) {
          try {
            result = awsjson.unmarshall(result)
          }
          catch { /* noop, it's already parsed */ }
        }
        if (ok) resolve(result)
        else reject({ error: result, metadata, statusCode })
      })
    })
    req.on('error', error => reject({
      error: error.message,
      metadata: {
        ...metadata,
        rawStack: error.stack,
        service: params.service,
        host: options.host,
        protocol: options.protocol.replace(':', ''),
        port: options.port,
      }
    }))
    req.end(options.body || '')
  })
}
