const Express = require('express');
const user = require('../models/user');
const userDb = require('../models/user');
const Products = require('../models/products');



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
// const updateUser = (req, res) => {
// 	userDb.find(
// 		{},
// 		{
// 			$set: {
// 				...req.body,
// 			},
// 		},
// 		//create new object in database
// 		{ new: true },
// 		console.log(user.name),
// 		//callback function after the update has completed
// 		(err, updatedUser) => {
// 			if (err) res.send(err);

// 			console.log(user)
//            // res.redirect(`/users/${user._id}`);
// 			res.render("users/show", { user: req.user});
// 		}
// 	);
// };

// //working useridpage
// const updateUser = (req,res) => {
// 	const user = userDb.findById(req.params.id)
// 	res.render("users/show", {user: user});
// }


function updateUser(req,res){
    userDb.findById(req.params.id, function (err,user){
        console.log('THIS IS THE USER ID',user.id)
        if (err) {console.log(err)}
        else {            
            Products.find({seller:user.id},function(err,products){
                if (err){
                    console.log("There was an error:",err)
                }
                else {
                    res.render('users/show',{
                        products, user
                        })
                }
            })
        }
    })
}


// app.get('/users/:id', function (req,res){
// 	const user = userDb.findById(req.params.id)
// 	res.render("users/show", {user: user});
// 	console.log(user)
   
//   })
  

//dont need can be repurposed
// const showUser = (req, res) => {
//     userDb.findById(req.params.id)
//     // turns ids into the data from their model
//         .populate("user")
//         // functioning like userDb.findById()
//         // allowing us to reference documents in other collections by automatically replacing the specified path/"field" in the document(s) from other collections
//         .exec((err, foundUser) => {
//             if (err) res.send(err);

//             const context = { user: foundUser };
// console.log("username" + req.user.name)
//             res.render("users/show");
//         });
// };


module.exports = {
   index,
   oneUser,
   updateUser,
//    showUser
}
