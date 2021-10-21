const categories = require('../controllers/Categories.controller')
const router = require('express').Router()

router.get('/', categories.getAllCategories)

module.exports = router