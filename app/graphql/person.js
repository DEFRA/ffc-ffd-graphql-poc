const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')
const { preferenceType } = require('./preference')
const { todoType } = require('./todo')

const personType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLInt },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
    preferences: { type: preferenceType },
    todos: { type: new GraphQLList(todoType) }
  }
})

module.exports = { personType }
