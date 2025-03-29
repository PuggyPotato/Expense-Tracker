const mongoose = require("mongoose");
const express = require("express");

const app = express();




app.get("/", (req,res) =>{
    res.send("It Works!")
})


app.listen(5000, () =>{
    console.log("Listening On Port 5000");
})