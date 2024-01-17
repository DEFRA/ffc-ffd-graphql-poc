const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      person: {
        type: GraphQLInputObjectType,
        args: {
          id: { type: GraphQLInt },
          firstname: { type: GraphQLString },
          email: { type: GraphQLString },
          age: { type: GraphQLInt }
        },
        resolve: (root, { firstname }, request) => {
          const user = fetchUserFromDatabase(firstname)
          return user
        }
      }
    }
  })
})

function fetchUserFromDatabase (firstname) {
  return {
    id: '24',
    firstname: 'Rana',
    email: 'rana@rana.rana',
    age: '36'
  }
}

module.exports = { schema }

// {id, firstname, email, age}
// return everything from the db based on user
// return subset eg only email
// return from multiple data sources
