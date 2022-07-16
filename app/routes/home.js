const route = require('express').Router();
const Livro = require('../class/Livro.js');

route.get('/', (req,res) => {    
  Livro.all().then(data =>     
    res.render('home/index',{ livros:data })    
    ).catch(error => res.send(error));
  });

module.exports = route;