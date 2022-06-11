

const Task = require("../models/task");

const getAllTask=async (req, res)=>{
    try{
        const task = await Task.find({});
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const createTask = async (req, res)=>{
    try{
        const tasks = await Task.create(req.body)
        res.status(201).json({tasks});
    }catch(err){
        console.log(err);
        res.status(500).json({msg: err});
    }
}

const deleteTask = (req, res)=>{
    res.json(req.body);
}

const updateTask = (req, res) =>{
    res.send("update a task");
}

const getTask = async (req, res) => {
    

    try{
        const tasks = await Task.findOne({id: req.params.id});
        res.status(501).json({tasks});
    }catch(err){
        res.status(200)
    }


}

module.exports = {
    getAllTask, getTask,  deleteTask, updateTask, createTask
}