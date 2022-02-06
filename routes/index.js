const router = require('express').Router();
const passport = require('passport');
const  indexCtrl = require('../controllers/index');
const  productsCtrl = require('../controllers/products');
const bodyParser = require('body-parser')
const userCtrl = require('../controllers/users');

router.get('/',indexCtrl.index)

//Google Oauth login route
router.get('/auth/google', passport.authenticate('google', {scope:['profile', 'email']})
);

//Google Oauth callback route
router.get('/oauth2callback', passport.authenticate("google",{
    successRedirect:"/",
    failureRedirect:'/error',
})
);

//logout router

router.get("/logout", (req,res)=> {
    req.logout();
    res.redirect("/");
})

router.get("/products/:id", productsCtrl.prodId);
router.get("products/show", productsCtrl.prodId);

module.exports = router,
{allUsers: require("./users")};