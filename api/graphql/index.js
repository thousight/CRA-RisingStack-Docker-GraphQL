import { makeExecutableSchema } from 'graphql-tools'

import Contributor from './Contributor.gql'
import Repository from './Repository.gql'
import User from './User.gql'
import Query from './Query.gql'

import logger from '../utils/logger'

export default makeExecutableSchema({
    typeDefs: [ Contributor, Repository.typeDef, User, Query ],
    resolvers: [ Repository.resolver ],
    logger
})