function serializeTags (query) {
  query.Tags.forEach(({ Key, Value }, i) => {
    query[`Tags.member.${i + 1}.Key`] = Key
    query[`Tags.member.${i + 1}.Value`] = Value
  })
  delete query.Tags
}

function normalizeObjectArrays (object, arrayKeys, recurse) {
  if (typeof object !== 'object') return

  if (Array.isArray(object) && recurse) {
    object.forEach(i => { normalizeObjectArrays(i, arrayKeys, recurse) })
  }
  else {
    Object.entries(object).forEach(([ key, value ]) => {
      if (recurse) normalizeObjectArrays(value, arrayKeys)
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

export default {
  serializeTags,
  normalizeObjectArrays,
}
