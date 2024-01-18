const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')
// const { preferenceType } = require('./preference')

const personType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLInt },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

module.exports = { personType }
