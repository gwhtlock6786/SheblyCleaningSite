const mongoose = require("mongoose"),
      Products = require("./models/products");
      
    
      var products = [
        { title: "All Purpose Cleaner", price: "$5.00", image: "/images/jeshoots-com-__ZMnefoI3k-unsplash.jpg", description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
        { title: "Glass Cleaner", price: "$5.00", image: "/images/glassCleaner.jpg", description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
        { title: "Laundy Soap", price: "$5.00", image: "/images/laundry.jpg", description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
        { title: "Hand Soap", price: "$5.00", image: "/images/handSoap.jpg", description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
        { title: "Shampoo", price: "$5.00", image: "/images/shampoo.jpg", description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
        { title: "Conditioner", price: "$5.00", image: "/images/conditioner.jpg", description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
        { title: "Lotion", price: "$5.00", image: "/images/lotion.jpg", description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium veritatis consequatur natus, blanditiis deserunt, doloremque voluptatibus ullam, porro amet commodi? Eveniet tenetur veritatis pariatur repellat provident beatae est aspernatur."},
    ]
    
    
    function seedDB(){
        Products.remove({}, function(error){
            if(error){
                console.log("Error = " + error);
            } else {
                console.log("removed Products");
                products.forEach(function(product){
                    Products.create(product, function(error, createdProduct){
                        if(error){
                            console.log("Error = "+error);
                        } else {
                            console.log("added Product: "+createdProduct);
                        }
                    });
                });
            }
        })
    }


    module.exports = seedDB;