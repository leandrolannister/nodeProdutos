const connection = require('../infra/connection.js');

class Livro{

  all(){
    return new Promise((resolve,reject) => {
      connection.query('SELECT * FROM livros',(error,data) => {
        if (error)
          reject(error);

        resolve(data);  
      });
    });  
  }
}
module.exports = Livro;