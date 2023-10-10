const http = require('http')

// Test defaults
const accessKeyId = 'foo'
const autoloadPlugins = false
const badPort = 12345
const debug = false
const host = 'localhost'
const keepAlive = false
const protocol = 'http'
const region = 'us-west-1'
const secretAccessKey = 'bar'
const service = 'lambda'
const endpoint = '/an/endpoint'
const port = 1111
const config = { accessKeyId, secretAccessKey, region, debug, protocol, autoloadPlugins, keepAlive, host, port }
const defaults = { accessKeyId, autoloadPlugins, badPort, config, host, keepAlive, protocol, region, secretAccessKey, service, endpoint, port }

let serverData = {}

let testServer
let server = {
  start: function  () {
    resetServer()
    testServer = http.createServer((req, res) => {
      let data = []
      req.on('data', chunk => data.push(chunk))
      req.on('end', () => {
        let body
        if (data.length) {
          body = req.headers?.['content-type']?.includes('json')
            ? JSON.parse(data)
            : Buffer.concat(data)
        }
        serverData.request = {
          url: req.url,
          headers: req.headers,
          method: req.method,
          body,
        }

        let response = serverData.responseHeaders?.['content-type']?.includes('json')
          ? JSON.stringify(serverData.responseBody)
          : serverData.responseBody || ''
        res.writeHead(serverData.responseStatusCode, serverData.responseHeaders)
        res.end(response)
      })
    })
    testServer.listen(port)
    console.log('Started test server')
    return true
  },
  end: function () {
    return new Promise((res, rej) => {
      testServer.close(err => {
        if (err) rej(err)
        else {
          testServer = undefined
          console.log(`Test server ended`)
          res()
        }
      })
    })
  },
  use: function (params) {
    serverData = Object.assign(serverData, params)
  },
  getCurrentRequest: () => serverData.request
}

function basicRequestChecks (t, method, params = {}) {
  let request = server.getCurrentRequest()
  t.equal(request.method, method, `Made a ${method} request`)
  t.equal(request.url, params.url || endpoint, `Made request to correct endpoint: ${params.url || endpoint}`)
  t.ok(request.headers['x-amz-date'], 'Made request with x-amz-date header')
  t.ok(request.headers['authorization'], 'Made request with authorization header')
  t.match(request.headers['authorization'], /Credential=foo/, 'Authorization header is using the access key')
  resetServer()
}

function resetServer () {
  serverData = {
    request: undefined,
    responseBody: undefined,
    responseHeaders: {},
    responseStatusCode: 200,
  }
  resetAWSEnvVars()
}

function resetAWSEnvVars () {
  delete process.env.AMAZON_REGION
  delete process.env.AWS_ACCESS_KEY
  delete process.env.AWS_ACCESS_KEY_ID
  delete process.env.AWS_CONFIG_FILE
  delete process.env.AWS_DEFAULT_REGION
  delete process.env.AWS_LAMBDA_FUNCTION_NAME
  delete process.env.AWS_PROFILE
  delete process.env.AWS_REGION
  delete process.env.AWS_SDK_LOAD_CONFIG
  delete process.env.AWS_SECRET_ACCESS_KEY
  delete process.env.AWS_SECRET_KEY
  delete process.env.AWS_SESSION_TOKEN
  delete process.env.AWS_SHARED_CREDENTIALS_FILE
}

module.exports = {
  basicRequestChecks,
  defaults,
  resetAWSEnvVars,
  resetServer,
  server,
}
