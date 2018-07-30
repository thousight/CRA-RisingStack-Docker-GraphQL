import createContribution from './createContribution'
import createOrReplaceContribution from './createOrReplaceContribution'
import getContributors from './getContributors'

const typeDef = `
  type Contribution {
    user: User
    repository: Repository
    line_count: Int
  }
`
const resolvers = {
  Query: {
    getContributors
  },
  Mutation: {
    createContribution,
    createOrReplaceContribution
  }
}

export default {
  typeDef,
  resolvers
}