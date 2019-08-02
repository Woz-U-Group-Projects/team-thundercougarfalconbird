var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require("../services/auth");

router.post('/input/:id', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user.userId === parseInt(req.params.id)) {
          models.products
          .findOrCreate({
            where: {
              productName: req.body.productName
            },
            defaults: {
              style: req.body.style,
              price: req.body.price,
              description: req.body.description,
              inventory: req.body.inventory
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
      style: product.style,
      description: product.description,
      inventory: product.inventory
    }));
    res.send(JSON.stringify(products));
  });
});

//Get user_productlist
router.get('/user_productlist/:id', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
      authService.verifyUser(token).then(user =>{
      if (user.userId === parseInt(req.params.id)){
      models.users
        .findOne({
          attributes:['userId', 'firstName'],
          where: {
            userId: parseInt(req.params.id)
          },
          include: [{
            model: models.products,
            attributes: ['productId', 'productName', 'inventory', 'style', 'price', 'description']
          }]
        })
        .then(user_product => {
          res.send(JSON.stringify(user_product));
        })}});
  } else {
    res.render("Please Log in")
  }
});

router.get('/productview', function(req, res, next) {
  models.products
  .findAll({})
  .then(foundProducts => {
    const products = foundProducts.map(product =>({
      productId: product.productId,
      productName: product.productName,
      price: product.price,
      style: product.style,
      description: product.description,
      inventory: product.inventory
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
