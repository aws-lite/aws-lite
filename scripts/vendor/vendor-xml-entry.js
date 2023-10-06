let { XMLParser, XMLBuilder } = require('fast-xml-parser')

// We had to reach deep into the module because the default export uses tslib, which is >100KB lolsigh
let { getValueFromTextNode } = require('@smithy/smithy-client/dist-cjs/get-value-from-text-node.js')

module.exports = { XMLParser, XMLBuilder, getValueFromTextNode }
