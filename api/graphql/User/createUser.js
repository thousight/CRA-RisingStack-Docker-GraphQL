import knex from '../../utils/knex'

export default (_, { id, login, avatar_url, html_url, type }) => {
    knex('user')
    .returning([ 'id', 'login', 'avatar_url', 'html_url', 'type' ])
    .insert({ id, login, avatar_url, html_url, type })
    .then(res => {
        console.log(res);
        return res
    })
    .catch(error => {
        console.log(error);
        return error
    })
}