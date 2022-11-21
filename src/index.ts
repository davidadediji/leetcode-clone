import express, { Express, Request, Response } from 'express'
import task from './routes/tasks'
import { dbConnect } from './db/connect';
import dotenv from 'dotenv';

dotenv.config();
const url = String(process.env.DBCONNECTION);
const port = process.env.PORT
//Express
const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//middlewares
app.use('/api/v1/tasks', task);

app.listen(port, (): void => {
    console.log(`listening on port ${port}`);
    dbConnect(url);
})