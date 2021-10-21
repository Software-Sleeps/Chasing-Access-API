const users = require('../controllers/User.controller')
const router = require('express').Router()

router.post('/', user.createUser)

module.exports = router