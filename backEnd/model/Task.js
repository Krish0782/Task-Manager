const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    userId : {type: ObjectId, required: true, ref: 'User'}
})

const taskModal = mongoose.model('Task', TaskSchema)
module.exports = {taskModal}