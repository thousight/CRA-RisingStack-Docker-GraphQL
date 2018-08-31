export default `
  type Mutation {    
    # Repository
    createRepository(id: ID!, owner: Int!, full_name: String!, description: String, html_url: String, language: String, stargazers_count: Int): Repository

    # Contribution
    createContribution(repository: Int!, user: Int!, line_count: Int!): Contribution
    createOrReplaceContribution(repository: Int!, user: Int!, line_count: Int!): Contribution

    # User
    createUser(id: Int!, login: String!, avatar_url: String, html_url: String, type: String): User
  }
`