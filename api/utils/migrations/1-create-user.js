'use strict'

const tableName = 'user'

const up = knex => knex.schema.createTable(tableName, (table) => {
    table.integer('id').unsigned().primary()
    table.string('login').notNullable()
    table.string('avatar_url').nullable()
    table.string('html_url').nullable()
    table.string('type').nullable()
})

const down = knex => knex.schema.dropTableIfExists(tableName)

export {
    up,
    down
}