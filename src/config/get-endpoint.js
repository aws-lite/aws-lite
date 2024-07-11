let { getEndpointParams, loadAwsConfig } = require('../lib')

module.exports = async function getEndpoint (params) {
  let { config, awsConfig } = params
  let endpointOrHost = config.endpoint || config.url ||
                       config.host || config.hostname
  if (endpointOrHost) return getEndpointParams(config)

  let { AWS_ENDPOINT_URL } = process.env
  if (AWS_ENDPOINT_URL) return getEndpointParams({ endpoint: AWS_ENDPOINT_URL })

  // Only check for an AWS config if absolutely necessary since it's multiple filesystem reads
  awsConfig = params.awsConfig = (awsConfig || await loadAwsConfig(config))
  if (awsConfig) {
    let url = awsConfig?.currentProfile?.endpoint_url
    if (url) return getEndpointParams({ endpoint: url })
  }
}
