// 1
const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

const userModel = require('../models/user')


// 2

// signup
router.post('/signup',(req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(404).json({
                error: err
            })
        } else {
            const newUser = new userModel({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })

            newUser
                .save()
                .then(user => {
                    res.json({
                        msg: "successful signup",
                        userInfo: user
                    })
                 })
                .catch(err => {
                 res.status(500).json({
                     err: err.message
                })
            })
        }
    })

    
})


// login
router.post('/login', (req, res) => {

})




// 3
module.exports = router