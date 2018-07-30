import getContributors from './getContributors'

const typeDef = `
  type Contribution {
    user: ID!
    repository: Repository
    line_count: Int
  }
`
const resolvers = {
  Query: {
    getContributors
  }
}

export default {
  typeDef,
  resolvers
}