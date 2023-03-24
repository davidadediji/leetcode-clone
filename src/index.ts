import express, { Express } from 'express';
import task from './routes/tasks';
import { dbConnect } from './db/connect';
import dotenv from 'dotenv';
import { notFound } from './middlewares/not-found';
import bodyParser from 'body-parser';
import { fileRoutes } from './routes/uploadRoute';
import cors from 'cors'

dotenv.config();
const url = String(process.env.DBCONNECTION);
const port = process.env.PORT;
//Express
const app: Express = express();

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(express.json())
app.use('/api/v1/tasks', task);
app.use('/api/v1/file', fileRoutes)
app.use(notFound);

app.listen(port, (): void => {
	console.log(`listening on port ${port}`);
	dbConnect(url);
});
