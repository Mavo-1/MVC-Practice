//todo - Declare Variables
const { urlencoded } = require('body-parser')
const { Console } = require('console')
const express = require('express')
const app = express()
const PORT = 4141
const mongoose = require('mongoose')


        //*import function/routs
const connectDB = require('./config/database')

require('dotenv').config({path: './config/.env'})

//todo - Connect to Database
connectDB()

//todo - Set Middleware
app.set("view engine",'ejs')
app.set(express.static("public"))
app.set(urlencoded({extended: true}))

//todo - Set Routes

//todo - Start Server
app.listen(PORT, () => console.log(`Server ${PORT} is running! Go catch it!`))