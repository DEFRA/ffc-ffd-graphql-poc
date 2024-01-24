module.exports = {
  method: 'GET',
  path: '/person',
  config: {
    tags: ['graphql'],
    handler: (request, h) => {
      return h.response({ person: 'simon ' }).code(200)
    }
  }
}
