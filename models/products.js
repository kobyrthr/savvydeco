const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Categories = require("../models/categories");
const User = require('../models/user');
const Image = require('../models/images');

const productSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String },
    listedDate: { type: Date, default: Date.now },
    shortdes: { type: String },
    longdes: { type: String },
    seller:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',

    }
    ,
    image:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image',
    }
},
    {
        timestamps: true
    });


const Product = mongoose.model("Product", productSchema);

module.exports = Product