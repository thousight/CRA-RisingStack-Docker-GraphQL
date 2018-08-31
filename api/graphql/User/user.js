import joi from 'joi'
import knex from '../../utils/knex'

const readSchema = joi
  .object({
    id: joi.number().integer(),
    login: joi.string(),
  })
  .xor('id', 'login')
  .required()

export default async (_, params) => {
  const query = joi.attempt(params, readSchema)

  return await knex('user').where(query).first()
}