const Express = require('express');
const userDb = require('../models/user');


function index(req,res){
    userDb.find({}, function(err, users){
        res.render('users/index'), {users, user: req.user}
    });

}

// //oneuser with id after signin


const oneUser = (req, res) => {
	userDb.findById(req.params.id, (err, foundUser) => {
		if (err) res.send(err);

		const context = { user: foundUser };
		res.render("index", context);
	});
};



//update 
//logic to put/replace data in db
const updateUser = (req, res) => {
	userDb.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				...req.body,
			},
		},
		//create new object in database
		{ new: true },
		//callback function after the update has completed
		(err, updatedUser) => {
			if (err) res.send(err);

            res.redirect(`/users/${updatedUser._id}`);
			res.render(`/users/${updatedUser._id}`);
		}
	);
};


module.exports = {
   index,
   oneUser,
   updateUser,
}
