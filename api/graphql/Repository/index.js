import createRepository from './createRepository'
import searchRepositories from './searchRepositories'
import repository from './repository'

const typeDef = `
  type Repository {
    id: Int!
    owner: User!
    full_name: String!
    description: String
    html_url: String
    language: String
    stargazers_count: Int
  }
`

const resolvers = {
  Query: {
    searchRepositories,
    repository,
  },
  Mutation: {
    createRepository,
  }
}

export default {
  typeDef,
  resolvers
}