const connection = require('../infra/connection.js');

module.exports = {
  all(){
    return new Promise((resolve,reject) => {
      connection.query('SELECT * FROM livros',(error,data) => {
        if (error)
          reject(error);
        resolve(data);  
      });
    }); 
  },

  store(livro){
    return new Promise((resolve,reject) => {
      connection.query(
        `INSERT INTO LIVROS(titulo,preco,descricao)VALUES(?,?,?)`,
        [
          livro.titulo,
          livro.preco,
          livro.descricao
        ],
        (error) => {
          if (error)
            reject(`Erro cadastro livro ${this.livro}`)
          resolve();  
        }  
      );      
    });  
  }
}