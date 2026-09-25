/**
 * SES (v1) speaks the AWS query protocol (`application/x-www-form-urlencoded`).
 * Nested objects flatten with `.`; lists use the `.member.N` (1-indexed) convention.
 * This turns a natural JS params object into that flat, string-keyed shape, e.g.:
 *   { Destination: { ToAddresses: [ 'a@b.co' ] } }
 *   -> { 'Destination.ToAddresses.member.1': 'a@b.co' }
 */
export function flattenParams (obj, prefix, out) {
  out = out || {}
  for (const [ key, value ] of Object.entries(obj)) {
    if (value === undefined || value === null) continue
    const name = prefix ? `${prefix}.${key}` : key
    if (Array.isArray(value)) {
      value.forEach((item, i) => {
        const memberName = `${name}.member.${i + 1}`
        if (item !== null && typeof item === 'object') flattenParams(item, memberName, out)
        else out[memberName] = item
      })
    }
    else if (typeof value === 'object') {
      flattenParams(value, name, out)
    }
    else {
      out[name] = value
    }
  }
  return out
}
