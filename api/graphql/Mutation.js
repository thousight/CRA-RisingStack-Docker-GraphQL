export default `
  type Mutation {    
    # Repository
    createRepository(id: ID!, owner: String!, full_name: String!, description: String, html_url: String, language: String, stargazers_count: Int): Repository

    # Contribution
    createContribution(repository: String, user: String, line_count: Int!): Contribution
    createOrReplaceContribution(repository: String, user: String, line_count: Int!): Contribution

    # User
    createUser(id: ID!, login: String!, avatar_url: String, html_url: String, type: String): User
  }
`