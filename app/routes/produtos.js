const route = require('express').Router();
const Livro = require('../class/Livro.js');

route.get('/', (req,res) => {    
  Livro.all()
  .then(data => res.render('produtos/lista',{ livros:data }))      
  .catch(error => res.send(error));
});

route.get('/form', (req,res) => {
  res.render('produtos/form')
});

route.post('/', (req,res) => {
  let livro = new Livro(req.body);
  livro.store()
  .then(res.redirect('/produtos'))
  .catch(error => res.render('produto/erros', {errors:error}))  
});

module.exports = route;