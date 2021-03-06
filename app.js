var createError = require('http-errors');
var express = require('express');
var path = require('path');
require("dotenv").config();
var cookieParser = require('cookie-parser');
const db = require('./config/config').get(process.env.NODE_ENV);
//var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('node_modules/bootstrap/dist/css/'));
app.use(express.static('node_modules/bootstrap/dist/js/'));
app.use(express.static('node_modules/@popperjs/core/dist/cjs/'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/@fortawesome/fontawesome-free/css/'));
app.use(express.static('node_modules/@fortawesome/fontawesome-free/webfonts/'));
app.use(express.static('node_modules/@fortawesome/fontawesome-free/js//'));
app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
