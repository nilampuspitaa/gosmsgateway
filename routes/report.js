var express = require('express');
var router = express.Router();

var db = require("../config/database"); //deklarasi database dari file database.js

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('report');
});

router.post('/', function(req, res, next) {
  res.render('report');
});

module.exports = router;