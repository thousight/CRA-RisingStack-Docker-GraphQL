import server from '../../server'

describe('/api', () => {
    it('shoud respond with status 200 and hello message', () => {
        request(server)
            .get('/api')
            .expect(200, "Hello Node.js!")
            .end()
    })
})