
const  productsCtrl = require('../controllers/products');
const router = require('express').Router();


// router.get('/new',productsCtrl.newProduct)
router.get('/products/:id',productsCtrl.prodId)
router.post('/',productsCtrl.create)

module.exports=router;

// const  productsCtrl = require('../controllers/index');
// const router = require('express').Router();


// router.get('/',productsCtrl.index)
// router.get('/new',productsCtrl.newProduct)

// module.exports=router