const express = require('express');
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

//middleware to view/home/index
app.use(express.static('./app/public'));

app.set('view engine','ejs');
app.set('views', './app/views');
app.set('io',io);

module.exports = app;