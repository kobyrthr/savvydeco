
const router = require('express').Router();
const  productsCtrl = require('../controllers/products');

router.get('/products/:id',productsCtrl.prodId)
router.get("/products/:id/edit", productsCtrl.prodEdit);
router.get('/new', productsCtrl.newProd)
router.post('/',productsCtrl.create)
router.put("/:id", productsCtrl.prodUpdate);
router.delete("/:id", productsCtrl.prodDestroy)


module.exports=router;
