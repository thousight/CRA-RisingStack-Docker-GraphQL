'use strict'

const tableName = 'repository'

const up = knex => knex.schema.createTable(tableName, (table) => {
    table.integer('id').unsigned().primary()
    table.integer('owner').notNullable()
    table.foreign('owner').references('user.id').onDelete('CASCADE')
    table.string('full_name').notNullable()
    table.string('description').nullable()
    table.string('html_url').nullable()
    table.string('language').nullable()
    table.integer('stargazers_count').notNullable()
})

const down = knex => knex.schema.dropTableIfExists(tableName)

export {
    up,
    down
}