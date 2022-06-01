const Router = require('express').Router();
const Cart = require("../models/cart");
const {authorize, verifyAdmin} = require("../helpers/verifyToken");



// CREATE

Router.post("/", authorize, async (req, res) =>{
    const newCart = new Cart(req.body);
    try{
        const savedCart = newCart.save();
        res.status(200).json(savedCart);    
    }
    catch(err){
        res.status(500).json(err);
    }
});


// UPDATE

Router.put("/:cartId", authorize, async (req, res) =>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedCart);
    } 
    catch(err){
        res.status(500).json(err)
    }
});

//DELETE

Router.delete("/:cartId", authorize, async (req, res) =>{
    try{
         await Cart.findByIdAndDelete(req.params.cartId);
         res.status(200).json("Cart was successfully deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
});


// GET BY ID

Router.get("/:userId", authorize, async (req, res) =>{
    try{
        const cart = await Cart.findById({userId : req.params.userId});
        res.status(201).json(cart);
 
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET ALL

Router.get("/", verifyAdmin, async (req, res) =>{

    try{
        const carts =  await Cart.find(); 
        res.status(201).json(carts);
        
    }
    catch(err){
        res.status(500).json(err);
    }
});



module.exports = Router;