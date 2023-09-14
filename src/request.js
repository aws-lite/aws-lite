let qs = require('querystring')
let aws4 = require('aws4')
let { globalServices, semiGlobalServices } = require('./services')
let { is } = require('./validate')
let { useAWS } = require('./lib')

module.exports = function request (params, creds, region, config, metadata) {
  return new Promise((resolve, reject) => {
    // Normalize the path + hostname
    params.path = params.endpoint || '/'
    /* istanbul ignore next */ // TODO remove this ignore
    if (!params.path.startsWith('/')) {
      params.path = '/' + params.path
    }
    params.host = params.host || params.hostname
    if (params.hostname) delete params.hostname

    // Accept structured query string
    if (params.query) {
      if (!is.object(params.query)) {
        throw ReferenceError('Query property must be an object')
      }
      // Expect aws4 to handle RFC 3986 encoding when appending the query string to the passed path
      params.path += '?' + qs.stringify(params.query)
    }

    // JSON-ify payload where convenient
    let body = params.payload || params.body || params.data || params.json
    // Yeah, lots of potentially weird valid json (like just a null), deal with it if/when we need to I guess
    if (typeof body === 'object') {
      params.headers = params.headers || {}
      if (!params.headers['content-type'] && !params.headers['Content-Type']) {
        params.headers['content-type'] = 'application/json'
      }
      params.body = JSON.stringify(body)
    }
    else params.body = body

    // Let aws4 handle (most) logic related to region instantiation
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
    // Renormalize (again), aws4 sometimes uses host, sometimes uses hostname
    /* istanbul ignore next */
    options.host = options.host || options.hostname
    /* istanbul ignore next */
    if (options.hostname) delete options.hostname

    // Importing http(s) is a bit slow (~1ms), so only instantiate the client we need
    let isHTTPS = options.host.includes('.amazonaws.com') || config.protocol === 'https'
    /* istanbul ignore next */ // eslint-disable-next-line
    let http = isHTTPS ? require('https') : require('http')

    // Disable keep-alive locally (or wait Node's default 5s for sockets to time out)
    /* istanbul ignore next */
    options.agent = new http.Agent({ keepAlive: config.keepAlive ?? useAWS() })

    let req = http.request(options, res => {
      let data = []
      let { headers, statusCode } = res
      let ok = statusCode >= 200 && statusCode < 303
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => {
        let result = data.join()
        let contentType = headers?.['content-type'] || headers?.['Content-Type'] || ''
        let isJSON = contentType.includes('application/json') ||
                     contentType.includes('application/x-amz-json')
        if (isJSON && result) result = JSON.parse(result)

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
        host: params.host,
        protocol: config.protocol,
        port: params.port,
      }
    }))
    req.end(options.body || '')
  })
}
