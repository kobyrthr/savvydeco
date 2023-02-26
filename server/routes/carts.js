const router = require('express').Router();
const cartCtrl = require('../../controllers/ShoppingCart.js');


router.post('/cart', cartCtrl.addToCart);


module.exports = router;