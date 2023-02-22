const Products = require('../models/products');
const User = require('../models/user');
const ShoppingCart = require('../models/ShoppingCart');
const mongoose = require('mongoose');
// add a product to the users shopping cart

const addToCart = async (req, res) => {
  
    // need to provide backend with productId
    // create an add to cart button passing product._id
    // <a href="/add-to-cart/<%= product._id %>">Add to cart</a>
    
    try {
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        //const userId = req.user;
        const userId = req.user;  

        console.log("REQUSER"+req.user._id)

        const product = await Products.findById(productId);
        console.log("PRODUCT" + product)
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }


        const user = await User.findById(userId);
        console.log("USER"+user)
        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        let cart = await ShoppingCart.findOne({ user: userId }).populate('items.product');
        
        if(!cart){
            cart = new ShoppingCart({
                user: userId,
                items: [],
            });
        }
        console.log("CART"+cart.items)
       
        const existingCartItem = cart.items.find(item => item.product.toString() === productId);
        
        if(existingCartItem){
            existingCartItem.quantity += quantity;
        } else {
            cart.items.push({product: productId, quantity});
        }
        console.log("ExistingCART"+ existingCartItem)

        await cart.save();
        res.render('carts/index',{cart});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:"server error"})
    }
    
};


// remove a product from the users shopping cart

const removeFromCart = async (req, res) => {
}

// get the users shopping cart


const getCart = async (req, res) => {
}


module.exports = {
    addToCart,
    removeFromCart,
    getCart
}