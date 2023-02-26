const express = require('express') 
const app = express()
const config = require("@savvydeco/config")



app.listen(config.PORT, ()=>{console.log(`This app is live on port ${config.PORT}`)})