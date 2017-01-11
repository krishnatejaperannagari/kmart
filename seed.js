// Seed script - this is where we clean or seed the database during development

var mongoose = require("mongoose");
var User = require ("./models/user");
var Product = require ("./models/product");
var faker = require("faker");


function cleanDB(config){
    if (config.users === true) {
        cleanUsers(config);
    }
    if (config.products === true){
        cleanProducts(config);
    }
}
    
function cleanUsers (config){
    User.remove({}, function(err){
        if (err){
            console.log(err);
        } else {
            if (config.feedback === true){
                console.log('Removed Users'); 
            }
        }
    });
}

function cleanProducts (config){
    Product.remove({}, function(err){
        if (err){
            console.log(err);
        } else {
            if (config.feedback === true){
                console.log('Removed Products'); 
            }
        }
    });    
}

function seedDB(config){

cleanDB(config);
    // seed the database with products using faker
    for(var i = 0; i < config.quantity; i++){
        var productSeed = new Object();
        
        productSeed.color = faker.commerce.color();
        productSeed.department = faker.commerce.department();
        productSeed.price = faker.commerce.price();
        productSeed.productAdjective = faker.commerce.productAdjective();
        productSeed.productMaterial = faker.commerce.productMaterial();
        productSeed.productDescription = faker.lorem.paragraph();
        productSeed.productName = productSeed.productAdjective + ' ' + productSeed.productMaterial + ' ' + faker.commerce.product();
        productSeed.imageUrl = '/img/details/placeholder.png';
        var photoroll =  (Math.random() * (10 - 0) + 0).toFixed(0);
        switch(photoroll) {
            case '0':
                productSeed.thumbnailUrl = '/img/home/placeholder-dgreen.png';
                break;
            case '1':
                productSeed.thumbnailUrl = '/img/home/placeholder-blue.png';
                break;
            case '2':
                productSeed.thumbnailUrl = '/img/home/placeholder-dred.png';
                break;
            case '3':
                productSeed.thumbnailUrl = '/img/home/placeholder-green.png';
                break;
            case '4':
                productSeed.thumbnailUrl = '/img/home/placeholder-orange.png';
                break;
            case '5':
                productSeed.thumbnailUrl = '/img/home/placeholder-pink.png';
                break;
            case '6':
                productSeed.thumbnailUrl = '/img/home/placeholder-purple.png';
                break;
            case '7':
                productSeed.thumbnailUrl = '/img/home/placeholder-red.png';
                break;
            case '8':
                productSeed.thumbnailUrl = '/img/home/placeholder-teal.png';
                break;
            case '9':
                productSeed.thumbnailUrl = '/img/home/placeholder-yellow.png';
                break;
            default:
                productSeed.thumbnailUrl = '/img/home/placeholder-dgreen.png' ;
                break;
        }
        Product.create(productSeed, function(err, product){
            if(err){
                console.log(err);
            } else {
            }
        });
    }
    if (config.feedback === true){
        console.log('seed finished'); 
    }

}
module.exports = seedDB;


