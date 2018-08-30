'use strict'

const tableName = 'contribution'

const up = knex => knex.schema.createTable(tableName, (table) => {
    table.primary(['user', 'repository'])
    table.integer('user')
    table.foreign('user').references('user.id').onDelete('CASCADE')
    table.integer('repository')
    table.foreign('repository').references('repository.id').onDelete('CASCADE')
    table.integer('line_count').unsigned().notNullable()
})

const down = knex => knex.schema.dropTableIfExists(tableName)

export {
    up,
    down
}