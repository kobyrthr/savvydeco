const Products = require('../models/products');
const User = require('../models/user');
const ShoppingCart = require('../models/ShoppingCart');
const mongoose = require('mongoose');
// add a product to the users shopping cart

const addToCart = async (req, res) => {
  
    // need to provide backend with productId
    // create an add to cart button passing product._id
    // POST form to /cart 
    // example on prodId for react transition
    
    try {
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        const userId = req.user;  


        /**
         * Finds a product by its ID.       
         * @param {string} productId - the ID of the product to find       
         * @returns {Promise<Product>} - the product with the given ID       
         */
        const product = await Products.findById(productId);

        if(!product){
            return res.status(404).json({message:"Product not found"});
        }


        /**
         * Finds a user by their ID and returns it.       
         * @param {string} userId - the ID of the user to find.       
         * @returns {Promise<User>} - the user with the given ID.       
         */
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({message:"User not found"});
        }


        /**
         * Finds the shopping cart for the user and populates the items with the product data.       
         * @param {string} userId - the id of the user whose cart is being retrieved.       
         * @returns {Promise<ShoppingCart>} - the shopping cart for the user.       
         */
        let cart = await ShoppingCart.findOne({ user: userId }).populate('items.product');
        
        if(!cart){
            cart = new ShoppingCart({
                user: userId,
                items: [],
            });
        }

       
        /**
         * Adds the product to the cart.       
         * @param {string} productId - the id of the product to add to the cart.       
         * @param {number} quantity - the quantity of the product to add to the cart.       
         * @param {Request} req - the request object.       
         * @param {Response} res - the response object.       
         * @returns None       
         */
        const existingCartItem = cart.items.find(item => item.product.toString() === productId);
        
        if(existingCartItem){
            existingCartItem.quantity += quantity;

        } else {
            cart.items.push({product: productId, quantity});
        }
        

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