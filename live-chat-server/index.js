//server setup
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("API is Running");
});

const PORT  = process.env.PORT || 5000;

//listening to PORT
app.listen(PORT,()=>{
    console.log("Server Running..");
});

