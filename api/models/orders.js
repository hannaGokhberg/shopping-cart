const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Orders = new Schema({
  name: {
    type: String
  },
  credit_number: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String 
  }
},{
    collection: 'orders'
});

module.exports = mongoose.model('Orders', Orders);