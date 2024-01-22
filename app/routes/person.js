module.exports = {
  method: 'graphql',
  path: '/person',
  handler: (request, h) => {
    return h.response({ status: 'ok' }).code(200)
  }
}
