const Hapi = require('@hapi/hapi')
const Graphi = require('graphi')
const { schema } = require('./graphql/schema')

async function createServer () {
  const server = Hapi.server({
    port: 3000,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
    router: {
      stripTrailingSlash: true
    }
  })

  await server.register(require('./plugins/router'))
  await server.register({ plugin: Graphi, options: { schema } })

  // await server.register(require('@hapi/inert'))
  // await server.register(require('@hapi/vision'))

  return server
}

module.exports = { createServer }
