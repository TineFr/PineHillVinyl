const Router = require('express').Router();
const Product = require("../models/product");


// GET ALL 

Router.get("/products", async (req, res) =>{
    try{
        const products = await Product.find();
        res.status(201).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET BY ID

Router.get("/products/:productId", async (req, res) =>{
    try{
        const product = await Product.findById(req.params);
        res.status(201).json(product);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET COMING SOON

Router.get("/products/comingsoon", async (req, res) =>{
    
    const today = new Date();
    const range = new Date();
    range.setMonth(range.getMonth() + 1);
    try{
        const products = await Product.find({date: {$gte: today,$lt: range}});
        res.status(201).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
});


// POST MULTIPLE 

Router.post("/products/batch", async (req, res) =>{
    let newProducts = [];
    req.array.forEach(product => {
        const newProduct = new Product({
            title: product.body.title,
            description: product.body.description,
            image: product.body.image,
            categories: product.body.categories,
            price: product.body.price,
            artist: product.body.artist,
            date: product.body.date,
        });
        newProducts.push(newProduct);
    });
    try{
        const savedProducts = await Product.insertMany(newProducts);
        res.status(201).json(savedProducts);
    }
    catch(err){
        res.status(500).json(err);
    } 

});

// POST 

Router.post("/products", async (req, res) =>{
    const newProduct = new Product({
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