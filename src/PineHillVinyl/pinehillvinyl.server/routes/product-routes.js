const Router = require('express').Router();
const Product = require("../models/product");
const Crypto = require ("crypto-js")

// GET COMING SOON

Router.get("/comingsoon", async (req, res) =>{
    try{
        const today = Date.now();
        const range = today.setMonth(today.getMonth() + 1)
        const products = await Product.find({date: {$gte: today,$lt: range}});
        res.status(201).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET ALL PRODUCTS

Router.get("/products", async (req, res) =>{
    try{
        const products = await Product.find();
        res.status(201).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET PRODUCT BY ID

Router.get("/products/:productId", async (req, res) =>{
    try{
        const product = await Product.findById(req.params);
        res.status(201).json(product);
    }
    catch(err){
        res.status(500).json(err);
    }
});


// POST PRODUCT

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

module.exports = Router;