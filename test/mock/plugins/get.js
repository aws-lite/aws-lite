// This is just a GET-only plugin mock to isolate functionality in tests
let { service, GetFunctionConfiguration } = require('./methods')
module.exports = { service, methods: { GetFunctionConfiguration } }
