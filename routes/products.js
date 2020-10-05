const express   = require("express"),
      router    = express.Router();
      Product   = require("../models/products");

//varables
var products = [
    { id: "0", title: "All Purpose Cleaner", image: "/images/jeshoots-com-__ZMnefoI3k-unsplash.jpg", details: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
    { id: "1", title: "Glass Cleaner", image: "/images/glassCleaner.jpg", details: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
    { id: "2", title: "Laundy Soap", image: "/images/laundry.jpg", details: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
    { id: "3", title: "Hand Soap", image: "/images/handSoap.jpg", details: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
    { id: "4", title: "Shampoo", image: "/images/shampoo.jpg", details: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
    { id: "5", title: "Conditioner", image: "/images/conditioner.jpg", details: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
    { id: "6", title: "Lotion", image: "/images/lotion.jpg", details: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
]




    router.get("/products", function(require, response){
        response.render("products", {products: products});
    });
    
    router.get("/singleProduct", function(request, response){
        var id = request.query.id;
        console.log("id = "+id)
        var product = products[id];
        console.log(product)
        response.render("singleProduct", {product: product});
    });



    module.exports = router;