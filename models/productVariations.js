const mongoose = require("mongoose");

let productVariationSchema = new mongoose.Schema({
    size: String,
    container: String,
    price: String
});


module.exports = mongoose.model("ProductVariation", productVariationSchema);