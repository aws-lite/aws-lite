module.exports = {
  service: 'lambda',
  methods: {
    ok: {
      request: () => {},
    },
    disabledByFalsy: false,
    disabledByParam: {
      disabled: true,
      awsDoc: 'https://arc.codes',
    },
  },
}
