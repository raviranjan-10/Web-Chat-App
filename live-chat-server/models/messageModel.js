import mongoose from "mongoose";

//message model
const messageModel = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
            ref : "User"
    },
    reciever : {
        type : mongoose.Schema.Types.ObjectId,
            ref : "User"
    },
    chat : {
        type : mongoose.Schema.Types.ObjectId,
            ref : "Chat"
    },
},{
    timestamp : true
});

const Message = mongoose.Model("Message",messageModel);
module.exports = Message;