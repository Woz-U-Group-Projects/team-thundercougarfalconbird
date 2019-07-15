var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');

// signup render
router.get('/signup', function (req, res, next) {
  res.render('signup');
});

// signup
router.post('/signup', function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username,
        Email: req.body.email
      },
      defaults: {
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        Password: req.body.password
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('login');
      } else {
        res.render('error', { message: 'Username or Email already exsist.' });
      }
    });
});

module.exports = router;
