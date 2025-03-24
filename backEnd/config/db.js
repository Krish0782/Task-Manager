const mongoose = require('mongoose')
require("dotenv").config();
console.log(process.env.MONGODB_URI)
const connectDB = async ()=>{
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB'))
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB