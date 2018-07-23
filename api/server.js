import Koa from 'koa'

const app = new Koa()
const port = process.env.PORT || 2333

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(port, () => {
     console.log(`Koa server is listenning to port ${port}`)
})