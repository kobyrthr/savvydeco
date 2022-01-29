const User = require('../models/user');

module.exports = {
    index,
}

function index(req,res){
    User.finder({}, function(err, users){
        res.render('users/index'), {users, user: req.user}
    });
}

