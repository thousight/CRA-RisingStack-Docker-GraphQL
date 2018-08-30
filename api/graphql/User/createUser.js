import joi from 'joi'
import knex from '../../utils/knex'

const insertSchema = joi.object({
    id: joi.number().integer().required(),
    login: joi.string().required(),
    avatar_url: joi.string().uri(),
    html_url: joi.string().uri(),
    type: joi.string(),
}).required()

export default async (_, params) => {
    const user = joi.attempt(params, insertSchema)

    return await knex('user')
    .insert(user)
    .returning('*')
}