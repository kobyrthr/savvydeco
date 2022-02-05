const router = require('express').Router();
const passport = require('passport');
const  productsCtrl = require('../controllers/index');
const bodyParser = require('body-parser')


const userCtrl = require('../controllers/users');


router.post('/',productsCtrl.create)

router.get('/',productsCtrl.index)


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
router.get("/:id", productsCtrl.prodId);


router.get("products/show", productsCtrl.prodId);

module.exports = router,
{allUsers: require("./users")};