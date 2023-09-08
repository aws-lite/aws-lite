module.exports = function errorHandler ({ error, statusCode, metadata }) {
  let err = Error()
  err.statusCode = statusCode
  if (typeof error === 'object') {
    Object.entries(error).forEach(([ name, value ]) => err[name] = value)
  }
  if (metadata) {
    let { service, name } = metadata
    let msg = err.message ? `: ${err.message}` : ''
    err.message = `${service}.${name}${msg}`
  }

  throw err
}
