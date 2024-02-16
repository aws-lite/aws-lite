let { getEndpointParams, loadAwsConfig } = require('../lib')

module.exports = async function getEndpoint (config) {
  let endpointOrHost = config.endpoint || config.url ||
                       config.host || config.hostname
  if (endpointOrHost) return getEndpointParams(config)

  let { AWS_ENDPOINT_URL } = process.env
  if (AWS_ENDPOINT_URL) return getEndpointParams({ endpoint: AWS_ENDPOINT_URL })

  let awsConfig = await loadAwsConfig(config)
  if (awsConfig) {
    let { profile } = config
    let profileName = profile === 'default' ? profile : `profile ${profile}`
    let url = awsConfig?.[profileName]?.endpoint_url
    if (url) return getEndpointParams({ endpoint: url })
  }
}
