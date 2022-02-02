const router = require('express').Router();
const passport = require('passport');

router.get('/new', function(req,res){
    res.render('new');
})


module.exports = router;