var express = require('express');
var router = express.Router();

var db = require("../config/database"); //deklarasi database dari file database.js

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM tbl_mahasiswa';
    db.query(sql, function(err, rows, result){
        if(!err){
            res.render("view", { data : rows });
        } else {
            res.redirect("/"); 
        }
    });
});

router.post('/', function(req, res, next) {
    res.render('view', { title: 'View Page' });
  });

module.exports = router;