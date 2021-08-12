const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.users_post_signup = (req, res) => {

    const {username, email, password} = req.body

    // 기존에 가입 또는 사용중인 메일이 있는지 등록 여부 확인 => 패스워드 암호화 => 디비에 저장
    userModel
        .findOne( {email})
        .then(user => {
            if (user) {
                return res.status(400).json({
                    err: "기존에 등록된 이메일이 있습니다, 다른 이메일로 가입 바랍니다."
                })
            } else {
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                        return res.status(404).json({
                            error: err
                        })
                    } else {
                        const newUser = new userModel({
                            username,
                            email,
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
            }
        })

}

exports.users_post_login = (req, res) => {

    const {email, password} = req.body

    // 회원가입 여부
    userModel
        .findOne( {email})
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    err: "기존에 가입된 메일 또는 아이디가 없습니다."
                })
            } else {
                // 이메일, 또는 아이디가 있을시 => 패스워드 매칭
                bcrypt.compare(password, user.password, (err, matched) => {
                    if (err || matched === false) {
                        return res.status(401).json({
                            msg: "비밀번호가 틀렸습니다."
                        })
                    } else {
                        // 패스워드가 맞으면
                        // jsonwebtoken 생성
                        const token = jwt.sign(
                            
                                {email: user.email, userId: user._id},
                                process.env.SECRET_KEY,
                                {expiresIn: '1h'}
                            )
                        res.json({
                            msg: "로그인이 완료되었습니다.",
                            token: token
                        })
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

exports.user_get_current = (req, res) => {
    // res.json(req.user)
    userModel
        .findById(req.user.userId)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).json({
                msg: err.message
            })
        })
}