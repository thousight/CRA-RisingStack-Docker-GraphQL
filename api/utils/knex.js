import db from 'knex'
import path from 'path'

const knex = db({
  client: 'pg',
  connection: process.env.PG_URI,
  searchPath: process.env.POSTGRES_SCHEMA || 'public',
  migrations: {
    directory: path.join(__dirname, './migrations')
  }
})

export const getColumns = tableName => knex('information_schema.columns')
  .where({ table_name: tableName })
  .select('column_name')
  .options({ rowMode: 'array' })
  .then(result => result.map(item => item[0]))

export const addPrefixAliasToColumns = (tableName, columns) => columns.map(column => `${tableName}.${column} as ${tableName}_${column}`)

export const addJoinedTableColumnDataIntoObject = (object, foreignKey, joinedTableName, joinedTableKeys, isClean = true) => (
  joinedTableKeys.reduce((result, key) => {
    const keyWithAlias = `${joinedTableName}_${key}`
    const valueFromKeyWithAlias = result[keyWithAlias]
    let foreignKeyValue = result[foreignKey]

    if (typeof foreignKeyValue !== 'object') {
      foreignKeyValue = {}
    }
  
    if (valueFromKeyWithAlias) {
      foreignKeyValue[key] = valueFromKeyWithAlias
      result[foreignKey] = foreignKeyValue
    }
    
    if (isClean) {
      delete result[keyWithAlias]
    }
  
    return result
  }, object)
)

export default knex