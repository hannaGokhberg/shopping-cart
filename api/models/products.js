const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for products
let Products = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  availability: {
    type: Boolean
  },
  water: {
    type: Number
  },
  light: {
    type: Number
  },
  picture: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'products'
});

module.exports = mongoose.model('Products', Products);