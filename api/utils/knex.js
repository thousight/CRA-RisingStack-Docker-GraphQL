import knex from 'knex'
import path from 'path'

export default knex({
  client: 'pg',
  connection: process.env.PG_URI,
  searchPath: process.env.POSTGRES_SCHEMA || 'public',
  migrations: {
    directory: path.join(__dirname, './migrations')
  }
})