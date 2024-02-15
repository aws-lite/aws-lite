/* istanbul ignore next */
let debug = (params = {}) => {
  let { print } = params
  if (print) {
    console.error('[aws-lite] Testing debug:')
    console.dir(methods.data, { depth: null })
  }
  return methods.data
}

let disable = () => reset({ enabled: false })

let enable = (params) => reset({ enabled: true, ...params })

let getAllRequests = () => methods.data.allRequests

let getAllResponses = () => methods.data.allResponses

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

function mock (target, mock) {
  let { service, method } = getMethod(target)
  initMethod(service, method)

  if (Array.isArray(mock)) {
    methods.data[service][method].mocks.push(...mock)
  }
  else methods.data[service][method].mocks.push(mock)
}

function reset (params = {}) {
  let { enabled = true, usePluginResponseMethod = false } = params
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
  mock,
  reset,
}
reset({ enabled: false })
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
