var express = require('express');
var router = express.Router();

var db = require("../config/database"); //deklarasi database dari file database.js

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('phonebook');
});

router.post('/', function(req, res, next) {
  res.render('phonebook');
});

router.get('/viewcontact', function(req, res, next) {
  res.render('viewcontact');
});

router.get('/sendtext', function(req, res, next) {
  res.render('sendtext');
});

router.get('/sendtemplate', function(req, res, next) {
  res.render('sendtemplate');
});

router.get('/add-phone-to-group', function(req, res, next) {
  res.render('detailaddphone');
});

router.get('/edit', function(req, res, next) {
  res.render('editphone');
});

module.exports = router;