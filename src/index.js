 const express = require('express');

 const {PORT} = require('../src/config/serverConfig.js')

 const setUpAndStartServer = async () => {
    // create the express object
    const app = express();
    app.listen(PORT , ()=>{
        console.log(`Server Started at port : ${PORT}`)
    })
 }

 setUpAndStartServer();