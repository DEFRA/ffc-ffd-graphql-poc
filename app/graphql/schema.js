const wreck = require('@hapi/wreck')
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')
const { personType } = require('./person')
const { people: peopleData, preferences: preferenceData } = require('../data')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      person: {
        type: personType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: async (root, { id }, request) => {
          const { payload: todos } = await wreck.get('https://jsonplaceholder.typicode.com/todos', { json: true })
          const person = peopleData.find((personObject) => personObject.id === id)
          person.preferences = preferenceData.find((preferenceObject) => preferenceObject.id === id)
          person.todos = todos.filter((todoObject) => todoObject.userId === id)
          return person
        }
      },
      allPeople: {
        type: new GraphQLList(personType),
        resolve: () => {
          const result = peopleData.map(personObject => {
            const preferences = preferenceData.find((preferenceObject) => preferenceObject.id === personObject.id)
            return { ...personObject, preferences }
          })
          return result
        }
      }
    }
  })
})

module.exports = { schema }
