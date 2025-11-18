
 import express from 'express';
 import authRoutes from './routes/auth.routes.js';
 import { connectDb } from './db/connectDb.js';
 import cookieParser from 'cookie-parser';
 import "dotenv/config.js";

 const PORT=process.env.PORT || 5000;
 const app = express();

 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cookieParser());
 app.use('/api/auth',authRoutes)
 app.get('/',(req,res)=>{
    res.send('Hello World!');
 });
 app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDb();
 });
 export default app;