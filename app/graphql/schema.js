const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')
const { personType } = require('./person')
const { preferenceType } = require('./preference')
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
          return {
            id: person.id,
            fullname: person.fullname,
            email: person.email,
            age: person.age
          }
        }
      },
      preferences: {
        type: preferenceType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, { id }, request) => {
          const preference = preferenceData.find((x) => x.id === id)
          return {
            id: preference.id,
            email: preference.email,
            phone: preference.phone,
            sms: preference.sms,
            post: preference.post
          }
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
