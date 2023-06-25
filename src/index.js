 const express = require('express');
 const bodyParser = require('body-parser');
 const cityRepo = require('./repository/city-repository')
 const {PORT} = require('../src/config/serverConfig.js')

 const setUpAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.listen(PORT , async ()=>{
        console.log(`Server Started at port : ${PORT}`)
        let ref = new cityRepo();
    })
 }

 setUpAndStartServer();