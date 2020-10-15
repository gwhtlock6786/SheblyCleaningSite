const express      = require("express"),
      router       = express.Router({mergeParams:true}),
      middleware   = require("../middleware");

//Model configuration
const Product = require("../models/products");
const ProductVariations = require("../models/productVariations");

//*New route
router.get("/new", function(request, response){
   
    Product.findById(request.params.id, function(error, foundProduct){

        if(error){
            console.log("Error = ", error)
        } else {
            response.render("productOptions/new",{product: foundProduct});
        }
    });

});

//*Create route
router.post("/", function(request, response){

    Product.findById(request.params.id, function(error, foundProduct){
        if(error){
            console.log("Error = ", error);
            response.redirect("/products");
        } else {
            ProductVariations.create(request.body.option, function(error, savedOption){
                if(error){
                    console.log("error adding new Product Option",error);
                } else {

                    foundProduct.options.push(savedOption);
                    foundProduct.save();

                    console.log(savedOption);
                    response.redirect("/products/"+foundProduct._id);
                }
            });

            
        }
    });
});


module.exports = router;