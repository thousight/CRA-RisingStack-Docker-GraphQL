import { makeExecutableSchema } from 'graphql-tools'

import Contribution from './Contribution.gql'
import Repository from './Repository.gql'
import User from './User.gql'
import Query from './Query.gql'
import Mutation from './Mutation.gql'

import logger from '../utils/logger'

export default makeExecutableSchema({
    typeDefs: [ Contribution.typeDef, Repository.typeDef, User.typeDef, Query, Mutation ],
    resolvers: [ Contribution.resolvers, Repository.resolvers, User.resolvers ],
    logger
})