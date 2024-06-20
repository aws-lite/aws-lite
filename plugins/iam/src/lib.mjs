function serializeTags (query) {
  query.Tags.forEach(({ Key, Value }, i) => {
    query[`Tags.member.${i + 1}.Key`] = Key
    query[`Tags.member.${i + 1}.Value`] = Value
  })
}

export default {
  serializeTags,
}
