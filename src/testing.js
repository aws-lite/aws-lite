/* istanbul ignore next */
let debug = (params = {}) => {
  let { print } = params
  if (print) {
    console.error('[aws-lite] Testing debug:')
    console.dir(methods.data, { depth: null })
  }
  return methods.data
}

function disable () {
  reset()
  methods.data.enabled = false
  methods.data.usePluginResponseMethod = false
}

function enable (params = {}) {
  let { usePluginResponseMethod } = params
  reset()
  methods.data.enabled = true
  methods.data.usePluginResponseMethod = usePluginResponseMethod || false
}

function getAllRequests (target) {
  if (!target) return methods.data.allRequests
  let { service, method } = getMethod(target)
  return methods.data?.[service]?.[method]?.requests
}

function getAllResponses (target) {
  if (!target) return methods.data.allResponses
  let { service, method } = getMethod(target)
  return methods.data?.[service]?.[method]?.responses
}

function getLastRequest (target) {
  if (!target) return lastItem(methods.data.allRequests)
  let { service, method } = getMethod(target)
  return lastItem(methods.data?.[service]?.[method]?.requests)
}

function getLastResponse (target) {
  if (!target) return lastItem(methods.data.allResponses)
  let { service, method } = getMethod(target)
  return lastItem(methods.data?.[service]?.[method]?.responses)
}

let isEnabled = () => methods.data.enabled

function mock (target, mock) {
  let { service, method } = getMethod(target)
  initMethod(service, method)

  methods.data[service][method].mocks = Array.isArray(mock) ? mock : [ mock ]
}

function reset () {
  let { enabled, usePluginResponseMethod } = methods.data || {}
  methods.data = {
    enabled,
    usePluginResponseMethod,
    allRequests: [],
    allResponses: [],
  }
}

let methods = {
  debug,
  disable,
  enable,
  getAllRequests,
  getAllResponses,
  getLastRequest,
  getLastResponse,
  isEnabled,
  mock,
  reset,
}
disable()
module.exports = methods

/**
 * Internal methods
 */

function getMethod (target) {
  if (target === 'client') return {
    service: 'aws-lite',
    method: 'client',
  }

  let bits = target.split('.')
  if (bits.length !== 2) {
    throw ReferenceError(`Invalid test method: ${target}`)
  }
  return {
    service: bits[0],
    method: bits[1],
  }
}

function initMethod (service, method) {
  if (!methods.data?.[service]) {
    methods.data[service] = {}
  }
  if (!methods.data?.[service]?.[method]) {
    methods.data[service][method] = { requests: [], responses: [], mocks: [] }
  }
}

let lastItem = arr => arr[arr.length - 1]
