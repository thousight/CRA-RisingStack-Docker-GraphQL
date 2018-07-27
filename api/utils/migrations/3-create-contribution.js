'use strict'

const tableName = 'contribution'

const up = knex => knex.schema.createTable(tableName, (table) => {
    
})

const down = knex => knex.schema.dropTableIfExists(tableName)

export default {
    up,
    down
}