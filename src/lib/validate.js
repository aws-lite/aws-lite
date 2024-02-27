let errorHandler = require('../error')

// Types
let is = {
  array: item => Array.isArray(item),
  boolean: item => typeof item === 'boolean',
  buffer: item => Buffer.isBuffer(item),
  number: item => Number.isInteger(item),
  object: item => item && typeof item === 'object' && !Array.isArray(item),
  stream: item => item?.on && item?._read && item?._readableState,
  string: item => typeof item === 'string',
  // TODO:
  // - ARN, partial arn
}

let payloadAliases = [ 'payload', 'body', 'data', 'json' ]
// TODO known params: { headers: 'object', protocol: 'string', host(name): 'string', port: 'number }

/**
 * Validate plugin method params with the following format:
 * {
 *   name: { type: 'string', required: true },
 *   payload: { type: [ 'string', 'array', 'object' ] },
 *   disableMe: false,
 * }
 */
function validateInput (valid, input, metadata) {
  // Aggregate errors
  let errors = []

  // Check for duplicate aliases
  let dupedPayloadAliases = []
  Object.keys(input).forEach(p => payloadAliases.includes(p) && dupedPayloadAliases.push(p))
  if (dupedPayloadAliases.length > 1) {
    errors.push(`- Found duplicate payload parameters: ${dupedPayloadAliases.join(', ')}`)
  }

  // Traverse the validation object, comparing it with the provided input
  Object.entries(valid).forEach(([ param, validations ]) => {
    // Ok, this is a bit funky, but tldr: if a payload alias is used, we still need to address it via the canonical payload property
    let canonicalParam = param === 'payload'
      ? Object.keys(input).find(p => payloadAliases.includes(p)) || param
      : param

    // If set to `false`, disable this data type entirely
    // Usually this would only apply to payload for read requests
    if (validations === false) {
      if (input[canonicalParam]) {
        errors.push(`- Parameter '${canonicalParam}' must not be used`)
      }
      return
    }

    let { type, required } = validations

    // Only check that which needs checking
    if (typeof input[canonicalParam] === 'undefined') {
      if (required) {
        errors.push(`- Missing required parameter: ${canonicalParam}`)
      }
      return
    }

    // Ensure basic validation is ok
    if (!type) {
      errors.push(`- Validator is missing required 'type' property: ${canonicalParam}`)
      return
    }
    if (!is.string(type) && !is.array(type)) {
      errors.push(`- Validator 'type' property must be a string or array: ${param}`)
      return
    }

    // We'll run the same validation logic whether it's a single or multiple accepted types, so just always set up an array
    let types = is.array(type) ? type : [ type ]
    // Yo idk maybe someone accidentally wrote Array instead of array
    types = types.map(t => t?.toLowerCase?.(t) || t)

    // First validate the types themselves
    let foundInvalid = false
    types.forEach(t => {
      if (!is[t]) {
        errors.push(`- Invalid type found: ${canonicalParam} (${t})`)
        foundInvalid = true
      }
    })
    // If any types are invalid, that needs fixing before we start checks, so end here
    if (foundInvalid) return

    // Finally the actual check: does the input match up with the allowed types?
    let plural = types.length > 1 ? ' one of' : ''
    if (!types.some(t => is[t](input[canonicalParam]))) {
      errors.push(`- Parameter '${canonicalParam}' must be${plural}: ${types.join(', ')}`)
    }
  })

  if (errors.length) {
    let message = `validation error${errors.length > 1 ? 's' : ''}\n` +
                  errors.join('\n')
    errorHandler({ error: { message }, metadata })
  }
}

module.exports = { validateInput, is }
