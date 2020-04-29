const request = require('supertest');
const server = require('../api/server.js');

describe('motos router', function () {
  it('should run the tests', function () {
    expect(true).toBe(true);
  })
})

describe("GET /api/motorcycles", function(){
  it('should return json format body', function(){
    return request(server).get('/api/motorcycles')
      .then(res => {
        expect(res.type).toMatch(/json/)
      })
  })
})

describe('POST /api/motorcycles', function () {
  it('should return a status code of 201 and add to array', function () {
    return request(server)
      .post('/api/motorcycles')
      .send({ make: "test", model: "test", odometer: "123", price: "123" })
      .then(res => {
        expect(res.status).toBe(201);
      })
  })

  it('should return json format body', function(){
    return request(server)
      .post('/api/motorcycles')
      .send({ make: "test", model: "test", odometer: "123", price: "123" })
      .then(res => {
        expect(res.type).toMatch(/json/)
      })
  })
})

describe('DELETE /api/motorcycles/:id', function () {
  it('should return a 204', function () {
    return request(server)
      .delete('/api/motorcycles/99')
      .then(res => {
        expect(res.status).toBe(204)
      })
  })

  it('should return a 404 if no moto is found', function(){
    return request(server)
      .delete('/api/motorcycles')
        .then(res => {
          expect(res.status).toBe(404)
        })
  })
})