import Router from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'

import hello from './controllers/hello/hello'

import schema from './graphql'

const router = new Router({ prefix: '/api' })

router.get('/', hello)
router.post(
    '/graphql',
    graphqlKoa(ctx => ({
      schema,
      context: { ctx }
    }))
  )
  
  if (process.env !== 'production') {
    router.get('/graphiql', graphiqlKoa({ endpointURL: '/api/graphql' }))
  }

export default router