const express = require('express')

const FlightController = require('../../controllers/flight-controller')

const { FlightMiddlewares } = require('../../middlewares/index')

const router = express.Router()

router.post(
    '/',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/', FlightController.getAll);
router.get('/:id', FlightController.get);
router.patch('/:id', FlightController.update);

module.exports = router;