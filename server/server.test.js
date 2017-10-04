const request = require('supertest')
const expect = require('expect')
const app = require('./server.js').app
describe('Server', () => {

  describe('GET /', () => {
    it('Should return Hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            message: 'Hello world!'
          })
        })
        .end(done)
    })
  })
  
  
  describe('GET /users', () => {
    it('Should check if you exist in array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Juan David',
            age: 28
          })
        })
        .end(done)
    })
    })
  
})


