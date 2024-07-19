let request = async p => p
let required = true

// This plugin is specifically / only intended for use in validation testing
module.exports = {
  service: 'lambda',
  methods: {
    testTypes: {
      validate: {
        arr: { type: 'Array' }, // Exercise that toLowerCase!
        bool: { type: 'boolean' },
        buf: { type: 'buffer' },
        num: { type: 'number' },
        obj: { type: 'object' },
        str: { type: 'string' },
        invalidType: { type: 'lolidk' },
        invalidTypeList: { type: [ 'listidk' ] },
        invalidTypeType: { type: 12345 },
        invalidTypeListType: { type: [ 12345 ] },
        missingType: {},
        required: { type: 'string', required },
        disabled: false,
        payload: { type: [ 'string', 'array', 'object' ] },
      },
      request,
    },
    noValidation: {
      request,
    },
    pluginBreaksValidation: {
      validate: { arr: { type: 'array' } },
      request: async () => ({ arr: 12345 }),
    },
  },
}
