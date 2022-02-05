
const  productsCtrl = require('../controllers/index');
const router = require('express').Router();


router.get('/new',productsCtrl.newProduct)
router.get('/products/:id',productsCtrl.prodId)

module.exports=router;

// const  productsCtrl = require('../controllers/index');
// const router = require('express').Router();


// router.get('/',productsCtrl.index)
// router.get('/new',productsCtrl.newProduct)

// module.exports=router