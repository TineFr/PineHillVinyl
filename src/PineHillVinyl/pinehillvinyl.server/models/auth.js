const mongoose = require("mongoose");

const loginRequest = new mongoose.Schema({
    email:{ type: String, required:true},
    password: { type: String, required:true},
});

const loginResponse= new mongoose.Schema({
    JWT:{ type: String},
});

const register = new mongoose.Schema({
    username: { type: String, required: true},
    email:{ type: String, required: true, unique: true},
    password: { type: String, required: true},   
    confirmPassword: { type: String, required: true},
});

module.exports = mongoose.model("LoginRequest", loginRequest);
module.exports = mongoose.model("LoginResponse", loginResponse);
module.exports = mongoose.model("Register", register);