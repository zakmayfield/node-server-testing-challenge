const request = require('supertest');
const server = require('../api/server.js');

describe('cars router', function(){
  it('should run the tests', function(){
    expect(true).toBe(true);
  })
})

describe('GET /api/cars', function(){
  it('should respond with status 200', function(){
    return request(server).get('/api/cars')
      .then(res => {
        expect(res.status).toBe(200);
      })
  })

  it('should return an array of cars', function(){
    return request(server).get('/api/cars')
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true);
      })
  })
})