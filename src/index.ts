import express, {Express, Request, Response} from 'express'



const app:Express = express();

app.get('/', (req:Request, res:Response)=>{
    res.send('typescript node and express')
})


app.listen(4500, ()=>{
    console.log(`listening on port 4500`)
})