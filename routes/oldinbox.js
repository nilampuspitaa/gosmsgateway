var express = require('express');
var router = express.Router();

var db = require("../config/database"); //deklarasi database dari file database.js

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('oldinbox');
});

router.post('/', function(req, res, next) {
  res.render('oldinbox');
});

router.get('/reply-sms-text', function(req, res, next) {
  res.render('replytext');
});

router.get('/reply-sms-template', function(req, res, next) {
  res.render('replytemplate');
});

router.get('/inbox-forward', function(req, res, next) {
  res.render('forwardsms');
});

router.get('/inbox-add-phonebook', function(req, res, next) {
  res.render('inboxphone');
});

module.exports = router;