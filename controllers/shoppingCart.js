const ShoppingCart = require('../models/shoppingCart');
const Products = require('../models/products');
const User = require('../models/user');

// add a product to the users shopping cart

const addToCart = async (req, res) => {
    try {
        const { _id } = req.body;
        const userId = req.user.id;
        
        
        /**
         * Checks if the product exists and returns it if it does.           
         * @param {Product} product - the product to check for.           
         * @returns None           
         */
        const product = await Products.findById(_id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }


        /**
         * Finds the user with the given ID and returns it.       
         * @param {string} userId - the ID of the user to find       
         * @returns {Promise<User>} - the user with the given ID       
         */
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        let cart = await ShoppingCart.findById({user: userId});

        if(!cart){
            cart = new ShoppingCart({
                user: userId,
                items: [],
            });
        }



        /**
         * Adds the given product to the cart.       
         * @param {string} _id - the id of the product to add to the cart       
         * @param {number} quantity - the quantity of the product to add to the cart       
         * @returns None       
         */
        const existingCartItem = cart.items.find(item => item.product.toString())

        if(existingCartItem){
            existingCartItem.quantity += quantity;
        } else {
            cart.items.push({product: _id, quantity});
        }

        await cart.save();
        res.json(cart);
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