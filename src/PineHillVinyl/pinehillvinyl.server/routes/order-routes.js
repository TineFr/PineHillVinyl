const Router = require('express').Router();
const Order = require("../models/order");
const {authorize, verifyAdmin} = require("../helpers/verifyToken");



// CREATE

Router.post("/", authorize, async (req, res) =>{
    const newOrder = new order(req.body);
    try{
        const savedOrder = newOrder.save();
        res.status(200).json(savedOrder);    
    }
    catch(err){
        res.status(500).json(err);
    }
});


// UPDATE

Router.put("/:orderId", verifyAdmin, async (req, res) =>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedOrder);
    } 
    catch(err){
        res.status(500).json(err)
    }
});

//DELETE

Router.delete("/:orderId", authorize, async (req, res) =>{
    try{
         await order.findByIdAndDelete(req.params.orderId);
         res.status(200).json("order was successfully deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
});


// GET BY ID

Router.get("/:userId", authorize, async (req, res) =>{
    try{
        const order = await order.findById({userId : req.params.userId});
        res.status(201).json(order);
 
    }
    catch(err){
        res.status(500).json(err);
    }
});

// GET ALL

Router.get("/", verifyAdmin, async (req, res) =>{
    try{
        const orders =  await Order.find(); 
        res.status(201).json(orders);
        
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

module.exports = Router;