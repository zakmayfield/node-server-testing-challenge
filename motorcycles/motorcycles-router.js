const router = require('express').Router();

const Motorcycles = require('../api/model.js');

// /api/motorcycles
router.get('/', (req, res) => {
  Motorcycles.findAllMotorcycles()
    .then(motos => {
      res.status(200).json(motos)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/', (req, res) => {
  Motorcycles.addMoto(req.body)
    .then(moto => {
      res.status(201).json(moto)
    })
    .catch(err => {
      res.status(500).json({ err: "server error" })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  Motorcycles.removeMoto(id)
    .then(count => {
      res.status(204).json(count)
    })
    .catch(err => {
      res.status(500).json({ err: "server error" })
    })
})

module.exports = router;
