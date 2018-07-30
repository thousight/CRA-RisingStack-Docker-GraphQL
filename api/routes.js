import Router from 'koa-router'

import hello from './controllers/hello/hello'

const router = new Router({ prefix: '/api' })

router.get('/', hello)

export default router