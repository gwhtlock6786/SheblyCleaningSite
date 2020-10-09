var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


//Schema Setup
var UserSchema = mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);

