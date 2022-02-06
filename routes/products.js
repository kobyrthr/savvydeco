
const router = require('express').Router();
const  productsCtrl = require('../controllers/products');


// router.get('/new',productsCtrl.newProduct)
router.get('/products/:id',productsCtrl.prodId)
router.get("/products/:id/edit", productsCtrl.prodEdit);
router.get('products/new', function(req,res){
    res.render('products/new');
})
router.post('/',productsCtrl.create)

module.exports=router;

// const  productsCtrl = require('../controllers/index');
// const router = require('express').Router();


// router.get('/',productsCtrl.index)
// router.get('/new',productsCtrl.newProduct)

// module.exports=router