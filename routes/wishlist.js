var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require("../services/auth");

//Get wishlist
router.get('/wish', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token).then(
      models.wishlist
        .findAll({})
        .then(wishlist => {
          res.send(JSON.stringify(wishlist));
        }));
  } else {
    res.json("Log in")
  }
});

//Add to wishlist
router.post('/addwish', function (req, res, next) {

});

module.exports = router;
