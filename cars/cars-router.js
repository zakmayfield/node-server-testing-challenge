const router = require('express').Router();

const Cars = require('../api/model.js');

// /api/cars
router.get('/', (req, res) => {
  Cars.findAllCars()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => console.log(err))
})

module.exports = router;