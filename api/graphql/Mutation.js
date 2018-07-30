export default `
  type Mutation {
    insert(id: ID!, login: String!, avatar_url: String, html_url: String, type: String): User
  }
`