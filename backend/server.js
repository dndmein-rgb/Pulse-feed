
 import express from 'express'; 
 import cookieParser from 'cookie-parser';
 import "dotenv/config.js";

 import authRoutes from './routes/auth.route.js';
 import userRoutes from './routes/user.route.js';
 import postRoutes from './routes/post.route.js';
 import { connectDb } from './db/connectDb.js';
 import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
   cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
   api_key:process.env.CLOUDINARY_API_KEY,
   api_secret:process.env.CLOUDINARY_API_SECRET,
})
 
 const PORT=process.env.PORT || 5000;
 const app = express();

 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cookieParser());


 app.use('/api/auth',authRoutes)
 app.use('/api/users',userRoutes)
 app.use('/api/posts',postRoutes)

 app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDb();
 });
 export default app;