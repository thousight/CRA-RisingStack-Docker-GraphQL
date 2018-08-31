import joi from 'joi'
import knex from '../../utils/knex'

const insertSchema = joi.object({
    repository: joi.number().integer().required(),
    user: joi.number().integer().required(),
    line_count: joi.number().integer().required(),
}).required()

export default async (_, params) => {
    const contribution = joi.attempt(params, insertSchema)

    const addedContribution = await knex('contribution').insert(contribution).returning('*').then(result => result[0])
    const foundRepo = await knex('repository').where({ 'id': contribution.repository }).first()
    const foundUser = await knex('user').where({ 'id': contribution.user }).first()

    const result = {
        ...addedContribution,
        repository: foundRepo,
        user: foundUser,
    }
    
    return result
}