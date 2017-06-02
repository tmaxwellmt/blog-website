require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Article = require('./models/article');
var routes = require('./routes/index');
var session = require('express-session');
var passport = require('passport');
var auth = require('./routes/auth');
require('./config/database-connect') ();

if(process.env.SEED_DATABASE === "true") {
  require('./config/database-seeder')();
}

var app = express();
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/api/articles');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
 secret: 'blahblahblah'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
require('./config/passport')(passport); // pass passport for configuration
require('./routes/auth')(app, passport); // load our routes and pass in our app and fully configured passport

app.get('/test', function (req, res) {
  res.json({message: "App functioning properly"})
});

// app.get('/', function (req, res) {
//   res.render('index')
// });

routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
      .send({
        message: err.message,
        error: err
      })
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
    .send({
      message: err.message,
      error: {}
    })
});

module.exports = app;
