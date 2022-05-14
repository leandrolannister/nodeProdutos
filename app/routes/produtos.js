const route = require('express').Router();
const Livro = require('../class/Livro.js');

route.get('/', (req,res) => {
    const livro = new Livro();

    livro.all()
    .then(data => res.render('produtos/lista',{ livros:data }))      
    .catch(error => res.send(error));
});
module.exports = route;