const express = require('express');
const app = express();
const ordersRoutes = express.Router();

// Require Business model in our routes module
let Order = require('../models/orders');

// Defined store route
ordersRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  let orders = new Order(req.body);
  orders.save()
    .then(orders => {
      res.status(200).json({'orders': 'order in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

module.exports = ordersRoutes;