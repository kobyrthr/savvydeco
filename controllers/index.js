
module.exports = {
    users:require('./users')
 }


const Products = require('../models/products');
const passport = require('passport');
const User = require('../models/user');
const Product = require('../models/products');

    // Products.create({
    //     title:'Neon sign',
    //     shortdes:'neon vibes',
    //     longdes:'super rare. no low ball offers!',
    //     seller:'Mike'

    // },
    // {
    //     title:'Bookshelf',
    //     shortdes:'Half off',
    //     longdes:'Moving. Must go this weekend',
    //     seller:'Renee'

    // }),
    // function (err){
    //     if (err){console.log("There was an error",err)}
    //     else { console.log('no errors')}
    // }

    
    function index(req,res){
        console.log(req.user)
        Products.find({}).populate('seller').exec(
            
            function(err,products){
                if (err){
                }
                else {
                    // User.findById(products.seller).exec(function (err, foundUser) {})
                    
                    
                    console.log(products)
                    res.render('index',{
                        products,
                        user: req.user
                        })
                }
            })    
}




function create(req,res){
    console.log('this is the req.user',req.user)
    let newProd = new Products({
        title:req.body.title,
        shortdes:req.body.shortdes,
        longdes:req.body.longdes,
        seller: req.user
    })
    newProd.save()

    User.findById(newProd.seller).exec(function (err, foundUser) {
        if (err) res.send(err);
        console.log('this is the found user',foundUser)
        console.log('this is newProdId',newProd._id)
        foundUser.products.push(newProd._id); 
        foundUser.save(); 
    });
    res.redirect('/')
}

// function create(req,res){
//     Products.create(req.body, (err, createdProduct) => {
//     if (err) res.send(err);
//     console.log("Product seller created is:", createdProduct)
   
// }
// )
// // newProd.save()
// res.redirect('/')
// }

// after creating the product, find product id then find user id and update the products array for that user
// create a function with createdProduct then 

function prodId(req,res){
    Products.findById(req.params.id, function (err,foundProduct){
        console.log(req.params)
        if (err) {console.log(err)}
        else {

            const product = {product:foundProduct}
            console.log(foundProduct)
            res.render ('products/show',product)
        }
    })
}

function prodEdit(){
    Products.findById(req.params.id)
}


module.exports = {
    
    index,
    create,
    prodId,

}