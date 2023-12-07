let { loadAwsConfig } = require('./lib')

module.exports = async function getHost (config) {
  if (config.host) return getHostFromURL(config.host)

  let { AWS_ENDPOINT_URL } = process.env
  if (AWS_ENDPOINT_URL) return getHostFromURL(AWS_ENDPOINT_URL)

  let awsConfig = await loadAwsConfig(config)
  if (awsConfig) {
    let { profile } = config
    let profileName = profile === 'default' ? profile : `profile ${profile}`
    let url = awsConfig?.[profileName]?.endpoint_url
    if (url) return getHostFromURL(url)
  }
}

// Best effort WHATWG URL parse
function getHostFromURL (host) {
  try { return new URL(host).hostname }
  catch { return host }
}
