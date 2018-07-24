import Koa from 'koa'
import logger from './utils/logger'

import router from './routes'
import activityLogger from './middlewares/activityLogger'

const app = new Koa()
const port = process.env.PORT || 2333

app
  .use(activityLogger())
  .use(router.routes())

// Listen to error occur
app.on('error', (err) => {
  logger.error('Server error', { error: err.message })
})

app.listen(port, () => {
  console.log(`Koa server is listenning to port ${port}`)
})

export default app