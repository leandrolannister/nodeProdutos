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
    return Model.store({
      titulo: this.titulo,
      preco: this.preco,
      descricao: this.descricao
    });
  }    
}
module.exports = Livro;