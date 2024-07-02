import mongoose from "mongoose";


//user model
const userModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }, 
    password : {
        type : String,
        required : true
    }
},{
    timestamp : true
});

const User = new mongoose.Model("User",userModel);
module.exports = User;