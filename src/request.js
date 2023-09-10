let https = require('https')
let aws4 = require('aws4')

module.exports = function request (params, creds, region, config, metadata) {
  return new Promise((resolve, reject) => {
    params.path = params.path || params.endpoint

    // JSON-ify payload where convenient
    let body = params.body || params.data || params.payload || params.json
    // Yeah, lots of potentially weird valid json (like just a null), deal with it if/when we need to I guess
    if (typeof body === 'object') {
      params.headers = params.headers || {}
      if (!params.headers['content-type'] && !params.headers['Content-Type']) {
        params.headers['content-type'] = 'application/json'
      }
      params.body = JSON.stringify(body)
    }

    let options = aws4.sign({ ...params, region }, creds)

    // Disable keep-alive locally (or wait Node's default 5s for sockets to time out)
    options.agent = new https.Agent({ keepAlive: config.keepAlive ?? useAWS() })

    let req = https.request(options, res => {
      let data = []
      let { headers = {}, statusCode } = res
      let ok = statusCode >= 200 && statusCode < 303
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => {
        let result = data.join()
        let contentType = headers['content-type'] || headers['Content-Type'] || ''
        let isJSON = contentType.includes('application/json') ||
                     contentType.includes('application/x-amz-json')
        if (isJSON) result = JSON.parse(result)

        if (ok) resolve(result)
        else    reject({ error: result, metadata, statusCode })
      })
    })
    req.on('error', error => reject({ error }))
    req.end(options.body || '')
  })
}

// Probably this is going to need some refactoring in Arc 11
// Certainly it is not reliable in !Arc local Lambda emulation
let nonLocalEnvs = [ 'staging', 'production' ]
function useAWS () {
  let { ARC_ENV, ARC_LOCAL, ARC_SANDBOX } = process.env
  // Testing is always local
  if (ARC_ENV === 'testing') return false
  // Local, but using AWS resources
  if (nonLocalEnvs.includes(ARC_ENV) && ARC_SANDBOX && !ARC_LOCAL) return false
  // Assumed to be AWS
  return true
}
