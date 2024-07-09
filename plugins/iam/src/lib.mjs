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

function serializeArray (key, array) {
  let result = {}
  array.forEach((value, i) => {
    result[`${key}.member.${i + 1}`] = value
  })
  return result
}

function serializeTags (tags) {
  let result = {}
  tags.forEach(({ Key, Value }, i) => {
    result[`Tags.member.${i + 1}.Key`] = Key
    result[`Tags.member.${i + 1}.Value`] = Value
  })
  return result
}

export default {
  normalizeObjectArrays,
  serializeArray,
  serializeTags,
}
