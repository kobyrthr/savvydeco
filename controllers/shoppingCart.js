const Products = require('../models/products');
const User = require('../models/user');
const ShoppingCart = require('../models/ShoppingCart');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


// add a product to the users shopping cart

const addToCart = async (req, res) => {
  
    // need to provide backend with productId
    // create an add to cart button passing product._id
    // POST form to /cart 
    // example on prodId for react transition
    try {
        const productId = req.body.productId;
         //const price = req.body.price;
        const userId = localStorage.getItem('user');

          if (!localStorage.getItem('user')) {
            const guestUser = new User({
                name: 'Guest',
                email: 'guest@example.com',
              });
              await guestUser.save();
              localStorage.setItem('user', guestUser._id);
          }

        
        const product = await Products.findById(productId);

        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        console.log("PRODUCT"+product)

        // const user = await User.findById(userId);

        if (!userId) {
            return res.status(404).json({message:"User not found"});
        }
        

        //let cart = await ShoppingCart.findOne({ user: userId }).populate('items.product');
        //req.session.cart = cart;
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            cart = {
                user: userId,
                items: [],
            };
        }

       console.log(cart)

       //below this line needs to be tested/changed
        const existingCartItem = cart.items.find(item => item.product && item.product.toString() === productId);
        console.log("EC"+existingCartItem)

        if(existingCartItem){
            // add price login here

        } else {
            cart.items.push({
                productId: product._id,
                title: product.title,
              //  price: product.price
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        //await cart.save();
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