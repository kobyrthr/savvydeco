const router = require('express').Router();
const cartCtrl = require('../controllers/shoppingCart.js');


router.post('/add-to-cart/:productId', cartCtrl.addToCart);


module.exports = router;