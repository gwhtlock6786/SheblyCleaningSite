const express   = require("express"),
      router    = express.Router(),
      Product   = require("../models/products");



    //*index route
    router.get("/", function(require, response){
        
        Product.find({}, function(error, allProducts){
            if(error){
                console.log("Error = "+error);
            } else {
                response.render("products/index", {products: allProducts});
            }
        })
        
       
    });
    
    //*SHOW route
    router.get("/:id", function(request, response){
     
        Product.findById(request.params.id, function(error, foundProduct){
            if(error){
                console.log("Error ="+error);
            } else {
                response.render("products/show", {product: foundProduct});
            }
        })
        
    });



    module.exports = router;