const route = require('express').Router();
const Livro = require('../class/Livro.js');
const { body, validationResult } = require('express-validator');

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

route.post('/',[
   body('titulo').notEmpty().withMessage('Informe um valor para titulo')
],(req,res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty())
    res.redirect('/produtos/form');
  
  let livro = new Livro(req.body);
  livro.store().then(
      res.redirect('/produtos'))
  .catch(error => res.render('produto/erros', {errors:error}))  
});

route.get('/form', (req,res) => {
  res.render('produtos/form')
});


module.exports = route;