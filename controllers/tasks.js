const task = require("../models/task");


const getAllTask= (req, res)=>{
    res.send("all items");
}
const createTask = (req, res)=>{
    res.json(req.body);
}

const deleteTask = (req, res)=>{
    res.json(req.body);
}

const updateTask = (req, res) =>{
    res.send("update a task");
}

const getTask = (req, res)=>{
    res.json({id: req.params.id});
}

module.exports = {
    getAllTask, getTask,  deleteTask, updateTask, createTask
}