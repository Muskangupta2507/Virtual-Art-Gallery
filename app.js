const express=require('express')
const app=express()
const path=require('path')
const port=8080;
const mongoose=require('mongoose');


// mongoose.connect('mongodb://127.0.0.1:27017/virtualGallery')
mongoose.connect('mongodb+srv://07muskangupta:<password>@cluster0.cehrzbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{console.log("DB Connected")})
.catch((err)=>{
    console.log("DB error")
    console.log(err)}
);



app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(port,()=>{
    console.log(`server conneccted at port ${port}`)
})