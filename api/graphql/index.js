import { ApolloServer, makeExecutableSchema } from 'apollo-server-koa'

import Contribution from './Contribution'
import Repository from './Repository'
import User from './User'
import Query from './Query'
import Mutation from './Mutation'

import logger from '../utils/logger'

const schema = makeExecutableSchema({
    typeDefs: [ Contribution.typeDef, Repository.typeDef, User.typeDef, Query, Mutation ],
    resolvers: [ Contribution.resolvers, Repository.resolvers, User.resolvers ],
    logger
})

const apolloServer = new ApolloServer({ schema })

export default apolloServer