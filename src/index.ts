import express, { Express, Errback, Request, Response, NextFunction } from 'express';
import task from './routes/tasks';
import { dbConnect } from './db/connect';
import dotenv from 'dotenv';
import { notFound } from './middlewares/not-found';
import multer from 'multer';
import bodyParser from 'body-parser';
import { uploadImage } from './utils/uploadImage';

dotenv.config();
const url = String(process.env.DBCONNECTION);
const port = process.env.PORT;
//Express
const app: Express = express();
const multerMid = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 5 * 1024 * 1024,
	},
});
app.use(multerMid.single('file'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//middlewares
app.use('/api/v1/tasks', task);
app.post('/uploads', async (req, res, next) => {
	try {
		const myFile = req.file;
		const imageUrl = await uploadImage(myFile);
		res.status(200).json({
			message: 'Upload was successful',
			data: imageUrl,
		});
	} catch (error) {
		next(error);
	}
});
app.use((err:Errback, req:Request, res:Response, next:NextFunction) => {
	res.status(500).json({
		error: err,
		message: 'Internal server error!',
	});
	next();
});
app.use(notFound);

app.listen(port, (): void => {
	console.log(`listening on port ${port}`);
	dbConnect(url);
});
