// 1
const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/check-auth')


// 2
const {
    users_post_signup,
    users_post_login,
    user_get_current
} = require('../controllers/user')

// signup
router.post('/signup', users_post_signup)


// login
router.post('/login', users_post_login)

// 현재 로그인된 유저정보 불러오는 API
router.get('/current', checkAuth, user_get_current)




// 3
module.exports = router