const express = require('express');
const app = express();

//middleware to view/home/index
app.use(express.static('./app/public'));

app.set('view engine','ejs');
app.set('views', './app/views');

module.exports = app;