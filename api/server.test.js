const request = require('supertest');
const server = require('./server.js');
require('dotenv').config();

describe('server runs', function(){
  it('should return status 200', function(){
    return request(server).get('/api')
      .then(res => {
        expect(res.status).toBe(200);
      })
  })

  it('should return api with a value of on', function(){
    return request(server).get('/api')
      .then(res => {
        expect(res.body.api).toBe('on')
      })
  })
})

describe('server should have a certain env var', function(){
  it('should contain env var of suhhdude', function(){
    expect(process.env.SOME_VAR).toBe('suhhdude')
  })
})