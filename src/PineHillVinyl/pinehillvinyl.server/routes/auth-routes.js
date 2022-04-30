const Router = require('express').Router();
const User = require("../models/user");
const Crypto = require ("crypto-js")

// Register

Router.post("/register", async (req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Crypto.AES.encrypt(req.body.password, process.env.PASSWORD_SEC).toString(),
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Login 

Router.post("/login", async (req, res) =>{
    try{
        const user = await User.findOne({email: req.body.email});
        if (!user){
            res.status(404).json("Failed to log in");
            return;
        }

        const hashedPass = Crypto.AES.decrypt(user.password, process.env.PASSWORD);
        const password = hashedPass.toString(Crypto.enc.Utf8);
        if (password !==req.body.password){
              res.status(404).json("Wrong password");
              return;
        }

        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = Router;