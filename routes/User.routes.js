const user = require('../controllers/User.controller')

const router = require('express').Router()

router.post('/register', user.createUser)

router.post('/login', user.loginUser)

module.exports = router