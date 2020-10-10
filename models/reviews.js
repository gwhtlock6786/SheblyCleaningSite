var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    content: String,
    contributor: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Review", reviewSchema)