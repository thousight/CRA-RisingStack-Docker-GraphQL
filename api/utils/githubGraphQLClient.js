import { GraphQLClient } from 'graphql-request'

import config from '../../config.json'

const client = new GraphQLClient('https://api.github.com/graphql', { headers: { Authorization: `bearer ${config.github}` } })

export default client