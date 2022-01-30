const mongoose = require('mongoose');
const Product = require('../models/products')

const userSchema = new mongoose.Schema({
   // id:{type: String},
   googleId: String ,
    name: String,
    email: String,
    Location: String, //could use google auth var
    products: [{
        type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
}]
    
},
{
    timestamps:true
});


module.exports = mongoose.model("User", userSchema);