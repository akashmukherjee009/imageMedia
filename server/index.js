import express from 'express';
import connectDB from './db.js';
import postRoutes from './routes/postRoute.js';
import bodyParser from 'body-parser';

const app= express();

app.use(bodyParser.json())
app.use('/posts',postRoutes)


app.listen(5000,()=>{
    console.log('Server Connected.........');
    connectDB()
    
})