const Products = require('../models/products');
const passport = require('passport');
const { response } = require('express');

function index(req, res) {
    Products.find({}).populate('seller').populate('image').exec(

        function (err, products) {
            if (err) {
            }
            else {
                console.log(products)
                res.render('index', {
                    products,
                    user: req.user
                })

            }
        })
}


module.exports = {
    index
}