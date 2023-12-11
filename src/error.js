module.exports = function errorHandler (input) {
  /* istanbul ignore next */ // jic!
  if (input instanceof Error) {
    throw input
  }

  let { statusCode, headers, error, metadata } = input

  // If the payload passed is an object containing an `Error` property, use that
  if (error.Error) error = error.Error

  // If the error passed is an actual Error, it probably came from a plugin method failing, so we should attempt to retain its beautiful, beautiful stack trace
  let err = error instanceof Error ? error : Error()
  if (statusCode) {
    err.statusCode = statusCode
  }
  if (headers) {
    err.headers = headers
  }

  // The most common error response from AWS services
  if (error && typeof error === 'object') {
    Object.entries(error).forEach(([ name, value ]) => {
      if (name.toLowerCase() === 'message') err.message = value
      else err[name] = value
    })
  }
  // Less common: sometimes strings (of XML), possibly without a content-type
  if (typeof error === 'string') {
    err.message = error
  }

  // Tag the error with whatever metadata we have
  Object.entries(metadata).forEach(([ name, value ]) => {
    // Don't overwrite the error name with the plugin method name, though
    if (name !== 'name' && value) err[name] = value
  })

  // Construct a more useful error message
  let { service, name, property } = metadata
  let msg = '@aws-lite/client: ' + (property || service)
  if (name) msg += `.${name}`
  if (error?.message || err.message) {
    msg += `: ${error.message || err.message}`
  }
  err.message = msg

  throw err
}
