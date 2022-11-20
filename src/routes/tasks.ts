import express, { Express } from 'express';
import {
	getAllTasks,
	createTask,
	deleteTask,
	getTask,
	updateTask,
} from '../controllers/tasks';
const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask); 
router.delete('/:id', deleteTask);

export default router;
