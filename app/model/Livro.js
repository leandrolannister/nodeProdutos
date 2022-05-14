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
  }
}