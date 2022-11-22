import { Request, Response } from 'express'
import { Error } from 'mongoose'
import Task from '../models/Task.model'

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const task = await Task.find({})
        res.status(200).json({ success: true, task, amount: task.length })
    } catch (error: any) {
        res.status(500).json({ msg: error.message })
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ success: true, task })
    } catch (error: any) {
        res.status(500).json({ msg: error.message })
    }

}

export const getTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID });

        if (!task) {
            return res.status(404).json({ msg: `No task with ID: ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error: any) {
        res.status(500).json({ msg: error.message })
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ task: null, success: true })
    } catch (error: any) {
        res.status(500).json({ msg: error.message })
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })

        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ id: taskID })

    } catch (error:any) {
        res.status(500).json({msg:error.message})
    }
}