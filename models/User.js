import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        trim: true,
        required : true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    profilePic:{
        type:String,
        default:""
    },
    role : {
        type: String,
        required: true,
        enum:["Artist","User"]
    },
    picUpload : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        }
    ]
},{timestamps:true})

let User = mongoose.model('User', userSchema);
module.exports = User;