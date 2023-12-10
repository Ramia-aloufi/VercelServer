import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import productRoute from './router/product'


dotenv.config()

const app = express()

const port = process.env.PORT || 8000
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017'





const databaseConnect = async()=>{
    try{
    await mongoose.connect(mongoURL)
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


