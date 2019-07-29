var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require("../services/auth");

//Get wishlist
router.get('/wish/:id', function (req, res, next) {
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
            attributes: ['productId', 'productName', 'department', 'style', 'price', 'description']
          }]
        })
        .then(wishlist => {
          res.send(JSON.stringify(wishlist));
        })}});
  } else {
    res.render("Please Log in")
  }
});

//Add to wishlist
router.post('/addwish', function (req, res, next) {

});

module.exports = router;
