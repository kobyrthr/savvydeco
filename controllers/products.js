const Products = require('../models/products')
const User = require('../models/user');

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

    function prodEdit(req,res){Products.findById(req.params.id, (err, foundProduct) => {
        console.log('this is req:',req.params.id)
        if (err) res.send(err);
    
        const context = { 
            product: foundProduct,
            user:req.user
        }
    
        res.render("edit", context)
    });
    };
    


module.exports = {
    create,
    prodId,
    prodEdit
}