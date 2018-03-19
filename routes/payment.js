var request = require('request');

var base64 = require('base-64');
var express = require('express');
var router = express.Router();

var db = require("../config/database"); //deklarasi database dari file database.js

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('group');
// });


router.post('/handler', function(req, res, next) {
    var parsedData = JSON.parse(JSON.parse(req.body));
    res.send(JSON.stringify(parsedData));
    console.log(req.body);
    res.send(req.body);
});

router.get('/token', function(req, res, next) {
    var kirim1 = {
        'card_number' : '4111111111111111',
        'client_key' : CLIENT_KEY
    }
    get('token', headers, kirim1, (hasil) => {
        res.send(hasil);
    })
});

router.get('/charge/permata', function(req, res, next) {
    var kirim1 = {
        "payment_type": "bank_transfer",
        "bank_transfer": {
          "bank": "permata",
          "permata": {
            "recipient_name": "PT. PLN (Persero)"
          }
        },
        "transaction_details": {
          "order_id": "H17554",
          "gross_amount": 100000
        }
      }
    post('charge', headers, kirim1, (hasil) => {
        res.send(hasil);
    })
});



router.get('/charge/bca', function(req,res,next){
    var kirim1 = {
        "payment_type": "bank_transfer",
        "transaction_details": {
            "gross_amount": 50000,
            "order_id": "H17561"
        },
        "customer_details": {
            "email": "dyah1431062@sttpln.ac.id",
            "first_name": "nilam",
            "last_name": "puspita",
            "phone": "+6285 946 350 992"
        },
        "item_details":
        {
           "id": "1388998298204",
           "price": 50000,
           "quantity": 1,
           "name": "Tambah Daya 1300 kWh"
        },
        "bank_transfer": {
            "bank": "bca",
            "bca": {
              "recipient_name": "PT. PLN (Persero)"
            }
        }
    }
    post('charge', headers, kirim1, (hasil) => {
        res.send(hasil);
    })
});

router.get('/charge/mandiri', function(req, res, next){
    var kirim1 = {
        "payment_type": "echannel",
        "transaction_details": {
            "order_id": "H17557",
            "gross_amount": 95000
            },
        "item_details": [
            {
              "id": "a1",
              "price": 50000,
              "quantity": 1,
              "name": "Pemasangan Baru"
            },
            {
             "id": "a2",
              "price": 45000,
              "quantity": 1,
              "name": "Tambah Daya"
            }
        ],
        "customer_details": {
            "email": "dyah1431062@sttpln.ac.id",
            "first_name": "nilam",
            "last_name": "puspita",
            "phone": "+6285 946 350 992"
        },
        "echannel" : {
            "bill_info1" : "Payment For:",
            "bill_info2" : "debt"
        }
    }
    post('charge', headers, kirim1, (hasil) => {
        res.send(hasil);
    })
});

router.get('/charge/bni', function(req, res, next){
    var kirim1 = {
        "payment_type": "bank_transfer",
        "transaction_details": {
            "gross_amount": 10000,
            "order_id": "H17558"
        },
        "customer_details": {
            "email": "dyah1431062@sttpln.ac.id",
            "first_name": "Nilam",
            "last_name": "Puspita",
            "phone": "+6285 946 350 992"
        },
        "item_details": [
        {
           "id": "1388998298204",
           "price": 5000,
           "quantity": 1,
           "name": "Ayam Zozozo"
        },
        {
           "id": "1388998298205",
           "price": 5000,
           "quantity": 1,
           "name": "Ayam Xoxoxo"
        }
       ],
       "bank_transfer": {
        "bank": "bni",
        "bni": {
          "recipient_name": "PT. PLN (Persero)"
        }
    }
    }
    post('charge', headers, kirim1, (hasil) => {
        res.send(hasil);
    })
});
router.get('/cancel/:id', function(req, res, next){
    var kirim1 = {};
    post(req.params.id+'/cancel', headers, kirim1, (hasil) => {
        res.send(hasil);
    })
});


const SERVER_KEY = 'SB-Mid-server-HIeoIFQ7BlFjWaZcTyq6Yp8T';
const CLIENT_KEY = 'SB-Mid-client-PQv4Ev_EDv56eRdi';
var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Basic '+base64.encode(SERVER_KEY+':')
}

function get(path, header, data, callback){
    var options = {
        url: 'https://api.sandbox.midtrans.com/v2/'+path,
        method: 'GET',
        headers: header,
        qs: data
    };
    request(options, function (error, response, body) {
        var output = JSON.parse(body);
        callback(output);
    });
}  

function post(path, header, data, callback){
    var options = {
        url: 'https://api.sandbox.midtrans.com/v2/'+path,
        method: 'POST',
        headers: header,
        json: data
    };
    request(options, function (error, response, body) {
        // var output = JSON.parse(body);
        callback(body);
    })
}


module.exports = router;