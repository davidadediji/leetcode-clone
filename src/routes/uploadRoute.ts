import { Router } from 'express';
import uploadFileController from '../controllers/uploadController';
import { fileMulter } from '../middlewares/file';
import { bucket } from '../utils/uploadImage';

const router = Router();

//@ts-ignore
router.post('/x-upload', fileMulter, uploadFileController);

export const fileRoutes = router;