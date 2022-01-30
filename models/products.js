const mongoose = require('mongoose');
const Categories = require("../models/categories");
const User = require('../models/user');

const productSchema = new mongoose.Schema({
    id:{type:String},
    title: {type: String, required:true,},
    // listedDate: {type: String},
    shortdes: {type:String}, 
    longdes: {type:String},
    seller: {type:String}, // google auth grabbing process.env.GOOGLE_CLIENT_ID
    // sellerLocation: {type:String},
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories'
}],
    googleId: {type: String},
},
{
    timestamps:true
});


module.exports = mongoose.model("Product", productSchema);