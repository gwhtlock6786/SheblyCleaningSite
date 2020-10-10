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

    //*Create route for new product
    router.post("/", function(request, response){

        Product.create(request.body.product, function(error, newProduct){
            if(error){
                console.log("Error =", error);
            } else {
                console.log(newProduct);
                response.redirect("/products");
            }
        })

    });

    //*New Route
    router.get("/new", function(request, response){
        response.render("products/new");
    });
    
    //*SHOW route
    router.get("/:id", function(request, response){
     
        Product.findById(request.params.id).populate("reviews").exec(function(error, foundProduct){
            if(error){
                console.log("Error ="+error);
            } else {
                response.render("products/show", {product: foundProduct});
            }
        });
        
    });

    //*Edit route
    router.get("/:id/edit", function(request, response){

        Product.findById(request.params.id, function(error, foundProduct){

            if(error){
                console.log("Error = ",error);
            } else {
                response.render("products/edit", {product: foundProduct});
            }
        });
    });


    //*Update Route
    router.put("/:id", function(request, response){

        Product.findByIdAndUpdate(request.params.id, request.body.product, function(error, updatedProduct){
            if(error){
                console.log("Error = ",error);
            } else {
                response.redirect("/products/"+ updatedProduct._id);
            }
            
        });
    });


    //*Destory route
    router.delete("/:id", function(request, response){

        Product.findByIdAndRemove(request.params.id, function(error){
            if(error){
                console.log("Error = ",error);
            } else {

                response.redirect("/products");
            }
        });
        
    });


    



    module.exports = router;