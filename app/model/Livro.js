const connection = require('../infra/connection.js');

module.exports = {
  all(){
    return new Promise((resolve,reject) => {
      connection.query('SELECT * FROM livros ORDER BY id desc',(error,data) => {
        if (error)
          reject(error);
        resolve(data);  
      });
    }); 
  },

  store(livro){
    return new Promise((resolve,reject) => {
      connection.query(
        `INSERT INTO LIVROS SET ?`,[livro],
        (error) => {
          if (error)
            reject(`Erro cadastro livro ${this.livro}`)
          resolve();  
        }  
      );      
    });  
  }
}