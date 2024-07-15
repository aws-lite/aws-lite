function normalizeObjectArrays (object, arrayKeys, recurse) {
  if (typeof object !== 'object') return

  if (Array.isArray(object) && recurse) {
    object.forEach(i => { normalizeObjectArrays(i, arrayKeys, recurse) })
  }
  else {
    Object.entries(object).forEach(([ key, value ]) => {
      if (recurse) normalizeObjectArrays(value, arrayKeys, recurse)
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

function serializeObject (obj, parentKey = '') {
  let result = {}
  Object.entries(obj).forEach(([ key, value ]) => {
    if (Array.isArray(value)) {
      Object.assign(result, serializeArray(value, `${parentKey}.${key}`))
    }
    else if (typeof value === 'object') {
      Object.assign(result, serializeObject(value, `${parentKey}`))
    }
    else if (parentKey) {
      result[`${parentKey}.${key}`] =  value
    }
    else {
      result[key] =  value
    }
  })
  return result
}

export default {
  normalizeObjectArrays,
  serializeArray,
}
