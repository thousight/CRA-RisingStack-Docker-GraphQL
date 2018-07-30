export default `
  type Query {
    # Repository
    searchRepositories(query: String!): [Repository]
    repository(id: ID!, full_name: String!): Repository

    # Contribution
    getContributors(repository: String!, query: String!): [Contribution]
    contribution(userId: String!, userLogin: String!, repoId: String!, repoName: String!): Contribution

    # User
    user(id: ID!, login: String!): User
  }
`