const mongoose = require("mongoose");

const Review = require("../models/reviews");

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
    ]
    

});

productSchema.pre('remove', async function(){
    await Review.remove({
        _id: {
            $in: this.reviews
        }
    });
});

module.exports = mongoose.model("Product", productSchema);