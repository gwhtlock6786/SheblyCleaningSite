// required dependencies
const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      Product    = require("./models/products");


 //route dependencies
 const productRoutes = require("./routes/products");     

//app set up
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));



//* connecting to the database
var url = process.env.DATABASEURL || "mongodb://localhost:27017/Shelbys_Emporium";

mongoose.connect(url, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB for Shelbys Emporium!!!'))
.catch(error => console.log(error));



//===================================
// Route calls
//===================================
app.use(productRoutes);

//*routes
app.get("/", function(request, response){
    response.render("home");
})



app.get("/about", function(request, response){
    response.render("about");
})


var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Shelbys site running on port 3000");
})