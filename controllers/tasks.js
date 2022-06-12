const Task = require("../models/task");
const getAllTask=async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }catch(err){
        res.status(500).json({msg:err});
    }
}
const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task});
    }catch(err){
        console.log(err);
        res.status(500).json({msg: err});
    }
}
const getTask = async (req, res) => {
    try{
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if(!task){
            return res.status(404).json({msg:`NO TASK FOUND WITH ID: ${req.params.id}`});
        }
        res.status(501).json({task});
    }catch(err){
        res.status(200).json({msg: err});
    }
}
const deleteTask = async (req, res)=>{
    try{
        const task  = await Task.findOneAndDelete({_id: req.params.id});
        if(!task){
            return res.status(404).json({msg:`no task found with id: ${req.params.id}`});
        }
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg: err});
    }
}

const updateTask = async (req, res) =>{
    const task = await Task.findOneAndUpdate({_id:req.params.id}, req.body, {
        new:true,
        runValidators:true,
    });
    if(!task){
        res.status(404).json({msg: `task with id: ${req.body.id} not found`});
    }
    res.status(200).json({task});
}


module.exports = {
    getAllTask, getTask,  deleteTask, updateTask, createTask
}