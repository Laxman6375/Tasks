const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/relationships");

app.use(require("./routes/route"))
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})