const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();


const app = express();
mongoose.connect(process.env.Mongo_URL).then(() => {
    console.log("Connection succesfull");
}).catch((err) =>{
    console.log("Connection failed" + '\n' + err);
});

app.get("/api/v1/test", () =>{
    console.log("test is successfull");
})

app.listen(process.env.Port || 5000, () => {
    console.log("Server is running");
})
