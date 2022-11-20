import {Request, Response} from 'express'

export const getAllTasks = (req:Request, res:Response)=>{
    res.send('all tasks')
}

export const createTask = async (req:Request, res:Response)=>{
    res.send('create task')
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