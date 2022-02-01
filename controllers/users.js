const { request, response } = require('express');
const User = require('../models/user');

module.exports = {
    index,
}

function index(req,res){
    User.find({}, function(err, users){
        res.render('users/index'), {users, user: req.user}
    });
}

function userProfile(req,res){
    try {
        let userPro = await collection.findOne({"googleId": request.params.googleId});
        response.send(userPro);
    }  catch (e) {
        response.status(500).send({message: e.message});
    }};

