const mongoose = require("mongoose");

const product = new mongoose.Schema({
    title:{ type: String, required:true},
    description: {type: String, required:true},
    image: {type: String},
    categories: {type: Array},
    price: {type: Number, required:true},
    artist: {type: String, required:true},
    date: {type: Date, required:true},
    inStock:{type: Boolean, default: true}
}, {timestamps: true});

module.exports = mongoose.model("Product", product);
