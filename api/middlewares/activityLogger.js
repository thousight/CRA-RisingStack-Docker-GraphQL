import logger from '../utils/logger'

export default () => async function activityLogger(ctx, next) {
    const start = Date.now()
      
    const { method, originalUrl } = ctx.request
    try {
      await next()
    } catch (err) {
      const errorString = `${method}: ${originalUrl}`

      console.error(errorString)
      logger.error.info(errorString, { error: err.message })
      throw err
    }

    const ms = new Date() - start
    const { status } = ctx.response
    const loggingString = `${method} ${originalUrl} -> ${status} ${ms}ms`

    if (status >= 400) {
        console.error(loggingString)
        logger.error.info(loggingString)
    } else {
        console.log(loggingString)
        logger.access.info(loggingString)
    }
  }