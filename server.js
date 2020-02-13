var createError = require('http-errors');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller');
var logger = require('morgan');

app.use(logger('dev'));
// app.use(function(req, res, next) {
//     next(createError(404));
//   });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);