import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    img:{
        type:String,
        required:true,
        trim:true
    },
    desc:{
        type:String,
        required:true,
        trim:true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

module.exports=Image;