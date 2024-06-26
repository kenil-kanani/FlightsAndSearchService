const express = require('express')

const CityController = require('../../controllers/city-controller')

const router = express.Router()

router.post('/', CityController.create);
router.post('/bulk', CityController.createMany);
router.delete('/:id', CityController.destroy);
router.get('/:id', CityController.get);
router.get('/', CityController.getAll);
router.patch('/:id', CityController.update);
router.get('/:id/airports', CityController.getAirportsOfCity);

module.exports = router;