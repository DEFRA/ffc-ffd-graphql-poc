const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql')

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLInt },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      person: {
        type: PersonType, // doesn't response to anything other than GraphQLString
        args: {
          id: { type: GraphQLInt },
          fullname: { type: GraphQLString },
          email: { type: GraphQLString },
          age: { type: GraphQLInt }
        },
        resolve: (root, { fullname }, request) => {
          const user = fetchUserFromDatabase(fullname)
          return {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            age: user.age
          }
        }
      }
    }
  })
})

function fetchUserFromDatabase (user) {
  return {
    id: 24,
    fullname: 'Rana Salem',
    email: 'salemrana@email.com',
    age: 99
  }
}

module.exports = { schema }

// {id, firstname, email, age}
// return everything from the db based on user
// return subset eg only email
// return from multiple data sources
