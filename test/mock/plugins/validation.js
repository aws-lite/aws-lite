let request = async () => {}
let required = true

module.exports = {
  service: 'lambda',
  methods: {
    testTypes: {
      validate: {
        arr: { type: 'Array' }, // Exercise that toLowerCase!
        bool: { type: 'boolean' },
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
  }
}
