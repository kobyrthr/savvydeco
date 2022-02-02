const Express = require('express');
const userDb = require('../models/user');


function index(req,res){
    userDb.find({}, function(err, users){
        res.render('users/index'), {users, user: req.user}
    });

}

// //oneuser with id after signin
// const oneUser = (req,res) => {
//     const context = db.user.findById(req.params.id)
//     res.render('index', {
//         user:context
//     })
// }

const oneUser = (req, res) => {
	userDb.findById(req.params.id, (err, foundUser) => {
		if (err) res.send(err);

		const context = { user: foundUser };
		res.render("index", context);
	});
};


module.exports = {
   index,
   oneUser
}
