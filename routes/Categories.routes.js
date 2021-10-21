const categories = require('../controllers/Categories.controller')
const router = require('express').Router()

router.get('/', categories.getAllCategories)

router.post('/', categories.createCategory)

router.patch('/:id', categories.updateCategory)

router.delete('/:id', categories.deleteCategory)

module.exports = router