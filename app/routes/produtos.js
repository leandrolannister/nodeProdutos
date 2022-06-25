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
   body('titulo').notEmpty().withMessage('Informe um valor para titulo'),
   body('titulo').isLength({min:2}).withMessage('Informe um titulo com três caracteres'),
   body('preco').notEmpty().withMessage('Informe um preço'),
   body('preco').custom(preco => {
      if (!Number(preco))
        throw Error("Preço deve ser um tipo númerico");        
      return true;  
   })

],(req,res) => {

  const errors = validationResult(req);
  const errosValidacao = errors.array();
  const produto = req.body; 
  
  if (!errors.isEmpty())
    res.format({
      html: () => {
        res.render('produtos/form', {
          errosValidacao:errosValidacao,
          produto:produto
        })
      } 
    });
    
  
  let livro = new Livro(req.body);
  livro.store().then(
    res.redirect('/produtos'))
    .catch(error => res.render('produto/erros', {errosValidacao:errors.array()}))  
});

route.get('/form', (req,res) => {   
  res.render('produtos/form', {errosValidacao:{},produto:{}})
});


module.exports = route;