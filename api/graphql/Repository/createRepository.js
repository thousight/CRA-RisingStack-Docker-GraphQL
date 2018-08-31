import joi from 'joi'
import knex from '../../utils/knex'

const insertSchema = joi.object({
    id: joi.number().integer().required(),
    owner: joi.number().integer().required(),
    full_name: joi.string().required(),
    description: joi.string(),
    html_url: joi.string().uri(),
    language: joi.string(),
    stargazers_count: joi.number().integer(),
}).required()

export default async (_, params) => {
    const repo = joi.attempt(params, insertSchema)

    const addedRepo = await knex('repository').insert(repo).returning('*').then(result => result[0])
    const foundOwner = await knex('user').where({ 'id': repo.owner }).first()

    const result = {
        ...addedRepo,
        owner: foundOwner
    }
    
    return result
}