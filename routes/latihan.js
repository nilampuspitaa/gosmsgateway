var express = require('express');
var router = express.Router();

var db = require("../config/database"); //deklarasi database dari file database.js

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('latihan', { title: 'Tabel Mahasiswa' });
});

router.post('/', function(req, res, next) {
    res.render('latihan', { title: 'Tabel Mahasiswa' });
    
    var nim = req.body.nim;
    var nama = req.body.nama;
    var tempatlahir = req.body.tempatlahir;
    var hobi = req.body.hobi;
    var alamat = req.body.alamat;
    var email = req.body.email;
    var notelp = req.body.notelp;
    var kewarganegaraan = req.body.kewarganegaraan;

    // var sql = 'INSERT INTO tbl_mahasiswa (nim, nama, tempatlahir, hobi, alamat, email, notelp, kewarganegaraan) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    // db.query(sql, [nim, nama, tempatlahir, hobi, alamat, email, notelp, kewarganegaraan], function(err, result){
    //     if(!err) {
    //     console.log("Input Sukses!");
    //     } else {
    //     console.log("Input Gagal!");
    //     }
    // });

      console.log(req.body.nim); //mengambil data di form index.jade
  console.log(req.body.nama);
  console.log(req.body.tempatlahir);
  console.log(req.body.hobi);
  console.log(req.body.alamat);
  console.log(req.body.email);
  console.log(req.body.notelp);
  console.log(req.body.kewarganegaraan);
});

module.exports = router;