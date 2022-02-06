const Products = require('../models/products')
const User = require('../models/user');
const multer = require('multer')

// RENDER THE NEW PRODUCT FORM
function newProd(req,res){
        res.render("products/new",{user:req.user})
};

// POST THE DETAILS OF NEW PRODUCT FORM TO HOME
function create(req,res){
        console.log('this is the req.user',req.user)
        const upload = multer({storage:fileStorageEngine})
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
        res.redirect('/',upload.single('image'), (req,res)=>{
            console.log(req.file)
            resizeBy.send('SingleFile upload success')
        })
    }

// RENDER THE PRODUCT ID PAGE
    function prodId(req,res){
        Products.findById(req.params.id, function (err,foundProduct){
            console.log(req.params)
            if (err) {console.log(err)}
            else {
    
                const context = {
                    product:foundProduct,
                    user:req.user
                }
                console.log(foundProduct)
                res.render ('products/prodId',context)
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
    
        res.render("products/edit", context)
    });
    };
    


module.exports = {
    newProd,
    create,
    prodId,
    prodEdit
}