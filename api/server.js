import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import apolloServer from './graphql'
import logger from './utils/logger'
import router from './routes'
import activityLogger from './middlewares/activityLogger'

const app = new Koa()
const port = process.env.PORT || 2333

app
  .use(activityLogger())
  .use(bodyParser())
  .use(router.routes())

  apolloServer.applyMiddleware({ app })

// Listen to error occur
app.on('error', (err) => {
  console.log(err);
  logger.error('Server error', { error: err.message })
})


app.listen(port, () => {
  console.log(`Koa server is listenning to port ${port}`)
})

export default app