// required dependencies
const express        = require("express"),
      app            = express(),
      bodyParser     = require("body-parser"),
      mongoose       = require("mongoose"),
      seedDB         = require("./seeds"),
      methodOverride = require("method-override"),
      User           = require("./models/user"),
      passport       = require("passport"),
      LocalStrategy  = require("passport-local"),
      Product        = require("./models/products");


 //route dependencies
 const productRoutes = require("./routes/products"),
       authRoutes    = require("./routes/index"),
       reviewRoutes  = require("./routes/reviews");     

//app set up
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));



//* connecting to the database
var url = process.env.DATABASEURL || "mongodb://localhost:27017/Shelbys_Emporium";

mongoose.connect(url, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB for Shelbys Emporium!!!'))
.catch(error => console.log(error));

// seedDB();

//*Passport config
app.use(require("express-session")({
    secret: "This is the Way!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(request, response, next){
    response.locals.currentUser = request.user;
    next();
})

//===================================
// Route calls
//===================================

app.use("/", authRoutes);
app.use("/products",productRoutes);
app.use("/products/:id/reviews",reviewRoutes);



var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Shelbys site running on port 3000");
})