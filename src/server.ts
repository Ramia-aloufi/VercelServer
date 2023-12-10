import express from 'express'
import dotenv, { config } from 'dotenv'
import mongoose from 'mongoose'

import productRoute from './router/product'
import { dev } from './config'


dotenv.config()

const app = express()

const port = dev.app.port
const mongoURL = dev.db.url





const databaseConnect = async()=>{
    try{
    await mongoose.connect(mongoURL!)
    console.log('Database Connected');
    }catch(err){
        console.log(err);
    }

}

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/product',productRoute)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('*',(req,res)=>{
    res.status(404).send('Sorry, the requested page was not found.');
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
    databaseConnect()
})


