let KB = 1024
let MB = KB * KB
function truncate (num) {
  let bits = String(num).split('.')
  if (bits.length === 1) return bits[0]
  return `${bits[0]}.${bits[1].substring(0, 2)}`
}

let roundHalf = num =>  Math.round(num * 2) / 2

function formatSize (num) {
  // Measure in KB
  if (num < MB) return `${truncate(num / KB)} KB`
  // Measure in MB
  return `${truncate(num / MB)} MB`
}

let names = {
  'aws-lite': 'aws-lite',
  'aws-sdk-v2': 'AWS SDK v2',
  'aws-sdk-v2-client': 'AWS SDK v2 (single client)',
  'aws-sdk-v3': 'AWS SDK v3',
}

module.exports = { formatSize, names, roundHalf }
