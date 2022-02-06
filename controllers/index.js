const Products = require('../models/products');
const passport = require('passport');

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

module.exports = {
    
    index

}