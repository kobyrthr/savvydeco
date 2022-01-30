const Products = require('../models/products')

function newProduct (req,res){

    Products.create({
        title:'Bar Stools',
        shortdes:'Lighlty used. Moving sale.',
        longdes:'I got these about 2 years ago when my office closed down. They have sat in the basement for a while unused',
        seller:'Koby'

    }),
    function (err){
        if (err){console.log("There was an error",err)}
        else { console.log('no errors')}
    }
}


function index(req,res){

    Products.find({}, function(err,products){
        if (err){
            console.log("There was an error:")
        }
        else {
            const inventory = {products:products}
            res.render('productPage',inventory)
        }
    })
}

module.exports = {
    newProduct,
    index
}