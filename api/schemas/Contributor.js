import Repository from './Repository'

const Contributor = `
  type Contributor {
    user: Int!
    repository: Repository!
    line_count: Int
  }
`

export default [ Contributor, Repository ]