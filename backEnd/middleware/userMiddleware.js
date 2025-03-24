require("dotenv").config()
const jwt = require('jsonwebtoken')

function userMiddleware(req, res, next) {
    try{
    const token = req.headers.token
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    if (decode) {
        req.userId = decode.id
        next()
    }
    else {
        res.status(401).json({
            message: "You are not authorized"
        })
    }
}catch(e){
    res.status(500).json({
        message: "Error verifying token",
        error: e
        })
}
}

module.exports = {userMiddleware: userMiddleware}