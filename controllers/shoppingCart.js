const Products = require('../models/products');
const User = require('../models/user');
const ShoppingCart = require('../models/ShoppingCart');
// add a product to the users shopping cart

const addToCart = async (req, res) => {
  
    // need to provide backend with productId
    // create an add to cart button passing product._id
    // <a href="/add-to-cart/<%= product._id %>">Add to cart</a>
    
    try {
        const productId = req.params.productId;
        const quantity = req.params.quantity;
        const userId = req.user.id;
        
        const product = await Products.findById(productId);
        console.log(req.params)
        console.log(userId)

        if(!product){
            return res.status(404).json({message:"Product not found"});
        }


        const user = await User.findById(userId.toString());
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

       
        const existingCartItem = cart.items.find(item => item.product.toString())

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