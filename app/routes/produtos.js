const route = require('express').Router();
const { json } = require('express/lib/response');
const Livro = require('../class/Livro.js');

route.get('/', (req,res) => {    
  Livro.all().then(data =>     
     res.format({       
       html: () => {
         res.render('produtos/lista',{ livros:data })
       },
       json: () => {
         res.json(data)
       }
     })
  ).catch(error => res.send(error));
});

route.post('/', (req,res) => {
  let livro = new Livro(req.body);
  livro.store()
  .then(res.redirect('/produtos'))
  .catch(error => res.render('produto/erros', {errors:error}))  
});

route.get('/form', (req,res) => {
  res.render('produtos/form')
});


module.exports = route;