const express = require('express');

const AirportController = require('../../controllers/airport-controller')

const router = express.Router();

router.post('/', AirportController.create);

module.exports = router;