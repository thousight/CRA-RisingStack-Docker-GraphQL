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

    await knex('repository').insert(repo).returning('*')
    const foundRepo = await knex('repository').where({ 'repository.id': repo.id }).leftJoin('user', 'repository.owner', 'user.id').options({ nestTables: true}).first()
    
    const result = {
      ...foundRepo,
      owner: {
        id: foundRepo.owner,
        login: foundRepo.login,
        avatar_url: foundRepo.avatar_url,
        type: foundRepo.type,
      }
    }
    
    console.log(result);
    
    return result
}