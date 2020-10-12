const Product = require("../models/products"),
      Review  = require("../models/reviews");

let middlewareObject = {};

middlewareObject.checkReviewOwnership = function(request, response, next){
    if(request.isAuthenticated()){
        Review.findById(request.params.review_id, function(error, foundReview){
            if(error){
                console.log("Error = ", error);
                request.flash("error", "Review not found");
                response.redirect("back");
            } else {
                if(foundReview.contributor.id.equals(request.user._id)){
                    next();
                } else {
                    request.flash("error", "You dont have permission to do that");
                    response.redirect("back");
                }
            }
        });
    } else {
        request.flash("error", "You need to be logged in to do that");
        response.redirect("back");
    }
}


middlewareObject.isLoggedIn = function(request, response, next){
    if(request.isAuthenticated()){
        return next();
    } else {
        request.flash("error", "You need to be logged in to do that.");
        response.redirect("/login");
    }
}


module.exports = middlewareObject;