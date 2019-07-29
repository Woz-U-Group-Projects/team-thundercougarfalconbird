var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require("../services/auth");

router.post('/input', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user.Admin === true) {
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
        } else {
          res.render('error', { message: 'You are not a Admin' })
        }
      })
  } else {
    res.render('error', { message: 'Must be logged in' }
    );
  }
});

router.get('/productlist', function(req, res, next) {
  models.products
  .findAll({})
  .then(foundProducts => {
    const products = foundProducts.map(product =>({
      productId: product.productId,
      productName: product.productName,
      price: product.price,
      department: product.department,
      style: product.style,
      description: product.description
    }));
    res.send(JSON.stringify(products));
  });
});

router.get('/productview', function(req, res, next) {
  models.products
  .findAll({})
  .then(foundProducts => {
    const products = foundProducts.map(product =>({
      productId: product.productId,
      productName: product.productName,
      price: product.price,
      department: product.department,
      style: product.style,
      description: product.description
    }));
    res.send(JSON.stringify(products));
  });
});

router.get('/productview/:id', function(req, res, next) {
  models.products
  .findOne({
    where: { productId: parseInt(req.params.id)}
  })
  .then(foundProducts => {
    res.send(JSON.stringify(foundProducts));
  });
});

module.exports = router;
