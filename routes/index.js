const router = require('express').Router();
const passport = require('passport');
const  productsCtrl = require('../controllers/index');

router.get('/', function(req,res){
    res.render('index', {user: req.user});
})

router.get('/',productsCtrl.index)

//Google Oauth login route
router.get('/auth/google', passport.authenticate('google', {scope:['profile', 'email']})
);

//Google Oauth callback route
router.get('/oauth2callback', passport.authenticate("google",{
    successRedirect:"/userProfile",
    failureRedirect:'/',
})
);

//logout router

router.get("/logout", (req,res)=> {
    req.logout();
    res.redirect("/");
})

module.exports = router;