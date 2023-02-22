const mongoose = require('mongoose');
const user = require('./user');
const products = require('./products');



const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});


const shoppingCartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  items: [cartItemSchema],
}, {
  timestamps: true,
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;
