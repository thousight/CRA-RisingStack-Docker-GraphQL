import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.github.com/graphql', { headers: { Authorization: 'bearer 1069462ed63287313b9c4572a525db8dc88fa274' } })

export default client