
const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const baseUrl = "/api/v1";

//ROUTES
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const productRoutes = require("./routes/product-routes");

//SETUP
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connection successfull");
}).catch((err) =>{
    console.log("Connection failed" + '\n' + err);
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running");
})

app.use(express.json());
app.use(`${baseUrl}/auth`, authRoutes);
app.use(`${baseUrl}/products`, productRoutes);
app.use(`${baseUrl}/users`, userRoutes);

