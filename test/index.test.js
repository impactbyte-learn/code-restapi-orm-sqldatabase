const request = require('supertest')
const app = require('../app')

describe('Supertest the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/')
      .expect(200)
  })
})

describe('Callback test the root path', () => {
  test('It should response the GET method', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})

describe('Promise test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe('Async Await test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
