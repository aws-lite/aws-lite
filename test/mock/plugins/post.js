// This is just a POST-only plugin mock to isolate functionality in tests
let { service, Invoke } = require('./methods')
module.exports = { service, methods: { Invoke } }
