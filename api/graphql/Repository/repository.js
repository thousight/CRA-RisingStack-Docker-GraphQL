import joi from 'joi'
import knex from '../../utils/knex'

const readSchema = joi.object({
  id: joi.number().integer().required(),
}).required()

export default async (_, params) => {
  const query = joi.attempt(params, readSchema)

  const foundRepo = await knex('repository')
    .select(['repository.*', knex.raw('to_json(user.*) as user')])
    .leftJoin('user', 'repository.owner', 'user.id')
    .where({ 'repository.id': query.id })
    .first()
  console.log(foundRepo);

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