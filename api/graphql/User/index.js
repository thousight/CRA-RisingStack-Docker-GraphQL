import user from './user'
import createUser from './createUser'

const typeDef = `
  type User {
    id: ID!
    login: String
    avator_url: String
    html_url: String
    type: String
  }
`

const resolvers = {
  Query: {
    user
  },
  Mutation: {
    createUser
  }
}

export default {
  typeDef,
  resolvers
}