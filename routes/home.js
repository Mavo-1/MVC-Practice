//Handles initial GET request for the homepage
//Handles POST method request for adding a new item

const express = require('express')
const { builtinModules } = require('module')
const router = express.Router()
const homeController = require()


router.get('/',homeController.getIndex) //read
router.post('/new',homeController.createItem)//create

module.exports = router