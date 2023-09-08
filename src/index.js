let getCreds = require('./get-creds')
let getRegion = require('./get-region')
let clientFactory = require('./client-factory')

/**
 * @param {object} [config] - Client configuration options
 * @param {string} [config.accessKeyId] - Access key
 * @param {string} [config.secretAccessKey] - Secret access key
 * @param {string} [config.sessionToken] - Session token
 * @param {string} [config.region] - AWS service region (e.g. `us-west-1`)
 * @param {string} [config.profile] - Credentials profile name to use
 * @param {boolean} [config.autoloadPlugins=true] - Attempt to automatically load AWS service plugins
 *
 * @returns {Promise<function>} Client async function
 */
function awsLite (config = {}) {
  let creds = getCreds(config)
  let region = getRegion(config)
  return clientFactory(config, creds, region)
}

module.exports = awsLite
