const PaginatedMethod = {
    validate: {        
        paginate: {type: ['boolean', 'string']},
        paginator: {type: 'object'},
    },
    request: params => {
        return {
            ...params
        }
    },
    response: ({payload}) => payload
}

module.exports = {
    service: 'lambda',
    methods: {
      PaginatedMethod,
    }
  }
  