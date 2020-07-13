// required dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//app set up
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get("/", function(require, response){
    response.render("home");
})



app.listen(3000, function(){
    console.log("Shelbys site running on port 3000");
})