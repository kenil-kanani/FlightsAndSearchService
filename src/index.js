const express = require('express');

const { PORT } = require('./config/serverConfig.js')
const ApiRoutes = require('./routes/index')

const db = require('./models/index');

const setUpAndStartServer = async () => {

    const app = express();

    // express.json(): Designed to parse incoming requests with JSON payloads and make the parsed data available as a JavaScript object on the req.body property.
    app.use(express.json());
    // express.urlencoded(): Handles incoming requests where the data is submitted in the traditional URL-encoded format most commonly used by HTML forms. This middleware also populates the req.body property.
    app.use(express.urlencoded({ extended: true }));

    app.use('/flightandsearchservice/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started at port : ${PORT}`)
        // Sync Database
        // Before Synchronisation, we are not able to use some of the sequelize methods i.e. const city = cityRepository.getCityById(1);  const airports = city.getAirports();
        // Sync needs to be done one time only after first time you created models and done associations , because sync is heavy operation
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }
    })
}

setUpAndStartServer();