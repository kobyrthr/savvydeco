
module.exports = {
    users:require('./users')
 }


const Products = require('../models/products');
const passport = require('passport');
const User = require('../models/user');
const Product = require('../models/products');

    function index(req,res){
        Products.find({}).populate('seller').exec(
            
            function(err,products){
                if (err){
                }
                else {
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

module.exports = {
    
    index,
    create,
    prodId,

}