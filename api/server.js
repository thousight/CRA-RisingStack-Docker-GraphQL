import Koa from 'koa'
import { ApolloServer, gql } from 'apollo-server-koa'

import logger from './utils/logger'
import router from './routes'
import schemas from './schemas'
import activityLogger from './middlewares/activityLogger'

const apolloServer = new ApolloServer(schemas)
const app = new Koa()
const port = process.env.PORT || 2333

app
  .use(activityLogger())
  .use(router.routes())

// Listen to error occur
app.on('error', (err) => {
  logger.error('Server error', { error: err.message })
})

apolloServer.applyMiddleware({ app })

app.listen(port, () => {
  console.log(`Koa server is listenning to port ${port}, and GraphQL is at ${apolloServer.graphqlPath}`)
})

export default app