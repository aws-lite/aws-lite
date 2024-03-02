import os from 'node:os'
import http from 'node:http'
import process from 'node:process'

// Test defaults
const accessKeyId = 'foo'
const autoloadPlugins = false
const badPort = 12345
const debug = false
const host = 'localhost'
const keepAlive = false
const path = '/a/path'
const profile = 'default'
const verifyService = true
const protocol = 'http'
const region = 'us-west-1'
const secretAccessKey = 'bar'
const sessionToken = 'baz'
const service = 'lambda'
const port = 1111
const config = { accessKeyId, secretAccessKey, sessionToken, region, debug, profile, protocol, autoloadPlugins, keepAlive, host, port }
const defaults = { accessKeyId, autoloadPlugins, badPort, config, host, keepAlive, profile, verifyService, protocol, region, secretAccessKey, service, path, port }

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
          const reqType = req.headers?.['content-type']
          /**/ if (reqType?.includes('json')) body = JSON.parse(data)
          else if (reqType?.includes('xml')) body = data.toString()
          else body = data.join('')
        }
        serverData.request = {
          url: req.url,
          headers: req.headers,
          method: req.method,
          body,
        }

        let response
        const resType = serverData.responseHeaders?.['content-type']
        /**/ if (resType?.includes('json')) response = JSON.stringify(serverData.responseBody)
        else if (resType?.includes('xml')) response = serverData.responseBody.toString()
        else response = serverData.responseBody || ''
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
  t.equal(request.url, params.url || path, `Made request to correct path: ${params.url || path}`)
  t.ok(request.headers['x-amz-date'], 'Made request with x-amz-date header')
  t.ok(request.headers['authorization'], 'Made request with authorization header')
  t.match(request.headers['authorization'], /Credential=foo/, 'Authorization header is using the access key')
  resetServer()
}

const copy = obj => JSON.parse(JSON.stringify(obj))

let homedirBak
let tmpHomedir
function overrideHomedir (tmp) {
  if (tmp) tmpHomedir = tmp
  if (!homedirBak) homedirBak = os.homedir
  os.homedir = () => tmpHomedir
}
overrideHomedir.reset = () => {
  os.homedir = homedirBak
  homedirBak = undefined
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
  delete process.env.AWS_ENDPOINT_URL
  delete process.env.AWS_LAMBDA_FUNCTION_NAME
  delete process.env.AWS_PROFILE
  delete process.env.AWS_REGION
  delete process.env.AWS_SDK_LOAD_CONFIG
  delete process.env.AWS_SECRET_ACCESS_KEY
  delete process.env.AWS_SECRET_KEY
  delete process.env.AWS_SESSION_TOKEN
  delete process.env.AWS_SHARED_CREDENTIALS_FILE
}

export {
  basicRequestChecks,
  copy,
  defaults,
  overrideHomedir,
  resetAWSEnvVars,
  resetServer,
  server,
}
