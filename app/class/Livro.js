const Model = require('../model/Livro.js');

class Livro{

  all(){
    return Model.all()
    .then(data => data)
    .catch(error => error);    
  }
}
module.exports = Livro;