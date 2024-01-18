const { GraphQLObjectType, GraphQLInt, GraphQLBoolean } = require('graphql')

const preferenceType = new GraphQLObjectType({
  name: 'Preference',
  fields: {
    id: { type: GraphQLInt },
    email: { type: GraphQLBoolean },
    post: { type: GraphQLBoolean },
    sms: { type: GraphQLBoolean },
    phone: { type: GraphQLBoolean }
  }
})

module.exports = { preferenceType }
