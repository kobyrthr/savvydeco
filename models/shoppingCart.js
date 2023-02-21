const mongoose = require('mongoose');
const user = require('./user');
const products = require('./products');



const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});


const shoppingCartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  items: [cartItemSchema],
}, {
  timestamps: true,
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;