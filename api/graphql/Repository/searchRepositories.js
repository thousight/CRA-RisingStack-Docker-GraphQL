import githubGraphQLClient from '../../utils/githubGraphQLClient'

const gql = query => `{
    search(type: REPOSITORY, query: "${query}", first: 10) {
        nodes {
            ... on Repository {
                id
                owner: owner {
                    id
                }
                full_name: name
                description
                html_url: url
                language: languages(first: 1) {
                    nodes {
                        ... on Language {
                            name
                        }
                    }
                }
                stargazers_count: stargazers {
                    totalCount
                }
            }
        }
    }
}`

export default (_, { query }) => githubGraphQLClient.request(gql(query)).then(data => data.search.nodes.map(node => ({
    id: node.id,
    full_name: node.full_name,
    description: node.description,
    html_url: node.html_url,
    owner: node.owner.id,
    language: node.language.nodes[0].name,
    stargazers_count: node.stargazers_count.totalCount
})))