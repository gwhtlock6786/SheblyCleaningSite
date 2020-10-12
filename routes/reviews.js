const express      = require("express"),
      router       = express.Router({mergeParams:true}),
      middleware   = require("../middleware");

//Model configuration
const Product = require("../models/products");
const Review = require("../models/reviews");

//*New route
router.get("/new", middleware.isLoggedIn, function(request, response){
   
    Product.findById(request.params.id, function(error, foundProduct){

        if(error){
            console.log("Error = ", error)
        } else {
            response.render("reviews/new",{product: foundProduct});
        }
    });

});

//*Create route
router.post("/", middleware.isLoggedIn, function(request, response){

    Product.findById(request.params.id, function(error, foundProduct){
        if(error){
            console.log("Error = ", error);
            response.redirect("/products");
        } else {
            Review.create(request.body.review, function(error, savedReview){
                if(error){
                    console.log("error adding new reveiw",error);
                } else {
                    savedReview.contributor.id = request.user._id;
                    savedReview.contributor.username = request.user.username;


                    //*save review
                    savedReview.save();
                    foundProduct.reviews.push(savedReview);
                    foundProduct.save();

                    console.log(savedReview);
                    response.redirect("/products/"+foundProduct._id);
                }
            });
        }
    });
});


//*Edit
router.get("/:review_id/edit", middleware.checkReviewOwnership, function(request, response){
    Review.findById(request.params.review_id, function(error, foundReview){
        if(error){
            console.log("Error = ", error);
            response.redirect("back");
        } else {
            response.render("reviews/edit", {product_id: request.params.id, review: foundReview});
        }
    });
});


//*Update route
router.put("/:review_id", middleware.checkReviewOwnership, function(request,response){

    Review.findByIdAndUpdate(request.params.review_id, request.body.review, function(error, updatedReview){
        if(error){
            console.log("error = ", error);
            response.redirect("back");
        } else {
            response.redirect("/products/"+request.params.id);
        }
    });
});


//*Destroy route
router.delete("/:review_id", middleware.checkReviewOwnership, function(request, response){

    Review.findByIdAndDelete(request.params.review_id, function(error){
        if(error){
            console.log("Error = ",error);
            response.redirect("back");
        } else {
            response.redirect("/products/"+request.params.id);

        }
    })
});


module.exports = router;