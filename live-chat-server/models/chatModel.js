import mongoose from "mongoose";

//defining chatModel Schema
const chatModel = new mongoose.Schema({
    chatName : String,
    isGroupChat : Boolean,
    users : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    latestMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"
    },
    groupAdmin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
});

const Chat = mongoose.Model("Chat",chatModel);
module.exports = Chat;