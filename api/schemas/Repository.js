const Repository = `
  type Repository {
    id: Int!
    owner: Int
    full_name: String
    description: String
    html_url: String
    language: String
    stargazers_count: Int
  }
`

export default Repository