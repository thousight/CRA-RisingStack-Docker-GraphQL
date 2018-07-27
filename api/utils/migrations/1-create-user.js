'use strict'

const tableName = 'user'

const up = knex => knex.schema.createTable(tableName, (table) => {

})

const down = knex => knex.schema.dropTableIfExists(tableName)

export default {
    up,
    down
}