const express = require('express');
const app = express();
var mongoose = require('mongoose');
var config = require('./config.json');
var jwt = require('express-jwt');
var bodyParser = require('body-parser');

var http = require('http').Server(app);
var routes = require('./routes/quotes')(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

http.listen(config.expressport);
console.log('Running node express server...');

mongoose.connect(config.mongodb);
