const Router = require('express').Router();
const User = require("../models/user");
const Crypto = require ("crypto-js")
const jwt = require ("jsonwebtoken")
// Register

Router.post("/register", async (req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Crypto.AES.encrypt(req.body.password, process.env.PASSWORD).toString(),
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
        const originalPassword = hashedPass.toString(Crypto.enc.Utf8);
        if (originalPassword !==req.body.password){
              res.status(404).json("Wrong password");
              return;
        }
        const token = jwt.sign({
            id: user.id,
            isAdmin: user.isAdmin
        }, process.env.JWT,
        {expiresIn: "1d"});

        const {password, ...rest} = user._doc;
        res.status(201).json({...rest, token});
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = Router;