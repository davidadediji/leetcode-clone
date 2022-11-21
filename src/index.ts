import express, { Express, Request, Response } from 'express'
import task from './routes/tasks'
import { dbConnect } from './db/connect';


const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/hello', (req: Request, res: Response): void => {
    res.send('typescript node and express');
})

app.use('/api/v1/tasks', task);

app.listen(4500, (): void => {
    console.log(`listening on port 4500`);
    dbConnect();
})