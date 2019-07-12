var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');

// signup render
router.get('/signup', function (req, res, next) {
  res.render('signup');
});


module.exports = router;
