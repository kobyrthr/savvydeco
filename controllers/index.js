const Products = require('../models/products')
const User = require('../models/user');
const bodyParser = require('body-parser')


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
        
    Products.find({}, function(err,products){
        if (err){
            console.log("There was an error:")
        }
        else {
            const inventory = {products:products}
            res.render('index',inventory)
        }
    })
    // User.find({}, function(err, users){
    //     res.render('users/index'), {users, user: req.user}
    // });
}


function newProduct(req,res){
    res.render('new')
}

function create(req,res){
    let newProd = new Products({
        title:req.body.title,
        shortdes:req.body.shortdes,
        longdes:req.body.longdes,
    })
    
    newProd.save()
    res.redirect('/')
}

function prodId(req,res){
    Products.findById(req.params.id, function (err,foundProduct){
        if (err) {console.log(err)}
        else {
            res.render ('productId')
        }
    })
}

module.exports = {
    
    index,
    newProduct,
    create,
    prodId
}