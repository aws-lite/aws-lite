// IAM response arrays are almost always <Key><member>data</member><Key>
// arrayKeys is a Set of keys that are expected to be arrays
// set recurse to true to recursively search for nested arrays
// TODO: maybe change recurse to maxDepth
function normalizeResponse (object, arrayKeys, recurse) {
  if (typeof object !== 'object') return
  if (Array.isArray(object) && recurse) {
    object.forEach(i => { normalizeResponse(i, arrayKeys, recurse) })
  }
  else {
    Object.entries(object).forEach(([ key, value ]) => {
      if (recurse) normalizeResponse(value, arrayKeys, recurse)
      if (arrayKeys.has(key)) {
        if (value) {
          object[key] = Array.isArray(value.member) ? value.member : [ value.member ]
        }
        else {
          object[key] = []
        }
      }
    })
  }
}

// IAM requests are all passed through the URL. Typical arrays are serialized in the format `<key>.member.<n>`.
// Nested objects or arrays tend to serialize to `<keyA>.member.<n>.<KeyB>...`
// set recurse to true to handle nested values
// TODO: maybe change recurse to maxDepth
function serializeArray (arr, key, recurse) {
  let result = {}
  arr.forEach((value, i) => {
    if (Array.isArray(value) && recurse) {
      Object.assign(result, serializeArray(value, `${key}.member.${i + 1}`))
    }
    else if (typeof value === 'object' && recurse) {
      Object.assign(result, serializeObject(value, `${key}.member.${i + 1}`))
    }
    else {
      result[`${key}.member.${i + 1}`] = value
    }
  })
  return result
}

// Mostly used to handle serializing objects in an array
// TODO: maybe add maxDepth
function serializeObject (obj, parentKey = '') {
  let result = {}
  Object.entries(obj).forEach(([ key, value ]) => {
    if (Array.isArray(value)) {
      Object.assign(result, serializeArray(value, `${parentKey}.${key}`))
    }
    else if (typeof value === 'object') {
      Object.assign(result, serializeObject(value, parentKey))
    }
    else if (parentKey) {
      result[`${parentKey}.${key}`] = value
    }
    else {
      result[key] = value
    }
  })
  return result
}

export default {
  normalizeResponse,
  serializeArray,
}
