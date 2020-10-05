const mongoose = require("mongoose");


let productSchema = new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    description: String
});

//*TODO - add reviews to schema - model after comments

module.exports = mongoose.model("Product", productSchema);