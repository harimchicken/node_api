const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        // 1
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded;
        next()

    } catch (error) {
        return res.json(408).json({
            message: 'Auth failed'
        })
    }
}