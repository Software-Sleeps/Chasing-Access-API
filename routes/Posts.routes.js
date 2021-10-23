const posts = require('../controllers/Posts.controller')
const router = require('express').Router()

router.get('/:categoryId', posts.getPostsPerCategory)

router.post('/:username/:categoryId', posts.createPost)

router.get('/:categoryId/:id', posts.getPostById)

router.patch('/:username/:categoryId/:id', posts.updatePost)

router.delete('/:username/:categoryId/:id', posts.deletePost)

module.exports = router