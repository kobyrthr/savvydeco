const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Categories = require("../models/categories");
const User = require('../models/user');

const productSchema = new mongoose.Schema({
    id:{type:String},
    title: {type: String, required:true,},
    // listedDate: {type: String},
    shortdes: {type:String}, 
    longdes: {type:String},
    seller:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'user',

        }
    , // google auth grabbing process.env.GOOGLE_CLIENT_ID
    // googleId: {type: String},
},
{
    timestamps:true
});


 const Product = mongoose.model("Product", productSchema);

 module.exports = Product