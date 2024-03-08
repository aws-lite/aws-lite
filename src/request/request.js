let aws4 = require('aws4')
let { awsjson, parseXML, useAWS, JSONContentType, AwsJSONContentType, XMLContentType } = require('../lib')

// HTTP client agent cache to prevent generating new agents for every request
let agentCache = {
  http: { keepAliveEnabled: null, keepAliveDisabled: null },
  https: { keepAliveEnabled: null, keepAliveDisabled: null },
}
/* istanbul ignore next */
function getAgent (client, isHTTPS, config) {
  let http = isHTTPS ? 'https' : 'http'

  let keepAlive = config.keepAlive ?? useAWS()
  let agent = keepAlive ? 'keepAliveEnabled' : 'keepAliveDisabled'

  if (!agentCache[http][agent]) {
    agentCache[http][agent] = new client.Agent({ keepAlive })
  }
  return agentCache[http][agent]
}

module.exports = async function request (params, args) {
  let { config, metadata } = args
  let { debug, maxAttempts, retries } = config
  retries = maxAttempts ?? retries ?? 5

  if (isNaN(retries)) {
    throw ReferenceError('retries property must a number')
  }

  for (let i = 0; i <= retries; i++) {
    let retrying = i > 0
    try {
      let result = await call(params, args, retrying)
      if (i === retries || reqCompleted(result.statusCode)) {
        if (isOk(result.statusCode)) return result

        let { statusCode, headers, payload } = result
        throw { statusCode, headers, error: payload, metadata, passthrough: true }
      }
      await retryDelay(i, `status code ${result.statusCode}`, debug)
    }
    catch (error) {
      if (i < retries && retryableTimeoutErrorCodes.includes(error?.error?.code)) {
        await retryDelay(i, `connection error: ${error.error.code}`, debug)
      }
      else {
        // Unknown / out of band error, not a tidy response or call() rejection
        if (!error.error) throw error

        // Successful request resulted in an error response
        if (error.passthrough) {
          delete error.passthrough
          throw error
        }

        // HTTP error; call() properly rejected, prepare the error property for final error handling
        error.error = error.error.message || /* istanbul ignore next */ error.error.code
        throw error
      }
    }
  }
}

function call (params, args, retrying) {
  let { creds, config, metadata, signing, stream } = args
  let { rawResponsePayload } = params
  let { debug } = config
  let { protocol } = signing

  return new Promise((resolve, reject) => {
    // Sign and construct the request
    let options = aws4.sign(signing, creds)
    // Normalize host (again)
    /* istanbul ignore next: this won't get seen by nyc */
    options.host = options.host || options.hostname
    /* istanbul ignore next */
    if (options.hostname) delete options.hostname

    // Importing http(s) is a bit slow (~1ms), so only instantiate the client and http agent we need
    let isHTTPS = options.host?.includes('.amazonaws.com') ||
                  protocol === 'https:'

    // Debug derives protocol from options
    // This won't get fully exercised in unit tests because we aren't using https
    /* istanbul ignore next */
    if (!options.protocol) {
      options.protocol = isHTTPS ? 'https:' : 'http:'
    }

    /* istanbul ignore next */
    let http = isHTTPS ? require('node:https') : require('node:http')

    // Port configuration
    options.port = params.port || config.port

    // Disable keep-alive locally (or wait Node's default 5s for sockets to time out)
    options.agent = getAgent(http, isHTTPS, config)

    let { body } = params
    let isBuffer = body instanceof Buffer

    /* istanbul ignore next */
    if (debug && !retrying) {
      let { method = 'GET', protocol, host, port, path, headers, service } = options
      let truncatedBody
      /**/ if (isBuffer) truncatedBody = `<body buffer of ${body.length}b>`
      else if (stream) truncatedBody = `<readable stream>`
      else truncatedBody = body?.length > 1000 ? body?.substring(0, 1000) + '...' : body

      let { accessKeyId, secretAccessKey } = creds

      let Authorization = headers.Authorization
        .replace(accessKeyId, accessKeyId.substring(0, 8) + '...')
        .replace(secretAccessKey, '[redacted]')

      let sigRe = /(Signature=)[^,]*/
      let fullSig = Authorization.match(sigRe)
      if (fullSig) {
        let redactedSig = 'Signature=' + fullSig[0].split('Signature=')[1].substring(0, 8) + '...'
        Authorization = Authorization.replace(sigRe, redactedSig)
      }

      console.error('[aws-lite] Request:', {
        time: new Date().toISOString(),
        service,
        method,
        url: `${protocol}//${host}${port ? ':' + port : ''}${path}`,
        headers: { ...headers, Authorization },
        body: truncatedBody || '<no body>',
      }, '\n')
    }

    let req = http.request(options, res => {
      let data = []
      /* istanbul ignore next: we can always expect headers, but jic */
      let { headers = {}, statusCode } = res
      let ok = isOk(statusCode)
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => {
        let body = Buffer.concat(data), payload, rawString
        let contentType = config.responseContentType ||
                        headers['content-type'] ||
                        headers['Content-Type'] || ''
        if (rawResponsePayload) {
          payload = body

          /* istanbul ignore next */
          if (debug) rawString = body.toString()
        }
        else {
          if (body.length && (JSONContentType(contentType) || AwsJSONContentType(contentType))) {
            payload = JSON.parse(body)

            /* istanbul ignore next */
            if (debug) rawString = body.toString()

            // Some services may attempt to respond with regular JSON, but an AWS JSON content-type. Sure. Ok. Anyway, try to guard against that.
            if (AwsJSONContentType(contentType)) {
              try {
                payload = awsjson.unmarshall(payload, null, config)
              }
              catch { /* noop, it's already parsed */ }
            }
          }
          if (body.length && XMLContentType(contentType)) {
            payload = parseXML(body)
            /* istanbul ignore next */
            if (payload.xmlns) delete payload.xmlns

            /* istanbul ignore next */
            if (debug) rawString = body.toString()
          }
          // Sometimes AWS reports JSON and XML errors without a content type (ahem, Lambda) so that's fun
          /* istanbul ignore next */ // TODO remove + test
          if (body.length && !ok && !contentType) {
            try {
              payload = JSON.parse(body)
            }
            catch {
              try {
                payload = parseXML(body)
              }
              catch {
              // lolnothingmatters
                payload = body.toString()
              }
            }
          }
        }
        payload = payload || (body.length ? body : null)

        /* istanbul ignore next */
        if (debug) {
          let truncatedBody
          /**/ if (payload instanceof Buffer) truncatedBody = body.length ? `<body buffer of ${body.length}b>` : ''
          else if (rawString) truncatedBody = rawString?.length > 250 ? rawString?.substring(0, 250) + '...' : rawString
          console.error('[aws-lite] Response:', {
            time: new Date().toISOString(),
            statusCode,
            headers,
            body: truncatedBody || '<no body>',
          }, '\n')
        }
        resolve({ statusCode, headers, payload })
      })
    })
    req.on('error', error => {
      /* istanbul ignore next */
      if (debug) {
        console.error('[aws-lite] HTTP error:', error)
      }
      reject({
        error,
        metadata: {
          ...metadata,
          rawStack: error.stack,
          service: params.service,
          host: options.host,
          protocol: options.protocol.replace(':', ''),
          port: options.port,
        }
      })
    })

    if (stream) {
      stream.pipe(req)
      /* istanbul ignore next */
      if (debug) {
        let bytes = 0
        stream.on('data', chunk => {
          bytes += chunk.length
          console.error(`Bytes streamed: ${bytes}`)
        })
      }
    }
    else req.end(options.body || '')
  })
}

let isOk = statusCode => statusCode >= 200 && statusCode < 303

// AWS defines transient error status codes as 500, 502, 503, 504, and error codes as below
// The following transient AWS error codes are also designated retryable: [ 'TimeoutError', 'RequestTimeout', 'RequestTimeoutException' ]
// see: smithy-typescript/packages/service-error-classification/src/constants.ts
let reqCompleted = statusCode => statusCode < 500 && statusCode !== 429 /* Throttled */
const awsTimeoutErrorCodes = [ 'ECONNRESET', 'EPIPE', 'ETIMEDOUT' ]
const aws4TimeoutErrorCodes = [ 'EADDRINFO', 'ESOCKETTIMEDOUT', 'ENOTFOUND', 'EMFILE' ]
const retryableTimeoutErrorCodes = awsTimeoutErrorCodes.concat(aws4TimeoutErrorCodes)

const maxRetryBackoff = 20 * 1000
async function retryDelay (i, reason, debug) {
  // A variety of available jitter algos, mhart's aws4fetch impl seemed like a tidy, simple approach
  let rando = Math.floor(Math.random() * 50 * Math.pow(2, i))
  let delay = Math.min(rando, maxRetryBackoff)
  /* istanbul ignore next */
  if (debug) {
    console.error(`[aws-lite] Request failed (${reason}), retrying in ${delay} ms`)
  }
  await new Promise(res => setTimeout(res, delay))
}
