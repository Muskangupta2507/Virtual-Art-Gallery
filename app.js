import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import ejsMate from 'ejs-mate';
import methodOverride from 'method-override';
// import authRoutes from './routes/auth.routes.js';
// import playlistRoutes from './routes/playlist.routes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.json()) //to parse the incoming requests with JSON payloads(from body of request)
app.use(cookieParser()); // to parse through cookies

const uploadDir = path.join(process.cwd(), 'backend/public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware to serve static files from the backend/public/uploads directory
app.use('/uploads', express.static(uploadDir));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get("/",(req,res)=>{
    res.send("hello");
})
// app.use('/api/auth',authRoutes);
// app.use('/api/playlist',playlistRoutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running at port ${PORT}`)
})