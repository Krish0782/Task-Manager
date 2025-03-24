const express = require('express')
const cors = require('cors')
const connectDB = require("./config/db")
const dotenv = require('dotenv')
const { userRouter } = require('./controller/UserController')
const { taskRouter } = require('./controller/TaskController')
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.use("/tasks",taskRouter)

connectDB()

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})