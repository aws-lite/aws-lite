const isString = i => typeof i === 'string'
const isBool = i => typeof i === 'boolean'
const isNum = i => Number.isInteger(i)
const isLiteral = i => isString(i) || isBool(i) || isNum(i)
const isArr = i => Array.isArray(i)
const isObj = i => typeof i === 'object' && Object.keys(i).length

function querystringifyParams (obj) {
  const raw = {}

  function walk (item, propName) {
    if (isLiteral(item)) {
      raw[propName] = item
    }
    else if (isArr(item)) {
      item.forEach((item, index) => {
        walk(item, `${propName}.member.${index += 1}`)
      })
    }
    else if (isObj(item)) {
      Object.entries(item).forEach(([ key, value ]) => {
        walk(value, `${propName}.${key}`)
      })
    }
  }

  Object.entries(obj).forEach(([ key, value ]) => walk(value, key))

  const query = Object.fromEntries(
    Object.entries(raw)
      .filter(([ , v ]) => typeof v !== 'undefined')
      .sort(([ kA ], [ kB ]) => kA > kB ? 1 : -1),
  )

  return query
}

function normalizeResponse (obj, maxDepth = 0) {
  if (maxDepth < 0) return
  if (typeof obj === 'object') {
    Object.entries(obj).forEach(([ key, value ]) => {
      if (maxDepth > 0) normalizeResponse(value, maxDepth - 1)

      if (typeof value === 'object' && value.member) obj[key] = Array.isArray(value.member) ? value.member : [ value.member ]
    })
  }
  return obj
}

export {
  querystringifyParams,
  normalizeResponse,
}
