const route = require('express').Router();
const Livro = require('../class/Livro.js');

route.get('/', (req,res) => {
    const livro = new Livro();

    livro.all()
    .then(data => res.render('produtos/lista',{ livros:data }))      
    .catch(error => res.send(error));
});

route.get('/form', (req,res) => {
    res.render('produtos/form')
});

module.exports = route;