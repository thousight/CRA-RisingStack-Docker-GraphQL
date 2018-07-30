import axios from 'axios'
import config from '../../../config.json'

export default (_, { repository, query }) => axios.get(`https://api.github.com/repos/${repository}/contributors`, {
        headers: {
            Authorization: `bearer ${config.github}`
        }
    })
    .then(res => {
        let search = query.split(':')
        let result = res.data
            .filter(contributor => contributor[search[0]]+'' === search[1])
            .map(contributor => ({
                user: contributor.node_id,
                repository: {
                    html_url: contributor.repos_url
                },
                line_count: contributor.contributions
            }))
        
        return result
    })
    .catch(error => {
        console.log(error.request);
        console.log(error.response.data);
    })