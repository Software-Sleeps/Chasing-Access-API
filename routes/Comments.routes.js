const comments = require('../controllers/Comments.controller')
const router = require('express').Router()

router.get('/post/:postId', comments.getCommentsByPost)

router.get('/:id/post/:postId', comments.getCommentById)

router.post('/:username/post/:postId', comments.createComment)

router.patch('/:id/:username/post/:postId', comments.updateComment)

router.delete('/:id/:username/post/:postId', comments.deleteComment)

module.exports = router