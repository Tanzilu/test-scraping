const express = require('express')
const { find } = require('../controllers/searchController')
const findRouter = express.Router()

findRouter.post('/find', find)

module.exports = findRouter