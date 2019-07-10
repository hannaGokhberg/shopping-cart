const express = require('express');
const app = express();
const productsRoutes = express.Router();

let Products = require('../models/Products');

// Defined get data(index or listing) route
productsRoutes.route('/').get(function (req, res) {
    Products.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

// Defined edit route
productsRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  console.log(id);
  Products.findById(id, function (err, products){
      res.json(products);
  });
});



module.exports = productsRoutes;