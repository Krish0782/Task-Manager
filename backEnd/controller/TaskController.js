const Router = require('express')
const taskRouter = Router()
const { taskModal } = require('../model/Task')

const { userMiddleware } = require('../middleware/userMiddleware')


taskRouter.post('/create', userMiddleware, async (req, res) => {
    const { title, description } = req.body
    try {
        await taskModal.create({ title, description, userId: req.userId })
        res.status(201).json({ message: 'Task created successfully' })
    } catch (e) {
        res.status(500).json({
            message: "Error creating task",
            error: e
        })
    }
})

taskRouter.get('/all', userMiddleware, async (req, res) => {
    try {
        const tasks = await taskModal.find({ userId: req.userId }).populate("userId", "username")
        res.status(200).json(tasks)
    } catch (e) {
        res.status(500).json({
            message: "Error fetching tasks",
            error: e
        })
    }
})

taskRouter.put('/update/:id', userMiddleware, async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    try {
        const updatedTask = await taskModal.findByIdAndUpdate(id, { title, description, userId: req.userId })
        if (!updatedTask) {
            res.status(404).json({ message: 'Task not found' })
        }
        else {
            res.status(200).json({ message: 'Task updated successfully', updatedTask })
        }
    } catch (e) {
        res.status(500).json({
            message: "Error updating task",
            error: e
        })
    }
})

taskRouter.delete('/delete/:id', userMiddleware, async (req, res) => {
    const { id } = req.params
    try {
        await taskModal.findByIdAndDelete({ _id: id })
        res.status(200).json({ message: 'Task deleted successfully' })
    } catch (e) {
        res.status(500).json({
            message: "Error deleting task",
            error: e
        })
    }
})


module.exports = { taskRouter: taskRouter }