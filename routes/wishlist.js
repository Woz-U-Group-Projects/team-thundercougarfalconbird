var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require("../services/auth");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;
