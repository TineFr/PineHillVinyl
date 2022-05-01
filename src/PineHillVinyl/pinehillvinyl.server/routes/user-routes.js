const Router = require('express').Router();
const User = require("../models/user");


// GET ALL 

Router.get("/users", async (req, res) =>{
    try{
        const users = await User.find();
        res.status(201).json(users);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET BY ID

Router.get("/users/:userId", async (req, res) =>{
    try{
        const product = await Product.findById(req.params);
        res.status(201).json(product);
    }
    catch(err){
        res.status(500).json(err);
    }
});


// POST 

Router.post("/users", async (req, res) =>{
    const newUser = new User({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        categories: req.body.categories,
        price: req.body.price,
        artist: req.body.artist,
        date: req.body.date,
    });
    try{
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// PUT 

Router.put("/products/:productId", async (req, res) =>{
    try{
        const product = await Product.findById(req.params);
        if (!product) {
            res.status(500).json("Product does not exist");
            return;
        }
        product.description = req.body.description;
        product.title = req.body.title;
        product.price = req.body.price;
        product.date = req.body.date;
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// DELETE 

Router.delete("/products/:productId", async (req, res) =>{
    try{
        const product = await Product.findById(req.params);
        if (!product) {
            res.status(500).json("Product does not exist");
            return;
        }
        const isDeleted = await product.delete();
        if (isDeleted) res.status(201).json("Product was successfully deleted");
        else res.status(500).json("Failed to delete product");
    }
    catch(err){
        res.status(500).json(err);
    }
});



module.exports = Router;
