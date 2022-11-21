import {Request, Response} from 'express'
import Task from '../models/Task.model'

export const getAllTasks = (req:Request, res:Response)=>{
    res.send('all tasks')
}

export const createTask = async (req:Request, res:Response)=>{
    const task = await Task.create(req.body)
    res.status(201).json({success:true, task})
}

export const getTask = (req:Request, res:Response)=>{
    res.send('get single task')
}

export const updateTask = (req:Request, res:Response)=>{
    res.send('update a task')
}

export const deleteTask = (req:Request, res:Response)=>{
    res.send('delete task')
}