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
    ,
    img:
    {
        data: Buffer,
        contentType: String
    }
},
{
    timestamps:true
});


 const Product = mongoose.model("Product", productSchema);

 module.exports = Product