module.exports = function errorHandler (input) {
  if (input instanceof Error) {
    throw input
  }

  let { error, statusCode, metadata } = input
  let err = Error()
  if (statusCode) {
    err.statusCode = statusCode
  }

  // The most common error response from AWS services
  if (typeof error === 'object') {
    Object.entries(error).forEach(([ name, value ]) => err[name] = value)
  }
  // Less common: sometimes strings (of XML), possibly without a content-type
  if (typeof error === 'string') {
    err.message = error
  }

  if (typeof metadata === 'object') {
    Object.entries(metadata).forEach(([ name, value ]) => {
      // Don't overwrite the error name with the plugin method name
      if (name !== 'name') err[name] = value
    })
  }

  /* istanbul ignore next */ // TODO check once plugin API settles
  if (metadata) {
    let { service, name } = metadata
    let msg = '@aws-lite/client: ' + service
    if (name) msg += `.${name}`
    if (error.message) msg += `: ${error.message}`
    err.message = msg
  }

  throw err
}
