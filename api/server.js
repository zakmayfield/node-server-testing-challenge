//imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//route imports
const carsRouter = require('../cars/cars-router.js');
const motorcyclesRouter = require('../motorcycles/motorcycles-router.js');


//declare server
const server = express();

//global mw
server.use(helmet());
server.use(express.json());
server.use(cors());

//routes
server.use('/api/cars', carsRouter);
server.use('/api/motorcycles', motorcyclesRouter);

//initial api
server.get('/api', (req, res) => {
  res.status(200).json({ api: "on" });
})

//export server
module.exports = server;