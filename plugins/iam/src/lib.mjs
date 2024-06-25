function serializeTags (query) {
  query.Tags.forEach(({ Key, Value }, i) => {
    query[`Tags.member.${i + 1}.Key`] = Key
    query[`Tags.member.${i + 1}.Value`] = Value
  })
  delete query.Tags
}

function normalizeObjectArrays (object, arrayKeys) {

  if (typeof object !== 'object') return

  if (Array.isArray(object)) {
    object.forEach(i => { normalizeObjectArrays(i, arrayKeys) })
  }
  else {
    // console.log(object)
    Object.entries(object).forEach(([ key, value ]) => {
      normalizeObjectArrays(value, arrayKeys)
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
