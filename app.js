var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
var axios = require('axios');
var moment = require('moment');
const mongoose = require('mongoose');
var _ = require('lodash');
var post = require('./models/posts');


//imported routers - Important! also add them to app.use
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var freeleticsRouter = require('./routes/freeletics');
var twitchRouter = require('./routes/twitch');
var usersRouter = require('./routes/users');
var main_routersRouter = require('./routes/main_routers');
var sitemap = require('./sitemap.js');


var _ = require('lodash');
var app = express();


app.locals.moment = moment;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//seo - prerender
// app.use(require('prerender-node').set('prerenderToken', 'WYvHTUp8b1o39TJeidML'));

//routers 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users', main_routersRouter);
// app.use('/api', apiRouter, freeleticsRouter, twitchRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;