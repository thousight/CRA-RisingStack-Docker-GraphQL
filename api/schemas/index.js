import { makeExecutableSchema } from 'graphql-tools'

import Contributor from './Contributor'
import Repository from './Repository'
import User from './User'

export default makeExecutableSchema({
    typeDefs: [Contributor, Repository, User],
    resolvers: {},
})