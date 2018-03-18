var cors = require('cors');
var express = require('express'); //menghubungkan frontend dan backend
var path = require('path'); //menkoneksi antar form
var favicon = require('serve-favicon'); //untuk icon di 
var logger = require('morgan'); //mencatat error
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); //memindahkan data untuk method GET dan POST
var bodyParserJsonError = require('express-body-parser-json-error');

var index = require('./routes/index'); //routing untuk indeks.. kalo mau tambah routing tinggal copy dan ganti nama filenya
var home = require('./routes/home'); 
var outbox = require('./routes/outbox'); 
var queue = require('./routes/queue'); 
var schedule = require('./routes/schedule'); 
var smstext = require('./routes/smstext'); 
var smstemplate = require('./routes/smstemplate'); 
var smsbroadcast = require('./routes/smsbroadcast'); 
var phonebook = require('./routes/phonebook'); 
var addphonebook = require('./routes/addphonebook'); 
var group = require('./routes/group'); 
var addgroup = require('./routes/addgroup'); 
var addphonegroup = require('./routes/addphonegroup'); 
var upload = require('./routes/upload'); 
var changepassword = require('./routes/changepassword'); 
var template = require('./routes/template'); 
var report = require('./routes/report'); 
var newinbox = require('./routes/newinbox'); 
var oldinbox = require('./routes/oldinbox'); 
var payment = require('./routes/payment'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //dimana letak folder views nya
app.set('view engine', 'jade'); //frontend nya itu pake jade --> html2jade.org

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //folder untuk template(style)
app.use(bodyParserJsonError());

app.use('/', index); //cara pemanggilan di url browser
app.use('/home', home);
app.use('/sms/outbox', outbox);
app.use('/sms/queue', queue);
app.use('/sms/schedule', schedule);
app.use('/send/smstext', smstext);
app.use('/send/smstemplate', smstemplate);
app.use('/send/smsbroadcast', smsbroadcast);
app.use('/phonebook/phonebook', phonebook);
app.use('/phonebook/addphonebook', addphonebook);
app.use('/group/group', group);
app.use('/group/addgroup', addgroup);
app.use('/group/addphonegroup', addphonegroup);
app.use('/group/upload', upload);
app.use('/setting/changepassword', changepassword);
app.use('/setting/template', template);
app.use('/setting/report', report);
app.use('/setting/newinbox', newinbox);
app.use('/setting/oldinbox', oldinbox);
app.use('/payment', payment);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
