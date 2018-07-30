import createRepository from './createRepository'
import searchRepositories from './searchRepositories'

const typeDef = `
  type Repository {
    id: ID
    owner: ID
    full_name: String
    description: String
    html_url: String
    language: String
    stargazers_count: Int
  }
`

const resolvers = {
  Query: {
    searchRepositories
  },
  Mutation: {
    createRepository
  }
}

export default {
  typeDef,
  resolvers
}