let getCreds = require('./get-creds')
let getRegion = require('./get-region')
let clientFactory = require('./client-factory')

/**
 * @param {object} [config] Client configuration options
 * @param {string} [config.accessKeyId] AWS access key
 * @param {string} [config.secretAccessKey] AWS secret access key
 * @param {string} [config.sessionToken] AWS session token
 * @param {string} [config.region] AWS service region (e.g. `us-west-1`); can be overridden per request
 * @param {string} [config.profile] Credential profile name to use
 * @param {boolean} [config.autoloadPlugins=true] Attempt to automatically load aws-lite plugins
 * @param {boolean} [config.keepAlive=true] Disable Node.js's connection keepalive, helpful for local testing
 * @param {string} [config.protocol='https'] Set connection protocol to 'http', helpful for local testing
 *
 * @returns {Promise<function>} Client async function
 */
function awsLite (config = {}) {
  let creds = getCreds(config)
  let region = getRegion(config)
  return clientFactory(config, creds, region)
}

module.exports = awsLite
