const { GraphQLObjectType, GraphQLInt, GraphQLBoolean } = require('graphql')

const preferenceType = new GraphQLObjectType({
  name: 'Preference',
  fields: {
    id: { type: GraphQLInt },
    email: { type: GraphQLBoolean },
    phone: { type: GraphQLBoolean },
    sms: { type: GraphQLBoolean },
    post: { type: GraphQLBoolean }
  }
})

module.exports = { preferenceType }
