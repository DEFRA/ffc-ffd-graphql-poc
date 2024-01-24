const { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString } = require('graphql')

const todoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean }
  }
})

module.exports = { todoType }
