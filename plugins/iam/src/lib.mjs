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

// function serializeSimulationData (params) {
//   function helper (parentKey, arr) {
//     if (!Array.isArray(arr)) return
//     let result = serializeArray(parentKey, arr)
//     arr.forEach(([ key, value ]) => {
//       Object.assign(result, helper(`${parentKey}.${key}`, value))
//     })
//     return result
//   }


//   let result = { ...params }
//   let { ActionNames, PolicyInputList } = params
//   Object.assign(result, serializeArray('ActionNames', ActionNames))
//   delete result.ActionNames
//   PolicyInputList = PolicyInputList.map(i => JSON.stringify(i))
//   Object.assign(result, serializeArray('PolicyInputList', PolicyInputList))
//   delete result.PolicyInputList

//   if (params.ContextEntries) {
//     let { ContextEntries } = params
//     ContextEntries = ContextEntries.map(i => JSON.stringify(i))
//     Object.assign(query, serializeArray('ContextEntries', ContextEntries))
//     delete query.ContextEntries
//   }
// }

export default {
  normalizeObjectArrays,
  serializeArray,
  serializeTags,
}
