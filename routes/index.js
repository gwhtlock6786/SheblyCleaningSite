const express = require("express"),
      router  = express.Router(),
      passport = require("passport");


const User = require("../models/user");


//*home page 
router.get("/", function(request, response){
    response.render("home");
});


//*About page
router.get("/about", function(request, response){
    response.render("about");
});

//* ============================
//* Auth Routes
//* ============================

//*New
router.get("/register", function(request, response){
    response.render("auth/register");
});

//*Create
router.post("/register", function(request, response){

    let newUser = new User({username: request.body.username});

    User.register(newUser,request.body.password, function(error, createdUser){
        if(error){
            request.flash("error",error.message);
            return response.redirect("/register");
        }
        
        passport.authenticate("local")(request, response, function(){
            request.flash("success", "Welcome to Shelby's Cleaning Emporium "+user.username);
            response.redirect("/products");
        });
    });
});

//*Login New route
router.get("/login", function(request, response){
    response.render("auth/login");
});

//*Login Create route
router.post("/login", passport.authenticate("local", {
    successRedirect: "/products",
    failureRedirect: "/login"
}), function(request, response){
    
});


//*Logout
router.get("/logout", function(request, response){
    request.logout();
    request.flash("success", "Logged you out");
    response.redirect("/products");
});


module.exports = router;