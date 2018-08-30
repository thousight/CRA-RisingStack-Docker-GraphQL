'use strict'
import knex from './knex'

knex.migrate.latest()
  .then(() => {
    console.log('Database synced successfully!')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })