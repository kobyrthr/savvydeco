const router = require('express').Router();
const passport = require('passport');

router.get('/', function(req,res){
    res.render('new');
})


module.exports = router;