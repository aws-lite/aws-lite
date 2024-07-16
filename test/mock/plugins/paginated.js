const validate = {
  paginate: { type: [ 'boolean', 'string' ] },
  paginator: { type: 'object' },
}

const request = params => params

const PaginatedMethod = {
  validate,
  request,
  response: ({ payload }) => payload,
}

const ResponseErrorMethod = {
  validate,
  request,
  response: () => {
    throw new Error('Expected throw')
  },
}

module.exports = {
  service: 'lambda',
  methods: {
    PaginatedMethod,
    ResponseErrorMethod,
  },
}
