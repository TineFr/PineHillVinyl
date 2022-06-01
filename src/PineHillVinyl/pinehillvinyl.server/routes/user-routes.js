const Router = require('express').Router();
const User = require("../models/user");
const Crypto = require ("crypto-js")
const {authorize, verifyAdmin} = require("../helpers/verifyToken");


// GET ALL 

Router.get("/", verifyAdmin, async (req, res) =>{
    const query = req.query.new
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(1) : 
        await User.find();
        res.status(201).json(users);
        
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET BY ID

Router.get("/:userId", verifyAdmin, async (req, res) =>{
    try{
        const user = await User.findById(req.params.userId);
        const {password, ...rest} = user._doc;
        res.status(201).json(rest);
 
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET STATS

Router.get("/stats", verifyAdmin, async(req,res)=>{
const date = new Date();
const lastYear = new Date(date.setFullYear(date.getFullYear() -1));
try{
    const data = await User.aggregate([
        
        {$match: {$createdAt: {$gte: lastYear}}},
        {
            $project:{
                month: {$month: "$createdAt"},
            },
        },
        {

            $group:{
                _id: "$month", 
                total: {$sum:1}
            }

        }  
    ])
    res.status(200).json(data);
} catch (err){
    res.status(500).json(err);
}
}
);

// POST 

Router.post("/", async (req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Crypto.AES.encrypt(req.body.password, process.env.PASSWORD).toString()
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// PUT 

Router.put("/:userId", authorize, async (req, res)=>{
    if (req.body.password){
        req.body.password =  Crypto.AES.encrypt(req.body.password, process.env.PASSWORD).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedUser);
    } 
    catch(err){
        res.status(500).json(err)
    }


});

// DELETE 

Router.delete("/:usersId", verifyAdmin, async (req, res) =>{
    try{
         await User.findByIdAndDelete(req.params.userId);
         res.status(200).json("User was successfully deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
});





module.exports = Router;
