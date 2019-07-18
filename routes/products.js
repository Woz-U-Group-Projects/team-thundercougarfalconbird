var express = require('express');
var router = express.Router();
var models = require('../models');

router.post("/input", function(req, res, next) {
  models.products
    .findOrCreate({
      where: {
        productName: req.body.productName
      },
      defaults: {
        department: req.body.department,
        style: req.body.style,
        price: req.body.price,
        description: req.body.description,
        productImage: req.body.productImage
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.json("Product successfully created");
      } else {
        res.json("This product already exists");
      }
    });
});

module.exports = router;
