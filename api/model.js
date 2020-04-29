
const db = require('../data/dbConfig.js');

module.exports = {
  findAllCars,
  findAllMotorcycles,
  removeMoto,
  addMoto
}

function findAllCars(){
  return db('cars')
}

function findAllMotorcycles(){
  return db('motorcycles')
}

function removeMoto(id){
  return db('motorcycles')
    .where({ id })
    .del()
}

function addMoto(moto){
  return db('motorcycles')
    .insert(moto)
}