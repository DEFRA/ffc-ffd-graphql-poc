const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')
const { personType } = require('./person')
// const { preferenceType } = require('./preference')
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
        resolve: (root, { id }, request) => {
          const person = peopleData.find((y) => y.id === id)
          person.preferences = preferenceData.find((x) => x.id === id)
          return person
        }
      },
      allPeople: {
        type: new GraphQLList(personType),
        resolve: () => {
          return peopleData
        }
      }
    }
  })
})

module.exports = { schema }
