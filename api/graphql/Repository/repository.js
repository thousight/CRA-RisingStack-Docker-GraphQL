import joi from 'joi'
import knex, {
  getColumns,
  addPrefixAliasToColumns,
  addJoinedTableColumnDataIntoObject,
} from '../../utils/knex'

const readSchema = joi.object({
  id: joi.number().integer().required(),
}).required()

export default async (_, params) => {
  const query = joi.attempt(params, readSchema)

  const userColumns =  await getColumns('user')
  const userColumnsWithPrefixes = addPrefixAliasToColumns('user', userColumns)

  const foundRepo = await knex('repository')
    .select(['repository.*', ...userColumnsWithPrefixes])
    .leftJoin('user', 'repository.owner', 'user.id')
    .where({ 'repository.id': query.id })
    .first()

  return addJoinedTableColumnDataIntoObject(foundRepo, 'owner', 'user', userColumns, true)
}