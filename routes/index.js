const router = require('express').Router();
const passport = require('passport');
const  productsCtrl = require('../controllers/index');
const bodyParser = require('body-parser')



router.get('/', function(req,res){
    res.render('index', {user: req.user});
})

router.get('/',productsCtrl.index)

router.post('/',productsCtrl.create)

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

module.exports = router,
{allUsers: require("./users")};