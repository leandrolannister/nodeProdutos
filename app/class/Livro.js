const Model = require('../model/Livro.js');

class Livro{

  constructor({titulo,preco,descricao}){
    this.titulo = titulo,
    this.preco = preco,
    this.descricao = descricao
  }

  static all(){
    return Model.all()
    .then(data => data)
    .catch(error => error);    
  }

  store(){
    this.checkFields();
    
    return Model.store({
      titulo: this.titulo,
      preco: this.preco,
      descricao: this.descricao
    });
  }  

  checkFields(){
    if (typeof this.titulo !== 'string')
      throw new Error(`Titulo must be a string`);

    if(this.titulo.length == 0)
      throw new Error(`Titulo is empty`);  

    if(this.preco.length == 0)
      throw new Error(`Preço is empty`);    
  }
}
module.exports = Livro;