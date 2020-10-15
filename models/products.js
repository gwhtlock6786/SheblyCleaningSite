const mongoose = require("mongoose");

const Review           = require("../models/reviews");
const ProductVariation = require("../models/productVariations");


let productSchema = new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    description: String,

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"ProductVariation"
        }
    ]
    

});

productSchema.pre('remove', async function(){
    await Review.remove({
        _id: {
            $in: this.reviews
        }
    });

    await ProductVariation.remove({
        _id: {
            $in: this.options
        }
    });
});

module.exports = mongoose.model("Product", productSchema);