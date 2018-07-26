import { makeExecutableSchema } from 'graphql-tools'

import Contribution from './Contribution.gql'
import Repository from './Repository.gql'
import User from './User.gql'
import Query from './Query.gql'

import logger from '../utils/logger'

export default makeExecutableSchema({
    typeDefs: [ Contribution.typeDef, Repository.typeDef, User.typeDef, Query ],
    resolvers: [ Contribution.resolvers, Repository.resolvers, User.resolvers ],
    logger
})