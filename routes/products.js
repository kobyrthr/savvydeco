const  productsCtrl = require('../controllers/products');
const router = require('express').Router();


router.get('/',productsCtrl.index)

module.exports=router