const { userModal } = require('../model/User')
const Router = require('express')
const userRouter = Router()
require("dotenv").config()
const jwt = require('jsonwebtoken')

userRouter.post('/register', async (req, res) => {
    const { username, password, email } = req.body
    try {
        const user = await userModal.findOne({ email })
        if (user) {
            return res.status(400).json({ message: 'User already exists' })
        }
        await userModal.create({ username, password, email })
        res.status(201).json({ message: 'User created successfully' })
    } catch (e) {
        res.status(500).json({
            message: "Error creating user"
        })
        console.log(e)
    }
})

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModal.findOne({
            email: email,
            password: password
        })
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.status(200).json({
                message: 'User logged in successfully',
                token: token
            })
        } else {
            res.status(403).json({ message: 'Invalid Credentials' })
        }
    } catch (e) {
        res.status(500).json({
            message: "Error logging in user",
            error: e
        })
    }
})

module.exports = {
    userRouter
}
