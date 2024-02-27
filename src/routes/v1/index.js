const express = require('express');

const cityRoutes = require('./city-routes')
const flightRoutes = require('./flights-routes');
const airportsRoutes = require('./airports-routes');

const router = express.Router();

router.use('/city', cityRoutes);
router.use('/flights', flightRoutes);
router.use('/airports', airportsRoutes);

module.exports = router;