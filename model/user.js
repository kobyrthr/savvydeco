const mongoose = require('mongoose');
const Product = require('./models/products.js')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    Location: String, //could use google auth var
    products: [{
        type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
}],
    googleId: String,
},
{
    timestamps:true
});


module.exports = mongoose.model("User", userSchema);