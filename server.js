//todo - Declare Variables
const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const PORT = 4141
const mongoose = require('mongoose')


        //*import function/routs




//todo - Connect to Database


//todo - Set Middleware
app.set("view engine",'ejs')
app.set(express.static("public"))
app.set(urlencoded({extended: true}))

//todo - Set Routes

//todo - Start Server